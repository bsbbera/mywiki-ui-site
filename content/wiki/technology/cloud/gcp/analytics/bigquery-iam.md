---
title: BigQuery IAM
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - BigQuery Access Control
  - BQ IAM
category: Cloud
tags:
  - GCP
  - BigQuery
  - IAM
  - Security
banner: https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Strategy is a commodity, execution is an art."
> <cite>— Peter Drucker</cite>

---

<span class="at-kicker">Access Control · BigQuery</span>

# BigQuery IAM

<p class="at-lead">
Access control in BigQuery is governed by Cloud IAM — the standard GCP Member + Role + Policy triad applied to resources from project level down to individual columns and rows.
</p>

<span class="at-stat">project</span> + dataset + table levels &nbsp;·&nbsp; <span class="at-stat">row/column</span> policies &nbsp;·&nbsp; <span class="at-stat">VPC-SC</span> integration &nbsp;·&nbsp; <span class="at-mark">fine-grained access from project down to individual cell</span>

<span class="at-kicker">How It Works</span>

## Overview

Access control in BigQuery is governed by **Cloud IAM**. The model is the standard GCP **Member + Role + Policy** triad applied to BigQuery resources (project, dataset, table, view, **column**, **row**) (source: Google Cloud Platform - Managing Access using IAM in BigQuery.md).

### Member: who has access

A **member** can be (source: Google Cloud Platform - Managing Access using IAM in BigQuery.md):

- A **Google account** (`alice@example.com`).
- A **Google Group / Workspace domain / Cloud Identity domain** — best for managing teams.
- A **Service account** — for non-human callers (apps, Cloud Functions, Cloud Run, Composer, etc.).
- The special identifier **`allAuthenticatedUsers`** — every signed-in Google user; how the public datasets are shared.
- **`allUsers`** — the public internet (rare; never use for sensitive data).

### Role: what they can do

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

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### PROJECT-LEVEL ACCESS
>> ### Project *Granularity*
>> Grant roles at the project level to apply to all current and future datasets. BigQuery User at project level is required for anyone to run queries billed to that project.
>
>> [!card|section]
>> ###### DATASET-LEVEL ACCESS
>> ### Dataset *Delegation*
>> Common for delegating ownership to specific teams. Data Editor and Data Viewer roles at dataset level control read/write access to all tables within.
>
>> [!card|section]
>> ###### TABLE/VIEW ACCESS
>> ### Table-Level *Security*
>> Finest standard granularity for IAM policies. Control access to individual tables and views without exposing entire datasets to users.
>
>> [!card|section]
>> ###### COLUMN-LEVEL SECURITY
>> ### Column *Policies*
>> Via policy tags in Data Catalog — restrict access to sensitive columns like PII or financials. Mask or redact values based on user privileges.
>
>> [!card|section]
>> ###### ROW-LEVEL SECURITY
>> ### Row *Filtering*
>> CREATE ROW ACCESS POLICY predicates filter rows per user or group. Different users see different subsets of the same table based on policy.
>
>> [!card|section]
>> ###### GOOGLE GROUPS
>> ### Group-Based *Management*
>> Prefer Google Groups over individual users — change membership in one place, all permissions follow automatically. Simplifies onboarding and offboarding.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **IAM management** | No additional cost — included with BigQuery usage |
| **Audit logging** | Cloud Audit Logs capture all access; standard logging rates apply |
| **Policy Analyzer** | Use Cloud Asset Inventory for periodic access reviews at no extra cost |
| **VPC Service Controls** | Perimeter security for data exfiltration prevention (separate configuration) |
| **Customer-managed keys** | CMEK for encryption at rest with your own keys (standard KMS pricing) |

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### TEAM ISOLATION
>> ### Multi-Team *Access*
>> Grant sales-analysts group Data Editor on retail_sales dataset; cs-analysts on customer_service dataset. Neither sees the other's data with proper project-level User role.
>
>> [!card|section]
>> ###### EXTERNAL AUDITORS
>> ### Auditor *Access*
>> Give external auditors read-only access to specific tables via Data Viewer role. No project-level permissions needed when combined with authorized views.
>
>> [!card|section]
>> ###### SERVICE ACCOUNTS
>> ### Application *Identity*
>> Dataflow, Cloud Functions, and Composer use dedicated service accounts. Assign least-privilege roles to prevent over-permissioned automated jobs.
>
>> [!card|section]
>> ###### PII PROTECTION
>> ### Sensitive Data *Governance*
>> Apply column-level policy tags to PII columns. Mask or restrict based on data catalog classification. Only privileged users see cleartext values.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · BIGQUERY IAM
>> # From *open dataset* to *governed access*.
>> Implement layered security from project to row level with Google Cloud IAM.
>
>> [!card|step]
>> ###### Step 01
>> ### *Assign* IAM roles.
>> Grant BigQuery User at project level for query execution. Apply Data Editor or Data Viewer at dataset level for read/write access. Use Google Groups for team management.
>
>> [!card|step]
>> ###### Step 02
>> ### *Configure* row & column policies.
>> Create policy tags in Data Catalog for column-level security. Define row access policies with SQL predicates. Enable dynamic data masking for sensitive values.
>
>> [!card|step]
>> ###### Step 03
>> ### *Audit* with Cloud Logging.
>> Review Cloud Audit Logs for access patterns. Use Policy Analyzer to identify over-permissioned users. Set up VPC Service Controls for data exfiltration prevention.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] BigQuery hub + sub-pages
>> [[bigquery|BigQuery]], [[bigquery-authorized-views|Authorized Views]], [[bigquery-tables|BigQuery Tables]]
>
>
>> [!card] Sister GCP services
>> [[technology/cloud/gcp/analytics/data-catalog|Data Catalog]]
>
>
>> [!card] Data Management
>> [[../../../data-engineering/data-management/data-governance|Data Governance]]
>
>
>> [!card] Data Engineering
>> [[../../../data-engineering/data-ethics|Data Ethics]]
>
>
>> [!card] Guides
>> [[../../../guides/data-governance-guide|Data Governance Guide]]

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

## Best practices

- **Always use Google Groups**, never individual users, in production policies.
- Grant the **least-privilege** predefined role; avoid Admin unless necessary.
- For **services/apps**, use a dedicated service account, not human credentials.
- Use **[[bigquery-authorized-views]]** to share filtered subsets without granting access to the source table.
- Audit periodically with **Policy Analyzer / Cloud Asset Inventory**.

## Modern features (not in raw)

- **Column-level security** via **policy tags** (Data Catalog / Dataplex).
- **Row-level security** — `CREATE ROW ACCESS POLICY` predicates.
- **Dynamic data masking** — return hashed/redacted values to non-privileged users.
- **VPC Service Controls** — perimeter to prevent data exfiltration.
- **CMEK / CSEK** for customer-managed keys.

## Interesting Facts

- The BigQuery infra inherits Google's end-to-end security: hardware, OS, KVM, all the way up to the query engine — IAM is the user-facing surface.
- **Service accounts** can be impersonated cross-project, which is common for Composer / Dataflow workers — they appear as the member identity in policy.

## Interview Questions can be asked

1. Why does a user with **Data Viewer** on a dataset still fail to run queries?
2. Difference between **Data Editor** and **Data Owner**.
3. How would you give an external auditor read-only access to a single table?
4. Explain **column-level security** with policy tags.
5. When use **authorized views** instead of IAM?
