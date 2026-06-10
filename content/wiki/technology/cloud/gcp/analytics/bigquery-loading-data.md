---
title: Loading Data to BigQuery
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - BQ Loading
  - BigQuery Ingestion
category: Cloud
tags:
  - GCP
  - BigQuery
  - DataEngineering
  - Ingestion
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "The best way to understanding is a few good examples."
> <cite>— Isaac Newton</cite>

---

<span class="at-kicker">Data Ingestion · BigQuery</span>

# Loading Data to BigQuery

<p class="at-lead">
Loading data into BigQuery is one of the three core jobs — the right loading mechanism depends on whether your data arrives in batches or as a stream, and where it lives.
</p>

<span class="at-stat">batch</span> + streaming + Storage Write API &nbsp;·&nbsp; <span class="at-stat">CSV/JSON/Parquet/Avro</span> formats &nbsp;·&nbsp; <span class="at-stat">free</span> batch loads &nbsp;·&nbsp; <span class="at-mark">three ingestion patterns for every pipeline shape</span>

<span class="at-kicker">How It Works</span>

## Overview

Loading data into BigQuery is one of the **three core jobs** ([[bigquery|the others]] are storage and querying). The right loading mechanism depends on whether your data arrives in **batches** or as a **stream**, and where it lives (source: Google Cloud Platform - Loading Data to BigQuery.md).

### Decision tree

| Source | Volume / cadence | Best path |
| --- | --- | --- |
| Local CSV / JSON / Avro / Parquet ≤ 10 MB | one-off | UI **upload + auto-detect schema** |
| Files in [[../storage/cloud-storage|Cloud Storage]] | batch | `bq load` / Console / API / **Dataflow** |
| Streaming events | real-time | **Storage Write API** or via [[pubsub]] → [[dataflow]] |
| Federated read (no copy) | small / changing | [[bigquery-external-data|External tables]] |
| Operational DB (MySQL/Postgres) | CDC | **Datastream** + BigQuery |

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### UI UPLOAD
>> ### Console *Upload*
>> Drag-and-drop files up to 10 MB and 16,000 rows. Auto-detect schema or define manually. Instant one-off ingestion for testing and prototyping.
>
>> [!card|section]
>> ###### BQ CLI
>> ### Command-Line *Loading*
>> `bq load` with --autodetect for schema inference. Support for CSV, JSON, Avro, Parquet, and ORC. Wildcard patterns for bulk file loading from GCS.
>
>> [!card|section]
>> ###### CLOUD STORAGE
>> ### GCS *Integration*
>> Load directly from Cloud Storage buckets. Wildcard URIs load multiple files. Same formats supported with automatic schema detection from Avro/Parquet.
>
>> [!card|section]
>> ###### DATAFLOW
>> ### Dataflow *Pipelines*
>> Apache Beam pipelines for complex transformations. Read from GCS or Pub/Sub, apply ParDo transforms, write to BigQuery with exactly-once semantics.
>
>> [!card|section]
>> ###### STORAGE WRITE API
>> ### Streaming *Ingestion*
>> Modern gRPC-based streaming with exactly-once delivery. Preferred over legacy tabledata.insertAll. Enables real-time dashboards with sub-second latency.
>
>> [!card|section]
>> ###### DATASTREAM
>> ### CDC *Replication*
>> Change Data Capture from MySQL and PostgreSQL. Replicate operational databases to BigQuery in near real-time with schema evolution support.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Batch loading** | Free — no cost to load data from Cloud Storage |
| **Streaming inserts** | $/MB for real-time ingestion via Storage Write API |
| **Data transfer** | Cross-region transfers may incur networking costs |
| **Storage** | Standard BigQuery storage pricing after loading |
| **Datastream** | Separate pricing for CDC replication service |

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### ONE-OFF UPLOADS
>> ### Quick *Data Import*
>> Upload CSV files for immediate analysis. Perfect for ad-hoc reports, spreadsheet exports, and prototype datasets without setting up pipelines.
>
>> [!card|section]
>> ###### SCHEDULED BATCH
>> ### Nightly *ETL*
>> Load daily transaction files from GCS. Use Cloud Scheduler and bq load for regular batch ingestion with minimal operational overhead.
>
>> [!card|section]
>> ###### REAL-TIME STREAMS
>> ### Live Event *Ingestion*
>> Ingest clickstreams, IoT telemetry, and application logs via Pub/Sub → Dataflow → BigQuery. Second-level freshness for operational dashboards.
>
>> [!card|section]
>> ###### DATABASE REPLICATION
>> ### CDC *Pipelines*
>> Replicate transactional databases to BigQuery for analytics. Datastream captures changes; BigQuery serves as the analytical replica.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · LOADING DATA
>> # From *source data* to *loaded table*.
>> Choose the right ingestion pattern for your data volume, velocity, and source location.
>
>> [!card|step]
>> ###### Step 01
>> ### *Choose* ingestion method.
>> Small files: use UI upload. Large batch: use bq load from GCS. Streaming: use Storage Write API or Pub/Sub. CDC: use Datastream for database replication.
>
>> [!card|step]
>> ###### Step 02
>> ### *Format* and stage data.
>> Prepare CSV, JSON, Avro, Parquet, or ORC files. Stage in Cloud Storage for batch loads. Set up schemas via auto-detect or manual definition.
>
>> [!card|step]
>> ###### Step 03
>> ### *Load* and verify.
>> Execute load jobs with proper write disposition (append, truncate, or write-if-empty). Verify row counts and query sample data to validate ingestion.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] BigQuery hub + sub-pages
>> [[bigquery|BigQuery]], [[bigquery-tables|BigQuery Tables]], [[bigquery-external-data|External Data]]
>
>
>> [!card] Sister GCP analytics
>> [[dataflow|Dataflow]], [[pubsub|Pub/Sub]]
>
>
>> [!card] Related products
>> [[Cloud Storage|Cloud Storage]]
>
>
>> [!card] Data Ingestion
>> [[../../../data-engineering/data-ingestion/data-ingestion|Data Ingestion]]
>
>
>> [!card] Tools
>> [[../../../tools/ingestion-tools|Ingestion Tools]]

