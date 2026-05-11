---
title: Data Pipeline
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Data Pipeline
  - ETL Pipeline
  - ELT Pipeline
category: Computer Science
tags:
  - DataEngineering
  - Pipelines
  - ETL
  - ELT
banner:
dg-publish: true
publish: true
---
---

A **Data Pipeline** is a workflow consisting of one or more tasks that **ingest, move, and transform** raw data from one or more sources to a destination. The data at the destination is then used for analysis, machine learning, or other business functions. Pipelines split into two categories: **[[batch-data-processing|batch processing]]** (most common) and **[[stream-data-processing|real-time / streaming]]** (source: Concepts/Data Pipeline.md).

## Architecture

Four main parts (source: Concepts/Data Pipeline.md):

1. **Data source** — application DBs, APIs, files (SFTP, GCS), event streams.
2. **Business logic** — cleaning, filtering, transformation specific to the business.
3. **Data destination / target** — usually another DB, often a [[data-warehouse|warehouse]] or [[data-lake|lake]].
4. **Scheduler / orchestration tool** — Cron for simple, [[../data-engineering/concepts/data-processing/workflow-orchestration|orchestrator]] for complex.

There's no one-size-fits-all architecture. The right choice depends on data volume, velocity, latency requirements, team skills, and budget.

### Data sources

- Application databases (Postgres, MySQL).
- APIs (REST, GraphQL).
- Files on SFTP / cloud storage.
- Streaming events (Kafka, [[../gcp/analytics/pubsub|Pub/Sub]]).
- Public datasets (search "open data portal").

### Business logic

The **transformation** stage — cleaning, deduplication, type casting, enrichment, aggregation, joins, mapping to target schema.

### Destinations

- **Warehouse** — BigQuery, Snowflake, Redshift, Synapse.
- **Lake** — GCS, S3, ADLS.
- **OLTP DB** — for operational consumers.
- **Cache / KV** — Redis for low-latency apps.
- **Search** — Elasticsearch for full-text.
- **Other** — ML feature store, BI tools.

### Scheduler / orchestrator

- **Cron** — simple scripted scheduling on a single machine.
- **[[../data-engineering/concepts/data-processing/workflow-orchestration|Workflow orchestrator]]** — Airflow, Dagster, Prefect — for multi-step DAGs with retries, alerts, backfills.

## Common pipeline types

### CDC pipeline

Replicate changes (insert/update/delete) from a transactional DB to a destination. See [[change-data-capture|CDC]].

```
[App DB] → [WAL/Binlog] → [Debezium] → [Kafka] → [Sink connector] → [Warehouse]
```

### ETL pipeline

Extract, transform, load. Transform happens **before** loading.

```
[Source] → [Extract] → [Transform] → [Load] → [Warehouse]
```

Synonymous with **batch processing**. Older pattern, common when storage was expensive.

### ELT pipeline

Extract, load, transform. Load **raw** data first; transform inside the warehouse.

```
[Source] → [Extract] → [Load (raw)] → [Warehouse]
                                          │
                                       [Transform inside]
                                          │
                                          ▼
                                     [Modeled tables]
```

Modern pattern. Storage is cheap; keeping raw data preserves flexibility.

(source: Concepts/Data Pipeline.md)

## Example pipelines

- **SaaS daily ETL** — application data + marketing data → daily dashboard.
- **E-commerce real-time** — order events → fraud detection → inventory + analytics.
- **IoT** — device telemetry → Pub/Sub → Dataflow → BigQuery.

## Pipeline best practices

See [[guides/data-pipeline-best-practices|Pipeline Best Practices]] for the full guide. Top hits:

- **Idempotent** — see [[idempotence|Idempotence]].
- **Logged + monitored** — alerts on failure + latency.
- **Tested** — code unit tests + [[data-unit-test|data unit tests]].
- **Version-controlled** — Git, CI/CD.
- **Parameterized** — config files, not hard-coded values.
- **Separate envs** — dev / staging / prod, color-coded.

## On GCP

- **Batch**: [[../gcp/storage/cloud-storage|GCS]] → [[../gcp/analytics/dataflow|Dataflow]] → [[../gcp/analytics/bigquery|BigQuery]].
- **Streaming**: [[../gcp/analytics/pubsub|Pub/Sub]] → Dataflow → BigQuery.
- **CDC**: Datastream → BigQuery.
- **Visual**: [[../gcp/analytics/datafusion|Data Fusion]].
- **Orchestration**: Cloud Composer (Airflow).

## Interesting Facts

- **Apache Beam** was Google's gift to the OSS world — a unified batch + stream programming model.
- The **DAG** abstraction (used by Airflow, Dagster, Prefect, Dataflow, Spark) traces back to academic dataflow research from the 1970s.
- **dbt** popularized the idea that analytics engineers can build transformations using just SQL + version control.

## Interview Questions

1. **ETL** vs **ELT** — pros/cons + when each.
2. Walk through designing a real-time fraud-detection pipeline.
3. **CDC** pipeline architecture end-to-end.
4. How do you make a pipeline **idempotent**?
5. **Cron** vs **orchestrator** — when each.

## Related pages

> [!multi-column]
>
>> [!card] Pipeline phases
>> [[data-ingestion|Data Ingestion]], [[batch-data-processing|Batch Processing]], [[stream-data-processing|Stream Processing]], [[workflow-orchestration|Workflow Orchestration]]
>
>
>> [!card] Practitioner guides
>> [[guides/data-pipeline-best-practices|Pipeline Best Practices]], [[guides/testing-data-pipeline|Testing Your Data Pipeline]], [[guides/getting-started|Getting Started]]
>
>
>> [!card] People
>> [[../people/joe-reis-matt-housley|Joe Reis + Matt Housley]]
>
>
>> [!card] Books
>> [[../books/fundamentals-of-data-engineering|Fundamentals of Data Engineering]]

