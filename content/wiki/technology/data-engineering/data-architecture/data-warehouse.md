---
title: Data Warehouse (concept)
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Data Warehouse
  - EDW
  - DWH
category: Computer Science
tags:
  - DataEngineering
  - Architecture
  - Analytics
banner:
publish: true
---

---

A **data warehouse** is a central repository for data used in reporting and analytics. Data flows in from [[../data-processing/online-transaction-processing|OLTP]] systems, relational databases, and [[data-lake|other sources]] on a regular cadence. Analysts, engineers, and scientists query it through BI tools, SQL clients, and analytics applications. Because the primary use case is analytics, warehouses use **[[../data-processing/online-analytical-processing|OLAP]]**-optimized technology (often columnar storage) (source: Concepts/Data Architecture/Data Warehouse.md).

> For the **full theoretical treatment** (Inmon vs Kimball, ETL vs ELT, star schemas, real-world examples) see the canonical page: [[../../data-warehousing|Data Warehousing]].

## In one paragraph

Operational databases ([[../data-processing/online-transaction-processing|OLTP]]) optimize for **frequent small transactions**. Analytical workloads need to **scan billions of rows** and **aggregate across years of history**. The warehouse is the architectural answer: a separate store, populated periodically from operational systems, modeled for read-heavy analytical queries.

## Advantages

- Consolidates multiple data sources into one **source of truth**.
- Optimized for read access → reports run orders of magnitude faster than against the operational DB.
- Stores and analyzes large amounts of **historical data**.

## Disadvantages

- Significant investment of time and resources to build correctly.
- Not designed for real-time ingest (although near-real-time is fine).

## When to use

For complex queries on large datasets, especially when you need to keep historical data separate from current transactions for performance reasons (source: Concepts/Data Architecture/Data Warehouse.md).

## Popular cloud warehouses

- [[../../../gcp/analytics/bigquery|Google BigQuery]]
- **Amazon Redshift** — see [[../../tools/databases-overview|Databases overview]]
- **Snowflake** — see [[../../tools/databases-overview|Databases overview]]
- **Azure Synapse Analytics** — see [[../../../azure/azure|Azure]]
- [[../../../databricks/databricks|Databricks SQL]] (lakehouse-style)

## Benchmarks

- **1 TB**: [Fivetran 2020 — Redshift, Snowflake, Presto, BigQuery](https://fivetran.com/blog/warehouse-benchmark)
- **30 TB**: [Gigaom 2019 — Redshift, Azure SQL DW, BigQuery, Snowflake](https://gigaom.com/report/cloud-data-warehouse-performance-testing/)

## Interview Questions

1. Warehouse vs lake vs lakehouse — when prefer which?
2. **Inmon** vs **Kimball** approaches.
3. Why are warehouses **columnar**?
4. How do you handle near-real-time ingest into a warehouse?

## Related pages

> [!multi-column]
>
>> [!card] Sister architectures
>> [[data-lake|Data Lake]], [[data-mart|Data Mart]], [[medallion-architecture|Medallion]]
>
>
>> [!card] Modeling + processing
>> [[../data-modeling/dimensional-modeling|Dimensional Modeling]], [[../data-processing/online-analytical-processing|OLAP]], [[../../data-warehousing|Data Warehousing — full treatment]]
>
>
>> [!card] Products
>> [[../../../gcp/analytics/bigquery|BigQuery]], [[../../../databricks/databricks|Databricks Lakehouse]]
>
>
>> [!card] People
>> [[../../../people/bill-inmon|Bill Inmon]], [[../../../people/ralph-kimball|Ralph Kimball]]
>
>
>> [!card] Books
>> [[../../../books/building-the-data-warehouse|Building the Data Warehouse]], [[../../../books/the-data-warehouse-toolkit|The Data Warehouse Toolkit]]

