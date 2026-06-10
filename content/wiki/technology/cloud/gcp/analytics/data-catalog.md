---
title: Data Catalog
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Cloud Data Catalog
  - Dataplex Catalog
category: Cloud
tags:
  - GCP
  - Analytics
  - Metadata
  - Discovery
  - Governance
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Data Catalog
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Metadata management & data discovery |
> | **Category** | Governance |
> | **Launched** | 2020 (now Dataplex Catalog) |
> | **Interface** | Console, REST API, client libraries |
> | **Website** | cloud.google.com/dataplex |

---

> "Life begins at the end of our comfort zone."
> <cite>— Neale Donald Walsch</cite>

---

<span class="at-kicker">Data Discovery · Google Cloud</span>

# Data Catalog

<p class="at-lead">
Google Cloud Data Catalog is a fully managed, scalable data-discovery and metadata-management service providing a centralized repository with powerful search across BigQuery, Pub/Sub, and Cloud Storage assets.
</p>

<span class="at-stat">auto-discovery</span> &nbsp;·&nbsp; <span class="at-stat">custom tags</span> &nbsp;·&nbsp; <span class="at-stat">lineage</span> tracking &nbsp;·&nbsp; <span class="at-mark">the metadata backbone of every governed data platform</span>

<span class="at-kicker">How It Works</span>

## Overview

Google Cloud Data Catalog is a **fully managed, scalable data-discovery and metadata-management service**. It provides a **centralized metadata repository** + **powerful search** that lets users find datasets across services like [[bigquery|BigQuery]] and [[pubsub|Pub/Sub]], understand their structure, and access them securely (source: Google Cloud Platform - A High level Overview of Data Catalog Service.md).

### Important rename: now part of Dataplex

In 2023, Google consolidated data governance services into **Dataplex**, and **Data Catalog became "Dataplex Catalog"** (the same APIs, broader feature set). The raw source still uses the original "Data Catalog" name. New documentation lives at `cloud.google.com/dataplex`. Treat them interchangeably — no breaking API changes.

### Pillars

(source: Google Cloud Platform - A High level Overview of Data Catalog Service.md)

1. **Centralized metadata management** — one place for descriptions, schemas, ownership, sensitivity tags across services.
2. **Powerful search** — natural-language and structured search across all indexed data assets.
3. **Tagging and classification** — apply structured metadata for governance.
4. **Access-control integration** — respects source-system IAM; users only see assets they have permission to.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### DATA ASSETS
>> ### Asset *Indexing*
>> Index BigQuery datasets, tables, views, Pub/Sub topics, and Cloud Storage files. Store descriptions, schemas, last-modified time, lineage, and custom tags.
>
>> [!card|section]
>> ###### SEARCH & DISCOVERY
>> ### Powerful *Search*
>> Centralized search bar with natural-language queries. Faceted filtering by resource type, tags, columns, and projects. Personalized results based on IAM permissions.
>
>> [!card|section]
>> ###### TAG TEMPLATES
>> ### Structured *Metadata*
>> Reusable metadata blueprints with custom fields for PII level, data owner, retention days, and classification. Enforce governance standards consistently.
>
>> [!card|section]
>> ###### COLUMN-LEVEL SECURITY
>> ### Policy *Tags*
>> Apply policy tags for fine-grained column access control. Integrate with BigQuery column-level security. Mask or restrict sensitive data automatically.
>
>> [!card|section]
>> ###### LINEAGE TRACKING
>> ### Data *Lineage*
>> Track data flow from source to consumption across BigQuery, Dataflow, and Composer. Column-level lineage for impact analysis and debugging.
>
>> [!card|section]
>> ###### AUTO-CLASSIFICATION
>> ### Auto *Discovery*
>> Dataplex scans Cloud Storage and auto-tags PII automatically. Schedule discovery scans to keep catalog current. Auto-classify sensitive data patterns.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Data Catalog (legacy)** | Included with BigQuery and Pub/Sub usage |
| **Dataplex Catalog** | Part of Dataplex pricing — per-GiB metadata storage |
| **Auto-discovery** | Based on data volume scanned for classification |
| **API calls** | Standard GCP API pricing for metadata operations |
| **Data quality / lineage** | Additional features may have separate pricing |

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### DATA DISCOVERY
>> ### Find *Datasets*
>> Search "supply chain" across all indexed assets. Filter by BigQuery tables containing "supplier_id" columns. Discover data without knowing exact locations.
>
>> [!card|section]
>> ###### PII GOVERNANCE
>> ### Sensitive Data *Management*
>> Tag columns containing email, phone, or SSN with PII policy tags. Enforce automatic masking in BigQuery. Audit access to sensitive fields.
>
>> [!card|section]
>> ###### DATA LINEAGE
>> ### Impact *Analysis*
>> Trace data flow from raw ingestion to BI dashboards. Identify downstream impact of schema changes. Debug data quality issues across pipelines.
>
>> [!card|section]
>> ###### COMPLIANCE
>> ### Regulatory *Reporting*
>> Generate data inventory for GDPR and CCPA compliance. Document data ownership and retention policies. Track data access and processing activities.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · DATA CATALOG
>> # From *unknown dataset* to *catalogued asset*.
>> Transform your data swamp into a discoverable, governed data platform with automated metadata management.
>
>> [!card|step]
>> ###### Step 01
>> ### *Enable* auto-discovery.
>> Turn on Dataplex auto-discovery for BigQuery and Cloud Storage. Schedule regular scans to keep metadata current. Configure sensitive data detection for automatic PII tagging.
>
>> [!card|step]
>> ###### Step 02
>> ### *Tag* assets with metadata.
>> Create tag templates for data owner, domain, PII level, and retention. Apply tags via automation or manual curation. Link technical assets to business glossary terms.
>
>> [!card|step]
>> ###### Step 03
>> ### *Search* and govern.
>> Use natural-language search to find relevant datasets. Filter by tags, columns, and resource types. Enforce access policies based on classification and lineage.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister GCP analytics
>> [[bigquery|BigQuery]], [[bigquery-iam|BigQuery IAM]], [[bigquery-authorized-views|BigQuery Authorized Views]], [[pubsub|Pub/Sub]], [[dataflow|Dataflow]]
>
>
>> [!card] Data Management
>> [[../../../data-engineering/data-management/data-catalog|Data Catalog (concept)]], [[../../../data-engineering/data-management/data-governance|Data Governance]], [[../../../data-engineering/data-management/data-management|Data Management]]
>
>
>> [!card] Guides
>> [[../../../guides/data-governance-guide|Data Governance Guide]]
>
>
>> [!card] Certifications
>> [[Professional Data Engineer|Professional Data Engineer]]

