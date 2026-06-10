---
title: Cloud Home
Created:
  - 2026-05-10
date modified: 2026-05-10
aliases:
  - Cloud Home
category: Index
tags:
  - index
  - cloud
banner: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000"
publish: true
cssclasses:
  - wide-page
---

# ☁️ Cloud Platforms

> Everything platform-specific: GCP, AWS, Azure, Databricks. Cross-platform comparisons live here too.

*📄 `$= dv.pages('"wiki/technology/cloud"').length` notes in this field · ⏱ `$= Math.max(1, Math.ceil(dv.current().file.size / 1100))` min read · 🕘 updated `$= dv.current().file.mtime.toFormat("MMM d, yyyy")`*

## 🧭 Vault Navigation

> [!info] You are here
> 🧠 [[Master Home]] · 🛠️ [[Technology Home]] · **☁️ Cloud**
>
> **Platforms:** ☁️ [[GCP Home]] · 📦 [[AWS Home]] · 🟦 [[Azure Home]] · 🧱 [[Databricks Home]]

## 📊 Platform Comparison

```dataviewjs
const platforms = [
  { icon: "☁️", name: "Google Cloud (GCP)", path: "wiki/technology/cloud/gcp",        home: "GCP Home" },
  { icon: "📦", name: "Amazon Web Services", path: "wiki/technology/cloud/aws",        home: "AWS Home" },
  { icon: "🟦", name: "Microsoft Azure",     path: "wiki/technology/cloud/azure",      home: "Azure Home" },
  { icon: "🧱", name: "Databricks",          path: "wiki/technology/cloud/databricks", home: "Databricks Home" },
];
dv.table(
  ["Platform", "Notes", "Last touched"],
  platforms.map(p => {
    const pages = dv.pages(`"${p.path}"`);
    const latest = pages.sort(x => x.file.mtime, 'desc').first();
    return [
      `${p.icon} [[${p.home}|${p.name}]]`,
      pages.length,
      latest ? latest.file.mtime.toFormat("yyyy-MM-dd") : "—"
    ];
  })
);
```

## 🗺️ Browse by Platform

> [!grid]
>
> > [!card] ☁️ Google Cloud
> > BigQuery, Dataflow, Pub/Sub, GCS, Spanner, certifications.
> > Open the [[GCP Home|GCP dashboard]].
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/gcp" and !"wiki/technology/cloud/gcp/GCP Home"').sort(p => p.file.mtime, 'desc').limit(5).map(p => p.file.link))
> > ```
>
> > [!card] 📦 Amazon Web Services
> > S3, Redshift, Glue, Kinesis, Lambda, Athena.
> > Open the [[AWS Home|AWS dashboard]].
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/aws" and !"wiki/technology/cloud/aws/AWS Home"').sort(p => p.file.mtime, 'desc').limit(5).map(p => p.file.link))
> > ```
>
> > [!card] 🟦 Microsoft Azure
> > ADLS, Synapse, Data Factory, Event Hubs, Cosmos DB.
> > Open the [[Azure Home|Azure dashboard]].
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/azure" and !"wiki/technology/cloud/azure/Azure Home"').sort(p => p.file.mtime, 'desc').limit(5).map(p => p.file.link))
> > ```
>
> > [!card] 🧱 Databricks
> > Lakehouse, Delta Lake, Unity Catalog, Spark, MLflow.
> > Open the [[Databricks Home|Databricks dashboard]].
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/databricks" and !"wiki/technology/cloud/databricks/Databricks Home"').sort(p => p.file.mtime, 'desc').limit(5).map(p => p.file.link))
> > ```

## 🕒 Recently Updated Across Cloud

```dataviewjs
dv.list(
  dv.pages('"wiki/technology/cloud" and !"wiki/technology/cloud/Cloud Home"')
    .sort(p => p.file.mtime, 'desc')
    .limit(15)
    .map(p => p.file.link)
);
```

## Related pages

> [!note] Adjacent technology hubs
> - [[Technology Home]]
> - [[data-engineering|Data Engineering]]
> - [[Databases Home]]

> [!example] Practitioner guides
> - [[cost-optimization-cloud]]
> - [[messaging-service-guide]]
