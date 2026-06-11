# MyWiki Site — Project Memory

Living log of everything done so far on `mywiki-ui-site`. Read this first when resuming work.

---

## Goal

Publish the Obsidian vault at `C:\Users\SUBHADIP\MYPROJECTS\MyWiki` (163 notes, data engineering KB) as a public website with:

- **Aesthetic**: Tolkien Gateway feel (serif fonts, warm earth tones, scholarly).
- **Functionality**: Obsidian features intact — wikilinks, callouts, code blocks, graph, tags.
- **Hosting**: Vercel, via existing repo `bsbbera/mywiki-ui-site` (connection preserved).
- **Separation of concerns**:
  - `MyWiki/` → pure content (markdown only, ITS theme + custom CSS snippets stay inside Obsidian only).
  - `mywiki-ui-site/` → pure UI (Quartz v4 app, pulls content from vault at build).

---

## Architecture

```
MYPROJECTS/
├── MyWiki/                       # Untouched Obsidian vault (content source)
│   ├── .obsidian/                # ITS theme + custom CSS (Obsidian only)
│   ├── wiki/                     # Notes
│   ├── databricks/               # Notes
│   └── *.md                      # Root notes
│
└── mywiki-ui-site/               # GitHub repo → Vercel
    ├── content/                  # Synced from vault, COMMITTED to git (Vercel needs it)
    ├── quartz/                   # Quartz v4 engine (untouched)
    ├── scripts/
    │   └── copy-vault-content.js # Prebuild sync script
    ├── quartz.config.ts
    ├── vercel.json               # cleanUrls routing fix
    └── package.json              # prebuild hook
```

**Build flow:**
- Local: `npm run dev` → `prebuild` (copies vault → content/) → `quartz build --serve`.
- Vercel: `npm run build` → `prebuild` (gracefully skips, vault not present) → `quartz build` using committed `content/`.

---

## Files Created / Modified

### Created
- **`scripts/copy-vault-content.js`** — ES-module script that:
  - Resolves `VAULT_PATH = ../MyWiki` from script location via `fileURLToPath`.
  - Gracefully exits if vault absent (CI/Vercel).
  - Recursively copies `.md` and `.pdf` from `wiki/`, `databricks/`, plus root files (`Main.md`, `Welcome.md`, `Gandalf.md`, `windsurf.md`).
  - Skips hidden, `_my_template`, `raw`.
  - For each `.md`: strips BOM, normalizes CRLF→LF, parses frontmatter, ensures `publish: true` (adds frontmatter if missing).
  - Auto-creates `content/index.md` home page if missing.
- **`vercel.json`** — `{ "cleanUrls": true, "trailingSlash": false }`.

### Modified
- **`package.json`** — added `"prebuild": "node ./scripts/copy-vault-content.js"`; `dev` runs prebuild before serve.
- **`.gitignore`** — explicitly DOES commit `content/` (Vercel needs it). Comment block clarifies the intent.
- **`quartz.config.ts`**:
  - Added `"raw"` to `ignorePatterns`.
  - Commented out `Plugin.ExplicitPublish()` (publish everything by default).
  - Commented out `Plugin.CustomOgImages()` (fetch fails on Vercel, slows builds).

### Bulk content edits
- Replaced `dg-publish:` → `publish:` across 145 vault files + 161 content files via `sed` (Obsidian Digital Garden convention → Quartz convention).

---

## Problems Hit & Fixes (chronological)

