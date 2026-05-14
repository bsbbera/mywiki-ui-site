---
title: ACID Properties
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 11:00:00 pm
aliases:
  - ACID
  - ACID Properties in DBMS
  - Transaction Properties
category: Computer Science
tags:
  - DBMS
  - Database
  - Transactions
  - Theory
  - DataEngineering
banner:
dg-publish: true
---

---

**ACID** is the canonical set of properties a database transaction must satisfy to guarantee data integrity — **A**tomicity, **C**onsistency, **I**solation, **D**urability. The acronym was coined by Theo Härder and Andreas Reuter in their 1983 paper and has been the foundation of transactional database design ever since (source: ACID Properties in DBMS.md).

A **transaction** is a logical unit of work — one or more reads/writes that the database treats as a single, indivisible operation.

## The four properties

### 1. Atomicity — all-or-nothing

A transaction is **all or nothing**. Either every operation succeeds (**commit**) or none of them are applied (**rollback / abort**). There is no partial state (source: ACID Properties in DBMS.md).

> **Example**: Transfer $100 from account `X` to `Y`. The transaction `T = T1 (debit X) + T2 (credit Y)` must either complete both steps or undo `T1`. If `T1` succeeds but `T2` fails, the whole transaction rolls back — `X` is restored.

Without atomicity, money disappears.

**Responsible for enforcing**: the **Transaction Manager** (write-ahead log, undo/redo).

### 2. Consistency — valid → valid

Every transaction takes the database from one **valid state** to another. A valid state respects all constraints: primary keys, foreign keys, `CHECK`, `NOT NULL`, custom triggers, etc. (source: ACID Properties in DBMS.md).

> **Example**: A bank invariant says "total balance is constant under transfers." If `X = 500, Y = 200, total = 700` and we transfer 100 from X to Y, after commit: `X = 400, Y = 300, total = 700`. ✓

A transaction that would violate a constraint is **rolled back** to keep the database consistent.

**Responsible for enforcing**: the **application programmer** (defining constraints + writing valid logic). The DB engine enforces declared constraints; you write transactions that don't violate them.

### 3. Isolation — concurrent transactions don't interfere

Transactions running **concurrently** must produce the same result as if they ran **serially** (one at a time). A transaction's intermediate state must be invisible to others until it commits (source: ACID Properties in DBMS.md).

The **canonical anomalies** isolation prevents:

| Anomaly | What goes wrong |
| --- | --- |
| **Dirty read** | T1 reads data written by T2 before T2 commits; if T2 rolls back, T1 has a phantom value |
| **Non-repeatable read** | T1 reads a row twice; T2 modifies it between reads; T1 sees different values |
| **Phantom read** | T1 runs a range query twice; T2 inserts a matching row in between; T1 sees a "phantom" |
| **Lost update** | Two transactions read-then-write; the later commit silently overwrites the earlier |

