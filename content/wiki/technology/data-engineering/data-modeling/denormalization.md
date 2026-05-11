---
title: Denormalization
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Database Denormalization
  - Data Denormalization
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - OLAP
banner:
dg-publish: true
publish: true
---
---

**Denormalization** is the process of combining data into **wide tables** that are optimized for **read workloads**. Denormalized tables are best suited for [[../data-processing/online-analytical-processing|OLAP]] systems where you need to **analyze historical data**, since updates aren't required and **data redundancy is acceptable** (source: Concepts/Data Modeling/Denormalization.md).

The opposite of [[normalization]], and complementary — both are used, just in different layers.

## Why denormalize

A query that does 10 joins to assemble a customer's monthly invoice in a normalized OLTP DB might take milliseconds for one customer but **hours** for a million customers. Denormalize:

- **Pre-join** the customer + product + region + date data.
- **Pre-aggregate** (daily totals).
- Resulting wide table → query in seconds with no joins.

## Advantages

- **Faster reads** of historical / analytical data — fewer joins.
- **Simpler queries** — analysts don't have to figure out join paths.
- Better **column compression** (columnar warehouses love wide, repetitive columns).
- Predictable query plans.

## Disadvantages

- **Duplicate data** — storage cost, integrity risk.
- **Updates** are expensive — change a fact in many places.
- **Schema changes** ripple — adding a column may require backfilling.

## Common denormalization patterns

- **Star schema** — see [[dimensional-modeling]].
- **Snowflake schema** — partial denormalization.
- **One Big Table (OBT)** — see [[one-big-table]].
- **Materialized views** — pre-computed denormalized aggregates.
- **Caching** — denormalize on the read path only.

## When NOT to denormalize

- OLTP source — keep [[normalization|normalized]].
- Highly volatile data with frequent updates.
- Strict storage/cost budgets.

## In modern warehouses

[[../../../gcp/analytics/bigquery|BigQuery]], Snowflake, and Redshift all benefit massively from denormalization — their **columnar storage** + **query optimizers** are designed for wide tables. Joins still work but cost more.

## Interview Questions

1. **Normalization** vs **denormalization** — when each wins.
2. How does columnar storage make denormalized tables cheap?
3. Walk through denormalizing a 3NF schema into a star schema.

## Related pages

> [!multi-column]
>
>> [!card] Sister concepts
>> [[normalization|Normalization]], [[dimensional-modeling|Dimensional Modeling]], [[one-big-table|One Big Table]]
>
>
>> [!card] Storage
>> [[../data-storage/column-oriented-database|Column-oriented Database]]
>
>
>> [!card] Theory
>> [[../../../dbms/database-normalization|Database Normalization (theory)]]

