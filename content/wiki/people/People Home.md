---
title: People
Created:
  - 2026-04-30
date modified: 2026-04-30
aliases:
  - People
category: People
tags:
  - index
  - people
banner: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
dg-publish: true
cssclasses:
  - wide-page
publish: true
---

# 👥 People

> Engineers, researchers, and authors who shaped modern software architecture, distributed systems, and data engineering.

## 🧭 Vault Navigation

> [!info] You are here
> 🧠 [[Master Home]] · �️ [[Technology Home]] · 📚 [[Books Home]] · **👥 People**

## � Directory (A–Z)

```dataviewjs
dv.list(
  dv.pages('"wiki/people" and !"wiki/people/People Home"')
    .sort(p => p.file.name, 'asc')
    .map(p => p.file.link)
);
```

## � Recently Added

```dataviewjs
dv.list(
  dv.pages('"wiki/people" and !"wiki/people/People Home"')
    .sort(p => p.file.mtime, 'desc')
    .limit(10)
    .map(p => p.file.link)
);
```
