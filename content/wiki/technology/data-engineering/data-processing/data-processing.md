---
title: Data Processing
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Data Processing
category: Computer Science
tags:
  - DataEngineering
  - Processing
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "A wise person should have money in their head, but not in their heart."
> <cite>— Jonathan Swift</cite>

---

<span class="at-kicker">Data Engineering · Processing</span>

# Data Processing

<p class="at-lead">
Data Processing is the act of transforming raw data into meaningful, actionable information — collecting, manipulating, filtering, sorting, and analyzing data to extract insights and support decisions. It focuses on what happens to data <em>after</em> it has been ingested.
</p>

<span class="at-stat">3 Processing Systems</span> OLTP · OLAP · HTAP &nbsp;·&nbsp; <span class="at-stat">3 Execution Models</span> Batch · Stream · Micro-batch &nbsp;·&nbsp; <span class="at-mark">how raw data is transformed into usable information</span>

---

<span class="at-kicker">CORE SYSTEMS</span>

## Components

### 1. Processing Systems

> [!grid|cols3]
>
>> [!card|section] OLTP
>> [[online-transaction-processing|Online Transaction Processing]]
>> Day-to-day transactional workloads — payments, orders, signups. Optimized for fast, concurrent row-level reads/writes.
>
>> [!card|section] OLAP
>> [[online-analytical-processing|Online Analytical Processing]]
>> Aggregations and analytical queries across many rows and dimensions. Optimized for reading large volumes.
>
>> [!card|section] HTAP
>> [[hybrid-transactional-analytical-processing|Hybrid Transactional Analytical Processing]]
>> Combined OLTP + OLAP in one system — row-store for transactions, column-store for analytics, no ETL pipeline required.

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

---

<span class="at-kicker">RELATIONSHIPS</span>

## How OLAP and OLTP relate

- **OLTP** captures *what just happened* — payments, orders, signups.
- **OLAP** asks *what does it mean* — trends, customer LTV, fraud patterns.
- The data flows OLTP → [[../data-ingestion/data-ingestion|ingestion]] → OLAP.

---

<span class="at-kicker">CLOUD REFERENCE</span>

## On GCP

| Step | Service |
| --- | --- |
| OLTP | [[../../cloud/gcp/databases/cloud-sql|Cloud SQL]], [[../../cloud/gcp/databases/cloud-spanner|Spanner]] |
| Streaming bus | [[../../cloud/gcp/analytics/pubsub|Pub/Sub]] |
| Batch + stream processing | [[../../cloud/gcp/analytics/dataflow|Dataflow]] |
| Visual ETL | [[../../cloud/gcp/analytics/datafusion|Data Fusion]] |
| [[apache-spark\|Spark]]/Hadoop | Dataproc |
| OLAP | [[../../cloud/gcp/analytics/bigquery|BigQuery]] |
| Orchestration | Cloud Composer (Airflow) |

---

> [!tip] When to reach for each model
> Use **OLTP** for operational apps where every millisecond counts. Use **OLAP** for BI and analytical reports on historical data. Use **HTAP** when you need analytics on live operational data without a separate ETL pipeline — but be aware of its scale limits (typically tens of TBs). When in doubt, separate systems are more mature and scale independently.

---

<span class="at-kicker">INTERVIEW PREP</span>

## Interview Questions

1. **OLTP** vs **OLAP** vs **HTAP** — when each.
2. **Batch** vs **streaming** vs **micro-batch** — trade-offs.
3. Walk through orchestration of a daily ingestion + transformation pipeline.

---

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
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
>> [[../data-architecture/data-architecture|Data Architecture]], [[../data-pipeline|Data Pipeline]]
>
>
>> [!card] Engines
>> [[apache-spark|Apache Spark]], [[pyspark|PySpark]], [[spark-streaming|Spark Streaming]]
