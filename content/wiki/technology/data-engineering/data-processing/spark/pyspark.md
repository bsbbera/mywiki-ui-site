---
title: PySpark
Created:
  - 2026-05-28
date modified: Thursday, May 28th 2026
aliases:
  - PySpark
  - SparkSession
category: Computer Science
tags:
  - DataEngineering
  - Processing
  - Spark
  - Python
banner:
publish: true
---

> [!infobox|wikipedia]
> # PySpark
> ###### Tool / Software
> | | |
> | --- | --- |
> | **Developer** | Apache Software Foundation |
> | **Type** | Python API for Apache Spark |
> | **Domain** | Distributed data processing |
> | **Initial release** | 2014 |
> | **Written in** | Python (wraps Scala/JVM) |
> | **License** | Apache License 2.0 |

---

> "Believe you can and you will be halfway there."
> <cite>— Lolly Daskal</cite>

---

**PySpark** is the **Python API for [[apache-spark|Apache Spark]]**, created and distributed by the Apache Spark project so Python developers can work with Spark (source: pyspark interview prep.pdf). Spark itself is written in **Scala** (a compile-time, type-safe JVM language) and also speaks Java, R, and Python.

Because Scala is compile-time type-safe, plain Spark has a few capabilities PySpark lacks — most notably **[[spark-dataframe|Datasets]]** (typed, domain-specific objects). PySpark works with [[rdd|RDDs]] and DataFrames instead (source: pyspark interview prep.pdf).

## Why PySpark

(source: pyspark interview prep.pdf)

- In-memory distributed processing — programs run **~100× faster** than traditional apps.
- Reads from Hadoop HDFS, Amazon S3, and many other file systems.
- Real-time processing through **Streaming + Kafka**.
- Ships with **machine learning ([[spark-mllib|MLlib]]) and graph (GraphX)** libraries.
- Easy to write parallel code; tracks synchronization points and errors.

**Drawbacks**: MapReduce-style problems can be awkward to express; it can be less efficient than some alternative paradigms; and (like all Spark) it is memory-hungry.

## SparkSession — the entry point

Since **Spark 2.0**, `SparkSession` (from `pyspark.sql`) is the unified entry point, replacing the older `SQLContext` and `HiveContext`. It's how you create [[rdd|RDDs]] and [[spark-dataframe|DataFrames]] programmatically (source: pyspark interview prep.pdf):

```python
from pyspark.sql import SparkSession
spark = SparkSession.builder \
    .master("local[1]") \
    .appName("ProjectPro") \
    .getOrCreate()
```

- The **builder pattern** plus `getOrCreate()` returns the existing session or creates a new one.
- In the `pyspark` shell, Databricks, and Spark shell, a `spark` object exists **by default**; in a `.py` file you must create it yourself or you'll hit `NameError: Name 'spark' is not Defined` (source: pyspark interview prep.pdf).
- `master("local[*]")` runs Spark locally with one worker thread per logical core (source: pyspark basics.pdf).

## SparkConf

`SparkConf` holds the settings to run an application locally or on a cluster (source: pyspark interview prep.pdf). Key setters: `set(key, value)`, `setMaster(value)`, `setAppName(value)`, `setSparkHome(value)`, `get(key, default)`.

## py4j and findspark

- **py4j** is the Java library that lets Python talk to JVM instances; it lives at `$SPARK_HOME/python/lib/py4j-*-src.zip`. The error `ImportError: No module named py4j.java_gateway` means py4j isn't on `PYTHONPATH` — fix by exporting `SPARK_HOME` and adding py4j to `PYTHONPATH` (source: pyspark interview prep.pdf).
- **findspark** (`pip install findspark`, then `findspark.init()`) locates the Spark install when you get `No module named pyspark` (source: pyspark interview prep.pdf).

## PySpark vs pandas

The key difference: PySpark is **distributed** — operations run in parallel across many cores and machines — whereas **pandas runs on a single node** (source: pyspark interview prep.pdf). Use `toPandas()` only on small/aggregated results (it collects everything to the driver). For scalable pipelines, **avoid eager operations and Python-native types** (dicts, lists) that can't be distributed; add filter columns to a DataFrame instead of indexing dictionaries (source: pyspark interview prep.pdf).

## Interview questions

1. **PySpark vs Apache Spark** — what's missing in PySpark and why?
2. What is **`SparkSession`** and how do you create one? Why might `spark` be undefined in a `.py` file?
3. What is **py4j**, and how do you fix the `py4j.java_gateway` import error?
4. **PySpark vs pandas** — when does each make sense?
5. List benefits and drawbacks of PySpark.

## Related pages

> [!multi-column]
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
