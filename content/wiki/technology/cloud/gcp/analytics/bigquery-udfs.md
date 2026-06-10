---
title: BigQuery User-Defined Functions
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - BQ UDFs
  - User Defined Functions
category: Cloud
tags:
  - GCP
  - BigQuery
  - SQL
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Life begins at the end of our comfort zone."
> <cite>— Neale Donald Walsch</cite>

---

<span class="at-kicker">Custom Functions · BigQuery</span>

# BigQuery User-Defined Functions

<p class="at-lead">
A User-Defined Function (UDF) lets you define reusable functions in SQL or JavaScript that accept inputs, perform operations, and return values — callable like built-in functions across queries and teams.
</p>

<span class="at-stat">SQL</span> + JavaScript UDFs &nbsp;·&nbsp; <span class="at-stat">persistent</span> + temporary &nbsp;·&nbsp; <span class="at-stat">remote functions</span> via Cloud Run &nbsp;·&nbsp; <span class="at-mark">extend BigQuery SQL with any custom logic</span>

<span class="at-kicker">How It Works</span>

## Overview

A **User-Defined Function (UDF)** lets you define a reusable function — in **SQL** or **JavaScript** — that accepts inputs, performs operations, and returns a value, callable like a built-in function (source: Google Cloud Platform - User Defined Functions in BigQuery.md).

UDFs are how you encode **business logic, data-cleansing rules, parsing, custom math** consistently across queries and teams.

### Two flavors

| Flavor | Scope | Use case |
| --- | --- | --- |
| **Temporary UDF** | Defined and used in a single query | Quick experiments, test a transformation |
| **Persistent UDF** | Stored in a project + dataset | Reusable across queries, projects, teams |

(source: Google Cloud Platform - User Defined Functions in BigQuery.md)

### Two languages

- **SQL UDF** — wrap an expression; planner can inline it; usually fastest.
- **JavaScript UDF** — full JS in a sandboxed runtime; useful for complex string manipulation, regex, data conversions that SQL can't express cleanly. Can include external libraries via `OPTIONS(library=...)`.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### SQL UDFS
>> ### SQL *Functions*
>> Wrap SQL expressions for inlining by the query planner. Fastest performance with minimal overhead. Perfect for reusable calculations and transformations.
>
>> [!card|section]
>> ###### JAVASCRIPT UDFS
>> ### JavaScript *Logic*
>> Full JavaScript in sandboxed runtime for complex string manipulation, regex, and parsing. Include external libraries for extended functionality.
>
>> [!card|section]
>> ###### TEMPORARY FUNCTIONS
>> ### Single-Query *Use*
>> CREATE TEMP FUNCTION for quick experiments and testing. Defined and used within one query session. No persistence or sharing required.
>
>> [!card|section]
>> ###### PERSISTENT FUNCTIONS
>> ### Reusable *Library*
>> CREATE OR REPLACE FUNCTION stored in datasets. Reusable across queries, projects, and teams. Grant Data Viewer to share with organization.
>
>> [!card|section]
>> ###### ORG-WIDE SHARING
>> ### Centralized *Logic*
>> Create versioned UDF datasets (v1_udfs, v2_udfs) for company-wide libraries. Consistent cleansing_string, parse_phone_number, currency_to_usd functions.
>
>> [!card|section]
>> ###### REMOTE FUNCTIONS
>> ### Cloud Run *Integration*
>> Call custom code deployed to Cloud Run from BigQuery SQL. Extend beyond SQL and JavaScript with any language or library.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **UDF definition storage** | No cost for function definitions |
| **SQL UDF execution** | No additional cost — inlined by planner |
| **JavaScript UDF execution** | Standard query pricing (per-row overhead higher than SQL) |
| **Persistent UDF sharing** | Grant Data Viewer on UDF dataset to share with teams |
| **Remote functions** | Cloud Run invocation costs apply |

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### DATA CLEANSING
>> ### Standardized *Cleaning*
>> Create cleanse_string UDF for trimming, lowercasing, and symbol removal. Apply consistently across all ETL pipelines and analyst queries.
>
>> [!card|section]
>> ###### COMPLEX PARSING
>> ### Text *Extraction*
>> JavaScript UDFs with regex for email extraction, URL parsing, and log analysis. Handle complex string patterns SQL cannot express cleanly.
>
>> [!card|section]
>> ###### BUSINESS LOGIC
>> ### Domain *Calculations*
>> Encode revenue recognition, discount tiers, and commission rules in UDFs. Ensure consistent calculations across all reports and dashboards.
>
>> [!card|section]
>> ###### DATA CONVERSION
>> ### Format *Transformation*
>> Custom UDFs for currency conversion, timezone handling, and unit conversion. Centralize conversion rates and logic in persistent functions.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · USER-DEFINED FUNCTIONS
>> # From *SQL limitation* to *custom function*.
>> Extend BigQuery SQL with reusable business logic in SQL or JavaScript.
>
>> [!card|step]
>> ###### Step 01
>> ### *Define* UDF in SQL or JS.
>> Write CREATE TEMP FUNCTION for testing or CREATE OR REPLACE FUNCTION for persistence. Declare input parameters and return types. Implement logic in SQL expressions or JavaScript code blocks.
>
>> [!card|step]
>> ###### Step 02
>> ### *Register* as persistent function.
>> Store in a dedicated dataset like my_dataset.cleanse_string. Version your UDF datasets for easier deprecation. Document with comments for future maintainers.
>
>> [!card|step]
>> ###### Step 03
>> ### *Call* in any query.
>> Reference persistent UDFs with full project.dataset.function_name path. Share by granting Data Viewer on UDF dataset. Build org-wide libraries of standard transformations.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] BigQuery hub + sub-pages
>> [[bigquery|BigQuery]], [[bigquery-tables|BigQuery Tables]], [[bigquery-iam|BigQuery IAM]]
>
>
>> [!card] SQL
>> [[../../../guides/sql-guide|SQL Guide]]

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
