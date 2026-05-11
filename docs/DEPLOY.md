# Deploy "MyWiki - UI" Obsidian Vault → Quartz → GitHub → Vercel

> Tailored to your actual vault structure at `C:\Users\SUBHADIP\MYPROJECTS\MyWiki - UI\`

---

## Your Vault Layout (what gets published)

```
MyWiki - UI/
├── .obsidian/        ← skip (Obsidian config)
├── .windsurf/        ← skip (IDE workflows)
├── docs/             ← skip (internal reference docs)
├── _my_template/     ← skip (templates)
├── databricks/       ← PUBLISH
├── raw/              ← PUBLISH
├── starter-configs/  ← PUBLISH
└── wiki/             ← PUBLISH
```

We will keep the vault as-is and create Quartz in a **sibling folder** so the vault stays clean. Quartz will read content directly from your vault using a symlink.

---

## Phase 1 — One-Time Setup

### Step 1: Install prerequisites

Verify in PowerShell:
```powershell
node -v   # need v22+ (or v20+)
npm -v
git --version
```

If missing:
- **Node.js LTS**: https://nodejs.org
- **Git for Windows**: https://git-scm.com/download/win

### Step 2: Create a GitHub repository

1. Open https://github.com/new
2. Repository name: `mywiki-ui-site`
3. Visibility: **Public** (required for free Vercel + Quartz GitHub Pages)
4. **Do not** add README / .gitignore / license
5. Click **Create repository**

Copy the HTTPS URL (e.g., `https://github.com/YOURNAME/mywiki-ui-site.git`).

### Step 3: Initialize Quartz **inside your vault** (best for personal use)

This avoids symlinks (which break Git + Linux Vercel) and avoids copy-sync scripts. One folder, one git repo, one `push` deploys everything.

```powershell
cd "C:\Users\SUBHADIP\MYPROJECTS\MyWiki - UI"
npx quartz create
```

Answer prompts:
- Choose: **Empty Quartz**
- Initialize with: **Treat the contents of `content/` folder as the source** → choose **`./` (current directory)** when asked, OR pick the **vault folder option**
- Link resolution: **Shortest path**

> If Quartz asks for a target folder and refuses to use `.`, accept its default and we'll relocate `content/` in Step 4.

After this, your vault folder will gain:
```
MyWiki - UI/
├── (your existing folders unchanged)
├── quartz/             ← Quartz source
├── quartz.config.ts    ← config
├── quartz.layout.ts    ← layout
├── package.json
├── node_modules/       ← will be gitignored
└── content/            ← may be created by Quartz
```

### Step 4: Point Quartz at your existing folders

Quartz expects content under `content/`. Your vault has content at the root (`wiki/`, `databricks/`, etc.).

**Easiest fix:** delete the empty `content/` folder Quartz created and edit `quartz.config.ts` to read from the vault root.

```powershell
Remove-Item -Recurse -Force ".\content" -ErrorAction SilentlyContinue
```

Then in `quartz.config.ts` add/modify the build invocation. Or, simpler, **always run Quartz with the `--directory` flag**:

```powershell
npx quartz build --directory .
```

This tells Quartz to treat the current folder (vault root) as the content source.

> Add this to `package.json` scripts so you don't need to remember:
> ```json
> "scripts": {
>   "build": "npx quartz build --directory .",
>   "dev":   "npx quartz build --directory . --serve"
> }
> ```

### Step 5: Tell Quartz to ignore folders that should not publish

Edit `quartz.config.ts` in the vault root. Find the `configuration` block and add `ignorePatterns`:

```ts
const config: QuartzConfig = {
  configuration: {
    pageTitle: "MyWiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: { provider: "plausible" },
    locale: "en-US",
    baseUrl: "mywiki-ui-site.vercel.app",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      ".windsurf",
      "docs",
      "_my_template",
      "**/node_modules",
    ],
    defaultDateType: "created",
    theme: {
      // your theme block (kept default for now, customized in Step 7)
    },
  },
  plugins: { /* ... */ },
}
```

### Step 6: Lock publishing to "explicit opt-in" notes

In `quartz.config.ts`, find `plugins.filters` and set it to:
```ts
filters: [
  Plugin.RemoveDrafts(),
  Plugin.ExplicitPublish(),
],
```

Only notes with this frontmatter will publish:
```yaml
---
publish: true
---
```

> **Already done for your vault.** All 157 existing notes in `wiki/`, `databricks/`, `raw/`, `starter-configs/` were bulk-tagged with `publish: true` via `docs/add-publish-frontmatter.ps1`. New notes you create later will default to **NOT published** — add `publish: true` to opt them in.

