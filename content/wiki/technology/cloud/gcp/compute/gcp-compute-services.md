---
title: GCP Compute Services
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 9:28:50 pm
aliases:
  - GCP Compute
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Compute
banner:
publish: true
---

> "The golden opportunity you are seeking is in yourself. It is not in your environment; it is not in luck or chance, or the help of others; it is in yourself alone."
> <cite>— Orison Swett Marden</cite>

---

GCP exposes a **spectrum of compute options** that trade off between control and abstraction. Choosing the right one is the most common architecture decision on GCP (source: Google Cloud Platform - Compute Services.md).

## The spectrum

```
More control  ────────────────────────────────────  More managed

  Compute Engine ──▶  GKE Standard ──▶  GKE Autopilot ──▶  Cloud Run ──▶  App Engine ──▶  Cloud Functions
     (IaaS)            (CaaS)             (CaaS)            (Serverless)    (PaaS)         (FaaS)
```

## The five primary services

### 1. [[compute-engine]] (GCE) — IaaS

Virtual machines on Google's infrastructure. Best for: deep customization, custom OS kernels, lift-and-shift, large monoliths, 1:1 container-to-VM mapping (source: Google Cloud Platform - Compute Services.md).

### 2. [[app-engine]] (GAE) — PaaS

Managed runtime for stateless web apps, autoscaling and zero-management. Best for: stateless apps, CRUD-heavy back-ends and APIs, projects needing fast development (source: Google Cloud Platform - Compute Services.md).

### 3. [[kubernetes-engine]] (GKE) — managed Kubernetes

Container orchestration at scale. Best for: containerized apps, hybrid/multi-cloud, microservices, strong CI/CD (source: Google Cloud Platform - Compute Services.md).

### 4. [[cloud-run]] — serverless containers

Run any stateless container with autoscaling, scale-to-zero, request billing. Best for: stateless container apps, event-driven systems, custom dependencies (source: Google Cloud Platform - Compute Services.md).

### 5. [[cloud-functions]] — FaaS

Event-driven snippets of code. Best for: trigger-based workflows, lightweight APIs, ETL glue (source: Google Cloud Platform - Compute Services.md).

## Comparison matrix

| | [[compute-engine]] | [[kubernetes-engine]] | [[app-engine]] | [[cloud-run]] | [[cloud-functions]] |
| --- | --- | --- | --- | --- | --- |
| Service model | IaaS | CaaS | PaaS | Serverless container | FaaS |
| Smallest unit | VM | Pod | App | Container | Function |
| You manage | OS, patches, scaling | Pods, optionally nodes | Code | Container | Code |
| Scale to zero | No | Yes (HPA) | Yes (Std) | Yes | Yes |
| Cold start | None | Pod-startup | ms | ms–s | ms |
| Free tier | No | 1 cluster/mo | 28 inst-hr/day | 2M req/mo | 2M inv/mo |
| Best for | Full control | Microservices | Web apps | Stateless containers | Event handlers |

(source: Google Cloud Platform - Compute Services.md)

## Pricing snapshot

| Service | Pricing model | Free tier | Cost-saving |
| --- | --- | --- | --- |
| GCE | Pay per second | None | Preemptible (-80%), CUD (-57%), SUD |
| GKE | Pay-as-you-go | 1 zonal/Autopilot cluster/mo | Spot VMs, no cluster fee in Standard |
| GAE | Pay per instance-hour | 28 instance-hours/day | Standard env scale-to-zero |
| Cloud Functions | Per execution + memory | 2M invocations/mo | Optimize duration |
| Cloud Run | Per request + execution time | 2M req, 360k GiB-s, 180k vCPU-s/mo | Scale-to-zero |

(source: Google Cloud Platform - Compute Services.md, [cloud.google.com/run/pricing](https://cloud.google.com/run/pricing))

## Related compute & data services

These appear alongside the core compute services in many architectures (source: Google Cloud Platform - Compute Services.md):

- **Cloud Dataproc** — managed Hadoop/Spark.
- **Cloud Dataflow** — managed Apache Beam (batch + streaming).
- **Cloud Pub/Sub** — global messaging (publish/subscribe).
- **Cloud Tasks** — async task execution and scheduling.
- **Cloud Bigtable** — wide-column NoSQL (HBase-compatible).
- **Cloud Spanner** — globally distributed relational SQL.
- **Cloud Datastore / Firestore** — NoSQL document DB.

## Best practices

- **Security** — encryption + IAM roles, VPC Service Controls, firewalls.
- **Cost** — preemptible/spot for batch, autoscaling, CUDs, billing reports.
- **Performance** — right-size machines, load balancers, caching/CDN.

(source: Google Cloud Platform - Compute Services.md)

## Decision quick-guide

| Question | Recommendation |
| --- | --- |
| Need full OS control? | [[compute-engine]] |
| Already containerized microservices? | [[kubernetes-engine]] (Autopilot if you want minimal ops) |
| Stateless web app, language-supported? | [[app-engine]] Standard |
| Stateless container with custom deps? | [[cloud-run]] |
| Tiny event handler / glue code? | [[cloud-functions]] |

## Interesting Facts

- The five compute services span the **entire IaaS-PaaS-FaaS spectrum** — a deliberate design so customers don't have to leave GCP as their workload evolves.
- [[cloud-run]] and Gen-2 [[cloud-functions]] now share the same execution backend.

## Interview Questions can be asked

1. Walk through the five core compute services and pick one for: a Postgres host, a microservice mesh, a webhook handler, a scheduled ETL.
2. Why does [[kubernetes-engine]] Autopilot bill per pod, not per node?
3. Describe a migration path from Compute Engine VMs to Cloud Run.
4. Give two scenarios where you'd reject Cloud Functions in favor of Cloud Run.

## Related pages

> [!multi-column]
>
>> [!card] Foundations
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../foundations/service-models|Service Models]], [[../foundations/gcp-pricing-and-discounts|GCP Pricing + Discounts]]
>
>
>> [!card] Compute products
>> [[compute-engine|Compute Engine]], [[app-engine|App Engine]], [[kubernetes-engine|Kubernetes Engine]], [[cloud-run|Cloud Run]], [[cloud-functions|Cloud Functions]], [[compute-engine-vs-app-engine|Compute Engine vs App Engine]]

