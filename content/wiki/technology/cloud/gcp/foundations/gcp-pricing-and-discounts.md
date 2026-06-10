---
title: GCP Pricing and Discounts
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
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
banner: https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # GCP Pricing and Discounts
> ###### Cloud Platform
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Cost management |
> | **Domain** | Billing & optimization |
> | **Key models** | SUD, CUD, Spot, Free Tier |

---

> "To be prepared is half the victory."
> <cite>— Miguel de Cervantes</cite>

---

<span class="at-kicker">Cost Management · Google Cloud</span>
# GCP Pricing and Discounts
<p class="at-lead">GCP's pricing is built around per-second billing with multiple stacking discounts that reward sustained or committed usage. Understanding these levers is the difference between a typical bill and a 50–80%-cheaper one.</p>
<span class="at-stat">SUDs</span> automatic · <span class="at-stat">CUDs</span> up to <span class="at-stat">57%</span> off · <span class="at-stat">Free Tier</span> always-on &nbsp;·&nbsp; <span class="at-mark">GCP automatically applies sustained use discounts — no upfront commitment needed</span>

<span class="at-kicker">How It Works</span>
## Overview

Google was the **first major cloud provider** to bill VMs by the second instead of rounding up to the hour (source: Google Cloud Platform (GCP).md). For workloads that churn VMs (CI runners, batch jobs), this alone yields meaningful savings.

## Per-second billing

GCP pioneered per-second billing for VMs. No more rounding up to the hour — pay only for the seconds you use. This benefits workloads with variable runtimes and frequent VM cycling.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Sustained Use Discounts (SUD)**
>> Automatic discount once a VM runs >25% of the billing month. No commitment required — GCP applies it silently to your bill.
>
>> [!card|section]
>> **Committed Use Discounts (CUD)**
>> Up to ~57% off for 1- or 3-year commitments. Best for steady-state production workloads. Stackable with SUD on overage.
>
>> [!card|section]
>> **Preemptible / Spot VMs**
>> ~80% lower price for short-lived instances Google can reclaim with 30 seconds notice. Best for fault-tolerant workloads.
>
>> [!card|section]
>> **Free Tier**
>> $300 in credits for new accounts plus always-free quotas across 20+ services. Never expires for eligible services.
>
>> [!card|section]
>> **Custom Machine Types**
>> Pick arbitrary CPU/RAM ratios — pay only for what your workload actually needs rather than over-provisioning.
>
>> [!card|section]
>> **Per-Second Billing**
>> First major cloud provider to bill by the second. Meaningful savings for workloads that churn VMs frequently.

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
  - [[Cloud Storage]]: 5 GB Standard / month
  - [[cloud-functions]]: 2 million invocations / month
  - [[cloud-run]]: 2 M requests + 360k GiB-s + 180k vCPU-s / month
  - [[app-engine]]: 28 instance-hours / day (Standard)
  - [[kubernetes-engine]]: 1 zonal or Autopilot cluster / month

(source: Google Cloud Platform - Compute Services.md, [cloud.google.com/free](https://cloud.google.com/free))

<span class="at-kicker">Real-World Applications</span>
## Cost-saving checklist

> [!grid|cols2]
>
>> [!card|section]
>> **Use Preemptible/Spot VMs**
>> For non-critical / batch workloads (-80%). Fault-tolerant compute at a fraction of the cost.
>
>> [!card|section]
>> **Apply CUDs**
>> For predictable steady-state workloads (-57%). Commit to baseline capacity for significant savings.
>
>> [!card|section]
>> **Let SUDs Apply Automatically**
>> Don't restart VMs unnecessarily. Long-running workloads automatically receive sustained use discounts.
>
>> [!card|section]
>> **Right-size with Custom Types**
>> Match CPU/RAM to actual needs. Avoid over-provisioning to predefined instance sizes.
>
>> [!card|section]
>> **Lifecycle Management**
>> In Cloud Storage, auto-tier cold data. Move infrequently accessed data to colder storage classes.
>
>> [!card|section]
>> **Scale to Zero**
>> With Cloud Run, App Engine Standard, or Cloud Functions for bursty workloads. Pay only when processing.
>
>> [!card|section]
>> **Use Autoscaling**
>> Match compute capacity to demand. Scale up for peak, down for valleys.
>
>> [!card|section]
>> **Monitor with Billing Reports**
>> Set budgets and alerts to catch surprises. Proactive cost monitoring prevents bill shock.

(source: Google Cloud Platform - Compute Services.md, source: Cloud Storage in GCP.md)

<span class="at-kicker">Cost Model</span>
## Hidden costs to watch

| Dimension | Detail |
|-----------|--------|
| **Egress** | Data leaving GCP costs ~$0.12/GB (source: Google Cloud Platform (GCP).md) |
| **Inter-region traffic** | Also billed at standard rates |
| **Load balancer rule-hours** | Small but constant charge per forwarding rule |
| **Cloud Logging volume** | Easy to over-ingest; set retention policies |
| **NAT Gateway data** | Per-GB processing fee for Cloud NAT |

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

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · GCP PRICING & DISCOUNTS
>> # From *pay-as-you-go* to *optimized GCP spend*.
>> Understand pricing dimensions, apply CUDs for predictable workloads, and monitor with Cost Management tools.
>
>> [!card|step]
>> ###### Step 01
>> ### *Understand* pricing dimensions.
>> Compute, storage, networking, and operations all have distinct pricing models. Identify the cost drivers for your architecture.
>
>> [!card|step]
>> ###### Step 02
>> ### *Apply* CUDs for predictable workloads.
>> Commit to 1- or 3-year baselines for steady-state workloads. Save up to 57% with zero operational changes.
>
>> [!card|step]
>> ###### Step 03
>> ### *Monitor* with Cost Management.
>> Use Billing Reports, Budgets, and Cost Tables. Set alerts at 50%, 90%, and 100% of budget to catch overruns early.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] Foundations
>> [[google-cloud-platform|Google Cloud Platform]], [[regions-and-zones|Regions and Zones]], [[service-models|Service Models]]
>
>
>> [!card] Products
>> [[../compute/compute-engine|Compute Engine]], [[../compute/gcp-compute-services|GCP Compute Services]], [[Cloud Storage|Cloud Storage]]
>
>
>> [!card] Cross-cloud guides
>> [[../../../guides/cost-optimization-cloud|Cost Optimization in the Cloud]]
