---
title: Books
Created:
  - 2026-04-30
date modified: 2026-04-30
aliases:
  - Books
category: Books
tags:
  - index
  - books
banner: https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000
publish: true
cssclasses:
---

# 📚 Books

> A library of foundational texts — **DDIA**, **Kimball Toolkit**, **Fundamentals of Data Engineering**, and more — the core curriculum for serious data and software engineers.

## 🧭 Vault Navigation

> [!info] You are here
> 🧠 [[Master Home]] · 🛠️ [[Technology Home]] · **📚 Books** · 👥 [[People Home]]

## 📊 At a Glance

```dataviewjs
const pages = dv.pages('"wiki/books" and !"wiki/books/Books Home"');
const latest = pages.sort(p => p.file.mtime, 'desc').first();
dv.paragraph(`**${pages.length}** books · last added **${latest ? latest.file.mtime.toFormat("yyyy-MM-dd") : "—"}**`);
```

## 📚 Library

```dataviewjs
dv.table(
  ["Cover", "Title", "Tags"],
  dv.pages('"wiki/books" and !"wiki/books/Books Home"')
    .sort(p => p.file.name, 'asc')
    .map(p => [
      p.banner ? `![cover\\|60](${p.banner})` : "—",
      p.file.link,
      (p.tags ?? []).filter(t => t !== "book").join(", ")
    ])
);
```

## 🕒 Recently Added

```dataviewjs
dv.list(
  dv.pages('"wiki/books" and !"wiki/books/Books Home"')
    .sort(p => p.file.mtime, 'desc')
    .limit(10)
    .map(p => p.file.link)
);
```

## Related pages

> [!note] Cross-cutting metadata
> - [[People Home]]
> - [[Technology Home]]
