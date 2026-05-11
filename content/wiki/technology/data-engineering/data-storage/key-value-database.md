---
title: Key-Value Database
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Key-Value Database
  - Key-Value Store
  - KV Store
category: Computer Science
tags:
  - DataEngineering
  - Storage
  - NoSQL
banner:
dg-publish: true
publish: true
---
---

A **key-value (KV) database** is a type of [[non-relational-database|NoSQL]] database that stores data as a **table where each unique key maps to a value** (source: Concepts/Data Storage/Key-Value Database.md). The simplest possible data model.

```
"user:42:session" → "abc123-def456..."
"cart:42"         → "[item1, item2, item3]"
"counter:visits"  → "1042389"
```

## Advantages

- **Optimized for simple lookups** by key (or key range).
- **Highly scalable** — distributes trivially via consistent hashing.
- **Sub-millisecond latency** when in-memory.
- **Simple API** — `GET`, `PUT`, `DELETE`.

## Disadvantages

- **Bad at queries by non-key values** — no secondary indexes by default.
- Often **expensive** because they tend to run **in-memory**.
- **No relationships** — every "join" must be done in application code.

## When to use

- **Caching** — prevent repeated expensive computations.
- **Session storage** — fast read/write per user.
- **Shopping cart** — short-lived, key-scoped state.
- **Feature flags / config** — fast distributed reads.
- **Leaderboards** (with Redis sorted sets).

## Use cases

- Session attributes
- Shopping cart
- Cache layer in front of slower stores
- Distributed locks
- Pub/sub light messaging (Redis channels)

(source: Concepts/Data Storage/Key-Value Database.md)

## Popular KV databases

- **Redis** — most popular; in-memory; rich data structures (lists, sets, hashes, streams).
- **Amazon DynamoDB** — managed, scalable; KV + document hybrid.
- **Memcached** — older, simpler than Redis.
- **etcd** / **Consul** — KV stores for distributed coordination.
- **Riak**, **IonDB** — niche / historical.

## KV on GCP

- [[../../../gcp/databases/memorystore|Memorystore]] — managed Redis / Memcached / Valkey.
- [[../../../gcp/databases/cloud-bigtable|Bigtable]] — KV-like at petabyte scale.
- [[../../../gcp/databases/cloud-datastore|Datastore / Firestore]] — KV-style via entity keys.

## In-memory vs persistent

- **In-memory** — Redis (with optional persistence), Memcached. Fastest. Limited by RAM.
- **Persistent** — RocksDB-backed, LevelDB. Slower but unlimited size.
- **Hybrid** — Redis with append-only-file (AOF) persistence; DynamoDB.

## Interview Questions

1. **KV** vs **document** — when each.
2. **Redis** vs **Memcached** — distinguishing features.
3. Walk through caching strategies (read-through, write-through, write-back).
4. How does a KV store scale to billions of keys?

## Related pages

> [!multi-column]
>
>> [!card] Sister NoSQL
>> [[non-relational-database|Non-relational Database]], [[in-memory-database|In-memory Database]], [[document-database|Document Database]], [[wide-column-database|Wide-column Database]]
>
>
>> [!card] Products
>> [[../../../gcp/databases/memorystore|Memorystore]], [[../../../gcp/databases/cloud-bigtable|Bigtable]], [[../../tools/databases-overview|Databases Overview]]

