---
title: BigQuery External Data
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:35:00 pm
aliases:
  - BigQuery Federated Queries
  - External Tables
category: Cloud
tags:
  - GCP
  - BigQuery
  - Federation
  - Analytics
banner:
publish: true
---

> "The road to success and the road to failure are almost exactly the same."
> <cite>— Colin R. Davis</cite>

---

BigQuery can query data **stored outside** the warehouse via **external (federated) tables** — leaving the data in place. Currently supported sources include **Google Drive, [[Cloud Storage|Cloud Storage]], [[../databases/cloud-sql|Cloud SQL]], and [[../databases/cloud-bigtable|Bigtable]]** (source: Google Cloud Platform - Working with External Data in BigQuery.md). Modern additions also include **AWS S3** and **Azure Blob** via **BigLake**.

## Why federate

You don't always want to load data:

- The dataset is **small but frequently changing** (e.g. a Google Sheet edited live).
- You want a **single-pass ETL** — read external, transform in SQL, write the result as a permanent table.
- You're doing **one-off ad-hoc analysis** and don't want to pay for storage or wait for a load.

## Trade-offs

- **Performance is lower** than native BigQuery storage — no Capacitor columnar layout, no scan-aware optimizations (source: Google Cloud Platform - Working with External Data in BigQuery.md).
- BigQuery **cannot predict bytes scanned** — you only see actual cost after the query runs.
- Results are **not cached** — repeated queries pay full price every time.

For frequently-queried, large data, **load it natively** instead.

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

