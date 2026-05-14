---
title: One Big Table
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - One Big Table
  - OBT
  - Wide Tables
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - OLAP
banner:
publish: true
---

---

**One Big Table (OBT)** — sometimes called **wide tables** — is the practice of **joining all data needed for analytics** into a single very wide [[denormalization|denormalized]] table. OBT is a popular approach at larger scales and takes full advantage of [[../data-storage/column-oriented-database|columnar databases]]. It is often combined with or built on top of other techniques like [[dimensional-modeling|dimensional modeling]] or [[data-vault-modeling|Data Vault]] (source: Concepts/Data Modeling/One Big Table.md).

> **Tip**: OBT is great for **starting** a new warehouse — provide value immediately while a longer-term [[dimensional-modeling|dimensional]] or [[data-vault-modeling|vault]] approach is built underneath.

## When OBT shines

- **Columnar storage** — only scan the columns you select; wide tables are cheap.
- **Single-table query simplicity** — analysts don't write joins.
- **Predictable cost** — scan size = sum of selected column sizes.
- **AI / ML feature tables** — feature engineering is easier on a single wide source.

## Advantages

- **Query performance** — no joins required.
- **Simple to query** — minimal SQL complexity.
- Forgiving of analyst mistakes (no missing-join bugs).

## Disadvantages

- **Wide tables get messy** — 200+ columns become hard to read or maintain.
- **Doesn't adapt to changes well** — adding new sources usually requires rebuilding the table.
- **Update / backfill cost** — recomputing one column in a 5 TB table is expensive.
- **Schema drift across teams** — multiple OBTs accumulate; consolidation is painful.

## Building OBT in modern stacks

- **dbt** — typical pattern: stage → intermediate → mart, where the **mart** is an OBT-style table.
- **BigQuery / Snowflake / Redshift** — handle very wide schemas (1000+ columns) gracefully.
- **Materialized views** can derive OBTs automatically from underlying joins.

## OBT vs Star Schema

| | OBT | Star |
| --- | --- | --- |
| Joins at query time | None | Yes (fact + dim) |
| Storage | Higher (denormalized) | Lower |
| Maintenance | Higher (wide table) | Easier |
| Performance | Often best | Good |
| Flexibility | Lower | Higher |
| Modern columnar warehouses | Excellent | Excellent |

## Interesting Facts

- BigQuery's **STRUCT and ARRAY** types let you nest hierarchical data in OBT — e.g. orders with nested line items as ARRAY<STRUCT<...>> — preserving relational power without joins.
- **dbt's "snapshot" tables** can become OBT-style outputs.

## Interview Questions

1. **OBT** vs **star schema** — when each wins.
2. How does columnar storage make OBT cheap?
3. What's the maintenance cost of a 500-column OBT vs a star?
4. When would you nest STRUCT/ARRAY in OBT?

## Related pages

> [!multi-column]
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
>> [[../../../gcp/analytics/bigquery|BigQuery]]

