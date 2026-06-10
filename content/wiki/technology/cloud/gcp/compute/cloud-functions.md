---
title: Cloud Functions
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - GCF
  - Google Cloud Functions
  - FaaS
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Serverless
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Functions
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Function as a Service (FaaS) |
> | **Category** | Serverless compute |
> | **Launched** | 2017 (GA Jul 2018) |
> | **Interface** | gcloud CLI, console, REST API |
> | **Website** | cloud.google.com/functions |

---

> "What kills the creative force is not age or lack of talent, but our own spirit, our own attitude."
> <cite>— Robert Greene</cite>

---

<span class="at-kicker">Serverless Functions · Google Cloud</span>
# Cloud Functions
<p class="at-lead">Cloud Functions is GCP's Function as a Service (FaaS) offering. You write a small piece of code that runs in response to an event — HTTP request, Pub/Sub message, Cloud Storage upload — and Google manages everything else. Pay only for execution time.</p>
<span class="at-stat">1st gen</span> + <span class="at-stat">2nd gen</span> &nbsp;·&nbsp; <span class="at-stat">scale to zero</span> &nbsp;·&nbsp; <span class="at-mark">event-driven serverless at the function level</span>

<span class="at-kicker">How It Works</span>

## Overview

Cloud Functions runs code in response to events with zero infrastructure management. You pay only for the time your code is running and the resources it consumes; there is **no cost when the function is idle**.

## Generations: 1st gen vs 2nd gen

The raw sources predate the Gen 2 release. As of 2025:

| Aspect | Gen 1 | Gen 2 |
| --- | --- | --- |
| Underlying infra | Google-managed runtime | Built on **Cloud Run + Eventarc** |
| Max request duration | 9 min (HTTP) | 60 min (HTTP), 9 min (events) |
| Max instance size | 8 GiB / 8 vCPU | 32 GiB / 16 vCPU |
| Concurrency per instance | 1 | Up to 1000 |
| Event sources | Limited | **125+** Google + 3rd-party via Eventarc |
| Default service account | App Engine default | Compute Engine default |

Gen 2 is the recommended path for new functions.

## Triggers

- **HTTP** — invoke via URL.
- **Cloud Pub/Sub** — message published.
- **Cloud Storage** — object created/finalized/deleted.
- **Firestore / Realtime Database** — document changed.
- **Cloud Scheduler** — cron-style time triggers.
- **Eventarc** — any of 125+ source types (Gen 2 only).

## Deploying a Python function — quick path

From the Cloud Console:

1. Go to **Cloud Functions → Create Function**.
2. Choose authenticated or **"Allow unauthenticated invocations"**.
3. Copy the **Trigger URL**.
4. Pick a **Python runtime** (3.8+).
5. Edit `main.py` — for HTTP, the entry point receives a Flask `request`:

```python
def hello_http(request):
    request_json = request.get_json(silent=True)
    name = (request_json or {}).get("name", "World")
    return f"Hello, {name}!"
```

6. List dependencies in `requirements.txt`.
7. Set the **Entry point** field to the function name (e.g. `hello_http`).
8. Click **Deploy** — the trigger URL is now live.

Logs are visible under the function's **LOGS** tab.

## Common access-control gotcha

Calling the trigger URL from a browser fails with a CORS error unless the function returns proper `Access-Control-Allow-Origin` headers. Always set CORS headers explicitly in the response or use Cloud Run with a CORS-aware framework.

## Free tier and pricing

- **2 million invocations / month** free.
- After that: **per-invocation** + **GB-seconds memory** + **GHz-seconds CPU** + **egress**.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Pay-Per-Use**
>> Zero idle cost. Pay only when your function executes. 2 million free invocations per month to start.
>
>> [!card|section]
>> **Zero Infrastructure**
>> No servers, no patching, no OS management. Google handles the entire runtime environment.
>
>> [!card|section]
>> **Automatic Scaling**
>> Scales instantly from zero to thousands of instances based on incoming event volume.
>
>> [!card|section]
>> **Tight GCP Integration**
>> Native triggers for Pub/Sub, Cloud Storage, BigQuery, Firestore, and 125+ Eventarc sources.
>
>> [!card|section]
>> **Multi-Language Support**
>> JavaScript, Python, Go, Java, .NET, Ruby, PHP — pick what your team knows best.
>
>> [!card|section]
>> **Gen 2 Architecture**
>> Built on Cloud Run for longer timeouts, larger instances, and up to 1000 concurrent requests per instance.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Automating Back-End Processes**
>> Data preparation, file conversion, image resizing, and format transformations triggered by uploads.
>
>> [!card|section]
>> **Webhook Handlers**
>> GitHub commit → Slack notification, Stripe payment events → order processing, any external service integration.
>
>> [!card|section]
>> **Lightweight APIs**
>> Backend-for-Frontend patterns, simple REST endpoints, and micro-gateway functions.
>
>> [!card|section]
>> **ETL Glue**
>> Connect GCP services together — Cloud Storage to BigQuery, Pub/Sub to Firestore, and more.
>
>> [!card|section]
>> **Scheduled Jobs**
>> Combine with Cloud Scheduler for cron-style automation — reports, cleanup, maintenance tasks.
>
>> [!card|section]
>> **IoT & Real-Time**
>> Process device telemetry streams, trigger alerts, and enable real-time notifications at scale.

## Trade-offs

- **Cold starts** — first request after idle is slow.
- **Stateless** — no local disk between invocations.
- **Resource caps** (timeouts, memory) — heavy workloads should use Cloud Run or GKE.

## Interesting Facts

- Cloud Functions Gen 2 is **not really FaaS anymore** — it's Cloud Run with an event-trigger wrapper.
- Cloud Functions integrates natively with GitHub via webhooks: a commit can trigger a build/notify pipeline with a few lines of code.

## Interview Questions can be asked

1. Difference between Gen 1 and Gen 2 Cloud Functions.
2. When pick Cloud Functions vs Cloud Run vs App Engine?
3. How does Cloud Functions handle scaling and cold starts?
4. Walk through securing a Cloud Function — authenticated vs unauthenticated.
5. Why might a browser fetch to a Cloud Function fail and how do you fix it?

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD FUNCTIONS
>> # From *event* to *executed function*.
>> Event-driven serverless at the function level.
>
>> [!card|step]
>> ###### Step 01
>> ### Write *function code*.
>> Choose your language, define the handler function, and specify dependencies. Keep it stateless and focused.
>
>> [!card|step]
>> ###### Step 02
>> ### Deploy *with trigger*.
>> Select HTTP, Pub/Sub, Cloud Storage, or Eventarc sources. Deploy with gcloud or console in seconds.
>
>> [!card|step]
>> ###### Step 03
>> ### Monitor *invocations*.
>> View logs, metrics, and error rates in Cloud Monitoring. Set up alerts for failed executions.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Foundations
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../foundations/service-models|Service Models]]
>
>
>> [!card] Sister compute products
>> [[gcp-compute-services|GCP Compute Services]], [[cloud-run|Cloud Run]], [[app-engine|App Engine]]
