---
title: Pub/Sub
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:35:00 pm
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
banner:
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

Google Cloud Pub/Sub is a **fully managed, asynchronous messaging service** based on the **publish-subscribe pattern**. It enables **decoupled, scalable, event-driven communication** between independent services and is the **messaging spine** of GCP analytics pipelines (source: How To Create a PubSub Topic on GCP.md).

By separating **message producers** from **consumers**, Pub/Sub enables:

- **Asynchronous communication** — services don't need each other to be online.
- **Massive scalability** — millions of messages per second, automatic.
- **Reliable delivery** — durable storage, at-least-once delivery (with options for exactly-once).
- **Event-driven architectures** — feed [[dataflow|Dataflow]], [[../compute/cloud-functions|Cloud Functions]], [[bigquery|BigQuery]] subscriptions, [[../compute/cloud-run|Cloud Run]].

## Core terminology

(source: How To Create a PubSub Topic on GCP.md)

### Publisher

An **application or service that sends messages** to a topic.

- Generates and emits messages.
- Can be a microservice, IoT device, batch job, external API.
- Publishes via REST, gRPC, or client libraries.
- **Many publishers** can write to the same topic.

### Topic

The **named channel** publishers send messages to.

- Acts as the central distribution point.
- Holds messages until subscribers consume them (up to **retention** window — default 7 days).
- One topic → many subscriptions.

### Subscription

A **stream of messages** delivered from a topic to a subscriber.

- Bridges a topic to a specific consumer.
- Each subscription gets its **own copy** of every message — independent ack and offset.
- Supports **push** (Pub/Sub POSTs to your endpoint) and **pull** (consumer fetches).

### Subscriber

The application that **receives** messages from a subscription.

- Acknowledges each message after successful processing.
- Unacknowledged messages are **redelivered**.
- Multiple subscriber instances can share a subscription for **horizontal scaling**.

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

## Common use cases

(source: How To Create a PubSub Topic on GCP.md)

1. **Event-driven microservices** — service A publishes domain events; B/C/D react independently.
2. **Real-time analytics + streaming pipelines** — Pub/Sub → [[dataflow|Dataflow]] → [[bigquery|BigQuery]].
3. **Notifications + alerts** — system events fan out to email/Slack/SMS gateways.
4. **Log + monitoring ingestion** — Cloud Logging exports → Pub/Sub → archive / SIEM.
5. **CDC feeds** — **Datastream** publishes DB changes; Dataflow merges them into BigQuery.
6. **IoT telemetry** — millions of devices publish; analytics pipelines process.

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

## Pricing model (modern, not in raw)

- **Throughput-based** — $/TB of message data published, plus subscription egress.
- **Message storage** — small per-GB fee for retained messages beyond the default ack window.
- **Snapshots / seeks** — small storage fee.

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
>> [[../../../data-engineering/data-architecture/kappa-architecture|Kappa Architecture]]
>
>
>> [!card] Data Processing
>> [[../../../data-engineering/data-processing/stream-data-processing|Stream Processing]]
>
>
>> [!card] Compute integrations
>> [[../compute/cloud-functions|Cloud Functions]], [[../compute/cloud-run|Cloud Run]]
>
>
>> [!card] Guides
>> [[../../../guides/messaging-service-guide|Messaging Service Guide]]
>
>
>> [!card] Certifications
>> [[Professional Data Engineer|Professional Data Engineer]]
>
>
>> [!card] People
>> [[../../../../people/jay-kreps|Jay Kreps]]

