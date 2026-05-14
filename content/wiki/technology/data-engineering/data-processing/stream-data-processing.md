---
title: Stream Data Processing
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Stream Processing
category: Computer Science
tags:
  - DataEngineering
  - Processing
  - Streaming
banner:
dg-publish: true
publish: true
---

---

**Stream processing** refers to the architecture for **continuously collecting, modifying, or exporting data as it is produced or received**. It is used instead of [[batch-data-processing|batch processing]] when **timeliness** is critical and data is needed in **real-time** (source: Concepts/Data Processing/Stream Data Processing.md).

## Core concepts

### Event time vs Processing time

- **Event time** — when the event actually occurred at source.
- **Processing time** — when the engine sees it.
- Stream engines must handle **late-arriving events** (data arrives after its event-time window has closed).

### Windowing

Streams are infinite — to compute aggregates we **window** them:

| Window | Behavior |
| --- | --- |
| **Tumbling** | Fixed, non-overlapping (e.g. 1 minute) |
| **Sliding** | Fixed length, overlapping (e.g. last 5 min, every 1 min) |
| **Session** | Bounded by gaps in activity (per-user idle timeout) |

### Watermarks

Heuristic estimates of "all events up to event-time *T* have arrived". Triggers window closure.

### Triggers

Decide *when* to emit window results — at watermark, on every event, periodically, on completeness.

### Exactly-once semantics

The hardest distributed-systems guarantee. Modern engines (Flink, Beam/Dataflow, Kafka Streams) provide it via **idempotent sinks + checkpointing**.

## Tools / engines

- **Apache Flink** — gold standard for true streaming.
- **Apache Spark Structured Streaming** — micro-batch with streaming API.
- **Apache Beam** — portable model; runs on Flink, Spark, [[../../../gcp/analytics/dataflow|Dataflow]].
- **Kafka Streams / ksqlDB** — Kafka-native lightweight processing.
- **Amazon Kinesis Data Analytics**, **Azure Stream Analytics**.

## Sources + sinks

- **Sources**: [[../../../gcp/analytics/pubsub|Pub/Sub]], Kafka, Kinesis, EventHub, MSK, MQTT, IoT Core.
- **Sinks**: [[../../../gcp/analytics/bigquery|BigQuery]], data lake, KV stores, dashboards, downstream services.

## Use cases

- **Fraud detection** — react in milliseconds.
- **Real-time dashboards** for ops + monitoring.
- **IoT telemetry** processing.
- **Personalization** — recommend products based on the last few clicks.
- **Log + metrics** pipelines.

## Patterns

- **Stateless transformations** — filter, map (cheap, scale linearly).
- **Stateful aggregations** — count, sum over windows (need state stores).
- **Joins** — stream-stream, stream-table (broadcast lookup tables).
- **CEP** (complex event processing) — pattern detection across event sequences.

## Stream vs Batch trade-offs

See [[batch-data-processing]] for the comparison table.

## Interesting Facts

- **Apache Beam** generalizes batch + streaming into one model: Bounded vs Unbounded `PCollection`. The same code works for both.
- **Flink's CEP library** can detect patterns like "credit-card-not-present transaction within 5 min of card-present in different country" — declaratively.
- **Pub/Sub Lite** is GCP's Kafka-like managed alternative when you need predictable cost + capacity.

## Interview Questions

1. **Event time** vs **processing time** — why does the distinction matter?
2. **Tumbling** vs **sliding** vs **session** windows.
3. What is a **watermark** and how does it handle late data?
4. **Exactly-once** semantics — how do modern engines achieve them?
5. **Flink** vs **Spark Structured Streaming** vs **Beam/Dataflow**.

## Related pages

> [!multi-column]
>
>> [!card] Sister processing modes
>> [[batch-data-processing|Batch Processing]], [[data-processing|Data Processing]]
>
>
>> [!card] Streaming architecture
>> [[../data-architecture/kappa-architecture|Kappa Architecture]], [[../data-architecture/lambda-architecture|Lambda Architecture]], [[../software-engineering/publisher-subscriber-pattern|Pub/Sub Pattern]], [[../software-engineering/event-sourcing-pattern|Event Sourcing]]
>
>
>> [!card] Tools + products
>> [[../../tools/processing-tools|Processing Tools]], [[../../../gcp/analytics/pubsub|GCP Pub/Sub]], [[../../../gcp/analytics/dataflow|Dataflow]]
>
>
>> [!card] People
>> [[../../../people/jay-kreps|Jay Kreps]]