### Step 7: Apply the Tolkien Gateway theme

Open `quartz/styles/custom.scss` and **replace its contents** with:

```scss
:root {
  --tg-surface-0:#1a1a1f; --tg-surface-1:#1f1f24;
  --tg-surface-2:#23232e; --tg-surface-3:#282833; --tg-surface-4:#2c2c3c;
  --tg-text:#e4ddcf; --tg-text-subtle:#e3d2b0;
  --tg-text-emphasis:hsl(41.6,80%,95%);
  --tg-gold:#f1c45e; --tg-gold-hover:#ffd16b;
  --tg-link:hsl(41.6,84%,65.7%);
  --tg-radius-sm:4px; --tg-radius-md:8px; --tg-radius-lg:12px;
  --tg-t-fast:100ms; --tg-t-med:250ms;
  --tg-shadow-card:
    0.3px 0.5px 0.7px hsla(41.6,50%,3%,.3),
    0.8px 1.6px 2px -.8px hsla(41.6,50%,3%,.3),
    2.1px 4.1px 5.2px -1.7px hsla(41.6,50%,3%,.3),
    5px 10px 12.6px -2.5px hsla(41.6,50%,3%,.3);
  --tg-font-heading:"EB Garamond",Georgia,serif;
  --tg-font-body:"Lora",Georgia,serif;
}

body { background:var(--tg-surface-0); color:var(--tg-text); font-family:var(--tg-font-body); }
.article-title, h1,h2,h3,h4,h5,h6 { font-family:var(--tg-font-heading); color:var(--tg-text-emphasis); }
a { color:var(--tg-link); transition:color var(--tg-t-fast); }
a:hover { color:var(--tg-gold-hover); }

.popover .popover-inner, .graph>.graph-outer, .backlinks>ul, toc>.toc-content {
  background:var(--tg-surface-2);
  border-radius:var(--tg-radius-lg);
  box-shadow:var(--tg-shadow-card);
  border:none;
}
a.tag {
  background:var(--tg-surface-3); color:var(--tg-gold);
  border:1px solid var(--tg-gold); border-radius:9999px;
  padding:.15rem .6rem;
}
a.tag:hover { background:var(--tg-gold); color:var(--tg-surface-0); }
.callout { background:var(--tg-surface-2); border-radius:var(--tg-radius-md); border-left:4px solid var(--tg-gold); }
```

Then load Google Fonts. Edit `quartz.layout.ts` and inside the existing `Component.Head()` (or wherever the head is configured), or create one if absent. Quartz v4 already exposes a `head` slot — open `quartz/components/Head.tsx` and add inside `<head>`:

```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Lora:wght@400;500;600;700&family=Roboto+Mono&display=swap"
/>
```

### Step 8: Build and preview locally

```powershell
cd "C:\Users\SUBHADIP\MYPROJECTS\MyWiki - UI"
npm run dev
```

Open http://localhost:8080.
- Verify your `wiki/`, `databricks/`, `raw/`, `starter-configs/` notes appear.
- Verify `docs/`, `_my_template/`, `.obsidian/` do **not** appear.
- Verify dark theme + gold links + EB Garamond headings.

Press `Ctrl+C` to stop the dev server.

---

## Phase 2 — Push to GitHub

### Step 9: Initialize Git and push to GitHub

First, create a `.gitignore` in the vault root:

```
node_modules/
public/
.quartz-cache/
.obsidian/workspace*
.obsidian/cache
.DS_Store
.env
.vercel
```

Then:

```powershell
cd "C:\Users\SUBHADIP\MYPROJECTS\MyWiki - UI"
git init
git add .
git commit -m "Initial commit: vault + Quartz with Tolkien Gateway theme"
git branch -M main
git remote add origin https://github.com/YOURNAME/mywiki-ui-site.git
git push -u origin main
```

If prompted, sign in via the browser popup (GitHub credential manager).

After push, verify on GitHub: you should see `wiki/`, `databricks/`, `quartz/`, `quartz.config.ts`, `package.json`, etc. — but **not** `node_modules/` or `public/`.

---

## Phase 3 — Deploy on Vercel

### Step 10: Import the repo

1. Go to https://vercel.com/new
2. Click **Import** next to `mywiki-ui-site`
3. Configure:
   - **Framework Preset**: `Other`
   - **Build Command**: `npx quartz build --directory .`
   - **Output Directory**: `public`
   - **Install Command**: `npm install` (default)
   - **Root Directory**: `./` (default)
4. Click **Deploy**

Wait ~1–2 minutes. You'll get a URL like `https://mywiki-ui-site.vercel.app`.

### Step 11: Update `baseUrl` to match

