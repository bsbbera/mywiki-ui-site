---
title: Database Normalization
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
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
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "A self that goes on changing is a self that goes on living."
> <cite>— Virginia Woolf</cite>

---

<span class="at-kicker">Database Design · Normalization</span>

# Database Normalization

<p class="at-lead">
Database normalization is the process of organizing a relational schema to eliminate data redundancy and prevent insertion / update / deletion anomalies. It is one of the foundational ideas of relational database design, introduced by E. F. Codd in 1970–72.
</p>

<span class="at-stat">1970</span> introduced by Codd &nbsp;·&nbsp; <span class="at-stat">6</span> normal forms &nbsp;·&nbsp; <span class="at-mark">eliminate redundancy and update anomalies through progressive normal forms</span>

The mechanic is simple: **split tables** so every fact is stored exactly once, then **join** them when needed.

<span class="at-kicker">Problem Space</span>

## Why Normalize — Anomalies and Redundancy

The classic example uses a single `Employee_Department` table mixing employee data with department info to illustrate the four problems:

> [!grid|cols2]
>
>> [!card|section] Insertion Anomaly
>> Can't add a new HR department until you have an employee for it (because the row needs an employee key).
>
>> [!card|section] Update Anomaly
>> If HR moves to a new floor, you must update every employee row in HR; missing one corrupts the data.
>
>> [!card|section] Deletion Anomaly
>> Last IT employee leaves; deleting the row deletes the department record too.
>
>> [!card|section] Redundancy
>> Department location repeated for every employee in that department.

Normalization splits this into `Employees` and `Departments` tables, joined by `dept_id`. Each fact lives in exactly one place.

<span class="at-kicker">Objectives</span>

## Goal of Normalization

Eliminate the four anomalies by enforcing the rule **"every fact, once and only once"**. Side-effects:

> [!grid|cols3]
>
>> [!card|section] Smaller Storage
>> No duplicated values.
>
>> [!card|section] Consistent Data
>> Single source of truth per fact.
>
>> [!card|section] Simpler Updates
>> Change a value in one row.
>
>> [!card|section] Cleaner Schema
>> Clearer entity boundaries.
>
>> [!card|section] Standardization
>> Facilitates schema evolution and tooling.

<span class="at-kicker">Foundations</span>

## The Normal Forms

Each normal form is a **stricter** rule than the previous. A schema in `n+1NF` is also in `nNF`.

