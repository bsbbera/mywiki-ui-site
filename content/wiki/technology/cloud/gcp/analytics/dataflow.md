---
title: Cloud Dataflow
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Dataflow
  - Google Cloud Dataflow
category: Cloud
tags:
  - GCP
  - Analytics
  - DataEngineering
  - ETL
  - Streaming
  - ApacheBeam
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Dataflow
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Stream & batch data processing |
> | **Category** | Analytics / ETL |
> | **Launched** | 2015 (GA Aug 2015) |
> | **Interface** | Apache Beam SDK (Java, Python) |
> | **Website** | cloud.google.com/dataflow |

---

> "The most important battle is one to conquer yourself."
> <cite>— Yanni</cite>

---

<span class="at-kicker">Stream & Batch Processing · Google Cloud</span>

# Cloud Dataflow

<p class="at-lead">
Cloud Dataflow is GCP's fully managed, serverless data-processing service for batch and streaming pipelines, built on Apache Beam — the code-first ETL engine of GCP.
</p>

<span class="at-stat">Apache Beam</span> SDK &nbsp;·&nbsp; <span class="at-stat">autoscaling</span> &nbsp;·&nbsp; <span class="at-stat">batch</span> + streaming unified &nbsp;·&nbsp; <span class="at-mark">one pipeline definition runs on both batch and streaming</span>

<span class="at-kicker">How It Works</span>

## Overview

Cloud Dataflow is GCP's **fully managed, serverless data-processing service** for **batch and streaming** pipelines, built on **Apache Beam** (source: Building Data Pipelines with Google Cloud Dataflow ETL Processing.md).

It is the **code-first ETL engine** of GCP — write a pipeline in Java or Python, submit it, and Dataflow autoscales workers, handles failures, and integrates with the rest of the GCP analytics stack.

If you want a **visual, drag-and-drop** alternative, see [[datafusion]]; for **Spark / Hadoop**, see Dataproc (stub).

### What makes Dataflow distinctive

