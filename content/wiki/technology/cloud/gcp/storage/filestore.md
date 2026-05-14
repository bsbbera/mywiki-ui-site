---
title: Filestore
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 9:28:50 pm
aliases:
  - Cloud Filestore
  - GCP NFS
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Storage
banner:
dg-publish: true
---

---

Google Cloud Filestore is GCP's **managed network file storage** â€” fully managed NFS shares for [[compute-engine]] VMs, [[kubernetes-engine]] pods, and on-prem clients (source: Cloud Storage in GCP.md).

Use Filestore when multiple compute instances need **shared filesystem semantics** (POSIX, mountable path) â€” something [[cloud-storage]] (object) and [[persistent-disk]] (single-writer block) cannot offer.

## Tiers

| Tier | Capacity | Throughput | IOPS | Price /GB/mo |
| --- | --- | --- | --- | --- |
| **Basic HDD** | 1â€“63.9 TiB | 180 MB/s | 1,000 | $0.24 |
| **Basic SSD** | 2.5â€“63.9 TiB | 1.2 GB/s | 60,000 | $0.36 |
| **High Scale / Zonal SSD** | 10â€“100 TiB | **26 GB/s** | **960,000** | $0.36 |
| **Enterprise** | 1â€“10 TiB | 1.2 GB/s | 57,000 | $0.72 |

Enterprise tier offers a **99.99% regional availability SLA** (source: Google Persistent Disk & Google Filestore Services.md).

(source: Cloud Storage in GCP.md, source: Google Persistent Disk & Google Filestore Services.md)

## Features

- **NFSv3** mountable from any VM in the VPC.
- **Automatic snapshots** for backup and rollback.
- **High availability** â€” Enterprise tier offers regional redundancy.
- **In-VPC private access** â€” no public exposure.

## Use cases

- Media rendering pipelines.
- Content management systems.
- Analytics workloads needing shared scratch.
- Lift-and-shift apps that expect a POSIX shared mount.
- Persistent volumes shared across [[kubernetes-engine]] pods (ReadWriteMany).

(source: Cloud Storage in GCP.md)

## Storage type comparison

| | [[cloud-storage]] | [[persistent-disk]] | Filestore |
| --- | --- | --- | --- |
| Model | Object | Block | File (NFS) |
| Sharing | Many readers/writers | Single writer (mostly) | Many readers/writers |
| Random write | No | Yes | Yes |
| Latency | ms (Std) / hrs (Archive) | sub-ms | sub-ms |
| Best for | Unstructured data, backups | DB, OS disks | Shared filesystems |

## Interesting Facts

- Filestore Premium delivers **1.2 GB/s per share** â€” comparable to a high-end on-prem NAS, but managed (source: Cloud Storage in GCP.md).
- It speaks plain **NFSv3**, so existing on-prem clients can mount it with zero code changes.

## Interview Questions can be asked

1. When pick Filestore over [[cloud-storage]] or [[persistent-disk]]?
2. Standard vs Premium tier â€” what drives the choice?
3. How would you mount Filestore in a [[kubernetes-engine]] StatefulSet?

## Related pages

> [!multi-column]
>
>> [!card] Sister storage products
>> [[cloud-storage|Cloud Storage]], [[persistent-disk|Persistent Disk]]
>
>
>> [!card] Compute
>> [[../compute/compute-engine|Compute Engine]], [[../compute/kubernetes-engine|Kubernetes Engine]]

