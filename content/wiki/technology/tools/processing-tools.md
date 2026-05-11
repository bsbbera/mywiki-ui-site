---
title: Data Processing Tools
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Processing Tools
category: Computer Science
tags:
  - DataEngineering
  - Processing
  - Tools
banner:
dg-publish: true
publish: true
---
---

Catalog of large-scale data processing engines and frameworks (source: Tools/Data Processing/*.md).

## General-purpose

### Apache Spark

[Apache Spark](https://spark.apache.org/) — the dominant data-processing engine for Data Engineering large-scale processing (source: Tools/Data Processing/Apache Spark.md).

**Programming model**: parallel operators on a **DAG** (Directed Acyclic Graph). Tasks expressed via **RDDs** (Resilient Distributed Datasets) — fault-tolerant, parallelizable element sets supporting:

- **Transformations** (filter, map) — lazy.
- **Actions** (reduce, collect) — trigger execution.

**Strengths**:
- High-speed querying, analysis, transformation on large datasets.
- Easy APIs (DataFrame, SQL, Streaming, MLlib).
- Multiple languages — Scala, Java, Python (PySpark), R.
- **DAG fault tolerance** — recover from node failures.
- **Lazy evaluation** improves efficiency.

**Weaknesses**:
- No native storage option.
- Wrong RDD-partition usage on SparkContext can hurt HDFS / driver MemoryOverhead.
- Operational complexity at scale.

**Storage compat**: HDFS, NoSQL DBs, Elasticsearch, S3.

### Apache Hadoop

The original distributed compute + storage stack. **HDFS** (storage) + **MapReduce** (compute) + **YARN** (resource manager). Largely superseded by Spark + cloud object storage for new workloads, but still common in legacy environments.

### Apache Beam

Google's unified batch + stream programming model. Pipelines are portable across runners (Dataflow, Flink, Spark, Samza). See [[../../gcp/analytics/dataflow|Dataflow]].

### Apache Flink

Premier open-source streaming engine. True streaming (event-at-a-time) with strong stateful operators, watermarks, exactly-once.

## SQL-based transformation

### dbt (data build tool)

[dbt](https://www.getdbt.com/) — used to **transform and create [[../concepts/data-modeling/data-modeling|data models]] within a [[../concepts/data-architecture/data-warehouse|data warehouse]] using [[../guides/sql-guide|SQL]]**. Marketed as empowering analysts to become **self-serve analytics engineers** (source: Tools/Data Processing/dbt.md).

**Strengths**:
- Version control + CI/CD for data models.
- Built-in **[[../concepts/software-engineering/data-unit-test|data unit tests]]** + auto-documentation.
- SQL-only → accessible to broader teams.
- Massive ecosystem (dbt-utils, dbt-expectations, dbt-osmosis).

**Weaknesses**:
- SQL-only; complex Python/ML logic doesn't fit.
- dbt Cloud cost adds up at scale; dbt Core (open-source) is free.

dbt has redefined how cloud-warehouse transformations are built — it's now table stakes for a modern data team.

## Cloud-managed

### Amazon EMR

AWS managed Hadoop / Spark / Hive / Presto / HBase clusters. Pay per cluster hour. Spot instance support reduces cost.

### AWS Glue

Managed serverless ETL. Built on Spark + Glue Data Catalog. Visual + code authoring.

### Google Cloud Dataflow

See [[../../gcp/analytics/dataflow|Dataflow]] — managed Apache Beam runner. Auto-scales, handles batch + stream uniformly.

### Google Dataproc

Managed Hadoop / Spark / Hive on GCP. Per-second billing; ephemeral clusters common.

### Databricks

See [[../../databricks/databricks|Databricks]] — managed Spark + Delta Lake + MLflow. Multi-cloud (AWS / Azure / GCP).

### Azure Synapse Spark

Synapse-integrated Spark pools. Tight integration with Synapse SQL pools.

## Streaming engines

### Apache Spark Structured Streaming

Spark's streaming API — micro-batch internally with streaming semantics on top. Easier than Flink for teams already using Spark.

### Apache Flink

True streaming (described above).

### Kafka Streams + ksqlDB

Embedded Kafka-native processing. Lightweight; runs in-process.

### Apache Beam (on Dataflow)

Unified model on managed Dataflow.

## Decision matrix

| Need | Pick |
| --- | --- |
| **SQL transforms in warehouse** | **dbt** |
| **Big data batch** | **Spark / Databricks / EMR / Dataproc** |
| **Streaming + batch unified** | **Apache Beam → Dataflow** |
| **True low-latency streaming** | **Flink** |
| **Kafka-native processing** | **Kafka Streams** |
| **Visual / no-code ETL** | **Data Fusion (GCP) / Glue (AWS) / ADF (Azure)** |
| **Hadoop migration** | **Spark on EMR / Dataproc** |

## Lakehouse engines (also processing)

- **Databricks** — Spark + Delta Lake.
- **BigQuery + BigLake** — query Iceberg / Delta tables.
- **Snowflake + Iceberg tables**.
- **Trino / Starburst** — federated SQL across formats.

## Patterns

- **Spark on Kubernetes** — increasingly preferred over YARN.
- **Delta Live Tables (DLT)** — declarative streaming pipelines on Databricks.
- **dbt + Airflow** — SQL transforms + orchestration.
- **Beam-only code** — portable batch + stream.

## Related pages

> [!multi-column]
>
>> [!card] Processing concepts
>> [[../concepts/data-processing/batch-data-processing|Batch Processing]], [[../concepts/data-processing/stream-data-processing|Stream Processing]], [[../concepts/data-processing/workflow-orchestration|Workflow Orchestration]]
>
>
>> [!card] Sister catalogs
>> [[orchestrators-overview|Orchestrators]], [[ingestion-tools|Ingestion Tools]], [[file-formats|File Formats]], [[programming-languages|Programming Languages]]
>
>
>> [!card] Products
>> [[../../gcp/analytics/dataflow|Dataflow]], [[../../databricks/databricks|Databricks]]
>
>
>> [!card] People
>> [[../../people/matei-zaharia|Matei Zaharia]], [[../../people/doug-cutting|Doug Cutting]], [[../../people/jay-kreps|Jay Kreps]]