1. **Serverless** — no clusters to size; Dataflow provisions, autoscales, and tears down workers per job (source: Building Data Pipelines with Google Cloud Dataflow ETL Processing.md).
2. **Unified batch + streaming** — same code, same SDK, same operators (`ParDo`, `GroupByKey`, `Window`) work for finite or infinite data.
3. **Apache Beam SDK** — open-source, portable across runners (Dataflow, Flink, Spark, direct local).
4. **Tight GCP integration** — sources/sinks for [[Cloud Storage|GCS]], [[bigquery|BigQuery]], [[pubsub|Pub/Sub]], [[../databases/cloud-bigtable|Bigtable]], [[../databases/cloud-spanner|Spanner]], etc.
5. **Exactly-once** processing semantics by default for streaming.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### SERVERLESS
>> ### Serverless *Architecture*
>> No infrastructure provisioning required. Dataflow provisions, autoscales, and tears down workers automatically per job. Pay only for resources consumed during execution.
>
>> [!card|section]
>> ###### UNIFIED MODEL
>> ### Unified Batch + *Stream*
>> Same Apache Beam code runs on both batch and streaming data. Identical operators — ParDo, GroupByKey, Window — work for finite or infinite datasets.
>
>> [!card|section]
>> ###### APACHE BEAM
>> ### Apache Beam *SDK*
>> Open-source programming model portable across runners. Write once, run on Dataflow, Flink, Spark, or local. Java and Python SDKs with rich transformation libraries.
>
>> [!card|section]
>> ###### AUTOSCALING
>> ### Dynamic *Scaling*
>> Workers spin up and down with input volume automatically. Streaming pipelines auto-rebalance shards for throughput. Cost scales directly with workload.
>
>> [!card|section]
>> ###### EXACTLY-ONCE
>> ### Exactly-Once *Semantics*
>> Guaranteed exactly-once processing for streaming by default. No duplicates, no data loss. Critical for financial transactions and audit logging.
>
>> [!card|section]
>> ###### GCP INTEGRATION
>> ### Native *Connectors*
>> Built-in sources and sinks for GCS, BigQuery, Pub/Sub, Bigtable, and Spanner. IAM integration, VPC support, and customer-managed encryption keys.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Compute** | Per-second billing for worker resources (vCPU, memory, PD) |
| **Shuffle** | Data processed by Dataflow shuffle service |
| **Streaming Engine** | Separate billing for streaming engine (improved autoscale) |
| **Dataflow Prime** | Vertical autoscaling and right-fitting (surcharge) |
| **Dataflow ML** | GPU/TPU inference within pipelines |

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### ETL PIPELINES
>> ### Extract-Transform-*Load*
>> Read from GCS, Cloud SQL, or APIs. Transform with ParDo and GroupByKey. Load to BigQuery, Bigtable, or GCS. Schedule with Cloud Composer.
>
>> [!card|section]
>> ###### STREAMING ANALYTICS
>> ### Real-Time *Processing*
>> Ingest from Pub/Sub, apply windowing and aggregations, write to BigQuery. Second-level latency for operational dashboards and alerting.
>
>> [!card|section]
>> ###### CDC REPLICATION
>> ### Change Data *Capture*
>> Stream database changes via Datastream or Debezium. Transform and merge into BigQuery for real-time analytics replicas of transactional systems.
>
>> [!card|section]
>> ###### ML INFERENCE
>> ### ML *Prediction*
>> Run TensorFlow and PyTorch inference within data pipelines. Apply ML models to streaming events in real-time before writing to sinks.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD DATAFLOW
>> # From *raw stream* to *processed output*.
>> Build unified batch and streaming pipelines with Apache Beam that autoscale from test to production.
>
>> [!card|step]
>> ###### Step 01
>> ### *Write* Apache Beam pipeline.
>> Define PCollections and PTransforms in Java or Python. Apply ParDo for element-wise processing, GroupByKey for aggregations, and Window for time-based operations.
>
>> [!card|step]
>> ###### Step 02
>> ### *Deploy* to Dataflow runner.
>> Submit pipeline with DataflowRunner via CLI, API, or Cloud Composer. Specify staging and temp locations in GCS. Dataflow provisions workers and starts execution.
>
>> [!card|step]
>> ###### Step 03
>> ### *Monitor* job graph.
>> Watch real-time job graph in Cloud Console. View stage breakdown, worker utilization, and data flow. Autoscaling adapts worker count to input volume automatically.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister GCP analytics
>> [[bigquery|BigQuery]], [[datafusion|Data Fusion]], [[pubsub|Pub/Sub]], [[data-catalog|Data Catalog]]
>
>
>> [!card] Data Processing
>> [[../../../data-engineering/data-processing/batch-data-processing|Batch Processing]], [[../../../data-engineering/data-processing/stream-data-processing|Stream Processing]]
>
>
>> [!card] Data Architecture
>> [[../../../data-engineering/data-architecture/lambda-architecture|Lambda Architecture]], [[../../../data-engineering/data-architecture/kappa-architecture|Kappa Architecture]]
>
>
>> [!card] Related products + tools
>> [[Cloud Storage|Cloud Storage]], [[../../../tools/processing-tools|Processing Tools]]
>
>
>> [!card] Certifications
>> [[Professional Data Engineer|Professional Data Engineer]]

## Where Dataflow fits in the ETL pipeline

The classic **Extract → Transform → Load** maps directly onto Dataflow (source: Building Data Pipelines with Google Cloud Dataflow ETL Processing.md):

| Phase | Dataflow's role |
| --- | --- |
| **Extract** | Reads from [[../storage/cloud-storage|GCS]], [[../databases/cloud-sql|Cloud SQL]], [[bigquery|BigQuery]], [[pubsub|Pub/Sub]], external APIs. |
| **Transform** | Apache Beam programming model — filter, aggregate, join, enrich, window. |
| **Load** | Writes to [[bigquery|BigQuery]], GCS, Bigtable, Spanner, Pub/Sub, or any custom sink. |
| **Orchestration** | Cloud **Composer** (managed Airflow) schedules + monitors Dataflow jobs. **Cloud Logging / Monitoring** for observability. |

## Worked example: GCS CSV → BigQuery

