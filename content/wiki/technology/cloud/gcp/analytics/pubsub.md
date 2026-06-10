---
title: Pub/Sub
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Cloud Pub/Sub
  - Google Cloud Pub/Sub
  - Pubsub
category: Cloud
tags:
  - GCP
  - Messaging
  - EventDriven
  - Streaming
  - DataEngineering
banner: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Pub/Sub
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Asynchronous messaging / event streaming |
> | **Category** | Messaging |
> | **Launched** | 2015 (GA Aug 2015) |
> | **Interface** | REST API, gRPC, client libraries |
> | **Website** | cloud.google.com/pubsub |

---

> "Dreams are the touchstones of our characters."
> <cite>— Henry David Thoreau</cite>

---

<span class="at-kicker">Messaging & Streaming · Google Cloud</span>

# Pub/Sub

<p class="at-lead">
Google Cloud Pub/Sub is a fully managed, asynchronous messaging service based on the publish-subscribe pattern enabling decoupled, scalable, event-driven communication between independent services.
</p>

<span class="at-stat">global</span> at-least-once delivery &nbsp;·&nbsp; <span class="at-stat">7-day</span> message retention &nbsp;·&nbsp; <span class="at-stat">millions</span> msgs/sec &nbsp;·&nbsp; <span class="at-mark">the event backbone connecting every GCP service</span>

<span class="at-kicker">How It Works</span>

## Overview

Google Cloud Pub/Sub is a **fully managed, asynchronous messaging service** based on the **publish-subscribe pattern**. It enables **decoupled, scalable, event-driven communication** between independent services and is the **messaging spine** of GCP analytics pipelines (source: How To Create a PubSub Topic on GCP.md).

By separating **message producers** from **consumers**, Pub/Sub enables:

- **Asynchronous communication** — services don't need each other to be online.
- **Massive scalability** — millions of messages per second, automatic.
- **Reliable delivery** — durable storage, at-least-once delivery (with options for exactly-once).
- **Event-driven architectures** — feed [[dataflow|Dataflow]], [[../compute/cloud-functions|Cloud Functions]], [[bigquery|BigQuery]] subscriptions, [[../compute/cloud-run|Cloud Run]].

### Core terminology

(source: How To Create a PubSub Topic on GCP.md)

#### Publisher

An **application or service that sends messages** to a topic.

- Generates and emits messages.
- Can be a microservice, IoT device, batch job, external API.
- Publishes via REST, gRPC, or client libraries.
- **Many publishers** can write to the same topic.

#### Topic

The **named channel** publishers send messages to.

- Acts as the central distribution point.
- Holds messages until subscribers consume them (up to **retention** window — default 7 days).
- One topic → many subscriptions.

#### Subscription

A **stream of messages** delivered from a topic to a subscriber.

- Bridges a topic to a specific consumer.
- Each subscription gets its **own copy** of every message — independent ack and offset.
- Supports **push** (Pub/Sub POSTs to your endpoint) and **pull** (consumer fetches).

#### Subscriber

The application that **receives** messages from a subscription.