| # | Symptom | Root cause | Fix |
|---|---------|------------|-----|
| 1 | `require is not defined` in copy script | `package.json` has `"type": "module"` | Converted script to ESM (`import`, `fileURLToPath`). |
| 2 | Script resolved `C:\Users\SUBHADIP\MyWiki` (wrong) | Used `process.cwd()` instead of script dir | Use `path.dirname(fileURLToPath(import.meta.url))`. |
| 3 | Quartz found only 1 input file | No `index.md` + stale `.quartz-cache` / `public/` | Script auto-creates `index.md`; cleared caches. |
| 4 | Vercel showed only sidebar, no notes | `content/` was gitignored — Vercel had nothing to build | Removed ignore rules, committed full `content/`. |
| 5 | Frontmatter regex failing on some files | BOM (`﻿`) + CRLF line endings | Strip BOM, normalize to LF before regex. |
| 6 | Vercel build error: `CustomOgImages: fetch failed` | Plugin tries network fetches Vercel blocks | Disabled `Plugin.CustomOgImages()`. |
| 7 | Pages 404 despite files existing in git | Vault used `dg-publish:`, Quartz needs `publish:` | `sed` replacement across both folders + copy script auto-adds `publish: true`. |
| 8 | **All individual notes 404 on Vercel** (sidebar OK) | Quartz emits `foo.html` and links to `/foo`; Vercel does not strip `.html` by default | Added `vercel.json` with `cleanUrls: true`. **← final fix that made site work** |

---

## Current State (commit `081d9ec`)

- Site live and functional at https://mywiki-ui-site.vercel.app.
- All ~162 notes render; clean URLs work.
- Theme: existing Quartz custom theme in `quartz/styles/custom.scss` — gold accents (`#f1c45e` / `#ffd16b`) in dark mode, cream text (`#e4ddcf`). **Not yet styled to match Tolkien Gateway target.**
- `ExplicitPublish` disabled — everything publishes. Future: re-enable + use `publish: true` frontmatter to gate notes.

### Recent commit history
```
081d9ec fix: enable Vercel cleanUrls so extensionless routes resolve to .html
634d158 fix: replace dg-publish with publish in all content
7164c54 fix: disable CustomOgImages plugin (fetch fails on Vercel)
d9d685f fix: auto-add 'publish: true' to all notes during vault sync
4c5e366 fix: commit content/ folder for Vercel deployment
89d03e6 fix: improve copy-vault-content.js with proper path resolution and index.md creation
```

---

## UI / Tolkien Gateway Aesthetic — SHIPPED (multiple iterations)

Reference: https://tolkiengateway.net/wiki/Main_Page
Full plan: `C:\Users\SUBHADIP\.claude\plans\so-this-is-my-zesty-scroll.md`

### Decisions locked in
- **Modes**: TG parchment for light mode; existing gold-on-charcoal preserved as a "night reading" dark mode.
- **Layout fidelity**: Heavy MediaWiki imitation — top horizontal nav, right-rail infobox driven by frontmatter, page tabs above article.
- **Callouts**: Restyle as TG infoboxes (parchment + thin double border + serif small-caps title), drop the colored left bar.
- **Must-haves**: ornamental section dividers (dingbat `<hr>`), drop caps on first paragraph, boxed article container, classic always-underlined links.

### Light-mode design tokens (to put in `quartz.config.ts` lightMode)

| CSS var | Value | Role |
|---|---|---|
| `--light` | `#f4ecd8` | Page parchment |
| `--lightgray` | `#e8dec3` | Boxed article + infobox surface |
| `--gray` | `#a89878` | Muted text / borders |
| `--darkgray` | `#3a3f2c` | Body text |
| `--dark` | `#1a1f15` | Headings |
| `--secondary` | `#5a7a1e` | Link green |
| `--tertiary` | `#3f5a14` | Link hover |
| `--highlight` | `rgba(90,122,30,0.12)` | Wikilink halo / code highlight |
| `--textHighlight` | `#c9a23a55` | `==marks==` |

### Phased implementation
- **Phase A** — Palette swap + base typography (links underlined green, parchment body). `quartz.config.ts` + scoped overrides in `custom.scss` under `:root[saved-theme="light"]`.
- **Phase B** — Boxed article container, dingbat `<hr>` dividers, drop cap on first `<p>`.
- **Phase C** — Callouts restyled as TG infoboxes (override `.callout` in `custom.scss`; do not touch `callouts.scss`).
- **Phase D** — New components: `TopNav.tsx` (header slot), `PageTabs.tsx` (beforeBody), `Infobox.tsx` (right slot, reads `fileData.frontmatter`). Wire into `quartz.layout.ts` and style in `custom.scss`.
- **Phase E** — Dark-mode sanity check; minimum overrides under `:root[saved-theme="dark"]` for new components.

