---
title: Object Storage
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Object Storage
  - Blob Storage
  - Data Stores
category: Computer Science
tags:
  - DataEngineering
  - Storage
  - Tools
banner:
publish: true
---

---

**Object storage** (a.k.a. blob storage) is **massive, cheap, durable storage** for unstructured/structured files. The foundation of every modern data lake (source: Tools/Data Stores/*.md).

## What it is

- Files stored as **objects** in **buckets / containers**.
- Each object has a **key**, **payload (bytes)**, and **metadata**.
- Accessed via REST API (`PUT`, `GET`, `DELETE`, `LIST`).
- **Eventually consistent** historically; modern services are strongly consistent.
- **No filesystem semantics** (no rename, no append in most services — though some emulate).

## The big three

### Amazon S3

The **original** cloud object store (2006). Industry standard; nearly every data tool integrates.

**Storage classes**:

- **Standard** — frequent access, hot data.
- **Intelligent-Tiering** — auto-moves between hot + cold based on access.
- **Standard-IA** (Infrequent Access).
- **One Zone-IA**.
- **Glacier Instant Retrieval** — archive with ms retrieval.
- **Glacier Flexible Retrieval** — minutes-to-hours retrieval.
- **Glacier Deep Archive** — 12+ hours retrieval; cheapest.

### Amazon S3 Glacier

Long-term **archival** storage (now part of S3 storage classes). Lowest cost but high retrieval latency.

### Google Cloud Storage

See [[../../gcp/storage/cloud-storage|Cloud Storage]] for the full GCP treatment.

**Storage classes**:

- **Standard** — frequent access.
- **Nearline** — < 1×/month access.
- **Coldline** — < 1×/quarter.
- **Archive** — < 1×/year.

### Azure Blob Storage

Microsoft's object store.

**Tiers**: Hot, Cool, Cold, Archive.

**ADLS Gen2** = Blob Storage + hierarchical namespace (filesystem-like) optimized for analytics.

## Patterns

### Data lake foundation

Object storage + Parquet/Iceberg/Delta = data lake / lakehouse.

### Lifecycle policies

Automatic transitions between tiers based on age:

```
day 0:   Standard
day 30:  Nearline
day 90:  Coldline
day 365: Archive
day 1825: Delete
```

### Eventing

S3 Event Notifications / GCS Pub/Sub Notifications / Azure Event Grid → trigger functions on object creation/deletion.

### Versioning

Keep historical versions; protect against accidental deletes / overwrites.

### Object Lock / WORM

Compliance feature — once written, can't be deleted/modified for a retention period (FINRA, SEC).

## Performance + best practices

- **Avoid sequential keys** — `2026-04-29-001`, `…002` causes hot-spotting on a single shard. Add a hash prefix or randomize.
- **Right object size** — too small (millions of small files) = slow listing + read overhead. ~250 MB is a good batch size.
- **Use Parquet/ORC** for analytics — see [[file-formats|File Formats]].
- **Choose region carefully** — egress is expensive.
- **Multi-region** for resilience; single-region for cost.

## On-prem / private object storage

- **MinIO** — S3-compatible self-hosted.
- **Ceph** — open-source, on-prem object storage.
- **Wasabi**, **Backblaze B2** — alternative cloud providers (cheaper egress).

## Decision matrix

| Need | Pick |
| --- | --- |
| AWS-native data lake | **S3** |
| GCP-native | **Cloud Storage** |
| Azure-native | **Blob Storage / ADLS Gen2** |
| Multi-cloud / private | **MinIO / Ceph** |
| Lower egress costs | **Wasabi / B2** |
| Long-term archive | **S3 Glacier / GCS Archive / Azure Archive** |

## Related pages

> [!multi-column]
>
>> [!card] Data Storage
>> [[../concepts/data-storage/data-storage|Data Storage]]
>
>
>> [!card] Data Architecture
>> [[../concepts/data-architecture/data-lake|Data Lake]], [[../concepts/data-architecture/medallion-architecture|Medallion Architecture]]
>
>
>> [!card] Sister catalogs
>> [[file-formats|File Formats]], [[databases-overview|Databases]]
>
>
>> [!card] Products
>> [[../../gcp/storage/cloud-storage|Cloud Storage]], [[../../aws/aws|AWS]], [[../../azure/azure|Azure]]

