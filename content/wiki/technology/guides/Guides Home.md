---
title: Guides Home
Created:
  - 2026-05-10
date modified: 2026-05-10
aliases:
  - Guides Home
category: Index
tags:
  - index
  - guides
banner: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1000"
publish: true
cssclasses:
  - wide-page
---

# 📘 Guides

> Practitioner playbooks: how to do things end-to-end. SQL, testing pipelines, governance, cost optimization, messaging.

## 🧭 Vault Navigation

> [!info] You are here
> 🧠 [[Master Home]] · 🛠️ [[Technology Home]] · **📘 Guides**

## 📊 At a Glance

```dataviewjs
const pages = dv.pages('"wiki/technology/guides" and !"wiki/technology/guides/Guides Home"');
const latest = pages.sort(p => p.file.mtime, 'desc').first();
dv.paragraph(`**${pages.length}** guides · last touched **${latest ? latest.file.mtime.toFormat("yyyy-MM-dd") : "—"}**`);
```

## 📚 Browse

> [!multi-column]
>
> > [!card] 📋 All Guides (A–Z)
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/guides" and !"wiki/technology/guides/Guides Home"').sort(p => p.file.name, 'asc').map(p => p.file.link))
> > ```
>
> > [!card] 🕒 Recently Updated
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/guides" and !"wiki/technology/guides/Guides Home"').sort(p => p.file.mtime, 'desc').limit(10).map(p => p.file.link))
> > ```

## Related pages

> [!note] Concepts these guides build on
> - [[Technology Home]]
> - [[data-engineering|Data Engineering]]
> - [[Databases Home]]
> - [[Cloud Home]]
> - [[Tools Home]]
