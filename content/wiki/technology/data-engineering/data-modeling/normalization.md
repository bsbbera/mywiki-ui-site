---
title: Normalization (Data Modeling)
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Database Normalization
  - Data Normalization
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - OLTP
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
publish: true
cssclass: wide-page
---

> "Be like a postage stamp. Stick to it until you get there."
> <cite>— Bob Proctor</cite>

---

<span class="at-kicker">Data Modeling · Design Principle</span>

# Normalization

<p class="at-lead">
Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. By splitting wide tables into multiple narrow tables linked via foreign keys, every fact is stored exactly once — essential for OLTP workloads with rapid inserts, updates, and deletes.
</p>

<span class="at-stat">1NF</span> to 5NF &nbsp;·&nbsp; <span class="at-stat">Zero</span> redundancy goal &nbsp;·&nbsp; <span class="at-mark">eliminate redundancy through progressive normal forms</span>

> [!tip] When to Normalize
> Normalize for OLTP transactional systems where write-heavy workloads need data integrity. Take a wide table mixing data about multiple entities, split it into narrow tables each holding facts about exactly one entity, link them via foreign keys. The result: every fact stored exactly once.

<span class="at-kicker">Core Concept</span>

## In one paragraph

Take a wide table that mixes data about multiple entities; **split** it into multiple narrow tables, each holding facts about exactly one entity; **link** them via foreign keys. The result: every fact is stored exactly once.

> For **the full theoretical treatment** — anomalies, normal forms 1NF → BCNF → 5NF, formal definitions — see the canonical page: [[../../databases/database-normalization|Database Normalization (DBMS theory)]].

<span class="at-kicker">Process</span>

## Steps

(source: Concepts/Data Modeling/Normalization.md)

> [!grid|cols2]
>
> > [!card|section] 1. Divide by Relationships
> > Divide data into tables based on relationships.
>
> > [!card|section] 2. Related Data Only
> > Each table contains only **related** data.
>
> > [!card|section] 3. Specific Purpose
> > Each column has a **specific purpose** (single piece of information).
>
> > [!card|section] 4. No Repeating Groups
> > Avoid **repeating groups** of information.

<span class="at-kicker">Trade-offs</span>

## Advantages

> [!grid|cols2]
>
> > [!card|section] Reduced Redundancy
> > Minimized redundancy and null values.
>
> > [!card|section] Compact Structure
> > More **compact** database structure.
>
> > [!card|section] Simpler Queries
> > **Simpler** queries (smaller, focused tables).
>
> > [!card|section] Faster Operations
> > **Faster** searching, sorting, indexing.
>
> > [!card|section] Better Integrity
> > Better **integrity** (one place to update).

## Disadvantages

> [!grid|cols2]
>
> > [!card|section] Join Overhead
> > **Complex queries** can be slower because of more joins.
>
> > [!card|section] OLAP Mismatch
> > Less suited for analytical / read-heavy workloads → [[denormalization]] wins there.

<span class="at-kicker">Workloads</span>

## Where it fits in the bigger picture

| Workload | Use |
| --- | --- |
| **OLTP** (transactional) | **Normalize** to 3NF / BCNF |
| **OLAP** (analytics) | **Denormalize** into star/snowflake/OBT |
| **Document store** | Embed (no formal NF) |
| **Wide-column / KV** | Skip relational rules entirely |

<span class="at-kicker">Normal Forms</span>

## Quick reference

| NF | Rule |
| --- | --- |
| **1NF** | Atomic columns |
| **2NF** | No partial-key dependencies |
| **3NF** | No transitive dependencies |
| **BCNF** | All determinants are super-keys |
| **4NF** | No multi-valued dependencies |
| **5NF** | No join dependencies |

Full examples and explanations: [[../../databases/database-normalization|Database Normalization]].

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. Walk through 1NF → 3NF with a concrete example.
2. Why do data warehouses **deliberately denormalize**?
3. **Normalization** vs **denormalization** — workload-driven choice.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[denormalization|Denormalization]], [[relational-modeling|Relational Modeling]], [[dimensional-modeling|Dimensional Modeling]]
>
>
>> [!card] Theory
>> [[../../databases/database-normalization|Database Normalization (theory)]], [[../../databases/acid-properties|ACID Properties]]
>
>
>> [!card] Workloads
>> [[../data-processing/online-transaction-processing|OLTP]], [[../data-processing/online-analytical-processing|OLAP]]
>
>
>> [!card] People
>> [[../../../people/edgar-f-codd|Edgar F. Codd]]
