---
title: Apache Spark
Created:
  - 2026-05-28
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Apache Spark
  - Spark
category: Computer Science
tags:
  - DataEngineering
  - Processing
  - Spark
  - BigData
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
maturity: evergreen
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

<span class="at-kicker">Big Data · Distributed Computing</span>

# Apache Spark

<p class="at-lead">
Apache Spark is an open-source, distributed, in-memory data processing engine for large-scale data — the dominant general-purpose engine for batch and near-real-time stream workloads, powering a unified stack of libraries for SQL, machine learning, graph processing, and streaming. Created by Matei Zaharia at UC Berkeley's AMPLab, it is the foundation of the Databricks platform.
</p>

<span class="at-stat">100× Faster</span> than Hadoop MapReduce in memory &nbsp;·&nbsp; <span class="at-stat">80+ Operators</span> high-level API &nbsp;·&nbsp; <span class="at-mark">100× faster than MapReduce — the unified analytics engine for large-scale data</span>

---

<span class="at-kicker">WHY SPARK</span>

## Why Spark?

> [!grid|cols2]
>
>> [!card|section] Speed
>> Runs programs up to **100× faster than Hadoop MapReduce in memory**, or ~10× faster on disk. Powered by an advanced **DAG execution engine** and in-memory computing that keeps intermediate data in RAM between pipeline stages.
>
>> [!card|section] Ease of Use
>> Write applications in Java, Scala, **Python ([[pyspark|PySpark]])**, or R with **80+ high-level operators** and interactive shells. Building parallel apps is described as "a breeze."
>
>> [!card|section] Generality
>> Combine SQL, streaming, and complex analytics — ML, graph computation — in one unified application rather than stitching together separate tools.
>
>> [!card|section] Runs Everywhere
>> On Hadoop YARN, Mesos, Kubernetes, standalone, or in the cloud. Reads HDFS, Cassandra, HBase, S3, Delta/Parquet on object storage, and more.

---

<span class="at-kicker">STACK</span>

## The Spark stack

Everything sits on top of **Spark Core** (the distributed execution engine that handles scheduling, memory management, fault recovery, and I/O):

| Library | Purpose |
| --- | --- |
| **Spark Core** | RDD API, task scheduling, memory management, fault recovery |
| [[spark-sql|Spark SQL]] + [[spark-dataframe|DataFrames]] | Structured data, the Catalyst optimizer, SQL interface |
| [[spark-mllib|MLlib]] | Distributed machine learning |
| **GraphX** | Graph + graph-parallel computation (the Resilient Distributed Property Graph) |
| [[spark-streaming|Spark Streaming]] / Structured Streaming | Scalable, fault-tolerant stream processing |

---

<span class="at-kicker">COMPARISON</span>

## Spark vs Hadoop MapReduce

| | MapReduce | Apache Spark |
| --- | --- | --- |
| Mode | Batch only | Batch **and** near-real-time |
| Data location | Reads/writes to **HDFS** (disk) each step | Keeps data **in memory (RAM)** + caching |
| Latency | High (disk-bound) | Low (in-memory) |
| Iterative work | Slow (re-reads disk) | Fast (data stays in memory) |

Spark does **not** ship its own storage layer — it computes over external stores (HDFS, S3, GCS, JDBC databases, Delta/Parquet on object storage). Its main drawback is that in-memory computation is **memory-hungry** and can be costly compared to disk-based MapReduce.

---

<span class="at-kicker">EXECUTION MODEL</span>

## How a Spark job runs

User code → an **action** (e.g. `collect`) triggers the build of a **[[rdd|DAG]]** of operators → the **DAGScheduler** splits it into **stages** (at shuffle boundaries) → the **TaskScheduler** launches **tasks** (one per partition) on **executors** via the **cluster manager**. See [[spark-architecture|Spark Architecture]] for the full driver/executor model.

---

<span class="at-kicker">CLUSTER MANAGERS</span>

## Cluster managers

> [!grid|cols3]
>
>> [!card|section] Standalone
>> The simple cluster manager bundled with Spark. Best for dedicated Spark clusters without an existing resource manager.
>
>> [!card|section] YARN / Mesos
>> **Apache Hadoop YARN** is Hadoop 2's resource manager. **Apache Mesos** can co-schedule Hadoop and Spark jobs on shared infrastructure.
>
>> [!card|section] Kubernetes / Local
>> **Kubernetes** is increasingly the default for containerized Spark. **`local[*]`** runs Spark on your laptop using all logical cores — not a real cluster, but great for development.

---

<span class="at-kicker">INSIGHTS</span>

## Interesting facts

- Spark's speed comes from **lazy evaluation**: it builds the full DAG before executing, so it can pipeline and optimize operators across a stage.
- Managed Spark is everywhere: [[databricks|Databricks]], GCP **Dataproc**, AWS **EMR/Glue**, **Azure Synapse Spark**.
- Spark offers **80+ high-level operators**, which is why building parallel apps is described as "a breeze."

> [!note] Lazy evaluation is the secret weapon
> Spark's lazy evaluation means nothing executes until you call an action (`collect`, `write`, `count`). This lets Spark build the entire execution plan — predicate pushdown, join reordering, stage fusion — before moving a single byte. It's the primary reason Spark dramatically outperforms iterative MapReduce jobs on multi-step pipelines.

---

<span class="at-kicker">INTERVIEW PREP</span>

## Interview questions

1. **Spark vs MapReduce** — why is Spark faster?
2. Walk through what happens from `action` → DAG → stages → tasks.
3. What are the components of the **Spark stack**?
4. Which **cluster managers** does Spark support, and when would you use each?
5. What are Spark's main **drawbacks**?

---

<span class="at-kicker">Continue Reading</span>

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
