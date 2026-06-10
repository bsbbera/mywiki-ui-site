---
title: Online Transaction Processing (OLTP)
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - OLTP
  - Online Transaction Processing
category: Computer Science
tags:
  - DataEngineering
  - Database
  - OLTP
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "The less you respond to negative people, the more positive your life will become."
> <cite>— Paulo Coelho</cite>

---

<span class="at-kicker">Data Processing · Transactional Pattern</span>

# Online Transaction Processing (OLTP)

<p class="at-lead">
OLTP is the management of transactional data — every payment, order, booking, and record that makes an organization run day-to-day. OLTP systems record these events with strict ACID guarantees and support fast, concurrent querying at sub-millisecond latency.
</p>

<span class="at-stat">Sub-ms Latency</span> point lookups and writes &nbsp;·&nbsp; <span class="at-stat">Strict ACID</span> transactional integrity &nbsp;·&nbsp; <span class="at-mark">fast, concurrent, row-level operations — the heartbeat of every operational system</span>

---

<span class="at-kicker">TRANSACTIONAL DATA</span>

## Transactional data

Transactional data tracks **business activities** — payments received, payments made, orders placed, inventory changes — typically with a **timestamp** and **numeric values** or references to other entities.

---

<span class="at-kicker">CHARACTERISTICS</span>

## OLTP characteristics

> [!grid|cols3]
>
>> [!card|section] High Concurrency
>> Thousands to millions of transactions per second on busy systems. Many users hitting the same tables simultaneously — connection pooling and replication are essential.
>
>> [!card|section] Strict ACID
>> **Atomicity, Consistency, Isolation, Durability** — transactional integrity is non-negotiable. Every payment either succeeds fully or rolls back completely.
>
>> [!card|section] Low Latency
>> Sub-millisecond reads and writes. Users expect immediate confirmation — no one waits 5 seconds after clicking "Buy Now."
>
>> [!card|section] Normalized Schema
>> 3NF/BCNF normalization minimizes redundancy and prevents update anomalies. Each fact is stored once; joins reconstruct the full picture at query time.
>
>> [!card|section] Row-oriented Storage
>> Reads and writes operate on complete rows (one customer record, one order). Row stores are optimal for these point lookups and small inserts/updates.
>
>> [!card|section] Operational Focus
>> OLTP captures *what is happening now*. Data flows downstream to OLAP for historical analysis. The two systems are complementary, not competing.

---

<span class="at-kicker">REAL-WORLD EXAMPLES</span>

## Examples

- ATM / online banking.
- Credit card payment processing (online + in-store).
- Online bookings (ticketing, reservation systems).
- Record keeping — health records, inventory, production scheduling, claims, customer service tickets.

---

<span class="at-kicker">ECOSYSTEM</span>

## Popular OLTP systems

> [!grid|cols2]
>
>> [!card|section] Relational & NewSQL
>> - **Relational**: Postgres, MySQL, SQL Server, Oracle
>> - **NewSQL**: Google Spanner, CockroachDB, YugabyteDB — globally distributed ACID
>> - **Serverless**: AlloyDB, Aurora Serverless
>
>> [!card|section] Cloud-managed & NoSQL
>> - **Cloud-managed**: [[../../cloud/gcp/databases/cloud-sql|Cloud SQL]], [[../../cloud/gcp/databases/cloud-spanner|Spanner]], Amazon RDS / Aurora, Azure SQL
>> - **NoSQL OLTP**: DynamoDB, MongoDB (document), Cassandra (wide-column)

---

<span class="at-kicker">COMPARISON</span>

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

---

<span class="at-kicker">DESIGN PRINCIPLES</span>

## Designing for OLTP

- **Normalize** to 3NF or BCNF to reduce update anomalies.
- **Index** carefully — queries vs writes trade-off.
- **Connection pooling** — DB connections are expensive.
- **Replication** — primary + read replicas for scale.
- **Sharding** when vertical scaling stops working — see [[../../software-engineering/database-sharding|Sharding]].

---

<span class="at-kicker">MODERN EVOLUTION</span>

## Modern OLTP innovations

- **NewSQL** — globally distributed ACID (Spanner, Cockroach, Yugabyte).
- **HTAP** — combine OLTP + analytics in one system; see [[hybrid-transactional-analytical-processing|HTAP]].
- **Serverless OLTP** — AlloyDB, Aurora Serverless.

> [!tip] OLTP as the source of truth
> Every data warehouse ultimately derives its facts from OLTP systems — the operational source of record. Designing OLTP schemas with eventual analytical consumption in mind (stable primary keys, timestamps on all rows, soft deletes) dramatically simplifies downstream ingestion and CDC pipelines.

---

<span class="at-kicker">INTERVIEW PREP</span>

## Interview Questions

1. **OLTP** vs **OLAP** characteristics.
2. Why is **3NF** common in OLTP but rare in warehouses?
3. How do you scale a Postgres OLTP DB beyond a single primary?
4. What is **NewSQL** and what problem does it solve?

---

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister workloads
>> [[online-analytical-processing|OLAP]], [[hybrid-transactional-analytical-processing|HTAP]]
>
>
>> [!card] Storage + theory
>> [[../data-storage/relational-database|Relational Database]], [[../../databases/acid-properties|ACID Properties]], [[../data-modeling/normalization|Normalization]]
>
>
>> [!card] Products
>> [[../../cloud/gcp/databases/cloud-sql|Cloud SQL]], [[../../cloud/gcp/databases/cloud-spanner|Cloud Spanner]]
>
>
>> [!card] People
>> [[../../../people/edgar-f-codd|Edgar F. Codd]]
