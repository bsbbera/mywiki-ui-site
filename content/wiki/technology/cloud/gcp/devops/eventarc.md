---
title: Eventarc
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Eventarc
category: GCP
tags:
  - gcp
  - cloud
  - devops
banner: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Eventarc
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service |
> | **Category** | DevOps / Event-Driven Architecture |
> | **Launched** | 2021 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/eventarc |

---

> "Event-driven architecture decouples producers from consumers, enabling systems to evolve independently and react to the world in real time."
> <cite>— Cloud-native architecture principles</cite>

---

<span class="at-kicker">Event-Driven Architecture · Google Cloud</span>

# Eventarc

<p class="at-lead">
Eventarc is Google Cloud's fully managed eventing service that provides a standardized, declarative way to connect event sources across Google Cloud services, SaaS applications, and custom workloads to event consumers such as Cloud Run, GKE workloads, Workflows, and Cloud Functions. Built on the CloudEvents open standard, Eventarc abstracts the complexity of event routing infrastructure for building loosely coupled, event-driven architectures without managing Pub/Sub subscriptions manually.
</p>

<span class="at-stat">90+</span> event sources &nbsp;·&nbsp; <span class="at-stat">CloudEvents</span> standard &nbsp;·&nbsp; <span class="at-stat">Pub/Sub</span> transport &nbsp;·&nbsp; <span class="at-mark">the event backbone of Google Cloud</span>

<span class="at-kicker">How It Works</span>

## Overview

Eventarc works through **triggers** — a declarative configuration that specifies an **event source**, an optional **event filter**, and a **destination**. When a matching event occurs at the source, Eventarc routes it to the destination as an HTTP POST request carrying a **CloudEvents**-formatted payload. The CloudEvents specification provides a vendor-neutral envelope (`id`, `source`, `type`, `time`, `datacontenttype`, `data`) that standardizes how event metadata is represented, making consumers portable across event platforms.

**Event sources** in Eventarc fall into three categories:
1. **Google Cloud services via Audit Logs** — over 100 GCP services emit Cloud Audit Log entries for resource operations (create, update, delete); Eventarc can trigger on any of these log events using resource type and method name filters
2. **Direct event sources** — select GCP services (Cloud Storage, Pub/Sub, Firebase, Workflows) emit events directly into Eventarc without going through Audit Logs, offering lower latency and richer event payloads
3. **Custom and third-party events** — via Eventarc's **Channel** feature, external SaaS providers (e.g., Datadog, GitLab, Zendesk) or custom applications can publish CloudEvents-formatted events into a named channel, which Eventarc routes to subscribers

All event transport internally uses **Pub/Sub** as the durable messaging backbone, providing at-least-once delivery guarantees and the resilience of Pub/Sub's infrastructure. This is transparent to users — Eventarc manages the Pub/Sub topics and subscriptions automatically.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **CloudEvents standard**
>> All events delivered by Eventarc conform to CloudEvents v1.0 specification, ensuring portable event schemas and compatibility with open-source frameworks.
>
>> [!card|section]
>> **Audit Log triggers**
>> Any GCP service emitting Cloud Audit Logs can be a trigger source; filters match on `serviceName`, `methodName`, and resource name patterns.
>
>> [!card|section]
>> **Direct event sources**
>> Lower-latency delivery from Cloud Storage, Pub/Sub message publish events, Firebase Realtime Database and Firestore changes, and Workflows callbacks.
>
>> [!card|section]
>> **Cloud Run destinations**
>> Events delivered as HTTP POST requests to Cloud Run service URLs; services receive CloudEvent in HTTP body for processing, transformation, or forwarding.
>
>> [!card|section]
>> **GKE destinations**
>> Eventarc routes events to services running in GKE using Eventarc's GKE operator to deliver events to in-cluster HTTP services.
>
>> [!card|section]
>> **Workflows destinations**
>> Events trigger Workflows executions directly, passing CloudEvent as workflow input; enables event-driven orchestration of multi-step processes.

