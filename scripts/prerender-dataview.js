/**
 * Pre-render Dataview at publish time.
 *
 * Obsidian's Dataview plugin only runs inside Obsidian — on the published
 * site its blocks show up as raw code. This module runs after the vault sync
 * and replaces `dataview` / `dataviewjs` blocks and inline `$=` expressions
 * with static HTML/markdown snapshots computed from a full content index
 * (inlink counts, mtimes, sizes, frontmatter).
 *
 * Recognized shapes are rendered faithfully (rank bars, people grid, book
 * shelf, maturity lists, tables). Anything unrecognized is replaced with a
 * small "live view in Obsidian" note — raw query code never ships.
 *
 * Also rewrites obsidian:// links (dead in a browser) to plain text.
 */

import fs from "fs";
import path from "path";

/* ----------------------------- index building ----------------------------- */

function walkMd(dir, out = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkMd(full, out);
    else if (entry.endsWith(".md")) out.push(full);
  }
  return out;
}

function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---\n?/);
  const fm = {};
  if (!m) return { fm, body: content };
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z_-]+):\s*(.*)$/);
    if (kv) fm[kv[1].toLowerCase()] = kv[2].replace(/^["']|["']$/g, "").trim();
  }
  return { fm, body: content.slice(m[0].length) };
}

// Quartz slug: path segments with spaces replaced by dashes, no extension.
function slugify(relPath) {
  return relPath
    .replace(/\.md$/, "")
    .split("/")
    .map((seg) => seg.replace(/\s+/g, "-"))
    .join("/");
}

export function buildIndex(contentDir, vaultDir) {
  const files = walkMd(contentDir);
  const pages = [];
  const byName = new Map();

  for (const full of files) {
    const rel = path.relative(contentDir, full).replace(/\\/g, "/");
    const content = fs.readFileSync(full, "utf8");
    const { fm, body } = parseFrontmatter(content);
    // prefer the vault file's mtime (content copies are freshly written)
    let mtime = fs.statSync(full).mtime;
    if (vaultDir) {
      const vaultFile = path.join(vaultDir, rel);
      if (fs.existsSync(vaultFile)) mtime = fs.statSync(vaultFile).mtime;
    }
    const page = {
      rel,
      slug: "/" + slugify(rel),
      name: path.basename(rel, ".md"),
      title: fm.title || path.basename(rel, ".md"),
      fm,
      mtime,
      size: Buffer.byteLength(body, "utf8"),
      outlinks: [...body.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g)].map((m) =>
        path.basename(m[1].trim())
      ),
      inlinks: 0,
    };
    pages.push(page);
    byName.set(page.name.toLowerCase(), page);
  }

  for (const p of pages) {
    for (const target of p.outlinks) {
      const hit = byName.get(target.toLowerCase());
      if (hit && hit !== p) hit.inlinks++;
    }
  }
  return { pages, byName };
}

