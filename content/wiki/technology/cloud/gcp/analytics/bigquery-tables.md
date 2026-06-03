---
title: BigQuery Tables
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:35:00 pm
aliases:
  - BQ Tables
  - BigQuery Views
category: Cloud
tags:
  - GCP
  - BigQuery
  - Analytics
banner:
publish: true
---

> "When we allow negative messages to fester in our head, they take on a life of their own."
> <cite>— Lolly Daskal</cite>

---

BigQuery stores all data as **tables** organized inside **datasets**. The platform recognizes three table-like constructs (source: Google Cloud Platform - Tables in BigQuery.md):

1. **Temporary tables**
2. **Permanent tables**
3. **Views (virtual tables)**

Plus a few modern additions not in the source: **external tables**, **materialized views**, and **table snapshots**.

## Temporary tables

- BigQuery **automatically caches** the results of every successful query into a temporary table (source: Google Cloud Platform - Tables in BigQuery.md).
- These tables **expire after 24 hours**.
- Visible to the user who ran the query, accessible via [[bigquery-query-management|query history]].
- Re-running the **same query on unchanged data** within 24 h returns cached results — **free**, no scan cost.

## Permanent tables

For shareable or long-lived results, save query output to a **permanent table** (source: Google Cloud Platform - Tables in BigQuery.md):

1. Open **Query settings** → **Set a destination table**.
2. Pick project + dataset + table name.
3. Run.

- Permanent tables **incur storage costs** (temporary tables don't).
- Share via [[bigquery-iam|IAM]] on the dataset or table.
- Alternative: **Save Results** → save locally, to Drive, or directly to a Google Sheet (no permanent table needed).

## Views (virtual tables)

A **view** is a virtual table defined by a SQL query (source: Google Cloud Platform - Tables in BigQuery.md):

- No physical storage → **no storage cost**.
- Querying a view re-runs the underlying query.
- Useful for **hiding complexity** (joins, business logic) and **fine-grained access control** via [[bigquery-authorized-views]].

Create one via the Query Editor → **Save View** → choose project/dataset/name.

## External tables (not in raw)

A table **definition** that points to data in [[Cloud Storage|Cloud Storage]], Google Drive, [[../databases/cloud-sql|Cloud SQL]], or [[../databases/cloud-bigtable|Bigtable]]. BigQuery reads the data on demand — see [[bigquery-external-data]].

## Materialized views (not in raw)

Pre-computed views that BigQuery refreshes incrementally. Faster than views, cheaper than full re-aggregation; useful for dashboards.

## Table snapshots (not in raw)

Lightweight, point-in-time copies. Useful for backups and testing schema migrations.

## Comparison

| Type | Storage cost | Sharable | Query cost on read | Use case |
| --- | --- | --- | --- | --- |
| **Temporary** | None | No | Cached (free if unchanged) | Default for ad-hoc queries |
| **Permanent** | Yes | Yes (IAM) | Standard | Persistent results, multi-user data |
| **View** | None | Yes (IAM) | Re-runs underlying query | Logic encapsulation, access filtering |
| **Materialized view** | Small | Yes | Pre-computed (cheaper) | Dashboards, recurring aggregates |
| **External table** | None (data in source) | Yes | Read-from-source (often slower) | Federated, no-ETL access |
| **Snapshot** | Delta only | Yes | Standard | Backup, time-travel |

## Interesting Facts

- Temporary table expiry can be **changed in dataset defaults**; if a query result is large and important, BigQuery may even refuse to cache it.
- Views are **inlined** at query time — a view of a view of a view is fully expanded by the planner. Excessive nesting hurts performance and readability.
- **Authorized views** ([[bigquery-authorized-views]]) are how you share filtered data with users who can't see the underlying table directly.

## Interview Questions can be asked

1. Difference between a **view** and a **materialized view** in BigQuery.
2. Why are temporary tables free but permanent tables not?
3. When would you choose an **external table** over loading data?
4. How would you implement row-level security with views?

## Related pages

> [!grid]
>
>> [!card] BigQuery hub
>> [[bigquery|BigQuery]]
>
>
>> [!card] BigQuery sub-pages
>> [[bigquery-loading-data|Loading Data]], [[bigquery-external-data|External Data]], [[bigquery-authorized-views|Authorized Views]], [[bigquery-iam|BigQuery IAM]], [[bigquery-query-management|Query Management]]

