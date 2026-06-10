---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Data Pipeline
Created:
  - 2026-04-29
aliases:
  - Data Pipeline
  - ETL Pipeline
  - ELT Pipeline
category: Computer Science
tags:
  - data-engineering
  - concept
  - Pipelines
  - ETL
  - ELT
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Core Concepts</span>

# Data Pipeline

<p class="at-lead">
A Data Pipeline is a workflow consisting of one or more tasks that ingest, move, and transform raw data from one or more sources to a destination. The data at the destination is then used for analysis, machine learning, or other business functions. Pipelines split into two categories: batch processing (most common) and real-time / streaming.
</p>

<span class="at-stat">4</span> main architecture parts &nbsp;·&nbsp; <span class="at-stat">2</span> major categories (batch/stream) &nbsp;·&nbsp; <span class="at-mark">The arteries that move data from source to value</span>

> [!tip] The Pipeline Golden Rule
> Make pipelines **idempotent** — running the same job twice produces the same result. This enables safe retries, backfills, and recovery from failures. See [[../../software-engineering/idempotence|Idempotence]] for patterns.

<span class="at-kicker">Architecture</span>

## Architecture

Four main parts:

1. **Data source** — application DBs, APIs, files (SFTP, GCS), event streams.
2. **Business logic** — cleaning, filtering, transformation specific to the business.
3. **Data destination / target** — usually another DB, often a [[data-warehouse|warehouse]] or [[data-lake|lake]].
4. **Scheduler / orchestration tool** — Cron for simple, [[../data-engineering/data-processing/workflow-orchestration|orchestrator]] for complex.

There's no one-size-fits-all architecture. The right choice depends on data volume, velocity, latency requirements, team skills, and budget.

<span class="at-kicker">Pipeline Components</span>

### Data sources

- Application databases (Postgres, MySQL).
- APIs (REST, GraphQL).
- Files on SFTP / cloud storage.
- Streaming events (Kafka, [[../cloud/gcp/analytics/pubsub|Pub/Sub]]).
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
- **[[../data-engineering/data-processing/workflow-orchestration|Workflow orchestrator]]** — Airflow, Dagster, Prefect — for multi-step DAGs with retries, alerts, backfills.

<span class="at-kicker">Pipeline Types</span>

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

<span class="at-kicker">Examples</span>

## Example pipelines

- **SaaS daily ETL** — application data + marketing data → daily dashboard.
- **E-commerce real-time** — order events → fraud detection → inventory + analytics.
- **IoT** — device telemetry → Pub/Sub → Dataflow → BigQuery.

<span class="at-kicker">Best Practices</span>

## Pipeline best practices

See [[../guides/data-pipeline-best-practices|Pipeline Best Practices]] for the full guide. Top hits:

- **Idempotent** — see [[idempotence|Idempotence]].
- **Logged + monitored** — alerts on failure + latency.
- **Tested** — code unit tests + [[data-unit-test|data unit tests]].
- **Version-controlled** — Git, CI/CD.
- **Parameterized** — config files, not hard-coded values.
- **Separate envs** — dev / staging / prod, color-coded.

<span class="at-kicker">Cloud Platforms</span>

## On GCP

- **Batch**: [[Cloud Storage|GCS]] → [[../cloud/gcp/analytics/dataflow|Dataflow]] → [[../cloud/gcp/analytics/bigquery|BigQuery]].
- **Streaming**: [[../cloud/gcp/analytics/pubsub|Pub/Sub]] → Dataflow → BigQuery.
- **CDC**: Datastream → BigQuery.
- **Visual**: [[../cloud/gcp/analytics/datafusion|Data Fusion]].
- **Orchestration**: Cloud Composer (Airflow).

<span class="at-kicker">Interesting Facts</span>

## Interesting Facts

- **Apache Beam** was Google's gift to the OSS world — a unified batch + stream programming model.
- The **DAG** abstraction (used by Airflow, Dagster, Prefect, Dataflow, Spark) traces back to academic dataflow research from the 1970s.
- **dbt** popularized the idea that analytics engineers can build transformations using just SQL + version control.

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **ETL** vs **ELT** — pros/cons + when each.
2. Walk through designing a real-time fraud-detection pipeline.
3. **CDC** pipeline architecture end-to-end.
4. How do you make a pipeline **idempotent**?
5. **Cron** vs **orchestrator** — when each.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Pipeline phases
>> [[data-ingestion|Data Ingestion]], [[batch-data-processing|Batch Processing]], [[stream-data-processing|Stream Processing]], [[workflow-orchestration|Workflow Orchestration]]
>
>
>> [!card] Practitioner guides
>> [[../guides/data-pipeline-best-practices|Pipeline Best Practices]], [[../guides/testing-data-pipeline|Testing Your Data Pipeline]], [[../guides/getting-started|Getting Started]]
>
>
>> [!card] People
>> [[../../people/joe-reis-matt-housley|Joe Reis + Matt Housley]]
>
>
>> [!card] Books
>> [[../../books/fundamentals-of-data-engineering|Fundamentals of Data Engineering]]
