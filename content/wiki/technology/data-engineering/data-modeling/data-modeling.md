---
title: Data Modeling
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Data Modeling
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - Schema
banner:
publish: true
---

> "Life begins at the end of our comfort zone."
> <cite>— Neale Donald Walsch</cite>

---

**Data Modeling** is the process of mapping out an information system and how its parts are connected. Data models are typically illustrated as **entity-relationship diagrams** (ERDs) for relational databases (source: Concepts/Data Modeling/Data Modeling.md).

## Why it matters

A good data model:

- **Reduces errors** in software and database development.
- **Increases consistency** in documentation and system design.
- **Improves application + DB performance**.
- **Eases data mapping** across the organization.
- **Improves communication** between developers and BI teams.
- Eases conceptual / logical / physical design.

## Three model levels

### Conceptual

Big-picture view: **what** the system contains, **how** it's organized, **which** business rules. Created during requirements gathering. Includes **entity classes**, characteristics, constraints, relationships, security + integrity requirements.

### Logical

More detailed: data attributes (types, lengths), relationships among entities, formal notation (ERD, IDEF1X). Independent of any specific DBMS. Useful for warehouse / reporting design. Often **omitted in agile/DevOps** workflows.

### Physical

Least abstract: **schema for actual storage**. Includes DBMS-specific properties (indexes, partitions, performance tuning), associative tables, primary/foreign keys.

## Modeling techniques

| Technique | Best for |
| --- | --- |
| [[relational-modeling\|Relational Modeling]] | OLTP, transactional consistency |
| [[dimensional-modeling\|Dimensional Modeling]] | Analytics warehouses (Kimball star/snowflake) |
| [[data-vault-modeling\|Data Vault Modeling]] | Auditable, change-resilient warehouses (Linstedt) |
| [[one-big-table\|One Big Table]] | Read-heavy analytics, columnar warehouses |
| [[activity-schema\|Activity Schema]] | Single-table event modeling |
| Unified Star Schema (USS) | Subject-area unified analytical model |

## Modeling tools

- [Oracle Data Modeler](https://www.oracle.com/database/sqldeveloper/technologies/sql-data-modeler/download/)
- [dbdiagram.io](https://dbdiagram.io/home) — DBML-based, lightweight
- [Hackolade](https://hackolade.com/) — multi-paradigm
- **Lucidchart, Miro** — generic but useful for conceptual stage

## Cardinality

[[cardinality|Cardinality]] is a key data-modeling concept describing **how many rows** in one entity relate to rows in another (1:1, 1:N, M:N).

## Normalization vs Denormalization

- [[normalization]] — reduce redundancy; for OLTP.
- [[denormalization]] — increase redundancy for read speed; for OLAP / analytics.

The choice depends on **workload type**: write-heavy vs read-heavy.

## Interview Questions

1. **Conceptual** vs **logical** vs **physical** model — give an example of each.
2. **Relational** vs **dimensional** modeling — when prefer which?
3. **Kimball** vs **Inmon** approaches.
4. Why does dimensional modeling violate normalization on purpose?

## Related pages

> [!multi-column]
>
>> [!card] Modeling techniques
>> [[relational-modeling|Relational Modeling]], [[dimensional-modeling|Dimensional Modeling]], [[data-vault-modeling|Data Vault Modeling]], [[one-big-table|One Big Table]], [[activity-schema|Activity Schema]]
>
>
>> [!card] Foundations
>> [[normalization|Normalization]], [[denormalization|Denormalization]], [[cardinality|Cardinality]]
>
>
>> [!card] Theory
>> [[../../databases/database-normalization|Database Normalization (theory)]], [[../../databases/acid-properties|ACID Properties]]
>
>
>> [!card] People
>> [[../../../people/edgar-f-codd|Edgar F. Codd]], [[../../../people/ralph-kimball|Ralph Kimball]], [[../../../people/dan-linstedt|Dan Linstedt]]
>
>
>> [!card] Books
>> [[../../../books/the-data-warehouse-toolkit|The Data Warehouse Toolkit]]

