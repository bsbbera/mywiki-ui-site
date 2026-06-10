---
title: SQL Patterns & Best Practices
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - SQL patterns
  - SQL window functions
  - SQL best practices
  - SQL execution order
  - ROW_NUMBER RANK DENSE_RANK
  - SQL pivot
category: Guides
tags:
  - SQL
  - DataEngineering
  - Analytics
  - WindowFunctions
  - BestPractices
  - Guide
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "Data is the new oil. SQL is the refinery."
> <cite>— Adapted</cite>

---

<span class="at-kicker">Guides · SQL</span>

# SQL Patterns & Best Practices

<p class="at-lead">
SQL is the universal language of data — but writing SQL that is correct, readable, and performant requires understanding how the query engine actually executes your code. This guide covers execution order, window functions, ranking patterns, pivot techniques, and professional best practices for production SQL.
</p>

<span class="at-stat">execution order</span> &nbsp;·&nbsp; <span class="at-stat">window functions</span> &nbsp;·&nbsp; <span class="at-stat">ranking</span> patterns &nbsp;·&nbsp; <span class="at-mark">SQL that runs fast and reads clearly</span>

<span class="at-kicker">Execution Model</span>

## SQL Order of Execution

The most important thing to understand about SQL: **the order you write clauses is NOT the order they execute**. The SQL engine processes clauses in a specific logical order, which determines what data is available at each step and explains many common errors.

### Logical Execution Order

| Order | Clause | What Happens |
| --- | --- | --- |
| **1** | `FROM` (& `JOIN`) | Build the base dataset by merging tables per JOIN conditions |
| **2** | `WHERE` | Filter individual rows (aggregates not yet available) |
| **3** | `GROUP BY` | Collapse rows into groups |
| **4** | `HAVING` | Filter groups (aggregates now available) |
| **5** | `WINDOW` | Compute window function results |
| **6** | `SELECT` | Project columns, compute expressions, apply aliases |
| **7** | `DISTINCT` | Remove duplicate rows from result |
| **8** | `UNION` | Combine result sets |
| **9** | `ORDER BY` | Sort the final result set |
| **10** | `LIMIT` / `OFFSET` | Restrict output row count |

> [!warning]
> **Column aliases defined in `SELECT` cannot be used in `WHERE` or `GROUP BY`** — because `SELECT` runs after both. You must repeat the expression or use a subquery/CTE. In most databases you CAN use `SELECT` aliases in `ORDER BY` because `ORDER BY` runs last.

### Per-Clause Optimization Tips

> [!grid|cols2]
>
>> [!card|section]
>> ###### FROM & JOIN
>> ### *Join* Optimization
>> The database merges all tables per JOIN ON clauses and fetches subqueries here.
>> - Avoid nested subqueries within JOIN tables — use CTEs instead
>> - Avoid complex logic within JOIN conditions
>> - **Apply filter conditions in JOIN ON clauses** rather than WHERE when joining large tables — reduces the join dataset size
>
>> [!card|section]
>> ###### WHERE
>> ### *Filter* Early
>> Filters rows before grouping — reduces data processed by GROUP BY and HAVING.
>> - **Do not use aggregate functions in WHERE** — aggregates haven't run yet (use HAVING instead)
>> - Avoid applying functions to columns in WHERE: `WHERE YEAR(date_col) = 2024` prevents index use; prefer `WHERE date_col >= '2024-01-01'`
>> - **Avoid wildcards at the start of predicates**: `'%abc'` forces a full table scan
>
>> [!card|section]
>> ###### GROUP BY
>> ### *Group* Smartly
>> Collapses rows into groups for aggregate functions.
>> - Use for de-duplication when dealing with subqueries
>> - **Consider cardinality**: put high-cardinality columns first in GROUP BY for better performance
>> - Use DISTINCT only for simple de-duplication; GROUP BY for anything more complex
>
>> [!card|section]
>> ###### HAVING
>> ### *Filter* Groups
>> Filters aggregated results — runs AFTER GROUP BY.
>> - Use `WHERE` for non-aggregate filters (executes earlier, more efficient)
>> - Use `HAVING` only for conditions on aggregate results: `HAVING COUNT(*) > 5`
>
>> [!card|section]
>> ###### SELECT
>> ### *Project* Columns
>> Selects columns, aliases, aggregations, and window functions.
>> - Always list column names explicitly — **never use `SELECT *` in production**
>> - Write table alias before column names to identify source tables
>> - Avoid `SELECT DISTINCT` for de-duplication — use `GROUP BY` for clarity and performance
>
>> [!card|section]
>> ###### ORDER BY & LIMIT
>> ### *Sort* Last
>> Sorting applies to the complete result set.
>> - **Never use ORDER BY in subqueries** — it unnecessarily increases runtime without guaranteeing order for the outer query
>> - **Do not use LIMIT to reduce query runtime** — LIMIT runs last, the full query executes first; use WHERE or partitioning to reduce data scanned

