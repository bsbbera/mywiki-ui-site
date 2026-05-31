---
title: Relational Database
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Relational Database
  - RDBMS
category: Computer Science
tags:
  - DataEngineering
  - Storage
  - SQL
banner:
publish: true
---

> "Investing in yourself is the best investment you will ever make."
> <cite>— Robin Sharma</cite>

---

A **relational database** organizes data into **tables** that can be linked together based on **common data**. Each table has one or more columns with **unique identifiers** (primary key) referenced by **foreign keys** in other tables, forming relationships (source: Concepts/Data Storage/Relational Database.md).

The relational model was invented by **E. F. Codd** in 1970 (Codd's 12 rules) and is the foundation of nearly every transactional system today.

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

## Use cases

- **Payment + booking systems**
- **ERP** (enterprise resource planning)
- **CRM** (customer relationship management)
- **SaaS applications**
- **E-commerce + web**
- Most **traditional applications**

## Popular relational DBs

- **Open-source**: PostgreSQL, MySQL, MariaDB, SQLite.
- **Commercial**: Oracle, SQL Server, IBM Db2.
- **Cloud-managed**: [[../../cloud/gcp/databases/cloud-sql|Cloud SQL]], Amazon RDS, Aurora, Azure SQL.
- **NewSQL** (distributed ACID): [[../../cloud/gcp/databases/cloud-spanner|Cloud Spanner]], CockroachDB, YugabyteDB, TiDB.

## Modern relational features

- **JSON columns** — Postgres `JSONB`, MySQL `JSON`. Hybrid relational + document.
- **PostGIS** — geospatial extension on Postgres.
- **Logical replication / CDC** — see [[../data-ingestion/change-data-capture|CDC]].
- **Partitioning** — split large tables by date/region.

## Choosing a relational DB

| Need | Pick |
| --- | --- |
| Open-source + feature-rich | **Postgres** |
| Web-app default | **MySQL** / **Postgres** |
| Microsoft stack | **SQL Server** |
| Single-region cloud | **Cloud SQL** / **RDS** |
| Multi-region ACID | **Spanner** / **Cockroach** |
| HTAP | **AlloyDB** / **TiDB** / **SingleStore** |

## Interview Questions

1. **Primary** vs **foreign** key.
2. **Vertical** vs **horizontal** scaling for relational DBs.
3. **NewSQL** — what problem does it solve?
4. **JSONB** in Postgres — when to use vs a document DB?

## Related pages

> [!multi-column]
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

