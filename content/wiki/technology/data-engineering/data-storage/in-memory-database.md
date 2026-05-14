---
title: In-Memory Database
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - In-Memory Database
  - IMDB
category: Computer Science
tags:
  - DataEngineering
  - Storage
  - Performance
  - NoSQL
banner:
dg-publish: true
---

---

An **in-memory database (IMDB)** stores data in **main memory (RAM)** instead of on disk, giving **far faster access speeds** than traditional databases. This makes it ideal for applications requiring **very high or real-time read/write speeds** — gaming, web apps, financial transactions (source: Concepts/Data Storage/In-Memory Database.md).

In contrast to disk-based DBs, in-memory DBs are limited by **available RAM** — typically tens to hundreds of GB per node, scaling horizontally for more.

## Advantages

- **Almost instant** — RAM is ~100,000× faster than disk.
- Sub-millisecond latency, often **100k+ ops/sec/node**.
- Ideal for time-critical workloads.

## Disadvantages

- **More expensive** per GB than disk.
- **Data loss risk** on failure — usually mitigated by snapshots, AOF, or replication.
- **Limited size** by RAM cost; petabytes are impractical.

## Use cases

(source: Concepts/Data Storage/In-Memory Database.md)

- **Cache** — front of slower DBs.
- **E-commerce** — session, cart, real-time inventory.
- **Gaming** — leaderboards, matchmaking.
- **Session management**.
- **Social chat / news feed** — Redis lists / streams.
- **Personalization** — millisecond response.
- **Adtech** — real-time bidding.

## Popular in-memory DBs

- **Redis** — open-source; rich data structures (strings, lists, hashes, sets, sorted sets, streams, HyperLogLog). The de-facto standard.
- **Memcached** — older, simpler; pure cache.
- **SAP HANA** — in-memory + HTAP for enterprise.
- **MemSQL / SingleStore** — in-memory + persistent storage.
- **Aerospike** — hybrid (RAM + SSD); ad-tech focus.

## Persistence options

Most "in-memory" DBs offer durability:

- **Snapshots** — periodic full dump to disk (Redis RDB).
- **AOF (append-only file)** — log every write op (Redis AOF).
- **Replication** — sync to another node for failover.
- **Hybrid** — hot data in RAM, cold data on SSD.

## In-memory on cloud

- **GCP**: [[../../../gcp/databases/memorystore|Memorystore]] for Redis / Memcached / Valkey.
- **AWS**: ElastiCache for Redis / Memcached, MemoryDB.
- **Azure**: Cache for Redis.

## In-memory vs On-disk

| | In-memory | On-disk |
| --- | --- | --- |
| Latency | ns–μs | ms |
| Size | RAM-bound | Disk-bound |
| Cost/GB | High | Low |
| Durability | Optional | Default |
| Use case | Cache, real-time | General-purpose |

## Interview Questions

1. **Redis** vs **Memcached** — distinguishing features.
2. **Cache-aside** vs **read-through** vs **write-through** patterns.
3. How does Redis achieve durability without sacrificing speed?
4. **Cache invalidation strategies**.

## Related pages

> [!multi-column]
>
>> [!card] Sister storage
>> [[key-value-database|Key-Value Database]], [[non-relational-database|Non-relational Database]], [[data-storage|Data Storage]]
>
>
>> [!card] Products
>> [[../../../gcp/databases/memorystore|Memorystore]], [[../../tools/databases-overview|Databases Overview]]

