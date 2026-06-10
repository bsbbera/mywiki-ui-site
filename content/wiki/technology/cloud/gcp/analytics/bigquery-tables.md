---
title: BigQuery Tables
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - BQ Tables
  - BigQuery Views
category: Cloud
tags:
  - GCP
  - BigQuery
  - Analytics
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "When we allow negative messages to fester in our head, they take on a life of their own."
> <cite>— Lolly Daskal</cite>

---

<span class="at-kicker">Table Management · BigQuery</span>

# BigQuery Tables

<p class="at-lead">
BigQuery stores all data as tables organized inside datasets — with multiple table types including temporary, permanent, views, external tables, materialized views, and table snapshots for every use case.
</p>

<span class="at-stat">native</span> + external + views + materialized views &nbsp;·&nbsp; <span class="at-stat">partitioning</span> + clustering &nbsp;·&nbsp; <span class="at-stat">time-travel</span> recovery &nbsp;·&nbsp; <span class="at-mark">partitioning and clustering are the two biggest performance levers</span>

<span class="at-kicker">How It Works</span>

## Overview

BigQuery stores all data as **tables** organized inside **datasets**. The platform recognizes three table-like constructs (source: Google Cloud Platform - Tables in BigQuery.md):

1. **Temporary tables**
2. **Permanent tables**
3. **Views (virtual tables)**

Plus a few modern additions not in the source: **external tables**, **materialized views**, and **table snapshots**.

### Temporary tables

- BigQuery **automatically caches** the results of every successful query into a temporary table (source: Google Cloud Platform - Tables in BigQuery.md).
- These tables **expire after 24 hours**.
- Visible to the user who ran the query, accessible via [[bigquery-query-management|query history]].
- Re-running the **same query on unchanged data** within 24 h returns cached results — **free**, no scan cost.

### Permanent tables

For shareable or long-lived results, save query output to a **permanent table** (source: Google Cloud Platform - Tables in BigQuery.md):

1. Open **Query settings** → **Set a destination table**.
2. Pick project + dataset + table name.
3. Run.

