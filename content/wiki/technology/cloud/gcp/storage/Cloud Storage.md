---
title: Cloud Storage
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - GCS
  - Google Cloud Storage
  - Object Storage
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Storage
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Storage
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Object storage |
> | **Category** | Storage |
> | **Launched** | 2010 (GA May 2010) |
> | **Interface** | REST API, gsutil/gcloud CLI, client libraries |
> | **Website** | cloud.google.com/storage |

---

> "Sometimes good things fall apart so better things can fall together."
> <cite>— Marilyn Monroe</cite>

---

<span class="at-kicker">Object Storage · Google Cloud</span>
# Cloud Storage
<p class="at-lead">Google Cloud Storage is GCP's durable, scalable object storage service — the standard place to put unstructured data: images, video, backups, logs, datasets for analytics or ML.</p>
<span class="at-stat">11 9s</span> durability · <span class="at-stat">4</span> storage classes · <span class="at-stat">global</span> edge CDN integration &nbsp;·&nbsp; <span class="at-mark">the universal storage layer — every GCP service reads and writes here</span>

<span class="at-kicker">How It Works</span>
## Overview

GCS organises data into **buckets** (globally unique names, region/multi-region scope) containing **objects** (immutable blobs with metadata). Data is accessed via a single REST API and inherits 11 nines (99.999999999%) durability from Google's Colossus infrastructure.

## Storage classes

Choose the class based on access frequency (source: Cloud Storage in GCP.md):

| Class | Best for | Availability | Price/GB | Retrieval fee |
| --- | --- | --- | --- | --- |
| **Standard** | Frequently accessed | 99.95% | $0.020 | None |
| **Nearline** | ≤ once / month | 99.90% | $0.010 | Low |
| **Coldline** | ≤ once / year | 99.00% | $0.004 | Medium |
| **Archive** | Long-term archive (8+ yrs) | 99.00% | $0.0012 | High |

All classes have **millisecond first-byte latency** except Archive (hours-long retrieval).

## Location types

- **Region** — single GCP region (e.g. `us-central1`); cheapest, lowest latency for that region.
- **Dual-region** — two specific regions; higher availability, higher cost.
- **Multi-region** — one of `US`, `EU`, `ASIA`; data replicated across **at least two locations 160+ km apart** (source: Google Cloud Platform (GCP).md). See [[regions-and-zones]].

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **IAM Security**
>> Fine-grained role-based access at project, bucket, and object level. Control who can read, write, and administer your data with GCP's unified identity system.
>
>> [!card|section]
>> **Encryption**
>> Default at rest + in transit; optional **CMEK** (Customer-Managed Encryption Keys via Cloud KMS) and **CSEK** (Customer-Supplied Encryption Keys) for compliance.
>
>> [!card|section]
>> **Bucket Lock & Object Holds**
>> Enforce retention policies; prevent accidental or malicious deletion. WORM (Write Once Read Many) compliance for regulatory data.
>
>> [!card|section]
>> **Audit Logs**
>> Every API call recorded for GDPR / HIPAA / SOC 2 compliance. Complete activity trail for security analysis.
>
>> [!card|section]
>> **Lifecycle Management**
>> Define rules to automatically transition or delete objects. Move Standard → Nearline after 30 days, Nearline → Archive after 365 days, delete after N years.
>
>> [!card|section]
>> **Object Versioning**
>> Enable on a bucket to keep prior versions on overwrite/delete — recovery from accidental writes without downtime.

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Analytics & ML**
>> Strongly consistent reads suit BigQuery and Vertex AI input. Store training datasets, model artifacts, and inference results in one unified location.
>
>> [!card|section]
>> **Media Delivery**
>> High throughput integrates with Cloud CDN. Serve images, videos, and static content globally with low latency.
>
>> [!card|section]
>> **Backups & Archives**
>> Single API for hot and cold tiers. Disaster recovery with lifecycle policies that auto-tier cold data.
>
>> [!card|section]
>> **Static Site Hosting**
>> Public buckets with custom domains. Host entire websites directly from GCS with HTTPS support.
>
>> [!card|section]
>> **Data Lake Foundation**
>> Combined with Dataplex / BigLake. Store structured and unstructured data for enterprise analytics pipelines.

