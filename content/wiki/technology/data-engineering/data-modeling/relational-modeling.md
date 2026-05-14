---
title: Relational Modeling
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Relational Modeling
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - OLTP
banner:
dg-publish: true
---

---

**Relational modeling** revolves around using **tables, columns, and rows** to represent data. Each table denotes entities or subjects; every row signifies an individual record. Tables are connected via **unique identifiers** (primary keys) referenced by **foreign keys** (source: Concepts/Data Modeling/Relational Modeling.md).

A core component: **[[normalization]]** — reducing data redundancy.

## Advantages

- Great for **transactional / operational workloads** with constant inserts, updates, deletes.
- Supports **complex queries + joins**.
- Useful where **accuracy + reliability** are paramount.
- Standardized via **SQL**.
- Strong consistency + ACID guarantees.

## Disadvantages

- **Analytical queries become slow** at large scale (joins explode in cost).
- Schema migrations are painful as the schema grows.
- Hard to scale horizontally — usually scaled vertically.

## When to use

- OLTP applications (banking, e-commerce, SaaS, ERP).
- Anywhere you need ACID across multiple tables.
- Reporting on small datasets.

## When NOT to use

- Petabyte-scale analytics → use [[dimensional-modeling|dimensional]] or [[one-big-table|OBT]] in a [[../data-architecture/data-warehouse|warehouse]].
- Highly variable schemas → [[../data-storage/document-database|document]] or [[../data-storage/key-value-database|KV]] DBs.
- Time-series / IoT → [[../data-storage/timeseries-database|TSDB]] or [[../data-storage/wide-column-database|wide-column]].

## Common patterns

- **3NF** for OLTP — see [[../../../dbms/database-normalization|Normalization]].
- **EAV** (entity-attribute-value) — flexible schema; abuse-prone.
- **Polymorphic associations** — single FK references multiple tables; controversial.

## Modern relational + JSON

Postgres + MySQL added **JSON columns** that combine relational structure with document flexibility. Often the right answer for "mostly relational with one quirky field".

## Interview Questions

1. **Primary key** vs **foreign key** — purpose of each.
2. Why does relational modeling struggle at PB-scale analytics?
3. **3NF** vs **denormalized** — when each wins.

## Related pages

> [!multi-column]
>
>> [!card] Sister modeling techniques
>> [[data-modeling|Data Modeling]], [[dimensional-modeling|Dimensional Modeling]], [[normalization|Normalization]], [[denormalization|Denormalization]]
>
>
>> [!card] Storage + theory
>> [[../data-storage/relational-database|Relational Database]], [[../../../dbms/database-normalization|Database Normalization]], [[../../../dbms/acid-properties|ACID Properties]]
>
>
>> [!card] People
>> [[../../../people/edgar-f-codd|Edgar F. Codd]]

