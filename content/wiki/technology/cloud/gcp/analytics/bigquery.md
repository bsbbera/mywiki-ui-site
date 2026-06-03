---
title: BigQuery
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:35:00 pm
aliases:
  - Google BigQuery
  - GCP BigQuery
category: Cloud
tags:
  - GCP
  - Analytics
  - DataWarehouse
  - DataEngineering
  - SQL
banner:
publish: true
---

> [!infobox|right]
> # BigQuery
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Serverless data warehouse |
> | **Category** | Analytics |
> | **Launched** | 2011 |
> | **Interface** | SQL, REST API, CLI, client libraries |
> | **Website** | cloud.google.com/bigquery |

---

> "A good stance and posture reflect a proper state of mind."
> <cite>— Morihei Ueshiba</cite>

---

BigQuery is GCP's **fully managed, serverless data warehouse** — petabyte-scale analytics over structured and unstructured data with **standard SQL**, **automatic scaling**, and **pay-per-use** pricing (source: Google Cloud Platform - Introduction to BigQuery.md).

It is the **anchor service** of GCP's analytics stack: where [[dataflow]] / [[datafusion]] / [[pubsub]] pipelines deliver their output, where ML training data lives, and where business dashboards (Looker Studio, Connected Sheets) query data live.

## Why BigQuery exists

As data grows from gigabytes to terabytes to petabytes, traditional databases choke. BigQuery handles **log data from thousands of retail systems, IoT telemetry from millions of sensors, click-streams from global apps** without infrastructure work (source: Google Cloud Platform - Introduction to BigQuery.md).

It also **eliminates the data silo problem** — one query engine over one warehouse, with fine-grained IAM (see [[bigquery-iam]]) so teams collaborate safely instead of copying data into private marts.

## Three core jobs

BigQuery simplifies analytics into three steps. Google handles everything else (source: Google Cloud Platform - Introduction to BigQuery.md):

| Step | What you do |
| --- | --- |
| **Storage** | Tables in BigQuery; auto-scales as data grows. See [[bigquery-tables]] |
| **Ingestion** | Batch from Cloud Storage / streaming from Dataflow or Pub/Sub / external federation. See [[bigquery-loading-data]] and [[bigquery-external-data]] |
| **Querying** | ANSI-compliant SQL via the Web UI, `bq` CLI, REST, or client libs |

## Architecture in one paragraph

Compute and storage are **decoupled**. Tables live in a columnar format (**Capacitor**) on **Colossus** (the GFS successor — see [[../storage/google-file-system|GFS]]). Queries run on a shared, ephemeral pool of workers via the **Dremel** engine, with **petabit-scale Jupiter network** moving bytes between layers. You don't see any of this — you just submit SQL.

## Key features

1. **Serverless architecture** — no infrastructure, no capacity planning (source: Google Cloud Platform- BigQuery(Running Queries...)).
2. **Fast and scalable** — terabytes-to-petabytes in seconds; columnar storage + advanced query optimization.
3. **Real-time analysis** — streaming ingestion via the Storage Write API or Pub/Sub.
4. **SQL-based** — ANSI-compliant; familiar tooling.
5. **Cost-efficient** — separate storage + compute pricing (or **BigQuery Editions** flat-rate slots since 2023).
6. **GCP integration** — [[Cloud Storage|Cloud Storage]], [[pubsub]], [[dataflow]], [[../databases/cloud-bigtable|Bigtable]], [[../databases/cloud-sql|Cloud SQL]] (federated).
7. **BigQuery ML (BQML)** — train ML models with `CREATE MODEL ... AS SELECT` — no data movement.
8. **Security and compliance** — encryption at rest + in transit, GDPR / HIPAA / PCI-DSS, IAM, CMEK.
9. **Easy data sharing** — [[bigquery-authorized-views]], **Analytics Hub**, no copying.
10. **Visualization** — [[bigquery-visualization]] via Looker Studio + Connected Sheets.

## Pricing model (modern)

The raw sources predate the 2023 pricing overhaul. Today:

| Component | Charged |
| --- | --- |
| **Storage** | Active vs. **Long-Term** (auto after 90 days, 50% off) |
| **Queries** | **On-demand** ($/TB scanned) **or BigQuery Editions** (Standard / Enterprise / Enterprise Plus slots) |
| **Streaming inserts** | $/MB |
| **BigQuery ML** | per-query model-training rate |

Public datasets are free to query (only your scan cost). The [[bigquery-sandbox]] gives you free, no-credit-card access for learning.

## Public datasets

Skip ingestion entirely — BigQuery hosts hundreds of **public datasets** (NCAA basketball, NYC taxi trips, NOAA weather, Wikipedia, GitHub repos, etc.) (source: Google Cloud Platform - Introduction to BigQuery.md). You pay only for the bytes your queries scan.

## Sub-topics (deep dives)

- [[bigquery-sandbox]] — free tier for learning (60-day expiry, 10 GB storage, 1 TB query/month).
- [[bigquery-tables]] — temporary, permanent, views.
- [[bigquery-loading-data]] — batch + streaming ingestion.
- [[bigquery-external-data]] — federated sources (Drive, GCS, Cloud SQL, Bigtable).
- [[bigquery-iam]] — roles, members, policies.
- [[bigquery-udfs]] — SQL + JavaScript user-defined functions.
- [[bigquery-authorized-views]] — share filtered data without copying.
- [[bigquery-visualization]] — Looker Studio + Connected Sheets.
- [[bigquery-query-management]] — query history, saved queries, shared queries.

