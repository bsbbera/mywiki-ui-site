---
title: Database Normalization
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 11:00:00 pm
aliases:
  - Normalization
  - Normal Forms
  - 1NF
  - 2NF
  - 3NF
  - BCNF
category: Computer Science
tags:
  - DBMS
  - Database
  - SchemaDesign
  - Theory
  - DataEngineering
banner:
publish: true
---

> "A self that goes on changing is a self that goes on living."
> <cite>— Virginia Woolf</cite>

---

**Database normalization** is the process of organizing a relational schema to **eliminate data redundancy** and **prevent insertion / update / deletion anomalies**. It is one of the foundational ideas of relational database design, introduced by **E. F. Codd** in 1970–72 (source: Introduction to Database Normalization.md).

The mechanic is simple: **split tables** so every fact is stored exactly once, then **join** them when needed.

## Why normalize — anomalies and redundancy

The source uses a single `Employee_Department` table mixing employee data with department info to illustrate the four problems (source: Introduction to Database Normalization.md):

| Problem | Example |
| --- | --- |
| **Insertion anomaly** | Can't add a new HR department until you have an employee for it (because the row needs an employee key) |
| **Update anomaly** | If HR moves to a new floor, you must update every employee row in HR; missing one corrupts the data |
| **Deletion anomaly** | Last IT employee leaves; deleting the row deletes the department record too |
| **Redundancy** | Department location repeated for every employee in that department |

Normalization splits this into `Employees` and `Departments` tables, joined by `dept_id`. Each fact lives in exactly one place.

## Goal of normalization

Eliminate the four anomalies by enforcing the rule "**every fact, once and only once**" (source: Introduction to Database Normalization.md). Side-effects:

- **Smaller storage** — no duplicated values.
- **Consistent data** — single source of truth per fact.
- **Simpler updates** — change a value in one row.
- **Cleaner schema** — clearer entity boundaries.
- **Standardization** — facilitates schema evolution and tooling.

## The normal forms

Each normal form is a **stricter** rule than the previous. A schema in `n+1NF` is also in `nNF`.

### 1NF — First Normal Form

> Every attribute is **single-valued** (atomic). No nested tables, no comma-separated lists, no JSON-blob hacks.

Bad (violates 1NF):

| StudentId | Name | Subjects |
| --- | --- | --- |
| 1 | Alice | "Math, Physics, English" |

Good (1NF):

| StudentId | Name |   | StudentId | Subject |
| --- | --- | --- | --- | --- |
| 1 | Alice |   | 1 | Math |
|   |   |   | 1 | Physics |
|   |   |   | 1 | English |

(source: Introduction to Database Normalization.md)

### 2NF — Second Normal Form

> 1NF + **every non-key attribute is fully functionally dependent on the entire primary key**. Forbids "partial dependencies" on a composite key.

Bad — composite key `(StudentId, CourseId)` with `StudentName` (depends only on `StudentId`, not the course):

| StudentId | CourseId | StudentName | Grade |
| --- | --- | --- | --- |
| 1 | CS101 | Alice | A |

Fix: split into `Students(StudentId, StudentName)` and `Enrollments(StudentId, CourseId, Grade)`.

(source: Introduction to Database Normalization.md)

### 3NF — Third Normal Form

> 2NF + **no transitive dependency** for non-prime attributes. Every non-key attribute depends only on the key.

Formally: for every non-trivial functional dependency `X → Y`, **either X is a super-key, or Y is a prime attribute** (source: Introduction to Database Normalization.md).

Bad — `Employees(EmpId, DeptId, DeptName)` — `EmpId → DeptId → DeptName` is transitive; `DeptName` depends on the key only via `DeptId`.

Fix: split into `Employees(EmpId, DeptId)` + `Departments(DeptId, DeptName)`.

### BCNF — Boyce-Codd Normal Form

> 3NF + for **every** non-trivial dependency `X → Y`, `X` must be a **super-key**.

A slight strengthening of 3NF that handles edge cases where a non-prime attribute determines a prime attribute. Most "well-designed" 3NF schemas are also in BCNF (source: Introduction to Database Normalization.md).

### 4NF — Fourth Normal Form

> BCNF + **no multi-valued dependencies**.

