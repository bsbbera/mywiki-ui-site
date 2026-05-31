---
title: Database Sharding
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Sharding
  - Database Sharding
category: Computer Science
tags:
  - DataEngineering
  - Database
  - Scaling
banner:
publish: true
---

> "An inventor is a man who asks Why? of the universe and lets nothing stand between the answer and his mind."
> <cite>— Ayn Rand</cite>

---

**Database sharding** is the practice of **horizontally partitioning** a database across multiple machines, where each machine holds a **subset** of the data (a "shard"). It's how single-node databases scale beyond the limits of vertical scaling (source: Concepts/Software Engineering/Database Sharding.md — sparse).

## Why shard

A single Postgres / MySQL instance maxes out at:

- ~100s GB → 1 TB practical limits before slowdown.
- ~10 000 IOPS / connections.

Sharding splits the load:

```
Before:                After:
┌─────────────┐      ┌─────┐ ┌─────┐ ┌─────┐
│ One DB      │  →  │Shrd1│ │Shrd2│ │Shrd3│
│ 1 TB total  │      │ 1TB │ │ 1TB │ │ 1TB │
└─────────────┘      └─────┘ └─────┘ └─────┘
```

## Sharding strategies

### 1. Hash-based (key-based)

Hash the **shard key** (e.g. `user_id`); use modulo to pick shard.

- ✅ Even distribution.
- ❌ Resharding (rebalancing) is painful.

### 2. Range-based

Split by ranges of the shard key (`user_id 1–1M → shard 1`, etc.).

- ✅ Range queries efficient.
- ❌ Hot shards if data has skew.

### 3. Geographic / region-based

Shard by user's region.

- ✅ Data locality, GDPR compliance.
- ❌ Cross-region queries expensive.

### 4. Directory / lookup-based

A central service maps shard key → shard.

- ✅ Maximum flexibility.
- ❌ Lookup service is a bottleneck.

## Advantages

- **Scale beyond a single node** — TB → PB.
- **Higher throughput** — parallel writes across shards.
- **Fault isolation** — one shard down doesn't kill all.
- **Cost-effective** — many small machines vs one giant one.

## Disadvantages

- **Cross-shard queries** are slow + complex.
- **Cross-shard transactions** require 2PC or sagas.
- **Resharding** is operationally painful.
- **Foreign keys** across shards aren't enforced.
- **Hotspots** if shard key is poorly chosen.

## When sharding is the wrong answer

- **Read-heavy workloads** — try **read replicas** first.
- **Storage growth without write growth** — use **partitioning** (within a single DB).
- **Caching opportunities** — Redis in front of the DB.
- **Migration to NewSQL / managed scale-out**:
  - [[../cloud/gcp/databases/cloud-spanner|Cloud Spanner]] — auto-shards under the hood.
  - **CockroachDB**, **YugabyteDB** — same.
  - **Vitess** (used by YouTube) for MySQL.
  - **Citus** for Postgres.

These give you sharding's benefits without the manual pain.

## Sharding patterns to know

- **Consistent hashing** — minimize key remapping when adding/removing shards.
- **Vitess** — popular MySQL sharding proxy.
- **Citus** — Postgres extension that adds sharding.
- **MongoDB sharded clusters**.
- **Cassandra / DynamoDB** — auto-shard out of the box.

## Interview Questions

1. **Sharding** vs **partitioning** — clarify.
2. **Hash** vs **range** vs **geographic** sharding — when each.
3. Why is **resharding** painful?
4. How does **Spanner** avoid manual sharding?
5. **Cross-shard transactions** — how would you implement?

## Related pages

> [!multi-column]
>
>> [!card] Distributed-systems
>> [[horizontal-scaling|Horizontal Scaling]], [[vertical-scaling|Vertical Scaling]], [[cap-theorem|CAP Theorem]]
>
>
>> [!card] Storage
>> [[../data-engineering/data-storage/relational-database|Relational Database]], [[../data-engineering/data-storage/non-relational-database|Non-relational Database]]
>
>
>> [!card] Products
>> [[../cloud/gcp/databases/cloud-spanner|Cloud Spanner]]
>
>
>> [!card] Books
>> [[../../books/designing-data-intensive-applications|DDIA]]

