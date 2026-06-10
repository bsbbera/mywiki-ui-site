---
title: Relational Modeling
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Relational Modeling
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - OLTP
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
publish: true
cssclass: wide-page
---

> "To be able to forget means sanity."
> <cite>— Jack London</cite>

---

<span class="at-kicker">Data Modeling · Relational Pattern</span>

# Relational Modeling

<p class="at-lead">
Relational modeling revolves around using tables, columns, and rows to represent data. Each table denotes entities or subjects; every row signifies an individual record. Tables are connected via unique identifiers (primary keys) referenced by foreign keys — the foundation of every RDBMS.
</p>

<span class="at-stat">ACID</span> guarantees &nbsp;·&nbsp; <span class="at-stat">SQL</span> standard &nbsp;·&nbsp; <span class="at-mark">E-R diagrams and normalized tables — the foundation of every RDBMS</span>

> [!tip] When to Use Relational Modeling
> Use relational modeling for OLTP applications (banking, e-commerce, SaaS, ERP) where you need ACID across multiple tables. Perfect for transactional workloads with constant inserts, updates, and deletes where accuracy and reliability are paramount.

<span class="at-kicker">Core Concept</span>

## Fundamentals

A core component: **[[normalization]]** — reducing data redundancy.

<span class="at-kicker">Trade-offs</span>

## Advantages

> [!grid|cols2]
>
> > [!card|section] Transactional Excellence
> > Great for **transactional / operational workloads** with constant inserts, updates, deletes.
>
> > [!card|section] Complex Queries
> > Supports **complex queries + joins** across related tables.
>
> > [!card|section] Accuracy
> > Useful where **accuracy + reliability** are paramount.
>
> > [!card|section] Standardized
> > Standardized via **SQL** across all major databases.
>
> > [!card|section] Consistency
> > Strong consistency + ACID guarantees.

## Disadvantages

> [!grid|cols2]
>
> > [!card|section] Analytics Struggles
> > **Analytical queries become slow** at large scale (joins explode in cost).
>
> > [!card|section] Schema Rigidity
> > Schema migrations are painful as the schema grows.
>
> > [!card|section] Scaling Limits
> > Hard to scale horizontally — usually scaled vertically.

<span class="at-kicker">Decision Framework</span>

## When to use

- OLTP applications (banking, e-commerce, SaaS, ERP).
- Anywhere you need ACID across multiple tables.
- Reporting on small datasets.

## When NOT to use

- Petabyte-scale analytics → use [[dimensional-modeling|dimensional]] or [[one-big-table|OBT]] in a [[../data-architecture/data-warehouse|warehouse]].
- Highly variable schemas → [[../data-storage/document-database|document]] or [[../data-storage/key-value-database|KV]] DBs.
- Time-series / IoT → [[../data-storage/timeseries-database|TSDB]] or [[../data-storage/wide-column-database|wide-column]].

<span class="at-kicker">Patterns</span>

## Common patterns

> [!grid|cols3]
>
> > [!card|section] 3NF for OLTP
> > See [[../../databases/database-normalization|Normalization]].
>
> > [!card|section] EAV
> > Entity-attribute-value — flexible schema; abuse-prone.
>
> > [!card|section] Polymorphic Associations
> > Single FK references multiple tables; controversial pattern.

## Modern relational + JSON

Postgres + MySQL added **JSON columns** that combine relational structure with document flexibility. Often the right answer for "mostly relational with one quirky field".

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **Primary key** vs **foreign key** — purpose of each.
2. Why does relational modeling struggle at PB-scale analytics?
3. **3NF** vs **denormalized** — when each wins.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister modeling techniques
>> [[data-modeling|Data Modeling]], [[dimensional-modeling|Dimensional Modeling]], [[normalization|Normalization]], [[denormalization|Denormalization]]
>
>
>> [!card] Storage + theory
>> [[../data-storage/relational-database|Relational Database]], [[../../databases/database-normalization|Database Normalization]], [[../../databases/acid-properties|ACID Properties]]
>
>
>> [!card] People
>> [[../../../people/edgar-f-codd|Edgar F. Codd]]
