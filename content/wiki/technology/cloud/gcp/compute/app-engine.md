---
title: App Engine
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 9:28:50 pm
aliases:
  - GAE
  - Google App Engine
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Compute
  - PaaS
banner:
dg-publish: true
---

---

Google App Engine (GAE) is GCP's fully managed **PaaS** for hosting web and mobile back-ends. You upload code; Google provisions, scales, load-balances, patches, and monitors the runtime (source: Google App Engine (GAE).md).

## How it works

- Develop and test locally with the **App Engine SDK**, which emulates the production runtime.
- Deploy with `gcloud app deploy`; App Engine builds, ships, and starts the app.
- App Engine **autoscales instances based on traffic** and can **scale to zero**.
- Built-in: load balancing, version management, traffic splitting, logging, monitoring, security patches, **quota and budget controls** (source: Google App Engine (GAE).md, source: Difference Between Google Cloud Compute Engine and App Engine.md).

## Standard vs Flexible environment

| Aspect | Standard | Flexible |
| --- | --- | --- |
| Runtime | Sandboxed, Google-supplied | Docker container (your image) |
| Scale-to-zero | Yes | No (≥1 instance) |
| Cold start | Fast (ms) | Slower |
| Custom binaries / OS pkgs | Limited | Yes |
| Best for | Stateless web apps, APIs | Apps needing custom OS deps |

(source: Difference Between Google Cloud Compute Engine and App Engine.md)

## Supported runtimes

The raw source lists Java 7, Python 2.7, PHP 5.4, Go 1.2 — these are **first-generation legacy runtimes** that Google has long since deprecated (source: Google App Engine (GAE).md).

Current (2025) Standard runtimes per Google Cloud docs:

- **Python** 3.7 → 3.13+ ([cloud.google.com/appengine/docs/standard/python3/runtime](https://cloud.google.com/appengine/docs/standard/python3/runtime))
- **Java** 8, 11, 17, 21
- **Node.js** 12 → 22
- **Go** 1.12+
- **PHP** 7.3+
- **Ruby**, **.NET** also supported

## Strengths

1. **Infrastructure security** — Google's network is among the most hardened in the world (source: Google App Engine (GAE).md).
2. **Rich APIs** — built-in services for cron jobs, task queues, Memcache, Datastore, Cloud SQL, Blobstore.
3. **Autoscaling** — including scale-to-zero, very fast vs. [[compute-engine]] (source: Difference Between Google Cloud Compute Engine and App Engine.md).
4. **Version management** — easy rollouts and rollbacks.
5. **Cost** — no engineers needed for OS/server management.

## Trade-offs

- **Less control** — no underlying OS access in Standard.
- **Smaller instances** — large monolith apps may not fit.
- **Cost can climb** at high traffic vs. tuned [[compute-engine]] reservations (source: Difference Between Google Cloud Compute Engine and App Engine.md).

## Pricing

Pay-per-instance-hour with a **free tier of 28 instance-hours/day** in Standard (source: Google Cloud Platform - Compute Services.md). Flexible has no free tier and bills for vCPU/RAM/disk.

## Interesting Facts

- App Engine **scales to zero** (Standard) — you pay nothing when no requests arrive (source: Difference Between Google Cloud Compute Engine and App Engine.md).
- The platform pre-dates Kubernetes; many design ideas (managed runtimes, fast autoscaling) trace back to App Engine's 2008 launch.

## Interview Questions can be asked

1. Standard vs Flexible — when to pick which.
2. How does App Engine scale to zero and what's the cold-start trade-off?
3. Difference between [[compute-engine]] and App Engine in scaling speed and security.
4. How do version management and traffic splitting enable safe rollouts?

## Related pages

> [!multi-column]
>
>> [!card] Foundations
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../foundations/service-models|Service Models]]
>
>
>> [!card] Sister compute products
>> [[gcp-compute-services|GCP Compute Services]], [[compute-engine|Compute Engine]], [[compute-engine-vs-app-engine|Compute Engine vs App Engine]], [[cloud-run|Cloud Run]]