<span class="at-kicker">Window Functions</span>

## Window Functions

**Window functions** perform calculations across a set of rows related to the current row, without collapsing those rows into a single group output (unlike GROUP BY). They are the most powerful and expressive feature in modern SQL.

### The OVER Clause

The `OVER` clause defines the **window** — the set of rows the function sees for each row it processes. It takes three optional arguments:

```sql
function_name() OVER (
    PARTITION BY col1, col2    -- Divide rows into groups (like GROUP BY but rows remain)
    ORDER BY col3              -- Define ordering within each partition
    ROWS BETWEEN unbounded preceding AND current row  -- Frame specification
)
```

### Window Categories

> [!grid|cols3]
>
>> [!card|section]
>> ###### AGGREGATE
>> ### *Aggregate* Windows
>> Apply aggregate functions over a window — unlike GROUP BY, rows are NOT collapsed.
>> `AVG()`, `SUM()`, `MIN()`, `MAX()`, `COUNT()`
>>
>> ```sql
>> -- Running total
>> SELECT order_id, amount,
>>   SUM(amount) OVER (
>>     ORDER BY order_date
>>     ROWS BETWEEN UNBOUNDED PRECEDING
>>                  AND CURRENT ROW
>>   ) AS running_total
>> FROM orders;
>> ```
>
>> [!card|section]
>> ###### RANKING
>> ### *Ranking* Functions
>> Assign ranks to rows within a partition.
>> `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `NTILE(n)`, `PERCENT_RANK()`
>>
>> ```sql
>> SELECT name, score,
>>   ROW_NUMBER()  OVER (ORDER BY score DESC) AS row_num,
>>   RANK()        OVER (ORDER BY score DESC) AS rnk,
>>   DENSE_RANK()  OVER (ORDER BY score DESC) AS dense_rnk
>> FROM students;
>> ```
>
>> [!card|section]
>> ###### ANALYTICAL
>> ### *Analytical* Functions
>> Look ahead or behind within the window.
>> `LAG()`, `LEAD()`, `FIRST_VALUE()`, `LAST_VALUE()`, `NTH_VALUE()`
>>
>> ```sql
>> SELECT order_date, revenue,
>>   LAG(revenue)  OVER (ORDER BY order_date) AS prev_revenue,
>>   LEAD(revenue) OVER (ORDER BY order_date) AS next_revenue,
>>   revenue - LAG(revenue) OVER (ORDER BY order_date) AS delta
>> FROM daily_sales;
>> ```

### Frame Specification

The `ROWS` or `RANGE` clause defines the frame — which rows within the partition the function computes over:

```sql
-- Default frame when ORDER BY is present:
RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW

-- Common frame patterns:
ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING  -- entire partition
ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW          -- cumulative
ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING                  -- 3-row sliding window
ROWS BETWEEN CURRENT ROW AND 1 FOLLOWING                  -- current + next

-- Full syntax example:
SELECT *,
  SUM(amount) OVER (
    ORDER BY date
    PARTITION BY customer_id
    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  ) AS customer_total
