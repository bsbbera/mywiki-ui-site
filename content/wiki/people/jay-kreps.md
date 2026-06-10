---
title: Jay Kreps
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Jay Kreps
category: People
tags:
  - person
  - profile
  - data_engineering
  - streaming
  - kafka
banner: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!tip]
> "Good things aren't supposed to just fall into your lap."
> <cite>— Audrey Hepburn</cite>

---

<span class="at-kicker">Profile · Streaming Data · Engineer & Author</span>

# Jay Kreps

<p class="at-lead">
American software engineer who co-created Apache Kafka over a Christmas break at LinkedIn to handle millions of messages per second, then wrote "The Log" — one of the most widely read essays in distributed systems — before founding Confluent to bring enterprise-grade event streaming to the world.
</p>

<span class="at-stat">2011</span> Apache Kafka &nbsp;·&nbsp; <span class="at-mark">Confluent</span> CEO &nbsp;·&nbsp; <span class="at-mark">The Log</span> essay author

---

<span class="at-kicker">Biography</span>

## Background

American software engineer and entrepreneur. Principal architect at **LinkedIn** where he co-created **Apache Kafka** (2011) alongside **Neha Narkhede** and **Jun Rao** — originally written over a Christmas break to solve LinkedIn's real-time activity data pipeline problem: handling millions of messages per second with durability, replayability, and high throughput. Kafka was designed as a **distributed commit log** — a durable, ordered, replayable stream that any number of consumers could read independently at their own pace. Also co-created **Apache Samza** at LinkedIn, an early stream-processing framework built on top of Kafka.

Co-founded **Confluent** in 2014 to commercialize Kafka with enterprise support, connectors, Schema Registry, and ksqlDB. Confluent has grown to over **2,700 employees** and went public on NASDAQ.

In **2013**, published *"The Log: What Every Software Engineer Should Know About Real-Time Data's Unifying Abstraction"* — one of the most widely read essays in distributed systems engineering. It articulates the **append-only, ordered log as a universal primitive** for data integration: databases, event streams, CDC pipelines, and distributed consensus algorithms are all, at their core, logs. This mental model is foundational to understanding Kafka, event sourcing, CDC, and stream processing.

---

<span class="at-kicker">Key Contributions</span>

## Key contributions

> [!grid|cols3]
>
>> [!card|section]
>> ### Apache Kafka (2011)
>> High-throughput, durable, **distributed log and event streaming platform** — co-created with Neha Narkhede and Jun Rao at LinkedIn. LinkedIn's installation processes over **7 trillion messages per day**, one of the largest messaging systems ever built. Named after novelist Franz Kafka because the system is optimized for *writing*.
>
>> [!card|section]
>> ### Apache Samza
>> **Stream processing framework** built on Kafka — an early stateful stream processor that brought fault-tolerant processing semantics to the Kafka ecosystem before Kafka Streams existed.
>
>> [!card|section]
>> ### "The Log" Essay (2013)
>> Foundational essay on **data integration via append-only logs** — articulates the log as a universal abstraction unifying databases, event streams, CDC pipelines, and distributed consensus. Required reading in virtually every data engineering curriculum.
>
>> [!card|section]
>> ### Confluent
>> Enterprise Kafka platform — **Schema Registry, Kafka Connect, ksqlDB** — co-founded in 2014 to bring enterprise-grade event streaming to organizations worldwide. Grew to 2,700+ employees and went public on NASDAQ.

---

<span class="at-kicker">Interesting Facts</span>

## Interesting facts

> [!grid|cols2]
>
>> [!card|section]
>> ### Named After Franz Kafka
>> Kafka was named after the **novelist Franz Kafka** — Kreps liked the idea of naming a system optimized for *writing* after a famous writer. The name stuck and became one of the most recognized brands in data infrastructure.
>
>> [!card|section]
>> ### "The Log" as Required Reading
>> *"The Log"* essay is required reading in virtually every data engineering curriculum — its mental model **unifies disparate concepts** (replication, CDC, event sourcing, stream processing) into a single abstraction that makes the entire modern data stack coherent.

> [!quote]
> "The log is the data." — The central thesis of *"The Log"* essay: everything from database replication to event sourcing to stream processing is, at its core, an append-only ordered log.

---

<span class="at-kicker">Continue Reading</span>

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
