#!/usr/bin/env node
/**
 * Copy markdown files from MyWiki vault to content/ folder
 * Runs before every build to sync vault content
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, "..");

// Vault is at ../MyWiki relative to project root
const VAULT_PATH = path.join(PROJECT_ROOT, "..", "MyWiki");
const CONTENT_PATH = path.join(PROJECT_ROOT, "content");

// Debug logging
const DEBUG = process.env.DEBUG_COPY === "true";

function log(...args) {
  if (DEBUG) console.log(...args);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Copy a markdown file and ensure it has `publish: true` in frontmatter.
 * Maps Obsidian Digital Garden's `dg-publish: true` to Quartz's `publish: true`.
 * If no frontmatter exists, prepends one.
 */
function copyMarkdownWithPublishFlag(srcFile, destFile) {
  let content = fs.readFileSync(srcFile, "utf8");

  // Strip BOM (Byte Order Mark) - common on Windows-created files
  if (content.charCodeAt(0) === 0xfeff) {
    content = content.slice(1);
  }

  // Also handle CRLF line endings - normalize to LF for regex
  const normalized = content.replace(/\r\n/g, "\n");

  // Check if file has frontmatter (starts with ---)
  const fmMatch = normalized.match(/^---\n([\s\S]*?)\n---\n?/);

  let newContent;
  if (fmMatch) {
    const frontmatter = fmMatch[1];
    const body = normalized.slice(fmMatch[0].length);

    // If already has `publish: true`, leave content as-is
    if (/^publish:\s*true\s*$/m.test(frontmatter)) {
      newContent = normalized;
    } else {
      // Add publish: true to existing frontmatter
      const newFm = frontmatter + "\npublish: true";
      newContent = `---\n${newFm}\n---\n${body}`;
    }
  } else {
    // No frontmatter → prepend one with publish: true
    newContent = `---\npublish: true\n---\n${normalized}`;
  }

  fs.writeFileSync(destFile, newContent);
}

function copyDir(src, dest, depth = 0) {
  if (!fs.existsSync(src)) {
    console.warn(`  ⚠️  Source not found: ${src}`);
    return 0;
  }

  ensureDir(dest);

  let totalCopied = 0;
  const files = fs.readdirSync(src);

  files.forEach((file) => {
    // Skip hidden files and excluded folders
    if (file.startsWith(".") || file === "_my_template" || file === "raw") {
      return;
    }

    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    const stat = fs.statSync(srcFile);

    if (stat.isDirectory()) {
      totalCopied += copyDir(srcFile, destFile, depth + 1);
    } else if (file.endsWith(".md")) {
      copyMarkdownWithPublishFlag(srcFile, destFile);
      totalCopied++;
      log(`    Copied (w/ publish): ${file}`);
    } else if (file.endsWith(".pdf")) {
      fs.copyFileSync(srcFile, destFile);
      totalCopied++;
      log(`    Copied: ${file}`);
    }
  });

  return totalCopied;
}

function main() {
  console.log("📚 Syncing MyWiki vault to content folder...");
  log(`\n  DEBUG: PROJECT_ROOT = ${PROJECT_ROOT}`);
  log(`  DEBUG: VAULT_PATH = ${VAULT_PATH}`);
  log(`  DEBUG: CONTENT_PATH = ${CONTENT_PATH}\n`);

  try {
    // Verify vault exists - gracefully skip on Vercel where vault isn't present
    if (!fs.existsSync(VAULT_PATH)) {
      console.log(`  ℹ️  Vault not found at: ${VAULT_PATH}`);
      console.log(`  ℹ️  Skipping sync - using committed content/ folder`);
      console.log(`  ℹ️  (This is normal on Vercel/CI builds)\n`);
      return;
    }

    // Ensure content directory exists
    ensureDir(CONTENT_PATH);

    let totalCopied = 0;

    // Copy wiki/ folder
    console.log("  📖 Copying wiki notes...");
    const wikiCopied = copyDir(
      path.join(VAULT_PATH, "wiki"),
      path.join(CONTENT_PATH, "wiki")
    );
    totalCopied += wikiCopied;
    console.log(`     ✓ Copied ${wikiCopied} files from wiki`);

    // Copy databricks/ folder (if exists)
    if (fs.existsSync(path.join(VAULT_PATH, "databricks"))) {
      console.log("  ☁️  Copying databricks notes...");
      const dbCopied = copyDir(
        path.join(VAULT_PATH, "databricks"),
        path.join(CONTENT_PATH, "databricks")
      );
      totalCopied += dbCopied;
      console.log(`     ✓ Copied ${dbCopied} files from databricks`);
    }

    // Create index.md at content root (Quartz needs this for home page)
    const indexPath = path.join(CONTENT_PATH, "index.md");
    if (!fs.existsSync(indexPath)) {
      const indexContent = `---
title: MyWiki
publish: true
---

> *"All that is gold does not glitter, not all those who wander are lost."*

Welcome to **MyWiki** — a personal knowledge garden built with [Quartz](https://quartz.jzhao.xyz) and styled after the [Tolkien Gateway](https://tolkiengateway.net).

## Browse

- [[wiki/Master Home|Wiki Home]] — curated knowledge by topic
- [[databricks/databricks|Databricks]] — cloud data & AI platform notes
- **Recent changes** — see the sidebar
- **Tags** — explore by topic

## About

This site is a public reflection of notes I keep in [Obsidian](https://obsidian.md). Updated automatically on every push.

> Built with care. Updated whenever a new idea arrives.
`;
      fs.writeFileSync(indexPath, indexContent);
      console.log("  🏠 Creating index.md home page...");
      console.log(`     ✓ Created index.md`);
    }

    // Copy root-level markdown files
    console.log("  📄 Copying root-level notes...");
    const rootFiles = ["Main.md", "Welcome.md", "Gandalf.md", "windsurf.md"];
    let rootCopied = 0;

    rootFiles.forEach((file) => {
      const src = path.join(VAULT_PATH, file);
      const dest = path.join(CONTENT_PATH, file);

      if (fs.existsSync(src)) {
        copyMarkdownWithPublishFlag(src, dest);
        rootCopied++;
        log(`    Copied (w/ publish): ${file}`);
      }
    });

    totalCopied += rootCopied;
    if (rootCopied > 0) {
      console.log(`     ✓ Copied ${rootCopied} root files`);
    }

    console.log(
      `✅ Vault sync complete! Copied ${totalCopied} files total.\n`
    );
  } catch (error) {
    console.error("❌ Error syncing vault:", error.message);
    process.exit(1);
  }
}

main();
