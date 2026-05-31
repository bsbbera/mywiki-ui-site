# Porting an Obsidian theme to the Quartz site

This site supports **multiple selectable themes** on two independent axes:

- **Theme family** — `data-theme` attribute on `<html>` (`glass`, `tg`, …), chosen
  in the **ThemeSelector** dropdown, persisted in `localStorage["theme-family"]`.
- **Light / dark mode** — `saved-theme` attribute (unchanged Quartz mechanism),
  toggled by the Darkmode button, persisted in `localStorage["theme"]`.

Any theme works in either mode, so a family always defines **both** a light and a
dark token set. On top of that, the **ThemeCustomizer** panel layers live
per-family colour overrides (and an animation toggle) as inline custom props on
`<html>`, persisted in `localStorage["theme-custom"]`.

> **Golden rule — structure vs skin.**
> Anything *structural* (page width / grid, reader mode, infobox layout) stays
> global in `quartz/styles/themes/_shared.scss` or `variables.scss` so every
> theme inherits it. Anything *visual* (colours, fonts, component look,
> animation) is **scoped under `[data-theme="<name>"]`** so it never bleeds into
> another theme.

## The bridge

Quartz styles everything through nine base CSS vars (emitted by
`quartz/util/theme.ts`) plus four font vars. A theme works by **re-declaring its
own tokens and mapping them onto those base vars**:

| Quartz base var  | Meaning              | Glass token (example)      |
| ---------------- | -------------------- | -------------------------- |
| `--light`        | page background      | `var(--mwg-bg-0)`          |
| `--lightgray`    | surfaces / borders   | `var(--mwg-pane-2)`        |
| `--gray`         | muted lines / text   | `var(--mwg-faint)`         |
| `--darkgray`     | body text            | `var(--mwg-text)`          |
| `--dark`         | headings / strong    | `var(--mwg-text-strong)`   |
| `--secondary`    | links / accent       | `var(--mwg-accent)`        |
| `--tertiary`     | link hover           | `var(--mwg-accent-2)`      |
| `--highlight`    | internal-link halo   | `var(--mwg-accent-soft)`   |
| `--textHighlight`| `==marked==` text    | `var(--mwg-chip-bg)`       |
| `--headerFont` / `--titleFont` | headings | theme serif/sans         |
| `--bodyFont`     | body                 | theme sans                 |
| `--codeFont`     | code                 | theme mono                 |

Because `:root[data-theme="X"]` out-specifies the config's `:root` defaults, a
theme cleanly overrides everything **without touching `theme.ts` or
`quartz.config.ts`**.

## Recipe — add a new theme `<name>`

1. **Extract tokens** from the Obsidian `theme.css`: the dark + light
   `--xxx-*` colour/size maps (accent, backgrounds, text, headings, code, etc.).

2. **Create `quartz/styles/themes/_<name>.scss`:**
   - `:root[data-theme="<name>"] { … light tokens … + bridge to the 9 base vars + 4 font vars … }`
   - `:root[data-theme="<name>"][saved-theme="dark"] { … dark token overrides … }`
   - Component overrides scoped under `:root[data-theme="<name>"]` (target Quartz
     HTML — `article h1`, `.callout`, `blockquote`, `pre`, `table`, `a.tag-link`,
     list `::marker`, …), porting the theme's distinctive treatments.
   - Animations: define `@keyframes`, apply them gated by
     `:root[data-theme="<name>"]:not(.no-anim)` **and** a
     `@media (prefers-reduced-motion: reduce)` off-switch.
   - **Web fonts:** do *not* use `@import` inside the partial (it ends up mid-bundle
     and is ignored). Add the font URL to `FONT_HREFS` in
     `quartz/components/scripts/themeselector.inline.ts` — it injects a `<link>`
     before paint.

3. **Register the partial:** add `@use "./themes/<name>";` to
   `quartz/styles/custom.scss`.

4. **List it in the selector:** add `{ value: "<name>", label: "…" }` to the
   `THEMES` array in `quartz/components/ThemeSelector.tsx`. The selector and
   customizer pick it up automatically.

5. **(Optional) expose customizer controls:** add a `{ family: "<name>", … }`
   group to `FAMILY_TOKENS` in `quartz/components/ThemeCustomizer.tsx`. Only
   plain 6-digit-hex tokens can be edited via `<input type="color">` (skip
   gradients / `hsl()`).

## Files involved

- `quartz/styles/themes/_glass.scss`, `_tg.scss`, `_shared.scss` — theme partials
- `quartz/styles/custom.scss` — `@use`s the partials
- `quartz/components/ThemeSelector.tsx` + `scripts/themeselector.inline.ts` — family switch + font injection
- `quartz/components/ThemeCustomizer.tsx` + `scripts/themecustomizer.inline.ts` — live overrides
- `index.d.ts` — `themefamilychange` / `themecustomchange` event types

## Notes / trade-offs

- Customizer overrides are inline props on `<html>`, so a colour picked in dark
  mode also shows in light mode (a deliberate fixed override). Use **Reset to
  theme defaults** to clear a family's overrides.
- No-JS visitors fall back to the config `:root` defaults (the TG parchment look)
  since `data-theme` is set by the pre-paint inline script.
