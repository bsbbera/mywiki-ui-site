---
title: Concurrency Control
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Concurrency Control
  - Transaction Management
  - Locking
  - Isolation
category: Computer Science
tags:
  - Databases
  - SoftwareEngineering
  - Concurrency
  - Transactions
banner:
publish: true
---

> [!quote]
> *The art of concurrency control is allowing many users to act as if they are the only user.*
> — Database Systems Researcher

# Concurrency Control

<p class="at-lead">
Concurrency Control is the mechanism by which database management systems ensure correct results when multiple transactions execute simultaneously. Without it, concurrent operations produce anomalies like lost updates, dirty reads, and inconsistent retrievals.
</p>

## Overview

The gold standard is the **ACID** properties, with isolation enforced through techniques like **two-phase locking** (2PL), **multiversion concurrency control (MVCC)**, **optimistic concurrency control**, and **timestamp ordering**. Each technique trades off between throughput, latency, and the strictness of isolation guarantees.

The SQL standard defines four isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) with corresponding anomaly risks. Modern databases like PostgreSQL and CockroachDB use MVCC by default, while some systems offer serialisable isolation through **serialisable snapshot isolation (SSI)** for strong correctness without excessive locking.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[acid-properties|ACID Properties]], [[database-transactions|Database Transactions]], [[locking|Locking]]
>
>> [!card] Parent topic
>> [[software-engineering|Software Engineering]]
>
>> [!card] See also
>> [[distributed-transactions|Distributed Transactions]], [[database-recovery|Database Recovery]], [[cap-theorem|CAP Theorem]]