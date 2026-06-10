---
title: Memorystore
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
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
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
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

<span class="at-kicker">In-Memory Cache · Google Cloud</span>
# Memorystore
<p class="at-lead">Memorystore is GCP's fully managed in-memory data store, delivering sub-millisecond latency for caching, session management, leaderboards, and real-time processing. Redis, Memcached, and Valkey without running servers.</p>
<span class="at-stat">Redis</span> + <span class="at-stat">Memcached</span> + <span class="at-stat">Valkey</span> &nbsp;·&nbsp; <span class="at-stat"><1ms</span> latency &nbsp;·&nbsp; <span class="at-mark">fully managed Redis — no patching, no ops, sub-millisecond performance</span>

<span class="at-kicker">How It Works</span>

## Overview

You get Redis / Memcached / Valkey semantics **without running servers** — Google handles provisioning, replication, failover, and patching.

## Supported engines

The raw source lists two engines; Google now offers **three**:

| Engine | Since | Best for |
| --- | --- | --- |
| **Redis** | GA | Caching, pub/sub, complex data structures, HA |
| **Memcached** | GA (deprecated; migrate to Valkey) | Simple key-value cache, horizontally scalable |
| **Valkey** | **GA 2024** | Open-source Redis fork; recommended successor for new deployments |

Google has announced **migration path from Memcached → Valkey** and is positioning **Memorystore for Valkey** as the default for new workloads.

## Features

- **Automatic provisioning** — configure tier, zone, capacity; Google deploys.
- **Automatic replication** — Standard tier replicates across zones.
- **Automatic failover** — master → replica without manual intervention.
- **Automated patching** — security updates applied transparently.
- **Import / export** — migrate data in/out without code changes.
- **VPC isolation + Private IPs** — never exposed to the public internet.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Sub-Millisecond Latency**
>> In-memory performance for read-heavy workloads. Typical response times under 1 millisecond at scale.
>
>> [!card|section]
>> **Redis Compatibility**
>> Full Redis protocol support — existing code, libraries, and tools work without changes.
>
>> [!card|section]
>> **High Availability**
>> Standard tier with automatic failover across zones. Zero-downtime maintenance and upgrades.
>
>> [!card|section]
>> **Valkey Support**
>> Modern open-source Redis fork (GA 2024). Recommended engine for new deployments.
>
>> [!card|section]
>> **VPC Security**
>> Private IP only — instances isolated within your VPC. No public internet exposure.
>
>> [!card|section]
>> **Flexible Scaling**
>> Online capacity changes with minimal impact. Scale up to 300 GB per instance.

<span class="at-kicker">Real-World Applications</span>

## Common use cases

> [!grid|cols2]
>
>> [!card|section]
>> **Application Caching**
>> Reduce database load, speed up read-heavy paths. Session stores and frequently accessed data.
>
>> [!card|section]
>> **Session Management**
>> Fast authentication and session state. Scale web application sessions across multiple servers.
>
>> [!card|section]
>> **Gaming Leaderboards**
>> Real-time scoring, rankings, and multiplayer state. Sorted sets and atomic increments.
>
>> [!card|section]
>> **Stream Processing**
>> Buffering real-time events, event-driven systems. Pub/sub for inter-service communication.
>
>> [!card|section]
>> **Microservices Glue**
>> Shared state, rate limiting, distributed locks. Cross-service coordination without database contention.
>
>> [!card|section]
>> **ML Feature Caching**
>> Low-latency feature serving for online ML inference pipelines.

## Self-managed Redis vs Memorystore

| Concern | Memorystore | Self-managed Redis |
| --- | --- | --- |
| Infrastructure | Fully managed | You provision VMs |
| Replication | Automatic | You configure |
| Failover | Automatic | You script / orchestrate |
| Patching | Managed by Google | Manual |
| Security | VPC isolation + Private IP | Custom setup |
| Cost | Higher per-GB | Lower if fully utilized, but admin overhead |

## Setting up

Via Cloud Console:

1. Open **Memorystore** in the Console.
2. Choose **tier** (Basic or **Standard HA**), **zone / region**, **engine**.
3. Set **capacity** (GB).
4. Create.

Scaling is online — capacity changes with minimal impact on availability. Standard-tier HA instances replicate across zones automatically.

Also scriptable via `gcloud` and REST APIs.

## Best practices

- Use **Standard tier** for production (HA + automatic failover).
- Place the instance in the **same region** as its consumers to minimize latency.
- Monitor **memory utilization** regularly — Redis evicts under pressure.
- Set **TTL (Time-to-Live)** on cache entries; don't use as primary storage.
- Avoid storing **large persistent datasets** — use a real database and cache a subset.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
|-----------|--------|
| **Instance Type** | Basic (single zone) or Standard HA (multi-zone) |
| **Capacity** | Per-GB-hour for provisioned memory (up to 300 GB) |
| **Network** | No egress charges for traffic within same region |
| **Replicas** | Included in Standard tier pricing |

<span class="at-kicker">Continue Reading</span>

## Memorystore vs other GCP databases

| Need | Pick |
| --- | --- |
| Sub-ms cache / session store | **Memorystore** |
| OLTP relational | [[cloud-sql]] / [[cloud-spanner]] |
| Document NoSQL | [[cloud-datastore]] |
| Wide-column / time-series | [[cloud-bigtable]] |

## Interesting Facts

- Google announced **Valkey GA in 2024** — Valkey is the open-source Redis fork (Linux Foundation), driven by licensing changes upstream; Google is betting heavily on it.
- Memorystore is used internally by **over 90% of the top 100 Google Cloud customers**.
- Memorystore is **not a durable primary store** — Redis snapshots persist to disk, but treat it as a cache to avoid surprises.

## Interview Questions can be asked

1. When use Memorystore vs self-managed Redis on Compute Engine?
2. Redis vs Memcached vs Valkey — trade-offs.
3. How does Memorystore achieve HA?
4. Why not treat Memorystore as primary storage?
5. Describe a pattern for using Memorystore as a distributed lock.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · MEMORYSTORE
>> # From *slow DB queries* to *cached sub-millisecond reads*.
>> Fully managed Redis — no patching, no ops, sub-millisecond performance.
>
>> [!card|step]
>> ###### Step 01
>> ### Create *Memorystore instance*.
>> Choose Redis, Memcached, or Valkey engine. Select Standard tier for HA. Provision capacity up to 300 GB.
>
>> [!card|step]
>> ###### Step 02
>> ### Connect *from application*.
>> Use Redis client libraries with private VPC endpoint. No public IP exposure — secure by default.
>
>> [!card|step]
>> ###### Step 03
>> ### Implement *cache-aside pattern*.
>> Check cache first, fall back to database on miss, populate cache on read. Set TTL for expiration.

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
