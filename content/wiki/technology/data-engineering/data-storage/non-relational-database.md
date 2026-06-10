---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Non-relational Database
Created:
  - 2026-04-29
aliases:
  - Non-relational Database
  - NoSQL
  - NoSQL Database
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

# Non-relational Database

<p class="at-lead">
A non-relational (NoSQL) database does not use a tabular schema of rows and columns. Instead, it uses a storage model optimized for the specific type of data being stored — key/value pairs, JSON documents, graphs of nodes/edges, and more.
</p>

<span class="at-stat">2000s</span> web-scale movement &nbsp;·&nbsp; <span class="at-stat">7+</span> distinct types &nbsp;·&nbsp; <span class="at-mark">"Not Only SQL" — flexibility and scale at the cost of ACID guarantees</span>

> [!tip] The NoSQL Trade-off
> NoSQL databases sacrifice some relational guarantees (ACID transactions, complex joins) for horizontal scalability and schema flexibility. The "NoSQL" name originally meant "no SQL" but has softened to "**not only SQL**" — many modern systems blend both approaches.

<span class="at-kicker">Core Trade-offs</span>

## Advantages vs Disadvantages

> [!grid|cols2]
>
> > [!card|section] Advantages
> > - **Easier to [[../../software-engineering/horizontal-scaling|scale horizontally]]** — designed for distribution from day one.
> > - **Better at simple queries** — point lookups, document fetches.
> > - **Flexible schema** — fast iteration during development.
> > - **High throughput** — often millions of ops/sec.
>
> > [!card|section] Disadvantages
> > - **More difficult to query complex relationships** — joins are weak or absent.
> > - **Flexible schema can become a mess** — without discipline, inconsistent fields proliferate.
> > - Often **eventual consistency** instead of strong consistency.
> > - **Limited transactions** — usually per-record or per-partition only.

<span class="at-kicker">NoSQL Types</span>

## Types

| Type | Best for |
| --- | --- |
| [[key-value-database\|Key-Value]] | Cache, session store, config |
| [[document-database\|Document]] | App data with flexible shape (JSON) |
| [[graph-database\|Graph]] | Highly connected data (social, fraud) |
| [[wide-column-database\|Wide-column]] | Massive scale, sparse columns |
| [[in-memory-database\|In-memory]] | Sub-ms latency |
| [[timeseries-database\|Time-series]] | Metrics, IoT, monitoring |
| **Search-Engine** | Full-text search, log analytics |

<span class="at-kicker">Cloud Platforms</span>

## NoSQL on GCP

- **Document**: [[../../cloud/gcp/databases/cloud-datastore|Firestore / Datastore]].
- **Wide-column**: [[../../cloud/gcp/databases/cloud-bigtable|Cloud Bigtable]].
- **In-memory**: [[../../cloud/gcp/databases/memorystore|Memorystore]] (Redis / Memcached).
- **Search**: Vertex AI Search, Elastic Cloud (3rd-party), or run Elasticsearch on GKE.

<span class="at-kicker">Comparison</span>

## NoSQL vs SQL

| | NoSQL | [[relational-database\|SQL]] |
| --- | --- | --- |
| Schema | Flexible | Strict |
| Joins | Weak / absent | First-class |
| Transactions | Limited | Full ACID |
| Scale | Horizontal | Vertical (mostly) |
| Consistency | Often eventual | Strong |
| Use cases | Web/mobile/IoT | OLTP, ERP, accounting |

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. Walk through CAP theorem implications for SQL and various NoSQL types.
2. **Document** vs **wide-column** — when each.
3. Why is "NoSQL" not really "no SQL" anymore?
4. **BASE** vs **ACID** trade-offs.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister storage
>> [[relational-database|Relational Database]], [[database|Database]], [[data-storage|Data Storage]]
>
>
>> [!card] NoSQL families
>> [[document-database|Document Database]], [[key-value-database|Key-Value Database]], [[graph-database|Graph Database]], [[wide-column-database|Wide-column Database]], [[in-memory-database|In-memory Database]], [[timeseries-database|Time-series Database]]
>
>
>> [!card] Distributed-systems theory
>> [[../../software-engineering/cap-theorem|CAP Theorem]], [[../../software-engineering/horizontal-scaling|Horizontal Scaling]], [[../../software-engineering/database-sharding|Sharding]]
>
>
>> [!card] People
>> [[../../../people/jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]]
