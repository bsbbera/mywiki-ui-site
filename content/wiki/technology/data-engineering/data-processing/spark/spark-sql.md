---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Spark SQL
Created:
  - 2026-05-28
aliases:
  - Spark SQL
  - Catalyst Optimizer
  - Spark UDF
category: Computer Science
tags:
  - data-engineering
  - concept
  - Processing
  - Spark
  - SQL
banner: https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Spark</span>

# Spark SQL

<p class="at-lead">
Spark SQL is the structured-data module of Apache Spark. Unlike the raw RDD API, it understands the structure of the data and the computation, which lets it optimize queries automatically. Its programming abstraction is the DataFrame, and you can query it with SQL syntax in addition to the DataFrame API.
</p>

<span class="at-stat">Catalyst</span> optimizer &nbsp;·&nbsp; <span class="at-stat">2.0</span> unified with DataFrame API &nbsp;·&nbsp; <span class="at-mark">SQL queries on distributed data with automatic optimization</span>

> [!tip] Why Spark SQL Beats Raw RDDs
> Catalyst optimizer generates optimized physical plans that become RDD operations under the hood. This is why **DataFrames outperform raw RDDs** for structured work, and why Spark SQL beats Hadoop on iterative jobs (in-memory processing).

<span class="at-kicker">SQL Interface</span>

## Temp views and the SQL interface

To run SQL against a DataFrame:

```python
df.createOrReplaceTempView("people")
spark.sql("SELECT * FROM people WHERE age > 30").show()
```

- `createOrReplaceTempView()` registers a **temporary table** on a DataFrame.
- The view is available through the [[spark-sql|SparkSession]] via `spark.sql()` for as long as the **session is active** — ending the session drops it.
- **PySpark DataFrame API functions are available in Spark SQL by default** — no extra import needed.

<span class="at-kicker">Metadata</span>

## The Catalog

The **Catalog stores the metadata of SQL objects** — databases, tables, views, functions. It is how Spark resolves names in SQL queries. **Temp views** live only for the session.

<span class="at-kicker">Optimizer</span>

## Catalyst Optimizer

The **Catalyst optimizer** is central to Spark SQL — it improves structured queries (SQL or DataFrame/Dataset) to reduce runtime and cost. It supports:

- **Rule-based optimization** — a set of rules that define how to execute the query.
- **Cost-based optimization** — generate several plans via rules, then estimate their costs and pick the cheapest.

Catalyst plans go through **logical planning** (phase 1) then **physical planning** (phase 2) of execution. Optimized physical plans become RDD operations under the hood; this is also why **DataFrames outperform raw RDDs** for structured work, and why Spark SQL beats Hadoop on iterative jobs (in-memory processing). Catalyst also handles big-data challenges like semi-structured data and advanced analytics.

<span class="at-kicker">Extensibility</span>

## User-defined functions (UDFs)

A **UDF** lets you define **column-based transformations** to extend Spark's built-in functions:

```python
from pyspark.sql.functions import udf
from pyspark.sql.types import StringType
convertUDF = udf(lambda z: convertCase(z), StringType())
```

UDFs work on both the DataFrame API and SQL. Because they run as opaque Python (outside Catalyst), prefer built-ins where possible.

<span class="at-kicker">Key Features</span>

## Features of Spark SQL

- **UDFs** for custom column transformations.
- Standard **JDBC / ODBC connectivity** — connect external tools and run table operations.
- **Data transformations** — Spark converts SQL queries to RDDs for execution.
- **Performance** — in-memory processing allows more iterations than Hadoop.
- **Relational processing** added on top of functional programming.

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is **Spark SQL** and how does it differ from the RDD API?
2. Explain the **Catalyst optimizer** — rule-based vs cost-based.
3. How do you create and use a **temp view**? What's its lifetime?
4. What is the **Catalog**?
5. When should you avoid a **UDF**?

<span class="at-kicker">Continue Reading</span>

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
