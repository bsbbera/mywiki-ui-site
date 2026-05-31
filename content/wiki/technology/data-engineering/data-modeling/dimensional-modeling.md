---
title: Dimensional Modeling
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
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
banner:
publish: true
---

> "Life begins at the end of our comfort zone."
> <cite>— Neale Donald Walsch</cite>

---

**Dimensional modeling** is the popular technique developed by **Ralph Kimball** for modeling data for **analytics**. At its core, dimensional modeling organizes data into two types of tables: **fact tables** and **dimension tables**. Facts comprise **numerical, aggregable measures**; dimensions hold **descriptive attributes** of entities (source: Concepts/Data Modeling/Dimensional Modeling.md).

The key trade-off: dimensional modeling **[[denormalization|denormalizes]]** data to **speed up queries**.

## Schema patterns

| Pattern | Description |
| --- | --- |
| **Star schema** | One fact + many denormalized dimensions (recommended default) |
| **Snowflake schema** | Star + dimensions further normalized into hierarchies |
| **Galaxy schema** | Multiple facts sharing dimensions ("fact constellation") |

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

## Advantages

- **Intuitive** — analysts grasp star schemas quickly.
- **Good query performance** for analytics — fewer joins, predictable shape.
- **Tracks history** easily via **slowly changing dimensions** (SCD).

## Disadvantages

- **Complex to query** sometimes — multi-fact comparisons need careful conformity.
- **Storage overhead** from denormalization.
- **Maintenance** — adding new measures or dimensions requires care.

## Slowly Changing Dimensions (SCD)

Patterns for tracking how dimension attributes change over time:

| Type | Behavior | Use |
| --- | --- | --- |
| **Type 0** | Never changes | Static reference |
| **Type 1** | Overwrite | Don't care about history |
| **Type 2** | New row + effective dates | Track history |
| **Type 3** | Add prior-value column | Track 1 step back only |
| **Type 6** | Hybrid (Type 1 + 2 + 3) | Best of all |

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

## Interview Questions

1. **Star** vs **snowflake** schema — when prefer each?
2. **Fact table** vs **dimension table** — characteristics.
3. Walk through SCD Type 2 with an example.
4. Why denormalize? Doesn't normalization improve integrity?
5. **Inmon** vs **Kimball** approaches.

## Related pages

> [!multi-column]
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

