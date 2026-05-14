---
title: Cloud Run
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 9:28:50 pm
aliases:
  - Google Cloud Run
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Serverless
  - Containers
banner:
publish: true
---

---

Cloud Run is a fully managed serverless platform for running **stateless containers**. You give it a container image; Google handles HTTPS termination, autoscaling (including scale-to-zero), revision rollout, and traffic splitting (source: Google Cloud Platform - Compute Services.md, source: Google Cloud Run - Working with Python.md).

It blends two ideas: **serverless billing** (pay per request, scale to zero) with **container portability** (any language, any binary). This is the option to choose when [[cloud-functions]] feels too constrained but you don't want to manage a Kubernetes cluster like in [[kubernetes-engine]].

## How it works

Workflow for a Python service (source: Google Cloud Run - Working with Python.md):

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

Per Google ([cloud.google.com/run/pricing](https://cloud.google.com/run/pricing)):

- **2 million requests / month**
- **360,000 GiB-seconds** of memory
- **180,000 vCPU-seconds** of compute
- **1 GB egress** from North America / month

The raw source's "50 free vCPU-seconds & 50,000 requests/month" figure is outdated (source: Google Cloud Platform - Compute Services.md).

## Best for

- Stateless web/API services
- Event-driven systems (combined with Pub/Sub or Eventarc)
- Apps with custom system or language dependencies that don't fit [[cloud-functions]]
- Stateless containers extracted from a [[kubernetes-engine]] workload

(source: Google Cloud Platform - Compute Services.md)

## Strengths

- **Any language, any binary** as long as it's HTTP and stateless.
- **Scale to zero** â€” no idle cost.
- **Two commands to deploy** (`builds submit` + `run deploy`).
- **Revisions and traffic splitting** built in.
- **Backs Cloud Functions Gen 2** under the hood.

## Trade-offs

- **Stateless only** â€” no local disk persistence between requests.
- **Request timeout** (default 60 min, max 60 min for HTTP requests).
- **Cold starts** for infrequent traffic; mitigate with min-instances.

## Interesting Facts

- **Cloud Functions Gen 2** is implemented on top of Cloud Run + Eventarc, unifying FaaS and CaaS ([cloud.google.com blog](https://cloud.google.com/blog/products/serverless/cloud-functions-2nd-generation-now-generally-available)).
- The `gunicorn --bind :$PORT app:app` pattern works because Cloud Run injects `$PORT` and expects the container to listen on it (source: Google Cloud Run - Working with Python.md).

## Interview Questions can be asked

1. When would you pick Cloud Run over [[cloud-functions]]?
2. When would you pick Cloud Run over [[kubernetes-engine]]?
3. Walk through deploying a Python Flask app to Cloud Run end-to-end.
4. How does traffic splitting between revisions work?
5. What does "stateless" mean and why does Cloud Run require it?

## Related pages

> [!multi-column]
>
>> [!card] Foundations
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../foundations/service-models|Service Models]]
>
>
>> [!card] Sister compute products
>> [[gcp-compute-services|GCP Compute Services]], [[cloud-functions|Cloud Functions]], [[kubernetes-engine|Kubernetes Engine]], [[app-engine|App Engine]]

