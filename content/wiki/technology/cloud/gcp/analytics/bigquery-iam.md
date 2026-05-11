---
title: BigQuery IAM
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:35:00 pm
aliases:
  - BigQuery Access Control
  - BQ IAM
category: Cloud
tags:
  - GCP
  - BigQuery
  - IAM
  - Security
banner:
dg-publish: true
publish: true
---
---

Access control in BigQuery is governed by **Cloud IAM**. The model is the standard GCP **Member + Role + Policy** triad applied to BigQuery resources (project, dataset, table, view, **column**, **row**) (source: Google Cloud Platform - Managing Access using IAM in BigQuery.md).

## Member: who has access

A **member** can be (source: Google Cloud Platform - Managing Access using IAM in BigQuery.md):

- A **Google account** (`alice@example.com`).
- A **Google Group / Workspace domain / Cloud Identity domain** — best for managing teams.
- A **Service account** — for non-human callers (apps, Cloud Functions, Cloud Run, Composer, etc.).
- The special identifier **`allAuthenticatedUsers`** — every signed-in Google user; how the public datasets are shared.
- **`allUsers`** — the public internet (rare; never use for sensitive data).

## Role: what they can do

A **role** bundles permissions. BigQuery's predefined roles:

| Role | Description |
| --- | --- |
| **BigQuery Admin** | Manage all resources + data within the project |
| **BigQuery Data Owner** | Edit + share datasets and tables |
| **BigQuery Data Editor** | Edit datasets and all their tables |
| **BigQuery Data Viewer** | Read-only on datasets and tables |
| **BigQuery Job User** | Run jobs (incl. queries) — billed to the project |
| **BigQuery User** | Run queries + create datasets |
| **BigQuery Metadata Viewer** | View schema / metadata only |

(source: Google Cloud Platform - Managing Access using IAM in BigQuery.md)

You can also build **custom roles** by combining individual permissions, but Google recommends sticking with predefined roles since they're auto-updated as features evolve.

## Policy: where it applies

A policy is `(member, role)` attached to a resource:

- **Project** — applies to all current + future datasets.
- **Dataset** — common for delegating ownership to a team.
- **Table / View** — finest standard granularity.
- **Column / Row** — via **Column-level security** (policy tags) and **Row-level security** (RLS predicates) — modern features not in the raw source.

(source: Google Cloud Platform - Managing Access using IAM in BigQuery.md)

## Two layers of permissions

Critical insight from the source: **dataset-level role + project-level role are both needed** to actually run queries.

- Dataset-level **Data Editor / Viewer** lets you read/write tables.
- But to **run queries billed to the project**, the user also needs **BigQuery User** (or **Job User**) at the **project** level (source: Google Cloud Platform - Managing Access using IAM in BigQuery.md).

Without the project-level role, queries fail with "billing project required".

## Worked example

Retail company with two analyst groups (sales-analysts, cs-analysts):

1. **Dataset-level**: grant `sales-analysts@` group the **BigQuery Data Editor** role on the `retail_sales` dataset (Console → dataset → **Share Dataset** → Add Members).
2. Same for `cs-analysts@` on the `customer_service` dataset.
3. **Project-level**: in **IAM & Admin → IAM → Add**, grant **both** groups the **BigQuery User** role at the project level.

Both teams can now query their dataset; neither sees the other's data.

(source: Google Cloud Platform - Managing Access using IAM in BigQuery.md)

## Why use Google Groups

The source emphasises preferring **Google Groups** over individual users — change membership in one place, all permissions follow automatically (source: Google Cloud Platform - Managing Access using IAM in BigQuery.md).

## Modern features (not in raw)

- **Column-level security** via **policy tags** (Data Catalog / Dataplex).
- **Row-level security** — `CREATE ROW ACCESS POLICY` predicates.
- **Dynamic data masking** — return hashed/redacted values to non-privileged users.
- **VPC Service Controls** — perimeter to prevent data exfiltration.
- **CMEK / CSEK** for customer-managed keys.

## Best practices

- **Always use Google Groups**, never individual users, in production policies.
- Grant the **least-privilege** predefined role; avoid Admin unless necessary.
- For **services/apps**, use a dedicated service account, not human credentials.
- Use **[[bigquery-authorized-views]]** to share filtered subsets without granting access to the source table.
- Audit periodically with **Policy Analyzer / Cloud Asset Inventory**.

## Interesting Facts

- The BigQuery infra inherits Google's end-to-end security: hardware, OS, KVM, all the way up to the query engine — IAM is the user-facing surface.
- **Service accounts** can be impersonated cross-project, which is common for Composer / Dataflow workers — they appear as the member identity in policy.

## Interview Questions can be asked

1. Why does a user with **Data Viewer** on a dataset still fail to run queries?
2. Difference between **Data Editor** and **Data Owner**.
3. How would you give an external auditor read-only access to a single table?
4. Explain **column-level security** with policy tags.
5. When use **authorized views** instead of IAM?

## Related pages

> [!multi-column]
>
>> [!card] BigQuery hub + sub-pages
>> [[bigquery|BigQuery]], [[bigquery-authorized-views|Authorized Views]], [[bigquery-tables|BigQuery Tables]]
>
>
>> [!card] Sister GCP services
>> [[data-catalog|Data Catalog]]
>
>
>> [!card] Data Management
>> [[../../data-engineering/concepts/data-management/data-governance|Data Governance]]
>
>
>> [!card] Data Engineering
>> [[../../data-engineering/data-ethics|Data Ethics]]
>
>
>> [!card] Guides
>> [[../../data-engineering/guides/data-governance-guide|Data Governance Guide]]

