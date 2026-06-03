---
title: Apache Spark
Created:
  - 2026-05-28
date modified: Thursday, May 28th 2026, 2:23:38 pm
aliases:
  - Apache Spark
  - Spark
category: Computer Science
tags:
  - DataEngineering
  - Processing
  - Spark
  - BigData
banner:
publish: true
---

> [!infobox|right]
> # Apache Spark
> ###### Tool / Software
> | | |
> | --- | --- |
> | **Developer** | Apache Software Foundation |
> | **Original author** | Matei Zaharia (UC Berkeley AMPLab) |
> | **Type** | Distributed data-processing engine |
> | **Initial release** | 2014 (v1.0); created 2009 |
> | **Written in** | Scala |
> | **APIs** | Scala, Java, Python, R, SQL |
> | **License** | Apache License 2.0 |

---

> "The golden opportunity you are seeking is in yourself. It is not in your environment; it is not in luck or chance, or the help of others; it is in yourself alone."
> <cite>— Orison Swett Marden</cite>

---

**Apache Spark** is an open-source, distributed, **in-memory** data processing engine for large-scale data. It is the dominant general-purpose engine for [[batch-data-processing|batch]] and (via micro-batch) [[stream-data-processing|stream]] workloads, and it powers a stack of higher-level libraries for SQL, machine learning, graph processing, and streaming (source: Pyspark -Book.pdf).

Spark was created by [[matei-zaharia|Matei Zaharia]] at UC Berkeley's AMPLab and is the foundation of the [[databricks|Databricks]] platform.

## Why Spark?

The four reasons Spark gives for itself (source: Pyspark -Book.pdf):

1. **Speed** — runs programs up to **100× faster than Hadoop MapReduce in memory**, or ~10× faster on disk, thanks to an advanced **[[rdd|DAG]] execution engine** and in-memory computing.
2. **Ease of use** — write applications in Java, Scala, **Python ([[pyspark|PySpark]])**, or R, with **80+ high-level operators** and interactive shells.
3. **Generality** — combine SQL, streaming, and complex analytics in one application.
4. **Runs everywhere** — on Hadoop, Mesos, Kubernetes, standalone, or in the cloud; reads HDFS, Cassandra, HBase, S3, and more.

## The Spark stack

Everything sits on top of **Spark Core** (the distributed execution engine that handles scheduling, memory management, fault recovery, and I/O):

| Library | Purpose |
| --- | --- |
| **Spark Core** | RDD API, task scheduling, memory management, fault recovery (source: pyspark interview prep.pdf) |
| [[spark-sql\|Spark SQL]] + [[spark-dataframe\|DataFrames]] | Structured data, the Catalyst optimizer, SQL interface |
| [[spark-mllib\|MLlib]] | Distributed machine learning |
| **GraphX** | Graph + graph-parallel computation (the Resilient Distributed Property Graph) |
| [[spark-streaming\|Spark Streaming]] / Structured Streaming | Scalable, fault-tolerant stream processing |

## Spark vs Hadoop MapReduce

| | MapReduce | Apache Spark |
| --- | --- | --- |
| Mode | Batch only | Batch **and** near-real-time |
| Data location | Reads/writes to **HDFS** (disk) each step | Keeps data **in memory (RAM)** + caching |
| Latency | High (disk-bound) | Low (in-memory) |
| Iterative work | Slow (re-reads disk) | Fast (data stays in memory) |

(source: pyspark interview prep.pdf)

Spark does **not** ship its own storage layer — it computes over external stores (HDFS, S3, [[Cloud Storage|GCS]], JDBC databases, Delta/Parquet on object storage). Its main drawback is that in-memory computation is **memory-hungry** and can be costly compared to disk-based MapReduce (source: pyspark interview prep.pdf).

## How a Spark job runs

User code → an **action** (e.g. `collect`) triggers the build of a **[[rdd|DAG]]** of operators → the **DAGScheduler** splits it into **stages** (at shuffle boundaries) → the **TaskScheduler** launches **tasks** (one per partition) on **executors** via the **cluster manager**. See [[spark-architecture|Spark Architecture]] for the full driver/executor model.

## Cluster managers

Spark can run under several resource managers (source: pyspark interview prep.pdf):

- **Standalone** — the simple manager bundled with Spark.
- **Apache Hadoop YARN** — Hadoop 2's resource manager.
- **Apache Mesos** — can co-schedule Hadoop and Spark.
- **Kubernetes** — increasingly the default for containerized Spark.
- **local** — not a real cluster; `master("local[*]")` runs Spark on your laptop using all logical cores.

## Interesting facts

- Spark offers **80+ high-level operators**, which is why building parallel apps is described as "a breeze" (source: pyspark interview prep.pdf).
- Spark's speed comes from **lazy evaluation**: it builds the full DAG before executing, so it can pipeline and optimize operators across a stage (source: Pyspark -Book.pdf).
- Managed Spark is everywhere: [[databricks|Databricks]], GCP **Dataproc**, AWS **EMR/Glue**, **Azure Synapse Spark**.

## Interview questions

1. **Spark vs MapReduce** — why is Spark faster?
2. Walk through what happens from `action` → DAG → stages → tasks.
3. What are the components of the **Spark stack**?
4. Which **cluster managers** does Spark support, and when would you use each?
5. What are Spark's main **drawbacks**?

## Related pages

> [!grid]
>
>> [!card] Spark internals
>> [[spark-architecture|Architecture]], [[rdd|RDDs]], [[spark-dataframe|DataFrames]], [[spark-sql|Spark SQL]], [[spark-performance|Performance]], [[spark-streaming|Streaming]], [[spark-mllib|MLlib]]
>
>
>> [!card] Python API
>> [[pyspark|PySpark]]
>
>
>> [!card] Processing concepts
>> [[batch-data-processing|Batch Processing]], [[stream-data-processing|Stream Processing]], [[data-processing|Data Processing]]
>
>
>> [!card] Tools + products
>> [[processing-tools|Processing Tools]], [[databricks|Databricks]], [[file-formats|File Formats]]
>
>
>> [!card] People & books
>> [[matei-zaharia|Matei Zaharia]], [[doug-cutting|Doug Cutting]], [[learning-apache-spark-with-python|Learning Apache Spark with Python]]
