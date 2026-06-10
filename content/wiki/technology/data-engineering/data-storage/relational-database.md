---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Relational Database
Created:
  - 2026-04-29
aliases:
  - Relational Database
  - RDBMS
category: Computer Science
tags:
  - data-engineering
  - concept
  - Storage
  - SQL
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Storage</span>

# Relational Database

<p class="at-lead">
A relational database organizes data into tables that can be linked together based on common data. Each table has one or more columns with unique identifiers (primary key) referenced by foreign keys in other tables, forming relationships. The relational model was invented by E. F. Codd in 1970 and is the foundation of nearly every transactional system today.
</p>

<span class="at-stat">1970</span> Codd's relational model &nbsp;·&nbsp; <span class="at-stat">ACID</span> transaction guarantees &nbsp;·&nbsp; <span class="at-mark">The gold standard for structured data with complex relationships</span>

> [!tip] When Relational Wins
> Need ACID transactions? Complex multi-table joins? Strict schema enforcement? Regulatory compliance? Choose relational. The overhead of schema migrations is worth the guarantees for financial, healthcare, and operational systems.

<span class="at-kicker">Core Capabilities</span>

## Advantages

- **Complex queries** — joins across multiple tables.
- **Referential integrity** — enforced by foreign keys.
- **Fast updates** — single-machine writes are sub-millisecond.
- **ACID transactions** — see [[../../databases/acid-properties|ACID]].
- **Mature ecosystem** — drivers, ORMs, BI tools, decades of optimization.
- **Industry-standard SQL**.

## Disadvantages

- **Harder to scale** — typically [[../../software-engineering/vertical-scaling|vertically]]; horizontal scaling needs [[../../software-engineering/database-sharding|sharding]] or NewSQL.
- **More upfront design** — schemas must be modeled before data lands.
- **Schema migrations** — painful as schemas grow.

<span class="at-kicker">Use Cases</span>

## Use cases

- **Payment + booking systems**
- **ERP** (enterprise resource planning)
- **CRM** (customer relationship management)
- **SaaS applications**
- **E-commerce + web**
- Most **traditional applications**

<span class="at-kicker">Popular Systems</span>

## Popular relational DBs

- **Open-source**: PostgreSQL, MySQL, MariaDB, SQLite.
- **Commercial**: Oracle, SQL Server, IBM Db2.
- **Cloud-managed**: [[../../cloud/gcp/databases/cloud-sql|Cloud SQL]], Amazon RDS, Aurora, Azure SQL.
- **NewSQL** (distributed ACID): [[../../cloud/gcp/databases/cloud-spanner|Cloud Spanner]], CockroachDB, YugabyteDB, TiDB.

<span class="at-kicker">Modern Features</span>

## Modern relational features

- **JSON columns** — Postgres `JSONB`, MySQL `JSON`. Hybrid relational + document.
- **PostGIS** — geospatial extension on Postgres.
- **Logical replication / CDC** — see [[../data-ingestion/change-data-capture|CDC]].
- **Partitioning** — split large tables by date/region.

<span class="at-kicker">Decision Framework</span>

## Choosing a relational DB

| Need | Pick |
| --- | --- |
| Open-source + feature-rich | **Postgres** |
| Web-app default | **MySQL** / **Postgres** |
| Microsoft stack | **SQL Server** |
| Single-region cloud | **Cloud SQL** / **RDS** |
| Multi-region ACID | **Spanner** / **Cockroach** |
| HTAP | **AlloyDB** / **TiDB** / **SingleStore** |

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **Primary** vs **foreign** key.
2. **Vertical** vs **horizontal** scaling for relational DBs.
3. **NewSQL** — what problem does it solve?
4. **JSONB** in Postgres — when to use vs a document DB?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister storage
>> [[non-relational-database|Non-relational Database]], [[database|Database]], [[data-storage|Data Storage]]
>
>
>> [!card] Modeling + theory
>> [[../data-modeling/relational-modeling|Relational Modeling]], [[../../databases/acid-properties|ACID Properties]], [[../../databases/database-normalization|Normalization]]
>
>
>> [!card] Products
>> [[../../cloud/gcp/databases/cloud-sql|Cloud SQL]], [[../../cloud/gcp/databases/cloud-spanner|Cloud Spanner]], [[../../tools/databases-overview|Databases Overview]]
>
>
>> [!card] People
>> [[../../../people/edgar-f-codd|Edgar F. Codd]]
