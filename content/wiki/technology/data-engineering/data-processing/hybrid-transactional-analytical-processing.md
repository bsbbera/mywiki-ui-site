---
title: Hybrid Transactional Analytical Processing (HTAP)
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - HTAP
  - Hybrid Transactional Analytical Processing
category: Computer Science
tags:
  - DataEngineering
  - Database
  - OLTP
  - OLAP
banner:
publish: true
---

---

**Hybrid Transactional Analytical Processing (HTAP)** is a database paradigm that handles **both [[online-transaction-processing|OLTP]] and [[online-analytical-processing|OLAP]] workloads on the same data system** — eliminating the traditional need for a separate ETL pipeline + warehouse for analytics (source: Concepts/Data Processing/Hybrid Transactional Analytical Processing.md).

The term was coined by **Gartner in 2014**.

## Why HTAP exists

Classic architecture:

```
[ OLTP DB ] --(ETL)--> [ Warehouse ] --(query)--> [ Analyst ]
```

This adds:

- **Latency** — reports lag real-time data by hours/days.
- **Cost** — two systems, two storage layers, ETL infrastructure.
- **Complexity** — pipeline failures, schema drift.

HTAP merges them:

```
[ HTAP DB ]  ─→ row-store for OLTP
              ─→ column-store for OLAP
              (same data, different views)
```

## How it works

Most HTAP systems maintain **two storage formats** of the same data:

- **Row store** — for fast OLTP point lookups + writes.
- **Column store** — for fast OLAP scans + aggregations.

Writes go to row store; **delta merging** propagates to column store. Queries route to whichever store fits the workload.

## Advantages

- **Real-time analytics** — query the live OLTP data; no ETL lag.
- **Simplified architecture** — one system, one source of truth.
- **Lower TCO** — no separate warehouse needed for some use cases.

## Disadvantages

- **More complex DB engine** — fewer choices, often expensive.
- **Workload interference** — heavy analytical queries can impact transactional latency without careful resource isolation.
- **Scale limits** — usually maxes out at ~tens of TB of OLAP data.
- **Less mature** than dedicated OLTP/OLAP systems for extreme workloads.

## HTAP examples

- **SAP HANA** — in-memory HTAP pioneer.
- **Oracle** with In-Memory Column Store option.
- **MemSQL / SingleStore** — HTAP marketed cloud-native.
- **TiDB** — open-source HTAP (uses TiKV for OLTP + TiFlash for OLAP).
- **Google AlloyDB** — Postgres-compatible with columnar engine for analytics.
- **YugabyteDB**, **CockroachDB** — limited HTAP capabilities.

## When to use HTAP

- **Real-time decision support** — fraud detection, dynamic pricing, personalization where reports must be live.
- **Mid-size data** — < 10 TB analytics; large enterprises still favor separate warehouses.
- **Operational analytics** — embedded into apps; "show this customer their lifetime spend" instantly.

## When NOT to use

- **PB-scale analytics** — dedicated warehouses ([[../../../gcp/analytics/bigquery|BigQuery]], Snowflake) outperform.
- **Complex ETL needs** — separate transformation layer cleaner.
- **Cost-sensitive** — HTAP DBs are usually pricier.

## Interesting Facts

- The Gartner HTAP definition (2014) catalyzed an entire DB-engine generation (TiDB, SingleStore, AlloyDB).
- **AlloyDB** combines Postgres OLTP with a columnar accelerator that auto-routes analytical queries.
- **Apache Doris** and **StarRocks** are open-source MPP analytics DBs with HTAP-adjacent capabilities.

## Interview Questions

1. **HTAP** vs separate OLTP + OLAP — trade-offs.
2. How does an HTAP DB internally support both workloads?
3. Why can HTAP fail at PB scale?
4. **TiDB** vs **AlloyDB** vs **SingleStore** — distinguishing features.

## Related pages

> [!multi-column]
>
>> [!card] Sister workloads
>> [[online-transaction-processing|OLTP]], [[online-analytical-processing|OLAP]]
>
>
>> [!card] Storage
>> [[../data-storage/relational-database|Relational Database]], [[../data-storage/column-oriented-database|Column-oriented Database]], [[../data-storage/in-memory-database|In-memory Database]]
>
>
>> [!card] Products
>> [[../../../gcp/databases/cloud-spanner|Cloud Spanner]]

