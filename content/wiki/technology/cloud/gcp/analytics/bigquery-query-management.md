---
title: BigQuery Query Management
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:35:00 pm
aliases:
  - Query History
  - Saved Queries
  - Shared Queries
category: Cloud
tags:
  - GCP
  - BigQuery
  - Productivity
banner:
publish: true
---

> "Seek not the good in external things;seek it in yourselves."
> <cite>— Epictetus</cite>

---

BigQuery offers three layers for managing the queries you write — **Query History** (automatic), **Saved Queries** (proactive), and **Shared Queries** (collaboration) (source: Google Cloud Platform - Query History vs Saved Query vs Shared Query in BigQuery.md).

Picking the right one for each case keeps your team productive and prevents the "I wrote this last month, where is it?" problem.

## Query History — automatic recall

- BigQuery **automatically logs every query** you've run.
- Available in the Console under **Query History** (top-left nav).
- Click any entry to view the query text and **Open in Editor** to modify and rerun.
- **Limits**: last **1 000 queries**, and **6 months** of history (source: Google Cloud Platform - Query History vs Saved Query vs Shared Query in BigQuery.md).

Best for: "what was that query I ran on Friday?"

## Saved Queries — proactive

- Type a query → **Save Query** (next to the Run button) → name it → **Save**.
- Appears in the left-hand nav under **Saved Queries**.
- Click to reopen, edit, run.
- No expiry; survives the 6-month query-history window.

Best for: queries you'll **reuse weekly/monthly** (KPIs, debugging recipes, common joins).

## Shared Queries — team collaboration

- Save a query first.
- **Turn on link sharing** → copy the unique URL → send to colleagues.
- Recipient's BigQuery opens with the query text loaded into their editor.
- **Important**: a shared query shares **text only** — recipients still need IAM access to the **referenced tables** to actually run it (source: Google Cloud Platform - Query History vs Saved Query vs Shared Query in BigQuery.md).

By default, others **cannot edit** your saved queries. To allow editing:

- Change **saved-query visibility** from **Personal** to **Project**.
- Grant team members the permissions to **get / list / update saved queries** at the project level.

(source: Google Cloud Platform - Query History vs Saved Query vs Shared Query in BigQuery.md)

## When to use which

| Scenario | Tool |
| --- | --- |
| "What did I run last week?" | **Query History** |
| Repeating a query monthly | **Saved Query** |
| Sending a query to a colleague | **Shared Query** (URL) |
| Team-editable canonical queries | **Project-visibility saved queries** |
| Production / scheduled execution | **Scheduled queries** (separate feature) |
| Programmatic re-use across queries | **[[bigquery-udfs|UDFs]]** or **stored procedures** |

## Modern additions (not in raw)

- **Scheduled Queries** — let BigQuery run a saved query on a schedule (cron-like) into a destination table. The standard "lightweight ETL" mechanism without Dataflow/Composer.
- **Stored Procedures** — `CREATE PROCEDURE` blocks of SQL with control flow; reusable like UDFs but at statement level.
- **BigQuery Studio** (2023) — unified IDE-like experience for SQL, Python, notebooks, with version control on saved queries.

## Best practices

- Save **canonical KPI queries** at project visibility so the team's metrics stay consistent.
- Use **Shared Queries** for one-off requests; for recurring sharing, prefer **views** or **UDFs**.
- **Add comments** at the top of every saved query describing intent + owner — your future self will thank you.
- For **production analytics**, prefer **Scheduled Queries** + destination tables + IAM, not informal saved queries.

## Interesting Facts

- Query History is **per-user** — you don't see your colleagues' queries (good for privacy; bad for "team postmortem on a slow query").
- Audit Logs (Cloud Audit Logs) capture **all** queries org-wide — that's the place to investigate cost spikes or compliance.
- **Saved queries with parameters** (`@start_date`) make them effectively reusable templates.

## Interview Questions can be asked

1. Difference between **Query History**, **Saved Queries**, and **Shared Queries**.
2. Why does a shared-query URL not grant data access?
3. How would you make a saved query **editable** by a teammate?
4. **Scheduled Queries** vs Cloud Composer — when prefer which?

## Related pages

> [!multi-column]
>
>> [!card] BigQuery hub + sub-pages
>> [[bigquery|BigQuery]], [[bigquery-iam|BigQuery IAM]], [[bigquery-udfs|BigQuery UDFs]], [[bigquery-tables|BigQuery Tables]], [[bigquery-visualization|Visualization]]
>
>
>> [!card] SQL
>> [[../../../guides/sql-guide|SQL Guide]]

