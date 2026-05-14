---
title: Data Processing
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Data Processing
category: Computer Science
tags:
  - DataEngineering
  - Processing
banner:
dg-publish: true
---

---

**Data Processing** is the act of transforming raw data into meaningful, actionable information. It involves **collecting, manipulating, filtering, sorting, and analyzing** data to extract insights, support decisions, and enable business operations. Processing focuses on **what happens to data after it has been ingested** (source: Concepts/Data Processing/Data Processing.md).

## Components

### 1. Processing Systems

| System | Role |
| --- | --- |
| [[online-transaction-processing\|OLTP]] | Day-to-day transactional workloads |
| [[online-analytical-processing\|OLAP]] | Aggregations and analytical queries |
| [[hybrid-transactional-analytical-processing\|HTAP]] | Combined OLTP + OLAP in one system |

### 2. Processing Execution Models

| Model | Latency | Best for |
| --- | --- | --- |
| [[batch-data-processing\|Batch Processing]] | Minutes–hours | Large volumes, predictable schedule |
| [[stream-data-processing\|Stream Processing]] | Sub-second | Real-time, continuous |
| **Micro-batch Processing** | 5–15 min | Hybrid of the two |

### 3. [[workflow-orchestration|Workflow Orchestration]]

Schedules and coordinates processing jobs. Tools: Airflow, Dagster, Prefect.

### 4. Architectural Patterns

The execution model + processing system combine into named architectures: see [[../data-architecture/data-architecture|Data Architecture]] (Lambda, Kappa, Medallion, etc.).

## How OLAP and OLTP relate

- **OLTP** captures *what just happened* — payments, orders, signups.
- **OLAP** asks *what does it mean* — trends, customer LTV, fraud patterns.
- The data flows OLTP → [[../data-ingestion/data-ingestion|ingestion]] → OLAP.

## On GCP

| Step | Service |
| --- | --- |
| OLTP | [[../../../gcp/databases/cloud-sql|Cloud SQL]], [[../../../gcp/databases/cloud-spanner|Spanner]] |
| Streaming bus | [[../../../gcp/analytics/pubsub|Pub/Sub]] |
| Batch + stream processing | [[../../../gcp/analytics/dataflow|Dataflow]] |
| Visual ETL | [[../../../gcp/analytics/datafusion|Data Fusion]] |
| Spark/Hadoop | Dataproc |
| OLAP | [[../../../gcp/analytics/bigquery|BigQuery]] |
| Orchestration | Cloud Composer (Airflow) |

## Interview Questions

1. **OLTP** vs **OLAP** vs **HTAP** — when each.
2. **Batch** vs **streaming** vs **micro-batch** — trade-offs.
3. Walk through orchestration of a daily ingestion + transformation pipeline.

## Related pages

> [!multi-column]
>
>> [!card] Processing modes
>> [[batch-data-processing|Batch Processing]], [[stream-data-processing|Stream Processing]], [[workflow-orchestration|Workflow Orchestration]]
>
>
>> [!card] Workload types
>> [[online-transaction-processing|OLTP]], [[online-analytical-processing|OLAP]], [[hybrid-transactional-analytical-processing|HTAP]]
>
>
>> [!card] Architecture
>> [[../data-architecture/data-architecture|Data Architecture]], [[../../data-pipeline|Data Pipeline]]

