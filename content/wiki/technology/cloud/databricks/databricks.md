---
title: Databricks
Created:
  - 2026-04-29
date modified: Wednesday, May 13th 2026, 9:25:05 pm
aliases:
  - Databricks
  - Databricks Lakehouse
category: Cloud
tags:
  - Databricks
  - Lakehouse
  - Spark
  - DataEngineering
banner:
publish: true
---

---

[Databricks](https://www.databricks.com/) is a **cross-cloud unified data + AI platform** built on top of **Apache Spark**, **Delta Lake**, and **MLflow** — all of which originated from its founders' work at **UC Berkeley AMPLab**. It runs on **AWS, Azure, and GCP**, and pioneered the **Lakehouse architecture**, which combines data lake economics with warehouse performance + governance.

## What it is

A managed platform that consolidates:

- **Spark** clusters (managed, autoscaling).
- **Delta Lake** open-source storage layer (ACID + time-travel + UPSERT on Parquet).
- **MLflow** for experiment tracking + model registry.
- **Notebooks** (Python / SQL / R / Scala) with collaborative editing.
- **Databricks SQL** for warehouse-style analytics.
- **Unity Catalog** for governance + lineage.
- **Delta Live Tables (DLT)** for declarative pipelines.

## Why it matters

- Coined the **Lakehouse** pattern — see [[../data-engineering/data-architecture/medallion-architecture|Medallion Architecture]].
- Major contributions to OSS: **Spark**, **Delta Lake**, **MLflow**, **Koalas / pandas-on-Spark**.
- Strong choice when teams want **portability** across AWS / Azure / GCP.

## Comparison

| | Databricks | [[../gcp/analytics/bigquery\|BigQuery]] | Snowflake |
| --- | --- | --- | --- |
| Compute | Spark clusters | Serverless slots | Virtual warehouses |
| Storage | Delta Lake on cloud object storage | Capacitor on Colossus | Proprietary on object storage |
| ML platform | MLflow native | Vertex AI + BQML | Cortex (newer) |
| Multi-cloud | ✅ AWS / Azure / GCP | ❌ GCP only | ✅ AWS / Azure / GCP |
| Pricing | DBUs (per-cluster) | Per-TB scanned or slots | Per-second compute |

## On GCP

Databricks runs on GCP since 2021 with deep integration to:

- [[../gcp/storage/cloud-storage|Cloud Storage]]
- [[../gcp/analytics/bigquery|BigQuery]] (federated read / BigLake)
- [[../gcp/analytics/pubsub|Pub/Sub]]
- IAM via Workload Identity Federation

## Interview Questions

1. **Lakehouse** vs **warehouse** vs **lake** — when each.
2. **Delta Lake** — how does it add ACID to Parquet?
3. **Databricks** vs **Snowflake** vs **BigQuery** — choose-time considerations.
4. **MLflow** components and their use.
5. **Unity Catalog** — what governance problems does it solve?

## Related pages

> [!multi-column]
>
>> [!error|noicon] Data Architecture
>> ---
>> [[Medallion Architecture]], [[Data Lake]]
>
>> [!example|noicon] Data Processing
>> ---
>> [[Batch Processing]], [[Stream Processing]]
>
>> [!warning|noicon] Tools + formats
>> ---
>> [[Processing Tools (Spark)]], [[File Formats (Delta)]]
>
>> [!quote|noicon] Sister cloud platforms
>> ---
>> [[AWS]], [[Azure]], [[GCP]]
>
>> [!info|noicon] People
>> ---
>> [[Matei Zaharia]]
