---
title: Activity Schema
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Activity Schema
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - Analytics
banner:
dg-publish: true
publish: true
---
---

**Activity Schema** — created by **Ahmed Elsamadisi** — is a data-modeling standard designed to make modeling and analysis **simpler, faster, and more reliable** by representing all data as a **single time-series table** with one universal query pattern (source: Concepts/Data Modeling/Activity Schema.md).

## Core idea

Business concepts are represented as **`entity` doing an `activity`** ("a customer completed an order") — instead of facts or nouns ("orders", "products").

- **Activities** are built directly from source tables.
- They store **only their own data** and act as the **single source of truth** for that concept.
- All queries run against an **activity stream table**, joining activities through **time relationships**, not foreign keys.

## Example query pattern

> All customers who **completed an order** AND **submitted a support ticket** **before** their **next completed order**

In a star schema this would require multiple joins on dimensions, surrogate keys, and date ranges. In activity schema it's a temporal join on the single activity stream.

## Advantages

- **Simple** — one table to build, query, and maintain.
- **Performant** — no joins (with the right warehouse).
- **Universal** — same query pattern fits any analysis.
- **Forces event-driven thinking** — what *happened*, not what *exists*.

## Disadvantages

- **Requires JSON / variant column support** — Snowflake VARIANT, BigQuery STRUCT, Redshift SUPER.
- Not ideal for **PII / financial** data — having all data in one table can complicate access control.
- **Some BI tools** struggle with very large activity tables.
- **Niche** — much smaller community than dimensional or vault.

## When to use

- Customer journey, funnel, retention analyses.
- Product analytics where event order matters.
- Smaller orgs that want analytics fast without heavy modeling investment.

## When NOT to use

- Heavy OLTP requirements.
- Strict row/column-level security on subsets of data.
- Complex multi-grain numerical aggregations.

## Implementation tools

- **Narrator** — Elsamadisi's company; the canonical activity schema platform.
- Implementations on **Snowflake / BigQuery / dbt** are increasingly common.

## Sources

- [activityschema.com](https://www.activityschema.com/)
- [Activity Schema GitHub](https://github.com/ActivitySchema/ActivitySchema)

## Interview Questions

1. How does activity schema differ from a star schema?
2. What database features does activity schema **require**?
3. When would you choose activity schema over dimensional modeling?

## Related pages

> [!multi-column]
>
>> [!card] Sister modeling techniques
>> [[data-modeling|Data Modeling]], [[dimensional-modeling|Dimensional Modeling]], [[one-big-table|One Big Table]]
>
>
>> [!card] Event-driven concepts
>> [[../software-engineering/event-sourcing-pattern|Event Sourcing]], [[../data-processing/stream-data-processing|Stream Processing]]

