---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Data Warehousing
Created:
  - 2026-04-27
aliases:
  - Data Warehouse
  - DWH
  - EDW
category: Computer Science
tags:
  - data-engineering
  - concept
  - DataWarehouse
  - Analytics
  - OLAP
  - ETL
  - Theory
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Core Concepts</span>

# Data Warehousing

<p class="at-lead">
Data warehousing is the practice of collecting, integrating, cleaning, and storing data from multiple operational sources into a central repository optimized for analysis and reporting. The data warehouse is the architectural pillar that lets organizations turn raw transactional data into decision-grade insights.
</p>

<span class="at-stat">1992</span> Inmon's definition &nbsp;·&nbsp; <span class="at-stat">TB→PB</span> scale typical &nbsp;·&nbsp; <span class="at-mark">Subject-oriented, integrated, time-variant, and non-volatile</span>

> [!tip] Inmon's Definition
> The seminal definition (Bill Inmon, 1992): a data warehouse is **subject-oriented, integrated, time-variant, and non-volatile**. It complements — not replaces — operational databases by copying and reorganizing data for analysis.

<span class="at-kicker">OLAP vs OLTP</span>

## OLAP vs OLTP — the core distinction

The most important concept in data warehousing is the split between two workload types:

| | OLTP (operational DBs) | OLAP (data warehouses) |
| --- | --- | --- |
| Workload | **Transactions** — inserts, updates, deletes | **Analytics** — aggregate queries, scans |
| Schema | Normalized (3NF/BCNF) | **Denormalized** (star / snowflake) |
| Data freshness | Real-time | Hours / minutes / seconds-old |
| Volume | GB → low TB | TB → PB |
| Concurrency | Many short transactions | Few long queries |
| Examples | [[../cloud/gcp/databases/cloud-sql|Cloud SQL]], [[../cloud/gcp/databases/cloud-spanner|Spanner]] | [[../cloud/gcp/analytics/bigquery|BigQuery]], Snowflake, Redshift |

