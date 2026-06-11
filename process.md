# Process — Writing a note in Obsidian and getting it on the live site

This is a step-by-step tutorial for **Windows**. Every command shows where to type it and what to expect.

**The flow in one sentence:** you write a note in Obsidian's MyWiki vault → run `publish.bat` (one click) → 2–3 minutes later it's live at https://mywiki-ui-site.vercel.app.

---

## Where things live (memorize this)

```
C:\Users\SUBHADIP\MYPROJECTS\
├── MyWiki\              ← your Obsidian vault (you write notes here)
└── mywiki-ui-site\      ← the website (publish from here)
    ├── content\         ← auto-generated mirror of MyWiki (don't edit by hand)
    ├── publish.bat      ← DOUBLE-CLICK THIS to publish
    ├── publish.ps1      ← the PowerShell script that publish.bat runs
    └── preview.bat      ← DOUBLE-CLICK THIS to preview locally
```

**Rule of thumb:** you only ever *write* in `MyWiki\`. The site repo's `content\` folder is auto-managed — never edit files there directly.

---

## One-time setup (do this once, then forget)

You need three things installed. Check by running these in PowerShell (right-click Start → "Terminal" or "PowerShell"):

```powershell
node --version    # need v22 or higher
npm --version     # need v10.9 or higher
git --version     # any recent version
```

If any is missing:

- **Node + npm:** download from https://nodejs.org (LTS)
- **Git:** download from https://git-scm.com/download/win

Then, **once**, install the site's dependencies. Open PowerShell and run:

```powershell
cd C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site
npm install
```

That's it for setup. You shouldn't need to touch this again unless `package.json` changes.

---

## The daily flow (3 steps)

### Step 1 — Write the note in Obsidian

1. Open Obsidian. The vault is **MyWiki** (`C:\Users\SUBHADIP\MYPROJECTS\MyWiki`).
2. Create your note anywhere under one of these folders (any other location won't be published):
   - `MyWiki\wiki\...`
   - `MyWiki\databricks\...`
   - or as one of the named root files: `Main.md`, `Welcome.md`, `Gandalf.md`, `windsurf.md`
3. Save it (Ctrl+S, or just let Obsidian autosave).

**Frontmatter:** nothing required. If you don't add `publish: true` yourself, the publish script will add it automatically. You can use `aliases`, `tags`, `category`, `status`, etc. — these show up in the page's Properties bar.

To **hide** a note from the website, add `draft: true` to its frontmatter, OR move it under `MyWiki\raw\` or any folder starting with `.` or `_my_template\`.

---

### Step 2 — (Optional) Preview locally before publishing

Open **File Explorer** → navigate to `C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site` → **double-click `preview.bat`**.

A black window opens, you'll see "Starting local preview at http://localhost:8080" and a bunch of build output. When you see lines like `Done processing 162 files`, the site is ready.

Open your browser to **http://localhost:8080** and check the note renders correctly.

To stop the preview: click the black window, press **Ctrl+C**, then close it. (Or just close the window — it'll force-stop.)

You can skip this step if you're confident; the publish step itself runs a build and would catch any error before pushing.

---

### Step 3 — Publish to the live site

Open **File Explorer** → navigate to `C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site` → **double-click `publish.bat`**.

What happens, in order:
1. The script syncs your vault into `content\` (you'll see "Copied 162 files").
2. It shows you the list of changed files (e.g. `M  content/wiki/.../my-new-note.md`).
3. It asks **"Commit and push these changes? (Y/n)"** → press Enter for Yes, or `n` then Enter to cancel.
4. It asks **"Commit message (Enter for default)"** → type a short summary like `add Kafka note`, or just press Enter to use a timestamp.
5. It runs `git add content/`, `git commit`, and `git push origin main`.
6. Done. The script prints the live URL.

Vercel notices the push and starts a build automatically. The site updates in **2–3 minutes**. You can watch the build progress at https://vercel.com (sign in with your GitHub account).

---

## Adding many notes at once

Exactly the same flow. The publish script always syncs the **entire vault**, so whether you added 1 note or 50, you just double-click `publish.bat` once.

If you want to review what's changing before publishing, you can run `preview.bat` first — it shows you the changed file list during build.

---

## Triggering publish from Obsidian itself

You have **two practical options**. Pick whichever feels lighter.

### Option A — Templater "user script" button (already installed)

The `templater-obsidian` plugin is enabled in your vault. You can wire a single Obsidian command (and optionally a hotkey) to invoke `publish.ps1`.

1. In Obsidian, open **Settings → Templater**.
2. Under **User function settings → User Script Functions**, set a script folder if you don't already have one — e.g. `_scripts` (this is a folder inside your vault, like `MyWiki\_scripts\`).
3. Create the script folder in File Explorer if it doesn't exist: `C:\Users\SUBHADIP\MYPROJECTS\MyWiki\_scripts\`.
4. Inside that folder, create a file named `publish.js` with this content:

   ```javascript
   module.exports = async function publish() {
     const { exec } = require("child_process");
     return new Promise((resolve, reject) => {
       exec(
         'powershell -NoLogo -ExecutionPolicy Bypass -File "C:\\Users\\SUBHADIP\\MYPROJECTS\\mywiki-ui-site\\publish.ps1" -NoPrompt',
         (err, stdout, stderr) => {
           if (err) reject(err);
           else resolve("Published: " + stdout.split("\n").slice(-3).join(" ").trim());
         }
       );
     });
   };
   ```

5. Create a template file (e.g. `MyWiki\_templates\publish.md`) containing only:

   ```
   <% tp.user.publish() %>
   ```

6. In **Templater settings**, bind the template to a hotkey (Settings → Hotkeys → search "Templater: Open template") and pick this template.

Now pressing your hotkey while in Obsidian runs `publish.ps1 -NoPrompt`, which auto-uses a timestamped commit message and pushes without asking. The result message appears in Obsidian.

> Note: `-NoPrompt` means it'll commit and push without confirmation. If you'd rather see the prompt, drop the `-NoPrompt` flag — but then you need a terminal window to confirm in, so the Obsidian-trigger path doesn't help much; in that case just use `publish.bat` from File Explorer.

### Option B — Pin `publish.bat` to your taskbar

If the Templater route feels too involved:

1. Right-click `publish.bat` in File Explorer → "Show more options" → "Pin to taskbar" (you may need to use `Create shortcut` first, then pin the shortcut).
2. Now publishing is one click from anywhere — your taskbar button runs the publish flow in a console window.

This is what most people end up doing. It's not "inside Obsidian" but it's one click and you always see what's happening.

---

## Doing it with raw commands (no scripts)

If you ever want to bypass the helper scripts (debugging, scripting, etc.), here is the exact equivalent in PowerShell:

```powershell
cd C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site

