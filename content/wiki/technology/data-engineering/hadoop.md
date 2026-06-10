---
title: Hadoop Ecosystem
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Hadoop
  - HDFS
  - MapReduce
  - Hive
  - Pig
  - HBase
  - YARN
  - Hadoop ecosystem
category: Data Engineering
tags:
  - Hadoop
  - BigData
  - DataEngineering
  - HDFS
  - MapReduce
  - Hive
  - HBase
  - YARN
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "Big data is at the foundation of all of the megatrends that are happening today."
> <cite>— Chris Lynch</cite>

---

<span class="at-kicker">Data Engineering · Big Data</span>

# Hadoop Ecosystem

<p class="at-lead">
Hadoop is the open-source framework that defined distributed computing on commodity hardware — a suite of tools (HDFS, MapReduce, YARN, Hive, Pig, HBase) that together enable storing and processing datasets at scales that no single machine can handle.
</p>

<span class="at-stat">open-source</span> &nbsp;·&nbsp; <span class="at-stat">distributed</span> processing &nbsp;·&nbsp; <span class="at-stat">commodity</span> hardware &nbsp;·&nbsp; <span class="at-mark">the foundation of modern big data architecture</span>

<span class="at-kicker">Core Concept</span>

## What Is Hadoop?

Hadoop is an **open-source software framework for reliable, scalable, distributed computing**. It works on distributed computing — spreading data and computation across many machines to handle datasets too large for a single server.

Hadoop is designed with two fundamental assumptions baked in:
1. **Hardware failures are common** — commodity hardware fails regularly
2. **Such failures should be handled by the framework** — not by the application developer

The framework consists of three core pillars:

| Component | Role |
| --- | --- |
| **HDFS** | Hadoop Distributed File System — distributed storage across the cluster |
| **MapReduce** | Programming paradigm for distributed data processing |
| **YARN** | Yet Another Resource Negotiator — cluster resource management and job scheduling |

### Coordination Between Hadoop Blocks

1. User defines **map** and **reduce** tasks using the MapReduce API
2. `MapReduce` then triggers the task, which is taken by `YARN`
3. `YARN` figures out where and how to run the job
4. Results are stored in `HDFS`

<span class="at-kicker">Storage Layer</span>

## HDFS — Hadoop Distributed File System

**HDFS** is a distributed file system designed to run on commodity hardware. It is highly fault-tolerant and optimized for **high-throughput access to large datasets** — suited for batch processing where latency matters less than bandwidth.

> [!grid|cols2]
>
>> [!card|section]
>> ###### NAME NODE
>> ### The *Namespace* Manager
>> The **NameNode** is the master server that manages the overall filesystem. It stores:
>> - The **directory structure** (namespace tree)
>> - **Metadata** for all files (block locations, replication factor, permissions)
>>
>> The NameNode does NOT store actual data — it stores where the data blocks live on DataNodes. It is a single point of failure (mitigated by a Secondary NameNode or HA NameNode setup).
>
>> [!card|section]
>> ###### DATA NODES
>> ### The *Storage* Workers
>> **DataNodes** physically store the data blocks across the cluster. Each file is split into fixed-size blocks (default 128 MB) and each block is replicated across multiple DataNodes (default replication factor: 3) for fault tolerance.
>>
>> DataNodes send periodic **heartbeats** to the NameNode. If a DataNode stops sending heartbeats, the NameNode re-replicates its blocks to maintain the replication factor.

> [!info]
> HDFS provides **high throughput** (great for batch analytics) but **high latency** (poor for random, low-latency reads). It is NOT a replacement for a traditional database for transactional workloads.

### HDFS Key Properties

- **Fault tolerance**: Block replication (3x by default) across different racks
- **High throughput**: Optimized for sequential reads of large files
- **Write-once, read-many**: Files are immutable after creation
- **Large dataset support**: Designed for files in the GB–TB range

<span class="at-kicker">Processing Paradigm</span>

## MapReduce

**MapReduce** is the programming paradigm and execution engine for distributed data processing. Originally created by Google to index the exploding volume of web content (stored in the Google File System), it was later open-sourced as the processing foundation of Hadoop. It handles **parallelism** inherent in distributed systems automatically.

MapReduce breaks data processing into four steps:

> [!grid|cols2]
>
>> [!card|hero dark spanfull]
>> ###### THE MAPREDUCE PIPELINE
>> ### Map → Shuffle → Reduce → Result
>> Each stage runs in parallel across many machines, then feeds the next stage. The framework handles distribution, failure recovery, and result collection automatically.
>
>> [!card|section]
>> ###### STEP 1
>> ### *Map*
>> Each machine processes its local data partition and **assigns key-value pairs**. For a word count job: emit `(word, 1)` for each word seen. This step runs fully in parallel across all DataNodes holding data.
>
>> [!card|section]
>> ###### STEP 2
>> ### *Shuffle*
>> The intermediate step where output from mappers is **grouped by key** and distributed so all values for the same key land on the same reducer. Network-intensive — the most expensive phase.
>
>> [!card|section]
>> ###### STEP 3
>> ### *Reduce*
>> Each reducer receives all values for its assigned keys and **aggregates them**. For word count: sum all the 1s for each word to produce the final count.
>
>> [!card|section]
>> ###### STEP 4
>> ### *Result*
>> Reduced output is **written back to HDFS**. The final result files from all reducers collectively form the complete output dataset.