A warehouse is **not** a replacement for the operational DB — it complements it by **copying** data over (via [[#etl---extract-transform-load|ETL]]) and reorganizing for analysis.

<span class="at-kicker">Why Warehouse</span>

## Why a data warehouse?

1. **Handles huge volumes** — TB-to-PB; OLTP databases choke at TB.
2. **Enhanced analytics** — optimized for aggregations, joins over millions of rows, complex window functions.
3. **Centralized storage** — single unified view across departments and sources.
4. **Trend analysis** — keeps historical data over years; lets you compare across time.
5. **BI support** — dashboards, reports, ad-hoc analysis via tools like [[../cloud/gcp/analytics/bigquery-visualization|Looker Studio]], Tableau, Power BI.

<span class="at-kicker">Architecture</span>

## Architecture — the canonical components

```
[ Source systems ]   [ ETL / ELT ]   [ Data warehouse ]   [ Consumption layer ]
       │                  │                 │                     │
   - OLTP DBs        - Extract        - Fact tables          - BI dashboards
   - SaaS APIs       - Transform      - Dimension tables     - Ad-hoc queries
   - Files / logs    - Load           - Aggregates           - Data scientists
   - External data                    - Metadata             - Data marts
```

| Component | Role |
| --- | --- |
| **Data sources** | Operational DBs, SaaS, files, IoT, external feeds |
| **ETL / ELT process** | Extract from sources, transform, load into warehouse |
| **Warehouse DB** | Central repository, multi-dimensional layout for fast querying |
| **Metadata** | Describes structure, lineage, ownership; see [[../cloud/gcp/analytics/data-catalog|Data Catalog]] |
| **Data marts** | Department-focused subsets (e.g. Marketing, Finance) |
| **OLAP tools** | Multi-dimensional analysis, cubes, drill-down |
| **End-user tools** | Dashboards, BI, reporting |

<span class="at-kicker">ETL Process</span>

## ETL — Extract, Transform, Load

The **ETL process** is the heart of warehousing:

1. **Extract** — pull data from heterogeneous sources.
2. **Transform** — clean, deduplicate, type-cast, enrich, aggregate, reshape into the warehouse schema.
3. **Load** — write into the warehouse tables.

GCP services for each step:

- **Extract**: [[../cloud/gcp/analytics/pubsub|Pub/Sub]], **Datastream** (CDC), Storage Transfer Service.
- **Transform**: [[../cloud/gcp/analytics/dataflow|Dataflow]] (Apache Beam), [[../cloud/gcp/analytics/datafusion|Data Fusion]] (visual), **Dataproc** (Spark/Hadoop).
- **Load**: [[../cloud/gcp/analytics/bigquery|BigQuery]] load jobs, Storage Write API.

### ETL vs ELT (modern)

A modern shift: **ELT** flips the order — load raw data into the warehouse first, transform inside it using SQL.

| | ETL (classic) | ELT (modern) |
| --- | --- | --- |
| Transform location | External engine (Informatica, Spark) | Inside the warehouse (BigQuery / Snowflake SQL) |
| Best for | Schema-on-write, governed data | Cheap compute, schema-on-read, dbt workflows |
| GCP example | Dataflow → BigQuery | Raw GCS → BigQuery → **dbt** transforms |

Tools like **dbt** popularized ELT — the warehouse's compute is cheap and powerful enough that running transformations there is simpler than maintaining external pipelines.

<span class="at-kicker">Schema Design</span>

## Schema design — star and snowflake

The classic warehouse schema is a **star schema** (Ralph Kimball, 1996): one central **fact table** + several denormalized **dimension tables**.

```
                      ┌─────────────┐
                      │ DimDate     │
                      └──────┬──────┘
                             │
   ┌──────────────┐     ┌────┴────────┐     ┌──────────────┐
   │ DimCustomer  ├─────┤ FactSales   ├─────┤ DimProduct   │
   └──────────────┘     └────┬────────┘     └──────────────┘
                             │
                      ┌──────┴──────┐
                      │ DimStore    │
                      └─────────────┘
```

- **Fact table** — measures (revenue, units, clicks); high cardinality; many rows.
- **Dimension tables** — descriptive attributes (date, customer, product, store); low cardinality.

A **snowflake schema** further normalizes dimensions (e.g. `DimCity → DimState → DimCountry`); rarely better in practice — extra joins hurt performance.

Star schemas **violate normalization** deliberately to favour read performance — see [[../databases/database-normalization|Normalization]] for the OLTP-side rules.

<span class="at-kicker">Warehouse Types</span>

## Types of data warehouses

| Type | Characteristic |
| --- | --- |
| **Enterprise Data Warehouse (EDW)** | Centralized, organization-wide; the canonical warehouse |
| **Operational Data Store (ODS)** | Real-time operational data; for daily ops, not deep analytics |
| **Data Mart** | Department-scoped subset of an EDW |
| **Cloud Data Warehouse** | Managed; e.g. [[../cloud/gcp/analytics/bigquery|BigQuery]], Snowflake, Redshift |
| **Big Data Warehouse** | Petabyte+, often unstructured / semi-structured (Parquet on Hadoop) |
| **Virtual Data Warehouse** | Query-time federation; no copy (similar to [[../cloud/gcp/analytics/bigquery-external-data|BigQuery external tables]]) |
| **Hybrid** | On-prem + cloud combination |
| **Real-time DW** | Streaming ingestion + sub-minute freshness |

<span class="at-kicker">Lakehouse Evolution</span>

## The Lakehouse — modern evolution

Two more recent architectural patterns extend the warehouse:

- **Data Lake** — cheap object storage holding raw, semi-structured files (Parquet, JSON, Avro). Cheap, schema-on-read, but messy.
- **Lakehouse** — adds **ACID transactions, schema enforcement, time travel** to a data lake via formats like **Delta Lake** ([[../cloud/databricks/databricks|Databricks]]), **Iceberg**, **Hudi**. Best of both worlds: warehouse-grade reliability on lake-grade storage.

GCP supports the lakehouse pattern via **BigLake** (BigQuery + Iceberg/Delta on GCS).

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. Lake vs warehouse vs lakehouse — when prefer which?
2. What is a **data mesh** and what problem does it solve?
3. **Lambda** vs **Kappa** architecture trade-offs.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Warehouse internals
>> [[data-pipeline|Data Pipeline]], [[../data-processing/batch-data-processing|Batch Processing]], [[../data-modeling/dimensional-modeling|Dimensional Modeling]]
>
>
>> [!card] Architecture
>> [[data-architecture/data-architecture|Data Architecture]], [[data-architecture/data-lake|Data Lake]], [[data-architecture/data-mesh|Data Mesh]]
>
>
>> [!card] Products
>> [[../cloud/gcp/analytics/bigquery|BigQuery]], [[../cloud/databricks/databricks|Databricks]]
>
>
>> [!card] People
>> [[../../people/bill-inmon|Bill Inmon]], [[../../people/ralph-kimball|Ralph Kimball]]
>
>
>> [!card] Books
>> [[../../books/the-data-warehouse-toolkit|The Data Warehouse Toolkit]], [[../../books/fundamentals-of-data-engineering|Fundamentals of Data Engineering]]
