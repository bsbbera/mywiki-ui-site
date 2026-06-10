---
title: Cloud Run
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Cloud Run
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Serverless
  - Containers
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Run
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Serverless container platform |
> | **Category** | Serverless compute |
> | **Launched** | 2019 (GA Nov 2019) |
> | **Interface** | gcloud CLI, console, REST API |
> | **Website** | cloud.google.com/run |

---

> "Strategy is a commodity, execution is an art."
> <cite>— Peter Drucker</cite>

---

<span class="at-kicker">Container Runtime · Google Cloud</span>
# Cloud Run
<p class="at-lead">Cloud Run is a fully managed serverless platform for running stateless containers. You give it a container image; Google handles HTTPS termination, autoscaling (including scale-to-zero), revision rollout, and traffic splitting.</p>
<span class="at-stat">any language</span> in a container &nbsp;·&nbsp; <span class="at-stat">scale to zero</span> &nbsp;·&nbsp; <span class="at-mark">run any container serverlessly — no Kubernetes required</span>

<span class="at-kicker">How It Works</span>

## Overview

It blends two ideas: **serverless billing** (pay per request, scale to zero) with **container portability** (any language, any binary). This is the option to choose when Cloud Functions feels too constrained but you don't want to manage a Kubernetes cluster.

Workflow for a Python service:

1. Write your stateless app (e.g. Flask + gunicorn).
2. Add a **Dockerfile** that picks a base image and exposes the app on `$PORT`:

```dockerfile
FROM python:3.8-slim
COPY . ./
RUN pip install Flask gunicorn CurrencyConverter
CMD gunicorn --bind :$PORT app:app
```

3. Build with **Cloud Build** and push to Container Registry / Artifact Registry:

```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/PROJECT-NAME
```

4. Deploy:

```bash
gcloud run deploy --image gcr.io/PROJECT_ID/PROJECT-NAME
```

Cloud Run returns a public HTTPS URL. Each deploy creates a **revision**, and you can split traffic between revisions or roll back instantly.

## Free tier (always-free)

Per Google:

- **2 million requests / month**
- **360,000 GiB-seconds** of memory
- **180,000 vCPU-seconds** of compute
- **1 GB egress** from North America / month

## Best for

- Stateless web/API services
- Event-driven systems (combined with Pub/Sub or Eventarc)
- Apps with custom system or language dependencies that don't fit Cloud Functions
- Stateless containers extracted from a GKE workload

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Any Language, Any Binary**
>> Package anything in a container — Python, Java, Go, Rust, even compiled C++ binaries. If it speaks HTTP, it runs on Cloud Run.
>
>> [!card|section]
>> **Scale to Zero**
>> No idle cost. When traffic stops, instances scale to zero. First request wakes them up — pay only for what you use.
>
>> [!card|section]
>> **Two Commands to Deploy**
>> `gcloud builds submit` followed by `gcloud run deploy`. That's it. HTTPS URL live in under a minute.
>
>> [!card|section]
>> **Revisions & Traffic Splitting**
>> Every deployment creates a revision. Split traffic between versions for canary deployments or instant rollback.
>
>> [!card|section]
>> **Backs Cloud Functions Gen 2**
>> Cloud Functions Gen 2 runs on Cloud Run under the hood — unified serverless execution.
>
>> [!card|section]
>> **Custom Domains & TLS**
>> Map your own domain with automatic TLS certificate management. No manual cert configuration needed.

## Trade-offs

- **Stateless only** — no local disk persistence between requests.
- **Request timeout** (default 60 min, max 60 min for HTTP requests).
- **Cold starts** for infrequent traffic; mitigate with min-instances.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
|-----------|--------|
| **Requests** | 2 million free per month, then per-request pricing |
| **Memory** | 360,000 GiB-seconds free per month |
| **vCPU** | 180,000 vCPU-seconds free per month |
| **Egress** | 1 GB free from North America per month |
| **Idle** | Scale-to-zero means $0 when no traffic |

## Interesting Facts

- **Cloud Functions Gen 2** is implemented on top of Cloud Run + Eventarc, unifying FaaS and CaaS.
- The `gunicorn --bind :$PORT app:app` pattern works because Cloud Run injects `$PORT` and expects the container to listen on it.

## Interview Questions can be asked

1. When would you pick Cloud Run over Cloud Functions?
2. When would you pick Cloud Run over GKE?
3. Walk through deploying a Python Flask app to Cloud Run end-to-end.
4. How does traffic splitting between revisions work?
5. What does "stateless" mean and why does Cloud Run require it?

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD RUN
>> # From *container image* to *live service*.
>> Run any container serverlessly — no Kubernetes required.
>
>> [!card|step]
>> ###### Step 01
>> ### Build *and push container*.
>> Write a Dockerfile, build with Cloud Build, and push to Artifact Registry. Any language, any dependencies.
>
>> [!card|step]
>> ###### Step 02
>> ### Deploy *to Cloud Run*.
>> Single command deployment. Google handles HTTPS, load balancing, and autoscaling configuration automatically.
>
>> [!card|step]
>> ###### Step 03
>> ### Map *custom domain*.
>> Bring your own domain with automatic TLS. Split traffic between revisions for safe rollouts.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Foundations
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../foundations/service-models|Service Models]]
>
>
>> [!card] Sister compute products
>> [[gcp-compute-services|GCP Compute Services]], [[cloud-functions|Cloud Functions]], [[kubernetes-engine|Kubernetes Engine]], [[app-engine|App Engine]]
