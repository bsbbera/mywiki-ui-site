---
title: Hybrid Transactional Analytical Processing (HTAP)
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - HTAP
  - Hybrid Transactional Analytical Processing
category: Computer Science
tags:
  - DataEngineering
  - Database
  - OLTP
  - OLAP
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Rewards and punishment is the lowest form of education."
> <cite>— Zhuangzi</cite>

---

<span class="at-kicker">Data Processing · Hybrid Pattern</span>

# Hybrid Transactional Analytical Processing (HTAP)

<p class="at-lead">
HTAP is a database paradigm that handles both OLTP and OLAP workloads on the same data system — eliminating the traditional ETL pipeline and warehouse lag so analytics can run on live operational data. The term was coined by Gartner in 2014.
</p>

<span class="at-stat">Coined 2014</span> by Gartner &nbsp;·&nbsp; <span class="at-stat">Dual Storage</span> row-store + column-store &nbsp;·&nbsp; <span class="at-mark">eliminate the ETL gap — run analytics on fresh transactional data in the same system</span>

---

<span class="at-kicker">MOTIVATION</span>

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

---

<span class="at-kicker">INTERNALS</span>

## How it works

Most HTAP systems maintain **two storage formats** of the same data:

- **Row store** — for fast OLTP point lookups + writes.
- **Column store** — for fast OLAP scans + aggregations.

Writes go to row store; **delta merging** propagates to column store. Queries route to whichever store fits the workload.

---

<span class="at-kicker">TRADE-OFFS</span>

## Advantages vs Disadvantages

> [!grid|cols2]
>
>> [!card|section] Advantages
>> - **Real-time analytics** — query the live OLTP data; no ETL lag
>> - **Simplified architecture** — one system, one source of truth
>> - **Lower TCO** — no separate warehouse needed for mid-size analytics
>> - **Operational analytics** — "show this customer their lifetime spend" instantly
>
>> [!card|section] Disadvantages
>> - **More complex DB engine** — fewer choices, often expensive
>> - **Workload interference** — heavy analytical queries can impact transactional latency without careful resource isolation
>> - **Scale limits** — usually maxes out at ~tens of TB of OLAP data
>> - **Less mature** than dedicated OLTP/OLAP systems for extreme workloads

---

<span class="at-kicker">ECOSYSTEM</span>

## HTAP examples

> [!grid|cols3]
>
>> [!card|section] Pioneers
>> - **SAP HANA** — in-memory HTAP pioneer
>> - **Oracle** with In-Memory Column Store option
>> - **MemSQL / SingleStore** — HTAP marketed cloud-native
>
>> [!card|section] Open Source
>> - **TiDB** — open-source HTAP using TiKV (OLTP) + TiFlash (OLAP)
>> - **Apache Doris** / **StarRocks** — open-source MPP with HTAP-adjacent capabilities
>
>> [!card|section] Cloud Native
>> - **Google AlloyDB** — Postgres-compatible with columnar engine that auto-routes analytical queries
>> - **YugabyteDB**, **CockroachDB** — limited HTAP capabilities

---

<span class="at-kicker">DECISION GUIDE</span>

## When to use HTAP

- **Real-time decision support** — fraud detection, dynamic pricing, personalization where reports must be live.
- **Mid-size data** — < 10 TB analytics; large enterprises still favor separate warehouses.
- **Operational analytics** — embedded into apps.

## When NOT to use

- **PB-scale analytics** — dedicated warehouses ([[../../cloud/gcp/analytics/bigquery|BigQuery]], Snowflake) outperform.
- **Complex ETL needs** — separate transformation layer is cleaner.
- **Cost-sensitive** — HTAP DBs are usually pricier.

> [!tip] HTAP sweet spot
> HTAP shines for mid-size companies (< 10 TB analytical data) that need operational analytics — dashboards embedded in apps, real-time fraud scores, live inventory views. Once you hit PB scale or need complex cross-system ETL, dedicated OLAP warehouses with separate ingestion pipelines remain the more scalable and cost-effective choice.

---

<span class="at-kicker">INSIGHTS</span>

## Interesting Facts

- The Gartner HTAP definition (2014) catalyzed an entire DB-engine generation (TiDB, SingleStore, AlloyDB).
- **AlloyDB** combines Postgres OLTP with a columnar accelerator that auto-routes analytical queries.
- **Apache Doris** and **StarRocks** are open-source MPP analytics DBs with HTAP-adjacent capabilities.

---

<span class="at-kicker">INTERVIEW PREP</span>

## Interview Questions

1. **HTAP** vs separate OLTP + OLAP — trade-offs.
2. How does an HTAP DB internally support both workloads?
3. Why can HTAP fail at PB scale?
4. **TiDB** vs **AlloyDB** vs **SingleStore** — distinguishing features.

---

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
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
>> [[../../cloud/gcp/databases/cloud-spanner|Cloud Spanner]]