> [!tip]
> MapReduce is powerful but verbose. Writing MapReduce jobs requires Java and explicit map/reduce function definitions. This verbosity motivated the creation of higher-level abstractions like Hive (SQL) and Pig (scripting language) that compile down to MapReduce jobs.

<span class="at-kicker">Resource Management</span>

## YARN — Yet Another Resource Negotiator

**YARN** coordinates tasks running on the cluster and assigns new nodes in cases of failures. It separates resource management from job execution, enabling multiple processing frameworks (MapReduce, Spark, Tez) to share the same Hadoop cluster.

> [!grid|cols2]
>
>> [!card|section]
>> ###### RESOURCE MANAGER
>> ### Cluster *Coordinator*
>> Runs on a **single master node**. Schedules tasks across all nodes in the cluster. Maintains global view of available resources (CPU cores, memory) and allocates them to applications on request.
>
>> [!card|section]
>> ###### NODE MANAGER
>> ### Per-Node *Agent*
>> Runs on **all other nodes**. Manages tasks running on the individual node. Reports available resources to the Resource Manager and launches containers (isolated resource units) for assigned tasks.

### YARN Scheduling Policies

| Scheduler | Behavior | Best For |
| --- | --- | --- |
| **FIFO Scheduler** | Jobs run in submission order | Simple, single-tenant clusters |
| **Capacity Scheduler** | Multiple queues with guaranteed capacity | Multi-team organizations |
| **Fair Scheduler** | Resources shared equally among active jobs | Mixed workloads, interactive + batch |

<span class="at-kicker">SQL Interface</span>

## Hive

**Hive** provides a **SQL interface to Hadoop** — a critical bridge for analysts who lack Java/MapReduce expertise. It translates HiveQL (Hive Query Language — a SQL dialect) into MapReduce or Tez jobs that run on the cluster. Hive is preferred for **batch processing** and is not ideal for real-time or interactive queries.

### Hive Metastore

The **Hive Metastore** is the bridge between Hive tables and HDFS. When query results from Hive come in, they appear in table format — but in reality they are files in HDFS. The Metastore maintains the mapping between table schemas and HDFS file paths. This metastore is also used by Apache Spark, Presto, and other tools for schema-on-read access to HDFS data.

### Hive vs RDBMS

| Hive | RDBMS |
| --- | --- |
| Large datasets (TB–PB) | Small-to-medium datasets (GB) |
| Parallel computations via MapReduce | Serial computations |
| High latency (minutes) | Low latency (milliseconds) |
| Read-heavy operations | Read/Write operations |
| Not ACID compliant by default | ACID compliant |
| HiveQL | SQL |

> [!warning]
> Hive has latency issues because records are not indexed. For a small amount of data, you still pay the full MapReduce overhead — the entire infrastructure must spin up. Hive is the wrong tool for interactive, low-latency queries.

### Partitioning and Bucketing

Both are strategies for splitting data into smaller, manageable parts for performance optimization:

| Strategy | Mechanism | Trade-off |
| --- | --- | --- |
| **Partitioning** | Split by logical unit (e.g., date, region). Each partition stored in a separate directory | Simpler lookups, but uneven partition sizes |
| **Bucketing** | Split by hash into equal-sized chunks | Even distribution, predictable performance |

<span class="at-kicker">Data Flow Language</span>

## Pig

**Pig** (Apache Pig) is a **scripting platform for data transformation** on top of Hadoop. It excels when data has:
- **Unknown schema** — structure not known in advance
- **Incomplete data** — missing fields or nulls
- **Inconsistent records** — varying formats across records

Pig Latin, its language, is a **procedural, data-flow language** focused on transformations. Data from one or more sources can be read, processed, and stored in parallel.

### Pig Latin Key Concepts

```pig
-- Load data
raw = LOAD 'hdfs://data/logs' USING PigStorage(',')
      AS (user:chararray, action:chararray, ts:long);

-- Filter
filtered = FILTER raw BY action == 'purchase';

-- Group and aggregate
grouped = GROUP filtered BY user;
totals  = FOREACH grouped GENERATE
            group AS user,
            COUNT(filtered) AS purchase_count;

-- Store results back to HDFS
STORE totals INTO 'hdfs://output/user_totals';
```

### Tool Comparisons

