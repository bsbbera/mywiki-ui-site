---
title: Data Warehousing
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 11:00:00 pm
aliases:
  - Data Warehouse
  - DWH
  - EDW
category: Computer Science
tags:
  - DataEngineering
  - DataWarehouse
  - Analytics
  - OLAP
  - ETL
  - Theory
banner:
publish: true
---

> "Most of us live our lives by accident - we live as it happens. Fulfilment comes when we live our lives on purpose."
> <cite>— Simon Sinek</cite>

---

**Data warehousing** is the practice of collecting, integrating, cleaning, and storing data from multiple operational sources into a **central repository** optimized for **analysis and reporting**. The data warehouse is the architectural pillar that lets organizations turn raw transactional data into **decision-grade insights** (source: Data Warehousing.md).

The seminal definition (Bill Inmon, 1992): a data warehouse is **subject-oriented, integrated, time-variant, and non-volatile**.

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

(source: Data Warehousing.md)

## Why a data warehouse?

(source: Data Warehousing.md)

1. **Handles huge volumes** — TB-to-PB; OLTP databases choke at TB.
2. **Enhanced analytics** — optimized for aggregations, joins over millions of rows, complex window functions.
3. **Centralized storage** — single unified view across departments and sources.
4. **Trend analysis** — keeps historical data over years; lets you compare across time.
5. **BI support** — dashboards, reports, ad-hoc analysis via tools like [[../cloud/gcp/analytics/bigquery-visualization|Looker Studio]], Tableau, Power BI.

## Architecture — the canonical components

(source: Data Warehousing.md)

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

## ETL — Extract, Transform, Load

The **ETL process** is the heart of warehousing (source: Data Warehousing.md):

1. **Extract** — pull data from heterogeneous sources.
2. **Transform** — clean, deduplicate, type-cast, enrich, aggregate, reshape into the warehouse schema.
3. **Load** — write into the warehouse tables.

GCP services for each step:

- **Extract**: [[../cloud/gcp/analytics/pubsub|Pub/Sub]], **Datastream** (CDC), Storage Transfer Service.
- **Transform**: [[../cloud/gcp/analytics/dataflow|Dataflow]] (Apache Beam), [[../cloud/gcp/analytics/datafusion|Data Fusion]] (visual), **Dataproc** (Spark/Hadoop).
- **Load**: [[../cloud/gcp/analytics/bigquery|BigQuery]] load jobs, Storage Write API.

### ETL vs ELT (modern)

A modern shift not in the raw source: **ELT** flips the order — load raw data into the warehouse first, transform inside it using SQL.

| | ETL (classic) | ELT (modern) |
| --- | --- | --- |
| Transform location | External engine (Informatica, Spark) | Inside the warehouse (BigQuery / Snowflake SQL) |
| Best for | Schema-on-write, governed data | Cheap compute, schema-on-read, dbt workflows |
| GCP example | Dataflow → BigQuery | Raw GCS → BigQuery → **dbt** transforms |

Tools like **dbt** popularized ELT — the warehouse's compute is cheap and powerful enough that running transformations there is simpler than maintaining external pipelines.

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

## Types of data warehouses

(source: Data Warehousing.md)

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

## The Lakehouse — modern evolution (not in raw)

Two more recent architectural patterns extend the warehouse:

- **Data Lake** — cheap object storage holding raw, semi-structured files (Parquet, JSON, Avro). Cheap, schema-on-read, but messy.
- **Lakehouse** — adds **ACID transactions, schema enforcement, time travel** to a data lake via formats like **Delta Lake** ([[../cloud/databricks/databricks|Databricks]]), **Iceberg**, **Hudi**. Best of both worlds: warehouse-grade reliability on lake-grade storage.

GCP supports the lakehouse pattern via **BigLake** (BigQuery + Iceberg/Delta on GCS).

## Building a warehouse — common challenges

(source: Data Warehousing.md)

1. **When and how to gather data**
   - **Source-driven**: sources push (CDC, change-feeds).
   - **Destination-driven**: warehouse pulls on a schedule.
   - Perfect sync is expensive — accept slight staleness.
2. **Schema design**: heterogeneous sources have varied formats; the warehouse holds a cleaned, unified version.
3. **Data transformation + cleansing**: fix typos, invalid codes; **fuzzy matching** for similar-but-not-identical values.
4. **Update propagation**: easy when warehouse schema = source schema; otherwise a **view-maintenance** problem.
5. **Summarization vs raw**: raw data is huge; pre-compute aggregates ("total sales by category") for fast queries.

## Real-world examples

(source: Data Warehousing.md)

### E-commerce — Flipkart

- **Sources**: orders, returns, payments, clicks, deliveries.
- **Schema**: star schema for analysis.
- **Cleansing**: standardize names, locations, categories.
- **Updates**: near-real-time loads.
- **Insights**: bestsellers per category, regional demand, logistics performance.

