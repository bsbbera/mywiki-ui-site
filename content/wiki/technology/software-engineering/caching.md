---
title: Caching
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Caching
  - Cache
  - In-Memory Cache
  - CDN
  - Cache Invalidation
category: Software Engineering
tags:
  - SoftwareEngineering
  - DistributedSystems
  - Performance
  - Scalability
  - DevOps
banner:
publish: true
---

> [!quote]
> *There are only two hard things in computer science: cache invalidation and naming things.*
> — Phil Karlton

# Caching

<p class="at-lead">
Caching stores copies of frequently accessed data in fast, nearby storage to reduce latency, lower database load, and improve application responsiveness. It is one of the highest-impact performance optimisations available to backend engineers and architects.
</p>

## Overview

Caching layers include in-memory caches (Redis, Memcached), content delivery networks (Cloud CDN, Cloudflare), application caches, and database query caches. Key design decisions involve cache eviction policies (LRU, LFU, TTL), invalidation strategies (write-through, write-back, write-around), and consistency guarantees. Properly implemented caching can reduce response times from hundreds of milliseconds to single digits and protect backends from traffic spikes.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[memorystore]], [[cloud-cdn]], [[redis]]
>
>> [!card] Parent topic
>> [[devops-sre]]
>
>> [!card] See also
>> [[latency-throughput]], [[horizontal-scaling]], [[load-balancing]]