If a relation has two independent multi-valued attributes (e.g. an employee's `skills` and `languages`), 4NF requires storing them in separate tables (source: Introduction to Database Normalization.md).

### 5NF — Fifth Normal Form (Project-Join Normal Form)

> 4NF + **the relation cannot be losslessly decomposed any further** without join dependencies.

Rare in practice; relevant for relations modeling complex many-to-many-to-many relationships (source: Introduction to Database Normalization.md).

## Quick reference

| NF | Adds the rule |
| --- | --- |
| **1NF** | Atomic attributes |
| **2NF** | No partial-key dependencies |
| **3NF** | No transitive dependencies |
| **BCNF** | All determinants are super-keys |
| **4NF** | No multi-valued dependencies |
| **5NF** | No join dependencies |

## Practical advice

- **3NF or BCNF** is the standard target for OLTP schemas (e.g. [[../cloud/gcp/databases/cloud-sql|Cloud SQL]] applications).
- **Denormalize deliberately** for read-heavy workloads — caching, materialized views, derived columns. Always document why.
- **Analytics warehouses** (e.g. [[../cloud/gcp/analytics/bigquery|BigQuery]]) often use **denormalized star/snowflake schemas** — see [[../data-engineering/data-warehousing|Data Warehousing]]. Joins are expensive at PB scale; pre-aggregated wide tables win.
- **Document data** (Firestore, MongoDB) is **deliberately denormalized** — embedded documents reduce reads at the cost of update complexity. See [[../cloud/gcp/databases/cloud-datastore|Datastore]].
- **Wide-column** ([[../cloud/gcp/databases/cloud-bigtable|Bigtable]]) abandons the relational model entirely; "normal form" doesn't apply.

## Normalization vs denormalization

| Goal | Choose |
| --- | --- |
| Transactional consistency, frequent writes | **Normalize** (3NF / BCNF) |
| Read-heavy analytics, billions of rows | **Denormalize** (star schema, materialized views) |
| Mobile / offline-first apps | **Denormalize** (embedded documents) |
| Schema evolves rapidly | Lean **normalized** (smaller migrations) |
| Sub-millisecond queries | Often **denormalize** (skip joins) |

## Interesting Facts

- **E. F. Codd** invented the relational model **and** the normal forms, then later argued for **6NF** and even introduced the term "denormalization is corruption" — a stance most modern engineers reject.
- **BCNF** is the work of **Raymond Boyce** and Codd, published in 1974.
- **Domain-key normal form (DKNF)** is the theoretical "ultimate" normal form (every constraint follows from domain + key constraints) — almost no real schema reaches it.
- Modern data warehouses ([[../cloud/gcp/analytics/bigquery|BigQuery]], Snowflake) deliberately use **star schemas** (1 fact + many denormalized dimensions) — joins are expensive at scale.

## Interview Questions can be asked

1. Explain the four anomalies normalization addresses.
2. Walk through 1NF → 2NF → 3NF → BCNF with an example.
3. What is a **functional dependency**? **Transitive dependency**?
4. When is **denormalization** the right choice?
5. Why do data warehouses use **star schemas** despite the redundancy?
6. Difference between **3NF** and **BCNF** — give an example where they differ.
7. How does normalization interact with [[acid-properties|ACID]]?

## Related pages

> [!grid]
>
>> [!card] Theory
>> [[acid-properties|ACID Properties]], [[../data-engineering/data-warehousing|Data Warehousing]]
>
>
>> [!card] Modeling
>> [[../data-engineering/data-modeling/normalization|Normalization (DE applied)]], [[../data-engineering/data-modeling/denormalization|Denormalization]], [[../data-engineering/data-modeling/relational-modeling|Relational Modeling]], [[../data-engineering/data-modeling/dimensional-modeling|Dimensional Modeling]]
>
>
>> [!card] Workloads
>> [[../data-engineering/data-processing/online-transaction-processing|OLTP]], [[../data-engineering/data-processing/online-analytical-processing|OLAP]]
>
>
>> [!card] People
>> [[../../people/edgar-f-codd|Edgar F. Codd]]
>
>
>> [!card] Products
>> [[../cloud/gcp/databases/cloud-sql|Cloud SQL]], [[../cloud/gcp/databases/cloud-spanner|Cloud Spanner]], [[../cloud/gcp/databases/cloud-datastore|Cloud Datastore]], [[../cloud/gcp/databases/cloud-bigtable|Cloud Bigtable]], [[../cloud/gcp/analytics/bigquery|BigQuery]]

