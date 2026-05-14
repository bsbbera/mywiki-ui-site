---
title: Google Cloud Platform
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 9:28:50 pm
aliases:
  - GCP
  - Google Cloud
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - DataEngineering
banner:
dg-publish: true
---

---

Google Cloud Platform (GCP) is Google's public cloud offering: a portfolio of compute, storage, networking, data, and AI services built on the same global infrastructure that powers Google Search, Gmail, and YouTube (source: Google Cloud Platform (GCP).md). It exposes those resources to businesses and developers via three primary surfaces â€” the **Cloud Console** (web UI), the **gcloud CLI** (terminal/Cloud Shell), and **client libraries / REST APIs** for programmatic access (source: Google Cloud Platform (GCP).md).

GCP began in 2008 when Google opened its consumer-grade infrastructure to enterprise customers, and the platform expanded with BigQuery (2010), Cloud Storage (2013), Compute Engine (2014), and Google Kubernetes Engine (2014) (source: Google Cloud Platform (GCP).md).

## Pillars

- **Compute** â€” see [[compute-engine]], [[app-engine]], [[kubernetes-engine]], [[cloud-run]], [[cloud-functions]]. Full taxonomy: [[gcp-compute-services]].
- **Storage** â€” see [[cloud-storage]], [[persistent-disk]], [[filestore]].
- **Networking** â€” Virtual Private Cloud (VPC), Cloud Load Balancing, Cloud CDN (source: Features of GCP.md).
- **Data & Analytics** â€” BigQuery, Dataflow, Pub/Sub, Dataproc (source: Google Cloud Platform (GCP).md). Stub pages.
- **ML & AI** â€” Vertex AI, AutoML, AI Platform Training/Prediction (source: Google Cloud Platform (GCP).md).
- **Identity & Security** â€” IAM, encryption at rest and in transit, VPC Service Controls, Identity-Aware Proxy (source: Google Cloud Platform (GCP).md).

## Global infrastructure

GCP is organized into [[regions-and-zones]]. As of 2025 GCP operates **43 regions and 130 zones** worldwide ([cloud.google.com/about/locations](https://cloud.google.com/about/locations)) â€” the raw sources predate this and report only "15 regions" (source: Google Cloud Platform (GCP).md), so treat the legacy figures as outdated.

## Service models

GCP spans the standard cloud taxonomy â€” see [[service-models]]:

- **IaaS** â€” Compute Engine, Cloud Storage
- **PaaS** â€” App Engine, Cloud SQL
- **SaaS** â€” Google Workspace, Google Maps Platform
- **FaaS / serverless** â€” Cloud Functions, Cloud Run

## Pricing model

- **Per-second billing** for VMs (a Google differentiator vs. hour-rounded competitors) (source: Google Cloud Platform (GCP).md).
- **Sustained Use Discounts (SUD)** â€” automatic discount once a VM runs >25% of the month.
- **Committed Use Discounts (CUD)** â€” up to ~57% off for 1- or 3-year commitments.
- **Preemptible / Spot VMs** â€” up to 80% cheaper for fault-tolerant workloads.
- **Free tier** â€” $300 in credits for new accounts plus always-free quotas across 20+ services.

See [[gcp-pricing-and-discounts]].

## Google Cloud vs Google Cloud Platform

These are not synonyms. **Google Cloud** is the umbrella brand covering Workspace, Android Enterprise, Chrome OS, mapping APIs, **and** GCP. **GCP** specifically refers to the public-cloud infrastructure subset (Compute Engine, GKE, BigQuery, Cloud Storage, etc.) (source: Google Cloud Platform (GCP).md).

## Competitors

Primary public-cloud rivals are **AWS** (largest market share, EC2/S3/RDS), **Microsoft Azure** (strong enterprise/Microsoft integration), and **IBM Cloud** (hybrid focus) (source: Google Cloud Platform (GCP).md).

## Use cases

E-commerce (autoscaling under load), media/entertainment (low-latency global delivery), financial services (security/compliance), healthcare (patient data) (source: Google Cloud Platform (GCP).md).

## Open APIs and avoiding lock-in

GCP intentionally builds on open-source interfaces â€” Cloud Bigtable speaks the Apache HBase API, Dataproc runs managed Hadoop/Spark â€” so customers can move workloads off GCP if needed (source: Google Cloud Platform (GCP).md).

## Interesting Facts

- Google was the **first major cloud provider to bill VMs by the second** rather than rounding to the hour (source: Google Cloud Platform (GCP).md).
- GCP was launched in 2008, but its underpinning infrastructure dates to Google Search in 1998 (source: Google Cloud Platform (GCP).md).
- Cloud Functions Gen 2 is implemented on top of Cloud Run + Eventarc, blurring the FaaS/CaaS line ([cloud.google.com blog](https://cloud.google.com/blog/products/serverless/cloud-functions-2nd-generation-now-generally-available)).

## Interview Questions can be asked

1. Explain the difference between Google Cloud and Google Cloud Platform.
2. Walk through the five GCP compute options and when you'd pick each.
3. What are SUDs, CUDs, and preemptible/spot VMs?
4. How does GCP avoid vendor lock-in for big-data workloads?
5. Compare GCP and AWS at the level of compute, storage, and ML services.

## Related pages

> [!multi-column]
>
>> [!card] Foundations
>> [[regions-and-zones|Regions and Zones]], [[service-models|Service Models]], [[gcp-pricing-and-discounts|GCP Pricing + Discounts]]
>
>
>> [!card] Compute
>> [[../compute/gcp-compute-services|GCP Compute Services]]
>
>
>> [!card] Sister cloud platforms
>> [[../../aws/aws|AWS]], [[../../azure/azure|Azure]], [[../../databricks/databricks|Databricks]]
>
>
>> [!card] Certifications
>> [[../certifications/professional-data-engineer|Professional Data Engineer]]
>
>
>> [!card] People
>> [[../../people/jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]]

