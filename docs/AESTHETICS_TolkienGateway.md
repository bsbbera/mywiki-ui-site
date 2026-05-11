# Tolkien Gateway — Visual Aesthetics / Design Tokens

> Extracted from `https://tolkiengateway.net/wiki/Main_Page` (Citizen skin, dark-mode-first, 2026)

---

## Color System

The palette is dark, warm, and parchment-gold — evoking candlelit Middle-earth archives rather than a generic light wiki.

| Token | Hex / HSL | Role |
|---|---|---|
| `--color-surface-0` | `#1a1a1f` | Page background |
| `--color-surface-1` | `#1f1f24` | Elevated surface (sidebar, nav) |
| `--color-surface-2` | `#23232e` | Cards, infoboxes, event cards |
| `--color-surface-3` | `#282833` | Inner sections within cards |
| `--color-surface-4` | `#2c2c3c` | Highest elevation (dialogs, modals) |
| `--color-base` | `#e4ddcf` | Primary body text (parchment) |
| `--color-base--subtle` | `#e3d2b0` | Secondary / muted text |
| `--color-emphasized` | `hsl(41.6, 80%, 95%)` | Headings, strong text |
| `--color-primary` | `#f1c45e` | Gold accent (CTAs, badges, labels) |
| `--color-primary--hover` | `#ffd16b` | Gold hover state |
| `--color-link` | `hsl(41.6, 84%, 65.7%)` | Link text (warm gold) |
| `--color-destructive` | `hsl(340, 100%, 50%)` | Errors, destructive actions |
| `--color-success` | `hsl(170, 100%, 35%)` | Success states |
| `--color-warning` | `hsl(48, 100%, 60%)` | Warnings |

### Usage Patterns
- **Dark backgrounds** are not pure black — they are desaturated near-blues (`#1a1a1f` to `#2c2c3c`) to reduce eye strain and feel premium.
- **Text** is not white — it is aged parchment (`#e4ddcf`) to match the Tolkien theme.
- **Accent** is a rich gold (`#f1c45e`) rather than blue, distinguishing it from generic wikis.

---

## Typography

| Role | Font Stack | Mood |
|---|---|---|
| **Headings** | `"EB Garamond", "EB Garamond-fallback", serif` | Classical, literary, evokes printed Tolkien editions |
| **Body** | `"Lora", "Lora-fallback", serif` | Readable screen serif, slightly warm |
| **Monospace** | `"Roboto Mono", "Menlo", "Consolas", "Fira Code", monospace` | Code, metadata, dates |

### Sizing & Weight Notes
- Event card day: `2.5rem`, semi-bold
- Event card month: `1.25rem`
- Event card year: small, with `1px solid` bottom border separator
- Fallback fonts (`-fallback`) are metric-matched to prevent CLS.

---

## Shape & Geometry

| Token | Value | Usage |
|---|---|---|
| `--border-radius--small` | `4px` | Buttons, tags, small chips |
| `--border-radius--medium` | `8px` | Cards, inputs, containers |
| `--border-radius--large` | `12px` | Large panels, modals |
| `--border-radius--pill` | `9999px` | Avatars, badges, toggles |

### Custom Geometry
- **Event cards (`tg-event-card`)** use a geometric **pennant notch**:
  ```css
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 16px), 0 100%);
  ```
  This creates a banner-bottom effect, making cards feel like hanging tapestries.

---

## Elevation & Shadows

Shadows are **layered** and **warm-tinted** (not cold gray), giving a candlelit depth.

### Card Shadow (`--box-shadow-card`)
```css
0.3px 0.5px 0.7px hsla(41.6, 50%, 3%, 0.3),
0.8px 1.6px 2px -0.8px hsla(41.6, 50%, 3%, 0.3),
2.1px 4.1px 5.2px -1.7px hsla(41.6, 50%, 3%, 0.3),
5px 10px 12.6px -2.5px hsla(41.6, 50%, 3%, 0.3)
```

### Dialog Shadow (`--box-shadow-dialog`)
```css
0.3px 0.5px 0.7px hsla(41.6, 50%, 3%, 0.3),
1.5px 2.9px 3.7px -0.4px hsla(41.6, 50%, 3%, 0.3),
2.7px 5.4px 6.8px -0.7px hsla(41.6, 50%, 3%, 0.3),
4.5px 8.9px 11.2px -1.1px hsla(41.6, 50%, 3%, 0.3),
7.1px 14.3px 18px -1.4px hsla(41.6, 50%, 3%, 0.3),
11.2px 22.3px 28.1px -1.8px hsla(41.6, 50%, 3%, 0.3),
17px 33.9px 42.7px -2.1px hsla(41.6, 50%, 3%, 0.3),
25px 50px 62.9px -2.5px hsla(41.6, 50%, 3%, 0.3)
```

### Principle
- Shadows use `hsla(41.6, 50%, 3%, 0.3)` — a very dark, slightly warm shadow color.
- Multiple stops create physical realism rather than a flat drop shadow.

---

## Motion & Animation

