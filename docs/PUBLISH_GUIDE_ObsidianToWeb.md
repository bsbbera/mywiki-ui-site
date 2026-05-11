# Publish an Obsidian Vault to the Web — Step-by-Step Guide

> Goal: Maximum UI customization + free hosting + easy publishing from Obsidian

---

## Which Tool Should You Use?

| Tool | Setup | Customization | Cost | Best For |
|---|---|---|---|---|
| **Quartz v4** | Medium | **Unlimited** (React, Tailwind, components, themes) | **Free** (Vercel) | You want total visual control |
| **Digital Garden** | Easy | Good (themes, CSS, plugins) | **Free** (Vercel) | You want easy setup + decent look |
| **Obsidian Publish** | Dead simple | Limited (custom CSS only) | **$8/month** | You want zero maintenance |
| **Astro Starlight** | Hard | Unlimited | Free | Docs sites, not Obsidian-native |

### Recommendation

- **Choose Quartz v4** if you want to recreate the Tolkien Gateway aesthetic (dark mode, custom components, gold typography, graph view, popover previews). It is the only option that gives you full React + Tailwind control.
- **Choose Digital Garden** if you want something working in 30 minutes without touching code.

This guide covers **Quartz v4** (primary) and adds a **Digital Garden** quick-start as a fallback.

---

## Part 1 — Quartz v4 (Full Customization)

### Step 1: Prerequisites

Install on your machine:
- **Node.js** (LTS) → https://nodejs.org
- **Git** → https://git-scm.com
- **Obsidian** (you already have this)

Verify:
```bash
node -v   # should be v18+
npm -v    # should be v9+
git -v
```

### Step 2: Create a GitHub Repository

1. Go to https://github.com/new
2. Name it `my-obsidian-quartz` (or anything)
3. Make it **Public** (required for free Vercel deploy)
4. Do **NOT** initialize with README (Quartz will do this)

### Step 3: Initialize Quartz

// turbo
```bash
npx quartz create
```

When prompted:
- Choose **empty Quartz** (not the starter)
- It will create a folder (e.g., `my-obsidian-quartz`)

### Step 4: Link Your Obsidian Vault

Quartz expects markdown files in a `content/` folder.

**Option A: Copy your vault in**
```bash
cd my-obsidian-quartz
mkdir content
cp -r "C:/Users/YOURNAME/Documents/Obsidian Vault/"* content/
```

**Option B: Symlink your vault (recommended)**
```bash
cd my-obsidian-quartz
mklink /D content "C:\Users\YOURNAME\Documents\Obsidian Vault"
```
*(On Windows use `mklink /D` in an Administrator Command Prompt. On macOS/Linux use `ln -s`.)*

### Step 5: Configure Quartz

Edit `quartz.config.ts`:

```ts
const config = {
  configuration: {
    pageTitle: "My Wiki",
    locale: "en-US",
    baseUrl: "my-obsidian-quartz.vercel.app", // your Vercel URL later
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
        mermaid: true,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        openLinksInNewTab: true,
      }),
      Plugin.Description(),
    ],
    filters: [Plugin.ExplicitPublish()], // only publish notes with `publish: true` in frontmatter
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex(),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}
```

**Important:** `Plugin.ExplicitPublish()` means only notes with frontmatter `publish: true` will be published. Add this to any Obsidian note:
```yaml
---
publish: true
---
```

### Step 6: Apply the Tolkien Gateway Aesthetic

Create `quartz/styles/custom.scss`:

```scss
@use "sass:color";

/* ========================================
   Tolkien Gateway Dark Theme for Quartz
   ======================================== */

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

  /* shape */
  --tg-radius-sm: 4px;
  --tg-radius-md: 8px;
  --tg-radius-lg: 12px;

  /* motion */
  --tg-t-fast: 100ms;
  --tg-t-med: 250ms;

  /* shadows */
  --tg-shadow-card:
    0.3px 0.5px 0.7px hsla(41.6,50%,3%,0.3),
    0.8px 1.6px 2px -0.8px hsla(41.6,50%,3%,0.3),
    2.1px 4.1px 5.2px -1.7px hsla(41.6,50%,3%,0.3),
    5px 10px 12.6px -2.5px hsla(41.6,50%,3%,0.3);

  /* typography */
  --tg-font-heading: "EB Garamond", Georgia, serif;
  --tg-font-body: "Lora", Georgia, serif;
}

/* base page */
body {
  background: var(--tg-surface-0);
  color: var(--tg-text);
  font-family: var(--tg-font-body);
}

/* headings */
.article-title,
h1, h2, h3, h4, h5, h6 {
  font-family: var(--tg-font-heading);
  color: var(--tg-text-emphasis);
}

/* links */
a {
  color: var(--tg-link);
  transition: color var(--tg-t-fast);
}
a:hover {
  color: var(--tg-gold-hover);
}

/* Quartz-specific overrides */
.page > #quartz-body {
  background: var(--tg-surface-0);
}

/* sidebar / explorer */
.sidebar {
  background: var(--tg-surface-1);
  border-radius: var(--tg-radius-lg);
}

/* cards / popovers */
.popover .popover-inner,
.graph > .graph-outer,
.backlinks > ul,
toc > .toc-content {
  background: var(--tg-surface-2);
  border-radius: var(--tg-radius-lg);
  box-shadow: var(--tg-shadow-card);
  border: none;
}

/* tags / pills */
a.tag {
  background: var(--tg-surface-3);
  color: var(--tg-gold);
  border-radius: var(--tg-radius-pill);
  border: 1px solid var(--tg-gold);
  padding: 0.15rem 0.6rem;
}
a.tag:hover {
  background: var(--tg-gold);
  color: var(--tg-surface-0);
}

/* search modal */
#search-container > .search-overlay {
  background: rgba(0,0,0,0.7);
}
#search-container > .search-space > * {
  background: var(--tg-surface-2);
  border-radius: var(--tg-radius-lg);
}

/* callouts */
.callout {
  background: var(--tg-surface-2);
  border-radius: var(--tg-radius-md);
  border-left: 4px solid var(--tg-gold);
}

/* mermaid diagrams */
.mermaid svg {
  background: var(--tg-surface-1);
  border-radius: var(--tg-radius-md);
}
```

