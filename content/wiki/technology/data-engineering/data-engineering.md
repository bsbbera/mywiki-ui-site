---
title: Data Engineering
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Data Engineering
  - DE
category: Computer Science
tags:
  - DataEngineering
  - Overview
banner: https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1400
publish: true
cssclass: wide-page
maturity: evergreen
---

> "A self that goes on changing is a self that goes on living."
> <cite>— Virginia Woolf</cite>

---

<span class="at-kicker">Data Engineering · Overview</span>

# Data Engineering

<p class="at-lead">
Modern-day Data Engineering is a subset of software engineering that focuses on moving, storing, and structuring data for use in applications or reporting — the discipline of building reliable, scalable data infrastructure for analytical and operational use.
</p>

<span class="at-stat">7</span> sub-disciplines &nbsp;·&nbsp; <span class="at-stat">3</span> skill levels &nbsp;·&nbsp; <span class="at-mark">the discipline of building reliable, scalable data infrastructure for analytical and operational use</span>

*📄 `$= dv.pages('"wiki/technology/data-engineering"').length` notes in this field · ⏱ `$= Math.max(1, Math.ceil(dv.current().file.size / 1100))` min read · 🕘 updated `$= dv.current().file.mtime.toFormat("MMM d, yyyy")`* <span class="mw-maturity is-evergreen">🌳 Evergreen</span>

> [!tip] The DE Career Path
> Data engineering is typically not an entry-level job — most start in adjacent roles (Data Analyst, BI Developer, Backend Engineer) and transition. The journey progresses from SQL and data modeling basics to advanced cloud, streaming, and infrastructure-as-code skills.

<span class="at-kicker">What We Do</span>

## What data engineers do

> [!grid|cols2]
>
> > [!card|section] Requirements
> > **Gather data requirements** — how long stored, how used, who/what needs access.
>
> > [!card|section] Metadata
> > **Maintain metadata** — technologies in use, documentation, security, source, ownership.
>
> > [!card|section] Security
> > **Ensure security + governance** — IAM, encryption, audit access.
>
> > [!card|section] Storage
> > **Store data** in the right system — [[relational-database|relational]], [[non-relational-database|NoSQL]], [[data-storage|object/blob]].
>
> > [!card|section] Processing
> > **Process data** — pipelines that extract, transform, enrich, summarize, load.

<span class="at-kicker">Skill Progression</span>

## Core skill set

| Level | Required |
| --- | --- |
| **Junior DE** | SQL (beginner), Data Modeling (beginner), Relational DB (beginner), Soft skills |
| **Data Engineer** | + Python/Java/Scala (intermediate), Indexing & query opt (intermediate), Batch processing (intermediate), Data Pipeline (beginner), Data Warehouse (beginner) |
| **Senior DE** | + Cloud (advanced), Infra-as-code, Stream processing (intermediate), NoSQL (advanced), all of the above at advanced level |

<span class="at-kicker">Role Distinctions</span>

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

<span class="at-kicker">The Stack</span>

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

<span class="at-kicker">Wiki Areas</span>

## Areas covered in this wiki

> [!grid|cols3]
>
> > [!card|section] [[data-architecture|Data Architecture]]
> > Patterns: lake, warehouse, mart, mesh, lambda, kappa, medallion.
>
> > [!card|section] [[data-ingestion|Data Ingestion]]
> > Full load, delta load, CDC.
>
> > [!card|section] [[data-management|Data Management]]
> > Catalog, governance, semantic + metrics layers.
>
> > [!card|section] [[data-modeling|Data Modeling]]
> > Relational, dimensional, vault, OBT, activity schema.
>
> > [!card|section] [[data-processing|Data Processing]]
> > Batch, stream, OLTP, OLAP, HTAP, orchestration.
>
> > [!card|section] [[data-storage|Data Storage]]
> > Relational, NoSQL, graph, columnar, in-memory, time-series.
>
> > [!card|section] Software Engineering
> > CAP, sharding, scaling, indexing, idempotence, patterns.

## Cross-platform learning paths

> [!grid|cols3]
>
> > [!card|section] [[../cloud/gcp/foundations/google-cloud-platform|Google Cloud Platform]]
> > Full GCP analytics stack.
>
> > [!card|section] [AWS](AWS)
> > AWS data tools.
>
> > [!card|section] [[../cloud/azure/azure|Microsoft Azure]]
> > Azure data services.
>
> > [!card|section] [[../cloud/databricks/databricks|Databricks]]
> > Multi-cloud lakehouse.
>
> > [!card|section] [[../databases/acid-properties|ACID Properties]]
> > + [[../databases/database-normalization|Normalization]] — DBMS theory.

<span class="at-kicker">Context</span>

## Interesting Facts

- The job title "Data Engineer" exploded in popularity around **2014–2016** as cloud warehouses (Redshift, BigQuery) made big-data analytics accessible.
- The Apache Beam / Dataflow team coined "**Beam = Batch + Stream**" — capturing how DE work converged.
- **dbt** (created in 2016) made *analytics engineering* a recognized role between DE and DA.

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. What is data engineering and how is it different from BI?
2. Walk through a real-time pipeline you'd design today.
3. **ETL** vs **ELT** — when each.
4. **OLTP** vs **OLAP** — fundamental differences.
5. What does a senior DE do that a junior doesn't?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Discipline
>> [[data-pipeline|Data Pipeline]], [[data-warehousing|Data Warehousing]], [[faq|FAQ]], [[../guides/getting-started|Getting Started]]
>
>
>> [!card] Sub-disciplines
>> [[data-architecture|Data Architecture]], [[data-modeling|Data Modeling]], [[data-processing|Data Processing]], [[data-storage|Data Storage]], [[data-management|Data Management]], [[data-ingestion|Data Ingestion]]
>
>
>> [!card] People
>> [[../../people/joe-reis-matt-housley|Joe Reis + Matt Housley]], [[../../people/martin-kleppmann|Martin Kleppmann]]
>
>
>> [!card] Books
>> [[../../books/fundamentals-of-data-engineering|Fundamentals of Data Engineering]], [[../../books/designing-data-intensive-applications|Designing Data-Intensive Applications]]
