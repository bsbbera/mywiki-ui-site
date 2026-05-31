---
title: Google Cloud Platform
Created:
  - 2026-04-30
date modified: 2026-05-09
aliases:
  - Google Cloud Platform
  - GCP
category: GCP
tags:
  - index
  - gcp
banner: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
publish: true
cssclasses:
  - wide-page
---

# ☁️ Google Cloud Platform

> Compute, storage, databases, and the BigQuery / Dataflow analytics ecosystem used to build modern data platforms on **GCP**.

## 🧭 Vault Navigation

> [!info] You are here
> 🧠 [[Master Home]] · 🛠️ [[Technology Home]] · ☁️ [[Cloud Home]] · **☁️ GCP**
>
> **Sibling clouds:** 📦 [[AWS Home]] · 🟦 [[Azure Home]] · 🧱 [[Databricks Home]]

## 📊 At a Glance

```dataviewjs
const subs = [
  { icon: "🏗️", name: "Foundations",    path: "wiki/technology/cloud/gcp/foundations" },
  { icon: "💻", name: "Compute",        path: "wiki/technology/cloud/gcp/compute" },
  { icon: "💾", name: "Storage",        path: "wiki/technology/cloud/gcp/storage" },
  { icon: "🗄️", name: "Databases",      path: "wiki/technology/cloud/gcp/databases" },
  { icon: "📊", name: "Analytics",      path: "wiki/technology/cloud/gcp/analytics" },
  { icon: "🎓", name: "Certifications", path: "wiki/technology/cloud/gcp/certifications" },
];
dv.table(
  ["Category", "Notes"],
  subs.map(s => [`${s.icon} ${s.name}`, dv.pages(`"${s.path}"`).length])
);
```

## 📂 Browse by Category

> [!multi-column]
>
> > [!card] 🏗️ Foundations
> > GCP overview, regions, service models, pricing.
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/gcp/foundations"').sort(p => p.file.name).map(p => p.file.link))
> > ```
>
> > [!card] 💻 Compute
> > GCE, GAE, GKE, Cloud Run, Cloud Functions.
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/gcp/compute"').sort(p => p.file.name).map(p => p.file.link))
> > ```
>
> > [!card] 💾 Storage
> > GCS, Persistent Disk, Filestore, Firebase Storage, GFS.
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/gcp/storage"').sort(p => p.file.name).map(p => p.file.link))
> > ```

> [!multi-column]
>
> > [!card] 🗄️ Databases
> > Cloud SQL, Spanner, Bigtable, Datastore, Memorystore.
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/gcp/databases"').sort(p => p.file.name).map(p => p.file.link))
> > ```
>
> > [!card] 📊 Analytics
> > BigQuery, Dataflow, Pub/Sub, Data Catalog, Datafusion.
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/gcp/analytics"').sort(p => p.file.name).map(p => p.file.link))
> > ```
>
> > [!card] 🎓 Certifications
> > Professional Data Engineer + study notes.
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/gcp/certifications"').sort(p => p.file.name).map(p => p.file.link))
> > ```

## 📋 All Notes (A–Z)

```dataviewjs
dv.list(
  dv.pages('"wiki/technology/cloud/gcp" and !"wiki/technology/cloud/gcp/GCP Home"')
    .sort(p => p.file.name, 'asc')
    .map(p => p.file.link)
);
```

## 🕒 Recently Updated

```dataviewjs
dv.list(
  dv.pages('"wiki/technology/cloud/gcp" and !"wiki/technology/cloud/gcp/GCP Home"')
    .sort(p => p.file.mtime, 'desc')
    .limit(10)
    .map(p => p.file.link)
);
```