FROM orders;
```

> [!tip]
> `ROWS` uses physical row boundaries (exact row counts). `RANGE` uses logical value boundaries (groups all rows with the same ORDER BY value). For most use cases, `ROWS` gives more predictable behavior.

<span class="at-kicker">Ranking Functions</span>

## ROW_NUMBER, RANK, DENSE_RANK

Three ranking functions that look similar but behave differently when there are **ties** (rows with the same ORDER BY value):

### Comparison Table

| Value | `ROW_NUMBER()` | `RANK()` | `DENSE_RANK()` |
| --- | --- | --- | --- |
| 1.1 | 1 | 1 | 1 |
| 1.1 | 2 | 1 | 1 |
| 1.2 | 3 | 3 | 2 |
| 1.5 | 4 | 4 | 3 |

> [!grid|cols3]
>
>> [!card|section]
>> ###### ROW_NUMBER
>> ### *ROW_NUMBER()* — No Ties
>> Assigns a **unique sequential integer** to every row. Ties receive different row numbers (order is arbitrary for ties unless a tiebreaker is added to ORDER BY). No gaps in numbering.
>> - Use when: you need exactly one row per partition (top-N per group)
>> - No gaps, no duplicate ranks
>> - Non-deterministic for ties without a tiebreaker column
>
>> [!card|section]
>> ###### RANK
>> ### *RANK()* — Ties with Gaps
>> Tied rows receive the **same rank**. The next rank skips numbers equal to the count of tied rows — creating **gaps** in the sequence.
>> - Values `[1, 1, 3]` — rank 2 is skipped because two rows tied for 1st
>> - Use when: Olympic-style ranking where ties both get gold, and silver is skipped
>> - "For a chronological order, if there are two elements with the same value, they share the same rank. However, there will be a gap in ranking for the next element."
>
>> [!card|section]
>> ###### DENSE_RANK
>> ### *DENSE_RANK()* — Ties without Gaps
>> Tied rows receive the **same rank**. The next rank is always the immediately following integer — **no gaps** in the sequence.
>> - Values `[1, 1, 2]` — no gap after the tie
>> - Use when: you want "top N distinct rank levels" regardless of tie counts
>> - "There will be no gaps in rankings despite sharing of rank ahead."

### Common Pattern: Top-N Per Group

```sql
-- Get the top 3 products by revenue for each category
WITH ranked AS (
  SELECT
    category,
    product_name,
    revenue,
    ROW_NUMBER() OVER (
      PARTITION BY category
      ORDER BY revenue DESC
    ) AS rn
  FROM products
)
SELECT category, product_name, revenue
FROM ranked
WHERE rn <= 3;
```

> [!info]
> Use `ROW_NUMBER()` (not `RANK()`) for top-N queries when you want **exactly N rows per group**. `RANK()` could return more than N rows if there are ties at position N.

<span class="at-kicker">Pivot Techniques</span>

## Pivot Without PIVOT

Many SQL dialects lack a native `PIVOT` operator. The standard technique uses `CASE` expressions with aggregate functions to rotate rows into columns:

### The Pattern

```sql
-- Original data (long format):
-- Age  Name
-- 25   Nitin
-- 30   Amit
-- 27   Rishab
-- 29   Ankush

-- Goal (wide format):
-- Nitin  Amit  Rishab  Ankush
-- 25     30    27      29

-- Solution: conditional aggregation
WITH CTE AS (
  SELECT
    Age,
    Name,
    ROW_NUMBER() OVER () AS row_num
  FROM person_table
)
SELECT
  MAX(CASE Name WHEN 'Nitin'  THEN Age END) AS Nitin,
  MAX(CASE Name WHEN 'Amit'   THEN Age END) AS Amit,
  MAX(CASE Name WHEN 'Rishab' THEN Age END) AS Rishab,
  MAX(CASE Name WHEN 'Ankush' THEN Age END) AS Ankush
FROM CTE
GROUP BY row_num;
```

### Dynamic Pivot (When Values Are Unknown)

When pivot column values aren't known at query write time, use dynamic SQL to generate the CASE expressions programmatically:

```sql
-- In MySQL: generate dynamic CASE statements
SET @sql = NULL;
SELECT GROUP_CONCAT(
  DISTINCT CONCAT(
    "MAX(CASE WHEN name = '", name, "' THEN age END) AS `", name, "`"
  )
) INTO @sql
FROM person_table;

