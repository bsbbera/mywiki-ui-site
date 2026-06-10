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
publish: true
cssclasses:
  - wide-page
---

# 👥 People

> Engineers, researchers, and authors who shaped modern software architecture, distributed systems, and data engineering.

## 🧭 Vault Navigation

> [!info] You are here
> 🧠 [[Master Home]] · 🛠️ [[Technology Home]] · 📚 [[Books Home]] · **👥 People**

## 📊 At a Glance

```dataviewjs
const pages = dv.pages('"wiki/people" and !"wiki/people/People Home"');
const latest = pages.sort(p => p.file.mtime, 'desc').first();
dv.paragraph(`**${pages.length}** people · last added **${latest ? latest.file.mtime.toFormat("yyyy-MM-dd") : "—"}**`);
```

## 📚 Browse

```dataviewjs
const palette = ["#d8552f", "#2f7e78", "#4a7ba6", "#c08a2e", "#96597c", "#6a5b9c", "#3e7a55", "#a4633a"];
const people = dv.pages('"wiki/people"')
  .where(p => p.file.name !== "People Home")
  .sort(p => p.file.name, 'asc')
  .array();
const cards = people.map((p, i) => {
  const name = p.title ?? p.file.name;
  const initial = name.trim().charAt(0).toUpperCase();
  const tag = (p.file.etags ?? []).map(t => t.replace("#", ""))
    .filter(t => t !== "person")[0]?.replace(/_/g, " ") ?? "";
  return `<div class="mw-person">
    <div class="mw-avatar" style="background:${palette[i % palette.length]}">${initial}</div>
    <a class="internal-link" data-href="${p.file.path}" href="${p.file.path}">${name}</a>
    <span class="mw-chip">${tag}</span>
  </div>`;
}).join("");
dv.el("div", cards, { cls: "mw-people" });
```

> [!note]- 🕒 Recently added
> ```dataviewjs
> dv.list(dv.pages('"wiki/people" and !"wiki/people/People Home"').sort(p => p.file.mtime, 'desc').limit(10).map(p => p.file.link))
> ```

## Related pages

> [!note] Cross-cutting metadata
> - [[Books Home]]
> - [[Technology Home]]
