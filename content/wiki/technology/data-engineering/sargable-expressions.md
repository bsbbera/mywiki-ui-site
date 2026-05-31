---
title: Sargable Expressions
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Sargable Expressions
  - Sargable
category: Computer Science
tags:
  - DataEngineering
  - SQL
  - Performance
banner:
publish: true
---

> "A self that goes on changing is a self that goes on living."
> <cite>— Virginia Woolf</cite>

---

**Sargable**, short for **S**earch **ARG**ument **ABLE**, refers to queries that **can take advantage of indexes** to speed up execution. A query that fails this definition is **non-sargable** and usually has a negative effect on performance. Making a query sargable can dramatically improve performance even without index changes — but combined with the right indexes, the gains are dramatic (source: Concepts/Sargable Expressions.md).

A common non-sargable mistake: **wrapping the indexed column in a function** in the `WHERE` clause. Sargability also applies to `ORDER BY`, `GROUP BY`, and `HAVING`. Only the `SELECT` clause can hold non-sargable expressions without performance impact.

> Note: sargability rules vary slightly by database engine. Modern optimizers can sometimes "see through" simple function calls (e.g. Postgres expression indexes), but the safest practice is to write sargable queries.

## Operators

| Generally sargable | Generally NOT sargable / unhelpful |
| --- | --- |
| `=`, `>`, `<`, `>=`, `<=` | `<>`, `!=` |
| `BETWEEN` | `NOT IN`, `NOT EXISTS`, `NOT LIKE` |
| `LIKE 'value%'` (no leading wildcard) | `LIKE '%value%'` |
| `IS [NOT] NULL` | `OR` (often forces full scan) |
| `EXISTS` | functions on indexed columns |

## Examples

### Don't wrap indexed columns in functions

```sql
-- BAD: function on the indexed column → table scan
SELECT * FROM orders WHERE YEAR(order_date) = 2024;

-- GOOD: rewrite as range
SELECT * FROM orders 
WHERE order_date >= '2024-01-01' AND order_date <= '2024-12-31';

-- Equivalent
SELECT * FROM orders 
WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';
```

### IsNull → explicit

```sql
-- BAD
WHERE ISNULL(FullName, 'Tom') = 'Tom'

-- GOOD
WHERE FullName = 'Tom' OR FullName IS NULL
```

### SUBSTRING → LIKE prefix

```sql
-- BAD
WHERE SUBSTRING(DealerName, 1, 4) = 'Ford'

-- GOOD
WHERE DealerName LIKE 'Ford%'
```

### DateDiff → date arithmetic

```sql
-- BAD
WHERE DATEDIFF(month, OrderDate, GETDATE()) >= 30

-- GOOD
WHERE OrderDate < DATEADD(month, -30, GETDATE())
```

### LIKE leading wildcard

```sql
-- BAD: leading wildcard → full table scan
WHERE Field LIKE '%value%'

-- GOOD: prefix-only can use B-tree index
WHERE Field LIKE 'value%'
```

For full-text search needs (`%foo%` style), use a **full-text index** (Postgres `tsvector`, MySQL FULLTEXT, Elasticsearch).

## Why this matters

A non-sargable predicate forces a **full table scan** even when an index exists, because the optimizer can't use the index to seek. On a 100M-row table, that's the difference between **5 ms** (index seek) and **5 minutes** (full scan).

## Modern caveats

- **Postgres expression indexes** — `CREATE INDEX ON orders ((YEAR(order_date)))` makes a function-wrapped predicate sargable.
- **Generated columns** (Postgres, MySQL) — pre-compute the function value into a column, index that.
- **Columnar warehouses** ([[../cloud/gcp/analytics/bigquery|BigQuery]], Snowflake) — sargability is less critical because of full-column pruning + parallel scans, but partition + cluster predicates still matter.

## Advantages of sargability

- Use indexes effectively.
- Speed up query performance.
- Consume less system resources (CPU, memory, IO).

## Interview Questions

1. What does **sargable** mean?
2. Rewrite `WHERE YEAR(date) = 2024` to be sargable.
3. Why does `LIKE '%foo%'` defeat indexes?
4. **Expression indexes** in Postgres — what problem do they solve?
5. Does sargability matter in BigQuery?

## Related pages

> [!multi-column]
>
>> [!card] Performance
>> [[indexing|Indexing]], [[cardinality|Cardinality]]
>
>
>> [!card] SQL
>> [[../guides/sql-guide|SQL Guide]]
>
>
>> [!card] People
>> [[../../people/edgar-f-codd|Edgar F. Codd]]

