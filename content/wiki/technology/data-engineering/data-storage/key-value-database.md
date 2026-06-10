---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Key-Value Database
Created:
  - 2026-04-29
aliases:
  - Key-Value Database
  - Key-Value Store
  - KV Store
category: Computer Science
tags:
  - data-engineering
  - concept
  - Storage
  - NoSQL
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Storage</span>

# Key-Value Database

<p class="at-lead">
A key-value (KV) database is a type of NoSQL database that stores data as a table where each unique key maps to a value. The simplest possible data model — optimized for lightning-fast lookups by key.
</p>

<span class="at-stat">O(1)</span> lookup complexity &nbsp;·&nbsp; <span class="at-stat">Sub-ms</span> response times &nbsp;·&nbsp; <span class="at-mark">The simplest data model that scales to billions of keys</span>

> [!tip] The KV Simplicity Principle
> If your access pattern is "look up value by exact key match", nothing beats a key-value store. The moment you need secondary indexes, complex queries, or joins, you've outgrown pure KV — though modern systems like DynamoDB have added these features.

<span class="at-kicker">Data Model</span>

## Data model

```
"user:42:session" → "abc123-def456..."
"cart:42"         → "[item1, item2, item3]"
"counter:visits"  → "1042389"
```

<span class="at-kicker">Trade-offs</span>

## Advantages vs Disadvantages

> [!grid|cols2]
>
> > [!card|section] Advantages
> > - **Optimized for simple lookups** by key (or key range).
> > - **Highly scalable** — distributes trivially via consistent hashing.
> > - **Sub-millisecond latency** when in-memory.
> > - **Simple API** — `GET`, `PUT`, `DELETE`.
>
> > [!card|section] Disadvantages
> > - **Bad at queries by non-key values** — no secondary indexes by default.
> > - Often **expensive** because they tend to run **in-memory**.
> > - **No relationships** — every "join" must be done in application code.

<span class="at-kicker">When to Use</span>

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

<span class="at-kicker">Popular Systems</span>

## Popular KV databases

- **Redis** — most popular; in-memory; rich data structures (lists, sets, hashes, streams).
- **Amazon DynamoDB** — managed, scalable; KV + document hybrid.
- **Memcached** — older, simpler than Redis.
- **etcd** / **Consul** — KV stores for distributed coordination.
- **Riak**, **IonDB** — niche / historical.

<span class="at-kicker">Cloud Platforms</span>

## KV on GCP

- [[../../cloud/gcp/databases/memorystore|Memorystore]] — managed Redis / Memcached / Valkey.
- [[../../cloud/gcp/databases/cloud-bigtable|Bigtable]] — KV-like at petabyte scale.
- [[../../cloud/gcp/databases/cloud-datastore|Datastore / Firestore]] — KV-style via entity keys.

<span class="at-kicker">Storage Types</span>

## In-memory vs persistent

- **In-memory** — Redis (with optional persistence), Memcached. Fastest. Limited by RAM.
- **Persistent** — RocksDB-backed, LevelDB. Slower but unlimited size.
- **Hybrid** — Redis with append-only-file (AOF) persistence; DynamoDB.

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **KV** vs **document** — when each.
2. **Redis** vs **Memcached** — distinguishing features.
3. Walk through caching strategies (read-through, write-through, write-back).
4. How does a KV store scale to billions of keys?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister NoSQL
>> [[non-relational-database|Non-relational Database]], [[in-memory-database|In-memory Database]], [[document-database|Document Database]], [[wide-column-database|Wide-column Database]]
>
>
>> [!card] Products
>> [[../../cloud/gcp/databases/memorystore|Memorystore]], [[../../cloud/gcp/databases/cloud-bigtable|Bigtable]], [[../../tools/databases-overview|Databases Overview]]
