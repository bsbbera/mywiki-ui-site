---
title: Cloud Dataflow
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:35:00 pm
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
banner:
dg-publish: true
publish: true
---
---

Cloud Dataflow is GCP's **fully managed, serverless data-processing service** for **batch and streaming** pipelines, built on **Apache Beam** (source: Building Data Pipelines with Google Cloud Dataflow ETL Processing.md).

It is the **code-first ETL engine** of GCP — write a pipeline in Java or Python, submit it, and Dataflow autoscales workers, handles failures, and integrates with the rest of the GCP analytics stack.

If you want a **visual, drag-and-drop** alternative, see [[datafusion]]; for **Spark / Hadoop**, see Dataproc (stub).

## What makes Dataflow distinctive

1. **Serverless** — no clusters to size; Dataflow provisions, autoscales, and tears down workers per job (source: Building Data Pipelines with Google Cloud Dataflow ETL Processing.md).
2. **Unified batch + streaming** — same code, same SDK, same operators (`ParDo`, `GroupByKey`, `Window`) work for finite or infinite data.
3. **Apache Beam SDK** — open-source, portable across runners (Dataflow, Flink, Spark, direct local).
4. **Tight GCP integration** — sources/sinks for [[../storage/cloud-storage|GCS]], [[bigquery|BigQuery]], [[pubsub|Pub/Sub]], [[../databases/cloud-bigtable|Bigtable]], [[../databases/cloud-spanner|Spanner]], etc.
5. **Exactly-once** processing semantics by default for streaming.

## Where Dataflow fits in the ETL pipeline

The classic **Extract → Transform → Load** maps directly onto Dataflow (source: Building Data Pipelines with Google Cloud Dataflow ETL Processing.md):

| Phase | Dataflow's role |
| --- | --- |
| **Extract** | Reads from [[../storage/cloud-storage|GCS]], [[../databases/cloud-sql|Cloud SQL]], [[bigquery|BigQuery]], [[pubsub|Pub/Sub]], external APIs. |
| **Transform** | Apache Beam programming model — filter, aggregate, join, enrich, window. |
| **Load** | Writes to [[bigquery|BigQuery]], GCS, Bigtable, Spanner, Pub/Sub, or any custom sink. |
| **Orchestration** | Cloud **Composer** (managed Airflow) schedules + monitors Dataflow jobs. **Cloud Logging / Monitoring** for observability. |

## Key features for ETL processing

(source: Building Data Pipelines with Google Cloud Dataflow ETL Processing.md)

- **Serverless architecture** — no infrastructure provisioning. Costs scale with workload.
- **Unified batch + stream** — one codebase for both.
- **Scalability** — workers spin up / down with input volume. Streaming pipelines auto-rebalance shards.
- **Apache Beam developer experience** — Python or Java; the SDK is portable beyond GCP.
- **Native GCP integration** — sources, sinks, IAM, VPC, customer-managed encryption keys.

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

## Benefits

- **Cost efficiency** — workers allocated dynamically, paid per second.
- **Unified development model** — one codebase, two execution modes.
- **Tight GCP integration** — moves fluidly between GCP storage / DBs / messaging.
- **Real-time insights** — second-level latency on streaming dashboards.

(source: Building Data Pipelines with Google Cloud Dataflow ETL Processing.md)

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

## Related pages

> [!multi-column]
>
>> [!card] Sister GCP analytics
>> [[bigquery|BigQuery]], [[datafusion|Data Fusion]], [[pubsub|Pub/Sub]], [[data-catalog|Data Catalog]]
>
>
>> [!card] Data Processing
>> [[../../data-engineering/concepts/data-processing/batch-data-processing|Batch Processing]], [[../../data-engineering/concepts/data-processing/stream-data-processing|Stream Processing]]
>
>
>> [!card] Data Architecture
>> [[../../data-engineering/concepts/data-architecture/lambda-architecture|Lambda Architecture]], [[../../data-engineering/concepts/data-architecture/kappa-architecture|Kappa Architecture]]
>
>
>> [!card] Related products + tools
>> [[../storage/cloud-storage|Cloud Storage]], [[../../data-engineering/tools/processing-tools|Processing Tools]]
>
>
>> [!card] Certifications
>> [[../certifications/professional-data-engineer|Professional Data Engineer]]

