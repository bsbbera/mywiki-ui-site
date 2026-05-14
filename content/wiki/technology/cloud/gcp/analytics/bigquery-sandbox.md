---
title: BigQuery Sandbox
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:35:00 pm
aliases:
  - BQ Sandbox
category: Cloud
tags:
  - GCP
  - BigQuery
  - Analytics
banner:
dg-publish: true
publish: true
---

---

The **BigQuery Sandbox** gives free, no-credit-card access to BigQuery — perfect for learning, prototyping, and exploring public datasets (source: Google Cloud Platform - Introduction to BigQuery Sandbox.md).

## Why it exists

Most cloud trials require a card on file. The Sandbox removes that friction — sign in with a Google account, create a project, **disable billing**, and you're querying within minutes.

## Caveats / limits

- Tables and views you create **expire after 60 days**.
- **10 GB** of active storage.
- **1 TB** of query data processed per month.

If you need more, link a billing account and BigQuery becomes pay-per-use immediately (no other config changes).

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

## Use cases

- Learning SQL on real, large datasets.
- Reproducing tutorials and Coursera labs.
- Quick experiments before paying for production usage.
- Teaching BigQuery without provisioning org-level billing.

## Interview Questions can be asked

1. What are the limits of the BigQuery Sandbox vs. a billed account?
2. How do you "graduate" from Sandbox to a paid BigQuery setup without losing data?

## Related pages

> [!multi-column]
>
>> [!card] BigQuery hub + sub-pages
>> [[bigquery|BigQuery]], [[bigquery-loading-data|Loading Data]], [[bigquery-tables|BigQuery Tables]]
>
>
>> [!card] Getting started
>> [[../../data-engineering/guides/getting-started|Getting Started With Data Engineering]], [[../../data-engineering/faq|FAQ]]

