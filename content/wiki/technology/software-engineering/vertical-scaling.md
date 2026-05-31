---
title: Vertical Scaling
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Vertical Scaling
  - Scaling Up
category: Computer Science
tags:
  - DataEngineering
  - Scaling
banner:
publish: true
---

> "Life is a journey, not a destination."
> <cite>— Dan Millman</cite>

---

**Vertical scaling** increases the capacity of a system by **increasing the size of a single machine** — more CPU, more RAM, faster storage. Also known as **scaling up** (source: Concepts/Software Engineering/Vertical Scaling.md).

```
Before:                After:
[Small Computer]   →   [BIGGER Computer]
                       (more CPU/RAM/disk)
```

## Advantages

- **Very simple** — no architectural changes.
- **No code or design changes needed**.
- **Maintains consistency** — single-node databases stay strongly consistent.
- **Cheaper** than horizontal scaling for small-to-medium workloads.

## Disadvantages

- **Becomes expensive** — high-end specialized hardware costs jump non-linearly.
- **Single point of failure** — lose the machine, lose the system.
- **Hardware ceiling** — every machine has a maximum size.
- **Downtime to upgrade** in some cases (depends on cloud).

## When to scale vertically

- **Single-node OLTP** — Postgres, MySQL until they max out.
- **Apps with shared state** difficult to distribute.
- **Cost-sensitive smaller workloads**.
- **Initial growth phase** — vertical first, then horizontal when limits hit.

## When to switch to horizontal

When you hit:

- **Cost** — bigger instances are non-linearly expensive.
- **Single-node limits** — IOPS, network throughput, RAM.
- **Availability** — single failure too costly.
- **Geographic distribution** needs.

## On the cloud

- Most cloud DBs (RDS, Cloud SQL, Postgres on a VM) scale **vertically** by changing instance size.
- Some support **online resize** with minimal downtime.
- For true horizontal scaling, switch to:
  - **NewSQL** — Spanner, Cockroach, Yugabyte.
  - **NoSQL** — Bigtable, DynamoDB, Cassandra.

## Vertical scaling can go further than you think

Modern cloud machines:

- **AWS x2idn.32xlarge** — 128 vCPUs, 4 TB RAM.
- **GCP M3-megamem-128** — 128 vCPUs, 1 TB RAM.

A Postgres instance on this can serve **hundreds of TB** with the right schema and indexing. Don't shard prematurely.

## Interview Questions

1. **Vertical** vs **horizontal** — pros/cons.
2. When does vertical scaling **stop being economical**?
3. How does **NewSQL** combine vertical and horizontal benefits?

## Related pages

> [!multi-column]
>
>> [!card] Sister scaling concepts
>> [[horizontal-scaling|Horizontal Scaling]], [[database-sharding|Sharding]], [[cap-theorem|CAP Theorem]]
>
>
>> [!card] Storage
>> [[../data-engineering/data-storage/relational-database|Relational Database]]

