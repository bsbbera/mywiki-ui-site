---
title: Persistent Disk
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 9:28:50 pm
aliases:
  - PD
  - GCP Block Storage
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Storage
banner:
publish: true
---

> [!infobox|wikipedia]
> # Persistent Disk
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Network-attached block storage |
> | **Category** | Storage |
> | **Launched** | 2013 (GA with Compute Engine) |
> | **Interface** | gcloud CLI, console, REST API |
> | **Website** | cloud.google.com/persistent-disk |

---

> "Quality is not an act, it is a habit."
> <cite>— Colin R. Davis</cite>

---

Persistent Disk (PD) is GCP's **block storage** service for [[compute-engine]] VMs and [[kubernetes-engine]] pods. It is a network-attached, durable, highly available block device that survives the VM it is attached to (source: Cloud Storage in GCP.md, source: Introduction to Google Compute Engine.md).

Where [[Cloud Storage]] is unstructured object storage and [[filestore]] is shared filesystem storage, Persistent Disk is the equivalent of "an EBS volume" â€” a raw block device you mount as a filesystem.

## Disk types

- **Standard PD (`pd-standard`)** â€” HDD-backed; cheap, throughput-oriented. ~$0.048/GB/mo (source: Google Persistent Disk & Google Filestore Services.md).
- **Balanced PD (`pd-balanced`)** â€” SSD-backed; balances cost and IOPS. ~$0.12/GB/mo.
- **SSD PD (`pd-ssd`)** â€” high IOPS, low latency for transactional workloads. ~$0.204/GB/mo.
- **Extreme PD (`pd-extreme`)** â€” highest IOPS for SAP HANA, large databases. Priced on both **space ($0.15/GB) AND provisioned IOPS ($0.078/IOPS)** â€” the only PD type with IOPS-based billing (source: Google Persistent Disk & Google Filestore Services.md).
- **Hyperdisk Extreme / Throughput** â€” newer tier for ultra-demanding workloads.
- **Regional PD variants** â€” synchronous replication across two zones for HA; priced roughly 2Ã— the zonal equivalent (source: Google Persistent Disk & Google Filestore Services.md).
- **Local SSD** â€” physically attached, ephemeral, lowest latency; **lost on VM stop** (source: Introduction to Google Compute Engine.md).

## Capabilities

- **Snapshots** â€” point-in-time backup; can clone or migrate disks across zones/regions (source: Cloud Storage in GCP.md).
- **Resize while attached** â€” grow disks without downtime or data loss.
- **Encryption** â€” Google-managed by default; optional CMEK / CSEK.
- **Multi-attach** (read-only) â€” share a disk across VMs.
- **Regional PD** â€” synchronously replicated across two zones for HA.

## When to use

- Boot disk for a VM.
- Database storage (Postgres, MySQL self-hosted).
- HPC scratch space (use Local SSD for ephemeral).
- StatefulSet volumes in [[kubernetes-engine]].

(source: Cloud Storage in GCP.md)

## Trade-offs

- **Zonal by default** â€” a zone failure takes the disk offline; use regional PD for HA.
- **Single-writer** â€” read-write attach is to one VM at a time.
- **Pricier per-GB than [[Cloud Storage]]** â€” only use for data needing block semantics.

## Interesting Facts

- A Persistent Disk can be **resized while live**, then the filesystem expanded online â€” no maintenance window (source: Cloud Storage in GCP.md).
- Local SSDs are physically attached to the host hardware, so they deliver microsecond-class latency but are wiped on VM stop or live-migrate (source: Introduction to Google Compute Engine.md).

## Interview Questions can be asked

1. PD vs Local SSD â€” durability and performance trade-offs.
2. How do snapshots work, and how would you use them for disaster recovery?
3. Difference between Standard, Balanced, SSD, and Extreme PD.
4. How would you achieve HA storage for a self-hosted Postgres on GCE?

## Related pages

> [!multi-column]
>
>> [!card] Sister storage products
>> [[Cloud Storage|Cloud Storage]], [[filestore|Filestore]], [[firebase-cloud-storage|Firebase Cloud Storage]]
>
>
>> [!card] Compute
>> [[../compute/compute-engine|Compute Engine]], [[../compute/kubernetes-engine|Kubernetes Engine]]

