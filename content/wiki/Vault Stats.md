---
title: Vault Stats
Created:
  - 2026-06-10
aliases:
  - Stats
  - Vault Stats
category: Index
tags:
  - index
  - dashboard
cssclasses:
  - wide-page
publish: false
publish: true
---

> [!card|hero dark spanfull]
> ###### THE VAULT, MEASURED
> # The shape of <span class="at-gradient">everything.</span>
> <p class="at-lead">Live numbers from the graph — what's biggest, what's most connected, and how the garden is growing.</p>
>
> **[[Master Home|← Back home]]**  ·  **[🔍 Search the vault](obsidian://search?query=)**

> [!grid|cols4]
>
>> [!card|step]
>> ###### NOTES
>> ### <span class="at-3xl">`$= dv.pages('"wiki"').length`</span>
>> across the whole vault
>
>> [!card|step]
>> ###### WORDS (EST.)
>> ### <span class="at-3xl">`$= Math.round(dv.pages('"wiki"').file.size.values.reduce((a,b)=>a+b,0)/6/1000) + "k"`</span>
>> of distilled knowledge
>
>> [!card|step]
>> ###### PEOPLE
>> ### <span class="at-3xl">`$= dv.pages('"wiki/people"').length - 1`</span>
>> minds behind the ideas
>
>> [!card|step]
>> ###### BOOKS
>> ### <span class="at-3xl">`$= dv.pages('"wiki/books"').length - 1`</span>
>> fully noted & shelved

## Most backlinked concepts

The load-bearing ideas — ranked by how many other notes point at them.

```dataviewjs
const exclude = ["Master Home", "index", "Vault Stats", "Technology Home"];
const top = dv.pages('"wiki"')
  .where(p => !exclude.includes(p.file.name))
  .sort(p => p.file.inlinks.length, 'desc')
  .limit(10)
  .array();
const max = top.length ? top[0].file.inlinks.length : 1;
const rows = top.map((p, i) => {
  const n = p.file.inlinks.length;
  const w = Math.max(4, Math.round((n / max) * 100));
  return `<div class="mw-rank">
    <span class="mw-rank-n">${i + 1}</span>
    <span class="mw-rank-label"><a class="internal-link" data-href="${p.file.path}" href="${p.file.path}">${p.title ?? p.file.name}</a></span>
    <span class="mw-bar"><span class="mw-bar-fill" style="width:${w}%; display:block;"></span></span>
    <span class="mw-rank-count">${n}</span>
  </div>`;
}).join("");
dv.el("div", rows);
```

## Notes by field

```dataviewjs
const fields = [
  ["Data Engineering", "wiki/technology/data-engineering", "var(--mw-de)"],
  ["Machine Learning", "wiki/technology/machine-learning", "var(--mw-ml)"],
  ["Cloud", "wiki/technology/cloud", "var(--mw-cloud)"],
  ["Software Engineering", "wiki/technology/software-engineering", "var(--mw-soft)"],
  ["Databases", "wiki/technology/databases", "var(--mw-db)"],
  ["Tools", "wiki/technology/tools", "var(--mw-tools, var(--mw-db))"],
  ["Books", "wiki/books", "var(--mw-books)"],
  ["Finance", "wiki/finance", "var(--mw-fin)"],
  ["People", "wiki/people", "var(--mw-people)"],
  ["Paradoxes", "wiki/Paradoxes", "var(--mw-pdx)"],
];
const counts = fields
  .map(([name, path, color]) => [name, dv.pages(`"${path}"`).length, color])
  .sort((a, b) => b[1] - a[1]);
const max = counts.length ? counts[0][1] : 1;
const rows = counts.map(([name, n, color], i) => {
  const w = Math.max(4, Math.round((n / max) * 100));
  return `<div class="mw-rank">
    <span class="mw-rank-n" style="color:${color}; background:color-mix(in srgb, ${color} 13%, transparent)">${i + 1}</span>
    <span class="mw-rank-label">${name}</span>
    <span class="mw-bar"><span class="mw-bar-fill" style="width:${w}%; display:block; background:${color};"></span></span>
    <span class="mw-rank-count">${n}</span>
  </div>`;
}).join("");
dv.el("div", rows);
```

## The garden

Notes mature like plants — tagged in frontmatter with `maturity: seedling | budding | evergreen`.

> [!columns]
>
>> [!col|w4]
>> <span class="mw-maturity is-seedling">🌱 Seedling</span>
>>
>> *Fresh ideas, still rooting.*
>>
>> ```dataview
>> LIST FROM "wiki" WHERE maturity = "seedling" SORT file.mtime DESC LIMIT 8
>> ```
>
>> [!col|w4]
>> <span class="mw-maturity is-budding">🌿 Budding</span>
>>
>> *Growing — linked, but not done.*
>>
>> ```dataview
>> LIST FROM "wiki" WHERE maturity = "budding" SORT file.mtime DESC LIMIT 8
>> ```
>
>> [!col|w4]
>> <span class="mw-maturity is-evergreen">🌳 Evergreen</span>
>>
>> *Mature, trusted, tended.*
>>
>> ```dataview
>> LIST FROM "wiki" WHERE maturity = "evergreen" SORT file.mtime DESC LIMIT 8
>> ```

## The toolbox

Surveys of the working toolchain — from [[Tools Home]].

```dataview
TABLE WITHOUT ID file.link AS "Tool note", length(file.inlinks) AS "Links"
FROM "wiki/technology/tools"
WHERE file.name != "Tools Home"
SORT length(file.inlinks) DESC
LIMIT 10
```

> [!note]- About these numbers
> Counts come live from Dataview at render time. Word count is estimated from file size (≈6 bytes/word). The garden fills up as notes get a `maturity` property — see [[Master Home]] for the map of everything.
