---
title: BigQuery External Data
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - BigQuery Federated Queries
  - External Tables
category: Cloud
tags:
  - GCP
  - BigQuery
  - Federation
  - Analytics
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "The road to success and the road to failure are almost exactly the same."
> <cite>— Colin R. Davis</cite>

---

<span class="at-kicker">Federated Query · BigQuery</span>

# BigQuery External Data

<p class="at-lead">
BigQuery can query data stored outside the warehouse via external (federated) tables — leaving data in place across Cloud Storage, Drive, Bigtable, Cloud SQL, and even AWS S3 or Azure Blob via BigLake.
</p>

<span class="at-stat">GCS</span> + Drive + Bigtable + Cloud SQL sources &nbsp;·&nbsp; <span class="at-stat">no ETL</span> required &nbsp;·&nbsp; <span class="at-stat">BigLake</span> tables &nbsp;·&nbsp; <span class="at-mark">query data where it lives — no loading required</span>

<span class="at-kicker">How It Works</span>

## Overview

BigQuery can query data **stored outside** the warehouse via **external (federated) tables** — leaving the data in place. Currently supported sources include **Google Drive, [[Cloud Storage|Cloud Storage]], [[../databases/cloud-sql|Cloud SQL]], and [[../databases/cloud-bigtable|Bigtable]]** (source: Google Cloud Platform - Working with External Data in BigQuery.md). Modern additions also include **AWS S3** and **Azure Blob** via **BigLake**.

### Why federate

You don't always want to load data:

- The dataset is **small but frequently changing** (e.g. a Google Sheet edited live).
- You want a **single-pass ETL** — read external, transform in SQL, write the result as a permanent table.
- You're doing **one-off ad-hoc analysis** and don't want to pay for storage or wait for a load.

### Trade-offs

- **Performance is lower** than native BigQuery storage — no Capacitor columnar layout, no scan-aware optimizations (source: Google Cloud Platform - Working with External Data in BigQuery.md).
- BigQuery **cannot predict bytes scanned** — you only see actual cost after the query runs.
- Results are **not cached** — repeated queries pay full price every time.

For frequently-queried, large data, **load it natively** instead.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### GOOGLE DRIVE
>> ### Drive *Federation*
>> Query live-edited Google Sheets and CSV files stored in Drive. BigQuery sees current cell values per query — perfect for reference data that business users maintain.
>
>> [!card|section]
>> ###### CLOUD STORAGE
>> ### Cloud Storage *Tables*
>> Query Parquet, Avro, CSV, JSON, and ORC files directly from GCS buckets. Wildcard patterns include all matching files. No ingestion, zero storage cost in BigQuery.
>
>> [!card|section]
>> ###### CLOUD SQL
>> ### Cloud SQL *Federation*
>> Query MySQL and PostgreSQL databases directly without ETL. Federated queries join operational data with warehouse data in a single SQL statement.
>
>> [!card|section]
>> ###### BIGTABLE
>> ### Bigtable *Integration*
>> Query HBase-compatible time-series and NoSQL data. Join massive analytical tables with operational low-latency lookups for hybrid workloads.
>
>> [!card|section]
>> ###### BIGLAKE
>> ### BigLake *Multi-Cloud*
>> Extend external tables to AWS S3 and Azure Blob with fine-grained access control. Unify governance across cloud providers with Data Catalog integration.
>
>> [!card|section]
>> ###### SINGLE-PASS ETL
>> ### ETL *Without Loading*
>> SELECT from external tables and INSERT into permanent BigQuery tables. Transform and load in one query without intermediate storage steps.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Storage cost** | Zero — data remains in the source system |
| **Query cost** | Standard BigQuery on-demand pricing per TB scanned |
| **Cost unpredictability** | Cannot estimate before running — actual bytes scanned shown after |
| **Caching** | Results never cached — repeated queries incur full cost |
| **Performance trade-off** | Slower than native tables due to no columnar optimization |

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### REFERENCE DATA
>> ### Live Reference *Data*
>> Join massive fact tables with small, frequently-changing reference data in Google Sheets. Business users edit the sheet; analysts always see latest values without reloads.
>
>> [!card|section]
>> ###### SINGLE-PASS ETL
>> ### One-Pass *Transformation*
>> SELECT from external CSV in GCS, clean and transform with SQL, INSERT result into permanent partitioned table. No intermediate landing zone required.
>
>> [!card|section]
>> ###### DATA LAKEHOUSE
>> ### Data Lake *Analytics*
>> Query Parquet/Avro files in GCS data lakes without copying. Maintain single source of truth in object storage while enabling SQL analytics.
>
>> [!card|section]
>> ###### EXPLORATORY ANALYSIS
>> ### Ad-Hoc *Exploration*
>> Preview data before committing to ingestion. Validate schemas, assess data quality, and estimate costs before full ETL pipeline investment.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · EXTERNAL DATA
>> # From *external storage* to *SQL results*.
>> Query data where it lives — no loading, no ETL, no storage duplication required.
>
>> [!card|step]
>> ###### Step 01
>> ### *Create* external table definition.
>> Define the source location (GCS, Drive, Cloud SQL URI), file format, and schema. Choose permanent for reuse or temporary for one-off queries. Auto-detect schema for standard formats.
>
>> [!card|step]
>> ###### Step 02
>> ### *Write* federated SQL query.
>> Query external tables exactly like native tables using standard SQL. Join external sources with BigQuery tables. Filter and aggregate without loading constraints.
>
>> [!card|step]
>> ###### Step 03
>> ### *Optimize* with BigLake.
>> For production workloads, upgrade to BigLake tables for fine-grained security policies, column/row access controls, and multi-cloud support across AWS S3 and Azure Blob.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] BigQuery hub + sub-pages
>> [[bigquery|BigQuery]], [[bigquery-loading-data|Loading Data]], [[bigquery-tables|BigQuery Tables]]
>
>
>> [!card] External sources
>> [[Cloud Storage|Cloud Storage]], [[../databases/cloud-sql|Cloud SQL]], [[../databases/cloud-bigtable|Cloud Bigtable]]
>
>
>> [!card] Data Architecture
>> [[../../../data-engineering/data-architecture/data-lake|Data Lake]]
>
>
>> [!card] Tools
>> [[../../../tools/file-formats|File Formats]]

