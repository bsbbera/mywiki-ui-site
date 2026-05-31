---
title: Loading Data to BigQuery
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:35:00 pm
aliases:
  - BQ Loading
  - BigQuery Ingestion
category: Cloud
tags:
  - GCP
  - BigQuery
  - DataEngineering
  - Ingestion
banner:
publish: true
---

> "The best way to understanding is a few good examples."
> <cite>— Isaac Newton</cite>

---

Loading data into BigQuery is one of the **three core jobs** ([[bigquery|the others]] are storage and querying). The right loading mechanism depends on whether your data arrives in **batches** or as a **stream**, and where it lives (source: Google Cloud Platform - Loading Data to BigQuery.md).

## Decision tree

| Source | Volume / cadence | Best path |
| --- | --- | --- |
| Local CSV / JSON / Avro / Parquet ≤ 10 MB | one-off | UI **upload + auto-detect schema** |
| Files in [[../storage/cloud-storage|Cloud Storage]] | batch | `bq load` / Console / API / **Dataflow** |
| Streaming events | real-time | **Storage Write API** or via [[pubsub]] → [[dataflow]] |
| Federated read (no copy) | small / changing | [[bigquery-external-data|External tables]] |
| Operational DB (MySQL/Postgres) | CDC | **Datastream** + BigQuery |

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

## Related pages

> [!multi-column]
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

