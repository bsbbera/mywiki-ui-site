---
title: Normalization (Data Modeling)
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Database Normalization
  - Data Normalization
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - OLTP
banner:
publish: true
---

> "Be like a postage stamp. Stick to it until you get there."
> <cite>— Bob Proctor</cite>

---

**Normalization** is the process of organizing data in a database to **reduce redundancy** and **improve data integrity**, making the database design simpler, faster, and more accurate. Since inserts/updates/deletes occur rapidly in [[../data-processing/online-transaction-processing|OLTP]] systems, normalization is particularly important for those workloads (source: Concepts/Data Modeling/Normalization.md).

> For **the full theoretical treatment** — anomalies, normal forms 1NF → BCNF → 5NF, formal definitions — see the canonical page: [[../../databases/database-normalization|Database Normalization (DBMS theory)]].

## In one paragraph

Take a wide table that mixes data about multiple entities; **split** it into multiple narrow tables, each holding facts about exactly one entity; **link** them via foreign keys. The result: every fact is stored exactly once.

## Steps

(source: Concepts/Data Modeling/Normalization.md)

1. Divide data into tables based on relationships.
2. Each table contains only **related** data.
3. Each column has a **specific purpose** (single piece of information).
4. Avoid **repeating groups** of information.

## Advantages

- Minimized redundancy and null values.
- More **compact** database structure.
- **Simpler** queries (smaller, focused tables).
- **Faster** searching, sorting, indexing.
- Better **integrity** (one place to update).

## Disadvantages

- **Complex queries** can be slower because of more joins.
- Less suited for analytical / read-heavy workloads → [[denormalization]] wins there.

## Where it fits in the bigger picture

| Workload | Use |
| --- | --- |
| **OLTP** (transactional) | **Normalize** to 3NF / BCNF |
| **OLAP** (analytics) | **Denormalize** into star/snowflake/OBT |
| **Document store** | Embed (no formal NF) |
| **Wide-column / KV** | Skip relational rules entirely |

## Quick reference (linking to DBMS page)

| NF | Rule |
| --- | --- |
| **1NF** | Atomic columns |
| **2NF** | No partial-key dependencies |
| **3NF** | No transitive dependencies |
| **BCNF** | All determinants are super-keys |
| **4NF** | No multi-valued dependencies |
| **5NF** | No join dependencies |

Full examples and explanations: [[../../databases/database-normalization|Database Normalization]].

## Interview Questions

1. Walk through 1NF → 3NF with a concrete example.
2. Why do data warehouses **deliberately denormalize**?
3. **Normalization** vs **denormalization** — workload-driven choice.

## Related pages

> [!multi-column]
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