- Permanent tables **incur storage costs** (temporary tables don't).
- Share via [[bigquery-iam|IAM]] on the dataset or table.
- Alternative: **Save Results** → save locally, to Drive, or directly to a Google Sheet (no permanent table needed).

### Views (virtual tables)

A **view** is a virtual table defined by a SQL query (source: Google Cloud Platform - Tables in BigQuery.md):

- No physical storage → **no storage cost**.
- Querying a view re-runs the underlying query.
- Useful for **hiding complexity** (joins, business logic) and **fine-grained access control** via [[bigquery-authorized-views]].

Create one via the Query Editor → **Save View** → choose project/dataset/name.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### TEMPORARY TABLES
>> ### Automatic *Caching*
>> Query results cached for 24 hours automatically. Re-run identical queries on unchanged data for free. No storage cost for temporary results.
>
>> [!card|section]
>> ###### PERMANENT TABLES
>> ### Persistent *Storage*
>> Save query results to permanent tables for sharing and long-term access. Control access via IAM at dataset or table level.
>
>> [!card|section]
>> ###### VIEWS
>> ### Virtual *Definitions*
>> No storage cost — pure SQL definitions. Hide complex joins and business logic. Re-run underlying query on each access.
>
>> [!card|section]
>> ###### MATERIALIZED VIEWS
>> ### Pre-Computed *Results*
>> Incrementally refreshed pre-computed aggregations. Faster than views, cheaper than full re-aggregation. Perfect for dashboards.
>
>> [!card|section]
>> ###### EXTERNAL TABLES
>> ### Federated *Access*
>> Query data in Cloud Storage, Drive, Cloud SQL, and Bigtable without loading. Zero storage cost in BigQuery — data stays at source.
>
>> [!card|section]
>> ###### TABLE SNAPSHOTS
>> ### Point-in-Time *Backup*
>> Lightweight copies for testing and recovery. Delta-only storage for efficient versioning. Time-travel for historical analysis.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Temporary tables** | No storage cost — automatic 24-hour expiry |
| **Permanent tables** | Standard BigQuery storage pricing per GB |
| **Views** | No storage cost — virtual definitions only |
| **Materialized views** | Small storage cost for pre-computed results |
| **External tables** | No BigQuery storage — source system costs apply |
| **Snapshots** | Delta-only storage cost for changed data |

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### AD-HOC ANALYSIS
>> ### Temporary *Exploration*
>> Let BigQuery cache results automatically for iterative analysis. No manual table management — focus on insights, not infrastructure.
>
>> [!card|section]
>> ###### SHARED DATASETS
>> ### Permanent *Publishing*
>> Create production tables shared across teams. Set up IAM for controlled access. Build data products consumed by downstream systems.
>
>> [!card|section]
>> ###### LOGIC ENCAPSULATION
>> ### View *Abstraction*
>> Hide complex joins and calculations behind simple view names. Give analysts stable interfaces while underlying schema evolves.
>
>> [!card|section]
>> ###### DASHBOARD ACCELERATION
>> ### Materialized *Dashboards*
>> Pre-compute expensive aggregations for sub-second dashboard loads. Automatic incremental refresh keeps data fresh without full rebuilds.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · TABLE MANAGEMENT
>> # From *flat table* to *optimized schema*.
>> Choose the right table type and apply partitioning and clustering for maximum query performance and cost efficiency.
>
>> [!card|step]
>> ###### Step 01
>> ### *Choose* table type & format.
>> Temporary for exploration, permanent for shared data, views for abstraction. Consider materialized views for repeated aggregations and external tables for federated access.
>
>> [!card|step]
>> ###### Step 02
>> ### *Apply* partitioning & clustering.
>> Partition time-series data by date for efficient pruning. Cluster high-cardinality columns (user_id, region) for co-location. Both reduce bytes scanned and query cost.
>
>> [!card|step]
>> ###### Step 03
>> ### *Query* with partition pruning.
>> Always filter on partition columns in WHERE clauses. BigQuery automatically prunes irrelevant partitions. Verify with query validator — aim for minimal bytes processed.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] BigQuery hub
>> [[bigquery|BigQuery]]
>
>
>> [!card] BigQuery sub-pages
>> [[bigquery-loading-data|Loading Data]], [[bigquery-external-data|External Data]], [[bigquery-authorized-views|Authorized Views]], [[bigquery-iam|BigQuery IAM]], [[bigquery-query-management|Query Management]]

## Comparison

| Type | Storage cost | Sharable | Query cost on read | Use case |
| --- | --- | --- | --- | --- |
| **Temporary** | None | No | Cached (free if unchanged) | Default for ad-hoc queries |
| **Permanent** | Yes | Yes (IAM) | Standard | Persistent results, multi-user data |
| **View** | None | Yes (IAM) | Re-runs underlying query | Logic encapsulation, access filtering |
| **Materialized view** | Small | Yes | Pre-computed (cheaper) | Dashboards, recurring aggregates |
| **External table** | None (data in source) | Yes | Read-from-source (often slower) | Federated, no-ETL access |
| **Snapshot** | Delta only | Yes | Standard | Backup, time-travel |

## External tables (not in raw)

A table **definition** that points to data in [[Cloud Storage|Cloud Storage]], Google Drive, [[../databases/cloud-sql|Cloud SQL]], or [[../databases/cloud-bigtable|Bigtable]]. BigQuery reads the data on demand — see [[bigquery-external-data]].

## Materialized views (not in raw)

Pre-computed views that BigQuery refreshes incrementally. Faster than views, cheaper than full re-aggregation; useful for dashboards.

## Table snapshots (not in raw)

Lightweight, point-in-time copies. Useful for backups and testing schema migrations.

## Interesting Facts

- Temporary table expiry can be **changed in dataset defaults**; if a query result is large and important, BigQuery may even refuse to cache it.
- Views are **inlined** at query time — a view of a view of a view is fully expanded by the planner. Excessive nesting hurts performance and readability.
- **Authorized views** ([[bigquery-authorized-views]]) are how you share filtered data with users who can't see the underlying table directly.

## Interview Questions can be asked

1. Difference between a **view** and a **materialized view** in BigQuery.
2. Why are temporary tables free but permanent tables not?
3. When would you choose an **external table** over loading data?
4. How would you implement row-level security with views?
