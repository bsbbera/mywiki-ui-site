---
title: Google Cloud Platform
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - GCP
  - Google Cloud
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - DataEngineering
banner: https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Google Cloud Platform
> ###### Cloud Platform
> | | |
> | --- | --- |
> | **Provider** | Google |
> | **Type** | Public cloud platform |
> | **Category** | Cloud |
> | **Launched** | 2008 |
> | **Interface** | Cloud Console, gcloud CLI, REST APIs |
> | **Website** | cloud.google.com |

---

> "The strongest and sweetest songs yet remain to be sung."
> <cite>— Walt Whitman</cite>

---

<span class="at-kicker">Cloud Platform · Google</span>
# Google Cloud Platform
<p class="at-lead">Google Cloud Platform (GCP) is Google's public cloud offering: a portfolio of compute, storage, networking, data, and AI services built on the same global infrastructure that powers Google Search, Gmail, and YouTube.</p>
<span class="at-stat">200+</span> services · <span class="at-stat">40+</span> regions · <span class="at-stat">trusted by 90%</span> of Fortune 500 &nbsp;·&nbsp; <span class="at-mark">built on the same infrastructure that runs Google Search, Gmail, and YouTube</span>

<span class="at-kicker">How It Works</span>
## Overview

GCP exposes resources to businesses and developers via three primary surfaces — the **Cloud Console** (web UI), the **gcloud CLI** (terminal/Cloud Shell), and **client libraries / REST APIs** for programmatic access (source: Google Cloud Platform (GCP).md).

GCP began in 2008 when Google opened its consumer-grade infrastructure to enterprise customers, and the platform expanded with BigQuery (2010), Cloud Storage (2013), Compute Engine (2014), and Google Kubernetes Engine (2014) (source: Google Cloud Platform (GCP).md).

## Pillars

- **Compute** — see [[compute-engine]], [[app-engine]], [[kubernetes-engine]], [[cloud-run]], [[cloud-functions]]. Full taxonomy: [[gcp-compute-services]].
- **Storage** — see [[Cloud Storage]], [[persistent-disk]], [[filestore]].
- **Networking** — Virtual Private Cloud (VPC), Cloud Load Balancing, Cloud CDN (source: Features of GCP.md).
- **Data & Analytics** — BigQuery, Dataflow, Pub/Sub, Dataproc (source: Google Cloud Platform (GCP).md). Stub pages.
- **ML & AI** — Vertex AI, AutoML, AI Platform Training/Prediction (source: Google Cloud Platform (GCP).md).
- **Identity & Security** — IAM, encryption at rest and in transit, VPC Service Controls, Identity-Aware Proxy (source: Google Cloud Platform (GCP).md).

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Global Infrastructure**
>> 43 regions and 130 zones worldwide as of 2025. Deploy applications close to users anywhere on earth.
>
>> [!card|section]
>> **Per-Second Billing**
>> First major cloud to bill by the second, not hour. Save money for workloads with variable runtimes.
>
>> [!card|section]
>> **Automatic Discounts**
>> Sustained Use Discounts apply automatically. No upfront commitment for long-running VM savings.
>
>> [!card|section]
>> **Open APIs**
>> Built on open-source interfaces. Cloud Bigtable speaks HBase API, Dataproc runs managed Hadoop/Spark.
>
>> [!card|section]
>> **Serverless Options**
>> Cloud Functions, Cloud Run, and App Engine for zero-to-scale compute. Focus on code, not infrastructure.
>
>> [!card|section]
>> **Enterprise Security**
>> Same security model that protects Google Search and Gmail. Encryption at rest and in transit by default.

## Global infrastructure

GCP is organized into [[regions-and-zones]]. As of 2025 GCP operates **43 regions and 130 zones** worldwide ([cloud.google.com/about/locations](https://cloud.google.com/about/locations)) — the raw sources predate this and report only "15 regions" (source: Google Cloud Platform (GCP).md), so treat the legacy figures as outdated.

## Service models

GCP spans the standard cloud taxonomy — see [[service-models]]:

- **IaaS** — Compute Engine, Cloud Storage
- **PaaS** — App Engine, Cloud SQL
- **SaaS** — Google Workspace, Google Maps Platform
- **FaaS / serverless** — Cloud Functions, Cloud Run

## Pricing model

- **Per-second billing** for VMs (a Google differentiator vs. hour-rounded competitors) (source: Google Cloud Platform (GCP).md).
- **Sustained Use Discounts (SUD)** — automatic discount once a VM runs >25% of the month.
- **Committed Use Discounts (CUD)** — up to ~57% off for 1- or 3-year commitments.
- **Preemptible / Spot VMs** — up to 80% cheaper for fault-tolerant workloads.
- **Free tier** — $300 in credits for new accounts plus always-free quotas across 20+ services.

See [[gcp-pricing-and-discounts]].

## Google Cloud vs Google Cloud Platform

These are not synonyms. **Google Cloud** is the umbrella brand covering Workspace, Android Enterprise, Chrome OS, mapping APIs, **and** GCP. **GCP** specifically refers to the public-cloud infrastructure subset (Compute Engine, GKE, BigQuery, Cloud Storage, etc.) (source: Google Cloud Platform (GCP).md).

## Competitors

Primary public-cloud rivals are **AWS** (largest market share, EC2/S3/RDS), **Microsoft Azure** (strong enterprise/Microsoft integration), and **IBM Cloud** (hybrid focus) (source: Google Cloud Platform (GCP).md).

<span class="at-kicker">Real-World Applications</span>
## Use cases

> [!grid|cols2]
>
>> [!card|section]
>> **E-commerce**
>> Autoscaling under load for seasonal traffic. Handle Black Friday traffic without over-provisioning year-round.
>
>> [!card|section]
>> **Media/Entertainment**
>> Low-latency global delivery via Cloud CDN. Stream video to audiences worldwide from edge locations.
>
>> [!card|section]
>> **Financial Services**
>> Security and compliance for regulated workloads. Meet PCI-DSS, SOC 2, and other requirements.
>
>> [!card|section]
>> **Healthcare**
>> Patient data protection with HIPAA compliance. Secure infrastructure for sensitive health information.

(source: Google Cloud Platform (GCP).md)

## Open APIs and avoiding lock-in

GCP intentionally builds on open-source interfaces — Cloud Bigtable speaks the Apache HBase API, Dataproc runs managed Hadoop/Spark — so customers can move workloads off GCP if needed (source: Google Cloud Platform (GCP).md).

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

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · GOOGLE CLOUD PLATFORM
>> # From *on-premises* to *Google Cloud*.
>> Set up your organization and projects, enable required APIs, and configure IAM and billing for secure operations.
>
>> [!card|step]
>> ###### Step 01
>> ### *Set up* organization & projects.
>> Create a GCP organization hierarchy with folders for teams or environments. Establish project isolation for billing and access control.
>
>> [!card|step]
>> ###### Step 02
>> ### *Enable* required APIs.
>> Enable service APIs for each product you plan to use. APIs are disabled by default for security and cost control.
>
>> [!card|step]
>> ###### Step 03
>> ### *Configure* IAM & billing.
>> Assign least-privilege roles to users and service accounts. Set up billing alerts and budgets to monitor spend.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
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
>> [[AWS|AWS]], [[../../azure/azure|Azure]], [[../../databricks/databricks|Databricks]]
>
>
>> [!card] Certifications
>> [[Professional Data Engineer|Professional Data Engineer]]
>
>
>> [!card] People
>> [[../../../../people/jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]]