### Files that will be touched
- Modify: `quartz.config.ts` (lightMode block only), `quartz.layout.ts`, `quartz/styles/custom.scss` (full rewrite, ~150 lines), `quartz/components/index.ts`.
- New: `quartz/components/{TopNav,PageTabs,Infobox}.tsx`.
- Explicitly NOT touched: `base.scss`, `variables.scss`, `callouts.scss`, any existing `.tsx` (purely additive).

---

## Operating Notes / Conventions

- Light mode = TG parchment; dark mode = same TG layout with gold-on-surface palette. Structural rules live in a combined `:root[saved-theme="light"], :root[saved-theme="dark"]` block so both modes share the same TG aesthetic, swapping only theme-aware CSS vars (`--light`, `--lightgray`, `--gray`, `--dark`, `--secondary`, `--tertiary`, `--tg-rule-soft`, `--tg-header-bg`, `--tg-selection`).
- Never put UI files inside `MyWiki/`. Vault is content-only.
- Local edit loop: edit notes in Obsidian → `npm run dev` (prebuild syncs) → preview.
- Before pushing: `npm run prebuild` to keep `content/` in sync with vault, then commit.
- Vercel deploys on push to `main`; expect ~2–3 min build.
- If a note fails to render: check that its frontmatter has no `draft: true` and that the path doesn't hit an `ignorePatterns` entry (`private`, `templates`, `.obsidian`, `_my_template`, `raw`).

---

## Session log — TG redesign iterations (2026-05-14, branch `claude/determined-perlman-428ef4`)

### Iteration history (in order)
1. **Phase A** (commit `933b9e8`) — TG palette swap; scoped existing dark-mode rules under `:root[saved-theme="dark"]`; added `:root[saved-theme="light"]` block with underlined green links + serif headings + faded-green selection.
2. **Phases B–E** (commit `8c30808`) — Boxed article container, ornamental `<hr>` dingbat, drop cap, callouts restyled as TG infoboxes, three new Preact components (TopNav, PageTabs, Infobox), wired into layout.
3. **Feedback round 1** — User asked for: links underlined on hover only (not always), Infobox tags clickable, content width 1000px flexible, multi-column flat layout, Explorer folder typography hierarchy, smoother folder collapse.
4. **Feedback round 2** — Killed boxed article container (page bg unified with article surface); hidden outer "Multi column" wrapper title; subtle scrollbar; Infobox title-bar darkened.
5. **Feedback round 3** — **Patched `quartz/plugins/transformers/ofm.ts`**: callout-line regex `^>+ *\[\!\w+...$` so nested `>>`/`>>>` callouts also get title/body split (was only matching top-level `>`). Cards now render with separate `callout-title` and `callout-content`, allowing CSS to style the title as centered-with-side-rules (TG style). Also patched `graph.inline.ts` line 265 to use `--gray`/`--darkgray` instead of `--lightgray`/`--gray` (was making edges invisible after I unified `--lightgray` with `--light`).
6. **Feedback round 4** — `[!infobox]` body callouts float right as ITS-theme right-rail infobox. Initially tried `position: absolute` (permanently reserves space) — wrong. Switched to `float: right`.
7. **Feedback round 5** — Float wasn't letting content flow alongside; root cause found via live DOM inspection (Claude_Preview MCP): `<hr>` has UA `overflow:hidden` and Quartz's `.callout` has `overflow-y:hidden`, both establishing Block Formatting Contexts that get pushed *below* floats. Fix: `article > hr { overflow: visible }` and `article > blockquote.callout:not([data-callout="infobox"]) { overflow: visible }`.
8. **Tighter spacing** — `hr { margin: 1em 0 }` (was 2.5em), tighter heading rhythm.
9. **Dark mode parity** — Merged the entire light-mode rule block into a combined `:root[saved-theme="light"], :root[saved-theme="dark"]` selector; introduced theme-tint vars; converted the hr dingbat to **CSS mask** so the dingbat color tracks `var(--gray)` automatically; removed obsolete dark-only rules (rounded gold-left-border callout, gold-pill tag-link) that conflicted with the shared TG style.
10. **Polish pass** — Removed link background highlight from Quartz `base.scss:96` (`a.internal { background-color: var(--highlight) }`); thinner link font-weight (400); smaller search button (padding 0.28rem 0.85rem, fontsize 0.88rem, smaller svg); 4px border-radius on callouts/infobox/graph card; subtle 1–3px box-shadows; subtle SVG-noise paper texture on `body` (`background-attachment: fixed`); graph stroke width 1 → 1.6 in `graph.inline.ts:544`.

