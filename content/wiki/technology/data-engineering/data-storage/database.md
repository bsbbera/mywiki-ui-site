---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Database
Created:
  - 2026-04-29
aliases:
  - Database
  - DB
category: Computer Science
tags:
  - data-engineering
  - concept
  - Storage
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Storage</span>

# Database

<p class="at-lead">
A database is an organized collection of inter-related data that models some aspect of the real world. Data is stored and accessed via a database management system (DBMS) that provides persistence, concurrency, querying, integrity, recovery, and security.
</p>

<span class="at-stat">1970</span> relational model invented &nbsp;·&nbsp; <span class="at-stat">2</span> major families (SQL/NoSQL) &nbsp;·&nbsp; <span class="at-mark">The structured foundation of virtually every software system</span>

> [!tip] DBMS vs Database
> The **database** is the *data*. The **DBMS** is the *software* that manages it (Postgres the engine, vs the actual `mydb` you create in it). Don't confuse the container with the contents.

<span class="at-kicker">Core Capabilities</span>

## What a database provides

- **Persistence** — data survives process restarts.
- **Concurrency** — many clients access simultaneously without corruption.
- **Querying** — high-level language (SQL, MongoDB query language, Cypher, etc.).
- **Integrity** — constraints (PK, FK, CHECK, UNIQUE).
- **Recovery** — backup + restore + point-in-time recovery.
- **Security** — authentication, authorization, encryption.

<span class="at-kicker">Database Types</span>

## Types

The two big families:

> [!grid|cols2]
>
> > [!card|section] [[relational-database|Relational]]
> > Strict, tabular, ACID. Examples: Postgres, MySQL, Oracle, SQL Server.
>
> > [!card|section] [[non-relational-database|Non-relational (NoSQL)]]
> > Flexible. Examples: MongoDB, Redis, Cassandra, Neo4j.

NoSQL further splits into [[document-database|document]], [[key-value-database|KV]], [[graph-database|graph]], [[wide-column-database|wide-column]], [[in-memory-database|in-memory]], [[timeseries-database|time-series]], search.

<span class="at-kicker">Decision Framework</span>

## Picking a database — quick decision tree

1. Need ACID + complex joins? → **Relational**.
2. Document-shaped data, schema flexibility? → **Document**.
3. Caching / sub-millisecond reads? → **In-memory**.
4. Petabyte time-series? → **Time-series** or **wide-column**.
5. Highly relational at scale? → **Graph**.
6. Aggregations across billions of rows? → **Columnar** (in a warehouse).
7. Full-text search? → **Search engine**.

<span class="at-kicker">Cloud Platforms</span>

## On GCP

- **OLTP**: [[../../cloud/gcp/databases/cloud-sql|Cloud SQL]], [[../../cloud/gcp/databases/cloud-spanner|Spanner]].
- **NoSQL**: [[../../cloud/gcp/databases/cloud-bigtable|Bigtable]], [[../../cloud/gcp/databases/cloud-datastore|Firestore/Datastore]].
- **Cache**: [[../../cloud/gcp/databases/memorystore|Memorystore]].
- **Analytics**: [[../../cloud/gcp/analytics/bigquery|BigQuery]].

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **Database** vs **DBMS** — clarify.
2. Walk through choosing a DB for various workloads.
3. **SQL** vs **NoSQL** — when prefer which?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Storage hub
>> [[data-storage|Data Storage]], [[relational-database|Relational Database]], [[non-relational-database|Non-relational Database]]
>
>
>> [!card] Theory
>> [[../../databases/acid-properties|ACID Properties]], [[../../databases/database-normalization|Normalization]]
>
>
>> [!card] Management
>> [[../data-management/data-management|Data Management]]
>
>
>> [!card] Books
>> [[../../../books/designing-data-intensive-applications|DDIA]]
