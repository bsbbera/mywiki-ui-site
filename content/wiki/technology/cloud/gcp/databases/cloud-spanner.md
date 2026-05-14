---
title: Cloud Spanner
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:05:00 pm
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
banner:
publish: true
---

---

Cloud Spanner is GCP's **globally distributed, strongly consistent, relational database** â€” the closest thing the industry has to "impossible" engineering: ACID transactions, horizontal scaling, and 99.999% availability at global scale (source: Google Cloud Platform - Introduction to Cloud Spanner.md).

It **eliminates the CAP-trade-off** that forces most systems to choose between consistency and scalability by combining three ingredients: **Paxos** consensus, Google's **TrueTime API** (atomic clocks + GPS), and automatic data sharding (**splits**).

## What makes Spanner different

Traditional relational DBs scale vertically and weaken consistency when distributed. NoSQL systems scale horizontally but sacrifice schemas and ACID. Spanner offers:

- **ACID-compliant transactions** across rows, tables, and even **regions**.
- **External consistency** (strict serializability) â€” transactions appear to execute in real-time global order.
- **Standard ANSI SQL** with joins, indexes, and secondary indexes.
- **Horizontal scaling** â€” add nodes, get linear throughput growth with no downtime.
- **99.999% availability SLA** (multi-region) â€” industry-leading.

(source: Google Cloud Platform - Introduction to Cloud Spanner.md)

## Architecture

### Regions and instances

- A **Spanner instance** is the compute+replication container.
- Instances can be **regional** or **multi-regional**.
- Instance cost scales with **node count**; storage scales independently.

### Nodes

Nodes are the compute layer that serves queries and transactions. More nodes â†’ more throughput. Storage is decoupled â€” data lives in **Colossus** (Google's distributed file system, successor to [[google-file-system]]).

### Replication + Paxos

- Every piece of data is replicated across zones / regions.
- Replicas form a **Paxos group**; one replica is the **leader** for writes.
- A write commits only after a **quorum** agrees.
- Paxos enforces fault tolerance: if a zone dies, the quorum elects a new leader.

### TrueTime API

Spanner's "secret sauce" â€” a time API that returns not just a timestamp but **an uncertainty interval**, backed by atomic clocks + GPS receivers in every data centre.

- Every transaction receives a TrueTime-bounded commit timestamp.
- The tiny bounded uncertainty lets Spanner enforce **globally consistent ordering** of distributed transactions.

### Splits (horizontal partitioning)

- Data is partitioned into **splits** based on key ranges.
- Each split is replicated across zones.
- Hot splits can be **dynamically split and rebalanced** without downtime.
- Different splits can have leaders in different zones â†’ load is balanced globally.

(source: Google Cloud Platform - Introduction to Cloud Spanner.md)

## Main components

| Component | Role |
| --- | --- |
| **Instance** | Regional placement + compute capacity |
| **Database** | Schemas, tables, indexes |
| **Tables / Indexes** | Structured data, with interleaved tables for parent-child locality |
| **Nodes** | CPU, memory, query processing |

## Consistency model

- **External consistency** â€” strongest available; reads always see the most recent writes.
- **Read-write transactions** â€” multi-key ACID across regions.
- **Stale reads** â€” opt-in lower-latency reads that may miss very recent writes.

## Security

- Encryption at rest and in transit (Google-managed or CMEK).
- IAM-based fine-grained access.
- Private IP via VPC.
- Cloud Audit Logs.

## Common use cases

1. **Global financial systems** â€” payment processing, fraud detection, banking ledgers.
2. **Large-scale SaaS** â€” multi-tenant platforms that must not lose or reorder writes.
3. **E-commerce** â€” global inventory, order processing, cart consistency.
4. **Gaming / media** â€” real-time multiplayer, global leaderboards, session tracking.

## Advantages

- Combines **SQL semantics** with **NoSQL scale**.
- **Globally consistent** transactions.
- **Fully managed** â€” no sharding, no replica failover drama.
- **Enterprise-grade reliability** (99.999% multi-region SLA).

## Limitations

- **Cost** â€” significantly more than [[cloud-sql]]; minimum ~1 node.
- **Overkill** for small or low-traffic apps.
- Requires **careful schema + query design** â€” interleaving, hot-spotting.
- Schema changes on very large tables require planning.

(source: Google Cloud Platform - Introduction to Cloud Spanner.md)

## Spanner vs Cloud SQL

| | [[cloud-sql]] | Cloud Spanner |
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
- Data storage lives in **Colossus**, the same underlying FS that powers BigQuery â€” so Spanner's compute/storage are decoupled, similar to [[cloud-bigtable]].
- 99.999% = ~5 minutes of unavailability per year.
- Google's internal systems (AdWords, Gmail metadata) run on Spanner â€” the technology was battle-tested before commercial release (2017).

## Interview Questions can be asked

1. Explain TrueTime and why it's critical for Spanner.
2. How does Paxos ensure fault-tolerant writes?
3. Compare Spanner and [[cloud-sql]] for a global payments workload.
4. What is a "split" and how does Spanner avoid hot-spots?
5. Why does Spanner not break the CAP theorem â€” and where does it really sit on the CAP spectrum?

## Related pages

> [!multi-column]
>
>> [!card] Sister GCP databases
>> [[cloud-sql|Cloud SQL]], [[cloud-bigtable|Cloud Bigtable]], [[cloud-datastore|Cloud Datastore]], [[memorystore|Memorystore]]
>
>
>> [!card] Distributed-systems theory
>> [[../../data-engineering/concepts/software-engineering/cap-theorem|CAP Theorem]], [[../../data-engineering/concepts/software-engineering/database-sharding|Sharding]], [[../../dbms/acid-properties|ACID Properties]], [[../../data-engineering/concepts/data-processing/hybrid-transactional-analytical-processing|HTAP]]
>
>
>> [!card] Foundations + certs
>> [[../storage/google-file-system|Google File System]], [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../certifications/professional-data-engineer|PDE Certification]]
>
>
>> [!card] People
>> [[../../people/jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]], [[../../people/eric-brewer|Eric Brewer]], [[../../people/daniel-abadi|Daniel Abadi]]
>
>
>> [!card] Books
>> [[../../books/designing-data-intensive-applications|DDIA]]