### Final palette tokens (`quartz.config.ts` lightMode)
| CSS var | Value | Role |
|---|---|---|
| `--light` | `#f4ecd0` | Page parchment (also article surface — same color) |
| `--lightgray` | `#f4ecd0` | Same as `--light` so any container surface blends |
| `--gray` | `#8c7d5c` | Borders, hr ornament, infobox separator |
| `--darkgray` | `#2a2a1f` | Body text |
| `--dark` | `#1a1a12` | Headings |
| `--secondary` | `#5a7a1e` | Link green |
| `--tertiary` | `#3a5a14` | Link hover |

Dark mode is preserved as gold-on-charcoal but uses the same TG layout (no rounded gold-left callout border, no gold tag pills — those rules were removed for visual consistency).

### Quartz core files patched (not just custom.scss)
- `quartz/plugins/transformers/ofm.ts` — regex line 134 + replacement at line 169-172 (nested callout support).
- `quartz/components/scripts/graph.inline.ts` — line 265 (link color vars) + line 544 (stroke width 1 → 1.6).

### Layout changes (`quartz.layout.ts`)
- `sharedPageComponents.header`: was `Component.TopNav()` — currently `[]` (removed during feedback rounds).
- `defaultContentPageLayout.beforeBody`: only `Breadcrumbs` (conditional, non-index) + `ArticleTitle` + `ContentMeta`. Removed `PageTabs` and `TagList`.
- `defaultContentPageLayout.right`: `Infobox` → `Graph` → `TableOfContents` → `Backlinks`.

### Known not-yet-shipped (deferred)
- **Collapsible H2/H3 headings** — would need a small inline JS to add fold icons + click handlers that toggle visibility of subsequent siblings up to the next same-or-higher heading. Not a default Quartz feature.
- **Graph in left panel** — user requested moving Graph to the left rail; not yet done. Would be a one-line edit in `quartz.layout.ts` to move `Component.Graph()` from `right` to `left`.

### memory.md update note
The original "Next Phase: UI / TG Aesthetic (planned, not yet shipped)" section above is now historical — those phases are all shipped (commits `933b9e8` and `8c30808`) and have gone through ~10 rounds of feedback iteration. Subsequent feedback fixes are uncommitted at time of writing; user should commit when ready.

---

## Session log — TG polish round (2026-05-15, commit `8c57657`)

Pushed to `claude/determined-perlman-428ef4`. PR #3 already merged previously; a new PR is needed (gh CLI not installed on this machine — opened via the GitHub compare URL).

