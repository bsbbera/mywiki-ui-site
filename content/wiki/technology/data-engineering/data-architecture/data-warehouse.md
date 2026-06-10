---
title: Data Warehouse (concept)
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Data Warehouse
  - EDW
  - DWH
category: Computer Science
tags:
  - DataEngineering
  - Architecture
  - Analytics
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
cssclass: wide-page
---

> "I never said it would be easy, I only said it would be worth it."
> <cite>— Mae West</cite>

---

<span class="at-kicker">Data Architecture · Analytics Foundation</span>

# Data Warehouse

<p class="at-lead">
A data warehouse is a central repository for data used in reporting and analytics. Data flows in from OLTP systems and other sources, optimized for OLAP workloads using columnar storage for fast aggregations across billions of rows.
</p>

<span class="at-stat">OLAP</span> optimized &nbsp;·&nbsp; <span class="at-stat">Historical</span> data storage &nbsp;·&nbsp; <span class="at-mark">the single source of analytical truth for the enterprise</span>

> [!tip] When to Use a Warehouse
> For complex queries on large datasets, especially when you need to keep historical data separate from current transactions for performance reasons. Operational databases optimize for frequent small transactions; warehouses optimize for scanning billions of rows and aggregating across years.

<span class="at-kicker">Core Concept</span>

## In one paragraph

Operational databases ([[../data-processing/online-transaction-processing|OLTP]]) optimize for **frequent small transactions**. Analytical workloads need to **scan billions of rows** and **aggregate across years of history**. The warehouse is the architectural answer: a separate store, populated periodically from operational systems, modeled for read-heavy analytical queries.

> For the **full theoretical treatment** (Inmon vs Kimball, ETL vs ELT, star schemas, real-world examples) see the canonical page: [[../data-warehousing|Data Warehousing]].

<span class="at-kicker">Trade-offs</span>

## Advantages

> [!grid|cols2]
>
> > [!card|section] Single Source of Truth
> > Consolidates multiple data sources into one unified repository.
>
> > [!card|section] Read Performance
> > Reports run orders of magnitude faster than against operational DB.
>
> > [!card|section] Historical Data
> > Stores and analyzes large amounts of historical data for trends.

## Disadvantages

> [!grid|cols2]
>
> > [!card|section] Investment Required
> > Significant time and resources to build correctly.
>
> > [!card|section] Real-time Limits
> > Not designed for real-time ingest (although near-real-time is fine).

<span class="at-kicker">Cloud Platforms</span>

## Popular cloud warehouses

> [!grid|cols3]
>
> > [!card|section] [[../../cloud/gcp/analytics/bigquery|Google BigQuery]]
> > Serverless, petabyte-scale analytics.
>
> > [!card|section] **Amazon Redshift**
> > MPP warehouse with Spectrum lake querying.
>
> > [!card|section] **Snowflake**
> > Multi-cloud, separate compute from storage.
>
> > [!card|section] **Azure Synapse**
> > Unified analytics with dedicated SQL pools.
>
> > [!card|section] [[../../cloud/databricks/databricks|Databricks SQL]]
> > Lakehouse-style warehouse on Delta Lake.

## Benchmarks

- **1 TB**: [Fivetran 2020 — Redshift, Snowflake, Presto, BigQuery](https://fivetran.com/blog/warehouse-benchmark)
- **30 TB**: [Gigaom 2019 — Redshift, Azure SQL DW, BigQuery, Snowflake](https://gigaom.com/report/cloud-data-warehouse-performance-testing/)

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. Warehouse vs lake vs lakehouse — when prefer which?
2. **Inmon** vs **Kimball** approaches.
3. Why are warehouses **columnar**?
4. How do you handle near-real-time ingest into a warehouse?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister architectures
>> [[data-lake|Data Lake]], [[data-mart|Data Mart]], [[medallion-architecture|Medallion]]
>
>
>> [!card] Modeling + processing
>> [[../data-modeling/dimensional-modeling|Dimensional Modeling]], [[../data-processing/online-analytical-processing|OLAP]], [[../data-warehousing|Data Warehousing — full treatment]]
>
>
>> [!card] Products
>> [[../../cloud/gcp/analytics/bigquery|BigQuery]], [[../../cloud/databricks/databricks|Databricks Lakehouse]]
>
>
>> [!card] People
>> [[../../../people/bill-inmon|Bill Inmon]], [[../../../people/ralph-kimball|Ralph Kimball]]
>
>
>> [!card] Books
>> [[../../../books/building-the-data-warehouse|Building the Data Warehouse]], [[../../../books/the-data-warehouse-toolkit|The Data Warehouse Toolkit]]
