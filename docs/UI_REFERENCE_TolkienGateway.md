# Tolkien Gateway — UI Reference

> Source: `https://tolkiengateway.net/wiki/Main_Page` (live site, captured 2026-04-20 via Wayback)
> Skin: **Citizen** (MediaWiki) — dark-mode-first, mobile-friendly, deployed after June 2024

---

## 1. Architecture

- **Engine**: MediaWiki
- **Skin**: `Citizen` (`skin-citizen citizen-sections-enabled skin--responsive`)
- **Extensions in evidence**: Page Previews / Popups (`mwe-popups`), Codex (`cdx-*`), Citizen collapsible sections

---

## 2. Layout & UI Functionalities

### 2.1 Header
- Site logo / shield mark ("T")
- Welcome heading with live stats: `articles · pages · images · 0 ads`
- **Search** — modal-style overlay (button trigger, keyboard-accessible)
- **Theme toggle** (light / dark / auto)
- **User menu** (login, preferences, account)
- **Page tabs**: `Main Page`, `Discussion`, `View source`, `History`

### 2.2 Drawer / Sidebar (Citizen drawer)
- **Navigation**
  - Main Page (`alt shift z`)
  - Recent changes (`alt shift r`)
  - Random page (`alt shift x`)
  - Community Portal, To-do, Forums, Chat, Help
  - Special pages (`alt shift q`)
  - Upload file (`alt shift u`)
- **Portals**: Adaptations, Books, Characters, Games, Images, Languages, Locations, Music, People, Races, Rare words, Timeline, Writings
- **Social icons**: Discord, Bluesky, X, Facebook
- **In other languages**: Deutsch, Français, Suomi
- **Tools panel**: What links here, Related changes, Printable version, Permanent link, Page information, Page logs

### 2.3 Main Content (Main Page composition)
- **A–Z browse strip**: `A B C D … Z #`
- **Featured cards grid** (9 cards) with labels:
  - `Article` — featured article card (image + intro)
  - `Artist` — featured artist
  - `Quote` — pull-quote card
- **"On this day…" / Today's date**
  - Western date + **Shire Calendar** equivalent (e.g., `Highday, 28 Astron`)
- **Event timeline cards** (`tg-event-card`)
  - 300×300 px, stacked year / month / day
  - Geometric **clip-path notch** (banner/pennant shape)
- **Get Involved** CTA box (active users, edits, accounts)
- **Categorized event lists**: `On Earth`, etc.

### 2.4 Footer
- Privacy policy, About Tolkien Gateway, Edit preview settings

### 2.5 Interactive Behaviors
- **Page Previews / Hovercards** on every internal link
- **Collapsible sections** (Citizen feature) — 6 collapsible regions on Main Page
- **Drawer toggle** for sidebar (mobile / narrow viewports)
- **Hotkey-driven navigation** (alt+shift combos shown inline next to items)
- **Modal search overlay** (not inline input)
- Approx. counts: 359 links, 3 buttons, 15 inputs

---

## 3. Aesthetics — Design Tokens

### 3.1 Color System (dark, parchment-and-gold)

| Token | Value | Purpose |
|---|---|---|
| `--color-surface-0` | `#1a1a1f` | Page background |
| `--color-surface-1` | `#1f1f24` | Elevated surface |
| `--color-surface-2` | `#23232e` | Cards / infobox |
| `--color-surface-3` | `#282833` | Section within cards |
| `--color-surface-4` | `#2c2c3c` | Highest elevation |
| `--color-base` | `#e4ddcf` | Body text (parchment) |
| `--color-base--subtle` | `#e3d2b0` | Muted text |
| `--color-emphasized` | `hsl(41.6, 80%, 95%)` | Strong text |
| `--color-primary` | `#f1c45e` | Gold accent |
| `--color-primary--hover` | `#ffd16b` | Gold hover |
| `--color-link` | `hsl(41.6, 84%, 65.7%)` | Warm gold link |
| `--color-destructive` | `hsl(340, 100%, 50%)` | Errors / destructive |
| `--color-success` | `hsl(170, 100%, 35%)` | Success |
| `--color-warning` | `hsl(48, 100%, 60%)` | Warning |
| `--background-color-base` | `#1a1a1f` | Base bg |
| `--background-color-button-quiet--hover` | `rgba(255,255,255,0.04)` | Quiet button hover |

### 3.2 Shape / Radius
- `--border-radius--small`: `4px`
- `--border-radius--medium`: `8px` (`calc(4px * 2)`)
- `--border-radius--large`: `12px` (`calc(4px * 3)`)
- `--border-radius--pill`: `9999px`