> [!grid|cols3]
>
>> [!card|section]
>> **Channels (custom events)**
>> Named channels allow third-party providers and custom applications to publish CloudEvents via the Eventarc Channels API; subscriptions route to any destination.
>
>> [!card|section]
>> **Event providers marketplace**
>> Eventarc Advanced supports an event provider ecosystem where SaaS partners publish events directly into customer channels via GCP Marketplace.
>
>> [!card|section]
>> **Pub/Sub transport**
>> All event delivery uses Pub/Sub under the hood for durability, ordering guarantees, and retry semantics; failed deliveries retried with exponential backoff.
>
>> [!card|section]
>> **IAM authorization**
>> Triggers associated with service accounts; Eventarc uses this identity to authenticate deliveries to Cloud Run via OIDC token and to read Audit Log data.
>
>> [!card|section]
>> **Dead-letter topics**
>> Pub/Sub dead-letter configuration applied to underlying subscriptions to capture events that fail delivery after maximum retries.
>
>> [!card|section]
>> **Event filtering**
>> Triggers support multiple attribute filters (AND logic) to narrow event stream; Audit Log triggers support filters on `serviceName`, `methodName`, and resource name prefix.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Automated cloud resource governance**
>> An organization triggers a Cloud Run function whenever a new Cloud Storage bucket is created via Audit Log trigger on `storage.buckets.create`; the function checks for public access and auto-remediates non-compliant buckets.
>
>> [!card|section]
>> **Image processing pipeline**
>> When a new image uploads to Cloud Storage (`google.cloud.storage.object.v1.finalized`), an Eventarc trigger invokes a Cloud Run service that resizes the image, generates thumbnails, and writes results to another bucket.
>
>> [!card|section]
>> **Event-driven microservices choreography**
>> Instead of direct service-to-service calls, microservices publish domain events to Eventarc channels; consuming services subscribe via triggers, enabling fully decoupled architectures where adding consumers requires no producer changes.
>
>> [!card|section]
>> **SaaS integration**
>> A GitLab channel in Eventarc receives `push` events from GitLab webhook; an Eventarc trigger routes each push event to a Workflows execution that builds, tests, and deploys the changed service.
>
>> [!card|section]
>> **Real-time audit and compliance**
>> Security teams create Eventarc triggers on IAM policy change Audit Logs; each IAM modification triggers a Cloud Run service that logs the change to a compliance database and sends Slack notification for review.
>
>> [!card|section]
>> **Workflow initiation**
>> Eventarc triggers start Workflows executions in response to business events (e.g., new Firestore record triggers order processing workflow), passing event payload as workflow's initial input.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Free tier** | First 2.5 million events per month per project are free (for Audit Log-sourced events) |
| **Standard events** | Approximately $0.40 per million events after the free tier (for Audit Log triggers) |
| **Direct event sources** | Cloud Storage, Pub/Sub, and Firebase events are billed at lower rates or included in the respective service's pricing |
| **Channels (custom events)** | Approximately $0.40 per million events published and routed through channels |
| **Pub/Sub transport costs** | The underlying Pub/Sub topics incur standard Pub/Sub message throughput costs, billed separately |
| **Destination compute** | Cloud Run invocations, Workflows executions, and GKE workloads triggered by Eventarc are billed by their respective services |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · EVENTARC
>> # From *event* to *handler*.
>> Route any GCP event to any target in 3 steps.
>
>> [!card|step]
>> ###### Step 01
>> ### *Choose* the event source & filter.
>> Select from 90+ Google Cloud services via Audit Logs, direct sources like Cloud Storage, or custom channels; apply filters on service name, method name, and resource patterns to capture exactly the events you need.
>
>> [!card|step]
>> ###### Step 02
>> ### *Define* the target destination.
>> Specify your destination as Cloud Run, GKE workload, Workflows execution, or Cloud Function; Eventarc automatically configures the HTTP delivery endpoint and authentication.
>
>> [!card|step]
>> ###### Step 03
>> ### *Create* the trigger.
>> Deploy the trigger via Console or g CLI; Eventarc provisions the underlying Pub/Sub infrastructure and begins routing matching CloudEvents to your destination with at-least-once delivery guarantees.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] GCP DevOps
>> [[workflows]], [[cloud-scheduler]], [[cloud-build]], [[cloud-deploy]]
>
>> [!card] GCP Compute & Runtime
>> [[cloud-run]], [[kubernetes-engine]], [[cloud-functions]]
>
>> [!card] GCP Messaging & Integration
>> [[pubsub]], [[google-cloud-platform]], [[cloud-logging]]
