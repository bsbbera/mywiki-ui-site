---
title: BigQuery User-Defined Functions
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:35:00 pm
aliases:
  - BQ UDFs
  - User Defined Functions
category: Cloud
tags:
  - GCP
  - BigQuery
  - SQL
banner:
publish: true
---

> "Life begins at the end of our comfort zone."
> <cite>— Neale Donald Walsch</cite>

---

A **User-Defined Function (UDF)** lets you define a reusable function — in **SQL** or **JavaScript** — that accepts inputs, performs operations, and returns a value, callable like a built-in function (source: Google Cloud Platform - User Defined Functions in BigQuery.md).

UDFs are how you encode **business logic, data-cleansing rules, parsing, custom math** consistently across queries and teams.

## Two flavors

| Flavor | Scope | Use case |
| --- | --- | --- |
| **Temporary UDF** | Defined and used in a single query | Quick experiments, test a transformation |
| **Persistent UDF** | Stored in a project + dataset | Reusable across queries, projects, teams |

(source: Google Cloud Platform - User Defined Functions in BigQuery.md)

## Two languages

- **SQL UDF** — wrap an expression; planner can inline it; usually fastest.
- **JavaScript UDF** — full JS in a sandboxed runtime; useful for complex string manipulation, regex, data conversions that SQL can't express cleanly. Can include external libraries via `OPTIONS(library=...)`.

## Temporary SQL UDF — example

The source illustrates a `cleanse_string` function that **trims whitespace, lowercases, and strips symbols** (source: Google Cloud Platform - User Defined Functions in BigQuery.md):

```sql
#standardSQL
CREATE TEMP FUNCTION cleanse_string(text STRING)
RETURNS STRING
AS (REGEXP_REPLACE(LOWER(TRIM(text)), r'[^a-zA-Z0-9 ]+', ''));

WITH strings AS (
  SELECT 'Hello, World!!!'           AS text UNION ALL
  SELECT 'I am $Special$ STRING'     AS text UNION ALL
  SELECT 'ABC, XYZ'                  AS text
)
SELECT text,
       cleanse_string(text) AS clean_text
FROM strings;
```

## Persistent SQL UDF — example

```sql
CREATE OR REPLACE FUNCTION `proj.my_dataset.cleanse_string`(text STRING)
RETURNS STRING
AS (REGEXP_REPLACE(LOWER(TRIM(text)), r'[^a-zA-Z0-9 ]+', ''));
```

The function appears under the dataset in the left-hand nav; you can view, edit, or delete it. Anyone with **BigQuery Data Viewer** on the dataset can call it from their queries (source: Google Cloud Platform - User Defined Functions in BigQuery.md):

```sql
SELECT `proj.my_dataset.cleanse_string`(name) AS clean_name
FROM   `proj.app.users`;
```

## JavaScript UDF — example

```sql
CREATE TEMP FUNCTION extract_emails(text STRING)
RETURNS ARRAY<STRING>
LANGUAGE js
AS r"""
  const re = /[\w.-]+@[\w.-]+\.\w+/g;
  return text.match(re) || [];
""";

SELECT extract_emails(message) FROM `proj.logs.app_messages`;
```

JS UDFs run in a sandbox; per-row overhead is higher than SQL UDFs.

## Sharing strategy

By granting **Data Viewer** on a `udfs` dataset to your whole org, you create a **library of company-wide UDFs** — `cleanse_string`, `parse_phone_number`, `currency_to_usd`, etc. (source: Google Cloud Platform - User Defined Functions in BigQuery.md). Business logic stays consistent and centrally maintained.

## Best practices

- Prefer **SQL UDFs** when expressible — the planner inlines them and they're cheaper.
- Use **JavaScript UDFs** for complex string / regex / parsing tasks.
- **Always namespace** persistent UDFs under a versioned dataset (`v1_udfs`, `v2_udfs`) — easier to deprecate.
- Add **comments** in the function body for future maintainers.
- Test on a sample with `WITH ... AS` blocks before running across petabytes.
- For **table-valued functions** (TVFs), modern BigQuery supports `CREATE TABLE FUNCTION` — not in the raw source but worth knowing.

## Limitations

- JS UDFs cannot call external network endpoints (sandboxed).
- JS UDFs are **slower per row** than SQL UDFs; be careful at petabyte scale.
- Recursive UDFs aren't supported.
- UDF code is part of the query — versioning across teams requires governance.

## Interview Questions can be asked

1. SQL vs JavaScript UDF — when prefer which?
2. How would you build an org-wide library of UDFs?
3. Can a JS UDF call an external API? (No — sandbox)
4. What is a **table-valued function** and how does it differ from a scalar UDF?

## Related pages

> [!grid]
>
>> [!card] BigQuery hub + sub-pages
>> [[bigquery|BigQuery]], [[bigquery-tables|BigQuery Tables]], [[bigquery-iam|BigQuery IAM]]
>
>
>> [!card] SQL
>> [[../../../guides/sql-guide|SQL Guide]]

