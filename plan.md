# UI Redesign: Tolkien Gateway / MediaWiki Aesthetic for MyWiki

## Context

The publishing pipeline is done (vault → `content/` → Quartz → Vercel, with `cleanUrls`). The site renders all ~162 notes correctly but uses the default Quartz dark-charcoal + gold theme. Goal of this phase: restyle the site to feel like **Tolkien Gateway** (https://tolkiengateway.net/wiki/Main_Page) — a parchment-colored MediaWiki-style scholarly wiki — while keeping all Quartz functionality (wikilinks, callouts, graph, search, TOC, backlinks) intact.

**User decisions captured (this turn):**
- **Modes**: TG light + keep current gold-on-dark as a "night reading" dark mode.
- **Layout fidelity**: Heavy MediaWiki imitation (top nav, right-side infobox, article tabs).
- **Callouts**: Restyle as TG-style infoboxes (parchment + thin double border + serif title).
- **Must-haves**: Ornamental section dividers, drop caps on first paragraph, boxed article container, classic always-underlined links.

---

## Design Tokens (light = TG)

Palette to wire into `quartz.config.ts` lightMode and consume via `--light/--lightgray/--gray/--darkgray/--dark/--secondary/--tertiary/--highlight/--textHighlight`:

| Token | Light (TG) | Role |
|---|---|---|
| `--light` (page bg) | `#f4ecd8` | Parchment background |
| `--lightgray` (surface) | `#e8dec3` | Boxed article fill, infobox bg |
| `--gray` | `#a89878` | Muted text, borders |
| `--darkgray` | `#3a3f2c` | Body text |
| `--dark` | `#1a1f15` | Headings |
| `--secondary` (links) | `#5a7a1e` | Accent green, used for links |
| `--tertiary` (link hover) | `#3f5a14` | Darker green on hover |
| `--highlight` | `rgba(90,122,30,0.12)` | Wikilink halo, code highlight |
| `--textHighlight` | `#c9a23a55` | `==marks==` |

Dark mode: **keep the existing gold-on-charcoal palette** (already in `quartz.config.ts` lines 42–52). No changes there.

Typography (already correct): EB Garamond (headers) / Lora (body) / Roboto Mono (code) via Google Fonts.

---

## Files to Modify (and what each owns)

| File | Change |
|---|---|
| `quartz.config.ts` lines 31–41 | Replace `lightMode` colors with the TG palette above. Leave `darkMode` alone. |
| `quartz/styles/custom.scss` (full rewrite, ~150 lines) | All TG-specific overrides: parchment body, boxed `.center`/article, ornamental `<hr>`, drop cap, underlined links, callout/infobox restyle, top-nav + tabs + infobox component styling. Scoped via `:root[saved-theme="light"]` so dark mode is untouched. |
| `quartz.layout.ts` | Add `Header` slot components (TopNav, search). Add `Infobox` to `right` slot for content pages. Add `PageTabs` to `beforeBody`. |
| **NEW** `quartz/components/TopNav.tsx` | MediaWiki-style horizontal nav: Main Page · Recent Changes (= recent notes index) · Tags · Random (= JS picks from sitemap) · Search (existing component). Renders as `<nav class="tg-topnav">…</nav>`. |
| **NEW** `quartz/components/Infobox.tsx` | Reads frontmatter from `fileData.frontmatter`. Shows: title, optional `banner` image, key/value rows for `aliases`, `category`, `tags`, `Created`, `date modified`, `status`. Only renders if at least one of those fields exists. Class `tg-infobox`. |
| **NEW** `quartz/components/PageTabs.tsx` | Two tabs above the article: **Article** (current page, active) and **Source** (link to the `.md` on GitHub via `baseUrl`/file path). "Discussion" / "History" out of scope. Class `tg-tabs`. |
| `quartz/components/index.ts` | Export the three new components. |

**Files explicitly NOT touched:**
- `quartz/styles/base.scss` — keep upstream layout/grid intact.
- `quartz/styles/variables.scss` — breakpoints unchanged.
- `quartz/styles/callouts.scss` — base type colors stay; we override per-type look via `custom.scss` `:where([data-callout])`.
- Any existing component `.tsx` — only additive new components.

---

## Implementation Phases

Build incrementally; each phase produces a visibly-working site that we can verify before moving on.

### Phase A — Palette + base typography (smallest, safest)
1. Update `lightMode` in `quartz.config.ts` to TG tokens.
2. In `custom.scss`, scope everything under `:root[saved-theme="light"]`:
   - Body background = parchment.
   - Links: `color: var(--secondary)`, `text-decoration: underline`, `text-underline-offset: 2px`. Hover → `var(--tertiary)`.
   - Headings: `color: var(--dark)`, `font-family: var(--headerFont)`, increased letter-spacing on h1/h2.
   - Selection color: faded green.
3. Verify locally: `npm run dev` → home page looks parchment; all links underlined green.

### Phase B — Boxed article + ornamental dividers + drop caps
1. Wrap article body via existing `.center` or `article` selector: thin `border: 1px solid var(--gray)`, `background: var(--lightgray)`, `padding: 2.5rem 3rem`, subtle inner shadow.
2. `article hr` → background-image dingbat (CSS-only Unicode `❦` or `※` centered with two lines), no horizontal rule.
3. `article > p:first-of-type::first-letter` → `font-family: var(--headerFont); font-size: 3.5em; float: left; line-height: 0.9; padding: 0.25rem 0.5rem 0 0; color: var(--dark)`.
4. Verify: open any note, see boxed parchment article, drop cap on the lead paragraph, fancy dividers between sections.

### Phase C — Callouts as TG infoboxes
1. Override `.callout` base in `custom.scss`:
   - Parchment background (`var(--lightgray)` slightly lifted).
   - Double border: `border: 1px solid var(--gray); box-shadow: inset 0 0 0 3px var(--light), inset 0 0 0 4px var(--gray);`.
   - Title: serif, small-caps, centered, with hairline rule underneath.
   - Drop the colored left border.
2. Per-type tint (`note/info/tip/warning/...`) → only change the title color from the existing palette; keep body & border consistent.
3. Verify: pick a note with callouts (search for `> [!note]` in `content/`); render should look like wiki infoboxes.

### Phase D — Top nav + page tabs + right-side infobox (structural)
1. **TopNav**: minimal Preact component, signature like other `quartz/components/*.tsx`. Slot into `sharedPageComponents.header` in `quartz.layout.ts`. Styled in `custom.scss` as a single sand-colored bar across the top with serif uppercase links and a hairline bottom border.
2. **PageTabs**: rendered in `beforeBody` before `ArticleTitle`. Active tab has parchment background flush with article box; inactive tab is darker sand.
3. **Infobox**: rendered in `right` slot on `defaultContentPageLayout` (above `Graph`). Reads `fileData.frontmatter`. Renders a small parchment box with a title bar (the note title) and a `<dl>` of metadata rows. Hidden when no metadata.
4. Wire all three into `custom.scss` styling.
5. Verify: home page shows top nav, any note shows tabs and (if it has frontmatter metadata) an infobox on the right.

### Phase E — Dark mode sanity check
1. Toggle dark mode → confirm it still looks like the current gold-on-charcoal theme.
2. Any new component (TopNav, PageTabs, Infobox) must also render legibly in dark mode — add minimum dark overrides under `:root[saved-theme="dark"]` if needed (mostly bg + border colors).

---

## Critical Files (paths)

- `C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site\quartz.config.ts` (lines 31–41 only)
- `C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site\quartz.layout.ts`
- `C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site\quartz\styles\custom.scss` (full rewrite, current 93 lines)
- `C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site\quartz\components\TopNav.tsx` (new)
- `C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site\quartz\components\Infobox.tsx` (new)
- `C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site\quartz\components\PageTabs.tsx` (new)
- `C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site\quartz\components\index.ts` (add three exports)

### Existing utilities to reuse (don't reinvent)
- **Theme injection / CSS vars**: `quartz/util/theme.ts` `joinStyles()` (lines 143–176) already maps `lightMode`/`darkMode` config to `--light/--dark/--secondary/--tertiary/...`. We only update the config; util code untouched.
- **Component pattern**: copy the structural skeleton of an existing simple component such as `quartz/components/PageTitle.tsx` for `TopNav` and `quartz/components/TagList.tsx` for `Infobox` (both already read `fileData.frontmatter`).
- **Search**: existing `Search` component is reused inside `TopNav` — no new search logic.
- **Frontmatter**: parsed by `Plugin.FrontMatter()` (already in `quartz.config.ts`) into `fileData.frontmatter`. Infobox just reads it.
- **Callout DOM**: produced by `Plugin.ObsidianFlavoredMarkdown` as `<blockquote class="callout" data-callout="note">…</blockquote>` — restyle only.
- **Existing color-var consumption sites** (do not change, they will pick up new palette automatically): `base.scss:88` (links), `base.scss:351` (blockquote), `base.scss:32` (selection), `base.scss:96` (internal-link bg), etc.

---

## Verification

After each phase: `npm run dev`, open `http://localhost:8080`.

End-to-end checklist (after Phase E):
- [ ] Home page: parchment bg, top nav visible, underlined green links.
- [ ] Click any note → boxed article, drop cap on first paragraph, ornamental dividers between sections.
- [ ] Note with frontmatter (e.g. `content/wiki/technology/cloud/gcp/certifications/professional-data-engineer.md`) → infobox on the right showing aliases, category, tags, dates.
- [ ] Article tabs visible above title; Source tab links to GitHub blob URL.
- [ ] Open a note with callouts (`> [!note]`, `> [!warning]`) → renders as parchment infobox with double border, not the old colored left-border style.
- [ ] Toggle dark mode → reverts to existing gold-on-charcoal; new components still readable.
- [ ] Search still works; graph still renders; TOC still scrolls; wikilinks resolve.
- [ ] `npm run check` passes (TypeScript + prettier).
- [ ] Commit + push → Vercel rebuild succeeds → site looks the same on production.

---

## memory.md updates to apply post-plan-exit

(Cannot edit `memory.md` in plan mode — apply these on exit.)

- Replace the "Next Phase: UI / Tolkien Gateway Aesthetic" section with a concrete record of the phased implementation above (palette tokens, phases A–E, new components TopNav/PageTabs/Infobox, scoping under `:root[saved-theme="light"]`).
- Add to "Operating Notes": "Light mode = TG parchment; dark mode = gold-on-charcoal preserved as night-reading variant."
- Append to commit history once shipped.