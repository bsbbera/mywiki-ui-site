---
title: Spark SQL
Created:
  - 2026-05-28
date modified: Thursday, May 28th 2026
aliases:
  - Spark SQL
  - Catalyst Optimizer
  - Spark UDF
category: Computer Science
tags:
  - DataEngineering
  - Processing
  - Spark
  - SQL
banner:
publish: true
---

> "To be prepared is half the victory."
> <cite>— Miguel de Cervantes</cite>

---

**Spark SQL** is the structured-data module of [[apache-spark|Apache Spark]]. Unlike the raw [[rdd|RDD]] API, it understands the **structure of the data and the computation**, which lets it optimize queries automatically. Its programming abstraction is the [[spark-dataframe|DataFrame]], and you can query it with **SQL syntax** in addition to the DataFrame API (source: pyspark interview prep.pdf).

## Temp views and the SQL interface

To run SQL against a DataFrame (source: pyspark interview prep.pdf):

```python
df.createOrReplaceTempView("people")
spark.sql("SELECT * FROM people WHERE age > 30").show()
```

- `createOrReplaceTempView()` registers a **temporary table** on a DataFrame.
- The view is available through the [[spark-sql|SparkSession]] via `spark.sql()` for as long as the **session is active** — ending the session drops it (source: pyspark basics.pdf).
- **PySpark DataFrame API functions are available in Spark SQL by default** — no extra import needed (source: pyspark basics.pdf).

## The Catalog

The **Catalog stores the metadata of SQL objects** — databases, tables, views, functions (source: pyspark basics.pdf). It is how Spark resolves names in SQL queries. **Temp views** live only for the session.

## Catalyst Optimizer

The **Catalyst optimizer** is central to Spark SQL — it improves structured queries (SQL or DataFrame/Dataset) to reduce runtime and cost (source: pyspark interview prep.pdf). It supports:

- **Rule-based optimization** — a set of rules that define how to execute the query.
- **Cost-based optimization** — generate several plans via rules, then estimate their costs and pick the cheapest.

Catalyst plans go through **logical planning** (phase 1) then **physical planning** (phase 2) of execution (source: pyspark basics.pdf). Optimized physical plans become RDD operations under the hood; this is also why **DataFrames outperform raw RDDs** for structured work, and why Spark SQL beats Hadoop on iterative jobs (in-memory processing). Catalyst also handles big-data challenges like semi-structured data and advanced analytics (source: pyspark interview prep.pdf).

## User-defined functions (UDFs)

A **UDF** lets you define **column-based transformations** to extend Spark's built-in functions (source: pyspark interview prep.pdf):

```python
from pyspark.sql.functions import udf
from pyspark.sql.types import StringType
convertUDF = udf(lambda z: convertCase(z), StringType())
```

UDFs work on both the DataFrame API and SQL. Because they run as opaque Python (outside Catalyst), prefer built-ins where possible.

## Features of Spark SQL

(source: pyspark interview prep.pdf)

- **UDFs** for custom column transformations.
- Standard **JDBC / ODBC connectivity** — connect external tools and run table operations.
- **Data transformations** — Spark converts SQL queries to RDDs for execution.
- **Performance** — in-memory processing allows more iterations than Hadoop.
- **Relational processing** added on top of functional programming.

## Interview questions

1. What is **Spark SQL** and how does it differ from the RDD API?
2. Explain the **Catalyst optimizer** — rule-based vs cost-based.
3. How do you create and use a **temp view**? What's its lifetime?
4. What is the **Catalog**?
5. When should you avoid a **UDF**?

## Related pages

> [!grid]
>
>> [!card] Spark internals
>> [[apache-spark|Apache Spark]], [[spark-dataframe|DataFrames]], [[rdd|RDDs]], [[spark-performance|Performance]]
>
>
>> [!card] Python API
>> [[pyspark|PySpark]]
>
>
>> [!card] Guides
>> [[sql-guide|SQL Guide]]
>
>
>> [!card] Products
>> [[databricks|Databricks]], [[bigquery|BigQuery]]
