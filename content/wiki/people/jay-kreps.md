---
title: Jay Kreps
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 5:10:00 pm
aliases:
  - Jay Kreps
category: People
tags:
  - person
  - data_engineering
  - streaming
  - kafka
banner:
publish: true
---

> "Good things aren't supposed to just fall into your lap."
> <cite>— Audrey Hepburn</cite>

---

> [!infobox|right]
> # Jay Kreps
> ###### Software Engineer & Entrepreneur
> | | |
> | --- | --- |
> | **Nationality** | American |
> | **Domain** | Stream processing, data infrastructure, distributed systems |
> | **Known for** | Co-creator of Apache Kafka; co-creator of Apache Samza; *"The Log"* essay |
> | **Institution** | Confluent (co-founder & CEO); ex-LinkedIn |

American software engineer and entrepreneur. Principal architect at **LinkedIn** where he co-created **Apache Kafka** (2011) alongside **Neha Narkhede** and **Jun Rao** — originally written over a Christmas break to solve LinkedIn's real-time activity data pipeline problem: handling millions of messages per second with durability, replayability, and high throughput. Kafka was designed as a **distributed commit log** — a durable, ordered, replayable stream that any number of consumers could read independently at their own pace. Also co-created **Apache Samza** at LinkedIn, an early stream-processing framework built on top of Kafka.

Co-founded **Confluent** in 2014 to commercialize Kafka with enterprise support, connectors, Schema Registry, and ksqlDB. Confluent has grown to over **2,700 employees** and went public on NASDAQ.

In **2013**, published *"The Log: What Every Software Engineer Should Know About Real-Time Data's Unifying Abstraction"* — one of the most widely read essays in distributed systems engineering. It articulates the **append-only, ordered log as a universal primitive** for data integration: databases, event streams, CDC pipelines, and distributed consensus algorithms are all, at their core, logs. This mental model is foundational to understanding Kafka, event sourcing, CDC, and stream processing.

## Key contributions

- **Apache Kafka** (2011): high-throughput, durable, distributed log and event streaming platform
- **Apache Samza**: stream processing framework built on Kafka
- *"The Log"* essay (2013): foundational essay on data integration via append-only logs
- **Confluent**: enterprise Kafka platform — Schema Registry, Kafka Connect, ksqlDB

## Interesting facts

- Kafka was named after the **novelist Franz Kafka** — Kreps liked the idea of naming a system optimized for *writing* after a famous writer
- *"The Log"* essay is required reading in virtually every data engineering curriculum — its mental model unifies disparate concepts (replication, CDC, event sourcing, stream processing) into a single abstraction
- LinkedIn's Kafka installation processes **over 7 trillion messages per day** (as of mid-2010s) — one of the largest messaging systems ever built

## Related pages

> [!grid]
>
>> [!card] Software Engineering
>> [[../technology/software-engineering/publisher-subscriber-pattern|Pub/Sub Pattern]], [[../technology/software-engineering/event-sourcing-pattern|Event Sourcing]]
>
>
>> [!card] Data Architecture
>> [[../technology/data-engineering/data-architecture/kappa-architecture|Kappa Architecture]]
>
>
>> [!card] Data Processing
>> [[../technology/data-engineering/data-processing/stream-data-processing|Stream Processing]]

