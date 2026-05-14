#!/usr/bin/env node
/**
 * Copy markdown files from MyWiki vault to content/ folder
 * Runs before every build to sync vault content
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const VAULT_PATH = path.join(__dirname, "../..", "MyWiki");
const CONTENT_PATH = path.join(__dirname, "../content");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyDir(src, dest, depth = 0) {
  if (!fs.existsSync(src)) {
    console.warn(`  ⚠️  Source not found: ${src}`);
    return;
  }

  ensureDir(dest);

  const files = fs.readdirSync(src);
  let copiedCount = 0;

  files.forEach((file) => {
    // Skip hidden files and excluded folders
    if (file.startsWith(".") || file === "_my_template" || file === "raw") {
      return;
    }

    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    const stat = fs.statSync(srcFile);

    if (stat.isDirectory()) {
      copyDir(srcFile, destFile, depth + 1);
    } else if (file.endsWith(".md") || file.endsWith(".pdf")) {
      fs.copyFileSync(srcFile, destFile);
      copiedCount++;
    }
  });

  if (depth === 0 && copiedCount > 0) {
    console.log(`  ✓ Copied ${copiedCount} files from ${path.basename(src)}`);
  }
}

function main() {
  console.log("📚 Syncing MyWiki vault to content folder...");

  try {
    // Ensure content directory exists
    ensureDir(CONTENT_PATH);

    // Copy wiki/ folder
    console.log("  📖 Copying wiki notes...");
    copyDir(
      path.join(VAULT_PATH, "wiki"),
      path.join(CONTENT_PATH, "wiki")
    );

    // Copy databricks/ folder (if exists)
    if (fs.existsSync(path.join(VAULT_PATH, "databricks"))) {
      console.log("  ☁️  Copying databricks notes...");
      copyDir(
        path.join(VAULT_PATH, "databricks"),
        path.join(CONTENT_PATH, "databricks")
      );
    }

    // Copy root-level markdown files
    console.log("  📄 Copying root-level notes...");
    const rootFiles = ["Main.md", "Welcome.md", "Gandalf.md", "windsurf.md"];
    let rootCopied = 0;

    rootFiles.forEach((file) => {
      const src = path.join(VAULT_PATH, file);
      const dest = path.join(CONTENT_PATH, file);

      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        rootCopied++;
      }
    });

    if (rootCopied > 0) {
      console.log(`  ✓ Copied ${rootCopied} root files`);
    }

    console.log(
      "✅ Vault sync complete! Content ready for Quartz build.\n"
    );
  } catch (error) {
    console.error("❌ Error syncing vault:", error.message);
    process.exit(1);
  }
}

main();