## Batch loading

The classic flow: data lives in [[Cloud Storage|GCS]] or your laptop; it slowly changes; you load it on a schedule (source: Google Cloud Platform - Loading Data to BigQuery.md).

### From the UI (small files)

1. Pick a **dataset** (top-level folder for tables); make sure its location matches the tables you'll join with — joins require **same geographic location** (e.g. `US` multi-region).
2. **Create Table** → choose **Upload** as source.
3. Upload local file (≤ 10 MB and ≤ 16 000 rows from the UI).
4. Define the schema manually or **auto-detect**.
5. Click **Create Table** → load job runs.

### From Cloud Storage

For larger files, upload to a GCS bucket first, then **Create Table** → **Source: Google Cloud Storage** → URI (with `*` wildcards allowed). Same supported formats: CSV, JSON, Avro, Parquet, ORC.

### Via `bq` CLI

```bash
bq load --autodetect \
  --source_format=CSV \
  mydataset.mascots \
  gs://my-bucket/mascots.csv
```

### Via Dataflow

For complex transformations or huge volumes, use [[dataflow]] (Apache Beam). Read from GCS / Pub/Sub, transform with `ParDo`s, write to BigQuery as the sink.

## Streaming ingestion

For real-time analytics:

- **Storage Write API** (modern, gRPC, exactly-once) — preferred over the legacy `tabledata.insertAll`.
- **Pub/Sub → BigQuery subscription** — direct subscription type that writes events straight to a BigQuery table without Dataflow.
- **Pub/Sub → Dataflow → BigQuery** — when you need transformations or schema enrichment.

Streaming inserts cost extra ($/MB) but enable **second-level dashboard freshness**.

## Datasets and locations

- Datasets are **top-level folders** managing related tables (source: Google Cloud Platform - Loading Data to BigQuery.md).
- A dataset has a **location** (e.g. `US`, `EU`, `asia-south1`). You can only **JOIN tables in the same location** — cross-region joins are not allowed.
- Check location anytime in the **Details** tab of the dataset.

## Schema definition

- **Auto-detect** — BigQuery samples the first records and infers types.
- **Manual** — declare each column + type (`STRING`, `INT64`, `FLOAT64`, `TIMESTAMP`, `DATE`, `STRUCT`, `ARRAY`, etc.).
- **From file** — for Avro / Parquet, schema is embedded in the file itself.

## Worked example: mascots + NCAA

The raw source walks through loading a CSV of college team mascots into a `basketball` dataset, then joining it with `bigquery-public-data.ncaa_basketball.mbb_historical_tournament_games` to answer "which mascot wins more — cats or dogs?" (source: Google Cloud Platform - Loading Data to BigQuery.md).

```sql
#standardSQL
WITH matchups AS (
  SELECT g.win_team_id,
         g.lose_team_id,
         (SELECT m.tax_genus  FROM `proj.basketball.mascots` m WHERE m.id = g.win_team_id)  AS tax_genus_winner,
         (SELECT m.tax_family FROM `proj.basketball.mascots` m WHERE m.id = g.lose_team_id) AS tax_family_loser,
         (SELECT m.tax_family FROM `proj.basketball.mascots` m WHERE m.id = g.win_team_id)  AS tax_family_winner,
         (SELECT m.tax_genus  FROM `proj.basketball.mascots` m WHERE m.id = g.lose_team_id) AS tax_genus_loser
  FROM `bigquery-public-data.ncaa_basketball.mbb_historical_tournament_games` g
)
SELECT
  SUM(IF(tax_family_winner = "Felidae" AND tax_genus_loser  = "Canis",   1, 0)) AS num_cat_wins,
  SUM(IF(tax_genus_winner  = "Canis"   AND tax_family_loser = "Felidae", 1, 0)) AS num_dog_wins
FROM matchups;
```

Result: **dogs win 43**.

## Interesting Facts

- The `bq load` command supports **append**, **truncate**, and **write-if-empty** modes; pick carefully — truncate is destructive.
- BigQuery can **load directly from Datastore exports** and **Firestore exports** without any conversion.
- **External tables** are sometimes a better choice than loading — see [[bigquery-external-data]].

## Interview Questions can be asked

1. Why must joined tables share a dataset location?
2. Storage Write API vs the legacy streaming `insertAll` — what changed?
3. When prefer [[dataflow]] over a direct `bq load`?
4. Walk through ingesting a Kafka topic into BigQuery in real time.
