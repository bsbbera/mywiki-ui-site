---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Sargable Expressions
Created:
  - 2026-05-30
aliases:
  - Sargable
  - Sargable Expressions
  - Non-sargable
category: Computer Science
tags:
  - data-engineering
  - concept
  - Performance
  - SQL
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Performance</span>

# Sargable Expressions

<p class="at-lead">
A sargable expression (Search ARGument ABLE) is a query condition that can take advantage of indexes or partitions to efficiently retrieve data from a database. Writing sargable expressions is essential for query performance — it lets the optimizer skip full table scans and zero in on the relevant data.
</p>

<span class="at-stat">10×–100×</span> faster queries &nbsp;·&nbsp; <span class="at-stat">SARG</span> = Search ARGument &nbsp;·&nbsp; <span class="at-mark">The art of writing queries that use indexes effectively</span>

> [!tip] The Sargable Principle
> If you wrap an indexed column in a function, the index can't be used. `WHERE UPPER(name) = 'ALICE'` is non-sargable. `WHERE name = 'Alice'` is sargable. Always operate on the literal side, not the column side.

<span class="at-kicker">Examples</span>

## Sargable vs Non-sargable

### Non-sargable (bad)

```sql
-- Function on column prevents index use
SELECT * FROM orders WHERE YEAR(order_date) = 2024;

-- Arithmetic on column prevents index use
SELECT * FROM orders WHERE total * 1.1 > 100;

-- Implicit conversion can hurt
SELECT * FROM users WHERE phone_number = 1234567890; -- int vs varchar

-- Leading wildcard prevents index use
SELECT * FROM products WHERE name LIKE '%widget%';

-- NOT on indexed column
SELECT * FROM employees WHERE NOT department = 'Sales';

-- IS NULL on some databases
SELECT * FROM orders WHERE tracking_number IS NULL;
```

### Sargable (good)

```sql
-- Range scan on indexed column
SELECT * FROM orders WHERE order_date >= '2024-01-01' 
                        AND order_date < '2025-01-01';

-- Arithmetic on literal side only
SELECT * FROM orders WHERE total > 100 / 1.1;

-- Explicit conversion
SELECT * FROM users WHERE phone_number = '1234567890';

-- Trailing wildcard can use index
SELECT * FROM products WHERE name LIKE 'widget%';

-- Equivalent positive condition
SELECT * FROM employees WHERE department <> 'Sales';

-- Alternative for NULL (database dependent)
SELECT * FROM orders WHERE tracking_number = '' OR tracking_number IS NULL;
```

<span class="at-kicker">Partition Pruning</span>

## Partition pruning

Sargability is even more critical for partitioned tables. The query planner must evaluate conditions against partition keys to **prune** (skip) irrelevant partitions.

```sql
-- Good: partition key in WHERE, no function
SELECT * FROM events 
WHERE event_date BETWEEN '2024-01-01' AND '2024-01-31';

-- Bad: function on partition key reads ALL partitions
SELECT * FROM events 
WHERE DATE_TRUNC('month', event_date) = '2024-01-01';
```

<span class="at-kicker">Common Pitfalls</span>

## Common pitfalls

> [!grid|cols2]
>
> > [!card|section] Functions on columns
> > `YEAR()`, `UPPER()`, `DATE()`, `CAST()` on indexed columns prevent index use. Compute on the literal side instead.
>
> > [!card|section] Implicit conversions
> > Comparing string column to number causes implicit `CAST`. Always match types explicitly.
>
> > [!card|section] Leading wildcards
> > `LIKE '%text%'` can't use B-tree indexes. Use full-text search (Elasticsearch, OpenSearch) or reverse indexes.
>
> > [!card|section] Arithmetic on columns
> > `WHERE col * 2 > 100` is bad. `WHERE col > 100 / 2` is good.

<span class="at-kicker">Platform Notes</span>

## Platform-specific notes

### BigQuery

- Partition pruning requires the partition column in `WHERE` without functions.
- Clustering columns benefit from sargable expressions too.
- `DATE_TRUNC` on partition column → no pruning.

### Postgres

- Expression indexes can help: `CREATE INDEX ON orders (YEAR(order_date))`.
- But expression indexes only help that exact expression.

### Spark SQL

- Partition pruning works on file-system layout (folder = partition).
- File format matters: Parquet/OrC support predicate pushdown.

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What makes a query **sargable**?
2. How does `WHERE YEAR(date_col) = 2024` kill performance? Rewrite it sargably.
3. Why does `LIKE '%term%'` prevent index use? What's the alternative?
4. How do **partition pruning** and **predicate pushdown** relate to sargability?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Performance
>> [[data-warehousing|Data Warehousing]], [[../data-processing/spark/spark-performance|Spark Performance]]
>
>
>> [!card] SQL
>> [[../data-processing/spark/spark-sql|Spark SQL]], [[sql-guide|SQL Guide]]
>
>
>> [!card] Storage
>> [[../data-storage/column-oriented-database|Column-oriented Database]], [[../../tools/file-formats|File Formats]]
