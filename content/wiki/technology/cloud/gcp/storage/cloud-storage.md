---
title: Cloud Storage
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 9:28:50 pm
aliases:
  - GCS
  - Google Cloud Storage
  - Object Storage
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Storage
banner:
dg-publish: true
publish: true
---

---

Google Cloud Storage (GCS) is GCP's **object storage** service â€” durable, scalable, region-independent, and accessed via a single REST API. It is the standard place to put unstructured data: images, video, backups, logs, datasets for analytics or ML (source: Cloud Storage in GCP.md).

GCS organises data into **buckets** (globally unique names, region/multi-region scope) containing **objects** (immutable blobs with metadata).

## Storage classes

Choose the class based on access frequency (source: Cloud Storage in GCP.md):

| Class | Best for | Availability | Price/GB | Retrieval fee |
| --- | --- | --- | --- | --- |
| **Standard** | Frequently accessed | 99.95% | $0.020 | None |
| **Nearline** | â‰¤ once / month | 99.90% | $0.010 | Low |
| **Coldline** | â‰¤ once / year | 99.00% | $0.004 | Medium |
| **Archive** | Long-term archive (8+ yrs) | 99.00% | $0.0012 | High |

All classes have **millisecond first-byte latency** except Archive (hours-long retrieval).

## Location types

- **Region** â€” single GCP region (e.g. `us-central1`); cheapest, lowest latency for that region.
- **Dual-region** â€” two specific regions; higher availability, higher cost.
- **Multi-region** â€” one of `US`, `EU`, `ASIA`; data replicated across **at least two locations 160+ km apart** (source: Google Cloud Platform (GCP).md). See [[regions-and-zones]].

## Security

GCS ships enterprise-grade controls (source: Cloud Storage in GCP.md):

- **IAM** â€” fine-grained role-based access at project, bucket, and object level.
- **Encryption** â€” default at rest + in transit; optional **CMEK** (Customer-Managed Encryption Keys via Cloud KMS) and **CSEK** (Customer-Supplied Encryption Keys).
- **Bucket Lock & Object Holds** â€” enforce retention; prevent accidental or malicious deletion.
- **Audit Logs** â€” every API call recorded for GDPR / HIPAA / SOC 2 compliance.

## Lifecycle management

Define rules to automatically transition or delete objects:

- Move objects from Standard â†’ Nearline after 30 days.
- From Nearline â†’ Archive after 365 days.
- Delete after N years.

This is the cheapest way to manage long-tail data (source: Cloud Storage in GCP.md).

## Versioning

Enable on a bucket to keep prior versions on overwrite/delete â€” recovery from accidental writes without downtime (source: Cloud Storage in GCP.md).

## Use cases

- **Analytics & ML** â€” strongly consistent reads suit BigQuery and Vertex AI input.
- **Media delivery** â€” high throughput, integrates with Cloud CDN.
- **Backups & archives** â€” single API for hot and cold tiers.
- **Static-site hosting** â€” public buckets with custom domains.
- **Data lake** â€” combined with Dataplex / BigLake.

(source: Cloud Storage in GCP.md)

## Best practices

1. **Enable lifecycle management** â€” auto-tier cold data to save money.
2. **Enable versioning** on critical buckets.
3. **Pick location type by access pattern** â€” multi-region for global users, regional for compute-colocation.
4. **Use Storage Transfer Service** for bulk migrations from S3, Azure Blob, or on-prem.
5. **Use signed URLs** for time-bound delegated access.
6. **Apply retention policies + Bucket Lock** for regulatory data.

(source: Cloud Storage in GCP.md)

## Strengths

- **Strongly consistent** â€” read-after-write globally for new objects.
- **One API** across all storage classes â€” no archive-specific tooling.
- **Cheap durability** â€” 11 nines stated durability, 8+ year archive retention.
- **Tight integration** with Cloud Functions, BigQuery, Pub/Sub, Vertex AI.

## Object immutability and design principles

- **Objects are immutable** â€” "updating" an object actually replaces it with a new version. Enable object versioning to preserve history (source: Google Cloud Platform - Cloud Storage.md).
- **Favour object-level operations over bucket-level**. Bucket ops (create/delete, policy changes) are heavyweight and rate-limited; object ops (metadata updates, signed URLs, HTTP header overrides) scale efficiently (source: Google Cloud Platform - Cloud Storage.md).
- **Bucket names are globally unique** across all of GCP and must be empty to delete (source: Google Cloud Platform - Cloud Storage.md).

## Firebase layer

For mobile/web apps you can layer [[firebase-cloud-storage]] on top of the same GCS bucket â€” it adds client SDKs, resumable uploads, and **Firebase Security Rules** evaluated at the edge.

## Storage backend lineage

GCS is backed by **Colossus**, the internal distributed file system that succeeded [[google-file-system]] (GFS) in 2010. Compute-storage separation, automatic replication, and metadata-only node state all trace to the GFS design.

## Trade-offs

- **Egress is expensive** â€” moving lots of data out of GCP costs $0.12/GB+ (source: Google Cloud Platform (GCP).md).
- **Object storage â‰  filesystem** â€” no random writes within an object; use [[filestore]] or [[persistent-disk]] for those workloads.

## Interesting Facts

- Multi-region buckets enforce a **minimum 160 km separation** between replicas â€” derived from disaster-recovery best practice (source: Google Cloud Platform (GCP).md).
- All four storage classes use the **same API and same first-byte latency** (except Archive) â€” you don't restructure your code to access cold data (source: Cloud Storage in GCP.md).

## Interview Questions can be asked

1. When pick GCS vs [[persistent-disk]] vs [[filestore]]?
2. Walk through the four storage classes and pricing trade-offs.
3. CMEK vs CSEK â€” which would you choose and why?
4. How would you design a 7-year archive policy with cost optimization?
5. Difference between bucket-level vs object-level IAM.

## Related pages

> [!multi-column]
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
>> [[../../data-engineering/concepts/data-architecture/data-lake|Data Lake]]
>
>
>> [!card] Tools
>> [[../../data-engineering/tools/object-storage|Object Storage Catalog]], [[../../data-engineering/tools/file-formats|File Formats]]
>
>
>> [!card] People
>> [[../../people/jeff-dean-sanjay-ghemawat|Jeff Dean + Sanjay Ghemawat]]

