---
title: Column-oriented Database
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Column-oriented Database
  - Columnar Database
category: Computer Science
tags:
  - DataEngineering
  - Storage
  - OLAP
  - Analytics
banner:
publish: true
---

---

In a **column-oriented (columnar) database**, the data for **each column** is stored **together** on disk. Because of this, columnar DBs are a popular foundation for [[../data-architecture/data-warehouse|data warehouses]] (source: Concepts/Data Storage/Column-oriented Database.md).

## Row vs columnar layout

A simple table:

| EmpId | Lastname | Firstname | Salary |
| --- | --- | --- | --- |
| 10 | Smith | Joe | 60000 |
| 12 | Jones | Mary | 80000 |
| 11 | Johnson | Cathy | 94000 |
| 22 | Jones | Bob | 55000 |

**Row layout** (OLTP):

```
10,Smith,Joe,60000;12,Jones,Mary,80000;11,Johnson,Cathy,94000;22,Jones,Bob,55000;
```

**Columnar layout** (OLAP):

```
10,12,11,22;
Smith,Jones,Johnson,Jones;
Joe,Mary,Cathy,Bob;
60000,80000,94000,55000;
```

(source: Concepts/Data Storage/Column-oriented Database.md)

## Why columnar wins for analytics

If you query `SELECT AVG(Salary) FROM employees`:

- **Row store** — must read every row, then extract Salary. Wasteful.
- **Column store** — reads only the Salary column. **10×–100× faster**.

Plus:

- **Compression** — adjacent values in a column are similar (RLE, dictionary, delta encoding).
- **Vectorized execution** — SIMD operations on column batches.
- **Predicate pushdown** — skip whole column blocks via min/max indexes.

## Advantages

- **Efficient for column-subset queries** — only relevant columns are read.
- **Better compression** — column homogeneity = high compression ratios (often 10×).
- **Faster aggregations** — sum, avg, count over millions of rows in seconds.

## Disadvantages

- **Slower writes / inserts** — each row's columns scatter across files.
- **Bad for full-row reads** — `SELECT *` defeats the layout.
- **More complex updates** — usually do micro-batch ingestion, not row-level updates.

## When to use

- **Analytical / OLAP queries** — aggregations, scans, reports.
- **You query a subset of columns** in wide tables.
- **Compression** matters — column stores can reduce storage 5–10×.

## Use cases

- Reporting
- Big-data analytics
- Business intelligence
- Time-series analysis

## Popular columnar systems

- **Cloud warehouses**: [[../../../gcp/analytics/bigquery|BigQuery]] (Capacitor format), Snowflake (FDN), Amazon Redshift, Azure Synapse.
- **Open-source DBs**: ClickHouse, Apache Druid, Apache Pinot, DuckDB.
- **File formats**: [[../../tools/file-formats|Apache Parquet, ORC, Apache Arrow, Delta Lake, Iceberg]] — these are **columnar formats** that any compute engine can read.

## Wide-column ≠ column-oriented

See [[wide-column-database|wide-column]] for the distinction. **Column-oriented** stores columns separately on disk; **wide-column** stores rows with sparse column families.

## Interview Questions

1. Why is columnar **faster for analytics** but slower for OLTP?
2. How does **column-store compression** achieve such high ratios?
3. Walk through a query plan in BigQuery showing column pruning.
4. **Row** vs **column** storage — when each.

## Related pages

> [!multi-column]
>
>> [!card] Sister storage
>> [[wide-column-database|Wide-column Database]], [[non-relational-database|Non-relational Database]], [[data-storage|Data Storage]]
>
>
>> [!card] Modeling + architecture
>> [[../data-modeling/dimensional-modeling|Dimensional Modeling]], [[../data-modeling/one-big-table|One Big Table]], [[../data-architecture/data-warehouse|Data Warehouse]], [[../data-processing/online-analytical-processing|OLAP]]
>
>
>> [!card] Tools + products
>> [[../../tools/file-formats|File Formats (Parquet / ORC)]], [[../../../gcp/analytics/bigquery|BigQuery]], [[../../../databricks/databricks|Databricks]]
>
>
>> [!card] People
>> [[../../../people/daniel-abadi|Daniel Abadi]]

