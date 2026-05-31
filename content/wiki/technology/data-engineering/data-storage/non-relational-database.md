---
title: Non-relational Database
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Non-relational Database
  - NoSQL
  - NoSQL Database
category: Computer Science
tags:
  - DataEngineering
  - Storage
  - NoSQL
banner:
publish: true
---

> "Sometimes a change of perspective is all it takes to see the light."
> <cite>— Dan Brown</cite>

---

A **non-relational (NoSQL) database** does **not** use a tabular schema of rows and columns. Instead, it uses a **storage model optimized for the specific type of data** being stored — key/value pairs, JSON documents, graphs of nodes/edges, etc. (source: Concepts/Data Storage/Non-relational Database.md).

The "**NoSQL**" name (originally "no SQL", later softened to "**not only SQL**") emerged in the 2000s when web-scale companies needed alternatives to relational databases for high-throughput, flexible-schema workloads.

## Advantages

- **Easier to [[../../software-engineering/horizontal-scaling|scale horizontally]]** — designed for distribution from day one.
- **Better at simple queries** — point lookups, document fetches.
- **Flexible schema** — fast iteration during development.
- **High throughput** — often millions of ops/sec.

## Disadvantages

- **More difficult to query complex relationships** — joins are weak or absent.
- **Flexible schema can become a mess** — without discipline, inconsistent fields proliferate.
- Often **eventual consistency** instead of strong consistency.
- **Limited transactions** — usually per-record or per-partition only.

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

## NoSQL on GCP

- **Document**: [[../../cloud/gcp/databases/cloud-datastore|Firestore / Datastore]].
- **Wide-column**: [[../../cloud/gcp/databases/cloud-bigtable|Cloud Bigtable]].
- **In-memory**: [[../../cloud/gcp/databases/memorystore|Memorystore]] (Redis / Memcached).
- **Search**: Vertex AI Search, Elastic Cloud (3rd-party), or run Elasticsearch on GKE.

## NoSQL vs SQL

| | NoSQL | [[relational-database\|SQL]] |
| --- | --- | --- |
| Schema | Flexible | Strict |
| Joins | Weak / absent | First-class |
| Transactions | Limited | Full ACID |
| Scale | Horizontal | Vertical (mostly) |
| Consistency | Often eventual | Strong |
| Use cases | Web/mobile/IoT | OLTP, ERP, accounting |

## Interview Questions

1. Walk through CAP theorem implications for SQL and various NoSQL types.
2. **Document** vs **wide-column** — when each.
3. Why is "NoSQL" not really "no SQL" anymore?
4. **BASE** vs **ACID** trade-offs.

## Related pages

> [!multi-column]
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

