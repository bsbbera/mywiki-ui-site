---
title: Databases Home
Created:
  - 2026-04-30
date modified: 2026-05-29
aliases:
  - Databases Home
  - Database Management Systems
category: Index
tags:
  - index
  - databases
banner: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000"
publish: true
cssclasses:
  - wide-page
---

# 🗄️ Databases

> The theoretical foundation of data engineering — **ACID**, **normalization**, **isolation levels**, and storage-engine internals.

## 🧭 Vault Navigation

> [!info] You are here
> 🧠 [[Master Home]] · 🛠️ [[Technology Home]] · **🗄️ Databases**
>
> **Sibling tech hubs:** 📊 [[data-engineering|Data Engineering]] · 🧩 [[Software Engineering Home]] · ☁️ [[Cloud Home]] · 🧰 [[Tools Home]] · 📘 [[Guides Home]]

## 📊 At a Glance

```dataviewjs
const pages = dv.pages('"wiki/technology/databases" and !"wiki/technology/databases/Databases Home"');
const latest = pages.sort(p => p.file.mtime, 'desc').first();
dv.paragraph(`**${pages.length}** notes · last touched **${latest ? latest.file.mtime.toFormat("yyyy-MM-dd") : "—"}**`);
```

## 📚 Browse

> [!multi-column]
>
> > [!card] 📋 All Notes (A–Z)
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/databases" and !"wiki/technology/databases/Databases Home"').sort(p => p.file.name, 'asc').map(p => p.file.link))
> > ```
>
> > [!card] 🕒 Recently Updated
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/databases" and !"wiki/technology/databases/Databases Home"').sort(p => p.file.mtime, 'desc').limit(10).map(p => p.file.link))
> > ```

## Related pages

> [!note] Adjacent technology hubs
> - [[Technology Home]]
> - [[data-engineering|Data Engineering]]
> - [[Software Engineering Home]]
> - [[Cloud Home]]
