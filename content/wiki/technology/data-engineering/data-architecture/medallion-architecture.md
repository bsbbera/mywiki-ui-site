---
title: Medallion Architecture
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Medallion Architecture
  - Multi-hop Architecture
  - Bronze Silver Gold
category: Computer Science
tags:
  - DataEngineering
  - Architecture
  - Lakehouse
  - Databricks
banner:
publish: true
---

> "No valid plans for the future can be made by those who have no capacity for living now."
> <cite>— Alan Watts</cite>

---

The **Medallion Architecture** is a data design pattern, coined by **[[../../cloud/databricks/databricks|Databricks]]**, used to logically organize data in a **lakehouse**. The goal: **incrementally improve data quality** as it flows through three named layers — **bronze (raw)**, **silver (validated)**, and **gold (enriched)** (source: Concepts/Data Architecture/Medallion Architecture.md).

Sometimes called **"multi-hop"** architecture.

## The three layers

### 🥉 Bronze — raw

- Initial point for **data ingestion + storage**.
- Data is saved **without processing or transformation**.
- Examples: application logs to a distributed file system; Kafka events streamed to Delta tables.
- **Schema-on-read**; preserves source format faithfully.

### 🥈 Silver — validated / cleaned

- Tables are **cleaned, filtered, lightly transformed**.
- **Light** modifications only — no heavy aggregation or enrichment.
- Examples: parse log structs; standardize event naming; deduplicate; cast types.
- This is where the lakehouse format ([[../../tools/file-formats|Delta Lake / Iceberg / Hudi]]) really pays off — schema enforcement, ACID upserts, time travel.

### 🥇 Gold — enriched / business-ready

- Refined for **specific business and analytics requirements**.
- Aggregations to a chosen grain (daily, hourly, customer-level).
- Joins with external reference data, KPIs, dimensional models.
- Consumed downstream by **analytics, data science, ML, BI dashboards**.

(source: Concepts/Data Architecture/Medallion Architecture.md)

## Advantages

- **Familiar** — maps onto dbt's source → stage → curated pattern.
- **Logical progression** — easy for new engineers to navigate.
- **Replay-able** — gold can always be rebuilt from bronze; ideal for backfill, schema evolution, disaster recovery.

## Disadvantages

- **Doesn't replace dimensional modeling** — schemas inside each layer must still be modeled (often with [[../data-modeling/dimensional-modeling|star schemas]]).
- **High storage usage** — effectively 3× the lake size; problematic for very large datasets.
- **Often needs a 4th "platinum" layer** for business logic owned by analysts.
- **Implies a lakehouse** — assumes Delta-style ACID storage; pure data lake or warehouse implementations need adaptation.

(source: Concepts/Data Architecture/Medallion Architecture.md)

## Where it shines

- **[[../../cloud/databricks/databricks|Databricks]]** lakehouse implementations (the original use case).
- Modern **dbt + warehouse** stacks (renamed as `staging → intermediate → marts`).
- Streaming + batch unified pipelines via [[../data-processing/stream-data-processing|Structured Streaming]].

## Combining with other patterns

- Medallion + **[[lambda-architecture|Lambda]]** — bronze receives both streams and batches; silver unifies them.
- Medallion + **[[data-mesh|Data Mesh]]** — each domain owns its own bronze/silver/gold layers; gold tables become the data products published to consumers.
- Medallion + **[[../data-modeling/dimensional-modeling|Dimensional Modeling]]** — gold layer holds the star/snowflake fact and dimension tables.

## Implementation on GCP

- **Bronze**: [[Cloud Storage|Cloud Storage]] (raw files) or [[../../cloud/gcp/analytics/bigquery|BigQuery]] external tables.
- **Silver**: BigQuery tables with cleaning UDFs (or Dataflow output).
- **Gold**: BigQuery materialized views, scheduled queries, or BigLake managed tables.

## Interesting Facts

- The "medallion" name is Databricks marketing — the underlying pattern existed in warehouses for decades as **staging → integration → presentation**.
- Some teams add a **"4th layer" (platinum)** for business-owned semantic transformations, separating engineering's gold from analytics' product.

## Interview Questions

1. Bronze vs silver vs gold — what stays / leaves at each layer?
2. How is medallion different from a classic warehouse staging area?
3. When does triple storage cost become a problem?
4. How would you build medallion on GCP without Databricks?

## Related pages

> [!grid]
>
>> [!card] Sister architectures
>> [[data-lake|Data Lake]], [[data-warehouse|Data Warehouse]], [[lambda-architecture|Lambda]], [[kappa-architecture|Kappa]]
>
>
>> [!card] Modeling
>> [[../data-modeling/data-modeling|Data Modeling]], [[../data-modeling/dimensional-modeling|Dimensional Modeling]]
>
>
>> [!card] Products + formats
>> [[../../cloud/databricks/databricks|Databricks]], [[../../tools/file-formats|File Formats (Delta / Iceberg)]]
>
>
>> [!card] People
>> [[../../../people/matei-zaharia|Matei Zaharia]]