> [!grid|cols2]
>
>> [!card|section] 1NF — First Normal Form
>> Every attribute is **single-valued** (atomic). No nested tables, no comma-separated lists, no JSON-blob hacks.
>>
>> **Bad** (violates 1NF):
>> | StudentId | Name | Subjects |
>> | --- | --- | --- |
>> | 1 | Alice | "Math, Physics, English" |
>>
>> **Good** (1NF): Split into separate rows or a junction table.
>
>> [!card|section] 2NF — Second Normal Form
>> 1NF + **every non-key attribute is fully functionally dependent on the entire primary key**. Forbids "partial dependencies" on a composite key.
>>
>> **Bad** — composite key `(StudentId, CourseId)` with `StudentName` (depends only on `StudentId`, not the course):
>> | StudentId | CourseId | StudentName | Grade |
>> | --- | --- | --- | --- |
>> | 1 | CS101 | Alice | A |
>>
>> **Fix**: split into `Students(StudentId, StudentName)` and `Enrollments(StudentId, CourseId, Grade)`.
>
>> [!card|section] 3NF — Third Normal Form
>> 2NF + **no transitive dependency** for non-prime attributes. Every non-key attribute depends only on the key.
>>
>> Formally: for every non-trivial functional dependency `X → Y`, **either X is a super-key, or Y is a prime attribute**.
>>
>> **Bad** — `Employees(EmpId, DeptId, DeptName)` — `EmpId → DeptId → DeptName` is transitive; `DeptName` depends on the key only via `DeptId`.
>>
>> **Fix**: split into `Employees(EmpId, DeptId)` + `Departments(DeptId, DeptName)`.
>
>> [!card|section] BCNF — Boyce-Codd Normal Form
>> 3NF + for **every** non-trivial dependency `X → Y`, `X` must be a **super-key**.
>>
>> A slight strengthening of 3NF that handles edge cases where a non-prime attribute determines a prime attribute. Most "well-designed" 3NF schemas are also in BCNF.
>
>> [!card|section] 4NF — Fourth Normal Form
>> BCNF + **no multi-valued dependencies**.
>>
>> If a relation has two independent multi-valued attributes (e.g. an employee's `skills` and `languages`), 4NF requires storing them in separate tables.
>
>> [!card|section] 5NF — Fifth Normal Form
>> 4NF + **the relation cannot be losslessly decomposed any further** without join dependencies.
>>
>> Rare in practice; relevant for relations modeling complex many-to-many-to-many relationships.

> [!tip] Normalization Insight
> Most production OLTP schemas target 3NF or BCNF. Higher normal forms (4NF, 5NF) are primarily of theoretical interest and rarely needed in practice. Denormalization is often a deliberate choice for performance, not a failure of design.

<span class="at-kicker">Reference</span>

## Quick Reference

| NF | Adds the rule |
| --- | --- |
| **1NF** | Atomic attributes |
| **2NF** | No partial-key dependencies |
| **3NF** | No transitive dependencies |
| **BCNF** | All determinants are super-keys |
| **4NF** | No multi-valued dependencies |
| **5NF** | No join dependencies |

<span class="at-kicker">Application</span>

## Practical Advice

- **3NF or BCNF** is the standard target for OLTP schemas (e.g. [[../cloud/gcp/databases/cloud-sql|Cloud SQL]] applications).
- **Denormalize deliberately** for read-heavy workloads — caching, materialized views, derived columns. Always document why.
- **Analytics warehouses** (e.g. [[../cloud/gcp/analytics/bigquery|BigQuery]]) often use **denormalized star/snowflake schemas** — see [[../data-engineering/data-warehousing|Data Warehousing]]. Joins are expensive at PB scale; pre-aggregated wide tables win.
- **Document data** (Firestore, MongoDB) is **deliberately denormalized** — embedded documents reduce reads at the cost of update complexity. See [[../cloud/gcp/databases/cloud-datastore|Datastore]].
- **Wide-column** ([[../cloud/gcp/databases/cloud-bigtable|Bigtable]]) abandons the relational model entirely; "normal form" doesn't apply.

<span class="at-kicker">Trade-offs</span>

## Normalization vs Denormalization

| Goal | Choose |
| --- | --- |
| Transactional consistency, frequent writes | **Normalize** (3NF / BCNF) |
| Read-heavy analytics, billions of rows | **Denormalize** (star schema, materialized views) |
| Mobile / offline-first apps | **Denormalize** (embedded documents) |
| Schema evolves rapidly | Lean **normalized** (smaller migrations) |
| Sub-millisecond queries | Often **denormalize** (skip joins) |

<span class="at-kicker">Deep Dive</span>

## Interesting Facts

- **E. F. Codd** invented the relational model **and** the normal forms, then later argued for **6NF** and even introduced the term "denormalization is corruption" — a stance most modern engineers reject.
- **BCNF** is the work of **Raymond Boyce** and Codd, published in 1974.
- **Domain-key normal form (DKNF)** is the theoretical "ultimate" normal form (every constraint follows from domain + key constraints) — almost no real schema reaches it.
- Modern data warehouses ([[../cloud/gcp/analytics/bigquery|BigQuery]], Snowflake) deliberately use **star schemas** (1 fact + many denormalized dimensions) — joins are expensive at scale.

<span class="at-kicker">Assessment</span>

## Interview Questions

1. Explain the four anomalies normalization addresses.
2. Walk through 1NF → 2NF → 3NF → BCNF with an example.
3. What is a **functional dependency**? **Transitive dependency**?
4. When is **denormalization** the right choice?
5. Why do data warehouses use **star schemas** despite the redundancy?
6. Difference between **3NF** and **BCNF** — give an example where they differ.
7. How does normalization interact with [[acid-properties|ACID]]?

<span class="at-kicker">Continue Reading</span>

## Related Pages

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
>> [[../cloud/gcp/databases/cloud-sql|Cloud SQL]], [[../cloud/gcp/databases/cloud-spanner|Cloud Spanner]], [[../cloud/gcp/databases/cloud-datastore|Cloud Datastore]], [[../cloud/gcp/databases/cloud-bigtable|Cloud Bigtable]]
