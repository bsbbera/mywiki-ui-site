---
title: Google Cloud Platform
Created:
  - 2026-04-30
date modified: Thursday, June 4th 2026, 6:00:00 pm
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

> The complete Google Cloud ecosystem: compute, storage, databases, analytics, AI/ML, networking, security, DevOps, and operations — covering **all GCP products**.

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
  { icon: "🤖", name: "AI & ML",        path: "wiki/technology/cloud/gcp/ai-ml" },
  { icon: "🌐", name: "Networking",     path: "wiki/technology/cloud/gcp/networking" },
  { icon: "🔒", name: "Security",       path: "wiki/technology/cloud/gcp/security" },
  { icon: "🚀", name: "DevOps",         path: "wiki/technology/cloud/gcp/devops" },
  { icon: "📡", name: "Operations",     path: "wiki/technology/cloud/gcp/operations" },
  { icon: "🎓", name: "Certifications", path: "wiki/technology/cloud/gcp/certifications" },
];
dv.table(
  ["Category", "Notes"],
  subs.map(s => [`${s.icon} ${s.name}`, dv.pages(`"${s.path}"`).length])
);
```

## 📂 Browse by Category

> [!grid]
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

> [!grid]
>
> > [!card] 🗄️ Databases
> > Cloud SQL, Spanner, Bigtable, Firestore, AlloyDB, Memorystore.
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
> > [!card] 🤖 AI & ML
> > Vertex AI, Gemini, Document AI, Vision, Speech, Dialogflow.
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/gcp/ai-ml"').sort(p => p.file.name).map(p => p.file.link))
> > ```

> [!grid]
>
> > [!card] 🌐 Networking
> > VPC, Load Balancing, Cloud CDN, DNS, NAT, Armor, Interconnect.
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/gcp/networking"').sort(p => p.file.name).map(p => p.file.link))
> > ```
>
> > [!card] 🔒 Security
> > IAM, Secret Manager, KMS, SCC, Cloud Identity, Binary Authorization.
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/gcp/security"').sort(p => p.file.name).map(p => p.file.link))
> > ```
>
> > [!card] 🚀 DevOps
> > Cloud Build, Artifact Registry, Cloud Deploy, Apigee, Eventarc.
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/gcp/devops"').sort(p => p.file.name).map(p => p.file.link))
> > ```

> [!grid]
>
> > [!card] 📡 Operations
> > Cloud Monitoring, Logging, Trace, Profiler, Error Reporting.
> > ```dataviewjs
> > dv.list(dv.pages('"wiki/technology/cloud/gcp/operations"').sort(p => p.file.name).map(p => p.file.link))
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

