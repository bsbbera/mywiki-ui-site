---
title: GCP Pricing and Discounts
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 9:28:50 pm
aliases:
  - GCP Pricing
  - SUD
  - CUD
  - Preemptible VM
  - Spot VM
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Pricing
banner:
dg-publish: true
publish: true
---
---

GCP's pricing is built around **per-second billing** with multiple stacking discounts that reward sustained or committed usage. Understanding these levers is the difference between a typical bill and a 50–80%-cheaper one.

## Per-second billing

Google was the **first major cloud provider** to bill VMs by the second instead of rounding up to the hour (source: Google Cloud Platform (GCP).md). For workloads that churn VMs (CI runners, batch jobs), this alone yields meaningful savings.

## Sustained Use Discounts (SUD)

**Automatic.** No commitment required. Once a VM has run for **>25% of the billing month**, Compute Engine starts discounting each additional incremental minute (source: Google Cloud Platform (GCP).md).

## Committed Use Discounts (CUD)

You commit to consuming a baseline of vCPU + memory for **1 or 3 years** in exchange for up to **~57% off** ([source: Google Cloud Platform - Compute Services.md](file)).

- Best for steady-state production workloads.
- Stackable with SUD on overage.

## Preemptible / Spot VMs

Short-lived instances Google can reclaim with **30 seconds notice** in exchange for **~80% lower price** (source: Google Cloud Platform - Compute Services.md, source: Difference Between Google Cloud Compute Engine and App Engine.md).

- **Preemptible VM** — original product, max 24-hour lifetime.
- **Spot VM** — successor; no fixed lifetime cap, similar discount.

Best for fault-tolerant workloads: batch processing, rendering, CI, big-data jobs.

## Free tier

- **$300 in credits** for new accounts to explore the platform (source: Features of GCP.md).
- **Always-free quotas** on 20+ services, including:
  - [[compute-engine]]: 1 e2-micro VM/month (US regions only)
  - [[cloud-storage]]: 5 GB Standard / month
  - [[cloud-functions]]: 2 million invocations / month
  - [[cloud-run]]: 2 M requests + 360k GiB-s + 180k vCPU-s / month
  - [[app-engine]]: 28 instance-hours / day (Standard)
  - [[kubernetes-engine]]: 1 zonal or Autopilot cluster / month

(source: Google Cloud Platform - Compute Services.md, [cloud.google.com/free](https://cloud.google.com/free))

## Custom machine types

Compute Engine lets you pick **arbitrary CPU/RAM ratios** — pay only for what your workload actually needs rather than over-provisioning to a predefined size (source: Google Cloud Platform (GCP).md).

## Cost-saving checklist

1. Use **preemptible/Spot VMs** for non-critical / batch workloads (-80%).
2. Use **CUDs** for predictable steady-state workloads (-57%).
3. Let **SUDs** apply automatically — don't restart VMs unnecessarily.
4. **Right-size** with custom machine types.
5. Apply **lifecycle management** in [[cloud-storage]] to tier cold data.
6. **Scale to zero** with [[cloud-run]] / [[app-engine]] Standard / [[cloud-functions]] for bursty workloads.
7. Use **autoscaling** to match demand.
8. Monitor with **GCP Billing Reports** and budgets to catch surprises.

(source: Google Cloud Platform - Compute Services.md, source: Cloud Storage in GCP.md)

## Hidden costs to watch

- **Egress** — data leaving GCP costs ~$0.12/GB (source: Google Cloud Platform (GCP).md).
- **Inter-region traffic** — also billed.
- **Load balancer rule-hours** — small but constant.
- **Cloud Logging volume** — easy to over-ingest.
- **NAT Gateway data** — per-GB processing fee.

## Interesting Facts

- Per-second billing was a **competitive shock** when introduced — AWS responded the next year (source: Google Cloud Platform (GCP).md).
- SUD applies **automatically and silently** — many GCE users get discounts they never asked for.
- A 3-year CUD with Spot VM tail can outperform AWS Reserved + Spot in price-per-vCPU-hour.

## Interview Questions can be asked

1. Compare SUD, CUD, and Spot VM — which stack, which don't?
2. When would you reject a 3-year CUD?
3. How would you cost-optimize a Postgres host running 24x7?
4. What egress patterns would dominate the bill of a global SaaS on GCP?
5. Walk through the always-free tier and which services scale-to-zero.

## Related pages

> [!multi-column]
>
>> [!card] Foundations
>> [[google-cloud-platform|Google Cloud Platform]], [[regions-and-zones|Regions and Zones]], [[service-models|Service Models]]
>
>
>> [!card] Products
>> [[../compute/compute-engine|Compute Engine]], [[../compute/gcp-compute-services|GCP Compute Services]], [[../storage/cloud-storage|Cloud Storage]]
>
>
>> [!card] Cross-cloud guides
>> [[../../data-engineering/guides/cost-optimization-cloud|Cost Optimization in the Cloud]]