Also add Google Fonts to `quartz/components/Head.tsx` or via `quartz.layout.ts`:

```ts
// In quartz.layout.ts, inside Component.Head() or via a custom head component:
Component.Head({
  links: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Lora:wght@400;500;600;700&family=Roboto+Mono&display=swap" },
  ]
})
```

### Step 7: Build & Test Locally

```bash
npx quartz build --serve
```

Open http://localhost:8080 and verify your notes, links, graph view, and theme.

### Step 8: Push to GitHub

```bash
git init
git add .
git commit -m "Initial Quartz setup with Tolkien theme"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/my-obsidian-quartz.git
git push -u origin main
```

### Step 9: Deploy to Vercel (Free)

1. Go to https://vercel.com/new
2. Import your `my-obsidian-quartz` GitHub repo
3. Framework preset: **Other**
4. Build command: `npx quartz build`
5. Output directory: `public`
6. Click **Deploy**

Vercel will give you a URL like `my-obsidian-quartz.vercel.app`.

**Auto-deploy:** Every `git push` to `main` will automatically rebuild and redeploy.

### Step 10: Update Content from Obsidian

Whenever you write in Obsidian:
1. Save your notes
2. If you used a symlink, the files are already in `content/`
3. Run:
   ```bash
   npx quartz build
   git add .
   git commit -m "Update notes"
   git push origin main
   ```

Or use the **Obsidian Git plugin** to auto-commit and push whenever you save.

---

## Part 2 — Digital Garden (Easier Alternative)

If Quartz feels like too much, use **Digital Garden**.

### Step 1: Prerequisites
- GitHub account
- Vercel account

### Step 2: Fork the Template
1. Go to https://github.com/oleeskild/digital-garden
2. Click **Use this template** → **Create a new repository**
3. Name it `my-digital-garden`

### Step 3: Install the Obsidian Plugin
1. In Obsidian → **Settings** → **Community plugins** → **Browse**
2. Search for **"Digital Garden"**
3. Install & enable it
4. Go to the plugin settings and paste:
   - GitHub username
   - Repository name: `my-digital-garden`
   - GitHub token (create one at https://github.com/settings/tokens with `repo` scope)

### Step 4: Publish Notes
Add to any note's frontmatter:
```yaml
---
dg-publish: true
---
```

Click the **Digital Garden** ribbon icon (or run command) to publish.

### Step 5: Deploy on Vercel
1. Go to https://vercel.com/new
2. Import your `my-digital-garden` repo
3. Framework: **Other**
4. Deploy

Done. Your notes publish with one click from Obsidian.

### Step 6: Customize Look
Digital Garden supports custom CSS in the repo:
- Edit `src/site/styles/custom-style.scss`
- You can paste the Tolkien Gateway CSS variables above (adapted to Digital Garden's class names)

---

## Part 3 — Applying Tolkien Gateway Tokens to Your Chosen Tool

### Quartz Mapping

| Tolkien Token | Quartz Class / Variable |
|---|---|
| `--tg-surface-0` | `body`, `#quartz-body` |
| `--tg-surface-2` | `.popover-inner`, `.graph-outer`, `toc` |
| `--tg-gold` | `a.tag`, link hover accents |
| `--tg-text-emphasis` | `h1, h2, h3` |
| `--tg-font-heading` | `.article-title`, headings |
| `--tg-shadow-card` | cards, popovers, backlinks |

### Digital Garden Mapping

| Tolkien Token | Digital Garden Selector |
|---|---|
| `--tg-surface-0` | `body` |
| `--tg-surface-2` | `.content`, `.sidebar` |
| `--tg-gold` | `a`, `.tag` |
| `--tg-font-heading` | `h1, h2, h3` (load via `src/site/styles/custom-style.scss`) |

---

## Quick Reference: Daily Workflow

### With Quartz
```bash
# 1. Write in Obsidian (vault linked to quartz/content)
# 2. Build & preview
npx quartz build --serve
# 3. Commit & push
git add . && git commit -m "notes update" && git push
# Vercel auto-deploys
```

### With Digital Garden
```
# 1. Write in Obsidian
# 2. Add dg-publish: true to frontmatter
# 3. Click Digital Garden publish button in Obsidian
# Vercel auto-deploys
```

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Notes not showing | Check frontmatter has `publish: true` (Quartz) or `dg-publish: true` (DG) |
| Broken images | Use Wikilinks `![[image.png]]` and ensure images are in vault |
| Graph view empty | Needs internal wikilinks `[[Note Name]]` between published notes |
| Fonts not loading | Check Google Fonts link in `<head>`, ensure no ad blocker |
| Build fails on Windows | Use Git Bash or WSL; avoid Windows paths with spaces |
| Dark mode not applying | Quartz auto-detects OS preference; add `.darkmode` class manually if needed |

---

## Next Steps for Maximum Polish

1. **Add a custom Quartz component** (e.g., a "Shire Date" banner like Tolkien Gateway)
2. **Override the popover preview** to match the warm gold shadow style
3. **Add an event card component** using the `clip-path: polygon(...)` from the aesthetics file
4. **Enable the graph view** and style nodes with gold highlights
5. **Add search** — Quartz has built-in full-text search (powered by FlexSearch)
