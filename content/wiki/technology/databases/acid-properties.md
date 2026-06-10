---
title: ACID Properties
Created:
  - 2026-04-27
date modified: Friday, June 5th 2026, 6:14:21 pm
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
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Sometimes success isn't about making the right decision, it's more about making some decision."
> <cite>— Robin Sharma</cite>

---

<span class="at-kicker">Database Theory · ACID</span>

# ACID Properties

<p class="at-lead">
ACID is the canonical set of properties a database transaction must satisfy to guarantee data integrity — Atomicity, Consistency, Isolation, Durability. The acronym was coined by Theo Härder and Andreas Reuter in their 1983 paper and has been the foundation of transactional database design ever since.
</p>

<span class="at-stat">1983</span> coined by Härder & Reuter &nbsp;·&nbsp; <span class="at-stat">4</span> fundamental guarantees &nbsp;·&nbsp; <span class="at-mark">Atomicity, Consistency, Isolation, Durability — the guarantees that make databases trustworthy</span>

A **transaction** is a logical unit of work — one or more reads/writes that the database treats as a single, indivisible operation.

<span class="at-kicker">Core Concepts</span>

## The Four Properties

> [!grid|cols2]
>
>> [!card|section] **Atomicity** — All-or-Nothing
>> A transaction is **all or nothing**. Either every operation succeeds (**commit**) or none of them are applied (**rollback / abort**). There is no partial state.
>>
>> **Example**: Transfer $100 from account `X` to `Y`. The transaction `T = T1 (debit X) + T2 (credit Y)` must either complete both steps or undo `T1`. If `T1` succeeds but `T2` fails, the whole transaction rolls back — `X` is restored. Without atomicity, money disappears.
>>
>> **Enforced by**: the **Transaction Manager** (write-ahead log, undo/redo).
>
>> [!card|section] **Consistency** — Valid → Valid
>> Every transaction takes the database from one **valid state** to another. A valid state respects all constraints: primary keys, foreign keys, `CHECK`, `NOT NULL`, custom triggers, etc.
>>
>> **Example**: A bank invariant says "total balance is constant under transfers." If `X = 500, Y = 200, total = 700` and we transfer 100 from X to Y, after commit: `X = 400, Y = 300, total = 700`. ✓
>>
>> A transaction that would violate a constraint is **rolled back** to keep the database consistent.
>>
>> **Enforced by**: the **application programmer** (defining constraints + writing valid logic). The DB engine enforces declared constraints; you write transactions that don't violate them.
>
>> [!card|section] **Isolation** — Concurrent Safety
>> Transactions running **concurrently** must produce the same result as if they ran **serially** (one at a time). A transaction's intermediate state must be invisible to others until it commits.
>>
>> The **canonical anomalies** isolation prevents:
>>
>> | Anomaly | What goes wrong |
>> | --- | --- |
>> | **Dirty read** | T1 reads data written by T2 before T2 commits; if T2 rolls back, T1 has a phantom value |
>> | **Non-repeatable read** | T1 reads a row twice; T2 modifies it between reads; T1 sees different values |
>> | **Phantom read** | T1 runs a range query twice; T2 inserts a matching row in between; T1 sees a "phantom" |
>> | **Lost update** | Two transactions read-then-write; the later commit silently overwrites the earlier |
>>
>> **Example**: `X = 500, Y = 500`. `T` transfers $50 from X to Y. Concurrently `T''` reads X and Y to compute the total. Without isolation, `T''` may read `X = 500, Y = 550` (totalling 1050), or `X = 450, Y = 500` (totalling 950) — neither correct. Isolation forces `T''` to see either both old or both new values: 1000 either way.
>>
>> **Enforced by**: the **Concurrency Control Manager** — typically via locking (2PL), MVCC (multi-version), or optimistic concurrency.
>
>> [!card|section] **Durability** — Committed = Permanent
>> Once a transaction commits, its effects **survive failures** — process crashes, OS reboots, disk corruption, power loss. Data is persisted to **non-volatile storage** (typically via a write-ahead log fsynced to disk).
>>
>> **Example**: After "transfer $100 from A to B" commits, the system crashes seconds later. On reboot, the transfer is still recorded.
>>
>> **Enforced by**: the **Recovery Manager** — write-ahead logging, checkpoints, replay on crash.

<span class="at-kicker">Implementation</span>

## Responsibility Matrix

| Property | Component responsible |
| --- | --- |
| Atomicity | Transaction Manager (logging, rollback) |
| Consistency | Application programmer (constraints, logic) |
| Isolation | Concurrency Control Manager (locking / MVCC) |
| Durability | Recovery Manager (WAL, checkpoints) |

<span class="at-kicker">Configuration</span>

## Isolation Levels

ANSI SQL defines four standard isolation levels with progressively stronger guarantees:

| Level | Dirty | Non-repeatable | Phantom |
| --- | --- | --- | --- |
| **READ UNCOMMITTED** | possible | possible | possible |
| **READ COMMITTED** | prevented | possible | possible |
| **REPEATABLE READ** | prevented | prevented | possible |
| **SERIALIZABLE** | prevented | prevented | prevented |

