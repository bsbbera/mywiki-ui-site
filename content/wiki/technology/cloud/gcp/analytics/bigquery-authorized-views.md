---
title: BigQuery Authorized Views
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:35:00 pm
aliases:
  - Authorized Views
category: Cloud
tags:
  - GCP
  - BigQuery
  - Security
  - IAM
banner:
publish: true
---

---

An **authorized view** lets you **share the results of a query** with users who **don't have access to the underlying tables** — the standard pattern for column- and row-level filtering before column/row-level security existed natively (source: Google Cloud Platform - Implementing Authorized View in BigQuery.md).

## The problem it solves

You have a `service_requests` table with a sensitive `address` column. Analysts need everything **except** the address.

Without authorized views you'd have to either:

- Copy the table without the address (ETL overhead, drift), or
- Grant analysts access to the source table and trust them.

With an authorized view: the view selects all columns **except** address; analysts get access to the **view's dataset only**; the view itself is **authorized** to read the source.

## Architecture

```
[ source dataset (raw)  ←─── authorized ───  view in shared_views dataset ]
        ↑                                                ↑
   (admin only)                                  (analysts read here)
```

Three IAM grants:

1. **Analyst → BigQuery User** at the **project** level (so they can run jobs).
2. **Analyst → BigQuery Data Viewer** on the **`shared_views`** dataset.
3. **The view itself → BigQuery Data Viewer** on the **source** dataset (this is the "authorization" step).

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

## Common patterns

- **Column filtering** — drop sensitive columns (PII, financials).
- **Row filtering** — `WHERE region = SESSION_USER()` style filters give per-user data slices.
- **Aggregation** — expose only group-by results, not individual rows.
- **Schema reshaping** — give analysts a stable contract while raw schema evolves.

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

## Related pages

> [!multi-column]
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
>> [[../../data-engineering/data-management/data-governance|Data Governance]]

