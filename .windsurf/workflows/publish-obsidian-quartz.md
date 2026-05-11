---
description: Publish an Obsidian vault to the web using Quartz on Vercel with full UI customization
---

# Publish Obsidian Vault with Quartz

## Prerequisites
- Node.js LTS installed
- Git installed
- GitHub account
- Vercel account

## Steps

1. **Create GitHub repo**
   - Go to https://github.com/new
   - Name: `my-obsidian-quartz`
   - Public
   - Do NOT initialize with README

2. **Initialize Quartz**
   ```bash
   npx quartz create
   ```
   Choose empty Quartz.

3. **Link Obsidian vault**
   ```bash
   cd my-obsidian-quartz
   mklink /D content "C:\Users\YOURNAME\Documents\Obsidian Vault"
   ```
   (Windows Admin CMD. On macOS/Linux: `ln -s`.)

4. **Configure `quartz.config.ts`**
   - Set `baseUrl` to your future Vercel URL
   - Use `Plugin.ExplicitPublish()` to control which notes go live
   - Add `publish: true` to frontmatter of notes you want public

5. **Apply custom theme**
   - Copy variables from `docs/AESTHETICS_TolkienGateway.md`
   - Paste into `quartz/styles/custom.scss`
   - Add Google Fonts link in layout config

6. **Test locally**
   ```bash
   npx quartz build --serve
   ```
   Open http://localhost:8080

7. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial Quartz setup"
   git remote add origin https://github.com/YOURUSERNAME/my-obsidian-quartz.git
   git push -u origin main
   ```

8. **Deploy to Vercel**
   - https://vercel.com/new → import repo
   - Framework: **Other**
   - Build command: `npx quartz build`
   - Output directory: `public`
   - Deploy

9. **Daily workflow**
   - Write in Obsidian (symlinked folder)
   - Build & preview: `npx quartz build --serve`
   - Push: `git add . && git commit -m "update" && git push`
   - Vercel auto-deploys