# 1. Sync vault -> content/
npm run prebuild

# 2. Inspect what changed
git status content/

# 3. Stage, commit, push
git add content/
git commit -m "content: add note on Kafka"
git push origin main
```

That's literally what `publish.ps1` does, plus the friendlier prompts.

---

## What if I want to preview AND publish in one go?

```powershell
cd C:\Users\SUBHADIP\MYPROJECTS\mywiki-ui-site
npm run dev
# Browse http://localhost:8080, satisfied?
# Press Ctrl+C in the dev window to stop it.
# Then double-click publish.bat.
```

There's no need to publish-without-preview-first; the publish step itself runs Vercel's build remotely. The local preview is just for catching mistakes before they reach the live site.

---

## Things that can go wrong

| Symptom | Likely cause | Fix |
|---|---|---|
| `publish.bat` opens and immediately closes | PowerShell execution policy blocking the script | Open PowerShell as Admin once and run: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| "Vault not found" warning during sync | The script expects `MyWiki\` as a sibling of `mywiki-ui-site\` | Make sure both folders are directly under `C:\Users\SUBHADIP\MYPROJECTS\` |
| Note exists in Obsidian but not on the site | Note is under a non-published folder, or has `draft: true` | Move it into `wiki\` or `databricks\`, or remove `draft: true` |
| `git push` rejected | Someone else pushed first (or you have an old local copy) | `git pull --rebase origin main`, then re-run `publish.bat` |
| Vercel build fails | Usually a Quartz plugin error or broken wikilink | Open Vercel dashboard → click the failed deployment → read the log. Reproduce locally with `npm run build` |
| Image embed (`![[pic.png]]`) breaks on the site | The sync script copies `.md` and `.pdf` only — images aren't mirrored yet | Either extend `scripts/copy-vault-content.js` to copy `.png/.jpg/.svg`, or host images elsewhere |
| Local preview stuck showing old component | Quartz dev server occasionally serves stale `.tsx` cache | Stop with Ctrl+C, then double-click `preview.bat` again |

---

## Quick reference card

| I want to... | Do this |
|---|---|
| Write a note | Obsidian → MyWiki vault → save under `wiki\`, `databricks\`, or a named root file |
| Preview locally | Double-click `preview.bat`, open http://localhost:8080 |
| Publish to the live site | Double-click `publish.bat`, press Enter through the prompts |
| Publish with a specific commit message from the terminal | `cd ...mywiki-ui-site` → `.\publish.bat "content: my message"` |
| Publish silently (no prompts, e.g. from Obsidian) | Run `publish.ps1 -NoPrompt` |
| Skip a note from publishing | Add `draft: true` to its frontmatter, or move under `MyWiki\raw\` |
| See what would be published | `cd ...mywiki-ui-site` → `npm run prebuild` → `git status content/` |
| See the live deploy status | https://vercel.com (sign in with GitHub) |
| Live site | https://mywiki-ui-site.vercel.app |