- Acknowledges each message after successful processing.
- Unacknowledged messages are **redelivered**.
- Multiple subscriber instances can share a subscription for **horizontal scaling**.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ###### PUBLISH API
>> ### Message *Publishing*
>> REST, gRPC, and client libraries for publishing. Support for JSON, Avro, and Protobuf message formats. Batching and flow control for high-throughput publishers.
>
>> [!card|section]
>> ###### TOPIC FANOUT
>> ### One-to-Many *Distribution*
>> Single topic with multiple independent subscriptions. Each subscriber receives its own copy of every message. Different consumers process the same event independently.
>
>> [!card|section]
>> ###### PUSH SUBSCRIPTIONS
>> ### HTTP *Delivery*
>> Pub/Sub POSTs messages to your HTTPS endpoint. Perfect for Cloud Run, Cloud Functions, and serverless consumers. OIDC token authentication included.
>
>> [!card|section]
>> ###### PULL SUBSCRIPTIONS
>> ### High-Throughput *Consumption*
>> Consumers fetch messages via gRPC API. Effectively unlimited throughput with parallel pull. Best for high-volume, custom consumer applications.
>
>> [!card|section]
>> ###### MESSAGE RETENTION
>> ### Durable *Storage*
>> Default 7-day message retention. Dead-letter topics for failed messages. Schema validation with Pub/Sub Schema Registry. Message ordering with ordering keys.
>
>> [!card|section]
>> ###### BIGQUERY SUBSCRIPTION
>> ### Direct *Ingestion*
>> Stream events directly to BigQuery tables without Dataflow. Perfect for lightweight ETL when transformations are minimal. Automatic schema matching.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Message throughput** | $/TB of message data published |
| **Subscription egress** | Egress costs for message delivery |
| **Message storage** | Per-GB for retained messages beyond ack window |
| **Snapshots / seeks** | Small storage fee for message replay |
| **Pub/Sub Lite** | ~10× cheaper for predictable, partition-based workloads |

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### EVENT-DRIVEN MICROSERVICES
>> ### Async *Communication*
>> Service A publishes domain events; Services B/C/D react independently. Decoupled architecture where services evolve independently without coordination.
>
>> [!card|section]
>> ###### STREAMING ANALYTICS
>> ### Real-Time *Pipelines*
>> Pub/Sub → Dataflow → BigQuery for sub-minute dashboard freshness. Process clickstreams, IoT telemetry, and application logs in real-time.
>
>> [!card|section]
>> ###### NOTIFICATIONS
>> ### Alert *Fanout*
>> System events fan out to email, Slack, and SMS gateways. Push subscriptions deliver to webhook endpoints for immediate notification routing.
>
>> [!card|section]
>> ###### CDC INGESTION
>> ### Change Data *Capture*
>> Datastream publishes database changes to Pub/Sub. Dataflow merges CDC events into BigQuery for real-time analytics replicas.
>
>> [!card|section]
>> ###### IOT TELEMETRY
>> ### Device *Messaging*
>> Millions of IoT devices publish telemetry events. Pub/Sub handles massive scale with automatic fanout to analytics and monitoring consumers.
>
>> [!card|section]
>> ###### LOG AGGREGATION
>> ### Centralized *Logging*
>> Cloud Logging exports to Pub/Sub for archival and SIEM integration. Route logs to multiple destinations with independent subscriptions.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD PUB/SUB
>> # From *event* to *delivered message*.
>> The fully managed messaging backbone that scales to millions of messages per second with at-least-once delivery guarantees.
>
>> [!card|step]
>> ###### Step 01
>> ### *Create* topic & subscription.
>> Create a unique Topic ID in Cloud Console or via gcloud CLI. Add one or more subscriptions with push or pull delivery. Configure message retention and dead-letter policies.
>
>> [!card|step]
>> ###### Step 02
>> ### *Publish* messages.
>> Applications send messages via REST, gRPC, or client libraries. Batches are accepted for high throughput. Messages are durably stored and fanned out to all subscriptions.
>
>> [!card|step]
>> ###### Step 03
>> ### *Pull* or push consume.
>> Pull consumers fetch messages via API and acknowledge after processing. Push subscriptions POST to your HTTPS endpoint. Each subscription receives its own copy of every message.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister GCP analytics
>> [[bigquery|BigQuery]], [[dataflow|Dataflow]], [[datafusion|Data Fusion]], [[data-catalog|Data Catalog]]
>
>
>> [!card] Software Engineering
>> [[../../../software-engineering/publisher-subscriber-pattern|Pub/Sub Pattern]], [[../../../software-engineering/fan-out|Fan-out]], [[../../../software-engineering/claim-check-pattern|Claim Check]]
>
>
>> [!card] Data Architecture
>> [[../../../data-engineering/data-architecture/event-driven-architecture|Event-Driven Architecture]]
>
>
>> [!card] Related products
>> [[../compute/cloud-functions|Cloud Functions]], [[../compute/cloud-run|Cloud Run]]
>
>
>> [!card] Certifications
>> [[Professional Data Engineer|Professional Data Engineer]]

## Push vs Pull subscriptions

