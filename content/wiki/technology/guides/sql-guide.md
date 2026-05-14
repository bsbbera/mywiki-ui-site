---
title: SQL Guide
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - SQL Guide
  - SQL Reference
category: Computer Science
tags:
  - DataEngineering
  - SQL
  - Guide
banner:
dg-publish: true
---

---

A general SQL reference for data engineers — not specific to any variant, focused on the most-used features in DE work (source: Guides/SQL Guide.md).

## Order of operations

SQL evaluates clauses in this order (regardless of how you write them):

1. `FROM` (incl. `JOIN`s)
2. `WHERE`
3. `GROUP BY`
4. `HAVING`
5. `WINDOW`
6. `SELECT`
7. `DISTINCT`
8. `UNION`
9. `ORDER BY`
10. `LIMIT` / `OFFSET`

This is **why aggregate functions don't work in `WHERE`** (it runs before `GROUP BY`); they belong in `HAVING`.

## 1. Beginner SQL

### Basic clauses

- **`SELECT`** — choose columns/expressions to return.
- **`FROM`** — pick the source table.
- **`WHERE`** — filter rows.
- **`ORDER BY`** — sort (ascending by default; `DESC` for descending).

### Joins

| Join | Returns |
| --- | --- |
| **INNER JOIN** | Only rows matching in both tables |
| **LEFT JOIN** | All from left + matched rows from right; NULL where no match |
| **RIGHT JOIN** | All from right + matched rows from left; NULL where no match |
| **FULL OUTER JOIN** | All rows from both; NULLs where no match |
| **CROSS JOIN** | Cartesian product (every left × every right) |
| **SELF JOIN** | A table joined to itself |

### `UNION` vs `UNION ALL`

- **`UNION`** — combines results, **deduplicating**.
- **`UNION ALL`** — combines results, **keeping duplicates** (faster).

```sql
SELECT col1, col2 FROM table_1
UNION ALL
SELECT col1, col2 FROM table_2;
```

### Filtering operators

```sql
-- AND / OR
WHERE City = 'London' AND Country = 'UK'
WHERE City = 'London' OR City = 'Paris'

-- BETWEEN
WHERE Price BETWEEN 50 AND 60

-- LIKE wildcards
WHERE City LIKE 'S%'      -- starts with S
WHERE City LIKE '%ar%'    -- contains 'ar'
WHERE City LIKE '_a%'     -- second char is 'a'
```

### LIMIT (variant-specific)

```sql
-- SQL Server
SELECT TOP 3 * FROM Customers;

-- MySQL / Postgres / BigQuery
SELECT * FROM Customers LIMIT 3;

-- Oracle
SELECT * FROM Customers WHERE ROWNUM <= 3;
```

### `WHERE` vs `HAVING`

- **`WHERE`** — filters **individual rows**, runs **before `GROUP BY`**.
- **`HAVING`** — filters **aggregated results**, runs **after `GROUP BY`**.

## 2. Intermediate SQL

### CTE vs Subquery

| | CTE | Subquery |
| --- | --- | --- |
| Reuse | Multiple times in one query | Once |
| Recursive | Yes (`WITH RECURSIVE`) | No |
| Readability | Generally better | Cluttered for complex |
| Use cases | Building blocks; recursive structures | `WHERE` filters; column expressions |

### Table vs View vs Materialized View

| | Table | View | Materialized View |
| --- | --- | --- | --- |
| Storage | Physical | Virtual | Physical (snapshot) |
| Query speed | Fast | Slower (re-runs) | Fast |
| Maintenance | None | None | Refresh required |
| Underlying drop | Independent | Breaks view | View survives |

### CASE statements

SQL's if-else.

```sql
SELECT OrderID,
       CASE
         WHEN Quantity > 30 THEN 'Big'
         WHEN Quantity = 30 THEN 'Exact'
         ELSE 'Small'
       END AS Size
FROM OrderDetails;
```

### DML vs DDL

- **DML — Data Manipulation Language**: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `MERGE` — works **with data**.
- **DDL — Data Definition Language**: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `COMMENT`, `RENAME` — works **with schema**.

### Aggregate functions

`COUNT()`, `SUM()`, `AVG()`, `MAX()`, `MIN()`. Combine with `GROUP BY`. Filter aggregates with `HAVING`.

## 3. Advanced SQL

### Window functions

Perform calculations on a set of related rows **without collapsing** them. Unlike aggregates, every row in the window keeps its identity.

```sql
SELECT
  employee_id,
  department,
  salary,
  AVG(salary) OVER (PARTITION BY department)        AS dept_avg,
  RANK()       OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank,
  LAG(salary)  OVER (PARTITION BY department ORDER BY hire_date) AS prev_hire_salary
FROM employees;
```

Common window functions:

- **Aggregates** — `SUM`, `AVG`, `COUNT`, `MIN`, `MAX` over a window.
- **Ranking** — `ROW_NUMBER`, `RANK`, `DENSE_RANK`, `NTILE`.
- **Lead/Lag** — `LAG`, `LEAD`, `FIRST_VALUE`, `LAST_VALUE`.

### Correlated subqueries

A subquery that references the outer query — evaluated once per outer row, so can be slow.

```sql
SELECT employee_number, name
FROM employees emp
WHERE salary > (
  SELECT AVG(salary)
  FROM employees
  WHERE department = emp.department
);
```

Outer references each `emp.department` → subquery runs per outer row. Often rewriteable as a `JOIN` + `OVER` for better performance.

### Common DE patterns

- **`MERGE`** for upserts.
- **`PIVOT` / `UNPIVOT`** (or `CASE` in SELECT) for reshaping.
- **`UNNEST`** (BigQuery) / `JSONB_ARRAY_ELEMENTS` (Postgres) for nested data.
- **`QUALIFY`** (BigQuery, Snowflake) — filter on window function results.

### Performance tips

- Make queries **[[../sargable-expressions|sargable]]** — see also [[../concepts/software-engineering/indexing|Indexing]].
- Use **partitioning + clustering** (warehouses).
- **`EXPLAIN`** queries to understand plans.
- **Avoid `SELECT *`** in production.

## Variants worth knowing

- **PostgreSQL** — feature-rich, JSONB, window functions, materialized views, CTEs.
- **MySQL** — common; weaker analytics features (improved in 8.0).
- **SQL Server / T-SQL** — Microsoft variant; CTEs, window functions, `MERGE`.
- **BigQuery SQL** — standard SQL with `STRUCT`, `ARRAY`, `UNNEST`, `QUALIFY`.
- **Snowflake SQL** — standard with strong window functions, `QUALIFY`, time-travel queries.

## Interview Questions

1. **`WHERE`** vs **`HAVING`** — when each.
2. **CTE** vs **subquery** — pros/cons.
3. **Window functions** — what problem do they solve?
4. **`UNION`** vs **`UNION ALL`** — performance difference.
5. **Correlated subquery** — why is it often slow?
6. **Materialized view** — when use over a regular view?

## Related pages

> [!multi-column]
>
>> [!card] Performance
>> [[../sargable-expressions|Sargable Expressions]], [[../concepts/software-engineering/indexing|Indexing]], [[../concepts/data-modeling/cardinality|Cardinality]]
>
>
>> [!card] Practitioner guides
>> [[data-pipeline-best-practices|Pipeline Best Practices]], [[getting-started|Getting Started]]
>
>
>> [!card] Products
>> [[../../gcp/analytics/bigquery|BigQuery]], [[../tools/databases-overview|Databases Overview]]
>
>
>> [!card] People
>> [[../../people/edgar-f-codd|Edgar F. Codd]]

