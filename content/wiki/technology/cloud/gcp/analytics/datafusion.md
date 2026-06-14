---
title: Cloud Data Fusion
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
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
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Data Fusion
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed data integration (ETL/ELT) |
> | **Category** | Analytics / Integration |
> | **Launched** | 2019 (GA Nov 2019) |
> | **Interface** | Drag-and-drop GUI, CDAP, REST API |
> | **Website** | cloud.google.com/data-fusion |

---

> "Investing in yourself is the best investment you will ever make."
> <cite>— Robin Sharma</cite>

---

<span class="at-kicker">Data Integration · Google Cloud</span>

# Cloud Data Fusion

<p class="at-lead">
Google Cloud Data Fusion is a fully managed, low-code data integration service for building and managing ETL/ELT pipelines through a drag-and-drop graphical interface built on open-source CDAP.
</p>

<span class="at-stat">200+</span> pre-built connectors &nbsp;·&nbsp; <span class="at-stat">visual pipeline</span> builder &nbsp;·&nbsp; <span class="at-stat">Wrangler</span> data prep &nbsp;·&nbsp; <span class="at-mark">drag-and-drop ETL that generates Dataflow/Spark under the hood</span>

<span class="at-kicker">How It Works</span>

## Overview

Google Cloud Data Fusion is a **fully managed, low-code data integration service** for building and managing ETL/ELT pipelines through a **drag-and-drop graphical interface** (source: Datafusion in Google Cloud Platform (GCP).md).

It is built on the open-source **CDAP** (Cask Data Application Platform) and supports **parallel execution**, hundreds of built-in connectors, and integration with [[bigquery|BigQuery]], [[Cloud Storage|Cloud Storage]], [[../databases/cloud-bigtable|Bigtable]], on-prem databases, and many SaaS APIs.

If you want **code-first** pipelines, use [[dataflow]]. Data Fusion is the **visual / no-code** alternative for the same family of problems.

### Why Data Fusion exists

- **Reduce coding effort** — analysts and data engineers without strong Java/Python skills can still build production ETL.
- **Standardize patterns** — reuse pre-built templates and connectors instead of bespoke code.
- **Unify on-prem + cloud** — many enterprise sources (Oracle, Teradata, SAP) have certified connectors.
- **Visualize lineage** — pipelines render as DAGs that anyone can read.

(source: Datafusion in Google Cloud Platform (GCP).md)

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### SOURCE CONNECTORS
>> ### Data *Ingestion*
>> Pull from external systems, files, and databases. Support for CSV, JSON, Excel, database tables, APIs, GCS, Bigtable, JDBC, Kafka, and 200+ sources. The first stage of every pipeline.
>
>> [!card|section]
>> ###### TRANSFORMATIONS
>> ### Data *Transformation*
>> Modify data in flight with filter, parse, format, aggregate, and join operations. Built-in plugins include CSV Formatter, Compressor, Joiner, Wrangler, Group By, and Aggregator.
>
>> [!card|section]
>> ###### SINKS
>> ### Data *Delivery*
>> Write to BigQuery, GCS, Cloud SQL, and on-prem databases. Native GCP connectors ensure optimal performance. Final stage of the ETL pipeline.
>
>> [!card|section]
>> ###### ERROR HANDLING
>> ### Fault *Tolerance*
>> Capture and route records that fail processing. Prevent whole-pipeline crashes from individual bad rows. Send failures to alternate storage or dead-letter queues.
>
>> [!card|section]
>> ###### WRANGLER
>> ### Interactive *Data Prep*
>> Live preview of transformations before applying. Standardize, enrich, and structure raw data visually. Perfect for messy CSV exploration without writing code.
>
>> [!card|section]
>> ###### CDAP FOUNDATION
>> ### Open-Source *Core*
>> Built on Cask Data Application Platform (CDAP). Pipelines export as JSON for version control. Community-contributed plus Google-certified plugins available on CDAP Hub.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Instance hours** | Developer, Basic, and Enterprise edition pricing per hour |
| **Dataproc execution** | Spark/MapReduce jobs run on Dataproc clusters behind the scenes |
| **Data processing** | Additional costs for data volume processed |
| **Editions** | Developer (single-user), Basic (smaller workloads), Enterprise (HA, advanced security) |

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### ENTERPRISE ETL
>> ### Legacy System *Integration*
>> Connect to Oracle, Teradata, SAP, and Salesforce with certified connectors. Move data from on-prem databases to BigQuery without writing custom extraction code.
>
>> [!card|section]
>> ###### DATA MIGRATION
>> ### Cloud *Migration*
>> Migrate data warehouses and lakes to GCP visually. Map source schemas to BigQuery destinations. Schedule recurring sync jobs for ongoing replication.
>
>> [!card|section]
>> ###### CITIZEN DATA ENGINEERING
>> ### Low-Code *ETL*
>> Enable business analysts to build production pipelines without Java/Python skills. Visual DAGs document pipeline logic for governance and debugging.
>
>> [!card|section]
>> ###### DATA PREPARATION
>> ### Visual *Cleansing*
>> Use Wrangler for interactive data exploration and cleaning. Preview transformations on sample data before applying to full datasets. Handle messy CSVs and semi-structured data.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD DATA FUSION
>> # From *multiple sources* to *integrated pipeline*.
>> Build production ETL pipelines visually with drag-and-drop components that run on Spark under the hood.
>
>> [!card|step]
>> ###### Step 01
>> ### *Connect* source systems.
>> Create a Data Fusion instance (10-20 minutes for CDAP environment). Browse 200+ connectors including Oracle, SAP, Salesforce, and cloud storage. Configure connection strings and authentication.
>
>> [!card|step]
>> ###### Step 02
>> ### *Design* transformation pipeline.
>> Drag Source → Transform → Sink plugins onto the canvas. Wire components together to define data flow. Use Wrangler for interactive data preparation and cleansing.
>
>> [!card|step]
>> ###### Step 03
>> ### *Deploy* and schedule.
>> Click Deploy to register the pipeline. Set up schedules for recurring execution. Monitor runs in the Data Fusion UI — pipelines translate to Dataproc Spark jobs behind the scenes.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister GCP analytics
>> [[bigquery|BigQuery]], [[dataflow|Dataflow]], [[pubsub|Pub/Sub]], [[technology/cloud/gcp/analytics/data-catalog|Data Catalog]]
>
>
>> [!card] Data Engineering
>> [[../../../data-engineering/data-pipeline|Data Pipeline]]
>
>
>> [!card] Data Ingestion
>> [[../../../data-engineering/data-ingestion/data-ingestion|Data Ingestion]]
>
>
>> [!card] Tools
>> [[../../../tools/ingestion-tools|Ingestion Tools]]
>
>
>> [!card] Related products
>> [[Cloud Storage|Cloud Storage]]
>
>
>> [!card] Certifications
>> [[Professional Data Engineer|Professional Data Engineer]]

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

- Common sinks: [[bigquery|BigQuery]], [[Cloud Storage|GCS]], Cloud SQL, on-prem DBs.
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