| | Push | Pull |
| --- | --- | --- |
| Direction | Pub/Sub → subscriber endpoint | Subscriber → Pub/Sub |
| Best for | Cloud Run / Functions endpoints; serverless consumers | High-throughput, custom consumers |
| Endpoint | HTTPS | gRPC API |
| Auth | OIDC token / service account | IAM on subscription |
| Throughput | Limited by your endpoint | Effectively unlimited (parallel pull) |

## Creating a Pub/Sub topic (Console)

(source: How To Create a PubSub Topic on GCP.md)

1. Sign in → Cloud Console → click the navigation menu (top-left).
2. **Pub/Sub → Topics** in the left nav.
3. **Create Topic**.
4. Enter a **unique Topic ID**; leave other fields default for first try; click **Create**.
5. Topic appears in the list — you can now publish messages and create subscriptions on it.

Equivalent CLI:

```bash
gcloud pubsub topics create my-events
gcloud pubsub subscriptions create my-events-sub --topic=my-events
gcloud pubsub topics publish my-events --message='{"event":"signup","user":"alice"}'
gcloud pubsub subscriptions pull my-events-sub --auto-ack
```

## Architecture: where Pub/Sub fits

```
[ App / IoT / DB CDC ]
        │ publish
        ▼
   ┌────────┐  ┌────────────────────────┐
   │ Topic  │──┤ Subscription A (Push)  │──► Cloud Run service
   │        │  ├────────────────────────┤
   │        │──┤ Subscription B (Pull)  │──► Dataflow → BigQuery
   │        │  ├────────────────────────┤
   │        │──┤ Subscription C         │──► BigQuery (direct subscription)
   │        │  └────────────────────────┘
   └────────┘
```

## Delivery guarantees

- **At-least-once** by default — duplicates possible; subscribers must be **idempotent**.
- **Exactly-once delivery** (opt-in, single-region pull subscriptions) — adds latency and complexity.
- **Ordering** — opt-in via **ordering keys**; messages with the same key are delivered in order.
- **Filtering** — subscriptions can filter by message attributes server-side.
- **Dead-letter topics** — messages that fail repeatedly are routed elsewhere for inspection.

## Pub/Sub Lite (modern)

For predictable, **partition-based** workloads at lower cost — closer to Apache Kafka semantics:

- **Zonal** (cheap) or **regional**.
- You manage **capacity** (publish throughput, storage GB).
- ~10× cheaper than Pub/Sub for sustained high throughput.
- Migrating to/from Apache Kafka is straightforward.

## Pub/Sub vs alternatives

| Need | Pick |
| --- | --- |
| Fully managed, GCP-native, fan-out | **Pub/Sub** |
| Kafka-like partitioned, lower cost | **Pub/Sub Lite** |
| Self-hosted Kafka semantics | Confluent Cloud / **Kafka on GKE** |
| Order-strict workflows + retry | **Cloud Tasks** |
| Workflow orchestration | **Cloud Workflows / Composer** |

## Best practices

- Make subscribers **idempotent** — duplicate delivery is normal.
- **Set ack deadlines** appropriately (default 10 s; up to 600 s for slow processing).
- Use **dead-letter topics** for poison pills.
- For ETL into BigQuery, prefer the **Pub/Sub BigQuery subscription** (no Dataflow needed) when transformations are minimal.
- Use **schema validation** (Pub/Sub Schema Registry, Avro/Protobuf) to prevent producer/consumer drift.

## Interesting Facts

- Pub/Sub is descended from internal Google systems used to power Search, Ads, and Gmail event flows.
- It runs **regionally** but presents a **global service** abstraction — publishers and subscribers anywhere in the world hit the closest edge.
- A **single subscription** can scale to **millions of messages/sec** with no manual sharding.

## Interview Questions can be asked

1. Walk through a real-time pipeline from a website's clickstream into a BigQuery dashboard.
2. **At-least-once vs exactly-once** — what's the trade-off?
3. **Pub/Sub vs Pub/Sub Lite** — when prefer which?
4. How do **ordering keys** work and what's their cost?
5. Difference between **push** and **pull** subscriptions.
6. How would you implement a dead-letter pattern?
