---
title: One Big Table
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - One Big Table
  - OBT
  - Wide Tables
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - OLAP
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
cssclass: wide-page
---

> "The best mind-altering drug is the truth."
> <cite>— Lily Tomlin</cite>

---

<span class="at-kicker">Data Modeling · Anti-Pattern / Pattern</span>

# One Big Table

<p class="at-lead">
One Big Table (OBT) — sometimes called wide tables — is the practice of joining all data needed for analytics into a single very wide denormalized table. A popular approach at larger scales that takes full advantage of columnar databases, often combined with or built on top of dimensional modeling or Data Vault.
</p>

<span class="at-stat">Zero</span> query joins &nbsp;·&nbsp; <span class="at-stat">1000+</span> columns possible &nbsp;·&nbsp; <span class="at-mark">denormalize everything into one wide table — simple, fast, controversial</span>

> [!tip] When OBT Shines
> OBT is great for starting a new warehouse — provide value immediately while a longer-term dimensional or vault approach is built underneath. Columnar storage makes wide tables cheap (only scan selected columns), and AI/ML feature engineering is easier on a single wide source.

<span class="at-kicker">When OBT Shines</span>

## Advantages of the approach

> [!grid|cols2]
>
> > [!card|section] Columnar Storage
> > Only scan the columns you select; wide tables are cheap.
>
> > [!card|section] Query Simplicity
> > Single-table query simplicity — analysts don't write joins.
>
> > [!card|section] Predictable Cost
> > Scan size = sum of selected column sizes.
>
> > [!card|section] ML Features
> > AI / ML feature tables — feature engineering is easier on a single wide source.

<span class="at-kicker">Trade-offs</span>

## Advantages

> [!grid|cols2]
>
> > [!card|section] Query Performance
> > **No joins required** — fastest possible query path.
>
> > [!card|section] Query Simplicity
> > **Simple to query** — minimal SQL complexity.
>
> > [!card|section] Forgiving
> > Forgiving of analyst mistakes (no missing-join bugs).

## Disadvantages

> [!grid|cols2]
>
> > [!card|section] Table Mess
> > **Wide tables get messy** — 200+ columns become hard to read or maintain.
>
> > [!card|section] Change Resistance
> > **Doesn't adapt to changes well** — adding new sources usually requires rebuilding.
>
> > [!card|section] Update Cost
> > **Update / backfill cost** — recomputing one column in a 5 TB table is expensive.
>
> > [!card|section] Schema Drift
> > **Schema drift across teams** — multiple OBTs accumulate; consolidation is painful.

<span class="at-kicker">Implementation</span>

## Building OBT in modern stacks

> [!grid|cols3]
>
> > [!card|section] dbt Pattern
> > Stage → intermediate → mart, where the **mart** is OBT-style.
>
> > [!card|section] Cloud Warehouses
> > **BigQuery / Snowflake / Redshift** handle 1000+ column schemas gracefully.
>
> > [!card|section] Materialized Views
> > Can derive OBTs automatically from underlying joins.

## OBT vs Star Schema

| | OBT | Star |
| --- | --- | --- |
| Joins at query time | None | Yes (fact + dim) |
| Storage | Higher (denormalized) | Lower |
| Maintenance | Higher (wide table) | Easier |
| Performance | Often best | Good |
| Flexibility | Lower | Higher |
| Modern columnar warehouses | Excellent | Excellent |

<span class="at-kicker">Context</span>

## Interesting Facts

- BigQuery's **STRUCT and ARRAY** types let you nest hierarchical data in OBT — e.g., orders with nested line items as ARRAY<STRUCT<...>> — preserving relational power without joins.
- **dbt's "snapshot" tables** can become OBT-style outputs.

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **OBT** vs **star schema** — when each wins.
2. How does columnar storage make OBT cheap?
3. What's the maintenance cost of a 500-column OBT vs a star?
4. When would you nest STRUCT/ARRAY in OBT?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister modeling techniques
>> [[dimensional-modeling|Dimensional Modeling]], [[denormalization|Denormalization]], [[data-vault-modeling|Data Vault]], [[activity-schema|Activity Schema]]
>
>
>> [!card] Storage
>> [[../data-storage/column-oriented-database|Column-oriented Database]]
>
>
>> [!card] Products
>> [[../../cloud/gcp/analytics/bigquery|BigQuery]]
