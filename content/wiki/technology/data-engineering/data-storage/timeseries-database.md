---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Timeseries Database
Created:
  - 2026-04-29
aliases:
  - Timeseries Database
  - TSDB
category: Computer Science
tags:
  - data-engineering
  - concept
  - Storage
  - TimeSeries
  - IoT
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Storage</span>

# Timeseries Database

<p class="at-lead">
A time-series database (TSDB) is optimized to store, aggregate, and analyze large amounts of continuously generated, time-stamped data from sources like IoT devices, sensors, application metrics, and financial markets.
</p>

<span class="at-stat">Millions</span> of points per second &nbsp;·&nbsp; <span class="at-stat">10×</span> compression typical &nbsp;·&nbsp; <span class="at-mark">Purpose-built for the unique patterns of time-ordered data</span>

> [!tip] Time-Series Data Characteristics
> Time-stamped data is **append-only** (rarely modified), **time-ordered** (natural primary key), **high write rate**, and **aggregation-heavy**. TSDBs optimize all of these with specialized compression (Gorilla, delta-of-delta), time-bucketed indexing, and automatic lifecycle management.

<span class="at-kicker">Unique Characteristics</span>

## What makes TSDBs special

Time-stamped data has unique characteristics:

- **Append-only** — past data is rarely modified.
- **Time-ordered** — natural primary key.
- **High write rate** — millions of points per second possible.
- **Aggregation-heavy queries** — "average CPU per minute over last 7 days".
- **Eventual decay** — older data summarized; oldest deleted.

TSDBs optimize all of these.

<span class="at-kicker">Trade-offs</span>

## Advantages vs Disadvantages

> [!grid|cols2]
>
> > [!card|section] Advantages
> > - **Built-in time-aware functions** — windowing, downsampling, gap-filling.
> > - **Lifecycle management** — automatic retention + tiered storage.
> > - **Aggressive compression** — Gorilla / delta-of-delta encoding common.
> > - **Specialized indexing** — time-bucketed, per-tag indexes.
> > - **High ingestion rates**.
>
> > [!card|section] Disadvantages
> > - **Not optimal for relationships** — no joins / FK semantics.
> > - **Higher storage requirement** — every point indexed.
> > - **Niche tooling** — fewer DBAs; learning curve.

<span class="at-kicker">Use Cases</span>

## Use cases

- **Application monitoring** — Prometheus + Grafana stack.
- **Stock market data + trading platforms**.
- **IoT + sensor telemetry**.
- **Real-time ad bidding**.
- **Server metrics, SLOs, SLAs**.
- **Energy-grid monitoring**.

<span class="at-kicker">Popular Systems</span>

## Popular TSDBs

- **InfluxDB** — popular open-source.
- **Prometheus** — metrics-focused; Kubernetes ecosystem standard.
- **TimescaleDB** — Postgres extension; SQL-native.
- **Graphite** — older but still common.
- **Kdb+** — financial industry (extremely fast).
- **OpenTSDB** — HBase-backed.
- **VictoriaMetrics** — Prometheus-compatible, scalable.
- **Amazon Timestream**, **Azure Data Explorer (Kusto)**.

<span class="at-kicker">Cloud Platforms</span>

## TSDB on GCP

GCP doesn't offer a dedicated managed TSDB, but:

- [[../../cloud/gcp/databases/cloud-bigtable|Bigtable]] is **excellent for time-series at scale** — Google's recommended pattern.
- **InfluxDB on GKE** is common.
- **Cloud Monitoring** uses an internal TSDB for metrics.
- **TimescaleDB on Cloud SQL** (Postgres) for SQL-native TS.

<span class="at-kicker">Time-Series Patterns</span>

## Time-series patterns

- **Tags + timestamps** — store metric, tags (host, region), value, timestamp.
- **Downsampling** — keep raw data for 24h, 1-min averages for 30d, hourly for 1y.
- **Continuous aggregates** — TimescaleDB's killer feature; auto-rolling materialized views.
- **Bucket / time-window queries** — `time_bucket('1 hour', ts)` style aggregations.

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. Why are TSDBs **separate** from relational/document DBs?
2. **InfluxDB** vs **TimescaleDB** vs **Prometheus**.
3. How does **Bigtable** fit time-series workloads?
4. **Downsampling** strategy — design tradeoffs.
5. **Gorilla compression** — what + why.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
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
>> [[../../cloud/gcp/databases/cloud-bigtable|Cloud Bigtable]], [[../../tools/databases-overview|Databases Overview]]