## Best-fit use cases

1. **Single-pass ETL** — `SELECT ... FROM external_table` and `INSERT` into a permanent table.
2. **Joining large native data with small frequently-changing reference data** — keep the small reference data in a Google Sheet, edited by business users; the join always sees the latest values without re-loading.
3. **One-off exploration** before deciding whether to ingest.
4. **Data-lake / lakehouse** patterns — read Parquet/Avro from GCS without copy.

(source: Google Cloud Platform - Working with External Data in BigQuery.md)

## Setting up an external table (UI)

Example: query a year of US flight performance JSON files in a public GCS bucket (source: Google Cloud Platform - Working with External Data in BigQuery.md).

1. Create a dataset (e.g. `flight_performance`, `US` location).
2. **Create Table** → **Source: Google Cloud Storage** (or Drive / Bigtable).
3. Paste the URI; wildcards (`gs://bucket/folder/*.json`) include all matching files.
4. Under **Destination**, set **Table type: External**.
5. Name the table; auto-detect schema if appropriate.
6. **Create Table** — there's no ingestion, the table appears immediately with **size 0 bytes** (data lives at source).

You can now run queries:

```sql
SELECT carrier, COUNT(*) AS flights
FROM   `proj.flight_performance.flights_2014`
GROUP BY carrier
ORDER BY flights DESC;
```

## Permanent vs temporary external tables

- **Permanent external table** — definition is stored; usable across sessions; sharable via [[bigquery-iam|IAM]].
- **Temporary external table** — defined inline in a single query (using `CREATE TEMP TABLE` / table-definition flag in `bq query`). Useful for one-off queries and ETL scripts.

## BigLake (modern, not in raw)

**BigLake** extends external tables to **AWS S3 and Azure Blob**, adds **fine-grained access control** (column / row-level on external data), and unifies governance with [[data-catalog|Data Catalog / Dataplex]]. Treat as the production-grade evolution of external tables for data-lake architectures.

## Interesting Facts

- Querying a **live-edited Google Sheet** is a magic moment — BigQuery sees the current cell values per query.
- The first **federated** dialect was JSON / CSV in GCS; Bigtable federation appeared later for time-series + analytical joins.
- **Storage size = 0** for external tables — only **scan time** costs apply.

## Interview Questions can be asked

1. When pick an **external table** over loading?
2. Why is performance worse for federated queries?
3. How does **BigLake** extend the model? (multi-cloud, fine-grained ACL)
4. Walk through a single-pass ETL using an external table source.
