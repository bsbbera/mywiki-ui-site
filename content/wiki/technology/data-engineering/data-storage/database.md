---
title: Database
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Database
  - DB
category: Computer Science
tags:
  - DataEngineering
  - Storage
banner:
dg-publish: true
publish: true
---
---

A **database** is an **organized collection of inter-related data** that models some aspect of the real world. Data is stored and accessed via a **database management system (DBMS)** (source: Concepts/Data Storage/Database.md).

> See [[../../../dbms/acid-properties|ACID Properties]] and [[../../../dbms/database-normalization|Normalization]] for the foundational DBMS theory.

## What a database provides

- **Persistence** — data survives process restarts.
- **Concurrency** — many clients access simultaneously without corruption.
- **Querying** — high-level language (SQL, MongoDB query language, Cypher, etc.).
- **Integrity** — constraints (PK, FK, CHECK, UNIQUE).
- **Recovery** — backup + restore + point-in-time recovery.
- **Security** — authentication, authorization, encryption.

## Types

The two big families:

| Family | Schema | Examples |
| --- | --- | --- |
| **[[relational-database\|Relational]]** | Strict, tabular, ACID | Postgres, MySQL, Oracle, SQL Server |
| **[[non-relational-database\|Non-relational (NoSQL)]]** | Flexible | MongoDB, Redis, Cassandra, Neo4j |

NoSQL further splits into [[document-database|document]], [[key-value-database|KV]], [[graph-database|graph]], [[wide-column-database|wide-column]], [[in-memory-database|in-memory]], [[timeseries-database|time-series]], search.

## DBMS vs database

- **Database** — the *data*.
- **DBMS** — the *software* that manages the database (Postgres the engine, vs the actual `mydb` you create in it).

## Picking a database — quick decision tree

1. Need ACID + complex joins? → **Relational**.
2. Document-shaped data, schema flexibility? → **Document**.
3. Caching / sub-millisecond reads? → **In-memory**.
4. Petabyte time-series? → **Time-series** or **wide-column**.
5. Highly relational at scale? → **Graph**.
6. Aggregations across billions of rows? → **Columnar** (in a warehouse).
7. Full-text search? → **Search engine**.

## On GCP

- **OLTP**: [[../../../gcp/databases/cloud-sql|Cloud SQL]], [[../../../gcp/databases/cloud-spanner|Spanner]].
- **NoSQL**: [[../../../gcp/databases/cloud-bigtable|Bigtable]], [[../../../gcp/databases/cloud-datastore|Firestore/Datastore]].
- **Cache**: [[../../../gcp/databases/memorystore|Memorystore]].
- **Analytics**: [[../../../gcp/analytics/bigquery|BigQuery]].

## Interview Questions

1. **Database** vs **DBMS** — clarify.
2. Walk through choosing a DB for various workloads.
3. **SQL** vs **NoSQL** — when prefer which?

## Related pages

> [!multi-column]
>
>> [!card] Storage hub
>> [[data-storage|Data Storage]], [[relational-database|Relational Database]], [[non-relational-database|Non-relational Database]]
>
>
>> [!card] Theory
>> [[../../../dbms/acid-properties|ACID Properties]], [[../../../dbms/database-normalization|Normalization]]
>
>
>> [!card] Management
>> [[../data-management/data-management|Data Management]]
>
>
>> [!card] Books
>> [[../../../books/designing-data-intensive-applications|DDIA]]

