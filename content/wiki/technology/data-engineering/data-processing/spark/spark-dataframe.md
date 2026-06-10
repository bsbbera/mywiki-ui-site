---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Spark DataFrame
Created:
  - 2026-05-28
aliases:
  - Spark DataFrame
  - DataFrame
  - Dataset
  - StructType
category: Computer Science
tags:
  - data-engineering
  - concept
  - Processing
  - Spark
  - DataFrame
banner: https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Spark</span>

# Spark DataFrame

<p class="at-lead">
A DataFrame is Spark's high-level structured API: an immutable, distributed collection of data organized into named columns — conceptually a table in a relational database, but distributed and lazily evaluated. It is the recommended starting point for most PySpark work.
</p>

<span class="at-stat">Catalyst</span> optimizer powered &nbsp;·&nbsp; <span class="at-stat">2.0+</span> Spark versions &nbsp;·&nbsp; <span class="at-mark">Structured data processing with SQL-like expressiveness</span>

> [!tip] RDD vs DataFrame vs Dataset
> RDDs are low-level objects with no optimizer. DataFrames are named columns with Catalyst optimization (recommended for PySpark). Datasets are typed JVM objects (not available in PySpark — need Scala/Java). For structured work, DataFrames outperform raw RDDs.

<span class="at-kicker">Comparison</span>

## RDD vs DataFrame vs Dataset

| | [[rdd\|RDD]] | DataFrame | Dataset |
| --- | --- | --- | --- |
| Abstraction | Low-level objects | Named columns (table) | Typed JVM objects |
| Optimizer | None | **[[spark-sql\|Catalyst]]** query plans | Catalyst |
| Type safety | Compile-time (typed) | **No compile-time** schema safety | Compile-time |
| Best for | Functional, low-level control | Most structured work | Type-safe JVM code (Scala/Java) |

Datasets are a **subset of DataFrames** with an encoder for compile-time type safety; they are **not available in PySpark** because Python is dynamically typed — Datasets need a compile-time, type-safe language like Scala. PySpark users work with DataFrames and benefit from Catalyst optimization and Tungsten's fast code generation.

<span class="at-kicker">Schema Definition</span>

## Schema: StructType and StructField

A **schema is the metadata that defines column names and types**. PySpark models it explicitly:

- **`StructType`** — a collection of `StructField` objects describing the whole structure (shown as `struct` by `printSchema()`).
- **`StructField`** — one column: name (String), type (`DataType`), nullable (Boolean), and metadata.

```python
from pyspark.sql.types import StructType, StructField, StringType, IntegerType
schema = StructType([
    StructField("firstname", StringType(), True),
    StructField("salary",    IntegerType(), True),
])
df = spark.createDataFrame(data=data, schema=schema)
```

Specifying a schema on read **avoids extra inference jobs** — schema inference forces Spark to scan part of the data, triggering additional jobs. Complex/nested columns use **`ArrayType`** (collection of same-typed items) and **`MapType`** (key/value, with optional `valueContainsNull`).

<span class="at-kicker">Common Operations</span>

## Common operations

| Operation | Method |
| --- | --- |
| Add / override a column | `withColumn()` |
| Static literal column | `lit()` |
| Rename a column | `withColumnRenamed()` / `expr()` / `selectExpr()` |
| Drop columns | `drop()` |
| Limit rows | `limit()` |
| Distinct rows (all cols) | `distinct()` |
| Drop duplicates (chosen cols) | `dropDuplicates([...])` |
| Combine, dedup | `union()` (UnionAll keeps duplicates) |
| Aggregations in projection | `select()` / `selectExpr()` |
| Window / analytical functions | aggregate + ranking over a window of rows |
| Pivot / unpivot | `groupBy().pivot().sum()` / `unpivot()` |
| Convert to pandas | `toPandas()` |

> `toPandas()` **collects all rows to the driver** — use it only on small/aggregated results, or large datasets will fail with a memory error. The reverse (PySpark vs Pandas trade-offs) is covered in [[pyspark|PySpark]].

When the DataFrame API feels awkward, the **`expr()`** function lets you drop into SQL expressions easily.

<span class="at-kicker">UDFs</span>

## User-defined functions

A **[[spark-sql|UDF]]** wraps a Python function so it can be applied column-wise on a DataFrame. UDFs extend Spark's built-ins but run **outside Catalyst's optimizations**, so prefer built-in functions when one exists.

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. **RDD vs DataFrame vs Dataset** — why is there no Dataset in PySpark?
2. What do **`StructType`** and **`StructField`** do? How do you define a schema?
3. **`distinct()`** vs **`dropDuplicates()`**.
4. How do you convert a PySpark DataFrame to **pandas**, and what's the risk?
5. What are **`ArrayType`** and **`MapType`** for?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Spark internals
>> [[apache-spark|Apache Spark]], [[rdd|RDDs]], [[spark-sql|Spark SQL]], [[spark-performance|Performance]]
>
>
>> [!card] Python API
>> [[pyspark|PySpark]]
>
>
>> [!card] Data modeling
>> [[data-modeling|Data Modeling]]
>
>
>> [!card] Products
>> [[databricks|Databricks]]
