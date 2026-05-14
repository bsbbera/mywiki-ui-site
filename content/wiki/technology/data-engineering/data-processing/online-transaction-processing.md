---
title: Online Transaction Processing (OLTP)
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - OLTP
  - Online Transaction Processing
category: Computer Science
tags:
  - DataEngineering
  - Database
  - OLTP
banner:
dg-publish: true
publish: true
---

---

**Online Transaction Processing (OLTP)** is the management of **transactional data** — the data generated in the day-to-day operation of an organization. OLTP systems **record** transactional data and **support querying** of it (source: Concepts/Data Processing/Online Transaction Processing.md).

## Transactional data

Transactional data tracks **business activities** — payments received, payments made, orders placed, inventory changes — typically with a **timestamp** and **numeric values** or references to other entities.

## OLTP characteristics

- **Many small transactions** — thousands to millions per second on busy systems.
- **Strict ACID** — transactional integrity is non-negotiable.
- **Low latency** — sub-millisecond reads/writes.
- **High concurrency** — many users hitting the same tables.
- **[[../data-modeling/normalization|Normalized]] schema** (3NF/BCNF) to minimize redundancy and update anomalies.
- **Row-oriented storage** — typically.

## Examples

(source: Concepts/Data Processing/Online Transaction Processing.md)

- ATM / online banking.
- Credit card payment processing (online + in-store).
- Online bookings (ticketing, reservation systems).
- Record keeping — health records, inventory, production scheduling, claims, customer service tickets.

## Popular OLTP systems

- [[../data-storage/relational-database|Relational]] — Postgres, MySQL, SQL Server, Oracle.
- **NewSQL** — Google Spanner, CockroachDB, YugabyteDB.
- **Cloud-managed** — [[../../../gcp/databases/cloud-sql|Cloud SQL]], [[../../../gcp/databases/cloud-spanner|Spanner]], Amazon RDS / Aurora, Azure SQL.
- **NoSQL OLTP** — DynamoDB, MongoDB (document), Cassandra (wide-column).

## OLTP vs OLAP

| | OLTP | [[online-analytical-processing\|OLAP]] |
| --- | --- | --- |
| Workload | Transactions | Analytics |
| Schema | Normalized | Denormalized |
| Storage | Row-oriented | Column-oriented |
| Query | Point lookups, small writes | Aggregations, scans |
| Latency | Sub-ms | Seconds–minutes |
| Volume | GB → TB | TB → PB |
| Examples | Cloud SQL | BigQuery |

## Designing for OLTP

- **Normalize** to 3NF or BCNF to reduce update anomalies.
- **Index** carefully — queries vs writes trade-off.
- **Connection pooling** — DB connections are expensive.
- **Replication** — primary + read replicas for scale.
- **Sharding** when vertical scaling stops working — see [[../software-engineering/database-sharding|Sharding]].

## Modern OLTP innovations

- **NewSQL** — globally distributed ACID (Spanner, Cockroach, Yugabyte).
- **HTAP** — combine OLTP + analytics in one system; see [[hybrid-transactional-analytical-processing|HTAP]].
- **Serverless OLTP** — AlloyDB, Aurora Serverless.

## Interview Questions

1. **OLTP** vs **OLAP** characteristics.
2. Why is **3NF** common in OLTP but rare in warehouses?
3. How do you scale a Postgres OLTP DB beyond a single primary?
4. What is **NewSQL** and what problem does it solve?

## Related pages

> [!multi-column]
>
>> [!card] Sister workloads
>> [[online-analytical-processing|OLAP]], [[hybrid-transactional-analytical-processing|HTAP]]
>
>
>> [!card] Storage + theory
>> [[../data-storage/relational-database|Relational Database]], [[../../../dbms/acid-properties|ACID Properties]], [[../data-modeling/normalization|Normalization]]
>
>
>> [!card] Products
>> [[../../../gcp/databases/cloud-sql|Cloud SQL]], [[../../../gcp/databases/cloud-spanner|Cloud Spanner]]
>
>
>> [!card] People
>> [[../../../people/edgar-f-codd|Edgar F. Codd]]

