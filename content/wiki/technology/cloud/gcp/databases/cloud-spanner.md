---
title: Cloud Spanner
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Spanner
  - Google Cloud Spanner
category: Cloud
tags:
  - GCP
  - Database
  - Relational
  - Distributed
  - DataEngineering
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Spanner
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Globally distributed relational database |
> | **Category** | Database |
> | **Launched** | 2017 (GA May 2017) |
> | **Interface** | SQL, REST API, gRPC, client libraries |
> | **Website** | cloud.google.com/spanner |

---

> "Good things aren't supposed to just fall into your lap."
> <cite>— Audrey Hepburn</cite>

---

<span class="at-kicker">Globally Distributed SQL · Google Cloud</span>
# Cloud Spanner
<p class="at-lead">Cloud Spanner is GCP's globally distributed, strongly consistent, relational database — the closest thing the industry has to "impossible" engineering: ACID transactions, horizontal scaling, and 99.999% availability at global scale.</p>
<span class="at-stat">99.999%</span> SLA &nbsp;·&nbsp; <span class="at-stat">global</span> ACID transactions &nbsp;·&nbsp; <span class="at-mark">the only database that is both globally distributed and strongly consistent</span>

<span class="at-kicker">How It Works</span>

## Overview

It **eliminates the CAP-trade-off** that forces most systems to choose between consistency and scalability by combining three ingredients: **Paxos** consensus, Google's **TrueTime API** (atomic clocks + GPS), and automatic data sharding (**splits**).

## What makes Spanner different

Traditional relational DBs scale vertically and weaken consistency when distributed. NoSQL systems scale horizontally but sacrifice schemas and ACID. Spanner offers:

- **ACID-compliant transactions** across rows, tables, and even **regions**.
- **External consistency** (strict serializability) — transactions appear to execute in real-time global order.
- **Standard ANSI SQL** with joins, indexes, and secondary indexes.
- **Horizontal scaling** — add nodes, get linear throughput growth with no downtime.
- **99.999% availability SLA** (multi-region) — industry-leading.

## Architecture

### Regions and instances

- A **Spanner instance** is the compute+replication container.
- Instances can be **regional** or **multi-regional**.
- Instance cost scales with **node count**; storage scales independently.

### Nodes

