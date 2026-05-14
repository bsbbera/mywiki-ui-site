---
title: Data Engineering
Created:
  - 2026-04-29
date modified: Thursday, April 30th 2026, 1:51:26 pm
aliases:
  - Data Engineering
  - DE
category: Computer Science
tags:
  - DataEngineering
  - Overview
banner:
dg-publish: true
cssclasses:
  - wide-page
---

---

## 🧭 Vault Navigation

> [!info] You are here
> 🧠 [[Master Home]] · 🛠️ [[Technology Home]] · **📊 Data Engineering**
>
> **Sibling tech hubs:** 🧩 [[Software Engineering Home]] · 🗄️ [[Databases Home]] · ☁️ [[Cloud Home]] · 🧰 [[Tools Home]] · 📘 [[Guides Home]]

Modern-day **Data Engineering** is a subset of software engineering that focuses on **moving, storing, and structuring data** for use in applications or reporting (source: Concepts/Data Engineering.md).

---

> [!mcol]
> 
> ## What data engineers do
> 
> - **Gather data requirements** — how long stored, how used, who/what needs access.
> - **Maintain metadata** — technologies in use, documentation, security, source, ownership.
> - **Ensure security + governance** — IAM, encryption, audit access.
> - **Store data** in the right system — [[relational-database|relational]], [[non-relational-database|NoSQL]], [[data-storage|object/blob]].
> - **Process data** — pipelines that extract, transform, enrich, summarize, load.
>
> ---
> ---
>
> ## Core skill set
> 
> | Level | Required |
> | --- | --- |
> | **Junior DE** | SQL (beginner), Data Modeling (beginner), Relational DB (beginner), Soft skills |
> | **Data Engineer** | + Python/Java/Scala (intermediate), Indexing & query opt (intermediate), Batch processing (intermediate), Data Pipeline (beginner), Data Warehouse (beginner) |
> | **Senior DE** | + Cloud (advanced), Infra-as-code, Stream processing (intermediate), NoSQL (advanced), all of the above at advanced level |



**Data engineering is typically not an entry-level job** — most start in adjacent roles (Data Analyst, BI Developer, Backend Engineer) and transition. See [[faq#how-can-i-transition-into-data-engineering|How to transition]].

## How DE differs from related roles

(source: FAQ/What is the difference between a Data Engineer and X.md)

| Role | Focus |
| --- | --- |
| **Data Engineer** | Software engineering + DB design → scalable pipelines, integrations, models |
| **BI Engineer / Developer** | GUI tools (SSIS, etc.) for ETL, models, reports — pathway to DE |
| **Backend Engineer** | Server-side scripts + APIs for applications |
| **DBA (Database Administrator)** | DB availability, backups, security; not analytics-focused |
| **Data Analyst** | SQL + reports + dashboards; consumer of DE work |
| **Data Scientist** | Research, in-depth analysis, ML models |

## The data engineering stack

```
[ Sources ]            [ Processing ]            [ Storage ]            [ Consumers ]
    │                        │                       │                       │
    ▼                        ▼                       ▼                       ▼
[Application DBs]       [Dataflow/Spark]       [BigQuery/Snowflake]    [BI Tools]
[SaaS APIs]             [dbt]                  [Data Lake (GCS/S3)]    [Notebooks]
[Files / SFTP]          [Airflow/Dagster]      [Memorystore/Redis]     [ML Pipelines]
[IoT Streams]                                                          [Apps]
[Pub/Sub / Kafka]
```

## Areas covered in this wiki

- **[[data-architecture|Data Architecture]]** — patterns: lake, warehouse, mart, mesh, lambda, kappa, medallion.
- **[[data-ingestion|Data Ingestion]]** — full load, delta load, CDC.
- **[[data-management|Data Management]]** — catalog, governance, semantic + metrics layers.
- **[[data-modeling|Data Modeling]]** — relational, dimensional, vault, OBT, activity schema.
- **[[data-processing|Data Processing]]** — batch, stream, OLTP, OLAP, HTAP, orchestration.
- **[[data-storage|Data Storage]]** — relational, NoSQL, graph, columnar, in-memory, time-series.
- **Software Engineering** — CAP, sharding, scaling, indexing, idempotence, patterns.

## Cross-platform learning paths

- [[../gcp/foundations/google-cloud-platform|Google Cloud Platform]] — full GCP analytics stack
- [[../aws/aws|Amazon Web Services]] — AWS data tools
- [[../azure/azure|Microsoft Azure]] — Azure data services
- [[../databricks/databricks|Databricks]] — multi-cloud lakehouse
- [[../dbms/acid-properties|ACID Properties]] + [[../dbms/database-normalization|Normalization]] — DBMS theory

## Interesting Facts

- The job title "Data Engineer" exploded in popularity around **2014–2016** as cloud warehouses (Redshift, BigQuery) made big-data analytics accessible.
- The Apache Beam / Dataflow team coined "**Beam = Batch + Stream**" — capturing how DE work converged.
- **dbt** (created in 2016) made *analytics engineering* a recognized role between DE and DA.

## Interview Questions

1. What is data engineering and how is it different from BI?
2. Walk through a real-time pipeline you'd design today.
3. **ETL** vs **ELT** — when each.
4. **OLTP** vs **OLAP** — fundamental differences.
5. What does a senior DE do that a junior doesn't?

---

## Related pages

> [!multi-column]
>
>> [!card] Discipline
>> [[data-pipeline|Data Pipeline]], [[data-warehousing|Data Warehousing]], [[faq|FAQ]], [[guides/getting-started|Getting Started]]
>
>
>> [!card] Sub-disciplines
>> [[data-architecture|Data Architecture]], [[data-modeling|Data Modeling]], [[data-processing|Data Processing]], [[data-storage|Data Storage]], [[data-management|Data Management]], [[data-ingestion|Data Ingestion]]
>
>
>> [!card] People
>> [[../people/joe-reis-matt-housley|Joe Reis + Matt Housley]], [[../people/martin-kleppmann|Martin Kleppmann]]
>
>
>> [!card] Books
>> [[../books/fundamentals-of-data-engineering|Fundamentals of Data Engineering]], [[../books/designing-data-intensive-applications|Designing Data-Intensive Applications]]


