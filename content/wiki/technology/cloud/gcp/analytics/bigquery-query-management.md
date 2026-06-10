---
title: BigQuery Query Management
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Query History
  - Saved Queries
  - Shared Queries
category: Cloud
tags:
  - GCP
  - BigQuery
  - Productivity
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Seek not the good in external things;seek it in yourselves."
> <cite>— Epictetus</cite>

---

<span class="at-kicker">Query Optimization · BigQuery</span>

# BigQuery Query Management

<p class="at-lead">
BigQuery offers three layers for managing the queries you write — Query History for automatic recall, Saved Queries for proactive storage, and Shared Queries for team collaboration.
</p>

<span class="at-stat">slot</span>-based execution &nbsp;·&nbsp; <span class="at-stat">reservations</span> + commitments &nbsp;·&nbsp; <span class="at-stat">INFORMATION_SCHEMA</span> observability &nbsp;·&nbsp; <span class="at-mark">optimize cost and performance with reservation management</span>

<span class="at-kicker">How It Works</span>

## Overview

BigQuery offers three layers for managing the queries you write — **Query History** (automatic), **Saved Queries** (proactive), and **Shared Queries** (collaboration) (source: Google Cloud Platform - Query History vs Saved Query vs Shared Query in BigQuery.md).

Picking the right one for each case keeps your team productive and prevents the "I wrote this last month, where is it?" problem.

### Query History — automatic recall

- BigQuery **automatically logs every query** you've run.
- Available in the Console under **Query History** (top-left nav).
- Click any entry to view the query text and **Open in Editor** to modify and rerun.
- **Limits**: last **1 000 queries**, and **6 months** of history (source: Google Cloud Platform - Query History vs Saved Query vs Shared Query in BigQuery.md).

Best for: "what was that query I ran on Friday?"

### Saved Queries — proactive

- Type a query → **Save Query** (next to the Run button) → name it → **Save**.
- Appears in the left-hand nav under **Saved Queries**.
- Click to reopen, edit, run.
- No expiry; survives the 6-month query-history window.

Best for: queries you'll **reuse weekly/monthly** (KPIs, debugging recipes, common joins).

### Shared Queries — team collaboration

- Save a query first.
- **Turn on link sharing** → copy the unique URL → send to colleagues.
- Recipient's BigQuery opens with the query text loaded into their editor.
- **Important**: a shared query shares **text only** — recipients still need IAM access to the **referenced tables** to actually run it (source: Google Cloud Platform - Query History vs Saved Query vs Shared Query in BigQuery.md).

By default, others **cannot edit** your saved queries. To allow editing:

- Change **saved-query visibility** from **Personal** to **Project**.
- Grant team members the permissions to **get / list / update saved queries** at the project level.

(source: Google Cloud Platform - Query History vs Saved Query vs Shared Query in BigQuery.md)

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### AUTOMATIC LOGGING
>> ### Query *History*
>> Every query automatically logged with timestamp and bytes processed. Browse, search, and reopen any of the last 1,000 queries from the past 6 months.
>
>> [!card|section]
>> ###### PROACTIVE SAVING
>> ### Saved *Queries*
>> Name and save important queries for permanent access. Organize debugging recipes, KPI calculations, and common joins for quick reuse.
>
>> [!card|section]
>> ###### LINK SHARING
>> ### Shared *Queries*
>> Generate unique URLs to share query text with colleagues. Recipients open the query in their editor — though they still need table access to run.
>
>> [!card|section]
>> ###### SCHEDULED QUERIES
>> ### Scheduled *Execution*
>> Run saved queries on a cron-like schedule. Write results to destination tables for lightweight ETL without Dataflow or Composer.
>
>> [!card|section]
>> ###### PROJECT VISIBILITY
>> ### Team *Collaboration*
>> Change visibility from Personal to Project for team-editable queries. Grant get/list/update permissions to enable shared query maintenance.
>
>> [!card|section]
>> ###### STORED PROCEDURES
>> ### Reusable *Logic*
>> CREATE PROCEDURE blocks with control flow for complex reusable SQL. Parameterized saved queries act as templates for consistent analysis.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Query History** | No cost — automatic logging included |
| **Saved Queries** | No cost for storage of query definitions |
| **Shared Queries** | No cost for link generation and sharing |
| **Scheduled Queries** | Standard query execution costs apply |
| **INFORMATION_SCHEMA** | Metadata queries are free |

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### DEBUGGING
>> ### Debug *Recovery*
>> "What did I run last Friday?" Query History shows exactly what was executed. Reopen, modify, and rerun for iterative debugging without rewriting.
>
>> [!card|section]
>> ###### KPI STANDARDS
>> ### Canonical *Metrics*
>> Save canonical KPI queries at project visibility so team metrics stay consistent. Everyone uses the same definition of "active user" or "revenue."
>
>> [!card|section]
>> ###### KNOWLEDGE SHARING
>> ### Query *Distribution*
>> Share complex analytical queries with one URL. Onboard new analysts by sharing the team's standard debugging and exploration patterns.
>
>> [!card|section]
>> ###### LIGHTWEIGHT ETL
>> ### Scheduled *Pipelines*
>> Scheduled Queries with destination tables for lightweight ETL. Transform and load on a schedule without managing Dataflow or Composer.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · QUERY MANAGEMENT
>> # From *expensive queries* to *optimized execution*.
>> Manage query lifecycle from ad-hoc exploration to production analytics with BigQuery's query management tools.
>
>> [!card|step]
>> ###### Step 01
>> ### *Analyze* query plan.
>> Review query execution details in INFORMATION_SCHEMA. Check bytes processed, slot time, and stage breakdown. Identify full-table scans and optimization opportunities.
>
>> [!card|step]
>> ###### Step 02
>> ### *Configure* slot reservations.
>> For predictable workloads, reserve slots via BigQuery Editions. Set up reservations, assignments, and commitments for cost control and guaranteed capacity.
>
>> [!card|step]
>> ###### Step 03
>> ### *Monitor* with INFORMATION_SCHEMA.
>> Query JOBS_BY_PROJECT and JOBS_BY_USER for cost attribution. Set up alerts on slot utilization and query costs. Audit query patterns for optimization.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] BigQuery hub + sub-pages
>> [[bigquery|BigQuery]], [[bigquery-iam|BigQuery IAM]], [[bigquery-udfs|BigQuery UDFs]], [[bigquery-tables|BigQuery Tables]], [[bigquery-visualization|Visualization]]
>
>
>> [!card] SQL
>> [[../../../guides/sql-guide|SQL Guide]]

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
