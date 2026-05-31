---
title: Spark DataFrame
Created:
  - 2026-05-28
date modified: Thursday, May 28th 2026
aliases:
  - Spark DataFrame
  - DataFrame
  - Dataset
  - StructType
category: Computer Science
tags:
  - DataEngineering
  - Processing
  - Spark
  - DataFrame
banner:
publish: true
---

> "Good things aren't supposed to just fall into your lap."
> <cite>— Audrey Hepburn</cite>

---

A **DataFrame** is Spark's high-level structured API: an **immutable, distributed collection of data organized into named columns** — conceptually a table in a relational database, but distributed and lazily evaluated (source: pyspark interview prep.pdf). It is the recommended starting point for most [[pyspark|PySpark]] work, with [[rdd|RDDs]] reserved for low-level control.

A DataFrame is divided into two parts: **rows and columns**; you need a DataFrame to manipulate columns (source: pyspark basics.pdf).

## RDD vs DataFrame vs Dataset

| | [[rdd\|RDD]] | DataFrame | Dataset |
| --- | --- | --- | --- |
| Abstraction | Low-level objects | Named columns (table) | Typed JVM objects |
| Optimizer | None | **[[spark-sql\|Catalyst]]** query plans | Catalyst |
| Type safety | Compile-time (typed) | **No compile-time** schema safety | Compile-time |
| Best for | Functional, low-level control | Most structured work | Type-safe JVM code (Scala/Java) |

Datasets are a **subset of DataFrames** with an encoder for compile-time type safety; they are **not available in PySpark** because Python is dynamically typed — Datasets need a compile-time, type-safe language like Scala (source: pyspark interview prep.pdf). PySpark users work with DataFrames and benefit from Catalyst optimization and Tungsten's fast code generation.

## Schema: StructType and StructField

A **schema is the metadata that defines column names and types** (source: pyspark basics.pdf). PySpark models it explicitly (source: pyspark interview prep.pdf):

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

Specifying a schema on read **avoids extra inference jobs** — schema inference forces Spark to scan part of the data, triggering additional jobs (source: pyspark basics.pdf).

Complex/nested columns use **`ArrayType`** (collection of same-typed items) and **`MapType`** (key/value, with optional `valueContainsNull`) (source: pyspark interview prep.pdf).

## Common operations

From the source notes (source: pyspark basics.pdf, pyspark interview prep.pdf):

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

> `toPandas()` **collects all rows to the driver** — use it only on small/aggregated results, or large datasets will fail with a memory error (source: pyspark interview prep.pdf). The reverse (PySpark vs Pandas trade-offs) is covered in [[pyspark|PySpark]].

When the DataFrame API feels awkward, the **`expr()`** function lets you drop into SQL expressions easily (source: pyspark basics.pdf).

## User-defined functions

A **[[spark-sql|UDF]]** wraps a Python function so it can be applied column-wise on a DataFrame. UDFs extend Spark's built-ins but run **outside Catalyst's optimizations**, so prefer built-in functions when one exists (source: pyspark interview prep.pdf).

## Interview questions

1. **RDD vs DataFrame vs Dataset** — why is there no Dataset in PySpark?
2. What do **`StructType`** and **`StructField`** do? How do you define a schema?
3. **`distinct()`** vs **`dropDuplicates()`**.
4. How do you convert a PySpark DataFrame to **pandas**, and what's the risk?
5. What are **`ArrayType`** and **`MapType`** for?

## Related pages

> [!multi-column]
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