## Best practices

1. **Enable lifecycle management** — auto-tier cold data to save money.
2. **Enable versioning** on critical buckets.
3. **Pick location type by access pattern** — multi-region for global users, regional for compute-colocation.
4. **Use Storage Transfer Service** for bulk migrations from S3, Azure Blob, or on-prem.
5. **Use signed URLs** for time-bound delegated access.
6. **Apply retention policies + Bucket Lock** for regulatory data.

## Strengths

- **Strongly consistent** — read-after-write globally for new objects.
- **One API** across all storage classes — no archive-specific tooling.
- **Cheap durability** — 11 nines stated durability, 8+ year archive retention.
- **Tight integration** with Cloud Functions, BigQuery, Pub/Sub, Vertex AI.

## Object immutability and design principles

- **Objects are immutable** — "updating" an object actually replaces it with a new version. Enable object versioning to preserve history (source: Google Cloud Platform - Cloud Storage.md).
- **Favour object-level operations over bucket-level**. Bucket ops (create/delete, policy changes) are heavyweight and rate-limited; object ops (metadata updates, signed URLs, HTTP header overrides) scale efficiently (source: Google Cloud Platform - Cloud Storage.md).
- **Bucket names are globally unique** across all of GCP and must be empty to delete (source: Google Cloud Platform - Cloud Storage.md).

## Firebase layer

For mobile/web apps you can layer [[firebase-cloud-storage]] on top of the same GCS bucket — it adds client SDKs, resumable uploads, and **Firebase Security Rules** evaluated at the edge.

## Storage backend lineage

GCS is backed by **Colossus**, the internal distributed file system that succeeded [[google-file-system]] (GFS) in 2010. Compute-storage separation, automatic replication, and metadata-only node state all trace to the GFS design.

## Trade-offs

- **Egress is expensive** — moving lots of data out of GCP costs $0.12/GB+ (source: Google Cloud Platform (GCP).md).
- **Object storage ≠ filesystem** — no random writes within an object; use [[filestore]] or [[persistent-disk]] for those workloads.

## Interesting Facts

- Multi-region buckets enforce a **minimum 160 km separation** between replicas — derived from disaster-recovery best practice (source: Google Cloud Platform (GCP).md).
- All four storage classes use the **same API and same first-byte latency** (except Archive) — you don't restructure your code to access cold data (source: Cloud Storage in GCP.md).

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD STORAGE
>> # From *files* to *globally durable objects*.
>> Create a bucket, upload your objects, and configure lifecycle rules for automated cost optimization.
>
>> [!card|step]
>> ###### Step 01
>> ### *Create* bucket.
>> Choose your location (regional for compute colocation, multi-region for global access). Bucket names are globally unique across all of GCP.
>
>> [!card|step]
>> ###### Step 02
>> ### *Upload* objects.
>> Use gsutil, REST API, or client libraries. Objects are immutable — updates create new versions. Enable versioning for history preservation.
>
>> [!card|step]
>> ###### Step 03
>> ### *Set* lifecycle rules.
>> Automatically tier data to colder storage classes after specified durations. Move Standard → Nearline → Coldline → Archive based on access patterns.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] Foundations
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../foundations/regions-and-zones|Regions and Zones]], [[../foundations/gcp-pricing-and-discounts|GCP Pricing and Discounts]]
>
>
>> [!card] Sister storage products
>> [[persistent-disk|Persistent Disk]], [[filestore|Filestore]], [[firebase-cloud-storage|Firebase Cloud Storage]], [[google-file-system|Google File System]]
>
>
>> [!card] Data Architecture
>> [[../../../data-engineering/data-architecture/data-lake|Data Lake]]
>
>
>> [!card] Tools
>> [[../../../tools/object-storage|Object Storage Catalog]], [[../../../tools/file-formats|File Formats]]
>
>
>> [!card] People
>> [[../../../../people/jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]]
