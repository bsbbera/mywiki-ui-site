---
title: Storage Transfer Service
created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 6:00:00 pm
aliases:
  - STS
  - GCS Transfer Service
category: GCP
tags:
  - gcp
  - cloud
  - storage
banner:
publish: true
---

> [!infobox|right]
> # Storage Transfer Service
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed data transfer service |
> | **Category** | Storage |
> | **Launched** | 2016 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/storage-transfer-service

---

> "Data gravity is real. Move your data with intelligence, not brute force."
> <cite>— Google Cloud Data Transfer Engineering</cite>

---

Storage Transfer Service (STS) is Google's **fully managed, highly scalable data transfer solution** designed to move large volumes of data into Google Cloud Storage efficiently and securely. STS handles the complexity of bulk data migration from multiple source types including AWS S3, Azure Blob Storage, other GCS buckets, and on-premises filesystems through a dedicated transfer agent.

The service is engineered for **petabyte-scale migrations**, automatically optimizing transfer throughput, handling network interruptions with resume capability, and providing detailed transfer logging for compliance and auditing. STS eliminates the need for manual scripting or maintenance of transfer infrastructure.

## Overview

Storage Transfer Service operates through **transfer jobs** that define source, destination, and operational parameters. Jobs can execute once (on-demand) or run on recurring schedules for ongoing synchronization scenarios. The service intelligently transfers only changed or new data after the initial sync, minimizing subsequent transfer costs and duration.

## Key Features

| Feature | Description |
|---------|-------------|
| **Multi-source Support** | AWS S3, Azure Blob, GCS, HTTP/HTTPS URLs, on-prem filesystems |
| **Transfer Agents** | POSIX-compliant agent for on-premises NAS/SAN migration |
| **Scheduling** | One-time, daily, or custom cron-based scheduling |
| **Filtering** | Include/exclude patterns based on file names, dates, sizes |
| **Bandwidth Throttling** | Control transfer rates to avoid network saturation |
| **Integrity Verification** | MD5/ CRC32C checksums ensure data fidelity |
| **Event Notifications** | Pub/Sub integration for transfer completion alerts |

## Use Cases

- **Cloud Repatriation** — Migrate data from AWS S3 or Azure Blob to GCS
- **Multi-cloud Strategy** — Consolidate data from multiple cloud providers
- **On-premises Migration** — Move NAS/SAN data to cloud object storage
- **Backup Archival** — Scheduled transfers of backup data to cold storage classes
- **Data Lake Hydration** — Bulk ingest of datasets for analytics pipelines
- **Disaster Recovery** — Cross-region or cross-cloud data replication

## Transfer Agent

For on-premises sources, STS provides a **Transfer Agent** — a lightweight containerized application deployed on local infrastructure. The agent:
- Scans local filesystems and streams data directly to GCS
- Supports parallel transfers for optimal throughput
- Encrypts data in transit using TLS 1.3
- Resumes interrupted transfers automatically
- Provides POSIX metadata preservation (permissions, timestamps)

## Pricing

Storage Transfer Service pricing includes:
- **Operation Costs**: Per-GB pricing varies by source location and destination
- **AWS/Azure Egress**: Standard data transfer out charges from source clouds apply
- **Cross-region GCS**: Standard cross-region replication costs within GCP
- **Premium Tier**: Optional for enhanced throughput and dedicated bandwidth

Operations within the same region are typically free; cross-region and cross-cloud transfers incur standard rates.

## Related pages

> [!grid]
>
>> [!card] GCP Storage
>> [[Cloud Storage]], [[persistent-disk]], [[filestore]], [[backup-and-dr]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
