# Deploy rules

## RULE 1 — graphify output is NEVER deployed

`/graphify` generates knowledge-graph **tooling artifacts**, not notes. These must
never be synced into `content/`, committed, or published to the live site — at any
point in time.

Excluded everywhere (file or directory):

- `graphify-out/` (and nested)
- any name starting with `graphify` (e.g. a generated Obsidian vault `graphify-…`)
- `GRAPH_REPORT.md`
- `graph.json`, `graph.html`, `graph.svg`, `graph.graphml`, `cypher.txt`

This is enforced in **three** layers:

1. **Sync filter** — `scripts/copy-vault-content.js` skips any file/dir via
   `isExcluded()` (the `EXCLUDED_NAMES` set + `^graphify` regex). The vault → `content/`
   prebuild can never copy graphify output.
2. **.gitignore** — `graphify-out/`, `**/GRAPH_REPORT.md`, `content/**/graphify*/`, etc.
   so even a stray file can't be committed.
3. **Review** — before `publish`, confirm `git status` shows no graphify paths.

When adding a new graphify artifact type, add its name to **both** `EXCLUDED_NAMES`
in `scripts/copy-vault-content.js` and the `.gitignore` block.

## Publishing notes

Notes live in the Obsidian vault at `../MyWiki`. To publish the latest:

```
npm run prebuild   # sync vault → content/ (graphify auto-excluded)
git add content
git commit -m "content: sync vault notes"
git push origin main   # Vercel auto-deploys from main
```

`publish.ps1` wraps the same flow. The site builds from the committed `content/`
folder (the vault isn't present on Vercel, so the sync there is a no-op).