Nodes are the compute layer that serves queries and transactions. More nodes → more throughput. Storage is decoupled — data lives in **Colossus** (Google's distributed file system, successor to GFS).

### Replication + Paxos

- Every piece of data is replicated across zones / regions.
- Replicas form a **Paxos group**; one replica is the **leader** for writes.
- A write commits only after a **quorum** agrees.
- Paxos enforces fault tolerance: if a zone dies, the quorum elects a new leader.

### TrueTime API

Spanner's "secret sauce" — a time API that returns not just a timestamp but **an uncertainty interval**, backed by atomic clocks + GPS receivers in every data centre.

- Every transaction receives a TrueTime-bounded commit timestamp.
- The tiny bounded uncertainty lets Spanner enforce **globally consistent ordering** of distributed transactions.

### Splits (horizontal partitioning)

- Data is partitioned into **splits** based on key ranges.
- Each split is replicated across zones.
- Hot splits can be **dynamically split and rebalanced** without downtime.
- Different splits can have leaders in different zones → load is balanced globally.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Global ACID Transactions**
>> Multi-key transactions across regions with external consistency (strict serializability) — not just eventual consistency.
>
>> [!card|section]
>> **TrueTime Synchronization**
>> Atomic clocks + GPS in every datacenter provide globally consistent timestamp ordering. Spanner's secret sauce.
>
>> [!card|section]
>> **Automatic Sharding**
>> Splits dynamically partition and rebalance data. Hot spots automatically mitigated without manual intervention.
>
>> [!card|section]
>> **Horizontal Scaling**
>> Add nodes → linear throughput growth. No downtime for scaling. Compute and storage scale independently.
>
>> [!card|section]
>> **99.999% Availability**
>> ~5 minutes unavailability per year. Multi-region replication with automatic failover via Paxos consensus.
>
>> [!card|section]
>> **Enterprise Security**
>> Encryption at rest and in transit (Google-managed or CMEK), IAM-based access, VPC private IP, Cloud Audit Logs.

## Main components

| Component | Role |
| --- | --- |
| **Instance** | Regional placement + compute capacity |
| **Database** | Schemas, tables, indexes |
| **Tables / Indexes** | Structured data, with interleaved tables for parent-child locality |
| **Nodes** | CPU, memory, query processing |

## Consistency model

- **External consistency** — strongest available; reads always see the most recent writes.
- **Read-write transactions** — multi-key ACID across regions.
- **Stale reads** — opt-in lower-latency reads that may miss very recent writes.

<span class="at-kicker">Real-World Applications</span>

## Common use cases

> [!grid|cols2]
>
>> [!card|section]
>> **Global Financial Systems**
>> Payment processing, fraud detection, banking ledgers — transactions that must never be lost or reordered.
>
>> [!card|section]
>> **Large-Scale SaaS**
>> Multi-tenant platforms serving millions of users with consistent data across all regions.
>
>> [!card|section]
>> **E-commerce**
>> Global inventory, order processing, cart consistency — no overselling, no phantom inventory.
>
>> [!card|section]
>> **Gaming & Media**
>> Real-time multiplayer, global leaderboards, session tracking — consistent state across the world.
>
>> [!card|section]
>> **Supply Chain Management**
>> Global tracking with consistent state across manufacturing, logistics, and retail systems.
>
>> [!card|section]
>> **Healthcare Records**
>> Patient data accessible consistently across regional healthcare networks with strict compliance.

## Advantages

- Combines **SQL semantics** with **NoSQL scale**.
- **Globally consistent** transactions.
- **Fully managed** — no sharding, no replica failover drama.
- **Enterprise-grade reliability** (99.999% multi-region SLA).

## Limitations

- **Cost** — significantly more than Cloud SQL; minimum ~1 node.
- **Overkill** for small or low-traffic apps.
- Requires **careful schema + query design** — interleaving, hot-spotting.
- Schema changes on very large tables require planning.

## Spanner vs Cloud SQL

| | Cloud SQL | Cloud Spanner |
| --- | --- | --- |
| Scope | Regional | Regional or multi-regional |
| Scaling | Vertical + read replicas | Horizontal, linear |
| Consistency | Strong (single node) | External consistency globally |
| Write scaling | Single primary | Distributed leaders |
| SQL | MySQL / Postgres / SQL Server | ANSI SQL + PostgreSQL dialect |
| Cost floor | Low | High (per-node) |
| Best for | Typical OLTP, moderate scale | Global, mission-critical OLTP |

## Interesting Facts

- Spanner is the **only commercial DB** that uses atomic clocks and GPS directly in its consistency protocol (TrueTime).
- Data storage lives in **Colossus**, the same underlying FS that powers BigQuery — so Spanner's compute/storage are decoupled, similar to Bigtable.
- 99.999% = ~5 minutes of unavailability per year.
- Google's internal systems (AdWords, Gmail metadata) run on Spanner — the technology was battle-tested before commercial release (2017).

## Interview Questions can be asked

1. Explain TrueTime and why it's critical for Spanner.
2. How does Paxos ensure fault-tolerant writes?
3. Compare Spanner and Cloud SQL for a global payments workload.
4. What is a "split" and how does Spanner avoid hot-spots?
5. Why does Spanner not break the CAP theorem — and where does it really sit on the CAP spectrum?

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD SPANNER
>> # From *regional SQL* to *global ACID transactions*.
>> The only database that is both globally distributed and strongly consistent.
>
>> [!card|step]
>> ###### Step 01
>> ### Create *Spanner instance*.
>> Choose regional or multi-regional configuration. Provision nodes for compute capacity — storage scales independently.
>
>> [!card|step]
>> ###### Step 02
>> ### Define *schema with interleaving*.
>> Design parent-child table relationships for data locality. Interleaved tables improve query performance and reduce splits.
>
>> [!card|step]
>> ###### Step 03
>> ### Run *globally consistent queries*.
>> Execute ACID transactions across continents. TrueTime ensures global ordering without locks or blocking reads.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister GCP databases
>> [[cloud-sql|Cloud SQL]], [[cloud-bigtable|Cloud Bigtable]], [[cloud-datastore|Cloud Datastore]], [[memorystore|Memorystore]]
>
>
>> [!card] Distributed-systems theory
>> [[../../../software-engineering/cap-theorem|CAP Theorem]], [[../../../software-engineering/database-sharding|Sharding]], [[../../../databases/acid-properties|ACID Properties]], [[../../../data-engineering/data-processing/hybrid-transactional-analytical-processing|HTAP]]
>
>
>> [!card] Foundations + certs
>> [[../storage/google-file-system|Google File System]], [[../foundations/google-cloud-platform|Google Cloud Platform]], [[Professional Data Engineer|PDE Certification]]
>
>
>> [!card] People
>> [[../../../../people/jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]], [[../../../../people/eric-brewer|Eric Brewer]], [[../../../../people/daniel-abadi|Daniel Abadi]]
>
>
>> [!card] Books
>> [[../../../../books/designing-data-intensive-applications|DDIA]]
