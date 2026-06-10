---
title: Regions and Zones
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - GCP Regions
  - GCP Zones
  - Multi-Region
category: Cloud
tags:
  - GCP
  - CloudEngineering
banner: https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Regions and Zones
> ###### Cloud Platform
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Global infrastructure |
> | **Hierarchy** | Multi-region ⊃ Region ⊃ Zone |
> | **Scale** | 43+ regions, 130+ zones |

---

> "To be prepared is half the victory."
> <cite>— Miguel de Cervantes</cite>

---

<span class="at-kicker">Global Infrastructure · Google Cloud</span>
# Regions and Zones
<p class="at-lead">GCP organizes resources into a three-level geographic hierarchy: multi-regions ⊃ regions ⊃ zones. Understanding this hierarchy is essential for designing fault-tolerant, low-latency architectures.</p>
<span class="at-stat">40+</span> regions · <span class="at-stat">120+</span> zones · <span class="at-stat">200+</span> countries & territories &nbsp;·&nbsp; <span class="at-mark">choose your region for latency, compliance, and disaster recovery</span>

<span class="at-kicker">How It Works</span>
## Overview

GCP organizes resources into a three-level geographic hierarchy: **multi-regions ⊃ regions ⊃ zones** (source: Google Cloud Platform (GCP).md).

## Zone

A **zone** is the smallest deployment unit — roughly equivalent to a single data-center failure domain inside a region. When you create a Compute Engine VM you specify a zone such as `europe-west2-a` (source: Google Cloud Platform (GCP).md). A zone is **not** strictly one physical building; it is a failure-isolated availability domain that may span buildings.

## Region

A **region** is an independent geographic area (e.g. `europe-west2` in London) containing multiple zones. Network round-trip latency between zones in the same region is typically **under 5 ms** (source: Google Cloud Platform (GCP).md).

## Multi-Region

Some services (notably [[Cloud Storage]]) support **multi-region** locations such as `EU` or `US`, which replicate data across at least two geographic locations **separated by 160+ km** for disaster resilience (source: Google Cloud Platform (GCP).md).

## Current scale

As of 2025 GCP operates **43 regions and 130 zones** globally ([cloud.google.com/about/locations](https://cloud.google.com/about/locations)). The raw source mentions "15 regions" — that figure is from ~2020 and should be treated as outdated (source: Google Cloud Platform (GCP).md).

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Fault Isolation**
>> Zones are failure-isolated domains. Spread instances across zones to survive single-zone failures.
>
>> [!card|section]
>> **Low Latency**
>> Inter-zone latency under 5ms — comparable to local LAN. Build multi-zone apps without performance penalties.
>
>> [!card|section]
>> **Disaster Recovery**
>> Multi-region replication with 160+ km separation. Survive regional disasters with geographically distributed data.
>
>> [!card|section]
>> **Data Residency**
>> Choose regions for compliance requirements. Meet GDPR and other data sovereignty regulations.
>
>> [!card|section]
>> **Global Reach**
>> Deploy close to users on 6 continents. Optimize latency for global user bases.
>
>> [!card|section]
>> **Automatic Redundancy**
>> Multi-region services replicate automatically. No manual configuration for cross-region durability.

<span class="at-kicker">Real-World Applications</span>
## Designing for fault tolerance

> [!grid|cols2]
>
>> [!card|section]
>> **Multi-Zone HA**
>> Spread instances across multiple zones in one region to survive zone failures. Use managed instance groups for automatic distribution.
>
>> [!card|section]
>> **Multi-Region DR**
>> Spread across multiple regions to survive regional disasters. Use global load balancers for traffic distribution.
>
>> [!card|section]
>> **Data Proximity**
>> Bring data closer to users for reduced latency. Use Cloud CDN for edge caching of static content.
>
>> [!card|section]
>> **Compliance Zones**
>> Select specific regions for data residency requirements. EU regions for GDPR, US regions for FedRAMP.

(source: Google Cloud Platform (GCP).md)

## Interesting Facts

- Inter-zone latency in a region is engineered to stay under 5 ms — comparable to local-LAN latency (source: Google Cloud Platform (GCP).md).
- GCP multi-region replication enforces a 160 km minimum separation, derived from disaster-recovery best practice for natural events.

## Interview Questions can be asked

1. Difference between a zone, a region, and a multi-region.
2. How would you architect a 99.99% available service on GCP?
3. Why does GCP enforce 160 km separation in multi-region buckets?

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · REGIONS AND ZONES
>> # From *single-region* to *multi-region resilience*.
>> Choose your primary region, configure multi-zone HA, and design cross-region DR for business continuity.
>
>> [!card|step]
>> ###### Step 01
>> ### *Choose* primary region.
>> Consider user proximity, compliance requirements, and service availability. Not all services are available in all regions.
>
>> [!card|step]
>> ###### Step 02
>> ### *Configure* multi-zone HA.
>> Deploy workloads across 2-3 zones in your primary region. Use managed instance groups and regional load balancers.
>
>> [!card|step]
>> ###### Step 03
>> ### *Design* cross-region DR.
>> Replicate critical data to a secondary region. Plan failover procedures and test them regularly.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] Foundations
>> [[google-cloud-platform|Google Cloud Platform]], [[service-models|Service Models]], [[gcp-pricing-and-discounts|GCP Pricing + Discounts]]
>
>
>> [!card] Products
>> [[../compute/compute-engine|Compute Engine]], [[Cloud Storage|Cloud Storage]]
