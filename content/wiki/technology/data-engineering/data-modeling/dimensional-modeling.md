---
title: Dimensional Modeling
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Dimensional Model
  - Kimball Modeling
  - Star Schema
  - Snowflake Schema
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - OLAP
  - Warehouse
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
cssclass: wide-page
maturity: evergreen
---

> "Life begins at the end of our comfort zone."
> <cite>— Neale Donald Walsch</cite>

---

<span class="at-kicker">Data Modeling · Kimball Pattern</span>

# Dimensional Modeling

<p class="at-lead">
Dimensional modeling is the popular technique developed by Ralph Kimball for modeling data for analytics. At its core, it organizes data into fact tables (numerical, aggregable measures) and dimension tables (descriptive attributes), trading normalization for query speed.
</p>

<span class="at-stat">Star</span> + snowflake schemas &nbsp;·&nbsp; <span class="at-stat">SCD</span> patterns &nbsp;·&nbsp; <span class="at-mark">facts and dimensions — the star schema that powers most BI tools</span>

> [!tip] When to Use Dimensional Modeling
> Choose dimensional modeling for analytics warehouses where BI tools need fast, predictable queries. The denormalized structure reduces joins and simplifies analyst workflows. Perfect for historical tracking via slowly changing dimensions.

<span class="at-kicker">Schema Patterns</span>

## Schema patterns

> [!grid|cols3]
>
> > [!card|section] Star Schema
> > One fact + many denormalized dimensions (recommended default).
>
> > [!card|section] Snowflake Schema
> > Star + dimensions further normalized into hierarchies.
>
> > [!card|section] Galaxy Schema
> > Multiple facts sharing dimensions ("fact constellation").

## Star schema example

```
                      ┌──────────┐
                      │ DimDate  │
                      └────┬─────┘
   ┌───────────┐     ┌─────┴────────┐     ┌────────────┐
   │ DimCust   ├─────┤ FactSales    ├─────┤ DimProduct │
   └───────────┘     └────┬─────────┘     └────────────┘
                           │
                      ┌────┴─────┐
                      │ DimStore │
                      └──────────┘
```

- **Fact** — measures (units sold, revenue, clicks); high-cardinality; many rows.
- **Dimensions** — descriptive (date, customer, product); low cardinality; many fewer rows.

<span class="at-kicker">Trade-offs</span>

## Advantages

> [!grid|cols2]
>
> > [!card|section] Intuitive
> > Analysts grasp star schemas quickly.
>
> > [!card|section] Query Performance
> > Good performance for analytics — fewer joins, predictable shape.
>
> > [!card|section] History Tracking
> > Tracks history easily via slowly changing dimensions (SCD).

## Disadvantages

> [!grid|cols2]
>
> > [!card|section] Query Complexity
> > Multi-fact comparisons need careful conformity.
>
> > [!card|section] Storage Overhead
> > Cost of denormalization.
>
> > [!card|section] Maintenance
> > Adding new measures or dimensions requires care.

<span class="at-kicker">Slowly Changing Dimensions</span>

## SCD Patterns

Patterns for tracking how dimension attributes change over time:

| Type | Behavior | Use |
| --- | --- | --- |
| **Type 0** | Never changes | Static reference |
| **Type 1** | Overwrite | Don't care about history |
| **Type 2** | New row + effective dates | Track history |
| **Type 3** | Add prior-value column | Track 1 step back only |
| **Type 6** | Hybrid (Type 1 + 2 + 3) | Best of all |

<span class="at-kicker">Modern Context</span>

## Modern dimensional modeling

- **dbt** has become the de-facto tool for building dimensional models in cloud warehouses.
- The **medallion architecture's "gold" layer** is typically dimensional.
- **Wide tables (OBT)** challenge classic star schemas at petabyte scale.

## Inmon vs Kimball

| | Inmon (top-down) | Kimball (bottom-up) |
| --- | --- | --- |
| Approach | Centralized 3NF EDW first; marts second | Build dimensional marts directly; consolidate later |
| Modeling | Normalized | Dimensional (star) |
| Effort | High upfront | Faster delivery |
| Flexibility | Rigid | Flexible |

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **Star** vs **snowflake** schema — when prefer each?
2. **Fact table** vs **dimension table** — characteristics.
3. Walk through SCD Type 2 with an example.
4. Why denormalize? Doesn't normalization improve integrity?
5. **Inmon** vs **Kimball** approaches.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister modeling techniques
>> [[data-modeling|Data Modeling]], [[one-big-table|One Big Table]], [[data-vault-modeling|Data Vault]], [[denormalization|Denormalization]], [[normalization|Normalization]]
>
>
>> [!card] Architecture
>> [[../data-architecture/data-warehouse|Data Warehouse]], [[../data-architecture/data-mart|Data Mart]], [[../data-warehousing|Data Warehousing]]
>
>
>> [!card] Products
>> [[../../cloud/gcp/analytics/bigquery|BigQuery]], [[../../cloud/databricks/databricks|Databricks]]
>
>
>> [!card] People
>> [[../../../people/ralph-kimball|Ralph Kimball]], [[../../../people/bill-inmon|Bill Inmon]]
>
>
>> [!card] Books
>> [[../../../books/the-data-warehouse-toolkit|The Data Warehouse Toolkit]]