### Banking — HDFC Bank

- **Sources**: ATM, online banking, credit cards, loans.
- **Schema**: integrates core banking + CRM + fraud detection.
- **Cleansing**: fix account info / transaction-log inconsistencies.
- **Updates**: nightly batch loads.
- **Insights**: cash-flow reports, high-risk account flags, customer profitability.

## Advantages and disadvantages

| Advantages | Disadvantages |
| --- | --- |
| Better, faster decisions on centralized data | High cost (initial + ongoing) |
| Strong BI / operational insight | Complexity — needs skilled data engineers |
| High data quality, consistency | Long setup + integration time |
| Scales to PB and beyond (cloud) | Source integration is hard |

(source: Data Warehousing.md)

## Where data warehousing meets the rest of this wiki

- [[../cloud/gcp/analytics/bigquery|BigQuery]] — the canonical cloud DWH; serverless petabyte-scale.
- [[../cloud/gcp/analytics/dataflow|Dataflow]] — code-first ETL.
- [[../cloud/gcp/analytics/datafusion|Data Fusion]] — visual ETL.
- [[../cloud/gcp/analytics/pubsub|Pub/Sub]] — streaming ingestion.
- [[../cloud/gcp/analytics/data-catalog|Data Catalog]] — metadata + discovery.
- [[../cloud/databricks/databricks|Databricks]] — lakehouse alternative built on Spark + Delta Lake.
- [[../databases/database-normalization|Normalization]] — the OLTP-side schema discipline DWH deliberately violates.
- [[../databases/acid-properties|ACID]] — relevant for warehouses too (BigQuery has ACID per statement; Spanner-as-warehouse has full ACID).

## Interesting Facts

- **Bill Inmon** (the "father of data warehousing") and **Ralph Kimball** disagreed for decades on warehouse design — Inmon favored top-down normalized EDW; Kimball favored bottom-up dimensional / star-schema marts. Modern practice borrows from both.
- The **3-tier warehouse architecture** — staging area + integration layer + presentation layer — is still the reference pattern, even in cloud DWHs.
- **dbt** (data build tool) has become the de-facto SQL transformation framework for ELT in modern warehouses.
- **BigQuery's Capacitor format** + **Colossus storage** + **Dremel engine** (see [[../cloud/gcp/storage/google-file-system|GFS lineage]]) is what makes petabyte queries return in seconds.

## Interview Questions can be asked

1. **OLTP vs OLAP** — what changes between schema, workload, freshness?
2. Walk through the **ETL** process. When prefer **ELT**?
3. What is a **star schema**? Why does it violate normalization on purpose?
4. **Inmon** vs **Kimball** — what's the difference?
5. **Data lake** vs **data warehouse** vs **lakehouse**.
6. How would you build a near-real-time warehouse on GCP?
7. What is **slowly changing dimension (SCD)**? Type 1 vs Type 2 vs Type 6.
8. Why do warehouses **denormalize** when normalization is the OLTP best practice?

## Related pages

> [!multi-column]
>
>> [!card] Architecture
>> [[data-warehouse|Data Warehouse]], [[data-lake|Data Lake]], [[data-mart|Data Mart]], [[medallion-architecture|Medallion]]
>
>
>> [!card] Modeling
>> [[dimensional-modeling|Dimensional Modeling]], [[data-vault-modeling|Data Vault]], [[one-big-table|One Big Table]]
>
>
>> [!card] Theory
>> [[../databases/acid-properties|ACID Properties]], [[../databases/database-normalization|Database Normalization]], [[online-analytical-processing|OLAP]]
>
>
>> [!card] Products
>> [[../cloud/gcp/analytics/bigquery|BigQuery]], [[../cloud/databricks/databricks|Databricks Lakehouse]]
>
>
>> [!card] People
>> [[../../people/bill-inmon|Bill Inmon]], [[../../people/ralph-kimball|Ralph Kimball]], [[../../people/dan-linstedt|Dan Linstedt]]
>
>
>> [!card] Books
>> [[../../books/the-data-warehouse-toolkit|The Data Warehouse Toolkit]], [[../../books/building-the-data-warehouse|Building the Data Warehouse]], [[../../books/fundamentals-of-data-engineering|Fundamentals of Data Engineering]]
>
>
>> [!card] GCP analytics stack
>> [[../cloud/gcp/analytics/dataflow|Dataflow]], [[../cloud/gcp/analytics/datafusion|Data Fusion]], [[../cloud/gcp/analytics/pubsub|Pub/Sub]], [[../cloud/gcp/analytics/data-catalog|Data Catalog]], [[Professional Data Engineer|Professional Data Engineer]]

