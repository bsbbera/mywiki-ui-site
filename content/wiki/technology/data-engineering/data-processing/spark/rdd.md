---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: RDD (Resilient Distributed Dataset)
Created:
  - 2026-05-28
aliases:
  - RDD
  - Resilient Distributed Dataset
  - Transformations and Actions
  - Lazy Evaluation
  - Lineage Graph
category: Computer Science
tags:
  - data-engineering
  - concept
  - Processing
  - Spark
  - RDD
banner: https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Spark</span>

# RDD (Resilient Distributed Dataset)

<p class="at-lead">
A Resilient Distributed Dataset (RDD) is Spark's core low-level abstraction: an immutable, distributed collection of objects split into partitions that can be computed in parallel on different nodes of the cluster. "Resilient" = fault-tolerant (rebuildable from lineage); "Distributed" = spread across the cluster; "Dataset" = the collection of records.
</p>

<span class="at-stat">Immutable</span> distributed collections &nbsp;·&nbsp; <span class="at-stat">Fault-tolerant</span> via lineage &nbsp;·&nbsp; <span class="at-mark">The foundational data structure of Apache Spark</span>

> [!tip] When to Use RDDs
> Use RDDs for low-level transformations and control over the dataset, or functional-programming-style manipulation rather than columnar/relational expressions. For data that doesn't fit a schema. For most work, **start with [[spark-dataframe|DataFrames]]** (higher-level, optimized by Catalyst) and drop to RDDs only when you need more flexibility.

<span class="at-kicker">Creating RDDs</span>

## Creating RDDs

Two common ways:

1. **Parallelize** an existing collection: `spark.sparkContext.parallelize([(1,2),(3,4)])`.
2. **Load an external dataset** — CSV, JDBC database, JSON, etc.

<span class="at-kicker">Operations</span>

## Two kinds of operations

RDDs support exactly two operation types:

### Transformations (lazy)

Return a **new RDD** and are **not executed immediately** — Spark only records them in the lineage. Examples: `map`, `flatMap`, `filter`, `reduceByKey`. `map` always produces the **same number of records** as the input.

### Actions (eager)

**Trigger execution** of the recorded DAG and return a value to the driver or write output. Examples: `collect`, `take`, `reduce`, `count`.

> **Lazy evaluation** — nothing runs until an action is called. This lets Spark build and optimize the whole [[apache-spark|DAG]] before executing, pipelining operators within a stage.

<span class="at-kicker">Transformations</span>

## Narrow vs wide transformations

This distinction drives performance:

| Type | Definition | Causes shuffle? |
| --- | --- | --- |
| **Narrow** | Each input partition contributes to **at most one** output partition (e.g. `map`, `filter`) | No |
| **Wide** | One input partition contributes to **more than one** output partition (e.g. `groupByKey`, `reduceByKey`, joins) | **Yes** — data [[spark-performance\|shuffle]] |

Wide transformations are where Spark inserts a **shuffle / exchange**, which divides the job into [[spark-architecture|stages]].

<span class="at-kicker">Resilience</span>

## Lineage graph

The **lineage graph** is the collection of an RDD's dependencies — a consistent execution plan built by applying transformations. It is what makes RDDs **resilient**: if a partition is lost, Spark **recomputes it on demand** from the lineage (or restores it from a persisted RDD) rather than losing data. Each Spark application has its own lineage graphs.

<span class="at-kicker">Shared Variables</span>

## Shared variables

For efficiency across tasks, Spark offers two shared-variable types (covered in [[spark-performance|Spark Performance]]):

- **Broadcast variables** — read-only values cached on every node (e.g. small lookup tables for joins).
- **Accumulators** — write-only counters/sums updated in parallel across tasks.

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. **RDD vs [[spark-dataframe|DataFrame]] vs Dataset** — differences and when to use each.
2. **Transformation vs action** — give examples; what is lazy evaluation?
3. **Narrow vs wide** transformations — which trigger a shuffle?
4. What is a **lineage graph** and how does it provide fault tolerance?
5. How do RDDs achieve **resilience** when a node fails?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Spark internals
>> [[apache-spark|Apache Spark]], [[spark-architecture|Architecture]], [[spark-dataframe|DataFrames]], [[spark-performance|Performance]]
>
>
>> [!card] Python API
>> [[pyspark|PySpark]]
>
>
>> [!card] Concepts
>> [[batch-data-processing|Batch Processing]], [[data-processing|Data Processing]]
>
>
>> [!card] People
>> [[matei-zaharia|Matei Zaharia]]
