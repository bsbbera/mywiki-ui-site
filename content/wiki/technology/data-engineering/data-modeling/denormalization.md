---
title: Denormalization
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Database Denormalization
  - Data Denormalization
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - OLAP
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
cssclass: wide-page
---

> "It all depends on what you choose to believe."
> <cite>— Spencer Johnson</cite>

---

<span class="at-kicker">Data Modeling · Performance Pattern</span>

# Denormalization

<p class="at-lead">
Denormalization is the process of combining data into wide tables optimized for read workloads. Best suited for OLAP systems where you need to analyze historical data, denormalized tables trade storage for query speed — the read-optimization technique.
</p>

<span class="at-stat">Fewer</span> joins &nbsp;·&nbsp; <span class="at-stat">Faster</span> reads &nbsp;·&nbsp; <span class="at-mark">trade storage for query speed — the read-optimization technique</span>

> [!tip] When to Denormalize
> Denormalize when analytical queries with many joins become slow at scale. A query doing 10 joins to assemble customer invoices might take hours for millions of rows. Pre-join and pre-aggregate into a wide table → query in seconds with no joins.

<span class="at-kicker">Core Concept</span>

## Why denormalize

A query that does 10 joins to assemble a customer's monthly invoice in a normalized OLTP DB might take milliseconds for one customer but **hours** for a million customers. Denormalize:

> [!grid|cols3]
>
> > [!card|section] Pre-join
> > Pre-join the customer + product + region + date data.
>
> > [!card|section] Pre-aggregate
> > Pre-aggregate (daily totals) for faster retrieval.
>
> > [!card|section] Wide Table Result
> > Resulting wide table → query in seconds with no joins.

The opposite of [[normalization]], and complementary — both are used, just in different layers.

<span class="at-kicker">Trade-offs</span>

## Advantages

> [!grid|cols2]
>
> > [!card|section] Faster Reads
> > **Faster reads** of historical / analytical data — fewer joins.
>
> > [!card|section] Simpler Queries
> > **Simpler queries** — analysts don't have to figure out join paths.
>
> > [!card|section] Better Compression
> > Better **column compression** (columnar warehouses love wide, repetitive columns).
>
> > [!card|section] Predictable Plans
> > Predictable query plans.

## Disadvantages

> [!grid|cols2]
>
> > [!card|section] Duplicate Data
> > **Duplicate data** — storage cost, integrity risk.
>
> > [!card|section] Expensive Updates
> > **Updates** are expensive — change a fact in many places.
>
> > [!card|section] Schema Ripple
> > **Schema changes** ripple — adding a column may require backfilling.

<span class="at-kicker">Patterns</span>

## Common denormalization patterns

> [!grid|cols3]
>
> > [!card|section] Star Schema
> > See [[dimensional-modeling]].
>
> > [!card|section] Snowflake Schema
> > Partial denormalization with hierarchy.
>
> > [!card|section] One Big Table
> > See [[one-big-table]] for extreme denormalization.
>
> > [!card|section] Materialized Views
> > Pre-computed denormalized aggregates.
>
> > [!card|section] Caching
> > Denormalize on the read path only.

## When NOT to denormalize

- OLTP source — keep [[normalization|normalized]].
- Highly volatile data with frequent updates.
- Strict storage/cost budgets.

## In modern warehouses

[[../../cloud/gcp/analytics/bigquery|BigQuery]], Snowflake, and Redshift all benefit massively from denormalization — their **columnar storage** + **query optimizers** are designed for wide tables. Joins still work but cost more.

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **Normalization** vs **denormalization** — when each wins.
2. How does columnar storage make denormalized tables cheap?
3. Walk through denormalizing a 3NF schema into a star schema.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
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
>> [[../../databases/database-normalization|Database Normalization (theory)]]
