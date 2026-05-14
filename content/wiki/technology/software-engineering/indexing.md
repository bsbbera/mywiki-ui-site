---
title: Indexing
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Indexing
  - Indexes
  - Database Index
category: Computer Science
tags:
  - DataEngineering
  - Database
  - Performance
banner:
dg-publish: true
publish: true
---

---

An **index** is a **data structure** that lets you **quickly retrieve records** from a database object by creating **pointers** to where the data is stored. It's typically stored in a **key-value format** where the key is the field/column (sorted) and the value is the pointer(s) to the rows (source: Concepts/Software Engineering/Indexing.md).

```
Index on `email`:
  alice@example.com  →  row #42
  bob@example.com    →  row #17
  carol@example.com  →  row #89
```

Without the index, finding `alice@example.com` requires scanning every row (full table scan). With it, the lookup is **O(log n)** for a B-tree index.

## Why indexes matter

A **single missing index** can turn a 10 ms query into a 10 s query at scale. Indexes are the **single biggest** lever for OLTP database performance.

## Types of indexes

### B-tree (default)

- **Most common** — Postgres, MySQL InnoDB, Oracle, SQL Server default.
- Good for **equality** + **range** queries.
- O(log n) lookups, inserts, deletes.

### Hash

- O(1) equality lookups; **no range** queries.
- Postgres `USING HASH`; less common.

### Bitmap

- For **low-cardinality** columns (e.g. `gender`, `status`).
- Compresses well; great for warehouses.
- Common in Oracle / data warehouses.

### Inverted

- **Full-text search** (Elasticsearch, Postgres `tsvector`).
- Maps each token → list of documents containing it.

### Spatial / R-tree / GiST

- Geographic queries (PostGIS, MySQL spatial).

### Bloom filters

- Probabilistic; "definitely not in" / "maybe in".
- Used for fast existence tests in LSM stores (Cassandra, RocksDB, BigQuery).

### LSM-tree (write-optimized)

- Used by Cassandra, RocksDB, [[../../../gcp/databases/cloud-bigtable|Bigtable]].
- Optimized for **write** throughput — sequential disk writes.

## Trade-offs

Indexes accelerate **reads** but **slow writes** — every INSERT/UPDATE has to update the index.

- **Few indexes** → fast writes, slow reads.
- **Many indexes** → fast reads, slow writes, more storage.

Pick indexes based on your **most common queries**.

## Designing good indexes

- Index columns used in **`WHERE`**, **`JOIN`**, **`ORDER BY`**.
- **Composite indexes** for multi-column predicates — column order matters.
- **Partial indexes** for filtered subsets (`WHERE status = 'active'`).
- **Functional indexes** for expressions (`LOWER(email)`).
- **Covering indexes** include all queried columns → no row fetch.

## Sargable queries

Queries that **can use** indexes are called **[[../sargable-expressions|sargable]]**. `WHERE YEAR(date) = 2024` can't use a date index; `WHERE date BETWEEN '2024-01-01' AND '2024-12-31'` can.

## Index tuning

- **`EXPLAIN`** the query plan.
- Look for **sequential scans** on large tables → missing index.
- Watch for **index bloat** (Postgres) → reindex periodically.
- **Drop unused indexes** — they cost write performance.

## Indexes in modern stores

- [[../../../gcp/analytics/bigquery|BigQuery]] uses **clustering** + **partitioning** instead of traditional indexes (with limited search index support added 2023).
- **Cassandra** uses partition keys + clustering keys, not B-tree indexes.
- **Bigtable** uses row keys directly — design row key for queries.

## Interview Questions

1. **B-tree** vs **hash** vs **bitmap** indexes.
2. Why can too many indexes hurt performance?
3. **Composite index** — does column order matter? Why?
4. **Covering index** — what's the benefit?
5. How do **partitioning** + **clustering** in BigQuery replace traditional indexes?

## Related pages

> [!multi-column]
>
>> [!card] Performance
>> [[../../sargable-expressions|Sargable Expressions]], [[../data-modeling/cardinality|Cardinality]]
>
>
>> [!card] SQL + products
>> [[../../guides/sql-guide|SQL Guide]], [[../../../gcp/analytics/bigquery|BigQuery]]
>
>
>> [!card] Storage
>> [[../data-storage/relational-database|Relational Database]], [[../data-storage/column-oriented-database|Columnar Storage]]

