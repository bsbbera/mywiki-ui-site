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
banner: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000"
dg-publish: true
cssclasses:
  - wide-page
publish: true
---
# 📚 Books

> A library of foundational texts — **DDIA**, **Kimball Toolkit**, **Fundamentals of Data Engineering**, and more — the core curriculum for serious data and software engineers.

## 🧭 Vault Navigation

> [!info] You are here
> 🧠 [[Master Home]] · �️ [[Technology Home]] · **📚 Books** · 👥 [[People Home]]

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

## � Recently Added

```dataviewjs
dv.list(
  dv.pages('"wiki/books" and !"wiki/books/Books Home"')
    .sort(p => p.file.mtime, 'desc')
    .limit(10)
    .map(p => p.file.link)
);
```
