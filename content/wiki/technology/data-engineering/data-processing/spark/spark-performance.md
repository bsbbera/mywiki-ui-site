---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Spark Performance and Tuning
Created:
  - 2026-05-28
aliases:
  - Spark Performance
  - Shuffle
  - Partitioning
  - Caching
  - Broadcast Variables
  - Data Skew
category: Computer Science
tags:
  - data-engineering
  - concept
  - Processing
  - Spark
  - Performance
banner: https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Spark</span>

# Spark Performance and Tuning

<p class="at-lead">
Spark performance is mostly about moving less data and balancing work across partitions. This page collects the tuning levers: partitioning, shuffle, caching, shared variables, AQE, and skew handling.
</p>

<span class="at-stat">200</span> default shuffle partitions &nbsp;·&nbsp; <span class="at-stat">2–3×</span> cores = optimal partitions &nbsp;·&nbsp; <span class="at-mark">The art of moving less data and balancing work</span>

> [!tip] The Golden Rule
> **Minimize shuffles** to make jobs faster and more reliable: use broadcast variables for big-small joins, use accumulators, and avoid operations that reshuffle. A shuffle (exchange) divides a job into stages and is the most expensive operation — it moves data across the network.

<span class="at-kicker">Partitioning</span>

## Partitions

Spark distributes data to the cluster as **partitions**; each [[spark-architecture|task]] processes one partition, and tasks run in parallel. **Default parallelism** = total cores available for processing.

- **Partitioning in memory** (a [[spark-dataframe|DataFrame]]'s partitions) and **partitioning on disk** (the file-system layout) are both supported.
- Rule of thumb: the optimal number of partitions is **2–3× the number of executor cores** — e.g. 10 nodes × 24 cores × 2.5 ≈ **600 partitions**. Too few wastes the cluster; too many adds scheduler overhead.

### repartition vs coalesce

| | `repartition()` | `coalesce()` |
| --- | --- | --- |
| Shuffle | **Yes** (full reshuffle) | **No** |
| Direction | Increase **or** decrease | **Decrease only** |
| Distribution | Uniform | Not guaranteed uniform |

<span class="at-kicker">Shuffle</span>

## Shuffle / Exchange

A **shuffle (exchange) divides a job into [[spark-architecture|stages]]** and is the most expensive operation — it moves data across the network. [[rdd|Wide transformations]] and unoptimized joins cause shuffles.

- **Default shuffle partitions = 200** (`spark.sql.shuffle.partitions`) — tune this for your data size.
- Shuffle files are serialized in **Tungsten binary format (UnsafeRow)** and can be read directly into memory, improving read performance.
- **Minimize shuffles** to make jobs faster and more reliable: use broadcast variables for big-small joins, use accumulators, and avoid operations that reshuffle.

<span class="at-kicker">Shared Variables</span>

## Shared variables

- **Broadcast variables** — read-only values cached on every node, distributed with an efficient broadcast algorithm. Created via `sc.broadcast(v)`; great for **joining a large RDD with a small lookup table** without re-sending it per task.
- **Accumulators** — variables updated in parallel during execution (counters/sums).

<span class="at-kicker">Caching</span>

## Caching and persistence

Persisting a dataset in memory is one of Spark's most important features — it avoids recomputation. Use `cache()` or `persist(StorageLevel.*)`:

| Storage level | Behavior |
| --- | --- |
| **MEMORY_ONLY** | Deserialized Java objects in the JVM (RDD default); partitions that don't fit are recomputed |
| **MEMORY_AND_DISK** | Spills partitions that don't fit to disk (DataFrame/Dataset **default**) |
| **MEMORY_ONLY_SER** | Serialized objects — less space, more CPU to read |
| **MEMORY_AND_DISK_SER** | Like SER but spills to disk instead of recomputing |
| **DISK_ONLY** | Partitions only on disk |
| **OFF_HEAP** | Off-heap memory |
| **..._2** (e.g. MEMORY_ONLY_2) | Replicate each partition on **two nodes** |

> To actually populate a cache you need an **action** — `count` and `write` are preferred because they scan the whole dataset. Benefits: cost savings (reuse expensive computations), time savings, and more jobs per worker.

<span class="at-kicker">Adaptive Execution</span>

## Adaptive Query Execution (AQE)

**AQE** re-optimizes the plan at runtime using actual shuffle statistics and, by default, gives shuffle-side performance benefits. It can right-size shuffle partitions and handle skew automatically:

- `spark.sql.adaptive.advisoryPartitionSizeInBytes` — target post-shuffle partition size (e.g. 8 MB).
- `spark.sql.adaptive.skewJoin.skewedPartitionThresholdInBytes` — a partition is "skewed" if larger than this.

<span class="at-kicker">Skew and Spill</span>

## Data skew and spill

- **Skew** = data unevenly distributed across partitions. Identify it from uneven partition counts in shuffled data.
- **Spill** happens when a partition can't fit — two kinds: **spill (memory)** and **spill (disk)**, often surfacing as out-of-memory errors.
- **Salting** — add new "salted" keys on both sides of a join to spread a hot key across partitions. Only use it when you actually have spill/OOM issues; AQE's skew handling covers many cases.

<span class="at-kicker">Storage Layout</span>

## Storage layout that helps reads

- **Columnar formats** (Parquet/ORC/Avro — see [[file-formats|File Formats]]) let the reader decompress and process **only the columns the query needs**.
- **Partitioning on disk** writes folders named `<column>=<key>` (e.g. `country=IN`); the partition column must appear in the query predicate to benefit, and the column isn't stored in the files (it's read from the folder name).
- **Avoid partitioning on high-cardinality / unique columns** — it creates too many tiny partitions.
- **Z-ordering** co-locates related data across one or more columns; combine with `OPTIMIZE` (and partition filters for selective Z-order) on Delta.

<span class="at-kicker">Bad Records</span>

## Read modes (bad records)

When reading CSV (schema mandatory), choose how to handle bad records:

- **PERMISSIVE** — default; keeps malformed rows.
- **DROPMALFORMED** — drops bad records.
- **FAILFAST** — fails the job on the first bad record.

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. **repartition vs coalesce** — which shuffles, which can increase partitions?
2. What is a **shuffle** and why is it expensive? What's the default shuffle-partition count?
3. **Broadcast variables vs accumulators** — when each?
4. Walk through the **persistence levels**; what's the default for DataFrames?
5. What is **data skew** and how do **salting** + **AQE** address it?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Spark internals
>> [[apache-spark|Apache Spark]], [[spark-architecture|Architecture]], [[rdd|RDDs]], [[spark-dataframe|DataFrames]], [[spark-sql|Spark SQL]]
>
>
>> [!card] Storage
>> [[file-formats|File Formats]], [[column-oriented-database|Columnar Storage]]
>
>
>> [!card] Products
>> [[databricks|Databricks]]
