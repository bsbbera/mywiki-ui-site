---
title: GCP Compute Services
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - GCP Compute
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Compute
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # GCP Compute Services
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Compute Overview |
> | **Category** | Compute |

---

> "The golden opportunity you are seeking is in yourself. It is not in your environment; it is not in luck or chance, or the help of others; it is in yourself alone."
> <cite>— Orison Swett Marden</cite>

---

<span class="at-kicker">Compute Overview · Google Cloud</span>
# GCP Compute Services
<p class="at-lead">GCP exposes a spectrum of compute options that trade off between control and abstraction. Choosing the right one is the most common architecture decision on GCP — from bare-metal VMs to zero-infrastructure serverless functions.</p>
<span class="at-stat">6</span> compute services &nbsp;·&nbsp; <span class="at-stat">IaaS → FaaS</span> spectrum &nbsp;·&nbsp; <span class="at-mark">from bare-metal control to zero-infrastructure serverless</span>

<span class="at-kicker">How It Works</span>

## Overview

## The spectrum

```
More control  ────────────────────────────────────  More managed

  Compute Engine ──▶  GKE Standard ──▶  GKE Autopilot ──▶  Cloud Run ──▶  App Engine ──▶  Cloud Functions
     (IaaS)            (CaaS)             (CaaS)            (Serverless)    (PaaS)         (FaaS)
```

## The five primary services

### 1. Compute Engine (GCE) — IaaS

Virtual machines on Google's infrastructure. Best for: deep customization, custom OS kernels, lift-and-shift, large monoliths, 1:1 container-to-VM mapping.

### 2. App Engine (GAE) — PaaS

Managed runtime for stateless web apps, autoscaling and zero-management. Best for: stateless apps, CRUD-heavy back-ends and APIs, projects needing fast development.

### 3. Kubernetes Engine (GKE) — managed Kubernetes

Container orchestration at scale. Best for: containerized apps, hybrid/multi-cloud, microservices, strong CI/CD.

### 4. Cloud Run — serverless containers

Run any stateless container with autoscaling, scale-to-zero, request billing. Best for: stateless container apps, event-driven systems, custom dependencies.

### 5. Cloud Functions — FaaS

Event-driven snippets of code. Best for: trigger-based workflows, lightweight APIs, ETL glue.

## Comparison matrix

| | Compute Engine | GKE | App Engine | Cloud Run | Cloud Functions |
| --- | --- | --- | --- | --- | --- |
| Service model | IaaS | CaaS | PaaS | Serverless container | FaaS |
| Smallest unit | VM | Pod | App | Container | Function |
| You manage | OS, patches, scaling | Pods, optionally nodes | Code | Container | Code |
| Scale to zero | No | Yes (HPA) | Yes (Std) | Yes | Yes |
| Cold start | None | Pod-startup | ms | ms–s | ms |
| Free tier | No | 1 cluster/mo | 28 inst-hr/day | 2M req/mo | 2M inv/mo |
| Best for | Full control | Microservices | Web apps | Stateless containers | Event handlers |

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Compute Engine**
>> Full VM control with 200+ machine types, live migration, custom images, and preemptible pricing up to 80% off.
>
>> [!card|section]
>> **Kubernetes Engine**
>> Managed K8s with Autopilot and Standard modes. Auto-scaling pods and nodes, integrated load balancing, Anthos hybrid.
>
>> [!card|section]
>> **App Engine**
>> Zero-infrastructure PaaS with built-in services, traffic splitting, and scale-to-zero in Standard environment.
>
>> [!card|section]
>> **Cloud Run**
>> Serverless containers — any language, any binary. Scale-to-zero, request-based billing, custom domains.
>
>> [!card|section]
>> **Cloud Functions**
>> Event-driven functions with 125+ triggers. 2M free invocations/month, automatic scaling, Gen 2 on Cloud Run.
>
>> [!card|section]
>> **Supporting Services**
>> Cloud Dataproc, Dataflow, Pub/Sub, Tasks, and more integrate seamlessly with all compute options.

<span class="at-kicker">Cost Model</span>

## Pricing

| Service | Pricing model | Free tier | Cost-saving |
| --- | --- | --- | --- |
| GCE | Pay per second | None | Preemptible (-80%), CUD (-57%), SUD |
| GKE | Pay-as-you-go | 1 zonal/Autopilot cluster/mo | Spot VMs, no cluster fee in Standard |
| GAE | Pay per instance-hour | 28 instance-hours/day | Standard env scale-to-zero |
| Cloud Functions | Per execution + memory | 2M invocations/mo | Optimize duration |
| Cloud Run | Per request + execution time | 2M req, 360k GiB-s, 180k vCPU-s/mo | Scale-to-zero |

## Related compute & data services

These appear alongside the core compute services in many architectures:

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

## Decision quick-guide

| Question | Recommendation |
| --- | --- |
| Need full OS control? | Compute Engine |
| Already containerized microservices? | GKE (Autopilot if you want minimal ops) |
| Stateless web app, language-supported? | App Engine Standard |
| Stateless container with custom deps? | Cloud Run |
| Tiny event handler / glue code? | Cloud Functions |

## Interesting Facts

- The five compute services span the **entire IaaS-PaaS-FaaS spectrum** — a deliberate design so customers don't have to leave GCP as their workload evolves.
- Cloud Run and Gen-2 Cloud Functions now share the same execution backend.

## Interview Questions can be asked

1. Walk through the five core compute services and pick one for: a Postgres host, a microservice mesh, a webhook handler, a scheduled ETL.
2. Why does GKE Autopilot bill per pod, not per node?
3. Describe a migration path from Compute Engine VMs to Cloud Run.
4. Give two scenarios where you'd reject Cloud Functions in favor of Cloud Run.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · COMPUTE SERVICES
>> # From *workload type* to *right compute service*.
>> From bare-metal control to zero-infrastructure serverless.
>
>> [!card|step]
>> ###### Step 01
>> ### Identify *workload shape*.
>> Is it stateful or stateless? Does it need custom OS access? What's the traffic pattern — steady or bursty?
>
>> [!card|step]
>> ###### Step 02
>> ### Pick *abstraction level*.
>> IaaS for control, CaaS for containers, PaaS for speed, FaaS for events. Match operational overhead to team capacity.
>
>> [!card|step]
>> ###### Step 03
>> ### Deploy *and iterate*.
>> Start with the simplest option that meets requirements. Migrate to higher control only when justified by needs.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Foundations
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../foundations/service-models|Service Models]], [[../foundations/gcp-pricing-and-discounts|GCP Pricing + Discounts]]
>
>
>> [!card] Compute products
>> [[compute-engine|Compute Engine]], [[app-engine|App Engine]], [[kubernetes-engine|Kubernetes Engine]], [[cloud-run|Cloud Run]], [[cloud-functions|Cloud Functions]], [[compute-engine-vs-app-engine|Compute Engine vs App Engine]]
