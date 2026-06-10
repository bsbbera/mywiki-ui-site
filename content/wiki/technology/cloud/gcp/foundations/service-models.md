---
title: Cloud Service Models
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - IaaS
  - PaaS
  - SaaS
  - FaaS
category: Cloud
tags:
  - GCP
  - CloudEngineering
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Service Models
> ###### Cloud Concepts
> | | |
> | --- | --- |
> | **Provider** | Universal cloud concept |
> | **Models** | IaaS, PaaS, SaaS, FaaS |
> | **GCP scope** | All models supported |
> | **Best for** | Right-sizing control vs. management |

---

> "If you truly expect something to be difficult, it will be."
> <cite>— Peter A. Cohen</cite>

---

<span class="at-kicker">Cloud Concepts · Google Cloud</span>
# Cloud Service Models
<p class="at-lead">Cloud services are commonly categorized by how much of the stack the provider manages vs. how much you control. Going from most-control to most-managed: IaaS → CaaS → PaaS → FaaS → SaaS.</p>
<span class="at-stat">IaaS</span> · <span class="at-stat">PaaS</span> · <span class="at-stat">SaaS</span> · <span class="at-stat">FaaS</span> &nbsp;·&nbsp; <span class="at-mark">pick your abstraction level — more managed means less control</span>

<span class="at-kicker">How It Works</span>
## Overview

Understanding service models helps you choose the right level of abstraction for each workload. More control means more operational responsibility; more managed means faster time-to-market but less customization.

## IaaS — Infrastructure as a Service

Provider supplies raw compute, storage, and networking; you manage the OS, runtime, and application (source: Google Cloud Platform (GCP).md).

- GCP example: [[compute-engine]], Persistent Disk, VPC.
- Best for: lift-and-shift migrations, custom kernels, full OS control.

## PaaS — Platform as a Service

Provider manages the runtime, OS, and infrastructure; you supply only application code and configuration (source: Google Cloud Platform (GCP).md).

- GCP example: [[app-engine]], Cloud SQL.
- Best for: web apps where ops should be invisible.

## SaaS — Software as a Service

Provider hosts a complete application; consumers just use it (source: Google Cloud Platform (GCP).md).

- GCP example: Google Workspace, Google Maps Platform, Cloud Identity.

## FaaS — Function as a Service (serverless)

A specialization of PaaS where you deploy individual **functions** triggered by events; you pay only per invocation and execution time (source: Cloud Functions in GCP.md).

- GCP example: [[cloud-functions]].

<span class="at-kicker">Core Capabilities</span>
## Where GCP services sit

| Service | Model |
| --- | --- |
| Compute Engine | IaaS |
| Kubernetes Engine | CaaS / managed Kubernetes |
| App Engine Standard | PaaS |
| Cloud Run | Serverless containers (PaaS/CaaS hybrid) |
| Cloud Functions | FaaS |
| Cloud Storage / Persistent Disk | IaaS (storage) |
| Google Workspace | SaaS |

(source: Google Cloud Platform (GCP).md, source: Google Cloud Platform - Compute Services.md)

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **IaaS: Lift-and-Shift**
>> Migrate on-premises VMs to cloud with minimal changes. Maintain existing OS and application configurations.
>
>> [!card|section]
>> **PaaS: Web Applications**
>> Deploy web apps without managing servers. Focus on code, let the platform handle scaling and patching.
>
>> [!card|section]
>> **FaaS: Event Processing**
>> Respond to events with short-lived functions. Pay only for execution time, scale automatically to zero.
>
>> [!card|section]
>> **SaaS: Business Applications**
>> Use complete applications without any infrastructure management. Email, docs, and productivity tools.
>
>> [!card|section]
>> **Hybrid: Kubernetes (CaaS)**
>> Container orchestration with managed control plane. Balance control with operational simplicity.
>
>> [!card|section]
>> **Serverless: Cloud Run**
>> Container-based serverless with HTTP triggers. Best of containers and serverless combined.

## Interesting Facts

- Cloud Functions Gen 2 is **internally** implemented on Cloud Run, so the FaaS/CaaS boundary is now blurred ([cloud.google.com blog](https://cloud.google.com/blog/products/serverless/cloud-functions-2nd-generation-now-generally-available)).

## Interview Questions can be asked

1. Define IaaS, PaaS, SaaS, FaaS with one GCP example each.
2. Why would you pick App Engine over Compute Engine?
3. Where does Cloud Run sit in the IaaS-PaaS-FaaS spectrum?

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD SERVICE MODELS
>> # From *on-premises* to *right service model*.
>> Assess your control requirements, map workloads to the appropriate model, and select the GCP service that fits.
>
>> [!card|step]
>> ###### Step 01
>> ### *Assess* control requirements.
>> Do you need custom kernels and OS access? Choose IaaS. Prefer hands-off operations? Consider PaaS or FaaS.
>
>> [!card|step]
>> ###### Step 02
>> ### *Map* workload to model.
>> Stateless web apps fit PaaS. Event-driven code fits FaaS. Legacy enterprise apps often need IaaS.
>
>> [!card|step]
>> ###### Step 03
>> ### *Select* GCP service.
>> Compute Engine for IaaS, App Engine for PaaS, Cloud Functions for FaaS, Cloud Run for hybrid serverless containers.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] Foundations
>> [[google-cloud-platform|Google Cloud Platform]], [[regions-and-zones|Regions and Zones]], [[gcp-pricing-and-discounts|GCP Pricing + Discounts]]
>
>
>> [!card] Compute
>> [[../compute/gcp-compute-services|GCP Compute Services]], [[../compute/compute-engine-vs-app-engine|Compute Engine vs App Engine]]