### 3.3 Elevation / Shadows (warm-tinted, candlelit)
- **`--box-shadow-card`** — 4-stop layered shadow:
  ```
  0.3px 0.5px 0.7px hsla(41.6,50%,3%,0.3),
  0.8px 1.6px 2px -0.8px hsla(41.6,50%,3%,0.3),
  2.1px 4.1px 5.2px -1.7px hsla(41.6,50%,3%,0.3),
  5px 10px 12.6px -2.5px hsla(41.6,50%,3%,0.3)
  ```
- **`--box-shadow-dialog`** — 8-stop layered shadow (modals/dialogs), same warm `hsla(41.6, 50%, 3%, 0.3)` tint, ranging up to `25px 50px 62.9px -2.5px`.

### 3.4 Custom Components
- **`tg-event-card`** — 300×300 px, clip-path pennant:
  ```css
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 16px), 0 100%);
  ```
  Internal hierarchy: year (small) → month (1.25rem) → day (2.5rem, semi-bold), separated by a 1px bottom border between year and month/day.

---

## 4. Animations

### 4.1 Keyframes Defined
| Name | Use |
|---|---|
| `cdx-animation-progress-bar__bar` | Codex progress bar |
| `mwe-popups-fade-in-up` | Page preview enters from below |
| `mwe-popups-fade-in-down` | Page preview enters from above |
| `mwe-popups-fade-out-down` | Page preview exits downward |
| `mwe-popups-fade-out-up` | Page preview exits upward |
| `spin` | Applied at `60s linear infinite` — slow rotation (decorative seal/logo) |

### 4.2 Transition Durations
- `--transition-duration-base`: **100ms** (micro-interactions, transforms)
- `--transition-duration-medium`: **250ms** (drawers, theme switch, section toggles)

### 4.3 Common Transitions
- `opacity 250ms`
- `background-color 250ms`
- `height 250ms`
- `transform 250ms`
- `transform 100ms`
- Page preview popups: `0.2s ease forwards`

---

## 5. Typography

### 5.1 Font Stacks (CSS variables)
- **Headings** — `--font-family-heading`
  ```
  "EB Garamond", "EB Garamond-fallback", serif
  ```
- **Body** — `--font-family-base`
  ```
  Lora, Lora-fallback, serif
  ```
- **Monospace** — `--font-family-monospace`
  ```
  "Roboto Mono", "Roboto Mono-fallback", "Menlo", "Consolas",
  "Liberation Mono", "Fira Code", "Courier New", monospace
  ```

### 5.2 Notes
- All webfonts paired with `-fallback` metric-adjusted fonts to prevent CLS.
- Heading face (**EB Garamond**) chosen for classical literary feel matching Tolkien's published typography.
- Body face (**Lora**) is a readable contemporary serif tuned for screen body copy.

---

## 6. Quick Implementation Cheatsheet (for cloning the look)

```css
:root {
  /* surfaces */
  --bg-0: #1a1a1f;
  --bg-1: #1f1f24;
  --bg-2: #23232e;
  --bg-3: #282833;

  /* text */
  --text: #e4ddcf;
  --text-subtle: #e3d2b0;

  /* accent */
  --gold: #f1c45e;
  --gold-hover: #ffd16b;
  --link: hsl(41.6, 84%, 65.7%);

  /* shape */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 9999px;

  /* motion */
  --t-fast: 100ms;
  --t-med: 250ms;

  /* shadow */
  --shadow-card:
    0.3px 0.5px 0.7px hsla(41.6,50%,3%,0.3),
    0.8px 1.6px 2px -0.8px hsla(41.6,50%,3%,0.3),
    2.1px 4.1px 5.2px -1.7px hsla(41.6,50%,3%,0.3),
    5px 10px 12.6px -2.5px hsla(41.6,50%,3%,0.3);

  /* type */
  --font-heading: "EB Garamond", serif;
  --font-body: "Lora", serif;
  --font-mono: "Roboto Mono", monospace;
}

body {
  background: var(--bg-0);
  color: var(--text);
  font-family: var(--font-body);
}
h1, h2, h3 { font-family: var(--font-heading); color: var(--gold); }
a { color: var(--link); transition: color var(--t-fast); }
a:hover { color: var(--gold-hover); }

.event-card {
  width: 300px; height: 300px;
  background: var(--bg-2);
  box-shadow: var(--shadow-card);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 16px), 0 100%);
}
```

---

## 7. Source Notes

- The Wayback Machine archive used for capture: `https://web.archive.org/web/20260420031224/https://tolkiengateway.net/wiki/Main_Page`
- Live site is gated by a Cloudflare bot challenge, so direct fetch is blocked for automated tools.
- The site previously used the **Timeless** skin (light theme, pastel portal boxes, Linux Libertine fonts) — superseded by Citizen.
