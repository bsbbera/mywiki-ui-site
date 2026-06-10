---
title: Online Analytical Processing (OLAP)
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - OLAP
  - Online Analytical Processing
category: Computer Science
tags:
  - DataEngineering
  - Database
  - OLAP
  - Analytics
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "No one has ever become poor by giving."
> <cite>— Anne Frank</cite>

---

<span class="at-kicker">Data Processing · Analytics Pattern</span>

# Online Analytical Processing (OLAP)

<p class="at-lead">
OLAP is the data model and workload type that aggregates data across multiple dimensions to make it faster and easier to query for reporting and analysis. OLAP systems are optimized overwhelmingly for reading — columnar storage, denormalized schemas, and massive parallelism at TB-to-PB scale.
</p>

<span class="at-stat">Column-oriented Storage</span> scans only needed columns &nbsp;·&nbsp; <span class="at-stat">TB–PB Scale</span> historical, time-variant data &nbsp;·&nbsp; <span class="at-mark">multi-dimensional analysis — slicing, dicing, and drilling through aggregated data</span>

---

<span class="at-kicker">CHARACTERISTICS</span>

## Characteristics

> [!grid|cols3]
>
>> [!card|section] Read-Optimized
>> Scans and aggregations across many rows are the primary workload. Write throughput is secondary — bulk/batch loads rather than frequent small updates.
>
>> [!card|section] Columnar Storage
>> Only relevant columns are read from disk. Columnar formats (Parquet, ORC) compress well and enable vectorized execution — orders of magnitude faster for analytics.
>
>> [!card|section] Denormalized Schema
>> Wide tables with redundant data minimize joins. Star and snowflake schemas pre-join dimension data so analytical queries hit fewer tables.
>
>> [!card|section] Massive Parallelism
>> Queries shard across many worker nodes simultaneously. A 1 TB scan that takes hours on one machine takes seconds across a hundred.
>
>> [!card|section] Time-Variant
>> Keeps historical data over years. The primary question answered is "what happened over time?" — trends, seasonality, cohort analysis.
>
>> [!card|section] Lower Concurrency
>> Fewer simultaneous users than OLTP, but each query is much heavier — running minutes-long scans rather than millisecond point lookups.

---

<span class="at-kicker">CUBE MODEL</span>

## OLAP cube model

Classical OLAP organized data as a **cube** with multiple dimensions (time, geography, product, customer) and aggregable measures (revenue, count). Operations:

- **Slice** — fix one dimension.
- **Dice** — restrict multiple dimensions.
- **Roll-up** — aggregate (daily → monthly).
- **Drill-down** — disaggregate (yearly → quarterly).
- **Pivot** — rotate the cube to view differently.

Modern columnar warehouses make explicit cubes mostly unnecessary; the warehouse runs ad-hoc OLAP queries directly.

---

<span class="at-kicker">ECOSYSTEM</span>

## Popular OLAP systems

> [!grid|cols2]
>
>> [!card|section] Cloud Warehouses (ROLAP)
>> - [[../../cloud/gcp/analytics/bigquery|Google BigQuery]]
>> - **Snowflake**
>> - **Amazon Redshift**
>> - **Azure Synapse**
>> - [[../../cloud/databricks/databricks|Databricks SQL]] (lakehouse-style)
>
>> [!card|section] Real-time OLAP
>> Sub-second analytics for user-facing dashboards:
>> - **Apache Druid** — pioneer of real-time OLAP
>> - **Apache Pinot** — LinkedIn-born
>> - **ClickHouse** — Yandex-born; used by Cloudflare, Sentry

---

<span class="at-kicker">COMPARISON</span>

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

---

<span class="at-kicker">ARCHITECTURE VARIANTS</span>

## ROLAP vs MOLAP vs HOLAP

- **ROLAP** — relational OLAP; cubes are virtual, queries hit relational warehouse. (Snowflake, BigQuery)
- **MOLAP** — multidimensional OLAP; pre-computed cubes in proprietary format. (SSAS, Essbase)
- **HOLAP** — hybrid.

Modern stacks are overwhelmingly **ROLAP** because warehouse compute is cheap.

---

> [!note] Real-time OLAP: the new generation
> A new generation of OLAP engines (Druid, Pinot, ClickHouse) handles real-time aggregations at sub-second latency — powering user-facing analytics like "your post got 1,342 views in the last hour" updating live. These differ from cloud warehouses: they ingest directly from Kafka/event streams, pre-aggregate into indexes, and serve queries in milliseconds rather than seconds.

---

<span class="at-kicker">INTERVIEW PREP</span>

## Interview Questions

1. **OLAP** vs **OLTP** — workload, schema, storage.
2. **ROLAP** vs **MOLAP** — distinction.
3. Why are warehouses **columnar**?
4. **Druid** / **Pinot** / **ClickHouse** vs traditional warehouses.
5. **OLAP cube** operations — slice, dice, roll-up.

---

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
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
>> [[../data-architecture/data-warehouse|Data Warehouse]], [[../data-warehousing|Data Warehousing]]
>
>
>> [!card] Products
>> [[../../cloud/gcp/analytics/bigquery|BigQuery]], [[../../cloud/databricks/databricks|Databricks]]
>
>
>> [!card] People
>> [[../../../people/ralph-kimball|Ralph Kimball]]
