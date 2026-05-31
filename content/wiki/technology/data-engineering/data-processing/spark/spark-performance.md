---
title: Spark Performance and Tuning
Created:
  - 2026-05-28
date modified: Thursday, May 28th 2026
aliases:
  - Spark Performance
  - Shuffle
  - Partitioning
  - Caching
  - Broadcast Variables
  - Data Skew
category: Computer Science
tags:
  - DataEngineering
  - Processing
  - Spark
  - Performance
banner:
publish: true
---

> "If you want to see things just as they are, then you yourself must practice just as you are."
> <cite>— Dogen</cite>

---

Spark performance is mostly about **moving less data** and **balancing work across partitions**. This page collects the tuning levers from the source material: partitioning, shuffle, caching, shared variables, AQE, and skew handling (source: pyspark basics.pdf, pyspark interview prep.pdf).

## Partitions

Spark distributes data to the cluster as **partitions**; each [[spark-architecture|task]] processes one partition, and tasks run in parallel (source: pyspark basics.pdf). **Default parallelism** = total cores available for processing.

- **Partitioning in memory** (a [[spark-dataframe|DataFrame]]'s partitions) and **partitioning on disk** (the file-system layout) are both supported (source: pyspark interview prep.pdf).
- Rule of thumb: the optimal number of partitions is **2–3× the number of executor cores** — e.g. 10 nodes × 24 cores × 2.5 ≈ **600 partitions**. Too few wastes the cluster; too many adds scheduler overhead (source: pyspark interview prep.pdf).

### repartition vs coalesce

(source: pyspark basics.pdf)

| | `repartition()` | `coalesce()` |
| --- | --- | --- |
| Shuffle | **Yes** (full reshuffle) | **No** |
| Direction | Increase **or** decrease | **Decrease only** |
| Distribution | Uniform | Not guaranteed uniform |

## Shuffle / Exchange

A **shuffle (exchange) divides a job into [[spark-architecture|stages]]** and is the most expensive operation — it moves data across the network (source: pyspark basics.pdf). [[rdd|Wide transformations]] and unoptimized joins cause shuffles.

- **Default shuffle partitions = 200** (`spark.sql.shuffle.partitions`) — tune this for your data size (source: pyspark basics.pdf).
- Shuffle files are serialized in **Tungsten binary format (UnsafeRow)** and can be read directly into memory, improving read performance (source: pyspark basics.pdf).
- **Minimize shuffles** to make jobs faster and more reliable: use broadcast variables for big-small joins, use accumulators, and avoid operations that reshuffle (source: pyspark interview prep.pdf).

## Shared variables

(source: pyspark interview prep.pdf)

- **Broadcast variables** — read-only values cached on every node, distributed with an efficient broadcast algorithm. Created via `sc.broadcast(v)`; great for **joining a large RDD with a small lookup table** without re-sending it per task.
- **Accumulators** — variables updated in parallel during execution (counters/sums).

## Caching and persistence

Persisting a dataset in memory is one of Spark's most important features — it avoids recomputation. Use `cache()` or `persist(StorageLevel.*)` (source: pyspark interview prep.pdf):

| Storage level | Behavior |
| --- | --- |
| **MEMORY_ONLY** | Deserialized Java objects in the JVM (RDD default); partitions that don't fit are recomputed |
| **MEMORY_AND_DISK** | Spills partitions that don't fit to disk (DataFrame/Dataset **default**) |
| **MEMORY_ONLY_SER** | Serialized objects — less space, more CPU to read |
| **MEMORY_AND_DISK_SER** | Like SER but spills to disk instead of recomputing |
| **DISK_ONLY** | Partitions only on disk |
| **OFF_HEAP** | Off-heap memory |
| **..._2** (e.g. MEMORY_ONLY_2) | Replicate each partition on **two nodes** |

> To actually populate a cache you need an **action** — `count` and `write` are preferred because they scan the whole dataset (source: pyspark basics.pdf). Benefits: cost savings (reuse expensive computations), time savings, and more jobs per worker (source: pyspark interview prep.pdf).

## Adaptive Query Execution (AQE)

**AQE** re-optimizes the plan at runtime using actual shuffle statistics and, by default, gives shuffle-side performance benefits (source: pyspark basics.pdf). It can right-size shuffle partitions and handle skew automatically:

- `spark.sql.adaptive.advisoryPartitionSizeInBytes` — target post-shuffle partition size (e.g. 8 MB).
- `spark.sql.adaptive.skewJoin.skewedPartitionThresholdInBytes` — a partition is "skewed" if larger than this.

## Data skew and spill

(source: pyspark basics.pdf)

- **Skew** = data unevenly distributed across partitions. Identify it from uneven partition counts in shuffled data.
- **Spill** happens when a partition can't fit — two kinds: **spill (memory)** and **spill (disk)**, often surfacing as out-of-memory errors.
- **Salting** — add new "salted" keys on both sides of a join to spread a hot key across partitions. Only use it when you actually have spill/OOM issues; AQE's skew handling covers many cases.

## Storage layout that helps reads

- **Columnar formats** (Parquet/ORC/Avro — see [[file-formats|File Formats]]) let the reader decompress and process **only the columns the query needs** (source: pyspark basics.pdf).
- **Partitioning on disk** writes folders named `<column>=<key>` (e.g. `country=IN`); the partition column must appear in the query predicate to benefit, and the column isn't stored in the files (it's read from the folder name) (source: pyspark basics.pdf).
- **Avoid partitioning on high-cardinality / unique columns** — it creates too many tiny partitions (source: pyspark basics.pdf).
- **Z-ordering** co-locates related data across one or more columns; combine with `OPTIMIZE` (and partition filters for selective Z-order) on Delta (source: pyspark basics.pdf).

## Read modes (bad records)

When reading CSV (schema mandatory), choose how to handle bad records (source: pyspark basics.pdf):

- **PERMISSIVE** — default; keeps malformed rows.
- **DROPMALFORMED** — drops bad records.
- **FAILFAST** — fails the job on the first bad record.

## Interview questions

1. **repartition vs coalesce** — which shuffles, which can increase partitions?
2. What is a **shuffle** and why is it expensive? What's the default shuffle-partition count?
3. **Broadcast variables vs accumulators** — when each?
4. Walk through the **persistence levels**; what's the default for DataFrames?
5. What is **data skew** and how do **salting** + **AQE** address it?

## Related pages

> [!multi-column]
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
