---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: PySpark
Created:
  - 2026-05-28
aliases:
  - PySpark
  - SparkSession
category: Computer Science
tags:
  - data-engineering
  - concept
  - Processing
  - Spark
  - Python
banner: https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1400
publish: true
---

> [!infobox|right]
> # PySpark
> ###### Tool / Software
> | | |
> | --- | --- |
> | **Developer** | Apache Software Foundation |
> | **Type** | Python API for Apache Spark |
> | **Domain** | Distributed data processing |
> | **Initial release** | 2014 |
> | **Written in** | Python (wraps Scala/JVM) |
> | **License** | Apache License 2.0

<span class="at-kicker">Data Engineering · Spark</span>

# PySpark

<p class="at-lead">
PySpark is the Python API for Apache Spark, created and distributed by the Apache Spark project so Python developers can work with Spark. Spark itself is written in Scala (a compile-time, type-safe JVM language) and also speaks Java, R, and Python.
</p>

<span class="at-stat">100×</span> faster than MapReduce &nbsp;·&nbsp; <span class="at-stat">2014</span> initial release &nbsp;·&nbsp; <span class="at-mark">Python's gateway to distributed big data processing</span>

> [!tip] PySpark vs Spark
> Because Scala is compile-time type-safe, plain Spark has a few capabilities PySpark lacks — most notably Datasets (typed, domain-specific objects). PySpark works with [[rdd|RDDs]] and DataFrames instead. For most work, this is more than sufficient.

<span class="at-kicker">Why PySpark</span>

## Why PySpark

- In-memory distributed processing — programs run **~100× faster** than traditional apps.
- Reads from Hadoop HDFS, Amazon S3, and many other file systems.
- Real-time processing through **Streaming + Kafka**.
- Ships with **machine learning ([[spark-mllib|MLlib]]) and graph (GraphX)** libraries.
- Easy to write parallel code; tracks synchronization points and errors.

**Drawbacks**: MapReduce-style problems can be awkward to express; it can be less efficient than some alternative paradigms; and (like all Spark) it is memory-hungry.

<span class="at-kicker">Entry Point</span>

## SparkSession — the entry point

Since **Spark 2.0**, `SparkSession` (from `pyspark.sql`) is the unified entry point, replacing the older `SQLContext` and `HiveContext`. It's how you create [[rdd|RDDs]] and [[spark-dataframe|DataFrames]] programmatically:

```python
from pyspark.sql import SparkSession
spark = SparkSession.builder \
    .master("local[1]") \
    .appName("ProjectPro") \
    .getOrCreate()
```

- The **builder pattern** plus `getOrCreate()` returns the existing session or creates a new one.
- In the `pyspark` shell, Databricks, and Spark shell, a `spark` object exists **by default**; in a `.py` file you must create it yourself or you'll hit `NameError: Name 'spark' is not Defined`.
- `master("local[*]")` runs Spark locally with one worker thread per logical core.

<span class="at-kicker">Configuration</span>

## SparkConf

`SparkConf` holds the settings to run an application locally or on a cluster. Key setters: `set(key, value)`, `setMaster(value)`, `setAppName(value)`, `setSparkHome(value)`, `get(key, default)`.

## py4j and findspark

- **py4j** is the Java library that lets Python talk to JVM instances; it lives at `$SPARK_HOME/python/lib/py4j-*-src.zip`. The error `ImportError: No module named py4j.java_gateway` means py4j isn't on `PYTHONPATH` — fix by exporting `SPARK_HOME` and adding py4j to `PYTHONPATH`.
- **findspark** (`pip install findspark`, then `findspark.init()`) locates the Spark install when you get `No module named pyspark`.

<span class="at-kicker">Comparison</span>

## PySpark vs pandas

The key difference: PySpark is **distributed** — operations run in parallel across many cores and machines — whereas **pandas runs on a single node**. Use `toPandas()` only on small/aggregated results (it collects everything to the driver). For scalable pipelines, **avoid eager operations and Python-native types** (dicts, lists) that can't be distributed; add filter columns to a DataFrame instead of indexing dictionaries.

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. **PySpark vs Apache Spark** — what's missing in PySpark and why?
2. What is **`SparkSession`** and how do you create one? Why might `spark` be undefined in a `.py` file?
3. What is **py4j**, and how do you fix the `py4j.java_gateway` import error?
4. **PySpark vs pandas** — when does each make sense?
5. List benefits and drawbacks of PySpark.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Spark internals
>> [[apache-spark|Apache Spark]], [[spark-architecture|Architecture]], [[rdd|RDDs]], [[spark-dataframe|DataFrames]], [[spark-sql|Spark SQL]], [[spark-streaming|Streaming]], [[spark-mllib|MLlib]]
>
>
>> [!card] Languages
>> [[programming-languages|Programming Languages]]
>
>
>> [!card] Products
>> [[databricks|Databricks]]
>
>
>> [!card] People & books
>> [[matei-zaharia|Matei Zaharia]], [[learning-apache-spark-with-python|Learning Apache Spark with Python]]