## Strengths

- **Serverless** — zero infra ops.
- **Petabyte-scale** with seconds-to-minutes query latency.
- **Columnar + auto-vectorized** — only scans the columns you `SELECT`.
- **Decoupled storage** — pay separately, scale independently.
- **Built-in ML** via BQML.
- **Streaming ingestion** for real-time dashboards.
- **Tight integration** with the rest of GCP analytics stack.

## Trade-offs and limitations

- **Cost surprises** — full-table scans are easy to write and expensive. Use partitioning, clustering, `LIMIT`, column pruning. (source: Google Cloud Platform- BigQuery(Running Queries...))
- **Limited customization** — no fine-tuning of execution plans like on-prem warehouses.
- **GCP-bound** — porting workloads off GCP requires unloading and rewriting integrations.
- **Learning curve** — for users new to data warehousing or SQL.
- **Small-query workloads** — fixed-fee Editions can be cheaper than on-demand for sustained light usage; the inverse is also true.

(source: Google Cloud Platform- BigQuery(Running Queries, advantage and disadvantage).md)

## Example: minimal SQL

```sql
SELECT state_name,
       AVG(yearly_sunlight_kwh_kw_threshold_avg) AS avg_sun
FROM   `bigquery-public-data.sunroof_solar.solar_potential_by_postal_code`
GROUP BY state_name
ORDER BY avg_sun DESC
LIMIT 3;
```

(source: Google Cloud Platform - Introduction to BigQuery Sandbox.md)

Note table-reference syntax: `` `project.dataset.table` `` with **backticks**, not quotes.

## Cost-aware query patterns

- **Query validator** (green checkmark in UI) shows **estimated bytes processed** before running (source: Google Cloud Platform- BigQuery(Running Queries...)).
- BigQuery only reads the **columns referenced** — a 3 GB table may scan only 78 MB if you `SELECT` two columns.
- **Cached results** are free — repeated identical queries within 24 h on unchanged data are free.
- Always prefer **partitioned + clustered** tables for time-series data.

## Where BigQuery sits in the GCP analytics stack

```
[Pub/Sub]  ──► [Dataflow / Datafusion]  ──► [BigQuery]  ──► [Looker Studio]
   ▲                                            │
   │                                            ▼
[App / Logs]                          [Data Catalog / Dataplex]
                                         (metadata + discovery)
```

## Interesting Facts

- BigQuery's query engine is **Dremel**, in production at Google since ~2006. The 2010 Dremel paper inspired Apache Drill and influenced columnar warehouses everywhere.
- A famous demo: querying a **trillion rows** of Wikipedia revisions in tens of seconds — by scanning **petabits of bandwidth in parallel** across thousands of workers.
- **BigQuery ML** lets you `CREATE MODEL ... AS SELECT ...` — training a logistic regression or DNN with one SQL statement, no data movement.
- BigQuery powers Spotify Wrapped, NYT data journalism, and Google's own internal analytics for products like Search and YouTube.

## Interview Questions can be asked

1. Explain BigQuery's **decoupled storage and compute** architecture.
2. Why is column pruning important for cost? How does columnar storage enable it?
3. On-demand vs **BigQuery Editions** (slot-based) pricing — when prefer which?
4. Walk through your strategy to **avoid expensive full-table scans**.
5. How do **partitioning** and **clustering** differ?
6. When use BigQuery vs [[../databases/cloud-bigtable|Bigtable]] vs [[../databases/cloud-spanner|Spanner]]?
7. How would you stream Pub/Sub events into BigQuery for real-time dashboards?
8. What is BigQuery ML and when does it beat using Vertex AI directly?

## Related pages

> [!grid]
>
>> [!card] BigQuery sub-pages
>> [[bigquery-tables|BigQuery Tables]], [[bigquery-loading-data|Loading Data to BigQuery]], [[bigquery-external-data|BigQuery External Data]], [[bigquery-iam|BigQuery IAM]], [[bigquery-udfs|BigQuery UDFs]], [[bigquery-authorized-views|BigQuery Authorized Views]], [[bigquery-visualization|BigQuery Data Visualization]], [[bigquery-query-management|BigQuery Query Management]], [[bigquery-sandbox|BigQuery Sandbox]]
>
>
>> [!card] Sister GCP analytics
>> [[dataflow|Dataflow]], [[datafusion|Data Fusion]], [[data-catalog|Data Catalog]], [[pubsub|Pub/Sub]]
>
>
>> [!card] Data Engineering
>> [[../../../data-engineering/data-warehousing|Data Warehousing]]
>
>
>> [!card] Data Architecture
>> [[../../../data-engineering/data-architecture/data-warehouse|Data Warehouse]]
>
>
>> [!card] Data Storage
>> [[../../../data-engineering/data-storage/column-oriented-database|Column-oriented Database]]
>
>
>> [!card] Data Processing
>> [[../../../data-engineering/data-processing/online-analytical-processing|OLAP]]
>
>
>> [!card] Related products
>> [[Cloud Storage|Cloud Storage]], [[../databases/cloud-bigtable|Cloud Bigtable]], [[../../databricks/databricks|Databricks (alternative)]]
>
>
>> [!card] Certifications
>> [[Professional Data Engineer|Professional Data Engineer]]
>
>
>> [!card] People
>> [[../../../../people/jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]]