SET @sql = CONCAT('SELECT ', @sql, ' FROM person_table');
PREPARE stmt FROM @sql;
EXECUTE stmt;
```

> [!tip]
> The **conditional aggregation** pattern (`MAX(CASE WHEN ... THEN ... END)`) works in every SQL dialect — MySQL, PostgreSQL, BigQuery, Snowflake, SQL Server. Use `MAX()` or `MIN()` as the aggregator; since each cell has only one non-NULL value, either works.

<span class="at-kicker">Professional Standards</span>

## SQL Best Practices

### General Code Quality

> [!grid|cols2]
>
>> [!card|section]
>> ###### READABILITY
>> ### *Readable* SQL
>> 1. Write SQL keywords in **CAPITAL LETTERS** (`SELECT`, `FROM`, `WHERE`)
>> 2. Use **table aliases** with columns when joining multiple tables
>> 3. **Never use `SELECT *`** — always list explicit column names
>> 4. Add **useful comments** for complex logic; avoid over-commenting
>> 5. **Indent** consistently — subqueries and CTEs should be visually clear
>
>> [!card|section]
>> ###### PERFORMANCE
>> ### *Performant* SQL
>> 1. **Use JOINs instead of subqueries** for better performance and readability
>> 2. **Use CTEs** instead of multiple nested subqueries
>> 3. **Use JOIN keywords** (not WHERE-clause joining) for clarity
>> 4. **Use `UNION ALL` instead of `UNION`** when you know there are no duplicates — avoids the deduplication sort
>> 5. **Use `EXISTS` instead of `IN`** for subquery membership tests — more efficient
>
>> [!card|section]
>> ###### FILTERING
>> ### *Filter* Smartly
>> 1. **Use `WHERE` instead of `HAVING`** for non-aggregate filters — WHERE runs earlier
>> 2. **Avoid wildcards at the beginning of predicates** (`'%abc'`) — causes full table scan
>> 3. **Use filter in JOIN condition** rather than WHERE when filtering joined tables
>> 4. Avoid applying functions to indexed columns in WHERE — prevents index usage
>
>> [!card|section]
>> ###### SCALABILITY
>> ### *Scale* With Data
>> 1. **Get data into temp tables** then execute aggregate/join operations on limited records
>> 2. **Consider cardinality in GROUP BY** — put most selective column first
>> 3. **Never use ORDER BY in subqueries** — increases runtime without benefit
>> 4. **Never use LIMIT to reduce query cost** — full scan runs first, LIMIT applies last

### CTEs vs Subqueries

```sql
-- Hard to read (nested subqueries):
SELECT customer_id, total_revenue
FROM (
  SELECT customer_id, SUM(amount) AS total_revenue
  FROM (
    SELECT customer_id, amount
    FROM orders
    WHERE status = 'completed'
  ) completed_orders
  GROUP BY customer_id
) revenue_summary
WHERE total_revenue > 1000;

-- Easy to read (CTEs):
WITH completed_orders AS (
  SELECT customer_id, amount
  FROM orders
  WHERE status = 'completed'
),
revenue_summary AS (
  SELECT customer_id, SUM(amount) AS total_revenue
  FROM completed_orders
  GROUP BY customer_id
)
SELECT customer_id, total_revenue
FROM revenue_summary
WHERE total_revenue > 1000;
```

### UNION vs UNION ALL

```sql
-- UNION: deduplicates (runs a sort/hash) — use when tables may have overlapping rows
SELECT user_id FROM table_a
UNION
SELECT user_id FROM table_b;

-- UNION ALL: no deduplication (faster) — use when you know rows are distinct
SELECT user_id, 'A' AS source FROM table_a
UNION ALL
SELECT user_id, 'B' AS source FROM table_b;
```

> [!tip]
> **Group by for removing duplicates in subqueries** — when you need unique records and are using a subquery, `GROUP BY` is more explicit and controllable than `DISTINCT`. Use `DISTINCT` for simple top-level de-duplication.

## Related pages

> [!grid]
>
>> [!card]
>> ##### [[guides/sql-guide|SQL Guide]]
>> Foundational SQL reference — SELECT syntax, JOINs, aggregation, subqueries, and data types.
>
>> [!card]
>> ##### [[cloud/gcp/analytics/bigquery|BigQuery]]
>> BigQuery supports all window functions and standard SQL patterns covered here — plus partitioned tables, clustering, and BigQuery-specific optimizations.
>
>> [!card]
>> ##### [[data-engineering/data-storage/relational-database|Relational Databases]]
>> SQL runs on relational databases — understand the storage engine that executes these patterns.
>
>> [!card]
>> ##### [[data-engineering/data-processing/spark/spark-sql|Spark SQL]]
>> Spark SQL supports most of these patterns (window functions, CTEs, CASE pivots) on distributed datasets — same SQL, massive scale.
>
>> [!card] People & books
>> [[../../people/edgar-f-codd|Edgar F. Codd]] (relational model) · [[../../people/martin-fowler|Martin Fowler]] (software patterns)
