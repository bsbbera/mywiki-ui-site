---
title: Batch Data Processing
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Batch Processing
category: Computer Science
tags:
  - DataEngineering
  - Processing
  - Batch
banner:
publish: true
---

> "Life is a journey, not a destination."
> <cite>— Dan Millman</cite>

---

**Batch processing** refers to collecting, modifying, or exporting **multiple data records at a regular cadence** with downtime between batches. Because large amounts of data can be processed all at once, batch processing is **very efficient** and is the most common form of data processing fitting many businesses' needs (source: Concepts/Data Processing/Batch Data Processing.md).

A key point: batch processing was **originally designed for non-continuous data**. [[stream-data-processing|Stream processing]] is typically used for continuous data, though concurrent / parallel batch can approximate streaming.

## Advantages

### Efficiency

Run when **resources are available** — common pattern is overnight when servers/databases are idle.

### Simplicity

Less complex than streaming; doesn't require special hardware or system support for incoming data; lower maintenance.

### Processing speed

Process **large volumes quickly** when resources are dedicated.

## Advanced batch patterns

### Sequential batch

Traditional approach — one job at a time. Simple but slow.

### Concurrent batch

Jobs **partially overlap in time**. Multi-threading with fault-tolerance considerations (one batch failure can cascade if not designed carefully).

### Parallel batch

Entire batches run **in parallel** on multicore machines. Multitasks effectively at low cost.

### Modern (parallel concurrent) batch

Hybrid of concurrent + parallel. State-of-the-art in **financial services** and other regulated industries; often run with **redundant batches** for fault tolerance.

## Tools / engines

- **[[apache-spark|Apache Spark]]** — the dominant general-purpose batch engine (see also [[pyspark|PySpark]]).
- **Apache Hadoop / MapReduce** — the original; less common for new workloads.
- **dbt** — SQL-based batch transformations in the warehouse.
- **[[../../cloud/gcp/analytics/dataflow|GCP Dataflow]]** — unified batch + stream via Apache Beam.
- **AWS Glue**, **Amazon EMR**, **Azure Databricks** — managed services.

## Batch vs Stream — the trade-off

| | Batch | Streaming |
| --- | --- | --- |
| Latency | Minutes–hours | Sub-second |
| Throughput | Very high | Lower per-event |
| Complexity | Lower | Higher |
| Cost | Lower | Higher |
| Reprocessing | Trivial | Hard (without log replay) |
| Best for | Reports, ML training, ETL | Real-time dashboards, fraud, alerts |

## Common use cases

- Nightly ETL into a [[../data-architecture/data-warehouse|warehouse]].
- ML model training on historical features.
- End-of-day reporting and reconciliation.
- Periodic backfills.

## Interesting Facts

- The **DAG** (Directed Acyclic Graph) abstraction comes from batch — every modern orchestrator (Airflow, Dagster, Prefect) is DAG-driven.
- Spark's **lazy evaluation** is what makes batch efficient — Spark builds the DAG before executing.

## Interview Questions

1. **Batch** vs **stream** vs **micro-batch** — pros/cons.
2. **Sequential** vs **concurrent** vs **parallel** batch.
3. How would you choose between Spark and Beam for batch?
4. What is a **DAG** in batch processing?

## Related pages

> [!multi-column]
>
>> [!card] Sister processing modes
>> [[stream-data-processing|Stream Processing]], [[workflow-orchestration|Workflow Orchestration]], [[data-processing|Data Processing]]
>
>
>> [!card] Architecture
>> [[../data-architecture/lambda-architecture|Lambda Architecture]], [[../data-ingestion/data-ingestion|Data Ingestion]]
>
>
>> [!card] Engines + tools
>> [[apache-spark|Apache Spark]], [[../../tools/processing-tools|Processing Tools]], [[../../cloud/gcp/analytics/dataflow|Dataflow]], [[../../cloud/databricks/databricks|Databricks]]
>
>
>> [!card] People
>> [[../../../people/doug-cutting|Doug Cutting]], [[../../../people/matei-zaharia|Matei Zaharia]]