### What shipped
1. **Properties bar redesign + relocation.** `Infobox.tsx` now emits a horizontal bar via `display: grid` with `grid-template-columns: 110px 1fr` for rows, wrapped in a responsive outer grid (`repeat(auto-fit, minmax(220px, 1fr))`). Moved from `right` rail to `beforeBody` in `quartz.layout.ts`. The legacy `dl/dt/dd` rendering caused awkward wrapping when values were long; the new layout aligns regardless of value length.
2. **Collapsible H2/H3 headings.** New `quartz/components/CollapsibleHeadings.tsx` ships an `afterDOMLoaded` script that finds `article > h2` and `> h3`, prepends a `.tg-chevron` (rotates -90° when collapsed), and toggles sibling visibility up to the next same-or-higher heading. Re-runs on Quartz's `nav` event for SPA navigation. Mounted via `sharedPageComponents.afterBody`. State is NOT persisted across reloads (intentional for now).
3. **Graph edges muted by default.** `graph.inline.ts:262` default `alpha = 0.35`. On hover, active links → `alpha: 1` color `--secondary` (TG green/gold); inactive → `alpha: 0.1`. Stroke width restored to 1 (was 1.6 from previous polish round).
4. **Graph moved to left panel.** Added to `defaultContentPageLayout.left` below `Explorer`. Removed from `right` rail.
5. **Off-white palette.** `quartz.config.ts` lightMode: `light: #f6f3ec`, `lightgray: #ece9e0`, `gray: #8c8474`, `darkgray: #2a2a25`, `dark: #1a1a17`. Less yellow than the previous `#f4ecd0` parchment. SCSS gray-channel references updated (`rgba(140, 132, 116, ...)` replacing the older `140, 125, 92`).
6. **Smaller search pill.** `custom.scss` `.search > .search-button`: padding `0.18rem 0.65rem`, font-size `0.72rem`, svg `11px`. Previous (`0.28rem 0.85rem` / `0.88rem` / `14px`) was too dominant in the sidebar.
7. **Multi-column card redesign.** Cards are now self-contained panels with tinted small-caps header band (`var(--tg-header-bg)`), light body, 6px radius, and a soft 1–3px shadow. Outer multi-column wrapper border removed (transparent) so cards breathe in the grid.

### Current layout (after this commit)
- `sharedPageComponents.afterBody`: `[CollapsibleHeadings]`
- `defaultContentPageLayout.beforeBody`: `[ArticleTitle, ContentMeta, Infobox]`
- `defaultContentPageLayout.left`: `[PageTitle, MobileSpacer, Flex(Search, Darkmode, ReaderMode), Explorer, Graph]`
- `defaultContentPageLayout.right`: `[DesktopOnly(TableOfContents), Backlinks]`

### Final palette tokens after off-white swap (`quartz.config.ts` lightMode)
| CSS var | Value | Role |
|---|---|---|
| `--light` | `#f6f3ec` | Off-white page surface |
| `--lightgray` | `#ece9e0` | Card / infobox surface |
| `--gray` | `#8c8474` | Borders, hr ornament, separator |
| `--darkgray` | `#2a2a25` | Body text |
| `--dark` | `#1a1a17` | Headings |
| `--secondary` | `#5a7a1e` | Link green (unchanged) |
| `--tertiary` | `#3a5a14` | Link hover (unchanged) |

Dark mode unchanged (still gold-on-charcoal); all new structural rules picked up via theme vars in the shared `:root[saved-theme="light"], :root[saved-theme="dark"]` block.

### Known not-yet-shipped / candidates for next round
- **Duplicate H1**: many notes start with a `# Page Name` body H1 even though `ArticleTitle` already renders the title above. Two paths: (a) OFM transformer strip the first H1 when it matches the title, (b) hide `ArticleTitle` when the body starts with H1. (a) is cleaner.
- **Body `[!infobox]` callout duplication**: same root cause — the body floats an infobox with the page name as title while the new Properties bar at top also has the page metadata. Decide: keep both as different things (Properties = frontmatter, body infobox = curated narrative summary) or unify.
- **TOC active-section highlight** as the reader scrolls (IntersectionObserver-based).
- **Persist collapsed-headings state** across reloads via `localStorage` keyed by `${slug}:${heading-id}`.
- **Heading anchor-link `#` icon** on hover — Quartz emits these but they're invisible in current styling.
- **Footnote / citation styling** (TG-style `[1]` superscripts) — would need a remark plugin.

---

## Session log — WidthToggle (2026-05-15, commit `de1a98f`)

Pushed to `claude/determined-perlman-428ef4`. PR opened via the GitHub compare URL (`gh` CLI not installed on this machine; recommended: `winget install GitHub.cli` for future sessions to enable programmatic `gh pr create`).

