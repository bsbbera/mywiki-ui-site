---
title: Databases Overview
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Databases
  - Database Tools
category: Computer Science
tags:
  - DataEngineering
  - Database
  - Tools
banner:
dg-publish: true
publish: true
---

---

A quick reference catalog of databases commonly used in data engineering. Aggregated from the source `Tools/Databases/` tree (source: Tools/Databases/*.md).

## Open-source relational

### PostgreSQL

[Postgres](https://www.postgresql.org/) — open-source [[../concepts/data-storage/relational-database|RDBMS]] with 30+ years of active development. Renowned for **reliability, feature breadth, and performance**. Killer features: JSONB, PostGIS (geospatial), full-text search, extensions ecosystem (TimescaleDB, AGE for graph, pgvector). Default modern OLTP choice.

### MySQL

[MySQL](https://www.mysql.com/) — open-source RDBMS. Owned by Oracle. Massively deployed in web applications. Simpler than Postgres but typically less feature-rich for analytics.

### MariaDB

Drop-in MySQL replacement, community-driven fork. Compatible with MySQL clients/drivers.

### SQLite

Embedded; runs in-process. Powers most mobile apps. Not for multi-user OLTP.

## Commercial relational

### Microsoft SQL Server

Microsoft's enterprise RDBMS. Standard in Windows / .NET shops. Excellent BI integration (SSAS, SSIS, SSRS, Power BI).

### Oracle

Enterprise RDBMS — feature-rich, expensive, common in finance/government. PL/SQL is a powerful procedural extension.

## Cloud relational (managed)

### Amazon RDS

Managed relational DB on AWS — supports PostgreSQL, MySQL, MariaDB, Oracle, SQL Server. Removes operational burden.

### Amazon Aurora

AWS's enhanced RDS — MySQL/Postgres-compatible with **3× throughput** and storage that auto-scales. Aurora Serverless for variable workloads. Aurora Global Database for multi-region.

### Google Cloud SQL

See [[../../gcp/databases/cloud-sql|Cloud SQL]] — managed Postgres / MySQL / SQL Server on GCP.

### Azure SQL Database

Microsoft's managed SQL Server. Fully managed, intelligent tuning, geo-replication.

## NewSQL / Distributed SQL

### Google Cloud Spanner

See [[../../gcp/databases/cloud-spanner|Cloud Spanner]] — globally distributed ACID via TrueTime.

### CockroachDB

Open-source NewSQL inspired by Spanner. Postgres-compatible wire protocol.

### YugabyteDB

Open-source NewSQL — Postgres + Cassandra API compatibility.

### TiDB

Open-source HTAP — TiKV (OLTP) + TiFlash (OLAP).

### SingleStore (formerly MemSQL)

In-memory + columnar store. HTAP workload focus.

## Cloud data warehouses

### Google BigQuery

See [[../../gcp/analytics/bigquery|BigQuery]] — serverless petabyte-scale analytics on GCP. Capacitor columnar format on Colossus storage; Dremel query engine.

### Amazon Redshift

AWS's managed warehouse. Originally based on ParAccel; now uses RA3 nodes with separated storage (Redshift Managed Storage). Redshift Serverless option.

### Snowflake

Cloud-native warehouse spanning AWS/Azure/GCP. **Separated compute and storage** with **virtual warehouses** that auto-suspend. Zero-copy clones, time travel, marketplace.

### Azure Synapse Analytics

Microsoft's unified analytics platform — combines warehouse, data lake, Spark pools, pipelines.

### Databricks SQL (Lakehouse)

See [[../../databricks/databricks|Databricks]] — Spark + Delta Lake-based analytics.

### ClickHouse

Open-source OLAP DB. Extremely fast columnar engine. Used by Cloudflare, Sentry, Uber. Cloud-managed via ClickHouse Cloud.

### DuckDB

In-process OLAP DB — "**SQLite for analytics**". Embedded, single-file, runs in pandas/Python natively. Great for prototyping and laptop-scale analytics.

## NoSQL — Document

### MongoDB

Most popular document DB. JSON-like documents, flexible schema, sharding, replication.

### Couchbase

Document DB focused on **global distribution** + N1QL (SQL-like query language).

### RavenDB

.NET-friendly document store; first NoSQL DB to offer ACID across multiple documents.

### Amazon DocumentDB

AWS managed; MongoDB-compatible API.

### Azure Cosmos DB

Multi-model; document API among others.

## NoSQL — Wide-column

### Apache Cassandra

Open-source [[../concepts/data-storage/wide-column-database|wide-column]] DB; AP from CAP. Used by Netflix, Apple, Discord. Tunable consistency.

### Google Cloud Bigtable

See [[../../gcp/databases/cloud-bigtable|Cloud Bigtable]] — Google's BigTable paper made manifest. Powers Search, Maps, Gmail internally.

### HBase

Hadoop-native; modeled after BigTable paper. Java-heavy.

### ScyllaDB

C++ rewrite of Cassandra; faster, lower latency.

## NoSQL — Key-Value

### Redis

Open-source [[../concepts/data-storage/in-memory-database|in-memory]] KV store. Rich data structures (lists, sets, sorted sets, streams, HyperLogLog). Used as cache, queue, leaderboard, pub/sub. Now **Redis 7.x**; some forks emerged after license change (Valkey, KeyDB).

### Amazon DynamoDB

Managed KV + document; serverless, auto-scaling, single-digit ms latency. DynamoDB Streams for CDC.

### Memcached

Older, simpler than Redis; pure cache.

## NoSQL — Graph

### Neo4j

Most popular graph DB. Cypher query language; embedded option.

### Amazon Neptune

Managed graph DB; supports Gremlin and SPARQL.

### TigerGraph

Ultra-fast graph for very large graphs.

### ArangoDB

Multi-model — graph + document.

## Time-series

### InfluxDB

Popular open-source TSDB.

### TimescaleDB

Postgres extension; SQL-native time-series.

### Prometheus

Metrics-focused TSDB; Kubernetes ecosystem standard.

### Kdb+

Financial industry standard; q programming language; extremely fast.

## Comparison shortcuts

| Need | Pick |
| --- | --- |
| Open-source OLTP | **Postgres** |
| Cloud-managed OLTP | **Cloud SQL / RDS / Azure SQL** |
| Global ACID | **Spanner / Cockroach / Yugabyte** |
| Cloud warehouse | **BigQuery / Snowflake / Redshift** |
| Document NoSQL | **MongoDB / Firestore / Cosmos DB** |
| KV / cache | **Redis / DynamoDB / Memorystore** |
| Wide-column at scale | **Cassandra / Bigtable** |
| Time-series | **InfluxDB / TimescaleDB / Bigtable** |
| Graph | **Neo4j / Neptune** |
| Lakehouse | **Databricks / BigLake / Iceberg** |
| Embedded analytics | **DuckDB** |

## Related pages

> [!multi-column]
>
>> [!card] Storage concepts
>> [[../concepts/data-storage/data-storage|Data Storage]], [[../concepts/data-storage/relational-database|Relational Database]], [[../concepts/data-storage/non-relational-database|Non-relational Database]]
>
>
>> [!card] Sister catalogs
>> [[file-formats|File Formats]], [[object-storage|Object Storage]], [[processing-tools|Processing Tools]]
>
>
>> [!card] GCP products
>> [[../../gcp/databases/cloud-sql|Cloud SQL]], [[../../gcp/databases/cloud-spanner|Cloud Spanner]], [[../../gcp/databases/cloud-bigtable|Cloud Bigtable]], [[../../gcp/databases/memorystore|Memorystore]], [[../../gcp/analytics/bigquery|BigQuery]]
>
>
>> [!card] People
>> [[../../people/edgar-f-codd|Edgar F. Codd]], [[../../people/jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]]

