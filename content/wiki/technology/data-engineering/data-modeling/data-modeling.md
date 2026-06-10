---
title: Data Modeling
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Data Modeling
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - Schema
banner: https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1400
publish: true
cssclass: wide-page
---

> "Life begins at the end of our comfort zone."
> <cite>— Neale Donald Walsch</cite>

---

<span class="at-kicker">Data Engineering · Modeling</span>

# Data Modeling

<p class="at-lead">
Data Modeling is the process of mapping out an information system and how its parts are connected. Data models are typically illustrated as entity-relationship diagrams (ERDs) for relational databases — the blueprint that determines how data is structured, stored, and queried.
</p>

<span class="at-stat">3</span> model levels &nbsp;·&nbsp; <span class="at-stat">6+</span> techniques &nbsp;·&nbsp; <span class="at-mark">how you structure data determines how fast and easily it can be queried</span>

> [!tip] Why Modeling Matters
> A good data model reduces errors in development, increases consistency across systems, improves application and DB performance, eases data mapping organization-wide, and improves communication between developers and BI teams.

<span class="at-kicker">Model Levels</span>

## Three model levels

> [!grid|cols3]
>
> > [!card|section] Conceptual
> > Big-picture view: **what** the system contains, **how** it's organized, **which** business rules. Created during requirements gathering. Includes **entity classes**, characteristics, constraints, relationships, security + integrity requirements.
>
> > [!card|section] Logical
> > More detailed: data attributes (types, lengths), relationships among entities, formal notation (ERD, IDEF1X). Independent of any specific DBMS. Useful for warehouse / reporting design. Often **omitted in agile/DevOps** workflows.
>
> > [!card|section] Physical
> > Least abstract: **schema for actual storage**. Includes DBMS-specific properties (indexes, partitions, performance tuning), associative tables, primary/foreign keys.

<span class="at-kicker">Techniques</span>

## Modeling techniques

| Technique | Best for |
| --- | --- |
| [[relational-modeling\|Relational Modeling]] | OLTP, transactional consistency |
| [[dimensional-modeling\|Dimensional Modeling]] | Analytics warehouses (Kimball star/snowflake) |
| [[data-vault-modeling\|Data Vault Modeling]] | Auditable, change-resilient warehouses (Linstedt) |
| [[one-big-table\|One Big Table]] | Read-heavy analytics, columnar warehouses |
| [[activity-schema\|Activity Schema]] | Single-table event modeling |
| Unified Star Schema (USS) | Subject-area unified analytical model |

<span class="at-kicker">Foundations</span>

## Cardinality

[[cardinality|Cardinality]] is a key data-modeling concept describing **how many rows** in one entity relate to rows in another (1:1, 1:N, M:N).

## Normalization vs Denormalization

- [[normalization]] — reduce redundancy; for OLTP.
- [[denormalization]] — increase redundancy for read speed; for OLAP / analytics.

The choice depends on **workload type**: write-heavy vs read-heavy.

<span class="at-kicker">Tools</span>

## Modeling tools

> [!grid|cols2]
>
> > [!card|section] Oracle Data Modeler
> > Full-featured enterprise modeling.
>
> > [!card|section] [dbdiagram.io](https://dbdiagram.io/home)
> > DBML-based, lightweight diagramming.
>
> > [!card|section] [Hackolade](https://hackolade.com/)
> > Multi-paradigm modeling (NoSQL + relational).
>
> > [!card|section] Lucidchart / Miro
> > Generic but useful for conceptual stage.

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **Conceptual** vs **logical** vs **physical** model — give an example of each.
2. **Relational** vs **dimensional** modeling — when prefer which?
3. **Kimball** vs **Inmon** approaches.
4. Why does dimensional modeling violate normalization on purpose?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
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