### What shipped
A 4-button reading-width toolbar (`quartz/components/WidthToggle.tsx`) rendered above every article. The toolbar auto-tracks the viewport and clicks are momentary overrides.

**Presets** (the column width measured at 1600×1000 viewport):
| Preset | Sidebars | Article column |
|---|---|---|
| narrow | 320L / 320R | 720px (book column) |
| normal | 320L / 320R | 850px (default) |
| wide | 240L / 240R (slim) | 1010px |
| full | top menu bar / hidden R | 1500px |

**Auto-tracking thresholds** (viewport `window.innerWidth`):
- `< 900px` → narrow
- `< 1300px` → normal
- `>= 1300px` → wide

`full` is opt-in only — never auto-selected (it stows the right sidebar). Resize listener is debounced 100ms; clicks set the active preset until the next resize fires.

### Full mode = top menu bar with Browse dropdown
- `grid-template-areas` flips from `"left header right"` (3 cols) to a single-column stack: `"left"/"header"/"center"/"footer"`.
- `grid-template-rows: auto auto 1fr auto` keeps the menu-bar row hugging its content (without it the row stretched to viewport height, producing a giant blank band).
- `.center` is pinned to `grid-area: grid-center` in Full mode because base.scss leaves it on `auto`. Once the right sidebar is `display: none`, CSS Grid auto-placement would drop `.center` into the wrong cell.
- `.sidebar.left` becomes `position: sticky; top: 0; display: flex; flex-direction: row` — a 51px horizontal strip with `MyWiki` title, search pill, darkmode + reader-mode toggles, and an injected `.nav-toggle` Browse button.
- The Browse button is injected by the WidthToggle script (not a separate component) so it lives in the same DOM neighborhood as the Search/Flex group.
- Clicking Browse toggles `.nav-open` on `.sidebar.left`. The Explorer (already in the sidebar) is repositioned `position: absolute; top: 100%; left: 1.5rem; width: 320px; max-height: 70vh`. Default hidden; visible when `.sidebar.left.nav-open .explorer`.
- Click-outside and Escape close the dropdown (document-level listener, guarded by `document.__tgNavOutsideBound` to avoid double-binding on SPA `nav` events).

### Layout changes
- `defaultContentPageLayout.beforeBody`: `[ArticleTitle, ContentMeta, Infobox, WidthToggle]`
- `defaultListPageLayout.beforeBody`: `[Breadcrumbs, ArticleTitle, ContentMeta, WidthToggle]`
- `quartz/components/index.ts` exports `WidthToggle`.

### Important dev-server gotcha
Quartz's dev server occasionally serves stale `.tsx` output even after the "rebuild" message — the symptom was new component props (the Auto button I later removed) not appearing in the HTML. Fix: stop and restart the dev server. Touch alone is not enough.

### User feedback that shaped the design
- Removed an "Auto" 5th button on user request — auto-tracking is now the implicit default behavior of the 4 buttons rather than a separate mode.
- Full mode initially hid both sidebars entirely. User pushed back: "Sidebar Should Not be Away. Its Should be menu bar, with Search Options." → resulting design above with the Browse dropdown for Explorer access.
- Resize behavior: user wanted "When I change Screen Size Manually, The preset Should Automatically Changed" → resize listener snaps back to auto-pick regardless of prior click.

### Known not-yet-shipped / next round
- **Graph access in Full mode**: currently stowed entirely. Could surface via a second dropdown (or fold into the Browse panel).
- **TOC access in Full mode**: the right sidebar is `display: none`. A floating TOC button on the right edge or another menu-bar dropdown would restore it.
- **Persist user pin across navigation**: clicks currently reset on resize and on page nav. If a user truly wants to pin wide, the next resize undoes it.
- (Carry-overs from previous session — still open) Duplicate H1, body infobox duplication, TOC active-section highlight, persist collapsed-headings state, heading anchor `#` on hover, footnote styling, reading line-length on `<p>` only.