Edit `quartz.config.ts`:
```ts
baseUrl: "mywiki-ui-site.vercel.app",
```

Commit and push:
```powershell
cd "C:\Users\SUBHADIP\MYPROJECTS\MyWiki - UI"
git add quartz.config.ts
git commit -m "Set baseUrl"
git push
```

Vercel auto-rebuilds.

---

## Phase 4 — Daily Workflow

Whenever you edit notes in Obsidian (which is the same folder as Quartz now):

```powershell
cd "C:\Users\SUBHADIP\MYPROJECTS\MyWiki - UI"

# (Optional) preview locally
npm run dev

# Publish
git add .
git commit -m "update notes"
git push
```

Vercel rebuilds automatically on every push.

**Reminder:** New notes need `publish: true` in their frontmatter to appear on the live site.

### One-click publish from Obsidian (recommended)

Since Quartz now lives **inside** your vault, the Obsidian Git plugin can publish your site directly:

1. In Obsidian → **Settings → Community plugins → Browse**
2. Install **Obsidian Git** by Vinzent
3. Settings → Obsidian Git:
   - **Auto backup interval (minutes)**: `0` (manual) or `15` (auto every 15 min)
   - **Commit message**: `vault: {{date}}`
   - **Pull updates on startup**: enable
4. Hotkey: assign `Ctrl+Shift+P` to **"Obsidian Git: Create backup"**
5. Press the hotkey from inside Obsidian → commits & pushes → Vercel auto-deploys

This is your **publish-from-Obsidian** flow: write the note, set `publish: true`, hit hotkey. Done.

### Set Obsidian Templates to default `publish: true`

To make new notes opt-in by default, you can use **Templater** or the built-in **Templates** plugin:

1. Create a template file `_my_template/new-note.md`:
   ```markdown
   ---
   title: 
   created: <% tp.date.now() %>
   tags: []
   publish: true
   ---
   ```
2. Settings → Templates → set `_my_template` as the template folder
3. Use **Templates: Insert template** when creating new notes

> Or, if you want **all** new notes auto-flagged: Settings → **Note properties** → add a default property `publish: true` (Obsidian 1.4+).

---

## Appendix A — Bulk-add `publish: true` frontmatter

If you chose `Plugin.ExplicitPublish()` in Step 6, run this PowerShell script from your vault root to mark all notes in publishable folders:

```powershell
cd "C:\Users\SUBHADIP\MYPROJECTS\MyWiki - UI"
$folders = @("wiki", "databricks", "raw", "starter-configs")
foreach ($f in $folders) {
  Get-ChildItem -Path $f -Recurse -Filter *.md | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -notmatch '^---') {
      "---`npublish: true`n---`n`n" + $content | Set-Content $_.FullName
    } elseif ($content -notmatch 'publish:\s*true') {
      $content = $content -replace '^---', "---`npublish: true"
      Set-Content $_.FullName $content
    }
  }
}
```

---

## Appendix B — Alternative: Copy instead of Symlink

If symlinks cause issues, replace Step 4 with a sync script.

Create `C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site\sync.ps1`:
```powershell
$src = "C:\Users\SUBHADIP\MYPROJECTS\MyWiki - UI"
$dst = "$PSScriptRoot\content"
Remove-Item -Recurse -Force $dst -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path $dst | Out-Null
$exclude = @(".obsidian", ".windsurf", "docs", "_my_template", ".git")
Get-ChildItem $src -Force | Where-Object { $exclude -notcontains $_.Name } | ForEach-Object {
  Copy-Item $_.FullName -Destination $dst -Recurse -Force
}
```

Run before each publish:
```powershell
.\sync.ps1
git add .
git commit -m "update"
git push
```

---

## Appendix C — Custom domain (optional)

In Vercel project → **Settings → Domains** → add your domain (e.g., `mywiki.example.com`). Vercel shows the DNS records to add at your registrar. Update `baseUrl` in `quartz.config.ts` and push.

---

## Checklist

- [ ] Node.js + Git installed
- [ ] GitHub repo created (`mywiki-ui-site`)
- [ ] Quartz project initialized in `C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site`
- [ ] `content/` symlinked to vault
- [ ] `ignorePatterns` configured (`.obsidian`, `.windsurf`, `docs`, `_my_template`)
- [ ] Decided on `ExplicitPublish` vs publish-everything
- [ ] Tolkien Gateway theme pasted into `quartz/styles/custom.scss`
- [ ] Google Fonts link added to `<head>`
- [ ] Local preview verified (`npx quartz build --serve`)
- [ ] First push to GitHub
- [ ] Vercel project imported and deployed
- [ ] `baseUrl` updated to match Vercel URL