> **Example** (source's): `X = 500, Y = 500`. `T` transfers $50 from X to Y. Concurrently `T''` reads X and Y to compute the total. Without isolation, `T''` may read `X = 500, Y = 550` (totalling 1050), or `X = 450, Y = 500` (totalling 950) — neither correct. Isolation forces `T''` to see either both old or both new values: 1000 either way.

**Responsible for enforcing**: the **Concurrency Control Manager** — typically via locking (2PL), MVCC (multi-version), or optimistic concurrency.

### 4. Durability — committed = permanent

Once a transaction commits, its effects **survive failures** — process crashes, OS reboots, disk corruption, power loss. Data is persisted to **non-volatile storage** (typically via a write-ahead log fsynced to disk) (source: ACID Properties in DBMS.md).

> **Example**: After "transfer $100 from A to B" commits, the system crashes seconds later. On reboot, the transfer is still recorded.

**Responsible for enforcing**: the **Recovery Manager** — write-ahead logging, checkpoints, replay on crash.

## Responsibility matrix

| Property | Component responsible |
| --- | --- |
| Atomicity | Transaction Manager (logging, rollback) |
| Consistency | Application programmer (constraints, logic) |
| Isolation | Concurrency Control Manager (locking / MVCC) |
| Durability | Recovery Manager (WAL, checkpoints) |

(source: ACID Properties in DBMS.md)

## Isolation levels (not in raw — added)

ANSI SQL defines four standard isolation levels with progressively stronger guarantees:

| Level | Dirty | Non-repeatable | Phantom |
| --- | --- | --- | --- |
| **READ UNCOMMITTED** | possible | possible | possible |
| **READ COMMITTED** | prevented | possible | possible |
| **REPEATABLE READ** | prevented | prevented | possible |
| **SERIALIZABLE** | prevented | prevented | prevented |

Modern databases add **SNAPSHOT ISOLATION** (Postgres' default repeatable read; SQL Server's snapshot mode) which uses MVCC to give serial-like reads without blocking. **Strict serializability** (Spanner's external consistency) is the strongest available — see [[../gcp/databases/cloud-spanner|Cloud Spanner]].

## Why ACID matters

(source: ACID Properties in DBMS.md)

1. **Data integrity + consistency** — no partial updates, no corrupt states.
2. **Concurrency control** — many users, one consistent answer.
3. **Recovery + fault tolerance** — crashes don't lose committed work.

Critical use cases: **banking** (transfers, fraud), **e-commerce** (inventory, orders), **healthcare** (patient records).

## ACID in practice — how GCP databases implement it

| Service | ACID scope |
| --- | --- |
| [[../gcp/databases/cloud-sql|Cloud SQL]] | Full ACID at the **single-instance** scope (MySQL/Postgres/SQL Server) |
| [[../gcp/databases/cloud-spanner|Cloud Spanner]] | Full ACID **globally distributed** — external consistency via **TrueTime + Paxos** |
| [[../gcp/databases/cloud-datastore|Datastore / Firestore]] | ACID **within an entity group** (ancestor queries / transactions); cross-group has limits |
| [[../gcp/databases/cloud-bigtable|Cloud Bigtable]] | ACID **only at the row level**; cross-row is eventually consistent — by design, for scale |
| [[../gcp/databases/memorystore|Memorystore]] | Redis MULTI/EXEC gives partial atomicity; NOT a durable transactional system |
| [[../gcp/analytics/bigquery|BigQuery]] | ACID at the **per-statement** level; supports multi-statement transactions since 2021 |

The sliding-scale trade-off: **stronger ACID guarantees ↔ harder to scale horizontally**. The Spanner breakthrough was demonstrating you can have both — at significant cost.

## ACID vs BASE

The NoSQL counterpoint: **BASE** = **B**asically **A**vailable, **S**oft state, **E**ventual consistency. NoSQL systems often relax ACID to scale; modern systems (Spanner, CockroachDB, FoundationDB) prove relaxation isn't always required.

## Interesting Facts

- The "C" in ACID and the "C" in **CAP theorem** mean **different things**. ACID consistency = "respects constraints"; CAP consistency = "all nodes see the same data at the same time".
- **Spanner's external consistency** uses Google's atomic clocks (**TrueTime**) — see [[../gcp/databases/cloud-spanner|Cloud Spanner]] — to deliver globally serializable transactions, the strongest ACID guarantee in any production database.
- **Two-Phase Commit (2PC)** is the classical protocol for atomic distributed transactions; **Paxos / Raft** are its modern, fault-tolerant successors.
- **Write-Ahead Logging (WAL)** is the primary durability mechanism for Postgres, SQL Server, MySQL InnoDB, and most other engines.

## Interview Questions can be asked

1. State and define the four ACID properties.
2. Distinguish **dirty reads**, **non-repeatable reads**, and **phantom reads**.
3. What does **consistency** mean in ACID? How is it different from CAP consistency?
4. How does a database implement **durability**? (WAL, fsync, checkpoints)
5. What isolation level would you pick for an e-commerce checkout? Why?
6. Compare ACID guarantees in [[../gcp/databases/cloud-sql|Cloud SQL]], [[../gcp/databases/cloud-spanner|Spanner]], and [[../gcp/databases/cloud-bigtable|Bigtable]].
7. What is **2PL** vs **MVCC**?
8. Explain **Two-Phase Commit** and why it's blocking.
9. ACID vs BASE — when would you accept eventual consistency?

## Related pages

> [!multi-column]
>
>> [!card] Theory
>> [[database-normalization|Database Normalization]], [[../software-engineering/cap-theorem|CAP Theorem]], [[../data-engineering/data-warehousing|Data Warehousing]]
>
>
>> [!card] Storage
>> [[../data-engineering/data-storage/relational-database|Relational Database]], [[../data-engineering/data-storage/non-relational-database|Non-relational Database]]
>
>
>> [!card] Products
>> [[../gcp/databases/cloud-sql|Cloud SQL]], [[../gcp/databases/cloud-spanner|Cloud Spanner]], [[../gcp/databases/cloud-bigtable|Cloud Bigtable]], [[../gcp/databases/cloud-datastore|Cloud Datastore]]
>
>
>> [!card] People
>> [[../people/edgar-f-codd|Edgar F. Codd]], [[../people/eric-brewer|Eric Brewer]]
>
>
>> [!card] Books
>> [[../books/designing-data-intensive-applications|Designing Data-Intensive Applications]]

