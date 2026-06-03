---
title: Memorystore
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:05:00 pm
aliases:
  - Google Cloud Memorystore
  - Managed Redis
  - Managed Memcached
category: Cloud
tags:
  - GCP
  - Database
  - Cache
  - InMemory
  - DataEngineering
banner:
publish: true
---

> [!infobox|right]
> # Memorystore
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed in-memory data store (Redis, Memcached, Valkey) |
> | **Category** | Database / Cache |
> | **Launched** | 2018 (GA for Redis 2018) |
> | **Interface** | Redis/Memcached protocol, gcloud CLI, REST API |
> | **Website** | cloud.google.com/memorystore |

---

> "If you want to see things just as they are, then you yourself must practice just as you are."
> <cite>— Dogen</cite>

---

Memorystore is GCP's **fully managed in-memory data store**, delivering **sub-millisecond latency** for caching, session management, leaderboards, and real-time processing (source: Google Cloud Platform - MemoryStore.md).

You get Redis / Memcached / Valkey semantics **without running servers** â€” Google handles provisioning, replication, failover, and patching.

## Supported engines

The raw source lists two engines (source: Google Cloud Platform - MemoryStore.md); Google now offers **three**:

| Engine | Since | Best for |
| --- | --- | --- |
| **Redis** | GA | Caching, pub/sub, complex data structures, HA |
| **Memcached** | GA (deprecated; migrate to Valkey) | Simple key-value cache, horizontally scalable |
| **Valkey** | **GA 2024** | Open-source Redis fork; recommended successor for new deployments ([cloud.google.com blog](https://cloud.google.com/blog/products/databases/announcing-general-availability-of-memorystore-for-valkey)) |

Google has announced **migration path from Memcached â†’ Valkey** and is positioning **Memorystore for Valkey** as the default for new workloads.

## Features

- **Automatic provisioning** â€” configure tier, zone, capacity; Google deploys.
- **Automatic replication** â€” Standard tier replicates across zones.
- **Automatic failover** â€” master â†’ replica without manual intervention.
- **Automated patching** â€” security updates applied transparently.
- **Import / export** â€” migrate data in/out without code changes.
- **VPC isolation + Private IPs** â€” never exposed to the public internet.

(source: Google Cloud Platform - MemoryStore.md)

## Common use cases

1. **Application caching** â€” reduce DB load, speed up read-heavy paths.
2. **Session management** â€” fast auth / session state.
3. **Gaming** â€” real-time leaderboards, multiplayer state, scoring.
4. **Stream processing** â€” buffering real-time events, event-driven systems.
5. **Microservices glue** â€” shared state, rate limiting, **distributed locks**.

## Self-managed Redis vs Memorystore

| Concern | Memorystore | Self-managed Redis |
| --- | --- | --- |
| Infrastructure | Fully managed | You provision VMs |
| Replication | Automatic | You configure |
| Failover | Automatic | You script / orchestrate |
| Patching | Managed by Google | Manual |
| Security | VPC isolation + Private IP | Custom setup |
| Cost | Higher per-GB | Lower if fully utilized, but admin overhead |

(source: Google Cloud Platform - MemoryStore.md)

## Setting up

Via Cloud Console (source: Google Cloud Platform - MemoryStore.md):

1. Open **Memorystore** in the Console.
2. Choose **tier** (Basic or **Standard HA**), **zone / region**, **engine**.
3. Set **capacity** (GB).
4. Create.

Scaling is online â€” capacity changes with minimal impact on availability. Standard-tier HA instances replicate across zones automatically.

Also scriptable via `gcloud` and REST APIs.

## Best practices

- Use **Standard tier** for production (HA + automatic failover).
- Place the instance in the **same region** as its consumers to minimize latency.
- Monitor **memory utilization** regularly â€” Redis evicts under pressure.
- Set **TTL (Time-to-Live)** on cache entries; don't use as primary storage.
- Avoid storing **large persistent datasets** â€” use a real database and cache a subset.

(source: Google Cloud Platform - MemoryStore.md)

## Memorystore vs other GCP databases

| Need | Pick |
| --- | --- |
| Sub-ms cache / session store | **Memorystore** |
| OLTP relational | [[cloud-sql]] / [[cloud-spanner]] |
| Document NoSQL | [[cloud-datastore]] |
| Wide-column / time-series | [[cloud-bigtable]] |

## Interesting Facts

- Google announced **Valkey GA in 2024** â€” Valkey is the open-source Redis fork (Linux Foundation), driven by licensing changes upstream; Google is betting heavily on it.
- Memorystore is used internally by **over 90% of the top 100 Google Cloud customers** ([cloud.google.com blog](https://cloud.google.com/blog/products/databases/announcing-general-availability-of-memorystore-for-valkey)).
- Memorystore is **not a durable primary store** â€” Redis snapshots persist to disk, but treat it as a cache to avoid surprises.

## Interview Questions can be asked

1. When use Memorystore vs self-managed Redis on [[../compute/compute-engine|Compute Engine]]?
2. Redis vs Memcached vs Valkey â€” trade-offs.
3. How does Memorystore achieve HA?
4. Why not treat Memorystore as primary storage?
5. Describe a pattern for using Memorystore as a distributed lock.

## Related pages

> [!grid]
>
>> [!card] Sister GCP databases
>> [[cloud-sql|Cloud SQL]], [[cloud-spanner|Cloud Spanner]], [[cloud-bigtable|Cloud Bigtable]], [[cloud-datastore|Cloud Datastore]]
>
>
>> [!card] Data Storage
>> [[../../../data-engineering/data-storage/in-memory-database|In-memory Database]], [[../../../data-engineering/data-storage/key-value-database|Key-Value Database]]
>
>
>> [!card] Foundations + certs
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[Professional Data Engineer|PDE Certification]]

