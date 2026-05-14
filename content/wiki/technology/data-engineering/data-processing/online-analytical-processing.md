---
title: Online Analytical Processing (OLAP)
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - OLAP
  - Online Analytical Processing
category: Computer Science
tags:
  - DataEngineering
  - Database
  - OLAP
  - Analytics
banner:
dg-publish: true
---

---

**Online Analytical Processing (OLAP)** is the term for a [[../data-modeling/data-modeling|data model]] that **aggregates data across multiple dimensions** to make it easier and faster to query. OLAP systems are mostly **optimized for reading** and are used primarily for **reporting + analysis** (source: Concepts/Data Processing/Online Analytical Processing.md).

## Characteristics

- **Optimized for reads** — scans + aggregations across many rows.
- **[[../data-modeling/denormalization|Denormalized]]** — wide tables with redundant data; joins minimized.
- **[[../data-storage/column-oriented-database|Column-oriented]] storage** — only relevant columns are scanned.
- **Massive parallelism** — queries shard across many workers.
- **Time-variant** — keeps historical data over years.
- **High data volume** — TB to PB.
- **Lower concurrency** — fewer, longer queries.

## OLAP cube model

Classical OLAP organized data as a **cube** with multiple dimensions (time, geography, product, customer) and aggregable measures (revenue, count). Operations:

- **Slice** — fix one dimension.
- **Dice** — restrict multiple dimensions.
- **Roll-up** — aggregate (daily → monthly).
- **Drill-down** — disaggregate (yearly → quarterly).
- **Pivot** — rotate the cube to view differently.

Modern columnar warehouses make explicit cubes mostly unnecessary; the warehouse runs ad-hoc OLAP queries directly.

## Popular OLAP systems

- [[../../../gcp/analytics/bigquery|Google BigQuery]]
- **Snowflake**
- **Amazon Redshift**
- **Azure Synapse**
- **ClickHouse**
- **Apache Druid**, **Apache Pinot** — real-time OLAP for sub-second analytics.
- [[../../../databricks/databricks|Databricks SQL]] (lakehouse-style)

## OLAP vs OLTP

| | OLAP | [[online-transaction-processing\|OLTP]] |
| --- | --- | --- |
| Workload | Analytics | Transactions |
| Storage | **Columnar** | Row |
| Schema | **Denormalized** | Normalized |
| Latency | Seconds–minutes | Sub-ms |
| Volume | TB–PB | GB–TB |
| Concurrency | Lower | Higher |
| Updates | Bulk / batch | Frequent small |

## ROLAP vs MOLAP vs HOLAP

- **ROLAP** — relational OLAP; cubes are virtual, queries hit relational warehouse. (Snowflake, BigQuery)
- **MOLAP** — multidimensional OLAP; pre-computed cubes in proprietary format. (SSAS, Essbase)
- **HOLAP** — hybrid.

Modern stacks are overwhelmingly **ROLAP** because warehouse compute is cheap.

## Real-time OLAP (modern)

A new generation handles **real-time aggregations** at sub-second latency:

- **Apache Druid** — pioneer.
- **Apache Pinot** — LinkedIn-born.
- **ClickHouse** — Yandex-born; used by Cloudflare, Sentry.

These power **user-facing analytics** (e.g. "your post got 1342 views in the last hour" updating live).

## Interview Questions

1. **OLAP** vs **OLTP** — workload, schema, storage.
2. **ROLAP** vs **MOLAP** — distinction.
3. Why are warehouses **columnar**?
4. **Druid** / **Pinot** / **ClickHouse** vs traditional warehouses.
5. **OLAP cube** operations — slice, dice, roll-up.

## Related pages

> [!multi-column]
>
>> [!card] Sister workloads
>> [[online-transaction-processing|OLTP]], [[hybrid-transactional-analytical-processing|HTAP]]
>
>
>> [!card] Modeling + storage
>> [[../data-modeling/dimensional-modeling|Dimensional Modeling]], [[../data-modeling/denormalization|Denormalization]], [[../data-storage/column-oriented-database|Column-oriented Database]]
>
>
>> [!card] Architecture
>> [[../data-architecture/data-warehouse|Data Warehouse]], [[../../data-warehousing|Data Warehousing]]
>
>
>> [!card] Products
>> [[../../../gcp/analytics/bigquery|BigQuery]], [[../../../databricks/databricks|Databricks]]
>
>
>> [!card] People
>> [[../../../people/ralph-kimball|Ralph Kimball]]