Modern databases add **SNAPSHOT ISOLATION** (Postgres' default repeatable read; SQL Server's snapshot mode) which uses MVCC to give serial-like reads without blocking. **Strict serializability** (Spanner's external consistency) is the strongest available — see [[../cloud/gcp/databases/cloud-spanner|Cloud Spanner]].

> [!note] Isolation Trade-offs
> Stronger isolation means better consistency but potentially lower concurrency. Most OLTP systems use READ COMMITTED or REPEATABLE READ as a balance. SERIALIZABLE is safest but can create significant lock contention.

<span class="at-kicker">Significance</span>

## Why ACID Matters

> [!grid|cols3]
>
>> [!card|section] Data Integrity
>> No partial updates, no corrupt states. Every transaction leaves the database in a valid configuration that respects all constraints.
>
>> [!card|section] Concurrency Control
>> Many users, one consistent answer. Concurrent transactions behave as if they ran one at a time, eliminating race conditions and anomalies.
>
>> [!card|section] Recovery & Fault Tolerance
>> Crashes don't lose committed work. Once a transaction commits, its effects survive any failure.

Critical use cases: **banking** (transfers, fraud), **e-commerce** (inventory, orders), **healthcare** (patient records).

<span class="at-kicker">Real-World</span>

## ACID in Practice

How GCP databases implement ACID at different scopes:

| Service | ACID scope |
| --- | --- |
| [[../cloud/gcp/databases/cloud-sql|Cloud SQL]] | Full ACID at the **single-instance** scope (MySQL/Postgres/SQL Server) |
| [[../cloud/gcp/databases/cloud-spanner|Cloud Spanner]] | Full ACID **globally distributed** — external consistency via **TrueTime + Paxos** |
| [[../cloud/gcp/databases/cloud-datastore|Datastore / Firestore]] | ACID **within an entity group** (ancestor queries / transactions); cross-group has limits |
| [[../cloud/gcp/databases/cloud-bigtable|Cloud Bigtable]] | ACID **only at the row level**; cross-row is eventually consistent — by design, for scale |
| [[../cloud/gcp/databases/memorystore|Memorystore]] | Redis MULTI/EXEC gives partial atomicity; NOT a durable transactional system |
| [[../cloud/gcp/analytics/bigquery|BigQuery]] | ACID at the **per-statement** level; supports multi-statement transactions since 2021 |

The sliding-scale trade-off: **stronger ACID guarantees ↔ harder to scale horizontally**. The Spanner breakthrough was demonstrating you can have both — at significant cost.

<span class="at-kicker">Paradigms</span>

## ACID vs BASE

The NoSQL counterpoint: **BASE** = **B**asically **A**vailable, **S**oft state, **E**ventual consistency. NoSQL systems often relax ACID to scale; modern systems (Spanner, CockroachDB, FoundationDB) prove relaxation isn't always required.

<span class="at-kicker">Deep Dive</span>

## Interesting Facts

- The "C" in ACID and the "C" in **CAP theorem** mean **different things**. ACID consistency = "respects constraints"; CAP consistency = "all nodes see the same data at the same time".
- **Spanner's external consistency** uses Google's atomic clocks (**TrueTime**) — see [[../cloud/gcp/databases/cloud-spanner|Cloud Spanner]] — to deliver globally serializable transactions, the strongest ACID guarantee in any production database.
- **Two-Phase Commit (2PC)** is the classical protocol for atomic distributed transactions; **Paxos / Raft** are its modern, fault-tolerant successors.
- **Write-Ahead Logging (WAL)** is the primary durability mechanism for Postgres, SQL Server, MySQL InnoDB, and most other engines.

<span class="at-kicker">Assessment</span>

## Interview Questions

1. State and define the four ACID properties.
2. Distinguish **dirty reads**, **non-repeatable reads**, and **phantom reads**.
3. What does **consistency** mean in ACID? How is it different from CAP consistency?
4. How does a database implement **durability**? (WAL, fsync, checkpoints)
5. What isolation level would you pick for an e-commerce checkout? Why?
6. Compare ACID guarantees in [[../cloud/gcp/databases/cloud-sql|Cloud SQL]], [[../cloud/gcp/databases/cloud-spanner|Spanner]], and [[../cloud/gcp/databases/cloud-bigtable|Bigtable]].
7. What is **2PL** vs **MVCC**?
8. Explain **Two-Phase Commit** and why it's blocking.
9. ACID vs BASE — when would you accept eventual consistency?

<span class="at-kicker">Continue Reading</span>

## Related Pages

> [!grid]
>
>> [!card] Theory
>> [[database-normalization|Database Normalization]], [[../software-engineering/cap-theorem|CAP Theorem]], [[../data-engineering/data-warehousing|Data Warehousing]]
>
>
>> [!card] GCP Services
>> [[../cloud/gcp/databases/cloud-sql|Cloud SQL]], [[../cloud/gcp/databases/cloud-spanner|Cloud Spanner]], [[../cloud/gcp/databases/cloud-datastore|Cloud Datastore]], [[../cloud/gcp/databases/cloud-bigtable|Cloud Bigtable]]
>
>
>> [!card] Concepts
>> [[../software-engineering/distributed-transactions|Distributed Transactions]], [[../software-engineering/concurrency-control|Concurrency Control]], [[../software-engineering/database-recovery|Database Recovery]]
