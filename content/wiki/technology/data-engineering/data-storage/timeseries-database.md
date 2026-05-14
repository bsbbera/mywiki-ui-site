---
title: Timeseries Database
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Timeseries Database
  - TSDB
category: Computer Science
tags:
  - DataEngineering
  - Storage
  - TimeSeries
  - IoT
banner:
dg-publish: true
---

---

A **time-series database (TSDB)** is optimized to **store, aggregate, and analyze** large amounts of **continuously generated, time-stamped data** from sources like **IoT devices, sensors, application metrics, financial markets** (source: Concepts/Data Storage/Timeseries Database.md). Used in applications that monitor performance over time or track event sequences.

## What makes TSDBs special

Time-stamped data has unique characteristics:

- **Append-only** — past data is rarely modified.
- **Time-ordered** — natural primary key.
- **High write rate** — millions of points per second possible.
- **Aggregation-heavy queries** — "average CPU per minute over last 7 days".
- **Eventual decay** — older data summarized; oldest deleted.

TSDBs optimize all of these.

## Advantages

- **Built-in time-aware functions** — windowing, downsampling, gap-filling.
- **Lifecycle management** — automatic retention + tiered storage.
- **Aggressive compression** — Gorilla / delta-of-delta encoding common.
- **Specialized indexing** — time-bucketed, per-tag indexes.
- **High ingestion rates**.

## Disadvantages

- **Not optimal for relationships** — no joins / FK semantics.
- **Higher storage requirement** — every point indexed.
- **Niche tooling** — fewer DBAs; learning curve.

## Use cases

- **Application monitoring** — Prometheus + Grafana stack.
- **Stock market data + trading platforms**.
- **IoT + sensor telemetry**.
- **Real-time ad bidding**.
- **Server metrics, SLOs, SLAs**.
- **Energy-grid monitoring**.

## Popular TSDBs

- **InfluxDB** — popular open-source.
- **Prometheus** — metrics-focused; Kubernetes ecosystem standard.
- **TimescaleDB** — Postgres extension; SQL-native.
- **Graphite** — older but still common.
- **Kdb+** — financial industry (extremely fast).
- **OpenTSDB** — HBase-backed.
- **VictoriaMetrics** — Prometheus-compatible, scalable.
- **Amazon Timestream**, **Azure Data Explorer (Kusto)**.

## TSDB on GCP

GCP doesn't offer a dedicated managed TSDB, but:

- [[../../../gcp/databases/cloud-bigtable|Bigtable]] is **excellent for time-series at scale** — Google's recommended pattern.
- **InfluxDB on GKE** is common.
- **Cloud Monitoring** uses an internal TSDB for metrics.
- **TimescaleDB on Cloud SQL** (Postgres) for SQL-native TS.

## Time-series patterns

- **Tags + timestamps** — store metric, tags (host, region), value, timestamp.
- **Downsampling** — keep raw data for 24h, 1-min averages for 30d, hourly for 1y.
- **Continuous aggregates** — TimescaleDB's killer feature; auto-rolling materialized views.
- **Bucket / time-window queries** — `time_bucket('1 hour', ts)` style aggregations.

## Interview Questions

1. Why are TSDBs **separate** from relational/document DBs?
2. **InfluxDB** vs **TimescaleDB** vs **Prometheus**.
3. How does **Bigtable** fit time-series workloads?
4. **Downsampling** strategy — design tradeoffs.
5. **Gorilla compression** — what + why.

## Related pages

> [!multi-column]
>
>> [!card] Sister storage
>> [[non-relational-database|Non-relational Database]], [[wide-column-database|Wide-column Database]], [[column-oriented-database|Column-oriented Database]]
>
>
>> [!card] Processing
>> [[../data-processing/stream-data-processing|Stream Processing]]
>
>
>> [!card] Products
>> [[../../../gcp/databases/cloud-bigtable|Cloud Bigtable]], [[../../tools/databases-overview|Databases Overview]]

