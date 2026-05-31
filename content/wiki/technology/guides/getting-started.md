---
title: Getting Started With Data Engineering
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Getting Started
category: Computer Science
tags:
  - DataEngineering
  - Career
  - Guide
banner:
publish: true
---

> "The road to success and the road to failure are almost exactly the same."
> <cite>— Colin R. Davis</cite>

---

A practical roadmap for newcomers to data engineering. Goal: working knowledge + intuition to find answers as your journey continues (source: Guides/Getting Started With Data Engineering.md).

## Step 1 — Read the FAQ

See [[../data-engineering/faq|Frequently Asked Questions]] for:

- What is data engineering?
- What does a Data Engineer do?
- DE vs related roles (BI, Backend, DBA, Data Analyst, Data Scientist).
- What skills do you need at each seniority level?
- How do I transition into DE?

## Step 2 — Learn core DE concepts

| Topic | Page |
| --- | --- |
| Pipelines | [[../data-engineering/data-pipeline\|Data Pipeline]] |
| Batch vs Stream | [[../data-engineering/data-processing/batch-data-processing\|Batch]] / [[../data-engineering/data-processing/stream-data-processing\|Stream]] |
| OLTP vs OLAP | [[../data-engineering/data-processing/online-transaction-processing\|OLTP]] / [[../data-engineering/data-processing/online-analytical-processing\|OLAP]] |
| Relational vs NoSQL | [[../data-engineering/data-storage/relational-database\|Relational]] / [[../data-engineering/data-storage/non-relational-database\|NoSQL]] |
| Data Modeling | [[../data-engineering/data-modeling/relational-modeling\|Relational]] / [[../data-engineering/data-modeling/dimensional-modeling\|Dimensional]] |
| Architectures | [[../data-engineering/data-architecture/data-warehouse\|Warehouse]], [[../data-engineering/data-architecture/data-lake\|Lake]], [[../data-engineering/data-architecture/medallion-architecture\|Medallion]] |
| Ingestion | [[../data-engineering/data-ingestion/full-load\|Full Load]], [[../data-engineering/data-ingestion/delta-load\|Delta Load]], [[../data-engineering/data-ingestion/change-data-capture\|CDC]] |

## Step 3 — Learn core tools

(source: Guides/Getting Started With Data Engineering.md)

### Languages

- **[[sql-guide|SQL]]** — most widely used language for data; non-negotiable.
- **Python** — most popular DE language. Java/Scala for niche use.

### A cloud platform

Pick one and go deep. **AWS** has the most market share[[AWS|Amazon Web Services]]./cloud/gcp/foundations/google-cloud-platform|Google Cloud Platform]]
- [[../cloud/aws/aws|Amazon Web Services]]
- [[../cloud/azure/azure|Microsoft Azure]]

## Step 4 — Hands-on practice

- Build a **personal project** end-to-end: ingest from a public API → store in a warehouse → build a dashboard.
- Use [Google's Dataset Search](https://datasetsearch.research.google.com/) or [data.gov](https://catalog.data.gov/dataset) for real data.
- Generate fake data with [Faker](https://github.com/joke2k/faker) if needed.

## Step 5 — Build for production-mindset

Once basics click, learn:

- **Workflow orchestration** — Airflow / Dagster / Prefect.
- **Data warehouse modeling** with **dbt**.
- **Streaming** — Kafka or Pub/Sub fundamentals.
- **Infrastructure-as-code** — Terraform or Pulumi.
- **Observability** — logging, metrics, alerting, [[../software-engineering/data-unit-test|data unit tests]].

## Step 6 — Connect with the community

- **r/dataengineering** subreddit.
- **dbt Slack** community.
- **Locally Optimistic** community.
- **Data Engineering Weekly** newsletter.

## A 90-day plan

| Weeks | Focus |
| --- | --- |
| **1–2** | SQL fundamentals + a relational DB (Postgres) |
| **3–4** | Python + pandas |
| **5–6** | A cloud warehouse (BigQuery/Snowflake/Redshift) |
| **7–8** | dbt + a small star schema project |
| **9–10** | Workflow orchestration (Airflow) |
| **11–12** | Build + present an end-to-end project |

## Related pages

> [!multi-column]
>
>> [!card] Onboarding
>> [[../data-engineering/faq|FAQ]], [[../data-engineering/data-engineering|Data Engineering Overview]]
>
>
>> [!card] Practical guides
>> [[sql-guide|SQL Guide]], [[data-pipeline-best-practices|Pipeline Best Practices]], [[testing-data-pipeline|Testing Pipelines]]
>
>
>> [!card] Books
>> [[../../books/fundamentals-of-data-engineering|Fundamentals of Data Engineering]], [[../../books/designing-data-intensive-applications|DDIA]]

