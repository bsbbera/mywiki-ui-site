---
title: Master Home
Created:
  - 2026-04-30
date modified: 2026-05-10
aliases:
  - Master Home
  - Home
  - Second Brain
category: Index
tags:
  - index
banner: https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600
banner_y: 0.4
dg-publish: true
cssclasses:
  - master-home
  - wide-page
---

# Second Brain

> *A life-long, interlinked knowledge vault — where notes, ideas, and insights are connected, compounded, and continually refined across every field of knowledge.*

> [!tip|search-pill] 🔍 &nbsp; Search the vault — press `Ctrl+O`

## 🗂️ Fields of Knowledge

> [!grid|pills]
> > [!info] 🛠️ [[Technology Home|Technology]]
> > Engineering · cloud · CS
>
> > [!info] 📚 [[Books Home|Books]]
> > Reading list with covers
>
> > [!info] 👥 [[People Home|People]]
> > Thinkers, builders, authors
>
> > [!info|pill-reserved] 🏛️ Philosophy
> > *reserved for future*
>
> > [!info|pill-reserved] 🎨 Art
> > *reserved for future*
>
> > [!info|pill-reserved] 🔬 Science
> > *reserved for future*

## ⭐ Featured

> [!grid|featured]
> > [!info|featured] LATEST
> >
> > ```dataviewjs
> > const p = dv.pages('"wiki/technology"').where(x => !x.file.name.includes("Home") && x.file.name !== "data-engineering").sort(x => x.file.mtime, 'desc').first();
> > if (p) {
> >   if (p.banner) dv.paragraph(`![](${p.banner})`);
> >   const display = p.file.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
> >   dv.paragraph(`### ${dv.fileLink(p.file.path, false, display)}`);
> >   dv.paragraph(`*Touched ${p.file.mtime.toFormat("yyyy-MM-dd")}*`);
> > }
> > ```
>
> > [!info|featured] SPOTLIGHT
> >
> > ```dataviewjs
> > const ppl = dv.pages('"wiki/people"').where(p => !p.file.name.includes("Home")).values;
> > if (ppl.length) {
> >   const p = ppl[Math.floor(Math.random() * ppl.length)];
> >   if (p.banner) dv.paragraph(`![](${p.banner})`);
> >   const display = p.file.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
> >   dv.paragraph(`### ${dv.fileLink(p.file.path, false, display)}`);
> >   const aka = (p.aliases || []).filter(a => a !== p.file.name)[0];
> >   if (aka) dv.paragraph(`*${aka}*`);
> > }
> > ```
>
> > [!quote|quote-card] QUOTE
> >
> > *We shape our tools and thereafter our tools shape us.*
> >
> > — Marshall McLuhan

## ✨ Discover the Vault

> [!grid|status]
> > [!info] STATS
> >
> > ```dataviewjs
> > const all = dv.pages('"wiki"').where(p => !p.file.name.includes("Home") && !["index","log"].includes(p.file.name));
> > const recent = all.sort(p => p.file.mtime, 'desc').first();
> > dv.paragraph(`**${all.length}** notes · last touched **${recent ? recent.file.mtime.toFormat("yyyy-MM-dd") : "—"}**`);
> > ```
>
> > [!info] RANDOM
> >
> > ```dataviewjs
> > const all = dv.pages('"wiki"').where(p => !p.file.name.includes("Home") && !["index","log"].includes(p.file.name)).values;
> > if (all.length) {
> >   const r = all[Math.floor(Math.random() * all.length)];
> >   const display = r.file.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
> >   dv.paragraph(`🎲 &nbsp;**Random:** &nbsp;${dv.fileLink(r.file.path, false, display)}`);
> > }
> > ```

> [!info|az-strip] A · B · C · D · E · F · G · H · I · J · K · L · M · N · O · P · Q · R · S · T · U · V · W · X · Y · Z

> [!grid|discover]
> > [!info|discover] Data Engineering
> >
> > ```dataviewjs
> > const fmt = n => n.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
> > const pages = dv.pages('"wiki/technology/data-engineering"').where(p => !p.file.name.includes("Home")).values.sort(() => Math.random() - 0.5).slice(0, 15);
> > dv.paragraph(pages.map(p => dv.fileLink(p.file.path, false, fmt(p.file.name))).join(" · "));
> > ```
>
> > [!info|discover] Cloud
> >
> > ```dataviewjs
> > const fmt = n => n.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
> > const pages = dv.pages('"wiki/technology/cloud"').where(p => !p.file.name.includes("Home")).values.sort(() => Math.random() - 0.5).slice(0, 15);
> > dv.paragraph(pages.map(p => dv.fileLink(p.file.path, false, fmt(p.file.name))).join(" · "));
> > ```
>
> > [!info|discover] Software Engineering
> >
> > ```dataviewjs
> > const fmt = n => n.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
> > const pages = dv.pages('"wiki/technology/software-engineering"').where(p => !p.file.name.includes("Home")).values.sort(() => Math.random() - 0.5).slice(0, 15);
> > dv.paragraph(pages.map(p => dv.fileLink(p.file.path, false, fmt(p.file.name))).join(" · "));
> > ```
>
> > [!info|discover] Databases
> >
> > ```dataviewjs
> > const fmt = n => n.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
> > const pages = dv.pages('"wiki/technology/databases"').where(p => !p.file.name.includes("Home")).values.sort(() => Math.random() - 0.5).slice(0, 15);
> > dv.paragraph(pages.map(p => dv.fileLink(p.file.path, false, fmt(p.file.name))).join(" · "));
> > ```
>
> > [!info|discover] Tools
> >
> > ```dataviewjs
> > const fmt = n => n.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
> > const pages = dv.pages('"wiki/technology/tools"').where(p => !p.file.name.includes("Home")).values.sort(() => Math.random() - 0.5).slice(0, 15);
> > dv.paragraph(pages.map(p => dv.fileLink(p.file.path, false, fmt(p.file.name))).join(" · "));
> > ```
>
> > [!info|discover] Guides
> >
> > ```dataviewjs
> > const fmt = n => n.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
> > const pages = dv.pages('"wiki/technology/guides"').where(p => !p.file.name.includes("Home")).values.sort(() => Math.random() - 0.5).slice(0, 15);
> > dv.paragraph(pages.map(p => dv.fileLink(p.file.path, false, fmt(p.file.name))).join(" · "));
> > ```
>
> > [!info|discover] People
> >
> > ```dataviewjs
> > const fmt = n => n.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
> > const pages = dv.pages('"wiki/people"').where(p => !p.file.name.includes("Home")).values.sort(() => Math.random() - 0.5).slice(0, 15);
> > dv.paragraph(pages.map(p => dv.fileLink(p.file.path, false, fmt(p.file.name))).join(" · "));
> > ```
>
> > [!info|discover] Books
> >
> > ```dataviewjs
> > const fmt = n => n.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
> > const pages = dv.pages('"wiki/books"').where(p => !p.file.name.includes("Home")).values.sort(() => Math.random() - 0.5).slice(0, 15);
> > dv.paragraph(pages.map(p => dv.fileLink(p.file.path, false, fmt(p.file.name))).join(" · "));
> > ```

> [!info|footer] 🕒 [[log|Operations log]] &nbsp; · &nbsp; 📋 Wiki rules in `windsurf.md` &nbsp; · &nbsp; 🧭 [[Technology Home]] · [[Books Home]] · [[People Home]]