/* ------------------------------- helpers ---------------------------------- */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmtShort = (d) => `${MONTHS[d.getMonth()]} ${d.getDate()}`;
const fmtLong = (d) => `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

const under = (pages, folder) => pages.filter((p) => p.rel.startsWith(folder.replace(/^\//, "") + "/") || p.rel === folder + ".md");
const mdLink = (p) => `[${p.title}](${p.slug})`;
const htmlLink = (p) => `<a href="${p.slug}" class="internal">${p.title}</a>`;
const LIVE_NOTE = `<p class="mw-prerendered-note">🔁 This view updates live in Obsidian; the website shows a snapshot from the last publish.</p>`;

/* --------------------------- block renderers ------------------------------ */

function renderDataviewBlock(query, ctx) {
  const { pages } = ctx;
  const from = query.match(/FROM\s+"([^"]+)"/i);
  let list = from ? under(pages, from[1]) : [...pages];

  for (const w of query.matchAll(/maturity\s*=\s*"([^"]+)"/gi)) {
    list = list.filter((p) => (p.fm.maturity || "") === w[1]);
  }
  for (const w of query.matchAll(/file\.name\s*!=\s*"([^"]+)"/gi)) {
    list = list.filter((p) => p.name !== w[1]);
  }

  if (/SORT\s+(length\(file\.inlinks\)|file\.inlinks)/i.test(query)) {
    list.sort((a, b) => b.inlinks - a.inlinks);
  } else if (/SORT\s+file\.mtime/i.test(query)) {
    list.sort((a, b) => b.mtime - a.mtime);
  }
  const limit = query.match(/LIMIT\s+(\d+)/i);
  if (limit) list = list.slice(0, Number(limit[1]));
  if (!list.length) return "*Nothing here yet.*";

  if (/^\s*LIST/im.test(query)) {
    return list.map((p) => `- ${mdLink(p)}`).join("\n");
  }
  if (/^\s*TABLE/im.test(query)) {
    const wantsLinks = /length\(file\.inlinks\)/i.test(query);
    const wantsDate = /dateformat\(file\.mtime/i.test(query);
    const second = wantsLinks ? "Links" : wantsDate ? "Updated" : "";
    const header = `| Note | ${second} |\n| --- | --- |`;
    const rows = list.map((p) => {
      const v = wantsLinks ? p.inlinks : wantsDate ? fmtShort(p.mtime) : "";
      return `| ${mdLink(p)} | ${v} |`;
    });
    return [header, ...rows].join("\n");
  }
  return null; // unrecognized → caller substitutes the live-view note
}

function renderFieldBars(code, ctx) {
  const { pages } = ctx;
  const fields = [...code.matchAll(/\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)"\]/g)].map((m) => ({
    name: m[1],
    folder: m[2],
    color: m[3],
  }));
  const counts = fields
    .map((f) => ({ ...f, n: under(pages, f.folder).length }))
    .sort((a, b) => b.n - a.n);
  const max = counts[0]?.n || 1;
  const rows = counts.map((f, i) => {
    const w = Math.max(4, Math.round((f.n / max) * 100));
    return `<div class="mw-rank"><span class="mw-rank-n" style="color:${f.color}">${i + 1}</span><span class="mw-rank-label">${f.name}</span><span class="mw-bar"><span class="mw-bar-fill" style="width:${w}%;background:${f.color}"></span></span><span class="mw-rank-count">${f.n}</span></div>`;
  });
  return `<div>${rows.join("")}</div>\n${LIVE_NOTE}`;
}

function renderDataviewJsBlock(code, ctx, currentPage) {
  const { pages } = ctx;

  // People grid (People Home)
  if (code.includes('cls: "mw-people"') || code.includes("mw-person")) {
    const palette = ["#d8552f", "#2f7e78", "#4a7ba6", "#c08a2e", "#96597c", "#6a5b9c", "#3e7a55", "#a4633a"];
    const people = under(pages, "wiki/people")
      .filter((p) => p.name !== "People Home")
      .sort((a, b) => a.name.localeCompare(b.name));
    const cards = people.map((p, i) => {
      const initial = p.title.trim().charAt(0).toUpperCase();
      const tag = (p.fm.tags || "").split(/[,\s]+/).filter((t) => t && t !== "person")[0]?.replace(/_/g, " ") || "";
      return `<div class="mw-person"><div class="mw-avatar" style="background:${palette[i % palette.length]}">${initial}</div>${htmlLink(p)}<span class="mw-chip">${tag}</span></div>`;
    });
    return `<div class="mw-people">${cards.join("")}</div>\n${LIVE_NOTE}`;
  }

  // Notes-by-field rank bars (Vault Stats) — has a `fields` array of paths.
  // Must run before the shelf check: its palette vars contain "mw-books".
  if (code.includes("const fields") && code.includes("mw-rank")) {
    return renderFieldBars(code, ctx);
  }

  // Book shelf (Books Home)
  if (code.includes("mw-shelf")) {
    const books = under(pages, "wiki/books")
      .filter((p) => p.name !== "Books Home")
      .sort((a, b) => a.name.localeCompare(b.name));
    const items = books.map((p) => {
      const cover = p.fm.banner
        ? `<img src="${p.fm.banner}" alt="${p.title} cover" loading="lazy" />`
        : `<div class="mw-book-fallback">${p.title}</div>`;
      return `<div class="mw-book"><a href="${p.slug}" class="internal" aria-label="${p.title}">${cover}</a><a href="${p.slug}" class="internal">${p.title}</a></div>`;
    });
    return `<div class="mw-shelf">${items.join("")}</div>\n${LIVE_NOTE}`;
  }

  // Most-backlinked rank bars (Vault Stats)
  if (code.includes("mw-rank") && code.includes("inlinks")) {
    const exclude = [...code.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
    const top = under(pages, "wiki")
      .filter((p) => !exclude.includes(p.name))
      .sort((a, b) => b.inlinks - a.inlinks)
      .slice(0, 10);
    const max = top[0]?.inlinks || 1;
    const rows = top.map((p, i) => {
      const w = Math.max(4, Math.round((p.inlinks / max) * 100));
      return `<div class="mw-rank"><span class="mw-rank-n">${i + 1}</span><span class="mw-rank-label">${htmlLink(p)}</span><span class="mw-bar"><span class="mw-bar-fill" style="width:${w}%"></span></span><span class="mw-rank-count">${p.inlinks}</span></div>`;
    });
    return `<div>${rows.join("")}</div>\n${LIVE_NOTE}`;
  }

  // "At a glance" paragraph (People/Books Home): N pages · last added date
  if (code.includes("dv.paragraph") && code.includes("mtime")) {
    const fromMatch = code.match(/dv\.pages\('"([^"]+)"/);
    if (fromMatch) {
      const folder = fromMatch[1].split(" ")[0];
      const list = under(pages, folder).filter((p) => !/Home$/.test(p.name));
      const latest = [...list].sort((a, b) => b.mtime - a.mtime)[0];
      const what = folder.includes("people") ? "people" : folder.includes("books") ? "books" : "notes";
      return `**${list.length}** ${what} · last added **${latest ? latest.mtime.toISOString().slice(0, 10) : "—"}**`;
    }
  }

  // Simple dv.list(...) sorted by mtime/name
  if (code.includes("dv.list(")) {
    const fromMatch = code.match(/dv\.pages\('"([^"]+)"/);
    if (fromMatch) {
      const folder = fromMatch[1].split(" ")[0];
      let list = under(pages, folder).filter((p) => !/Home$/.test(p.name));
      if (/mtime/.test(code)) list.sort((a, b) => b.mtime - a.mtime);
      else list.sort((a, b) => a.name.localeCompare(b.name));
      const limit = code.match(/\.limit\((\d+)\)/);
      if (limit) list = list.slice(0, Number(limit[1]));
      return list.map((p) => `- ${mdLink(p)}`).join("\n");
    }
  }

  return null;
}

/* ---------------------------- inline `$=` --------------------------------- */

function renderInline(expr, ctx, currentPage) {
  const { pages } = ctx;

  // words estimate: sum sizes / 6 / 1000 + "k"
  if (/file\.size\.values\.reduce/.test(expr)) {
    const total = under(pages, "wiki").reduce((a, p) => a + p.size, 0);
    return `${Math.round(total / 6 / 1000)}k`;
  }
  // page count: dv.pages('"X"').length [- N]
  const count = expr.match(/dv\.pages\('"([^"]+)"'\)\.length(?:\s*-\s*(\d+))?/);
  if (count) {
    return String(under(pages, count[1]).length - (count[2] ? Number(count[2]) : 0));
  }
  // reading time from current file size
  if (/dv\.current\(\)\.file\.size/.test(expr) && currentPage) {
    return String(Math.max(1, Math.ceil(currentPage.size / 1100)));
  }
  // current file mtime formatted
  if (/dv\.current\(\)\.file\.mtime/.test(expr) && currentPage) {
    return fmtLong(currentPage.mtime);
  }
  return null;
}

/* ------------------------------ main pass --------------------------------- */

export function prerenderContent(contentDir, vaultDir) {
  const ctx = buildIndex(contentDir, vaultDir);
  let touched = 0;

  for (const page of ctx.pages) {
    const full = path.join(contentDir, page.rel);
    let content = fs.readFileSync(full, "utf8");
    const before = content;

    // fenced dataview / dataviewjs blocks (also inside callouts). Obsidian writes
    // nested callouts with space-separated markers ("> > "), so the quote prefix
    // is one-or-more "> " groups — not just consecutive ">" — on both fences.
    content = content.replace(
      /(^|\n)((?:> ?)*)```(dataviewjs|dataview)\n([\s\S]*?)\n(?:> ?)*```/g,
      (match, lead, quote, lang, body) => {
        const clean = body.replace(/^(?:> ?)+/gm, "");
        const rendered =
          lang === "dataview"
            ? renderDataviewBlock(clean, ctx)
            : renderDataviewJsBlock(clean, ctx, page);
        const out = rendered ?? LIVE_NOTE;
        const requoted = quote ? out.split("\n").map((l) => quote + l).join("\n") : out;
        return lead + requoted;
      }
    );

    // inline `$= …`
    content = content.replace(/`\$=\s*([^`]+)`/g, (match, expr) => {
      return renderInline(expr.trim(), ctx, page) ?? "";
    });

    // obsidian:// links are dead in a browser — keep the label, drop the link
    content = content.replace(/\[([^\]]*)\]\(obsidian:\/\/[^)]*\)/g, "$1");

    if (content !== before) {
      fs.writeFileSync(full, content);
      touched++;
    }
  }
  return touched;
}