| Token | Duration | Use |
|---|---|---|
| `--transition-duration-base` | `100ms` | Hover color changes, micro-feedback |
| `--transition-duration-medium` | `250ms` | Drawers, collapsibles, theme switches |

### Keyframes
- `mwe-popups-fade-in-up` / `mwe-popups-fade-in-down` — link hover preview cards (0.2s ease)
- `mwe-popups-fade-out-down` / `mwe-popups-fade-out-up` — preview dismissal
- `spin` — `60s linear infinite` slow rotation for decorative elements
- `cdx-animation-progress-bar__bar` — loading / progress bars

### Principles
- Motion is **subtle and functional** — no flashy entrance animations.
- Popups feel **instant** (0.2s) but directional (up/down based on cursor position).
- The `60s` spin suggests a slowly rotating seal or emblem, not a loading spinner.

---

## Component Patterns

### 1. Featured Card
- Surface: `--color-surface-2` (`#23232e`)
- Radius: `--border-radius--large` (`12px`)
- Shadow: `--box-shadow-card`
- Label badge: `--color-primary` gold background, `--color-surface-0` text, top-left corner
- Hover: subtle lift or border glow

### 2. Event Card (`tg-event-card`)
- Size: `300px × 300px`
- Background: `--color-surface-2`
- Clip-path: pennant notch
- Date stack inside:
  - Year: small, `border-bottom: 1px solid` separator
  - Month: `1.25rem`
  - Day: `2.5rem`, semi-bold
- Content area below date (reversed flex direction)

### 3. Link / Interaction
- Default: `--color-link` (warm gold)
- Hover: `--color-primary--hover` (`#ffd16b`)
- Page preview on hover: modal card fades in from cursor direction

### 4. Drawer / Sidebar
- Surface: `--color-surface-1`
- Keyboard shortcut hints inline (e.g., `alt shift r`)
- Section dividers implied by spacing, not heavy borders

---

## Summary: The "Tolkien Gateway" Visual Identity

| Aspect | Decision |
|---|---|
| **Mood** | Dark archive, candlelit library, premium encyclopedia |
| **Color signature** | Near-black desaturated blues + aged parchment + rich gold |
| **Typography signature** | EB Garamond headings + Lora body = literary, timeless |
| **Shape signature** | 12px rounded cards + geometric clip-path pennants |
| **Shadow signature** | Multi-layered warm-tinted shadows (candlelit depth) |
| **Motion signature** | Functional micro-transitions (100–250ms) + directional hover previews |

---

## Copy-Paste CSS Variables

```css
:root {
  /* surfaces */
  --tg-surface-0: #1a1a1f;
  --tg-surface-1: #1f1f24;
  --tg-surface-2: #23232e;
  --tg-surface-3: #282833;
  --tg-surface-4: #2c2c3c;

  /* text */
  --tg-text: #e4ddcf;
  --tg-text-subtle: #e3d2b0;
  --tg-text-emphasis: hsl(41.6, 80%, 95%);

  /* accents */
  --tg-gold: #f1c45e;
  --tg-gold-hover: #ffd16b;
  --tg-link: hsl(41.6, 84%, 65.7%);

  /* feedback */
  --tg-danger: hsl(340, 100%, 50%);
  --tg-success: hsl(170, 100%, 35%);
  --tg-warning: hsl(48, 100%, 60%);

  /* shape */
  --tg-radius-sm: 4px;
  --tg-radius-md: 8px;
  --tg-radius-lg: 12px;
  --tg-radius-pill: 9999px;

  /* motion */
  --tg-t-fast: 100ms;
  --tg-t-med: 250ms;

  /* shadows */
  --tg-shadow-card:
    0.3px 0.5px 0.7px hsla(41.6,50%,3%,0.3),
    0.8px 1.6px 2px -0.8px hsla(41.6,50%,3%,0.3),
    2.1px 4.1px 5.2px -1.7px hsla(41.6,50%,3%,0.3),
    5px 10px 12.6px -2.5px hsla(41.6,50%,3%,0.3);

  --tg-shadow-dialog:
    0.3px 0.5px 0.7px hsla(41.6,50%,3%,0.3),
    1.5px 2.9px 3.7px -0.4px hsla(41.6,50%,3%,0.3),
    2.7px 5.4px 6.8px -0.7px hsla(41.6,50%,3%,0.3),
    4.5px 8.9px 11.2px -1.1px hsla(41.6,50%,3%,0.3),
    7.1px 14.3px 18px -1.4px hsla(41.6,50%,3%,0.3),
    11.2px 22.3px 28.1px -1.8px hsla(41.6,50%,3%,0.3),
    17px 33.9px 42.7px -2.1px hsla(41.6,50%,3%,0.3),
    25px 50px 62.9px -2.5px hsla(41.6,50%,3%,0.3);

  /* typography */
  --tg-font-heading: "EB Garamond", serif;
  --tg-font-body: "Lora", serif;
  --tg-font-mono: "Roboto Mono", monospace;
}
```
