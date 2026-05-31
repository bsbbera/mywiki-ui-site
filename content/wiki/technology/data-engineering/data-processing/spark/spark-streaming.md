---
title: Spark Streaming
Created:
  - 2026-05-28
date modified: Thursday, May 28th 2026
aliases:
  - Spark Streaming
  - Structured Streaming
  - DStream
  - Checkpointing
category: Computer Science
tags:
  - DataEngineering
  - Processing
  - Spark
  - Streaming
banner:
publish: true
---

> "Change happens when the pain of holding on becomes greater than the fear of letting go."
> <cite>— Spencer Johnson</cite>

---

**Spark Streaming** is the part of the core [[apache-spark|Spark]] API for **scalable, high-throughput, fault-tolerant** processing of live data streams (source: pyspark interview prep.pdf). It ingests from sources like **Kafka, Kinesis, and TCP sockets**, processes with high-level functions (`map`, `reduce`, `join`, `window`), and writes to filesystems, databases, and live dashboards. For the broader concepts (event time, windowing, watermarks, exactly-once), see [[stream-data-processing|Stream Processing]].

## DStreams (micro-batch)

The classic model partitions a stream's contents into **batches of X seconds** called **DStreams** (discretized streams) (source: pyspark interview prep.pdf). This is the **micro-batch** approach — Spark Structured Streaming exposes the same engine with a [[spark-dataframe|DataFrame]]-based streaming API on top (see [[processing-tools|Processing Tools]]).

```python
from pyspark.streaming import StreamingContext
ssc = StreamingContext(sc, 1)                       # 1-second batches
lines = ssc.socketTextStream("localhost", 9999)     # read from a TCP socket
```

Structured Streaming reads with `spark.readStream.format("socket")` and the host/port options (source: pyspark interview prep.pdf).

## Caching in streaming

DStreams let developers **cache data in memory** — useful when a stream's data is reused several times. Use `cache()` or `persist(level)`. For network sources (Kafka, Flume, …), the default persistence **replicates data on two nodes** for fault tolerance (source: pyspark interview prep.pdf).

## Receivers

**Receivers** consume data from sources and hand it to Spark, running as long-running tasks on executors (source: pyspark interview prep.pdf):

- **Reliable receiver** — acknowledges the source once data is received and replicated into Spark storage.
- **Unreliable receiver** — does not acknowledge the source.

## Checkpointing

A streaming app must run 24/7 and survive failures external to the code (system failures, JVM crashes). **Checkpointing** makes it fault-tolerant by saving to a checkpoint directory (e.g. on HDFS) (source: pyspark interview prep.pdf):

- **Metadata checkpointing** — saves the information defining the streaming computation (configurations, DStream operations, incomplete batches) so the **driver** can recover.
- **Data checkpointing** — saves the generated [[rdd|RDDs]] to reliable storage; required by **stateful** operations that combine data across batches.

## Interview questions

1. What is **Spark Streaming**, and what sources/sinks does it support?
2. What is a **DStream**, and how does micro-batch differ from true streaming?
3. **Reliable vs unreliable** receivers.
4. What is **checkpointing**, and what's the difference between metadata and data checkpointing?
5. What role does **caching** play in Spark Streaming?

## Related pages

> [!multi-column]
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
