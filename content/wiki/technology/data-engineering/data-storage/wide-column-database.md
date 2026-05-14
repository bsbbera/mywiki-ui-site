---
title: Wide-column Database
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Wide-column Database
  - Column-family Database
category: Computer Science
tags:
  - DataEngineering
  - Storage
  - NoSQL
banner:
dg-publish: true
---

---

A **wide-column database** organizes data into **flexible columns** that can be spread across many servers/nodes. Also known as **column-family databases**. They store data in **rows keyed by primary key**, with columns grouped into **column families** that share attributes (source: Concepts/Data Storage/Wide-column Database.md).

You can **access column data without reading entire rows**, but the **column name + format can differ between rows in the same table** — the schema is sparse and flexible.

## How it differs from columnar

> Some sources (including Google Cloud) use "column-oriented" and "wide-column" interchangeably. Others distinguish them strictly.

| Strict distinction | Storage layout |
| --- | --- |
| **[[column-oriented-database\|Column-oriented]]** | Data stored **as columns** on disk (analytical) |
| **Wide-column** | Data stored **as rows** with column-family grouping |

## Data model

```
RowKey: user#42
  Family: profile {
    name: "Alice"
    email: "alice@x.com"
    ...
  }
  Family: activity {
    last_login: "2026-04-29"
    visit_count: 1234
  }
```

Different rows can have completely different columns within the same family.

## Advantages

- **Massive horizontal scale** — petabytes across thousands of nodes.
- **Sparse rows** — rows can have hundreds or millions of columns each.
- **Tunable consistency** — usually eventual but can be tuned.
- **High write throughput** — append-only LSM-tree backends.
- **Time-series friendly** — column families + timestamps work well.

## Disadvantages

- **No joins** — denormalize at write time.
- **Query patterns must be designed up front** — row-key choice is everything.
- **Eventually consistent** by default in some systems.
- **Steep learning curve** for relational devs.

## Popular wide-column DBs

- **Apache Cassandra** — most popular; AP from CAP.
- **[[../../../gcp/databases/cloud-bigtable|Google Cloud Bigtable]]** — Google's internal-derived; underlies Search, Maps, Gmail.
- **HBase** — Hadoop-native; modeled after BigTable paper.
- **ScyllaDB** — Cassandra-compatible, C++ for performance.
- **Amazon Keyspaces** — managed Cassandra.
- **Azure Cosmos DB Cassandra API**.

## Use cases

- **IoT telemetry** — sensors writing time-stamped readings.
- **Time-series** at scale.
- **Internet-scale messaging** — chat, notifications.
- **Real-time bidding** in adtech.
- **Recommendation feature stores**.

## Designing for wide-column

The **row key** is the most important design decision:

- Should encode the most common query pattern (`device#timestamp`, `user#date#event`).
- **Hot-spotting** — sequentially increasing keys cause one node to handle all writes; salt or hash.
- **Column qualifiers** can be dynamic (e.g. event-specific JSON).

## Interview Questions

1. **Wide-column** vs **columnar** — clarify the strict distinction.
2. Why does row-key design matter so much in Cassandra/Bigtable?
3. **Eventual consistency** — what does it mean for app design?
4. **HBase** vs **Bigtable** vs **Cassandra**.

## Related pages

> [!multi-column]
>
>> [!card] Sister NoSQL
>> [[non-relational-database|Non-relational Database]], [[column-oriented-database|Column-oriented Database]], [[timeseries-database|Time-series Database]], [[key-value-database|Key-Value Database]]
>
>
>> [!card] Products
>> [[../../../gcp/databases/cloud-bigtable|Cloud Bigtable]], [[../../tools/databases-overview|Databases Overview]]
>
>
>> [!card] People
>> [[../../../people/jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]]

