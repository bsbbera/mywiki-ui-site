---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Stream Processing
Created:
  - 2026-05-30
aliases:
  - Stream Processing
  - Streaming
  - Real-time Processing
category: Computer Science
tags:
  - data-engineering
  - concept
  - Processing
  - Streaming
  - Real-time
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Processing</span>

# Stream Processing

<p class="at-lead">
Stream processing (or real-time processing) is a data processing approach designed to analyze, transform, and act upon data as it arrives, rather than waiting for data to accumulate before processing it in batches. This is essential for applications that need to respond to events immediately — fraud detection, IoT alerts, recommendation engines, real-time dashboards.
</p>

<span class="at-stat">Sub-second</span> latency possible &nbsp;·&nbsp; <span class="at-stat">Event time</span> vs processing time &nbsp;·&nbsp; <span class="at-mark">Process data as it flows, not after it lands</span>

> [!tip] Streaming Concepts
> The three core streaming concepts are **event time** (when the event occurred), **watermarks** (tolerance for late data), and **exactly-once semantics** (guaranteed processing). Master these and you've mastered streaming.

<span class="at-kicker">Core Concepts</span>

## Core streaming concepts

### Event Time vs Processing Time

| | Event Time | Processing Time |
| --- | --- | --- |
| Definition | When the event **actually happened** | When the system **processes** the event |
| Source | Timestamp in the event payload | System clock at the processor |
| Use case | Correct analytics over late/out-of-order data | Low-latency alerting |

**Watermarks** — a tolerance threshold for late data. Events arriving after the watermark are dropped or sent to a side output.

### Exactly-Once vs At-Least-Once

| Guarantee | Meaning | When to use |
| --- | --- | --- |
| **Exactly-once** | Each record processed exactly once, even on failure | Financial transactions, billing |
| **At-least-once** | Each record processed at least once (may duplicate) | Metrics, logging, idempotent sinks |
| **At-most-once** | Each record processed zero or one times (may drop) | Real-time gaming, some IoT |

Exactly-once requires **idempotent sinks** or **transactional writes** with checkpointing.

### Windowing

Aggregating events over time buckets:

- **Tumbling windows** — fixed, non-overlapping (e.g. every 5 minutes).
- **Sliding windows** — overlapping (e.g. last 10 minutes, computed every 5).
- **Session windows** — dynamic, activity-based (e.g. user session until 30 min inactivity).

<span class="at-kicker">Architecture Patterns</span>

## Architecture patterns

| Pattern | Description | Use case |
| --- | --- | --- |
| **Lambda** | Separate batch + speed layers, merge at query time | Complex, but historical accuracy + low latency |
| **Kappa** | Pure streaming, no batch layer | Simpler, when replay is sufficient |
| **Hybrid** | Streaming for latency, batch for correction | Best of both, common in practice |

<span class="at-kicker">Popular Tools</span>

## Popular streaming tools

| Tool | Model | Best for |
| --- | --- | --- |
| **Apache Kafka** | Distributed log / pub-sub | Event backbone, high throughput |
| **Apache Flink** | True streaming (not micro-batch) | Complex event processing, exactly-once |
| **Apache Spark Streaming** | Micro-batch | Unified batch + streaming API |
| **Apache Beam** | Unified batch + stream | Portable pipelines (runs on Flink, Spark, Dataflow) |
| **ksqlDB** | SQL on Kafka | Streaming analytics without code |
| **Materialize** | SQL materialized views on streams | Real-time views, correctness |

<span class="at-kicker">Cloud Platforms</span>

## Streaming on GCP

```
[Sources] → [Pub/Sub] → [Dataflow / Datastream / BigQuery] → [Sinks]
   │            │              │                    │
   │            │              ├── Streaming inserts  │
   │            │              └── Batch loads        │
   │            │                                   │
IoT/Kafka   Global, durable                    BigQuery
              queue
```

- **Pub/Sub** — managed Kafka-like. Global, durable, high throughput.
- **Dataflow** — managed Beam. Autoscaling, exactly-once.
- **Datastream** — CDC replication (MySQL/Oracle → BigQuery).
- **BigQuery** streaming inserts — 100k rows/sec, but higher cost.

<span class="at-kicker">When to Use</span>

## When to use streaming vs batch

| Use streaming when... | Use batch when... |
| --- | --- |
| Sub-minute latency required | Hourly/daily is fine |
| Fraud detection, alerts | Monthly reports, analytics |
| IoT sensor monitoring | Historical trend analysis |
| Real-time personalization | Data science model training |
| Continuous ETL | Nightly data loads |

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. **Event time** vs **processing time** — when does the distinction matter?
2. What are **watermarks** and why do they exist?
3. **Lambda** vs **Kappa** — trade-offs, which do you prefer?
4. How does **exactly-once** processing work? What's required at the sink?
5. **Tumbling** vs **sliding** vs **session** windows — examples.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Spark streaming
>> [[spark/spark-streaming|Spark Streaming]]
>
>
>> [!card] Architecture
>> [[lambda-architecture|Lambda Architecture]], [[kappa-architecture|Kappa Architecture]]
>
>
>> [!card] GCP products
>> [[../cloud/gcp/analytics/pubsub|Pub/Sub]], [[../cloud/gcp/analytics/dataflow|Dataflow]], [[../cloud/gcp/analytics/bigquery|BigQuery]]
>
>
>> [!card] People
>> [[../../people/jay-kreps|Jay Kreps]]
>
>
>> [!card] Books
>> [[../../books/designing-data-intensive-applications|Designing Data-Intensive Applications]]
