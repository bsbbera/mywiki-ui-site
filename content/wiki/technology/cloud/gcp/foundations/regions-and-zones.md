---
title: Regions and Zones
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 9:28:50 pm
aliases:
  - GCP Regions
  - GCP Zones
  - Multi-Region
category: Cloud
tags:
  - GCP
  - CloudEngineering
banner:
publish: true
---

---

GCP organizes resources into a three-level geographic hierarchy: **multi-regions ⊃ regions ⊃ zones** (source: Google Cloud Platform (GCP).md).

## Zone

A **zone** is the smallest deployment unit — roughly equivalent to a single data-center failure domain inside a region. When you create a Compute Engine VM you specify a zone such as `europe-west2-a` (source: Google Cloud Platform (GCP).md). A zone is **not** strictly one physical building; it is a failure-isolated availability domain that may span buildings.

## Region

A **region** is an independent geographic area (e.g. `europe-west2` in London) containing multiple zones. Network round-trip latency between zones in the same region is typically **under 5 ms** (source: Google Cloud Platform (GCP).md).

## Multi-Region

Some services (notably [[cloud-storage]]) support **multi-region** locations such as `EU` or `US`, which replicate data across at least two geographic locations **separated by 160+ km** for disaster resilience (source: Google Cloud Platform (GCP).md).

## Current scale

As of 2025 GCP operates **43 regions and 130 zones** globally ([cloud.google.com/about/locations](https://cloud.google.com/about/locations)). The raw source mentions "15 regions" — that figure is from ~2020 and should be treated as outdated (source: Google Cloud Platform (GCP).md).

## Designing for fault tolerance

- Spread instances across **multiple zones** in one region to survive zone failures.
- Spread across **multiple regions** to survive regional disasters or to bring data closer to users (source: Google Cloud Platform (GCP).md).
- Use multi-region [[cloud-storage]] for strong cross-region durability.

## Interesting Facts

- Inter-zone latency in a region is engineered to stay under 5 ms — comparable to local-LAN latency (source: Google Cloud Platform (GCP).md).
- GCP multi-region replication enforces a 160 km minimum separation, derived from disaster-recovery best practice for natural events.

## Interview Questions can be asked

1. Difference between a zone, a region, and a multi-region.
2. How would you architect a 99.99% available service on GCP?
3. Why does GCP enforce 160 km separation in multi-region buckets?

## Related pages

> [!multi-column]
>
>> [!card] Foundations
>> [[google-cloud-platform|Google Cloud Platform]], [[service-models|Service Models]], [[gcp-pricing-and-discounts|GCP Pricing + Discounts]]
>
>
>> [!card] Products
>> [[../compute/compute-engine|Compute Engine]], [[../storage/cloud-storage|Cloud Storage]]

