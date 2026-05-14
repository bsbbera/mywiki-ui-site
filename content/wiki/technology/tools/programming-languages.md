---
title: Programming Languages for Data Engineering
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Programming Languages
  - DE Languages
category: Computer Science
tags:
  - DataEngineering
  - Programming
  - Tools
banner:
dg-publish: true
publish: true
---

---

The languages most data engineers use, and where each shines (source: Tools/Programming Languages/*.md).

## SQL

The **most widely used language** for data. Non-negotiable for any data engineer.

- **Standard ANSI SQL** is portable across DBs (with caveats).
- Variants matter: **PostgreSQL SQL**, **MySQL SQL**, **T-SQL** (SQL Server), **PL/SQL** (Oracle), **BigQuery SQL**, **Snowflake SQL**.

See [[../guides/sql-guide|SQL Guide]] for the practical reference.

### T-SQL

Microsoft's SQL Server flavor. Has **table-valued functions, MERGE, OUTPUT clause, CTEs, window functions, GROUPING SETS, CUBE, ROLLUP**. Used heavily in enterprise + .NET shops.

### PL/SQL

Oracle's procedural extension. Strong in stored procedures, packages.

### PL/pgSQL

PostgreSQL's procedural extension.

## Python

The **most popular** general-purpose programming language in data engineering. Use cases:

- **Pipeline orchestration** — Airflow / Dagster / Prefect DAGs.
- **Custom transformations** — pandas, polars, PySpark.
- **Data quality** — Great Expectations, custom checks.
- **ML + data science** — scikit-learn, PyTorch, TensorFlow.
- **API integrations** — `requests`, SDKs.
- **Glue code** — connecting heterogeneous systems.

**Modern Python data stack**:

- **pandas** — DataFrame manipulation; ubiquitous.
- **polars** — Rust-based DataFrame; faster than pandas.
- **DuckDB** — in-process OLAP DB; embed in Python.
- **PyArrow** — columnar memory format.
- **PySpark** — Spark from Python.
- **dlt / Airbyte SDK / Singer** — ingestion.
- **dbt-core** — Python under the hood.

## Java

Used for **niche but important** roles:

- **Apache Spark** is JVM-native (Scala/Java); some PySpark performance issues are easier to debug in JVM.
- **Apache Flink** is JVM-native.
- **Kafka clients** are JVM-native (with bindings for other languages).
- **Hadoop ecosystem** is JVM-heavy.
- **Apache Beam** has Java + Python SDKs.

Most data engineers don't write Java daily, but knowing it helps when debugging Spark/Flink.

## Scala

The "**original Spark language**". Spark APIs are most expressive in Scala (the platform was written in Scala).

- Functional + OOP hybrid; strong type system.
- **Steeper learning curve** than Python.
- Becoming less common as PySpark/SQL improved.
- Still common in **Databricks** + **Apache Spark** core development.

## Other languages worth knowing

### Rust

Increasingly used for **performance-critical data tools**: polars, DataFusion, Apache Arrow internals, ClickHouse client, Vector (observability), tokio-postgres.

### Go

Strong for **cloud + DevOps tools**: Kubernetes, Terraform, etcd, dbt Cloud is partly Go. Less common for data transformations; common for infrastructure.

### R

**Statistician + analyst** language. Strong for stats, biostatistics. Less common in pure DE; some SaaS data teams use it for analytics.

### C++

Performance-critical engines: ClickHouse, RocksDB, Apache Arrow C++ implementation, Parquet C++.

## Decision matrix

| Need | Pick |
| --- | --- |
| Working with data in a DB | **SQL** |
| Pipeline orchestration | **Python** |
| Spark heavy lifting | **Scala** (or PySpark) |
| Streaming + Flink | **Java / Scala** |
| Data science + ML | **Python** |
| Stats / biostats | **R** |
| High-performance custom engine | **Rust / C++** |

## What every DE should learn

1. **SQL** — fluent, including window functions, CTEs, performance.
2. **Python** — comfortable building pipelines, parsing data, calling APIs.
3. **Bash / shell** — debugging on servers, ad-hoc transforms.
4. **One JVM language** (Java or Scala) — to read Spark/Flink internals.
5. **YAML / JSON** — configs are everywhere.

## Related pages

> [!multi-column]
>
>> [!card] Guides
>> [[../guides/sql-guide|SQL Guide]], [[../guides/getting-started|Getting Started]]
>
>
>> [!card] Software Engineering
>> [[../concepts/software-engineering/indexing|Indexing]]
>
>
>> [!card] Data Engineering
>> [[../sargable-expressions|Sargable Expressions]]
>
>
>> [!card] Sister catalogs
>> [[processing-tools|Processing Tools]], [[orchestrators-overview|Orchestrators]]
>
>
>> [!card] People
>> [[../../people/edgar-f-codd|Edgar F. Codd]], [[../../people/matei-zaharia|Matei Zaharia]]

