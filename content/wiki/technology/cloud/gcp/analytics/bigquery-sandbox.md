---
title: BigQuery Sandbox
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - BQ Sandbox
category: Cloud
tags:
  - GCP
  - BigQuery
  - Analytics
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Give a girl the right shoes, and she can conquer the world."
> <cite>— Bette Midler</cite>

---

<span class="at-kicker">Free Tier · BigQuery</span>

# BigQuery Sandbox

<p class="at-lead">
The BigQuery Sandbox gives free, no-credit-card access to BigQuery — perfect for learning, prototyping, and exploring public datasets without any billing commitment.
</p>

<span class="at-stat">10GB</span> free storage &nbsp;·&nbsp; <span class="at-stat">1TB</span> free queries/month &nbsp;·&nbsp; <span class="at-stat">no credit card</span> required &nbsp;·&nbsp; <span class="at-mark">full BigQuery power, zero cost for learning</span>

<span class="at-kicker">How It Works</span>

## Overview

The **BigQuery Sandbox** gives free, no-credit-card access to BigQuery — perfect for learning, prototyping, and exploring public datasets (source: Google Cloud Platform - Introduction to BigQuery Sandbox.md).

### Why it exists

Most cloud trials require a card on file. The Sandbox removes that friction — sign in with a Google account, create a project, **disable billing**, and you're querying within minutes.

### Caveats / limits

- Tables and views you create **expire after 60 days**.
- **10 GB** of active storage.
- **1 TB** of query data processed per month.

If you need more, link a billing account and BigQuery becomes pay-per-use immediately (no other config changes).

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### NO CREDIT CARD
>> ### Zero *Barrier*
>> No credit card required to start. Sign in with any Google account, create a project, disable billing, and begin querying immediately.
>
>> [!card|section]
>> ###### FREE QUOTAS
>> ### Monthly *Allowance*
>> 10 GB storage and 1 TB query processing per month at no cost. Generous limits for learning SQL and exploring public datasets.
>
>> [!card|section]
>> ###### PUBLIC DATASETS
>> ### Curated *Data Library*
>> Hundreds of public datasets available without ingestion — NCAA basketball, NYC taxi trips, NOAA weather, Wikipedia, GitHub repos, and more.
>
>> [!card|section]
>> ###### FULL FEATURE ACCESS
>> ### Complete *Functionality*
>> Access the complete BigQuery feature set — standard SQL, query history, saved queries, and all analytical capabilities.
>
>> [!card|section]
>> ###### EASY UPGRADE
>> ### Seamless *Graduation*
>> Link a billing account anytime to remove limits. All data and queries preserved — no migration needed when moving to production.
>
>> [!card|section]
>> ###### 60-DAY EXPIRY
>> ### Auto *Cleanup*
>> Created tables expire after 60 days automatically. Perfect for experimentation without worrying about forgotten resources.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Monthly cost** | Completely free — no credit card required |
| **Storage limit** | 10 GB active storage (tables expire after 60 days) |
| **Query limit** | 1 TB data processed per month |
| **Public datasets** | Free to query — only your scan counts toward 1 TB limit |
| **Upgrade path** | Link billing account anytime for unlimited access |

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### SQL LEARNING
>> ### Learn *Standard SQL*
>> Practice SQL on real, large datasets without provisioning. Learn window functions, joins, and aggregations on production-scale data.
>
>> [!card|section]
>> ###### COURSE LABS
>> ### Tutorial *Completion*
>> Reproduce Coursera, Qwiklabs, and tutorial exercises. Complete certification prep labs without organizational billing setup.
>
>> [!card|section]
>> ###### PROTOTYPING
>> ### Quick *Experiments*
>> Test queries and validate approaches before production. Experiment with public datasets to prove concepts before investing in ETL.
>
>> [!card|section]
>> ###### TEACHING
>> ### Classroom *Instruction*
>> Teach BigQuery without provisioning org-level billing. Students get hands-on experience with zero administrative overhead.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · BIGQUERY SANDBOX
>> # From *zero* to *SQL analytics*.
>> Start querying petabyte-scale datasets in minutes with zero cost and no credit card required.
>
>> [!card|step]
>> ###### Step 01
>> ### *Enable* Sandbox in console.
>> Navigate to cloud.google.com/bigquery/docs/sandbox. Create a Google Cloud project or select existing. Disable billing to activate Sandbox mode.
>
>> [!card|step]
>> ###### Step 02
>> ### *Load* public datasets.
>> Browse hundreds of curated public datasets — NCAA basketball, NYC taxis, GitHub repos. Query immediately without ingestion or setup costs.
>
>> [!card|step]
>> ###### Step 03
>> ### *Write* first SQL query.
>> Compose ANSI SQL in the web console. Use the query validator to check syntax. Review bytes processed estimate before running. Explore and learn.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] BigQuery hub + sub-pages
>> [[bigquery|BigQuery]], [[bigquery-loading-data|Loading Data]], [[bigquery-tables|BigQuery Tables]]
>
>
>> [!card] Getting started
>> [[../../../guides/getting-started|Getting Started With Data Engineering]], [[../../../data-engineering/faq|FAQ]]

## Setup

1. Open `cloud.google.com/bigquery/docs/sandbox`.
2. Create a Google Cloud project (or pick an existing one).
3. **Disable billing** for the project (Billing → Manage Account → Disable Billing).
4. Open BigQuery from the Console — "Sandbox" appears in the top-left corner.

## Public datasets

Hundreds of curated datasets are available with **no ingestion required** — just `SELECT` from them. Examples:

- `bigquery-public-data.ncaa_basketball.*` — full NCAA play-by-play.
- `bigquery-public-data.sunroof_solar.*` — sunlight potential per US postal code.
- `bigquery-public-data.new_york_taxi_trips.*` — NYC taxi trips by year.
- `bigquery-public-data.github_repos.*` — public GitHub repos.

## Example query

```sql
SELECT state_name,
       AVG(yearly_sunlight_kwh_kw_threshold_avg) AS avg_sun
FROM   `bigquery-public-data.sunroof_solar.solar_potential_by_postal_code`
GROUP BY state_name
ORDER BY avg_sun DESC
LIMIT 3;
```

(source: Google Cloud Platform - Introduction to BigQuery Sandbox.md)

## Interview Questions can be asked

1. What are the limits of the BigQuery Sandbox vs. a billed account?
2. How do you "graduate" from Sandbox to a paid BigQuery setup without losing data?