> [!grid|cols2]
>
>> [!card|section]
>> ###### PIG VS SQL
>> ### Pig *vs* SQL
>> | Pig | SQL |
>> |---|---|
>> | Data flow language, transforms to store in warehouse | Query language for retrieving results |
>> | Specifies exactly how data is modified at every step | Abstracts how queries are executed |
>> | Purpose: process and store in queryable format | Purpose: analysis and report generation |
>> | Clean data with inconsistent/incomplete schema | Extract insights, generate reports |
>
>> [!card|section]
>> ###### PIG VS HIVE
>> ### Pig *vs* Hive
>> | Pig | Hive |
>> |---|---|
>> | Extract, transform, and load data into a warehouse | Query data from a warehouse to generate reports |
>> | Used by developers to bring together useful data | Used by analysts to retrieve business information |
>> | Pig Latin — procedural, data flow language | HiveQL — structured query language |
>> | Works on unknown/inconsistent schema | Works on structured, known schema |

<span class="at-kicker">Wide-Column Store</span>

## HBase

**HBase** is a **columnar NoSQL database management system built on top of Hadoop/HDFS**. It bridges big data technology and storage technology — integrating with applications just like a traditional database while storing data at Hadoop scale.

> [!info]
> HBase is modeled after Google's Bigtable. It provides real-time read/write access to data in HDFS — filling the gap that HDFS's batch-only access leaves for operational use cases.

### HBase Characteristics

| Property | Detail |
| --- | --- |
| **Data model** | Columnar (wide-column) datastore |
| **Schema** | Denormalized storage — schema-less columns |
| **Operations** | CRUD only: Create, Read, Update, Delete |
| **Consistency** | ACID at the **row level** — operations are atomic per row |
| **Scale** | Billions of rows × millions of columns |
| **Access pattern** | Random, real-time read/write (unlike batch HDFS) |

> [!grid|cols2]
>
>> [!card|section]
>> ###### HBASE VS HIVE
>> ### HBase *vs* Hive
>> HBase is for **real-time, random access** (millisecond reads/writes). Hive is for **batch analytics** (minutes to hours). They are complementary: Hive for analytical queries over the full dataset; HBase for operational lookups of individual records.
>
>> [!card|section]
>> ###### WHEN TO USE HBASE
>> ### Use Cases
>> - **Time-series data**: Sensor readings, log streams, event data keyed by timestamp
>> - **User profiles**: Sparse data with millions of optional attributes per user
>> - **Message queues**: High-write-rate operational data
>> - **Audit logs**: Append-only data that needs fast row-level reads

<span class="at-kicker">Ecosystem Overview</span>

## Ecosystem Comparison Table

| Tool | Type | Language | Best For | Latency |
| --- | --- | --- | --- | --- |
| **HDFS** | Distributed filesystem | Java | Bulk storage of large files | High (batch) |
| **MapReduce** | Processing framework | Java | Parallel batch computation | High (minutes) |
| **YARN** | Resource manager | Java | Cluster resource scheduling | — |
| **Hive** | SQL engine | HiveQL | Batch analytics over HDFS | High (minutes) |
| **Pig** | Scripting platform | Pig Latin | ETL, schema-flexible transforms | High (minutes) |
| **HBase** | NoSQL database | Java/API | Real-time random read/write | Low (ms) |
| **Spark** | In-memory processing | Scala/Python | Fast batch + streaming | Low–medium |

> [!tip]
> Modern big data stacks have largely replaced raw MapReduce with **Apache Spark** (10–100× faster due to in-memory processing), while Hive-compatible SQL is now served by **Presto/Trino** or **Spark SQL**. HDFS is often replaced by cloud object storage (S3, GCS) in cloud-native architectures. However, Hadoop concepts — distributed storage, MapReduce paradigm, resource management — underpin every modern data platform.

## Related pages

> [!grid]
>
>> [!card]
>> ##### [[data-engineering/data-processing/spark/apache-spark|Apache Spark]]
>> The modern successor to MapReduce — in-memory distributed processing that runs on YARN or its own cluster manager.
>
>> [!card]
>> ##### [[data-engineering/data-storage/wide-column-database|Wide-Column Databases]]
>> HBase is a wide-column store — understand the broader database category including Cassandra and Bigtable.
>
>> [!card]
>> ##### [[data-engineering/data-architecture/data-warehouse|Data Warehouse]]
>> Hive is often used as a SQL layer over HDFS to build a Hadoop-based data warehouse.
>
>> [!card]
>> ##### [[data-engineering/data-processing/batch-data-processing|Batch Data Processing]]
>> MapReduce is the paradigmatic batch processing model — understand how batch fits into modern data architectures.
>
>> [!card] People & books
>> [[../../people/doug-cutting|Doug Cutting]] (Hadoop creator) · [[../../people/jeff-dean-sanjay-ghemawat|Jeff Dean & Sanjay Ghemawat]] (GFS/MapReduce papers)