## Core components

### 1. Data assets

The datasets and resources Catalog indexes (source: Google Cloud Platform - A High level Overview of Data Catalog Service.md):

- BigQuery datasets, tables, views.
- Pub/Sub topics.
- Cloud Storage buckets / files (via custom entries).
- On-prem and other-cloud sources (via the open metadata API).
- Each asset stores: description, schema, last-modified time, lineage, custom tags.

### 2. Search and discovery

The user-facing surface:

- A **centralized search bar** in the Cloud Console.
- **Faceted search** — filter by resource type, tags, columns, project.
- Surfaces tables, topics, datasets across **multiple projects** at once.

### 3. Tag templates

Reusable, structured **metadata blueprints** (source: Google Cloud Platform - A High level Overview of Data Catalog Service.md):

- Define custom fields (e.g. `pii_level`, `data_owner`, `retention_days`, `classification`).
- Apply consistently across datasets.
- Power **column-level security** when used with **policy tags**.
- Enforce data-governance standards.

### 4. Access-control integration

- Honors IAM defined on the source resources.
- Hides assets a user can't access — search results are personalized.
- Maintains compliance posture across BigQuery, Pub/Sub, etc.

## Discovery workflow

A typical question (source: Google Cloud Platform - A High level Overview of Data Catalog Service.md):

> "Which dataset contains information about our supply-chain performance?"

1. Open Data Catalog search.
2. Enter `supply chain` or related keywords.
3. Filter by **resource type** (e.g. BigQuery table) or **column** (e.g. `supplier_id`).
4. View metadata, schema, owner, lineage in the result panel.
5. Click through to BigQuery / Pub/Sub to query the asset directly.

## Search interface walkthrough

(source: Google Cloud Platform - A High level Overview of Data Catalog Service.md)

### Step 1 — Open search

Console → **Data Catalog** → centralized search bar at the top.

### Step 2 — Search and filter

Enter keyword / dataset name / table name. Apply faceted filters:

- **Resource type** — table, dataset, topic, view.
- **Column / schema field**.
- **Tags** applied to assets.
- **Project** or asset category.

### Step 3 — Explore results

- View dataset description and schema.
- See applied metadata tags.
- Open the asset directly in BigQuery / Pub/Sub.

## Additional features

(source: Google Cloud Platform - A High level Overview of Data Catalog Service.md)

- **Popular tables view** — most-frequently-queried BigQuery tables in the last 30 days.
- **Dataset exploration** — browse tables, views, topics in tree form.
- **Metadata tagging** — apply tags from templates.
- **Secure data access** — automatically respects source-level permissions.

## Modern Dataplex Catalog additions (not in raw)

- **Auto-discovery + auto-classification** — Dataplex scans GCS and tags PII automatically.
- **Lineage** — column-level lineage across BigQuery, Dataflow, Composer.
- **Data quality** — built-in DQ rules + scoring.
- **Business glossary** — link technical assets to business terms.
- **Open metadata API** — register external systems (Snowflake, on-prem Oracle, Databricks).

## Where Data Catalog fits

```
[Producers]              [Discovery + governance]            [Consumers]
[BigQuery] ─────┐                                       ┌──── [analysts via Studio]
[Pub/Sub]   ────┼──► [Data Catalog / Dataplex] ──────►  ├──── [data scientists]
[GCS]       ────┘     (metadata, search, tags, lineage)  └──── [auditors]
```

## Best practices

- **Start with tag templates** — define `pii_level`, `data_owner`, `domain` company-wide.
- Apply tags via **Composer / DataOps automation**, not manually.
- Use **column-level policy tags** + **BigQuery column security** for PII.
- **Schedule discovery scans** on GCS so the catalog stays current.
- Pair with **[[bigquery-authorized-views|authorized views]]** to enforce access on filtered data.

## Interesting Facts

- Data Catalog is the **opposite of a data swamp** — its sole purpose is making data findable + governed.
- Pre-Dataplex, Catalog only indexed BigQuery and Pub/Sub natively; Dataplex extends to **Cloud Storage data lakes** and **non-Google sources**.
- The catalog API is the same one **Vertex AI Feature Store** uses to register feature metadata.

## Interview Questions can be asked

1. What problem does Data Catalog solve that BigQuery's INFORMATION_SCHEMA does not?
2. Difference between **Data Catalog** and **Dataplex** today.
3. Walk through tagging PII columns and enforcing access.
4. How would you discover all tables containing `customer_email` across multiple projects?
