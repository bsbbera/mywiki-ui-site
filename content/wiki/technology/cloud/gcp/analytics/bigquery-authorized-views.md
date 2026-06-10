---
title: BigQuery Authorized Views
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Authorized Views
category: Cloud
tags:
  - GCP
  - BigQuery
  - Security
  - IAM
banner: https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "We don't stop playing because we grow old; we grow old because we stop playing."
> <cite>— George Bernard Shaw</cite>

---

<span class="at-kicker">Data Access Control · BigQuery</span>

# BigQuery Authorized Views

<p class="at-lead">
An authorized view lets you share the results of a query with users who don't have access to the underlying tables — the standard pattern for column- and row-level filtering before native policy controls existed.
</p>

<span class="at-stat">row-level</span> security &nbsp;·&nbsp; <span class="at-stat">column-level</span> filtering &nbsp;·&nbsp; <span class="at-stat">zero-copy</span> sharing &nbsp;·&nbsp; <span class="at-stat">IAM</span>-integrated &nbsp;·&nbsp; <span class="at-mark">share query results without sharing the underlying data</span>

<span class="at-kicker">How It Works</span>

## Overview

An **authorized view** lets you **share the results of a query** with users who **don't have access to the underlying tables** — the standard pattern for column- and row-level filtering before column/row-level security existed natively (source: Google Cloud Platform - Implementing Authorized View in BigQuery.md).

### The problem it solves

You have a `service_requests` table with a sensitive `address` column. Analysts need everything **except** the address.

Without authorized views you'd have to either:

- Copy the table without the address (ETL overhead, drift), or
- Grant analysts access to the source table and trust them.

With an authorized view: the view selects all columns **except** address; analysts get access to the **view's dataset only**; the view itself is **authorized** to read the source.

### Architecture

```
[ source dataset (raw)  ←─── authorized ───  view in shared_views dataset ]
        ↑                                                ↑
   (admin only)                                  (analysts read here)
```

Three IAM grants:

1. **Analyst → BigQuery User** at the **project** level (so they can run jobs).
2. **Analyst → BigQuery Data Viewer** on the **`shared_views`** dataset.
3. **The view itself → BigQuery Data Viewer** on the **source** dataset (this is the "authorization" step).

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### COLUMN FILTERING
>> ### Column *Filtering*
>> Drop sensitive columns like PII, financials, or internal identifiers from the shared view. The view query explicitly excludes sensitive fields while exposing only what analysts need.
>
>> [!card|section]
>> ###### ROW FILTERING
>> ### Row *Filtering*
>> Apply `WHERE region = SESSION_USER()` style predicates to give per-user data slices. Each analyst sees only rows matching their identity or permissions.
>
>> [!card|section]
>> ###### AGGREGATION MASKING
>> ### Aggregation *Only*
>> Expose group-by results instead of individual rows. Summarize sensitive data into metrics, counts, and averages that remove individual record visibility.
>
>> [!card|section]
>> ###### SCHEMA STABILITY
>> ### Schema *Reshaping*
>> Give analysts a stable contract while the raw schema evolves. Views act as an abstraction layer insulating consumers from underlying table changes.
>
>> [!card|section]
>> ###### ZERO-COPY SHARING
>> ### No Data *Duplication*
>> Share filtered results without copying data. No ETL overhead, no storage duplication, no data drift between copies. Single source of truth maintained.
>
>> [!card|section]
>> ###### CROSS-DOMAIN JOINS
>> ### Cross-Domain *Authorization*
>> A view can be authorized in multiple source datasets — useful for cross-domain joins where each domain owner authorizes the same view independently.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **View storage** | No storage cost — views are virtual definitions |
| **Query cost** | Standard BigQuery pricing for the underlying query execution |
| **IAM management** | No additional cost for authorization grants |
| **Alternative: column-level security** | Policy tags via Data Catalog for finer-grained control |
| **Alternative: row-level security**** | `CREATE ROW ACCESS POLICY` for predicate-based filtering |

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### PII MASKING
>> ### PII *Protection*
>> Share customer data with analysts while hiding addresses, phone numbers, and emails. Create views that exclude sensitive PII columns for GDPR compliance.
>
>> [!card|section]
>> ###### REGIONAL ACCESS
>> ### Regional *Data Slicing*
>> Give sales teams access to only their regional customers. Row-level filters ensure APAC analysts never see EMEA records, all from one source table.
>
>> [!card|section]
>> ###### FINANCIAL REPORTING
>> ### Financial *Summaries*
>> Expose revenue aggregates to finance teams without revealing individual transactions. Group-by views show trends without exposing raw sales records.
>
>> [!card|section]
>> ###### SCHEMA EVOLUTION
>> ### Backward *Compatibility*
>> Maintain stable view schemas while refactoring underlying tables. Rename columns, change types, or split tables without breaking analyst dashboards.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · AUTHORIZED VIEW
>> # From *raw table* to *controlled view*.
>> Securely share filtered query results with users who never see the underlying sensitive data.
>
>> [!card|step]
>> ###### Step 01
>> ### *Create* the authorized view.
>> Write a SQL query that selects only the columns and rows to share. Exclude sensitive fields and apply row-level filters. Save this as a view in a separate dataset.
>
>> [!card|step]
>> ###### Step 02
>> ### *Grant* dataset access.
>> Give analysts BigQuery Data Viewer role on the shared views dataset. Grant BigQuery User at project level so they can run queries. Never grant access to the source dataset.
>
>> [!card|step]
>> ###### Step 03
>> ### *Share* the view securely.
>> Authorize the view itself to read from the source dataset via the Authorized Views tab. BigQuery checks access as the view, not the analyst, when executing queries.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] BigQuery hub + sub-pages
>> [[bigquery|BigQuery]], [[bigquery-iam|BigQuery IAM]], [[bigquery-tables|BigQuery Tables]]
>
>
>> [!card] Sister GCP services
>> [[data-catalog|Data Catalog]]
>
>
>> [!card] Data Management
>> [[../../../data-engineering/data-management/data-governance|Data Governance]]

