---
title: Technology Home
Created:
  - 2026-05-10
date modified: 2026-05-10
aliases:
  - Technology Home
  - Tech Home
category: Index
tags:
  - index
  - technology
banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
dg-publish: true
cssclasses:
  - wide-page
publish: true
---
# 🛠️ Technology

> Engineering, computer science, cloud platforms, and the tooling that ties them together.

## 🧭 Vault Navigation

> [!info] You are here
> 🧠 [[Master Home]] · **🛠️ Technology** · 📚 [[Books Home]] · 👥 [[People Home]]
>
> **Inside Technology:** 📊 [[data-engineering|Data Engineering]] · 🧩 [[Software Engineering Home]] · 🗄️ [[Databases Home]] · ☁️ [[Cloud Home]] · 🧰 [[Tools Home]] · 📘 [[Guides Home]]

## 📊 At a Glance

```dataviewjs
const sub = [
  { icon: "📊", name: "Data Engineering",     path: "wiki/technology/data-engineering",     home: "data-engineering" },
  { icon: "🧩", name: "Software Engineering", path: "wiki/technology/software-engineering", home: "Software Engineering Home" },
  { icon: "🗄️", name: "Databases",            path: "wiki/technology/databases",            home: "Databases Home" },
  { icon: "☁️", name: "Cloud",                path: "wiki/technology/cloud",                home: "Cloud Home" },
  { icon: "🧰", name: "Tools",                path: "wiki/technology/tools",                home: "Tools Home" },
  { icon: "📘", name: "Guides",               path: "wiki/technology/guides",               home: "Guides Home" },
];
dv.table(
  ["Sub-domain", "Notes", "Last touched"],
  sub.map(s => {
    const pages = dv.pages(`"${s.path}"`);
    const latest = pages.sort(p => p.file.mtime, 'desc').first();
    return [
      `${s.icon} [[${s.home}|${s.name}]]`,
      pages.length,
      latest ? latest.file.mtime.toFormat("yyyy-MM-dd") : "—"
    ];
  })
);
```

## 🗺️ Browse by Sub-domain

> [!multi-column]
>
> > [!card] 📊 Data Engineering
> > Pipelines, modeling, ingestion, processing, storage, warehousing.
> > Open the [[data-engineering|Data Engineering hub]].
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/data-engineering" and !"wiki/technology/data-engineering/data-engineering"').sort(p => p.file.mtime, 'desc').limit(5).map(p => p.file.link))
> > ```
>
> > [!card] 🧩 Software Engineering
> > Distributed systems, design patterns, scaling, indexing, sharding.
> > Open the [[Software Engineering Home|SE hub]].
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/software-engineering" and !"wiki/technology/software-engineering/Software Engineering Home"').sort(p => p.file.mtime, 'desc').limit(5).map(p => p.file.link))
> > ```
>
> > [!card] 🗄️ Databases
> > Theory (ACID, normalization, transactions) and specific systems.
> > Open the [[Databases Home|Databases hub]].
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/databases" and !"wiki/technology/databases/Databases Home"').sort(p => p.file.mtime, 'desc').limit(5).map(p => p.file.link))
> > ```

> [!multi-column]
>
> > [!card] ☁️ Cloud
> > GCP, AWS, Azure, Databricks — platform-specific products & services.
> > Open the [[Cloud Home|Cloud hub]].
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud" and !"wiki/technology/cloud/Cloud Home"').sort(p => p.file.mtime, 'desc').limit(5).map(p => p.file.link))
> > ```
>
> > [!card] 🧰 Tools
> > Programming languages, file formats, orchestrators, processing engines.
> > Open the [[Tools Home|Tools catalog]].
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/tools" and !"wiki/technology/tools/Tools Home"').sort(p => p.file.mtime, 'desc').limit(5).map(p => p.file.link))
> > ```
>
> > [!card] 📘 Guides
> > Practitioner playbooks: SQL, testing, governance, cost optimization.
> > Open the [[Guides Home|Guides hub]].
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/guides" and !"wiki/technology/guides/Guides Home"').sort(p => p.file.mtime, 'desc').limit(5).map(p => p.file.link))
> > ```

## 🕒 Recently Updated Across Technology

```dataviewjs
dv.list(
  dv.pages('"wiki/technology" and !"wiki/technology/Technology Home"')
    .sort(p => p.file.mtime, 'desc')
    .limit(15)
    .map(p => p.file.link)
);
```

## Related pages

> [!info] Cross-cutting metadata
> - [[People Home]]
> - [[Books Home]]
