---
title: Cloud Data Fusion
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:35:00 pm
aliases:
  - Data Fusion
  - Datafusion
category: Cloud
tags:
  - GCP
  - Analytics
  - ETL
  - DataEngineering
  - LowCode
banner:
dg-publish: true
publish: true
---

---

Google Cloud Data Fusion is a **fully managed, low-code data integration service** for building and managing ETL/ELT pipelines through a **drag-and-drop graphical interface** (source: Datafusion in Google Cloud Platform (GCP).md).

It is built on the open-source **CDAP** (Cask Data Application Platform) and supports **parallel execution**, hundreds of built-in connectors, and integration with [[bigquery|BigQuery]], [[../storage/cloud-storage|Cloud Storage]], [[../databases/cloud-bigtable|Bigtable]], on-prem databases, and many SaaS APIs.

If you want **code-first** pipelines, use [[dataflow]]. Data Fusion is the **visual / no-code** alternative for the same family of problems.

## Why Data Fusion exists

- **Reduce coding effort** — analysts and data engineers without strong Java/Python skills can still build production ETL.
- **Standardize patterns** — reuse pre-built templates and connectors instead of bespoke code.
- **Unify on-prem + cloud** — many enterprise sources (Oracle, Teradata, SAP) have certified connectors.
- **Visualize lineage** — pipelines render as DAGs that anyone can read.

(source: Datafusion in Google Cloud Platform (GCP).md)

## Core components

(source: Datafusion in Google Cloud Platform (GCP).md)

### 1. Source

Where data enters the pipeline.

- Pulls from external systems, files, databases.
- Supports CSV, JSON, Excel, database tables, APIs, GCS, Bigtable, JDBC, Kafka, etc.
- The **first stage** of the pipeline.

### 2. Transformations

Modify data in flight.

- Filter, parse, format, aggregate, join.
- Built-in plugins: **CSV Formatter**, **Compressor**, **Joiner**, **Wrangler**, **Group By**, **Aggregator**.
- Convert raw data to structured, usable form.

### 3. Sink

Where the transformed data lands.

- Common sinks: [[bigquery|BigQuery]], [[../storage/cloud-storage|GCS]], Cloud SQL, on-prem DBs.
- Final stage of the pipeline.

### 4. Error handlers

- Capture and route records that fail processing.
- Prevent whole-pipeline crashes from a few bad rows.
- Send failures to alternate storage / dead-letter queues.

### 5. Wrangler

A built-in **interactive data-prep tool**:

- Live preview of transformations before applying.
- Standardize, enrich, structure raw data.
- Perfect for "I have a messy CSV and I'm not sure what cleansing it needs yet."

## Working with Data Fusion in the Console

(source: Datafusion in Google Cloud Platform (GCP).md)

1. Navigation menu → **Data Fusion**.
2. **Create an Instance** — pick edition (Developer / Basic / Enterprise), region, version. Provisioning takes **10–20 minutes** because Data Fusion launches a full CDAP environment behind the scenes.
3. Open the instance → drag **Source → Transform → Sink** plugins onto the canvas → wire them.
4. Configure each plugin (connection strings, schema, options).
5. Click **Deploy** to register the pipeline.
6. **Run** to execute (Data Fusion translates the pipeline to a Dataproc job under the hood).

## Editions

| Edition | Use case |
| --- | --- |
| **Developer** | Single-user dev / sandbox |
| **Basic** | Smaller workloads, no high-availability |
| **Enterprise** | Production, HA, advanced security, replication |

## How it actually runs

A Data Fusion pipeline is **rendered as Apache Spark / MapReduce** and submitted to **Dataproc**. So under the hood:

- You **draw** with Data Fusion.
- The job runs on **Dataproc** (Spark cluster).
- Reads/writes go through native GCP connectors.

This is invisible to the user but explains pricing (you pay for both Data Fusion instance hours **and** the Dataproc execution).

## Alternatives within GCP

(source: Datafusion in Google Cloud Platform (GCP).md)

| Service | Strength | Weakness for this use case |
| --- | --- | --- |
| **[[dataflow]]** | Code-first, unified batch + streaming, autoscaling | Requires Java/Python + Beam |
| **Dataproc** | Run existing Spark / Hadoop / Hive jobs | You manage clusters, no UI |
| **Data Fusion** | Visual, low-code, hundreds of connectors | Slower start (instance provisioning), Dataproc cost behind the scenes |

## When to choose Data Fusion

- Many heterogeneous **enterprise sources** (Oracle, SAP, Salesforce, etc.) — connector ecosystem is the killer feature.
- **Citizen data engineers** in your team who don't want to write Beam.
- You need **visual lineage and documentation** of pipelines for governance.
- Workloads are batch-oriented; for low-latency streaming, prefer Dataflow.

## When NOT to use it

- Simple GCS-to-BigQuery loads — `bq load` or [[bigquery-loading-data|Console upload]] is simpler.
- Heavy custom Python / ML transformations — write Dataflow Beam code instead.
- Tight cost budgets — Data Fusion instance + Dataproc cluster is more expensive than a serverless Dataflow job for moderate volumes.

## Interesting Facts

- Data Fusion is an **acquired** product — Google bought CDAP creator **Cask Data** in 2018 and rebranded.
- The connector library is on the **CDAP Hub** — community-contributed plus Google-certified plugins.
- Pipelines export as **JSON** — version-control them in Git, deploy via CI/CD using the REST API.

## Interview Questions can be asked

1. Data Fusion vs [[dataflow]] vs Dataproc — when prefer which?
2. What runs your Data Fusion pipeline under the hood? (Dataproc / Spark)
3. Walk through a pipeline: Oracle on-prem → BigQuery, with PII masking.
4. What is the **Wrangler** and when is it useful?

## Related pages

> [!multi-column]
>
>> [!card] Sister GCP analytics
>> [[bigquery|BigQuery]], [[dataflow|Dataflow]], [[pubsub|Pub/Sub]], [[data-catalog|Data Catalog]]
>
>
>> [!card] Data Engineering
>> [[../../data-engineering/data-pipeline|Data Pipeline]]
>
>
>> [!card] Data Ingestion
>> [[../../data-engineering/data-ingestion/data-ingestion|Data Ingestion]]
>
>
>> [!card] Tools
>> [[../../tools/ingestion-tools|Ingestion Tools]]
>
>
>> [!card] Related products
>> [[../storage/cloud-storage|Cloud Storage]]
>
>
>> [!card] Certifications
>> [[../certifications/professional-data-engineer|Professional Data Engineer]]

