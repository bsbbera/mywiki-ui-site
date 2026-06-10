---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Spark Streaming
Created:
  - 2026-05-28
aliases:
  - Spark Streaming
  - Structured Streaming
  - DStream
  - Checkpointing
category: Computer Science
tags:
  - data-engineering
  - concept
  - Processing
  - Spark
  - Streaming
banner: https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Spark</span>

# Spark Streaming

<p class="at-lead">
Spark Streaming is the part of the core Spark API for scalable, high-throughput, fault-tolerant processing of live data streams. It ingests from sources like Kafka, Kinesis, and TCP sockets, processes with high-level functions, and writes to filesystems, databases, and live dashboards.
</p>

<span class="at-stat">Micro-batch</span> processing model &nbsp;·&nbsp; <span class="at-stat">Exactly-once</span> semantics possible &nbsp;·&nbsp; <span class="at-mark">The streaming extension of Spark's batch engine</span>

> [!tip] Streaming Concepts
> For the broader concepts (event time, windowing, watermarks, exactly-once), see [[stream-data-processing|Stream Processing]].

<span class="at-kicker">Micro-Batch Model</span>

## DStreams (micro-batch)

The classic model partitions a stream's contents into **batches of X seconds** called **DStreams** (discretized streams). This is the **micro-batch** approach — Spark Structured Streaming exposes the same engine with a [[spark-dataframe|DataFrame]]-based streaming API on top.

```python
from pyspark.streaming import StreamingContext
ssc = StreamingContext(sc, 1)                       # 1-second batches
lines = ssc.socketTextStream("localhost", 9999)     # read from a TCP socket
```

Structured Streaming reads with `spark.readStream.format("socket")` and the host/port options.

<span class="at-kicker">Caching</span>

## Caching in streaming

DStreams let developers **cache data in memory** — useful when a stream's data is reused several times. Use `cache()` or `persist(level)`. For network sources (Kafka, Flume, …), the default persistence **replicates data on two nodes** for fault tolerance.

<span class="at-kicker">Receivers</span>

## Receivers

**Receivers** consume data from sources and hand it to Spark, running as long-running tasks on executors:

- **Reliable receiver** — acknowledges the source once data is received and replicated into Spark storage.
- **Unreliable receiver** — does not acknowledge the source.

<span class="at-kicker">Fault Tolerance</span>

## Checkpointing

A streaming app must run 24/7 and survive failures external to the code (system failures, JVM crashes). **Checkpointing** makes it fault-tolerant by saving to a checkpoint directory (e.g. on HDFS):

- **Metadata checkpointing** — saves the information defining the streaming computation (configurations, DStream operations, incomplete batches) so the **driver** can recover.
- **Data checkpointing** — saves the generated [[rdd|RDDs]] to reliable storage; required by **stateful** operations that combine data across batches.

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is **Spark Streaming**, and what sources/sinks does it support?
2. What is a **DStream**, and how does micro-batch differ from true streaming?
3. **Reliable vs unreliable** receivers.
4. What is **checkpointing**, and what's the difference between metadata and data checkpointing?
5. What role does **caching** play in Spark Streaming?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Spark internals
>> [[apache-spark|Apache Spark]], [[rdd|RDDs]], [[spark-performance|Performance]]
>
>
>> [!card] Streaming concepts
>> [[stream-data-processing|Stream Processing]], [[kappa-architecture|Kappa Architecture]], [[lambda-architecture|Lambda Architecture]]
>
>
>> [!card] Sources
>> [[pubsub|Pub/Sub]]
>
>
>> [!card] People
>> [[jay-kreps|Jay Kreps]]