Following the source's tutorial structure (source: Building Data Pipelines with Google Cloud Dataflow ETL Processing.md):

```bash
# 1. Enable Dataflow API in the Console (APIs & Services).

# 2. Pull example pipelines:
gsutil -m cp -R gs://spls/gsp290/dataflow-python-examples .

# 3. Set the project:
export PROJECT=<your-project-id>
gcloud config set project $PROJECT

# 4. Create a regional GCS bucket:
gsutil mb -c regional -l us-central1 gs://$PROJECT

# 5. Stage some sample data:
gsutil cp gs://spls/gsp290/data_files/usa_names.csv      gs://$PROJECT/data_files/
gsutil cp gs://spls/gsp290/data_files/head_usa_names.csv gs://$PROJECT/data_files/

# 6. Create a BigQuery dataset:
bq mk lake

# 7. Run a Dataflow pipeline (template or custom Python) that ingests
#    the CSVs from GCS, transforms, and writes to BigQuery.
python data_ingestion.py \
  --project=$PROJECT \
  --region=us-central1 \
  --runner=DataflowRunner \
  --staging_location=gs://$PROJECT/staging \
  --temp_location=gs://$PROJECT/temp \
  --input=gs://$PROJECT/data_files/usa_names.csv \
  --output=$PROJECT:lake.usa_names
```

The same Beam code, with `WindowInto(...)` and a Pub/Sub source, becomes a streaming pipeline.

## Apache Beam programming model in 60 seconds

```python
import apache_beam as beam

with beam.Pipeline(options=opts) as p:
    (p
     | 'Read'      >> beam.io.ReadFromText('gs://bucket/in.csv')
     | 'Parse'     >> beam.Map(parse_csv)
     | 'Filter'    >> beam.Filter(lambda r: r['country'] == 'US')
     | 'Aggregate' >> beam.combiners.Count.PerKey()
     | 'Write'     >> beam.io.WriteToBigQuery(
            'project:dataset.table',
            schema='word:STRING,count:INT64',
            write_disposition=beam.io.BigQueryDisposition.WRITE_TRUNCATE))
```

The same pipeline with `beam.io.ReadFromPubSub(...)` + `beam.WindowInto(beam.window.FixedWindows(60))` becomes streaming.

## Dataflow vs Datafusion vs Dataproc

| Service | Approach | Best for |
| --- | --- | --- |
| **Dataflow** | Code (Apache Beam, Java/Python) | Custom logic, streaming + batch unified |
| **[[datafusion]]** | Visual / drag-drop | Low-code ETL, business analysts |
| **Dataproc** (stub) | Spark / Hadoop / Hive clusters | Existing Hadoop/Spark workloads, HiveQL, Spark MLlib |
| **Cloud Composer** (stub) | Airflow DAGs | Orchestration of jobs (often calling Dataflow / dbt) |

## Modern Dataflow features (not in raw)

- **Dataflow Templates** — pre-built pipelines (e.g. **Pub/Sub to BigQuery**) you launch with parameters; no code required.
- **Flex Templates** — your own Docker images, parameterized launches.
- **Streaming Engine** — separates compute from worker disk; faster autoscale + lower cost.
- **Dataflow Prime** — vertical autoscaling + right-fitting.
- **Dataflow ML** — TensorFlow / PyTorch inference inside pipelines.

## Interesting Facts

- **Apache Beam** was donated to the ASF by Google in 2016 — Dataflow is the *original* Beam runner, but Beam now runs on Spark, Flink, Samza, etc.
- A single Beam pipeline can hit **petabyte/hour throughput** on Dataflow with autoscaling.
- The **Dataflow shuffle service** is itself one of the largest distributed systems Google operates — it serves both batch and streaming.

## Interview Questions can be asked

1. Dataflow vs [[datafusion]] — when prefer which?
2. Explain the **unified batch and streaming** model. Where do windowing and triggers fit?
3. Difference between **PCollection** and **PTransform** in Beam.
4. How does Dataflow autoscale streaming pipelines?
5. When would you use **Cloud Composer** to orchestrate Dataflow jobs?
6. Walk through a real-time pipeline: Pub/Sub → Dataflow → BigQuery.