## Setup walkthrough

(source: Google Cloud Platform - Implementing Authorized View in BigQuery.md)

### Step 1 — Create the source dataset + table (admin)

1. Console → BigQuery → **Create Dataset** → name e.g. `raw_data`.
2. Compose a query that loads / SELECTs your source data; in **Query Settings** set the **destination table** to `service_requests`.
3. Run.

### Step 2 — Create the shared dataset

Create another dataset, e.g. `shared_views`, in the same project.

### Step 3 — Create the view

In the Query Editor:

```sql
SELECT id, requestor, request_type, created_at
       -- intentionally omit `address`
FROM   `proj.raw_data.service_requests`;
```

Click **Save View** → choose `shared_views.requests_no_pii` → **Save**.

### Step 4 — Grant analyst project-level role

`IAM & Admin → IAM → Add` → analyst email → **BigQuery User** role.

### Step 5 — Grant analyst dataset-level role on `shared_views`

Select `shared_views` → **Share Dataset** → Add Members → analyst email → **BigQuery Data Viewer** → Add → Done.

### Step 6 — Authorize the view itself on the source dataset

Select `raw_data` → **Share Dataset** → **Authorized Views** tab → choose dataset `shared_views` and the view `requests_no_pii` → Add → Done.

This is the **authorization** step — the view (not the analyst) is granted permission to read the source.

## Why it works

When the analyst queries `shared_views.requests_no_pii`:

1. BigQuery evaluates the view's underlying query.
2. The query references `raw_data.service_requests`.
3. BigQuery checks access **as the view** (not as the analyst).
4. Because the view is authorized on `raw_data`, the read succeeds.
5. The analyst gets back only the columns the view exposes.

The analyst never has, and never sees, raw access to `service_requests`.

## Modern alternatives (not in raw)

- **Column-level security** via **policy tags** (Data Catalog → Dataplex) — finer-grained, no view needed.
- **Row-level security** (`CREATE ROW ACCESS POLICY`) — predicate-based per user/group.
- **Authorized datasets** — extend the same authorization model to all views in a dataset at once (introduced 2021).

Authorized views remain the most portable pattern, especially across projects.

## Interesting Facts

- Authorized views were one of BigQuery's earliest **defense-in-depth** features for data sharing — predating row/column-level security by years.
- **Authorized routines** (UDFs) and **authorized procedures** apply the same pattern to functions and stored procedures.
- A view can be authorized in **multiple source datasets** — useful for cross-domain joins where each domain owner authorizes the same view.

## Interview Questions can be asked

1. Walk through the authorization step. **Who is granted what?**
2. Authorized view vs **column-level security** with policy tags — when prefer which?
3. How would you implement per-user row filtering with authorized views?
4. Why must analysts have BigQuery User at project level *and* Data Viewer on the shared dataset?
