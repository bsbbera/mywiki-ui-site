---
title: Cloud Functions
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 9:28:50 pm
aliases:
  - GCF
  - Google Cloud Functions
  - FaaS
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Serverless
banner:
dg-publish: true
publish: true
---
---

Cloud Functions is GCP's **Function as a Service (FaaS)** offering. You write a small piece of code (JavaScript, Python, Go, Java, .NET, Ruby, PHP) that runs in response to an **event** â€” an HTTP request, a Pub/Sub message, a Cloud Storage upload, a scheduler tick â€” and Google manages everything else (source: Cloud Functions in GCP.md).

You pay only for the time your code is running and the resources it consumes; there is **no cost when the function is idle**.

## Generations: 1st gen vs 2nd gen

The raw sources predate the Gen 2 release (source: Cloud Functions in GCP.md, source: How to Use Google Cloud Function with Python.md). As of 2025 ([firebase docs](https://firebase.google.com/docs/functions/version-comparison)):

| Aspect | Gen 1 | Gen 2 |
| --- | --- | --- |
| Underlying infra | Google-managed runtime | Built on **[[cloud-run]] + Eventarc** |
| Max request duration | 9 min (HTTP) | 60 min (HTTP), 9 min (events) |
| Max instance size | 8 GiB / 8 vCPU | 32 GiB / 8 vCPU |
| Concurrency per instance | 1 | Up to 1000 |
| Event sources | Limited | **125+** Google + 3rd-party via Eventarc |
| Default service account | App Engine default | Compute Engine default |

Gen 2 is the recommended path for new functions.

## Triggers

- **HTTP** â€” invoke via URL.
- **Cloud Pub/Sub** â€” message published.
- **Cloud Storage** â€” object created/finalized/deleted.
- **Firestore / Realtime Database** â€” document changed.
- **Cloud Scheduler** â€” cron-style time triggers.
- **Eventarc** â€” any of 125+ source types (Gen 2 only).

(source: Cloud Functions in GCP.md, source: Google Cloud Platform - Compute Services.md)

## Deploying a Python function â€” quick path

From the Cloud Console (source: How to Use Google Cloud Function with Python.md):

1. Go to **Cloud Functions â†’ Create Function**.
2. Choose authenticated or **"Allow unauthenticated invocations"**.
3. Copy the **Trigger URL**.
4. Pick a **Python runtime** (3.8+).
5. Edit `main.py` â€” for HTTP, the entry point receives a Flask `request`:

```python
def hello_http(request):
    request_json = request.get_json(silent=True)
    name = (request_json or {}).get("name", "World")
    return f"Hello, {name}!"
```

6. List dependencies in `requirements.txt`.
7. Set the **Entry point** field to the function name (e.g. `hello_http`).
8. Click **Deploy** â€” the trigger URL is now live.

Logs are visible under the function's **LOGS** tab.

## Common access-control gotcha

Calling the trigger URL from a browser fails with a CORS error unless the function returns proper `Access-Control-Allow-Origin` headers (source: How to Use Google Cloud Function with Python.md). Always set CORS headers explicitly in the response or use Cloud Run with a CORS-aware framework.

## Free tier and pricing

- **2 million invocations / month** free (source: Google Cloud Platform - Compute Services.md).
- After that: **per-invocation** + **GB-seconds memory** + **GHz-seconds CPU** + **egress**.

See [[gcp-pricing-and-discounts]].

## Use cases

- Automating back-end processes (data prep, file conversion).
- Webhook handlers (e.g. **GitHub commit â†’ Slack notification**) (source: Cloud Functions in GCP.md).
- Lightweight APIs and BFFs.
- ETL glue between GCP services.
- Scheduled jobs (combined with Cloud Scheduler).
- IoT device-to-cloud event processing.
- Real-time notifications.

## Strengths

- **Pay-per-use** â€” zero idle cost.
- **Zero infrastructure management** â€” no servers, no patching.
- **Automatic scaling** based on load.
- **Tight GCP integration** â€” Pub/Sub, Cloud Storage, BigQuery, Firestore.
- **Multi-language**.

## Trade-offs

- **Cold starts** â€” first request after idle is slow.
- **Stateless** â€” no local disk between invocations.
- **Resource caps** (timeouts, memory) â€” heavy workloads should use [[cloud-run]] or [[kubernetes-engine]].

## Interesting Facts

- Cloud Functions Gen 2 is **not really FaaS anymore** â€” it's Cloud Run with an event-trigger wrapper ([cloud.google.com blog](https://cloud.google.com/blog/products/serverless/cloud-functions-2nd-generation-now-generally-available)).
- Cloud Functions integrates natively with GitHub via webhooks: a commit can trigger a build/notify pipeline with a few lines of code (source: Cloud Functions in GCP.md).

## Interview Questions can be asked

1. Difference between Gen 1 and Gen 2 Cloud Functions.
2. When pick Cloud Functions vs [[cloud-run]] vs [[app-engine]]?
3. How does Cloud Functions handle scaling and cold starts?
4. Walk through securing a Cloud Function â€” authenticated vs unauthenticated.
5. Why might a browser fetch to a Cloud Function fail and how do you fix it?

## Related pages

> [!multi-column]
>
>> [!card] Foundations
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../foundations/service-models|Service Models]]
>
>
>> [!card] Sister compute products
>> [[gcp-compute-services|GCP Compute Services]], [[cloud-run|Cloud Run]], [[app-engine|App Engine]]

