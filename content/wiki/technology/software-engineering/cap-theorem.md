---
title: CAP Theorem
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - CAP Theorem
  - Brewer's Theorem
category: Computer Science
tags:
  - DistributedSystems
  - Theory
  - Database
banner:
publish: true
---

---

The **CAP theorem** (Brewer's theorem) states that a **distributed data store** can provide **at most two out of three** of the following guarantees (source: Concepts/Software Engineering/CAP Theorem.md):

- **C — Consistency**: every read receives the most recent write or an error.
- **A — Availability**: every request receives a (non-error) response, but no guarantee it has the latest write.
- **P — Partition tolerance**: the system continues operating despite arbitrary message loss/delay between nodes.

## The "two of three" framing

Coined by **Eric Brewer** in 2000 and formally proved by **Seth Gilbert** and **Nancy Lynch** in 2002.

In a real distributed system, **partitions happen** (network failures are inevitable), so **P is not optional**. The real choice is between **CP** and **AP**:

- **CP** — sacrifice availability during partitions to keep data consistent (e.g. **MongoDB**, **HBase**, **MySQL clusters**, **etcd**).
- **AP** — sacrifice consistency during partitions to remain available (e.g. **Cassandra**, **DynamoDB** in eventual mode, **Riak**, **CouchDB**).
- **CA** — only possible in non-distributed systems (single-node DBs).

## Important caveats

The classic "pick two" is misleading:

- The trade-off only kicks in **during a partition**, not normally.
- **Modern systems are often "tunably consistent"** — Cassandra lets you choose per-query.
- **Spanner** ([[../../../gcp/databases/cloud-spanner|GCP]]) appears to violate CAP by being globally consistent + highly available — but during true partitions it sacrifices availability briefly. Google's TrueTime + Paxos make partitions extremely rare.

## CAP "C" vs ACID "C"

- **ACID Consistency** = "respects integrity constraints" (DB-internal).
- **CAP Consistency** = "all nodes return the same data at the same time" (system-level).

These are **different** concepts; don't conflate them. See [[../../../dbms/acid-properties|ACID Properties]] for the database-level story.

## PACELC — the modern refinement

PACELC (proposed by **Daniel Abadi**, 2010) extends CAP:

> If there is a **P**artition, choose **A** or **C**; **E**lse (no partition), choose between **L**atency and **C**onsistency.

This captures that even in a healthy system, you trade latency for consistency (e.g. waiting for replicas to acknowledge).

## CAP positions of common DBs

| DB | CAP | Notes |
| --- | --- | --- |
| **Postgres** (single primary) | CP / CA | Not really distributed |
| **Cassandra** | AP | Tunable per query |
| **DynamoDB** | AP | Strong-consistency option = CP |
| **MongoDB** | CP | Was AP earlier; tunable |
| **HBase** | CP | |
| **Cloud Spanner** | CP (effectively also A) | TrueTime + Paxos |
| **CockroachDB** | CP | Inspired by Spanner |
| **Couchbase** | AP | |
| **Redis Cluster** | AP | |

## Interesting Facts

- Brewer himself revisited CAP in 2012 ("CAP twelve years later") — clarifying it's not a binary choice but a spectrum.
- **Spanner**'s "external consistency" via [[../../../gcp/databases/cloud-spanner|TrueTime]] is the most impressive engineering feat in this space.

## Interview Questions

1. **CAP** in plain English — explain to a junior dev.
2. Why is **P** not really optional?
3. **PACELC** — how does it extend CAP?
4. CAP "C" vs ACID "C" — clarify.
5. Where does Spanner fit in CAP?

## Related pages

> [!multi-column]
>
>> [!card] Distributed-systems theory
>> [[horizontal-scaling|Horizontal Scaling]], [[database-sharding|Sharding]], [[../../../dbms/acid-properties|ACID Properties]]
>
>
>> [!card] Storage
>> [[../data-storage/non-relational-database|Non-relational Database]]
>
>
>> [!card] Products
>> [[../../../gcp/databases/cloud-spanner|Cloud Spanner]]
>
>
>> [!card] People
>> [[../../../people/eric-brewer|Eric Brewer]], [[../../../people/seth-gilbert-nancy-lynch|Seth Gilbert + Nancy Lynch]], [[../../../people/daniel-abadi|Daniel Abadi]], [[../../../people/martin-kleppmann|Martin Kleppmann]]
>
>
>> [!card] Books
>> [[../../../books/designing-data-intensive-applications|DDIA]]

