---
title: Cloud Service Models
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 9:28:50 pm
aliases:
  - IaaS
  - PaaS
  - SaaS
  - FaaS
category: Cloud
tags:
  - GCP
  - CloudEngineering
banner:
publish: true
---

---

Cloud services are commonly categorized by **how much of the stack the provider manages** vs. how much you control. Going from most-control to most-managed: IaaS → CaaS → PaaS → FaaS → SaaS.

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

## Interesting Facts

- Cloud Functions Gen 2 is **internally** implemented on Cloud Run, so the FaaS/CaaS boundary is now blurred ([cloud.google.com blog](https://cloud.google.com/blog/products/serverless/cloud-functions-2nd-generation-now-generally-available)).

## Interview Questions can be asked

1. Define IaaS, PaaS, SaaS, FaaS with one GCP example each.
2. Why would you pick App Engine over Compute Engine?
3. Where does Cloud Run sit in the IaaS-PaaS-FaaS spectrum?

## Related pages

> [!multi-column]
>
>> [!card] Foundations
>> [[google-cloud-platform|Google Cloud Platform]], [[regions-and-zones|Regions and Zones]], [[gcp-pricing-and-discounts|GCP Pricing + Discounts]]
>
>
>> [!card] Compute
>> [[../compute/gcp-compute-services|GCP Compute Services]], [[../compute/compute-engine-vs-app-engine|Compute Engine vs App Engine]]

