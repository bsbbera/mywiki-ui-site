---
title: Persistent Disk
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - PD
  - GCP Block Storage
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
> # Persistent Disk
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Network-attached block storage |
> | **Category** | Storage |
> | **Launched** | 2013 (GA with Compute Engine) |
> | **Interface** | gcloud CLI, console, REST API |
> | **Website** | cloud.google.com/persistent-disk

---

> "Quality is not an act, it is a habit."
> <cite>— Colin R. Davis</cite>

---

<span class="at-kicker">Block Storage · Google Cloud</span>
# Persistent Disk
<p class="at-lead">Persistent Disk is GCP's block storage service for Compute Engine VMs and Kubernetes pods. Network-attached, durable, highly available block devices that survive the VM they are attached to.</p>
<span class="at-stat">Standard</span> + <span class="at-stat">Balanced</span> + <span class="at-stat">SSD</span> + <span class="at-stat">Extreme</span> · <span class="at-stat">multi-reader</span> attach · <span class="at-stat">snapshots</span> &nbsp;·&nbsp; <span class="at-mark">the default block storage for every Compute Engine VM</span>

<span class="at-kicker">How It Works</span>
## Overview

Persistent Disk (PD) is a network-attached, durable, highly available block device that survives the VM it is attached to (source: Cloud Storage in GCP.md, source: Introduction to Google Compute Engine.md).

Where [[Cloud Storage]] is unstructured object storage and [[filestore]] is shared filesystem storage, Persistent Disk is the equivalent of "an EBS volume" — a raw block device you mount as a filesystem.

## Disk types

- **Standard PD (`pd-standard`)** — HDD-backed; cheap, throughput-oriented. ~$0.048/GB/mo (source: Google Persistent Disk & Google Filestore Services.md).
- **Balanced PD (`pd-balanced`)** — SSD-backed; balances cost and IOPS. ~$0.12/GB/mo.
- **SSD PD (`pd-ssd`)** — high IOPS, low latency for transactional workloads. ~$0.204/GB/mo.
- **Extreme PD (`pd-extreme`)** — highest IOPS for SAP HANA, large databases. Priced on both **space ($0.15/GB) AND provisioned IOPS ($0.078/IOPS)** — the only PD type with IOPS-based billing (source: Google Persistent Disk & Google Filestore Services.md).
- **Hyperdisk Extreme / Throughput** — newer tier for ultra-demanding workloads.
- **Regional PD variants** — synchronous replication across two zones for HA; priced roughly 2× the zonal equivalent (source: Google Persistent Disk & Google Filestore Services.md).
- **Local SSD** — physically attached, ephemeral, lowest latency; **lost on VM stop** (source: Introduction to Google Compute Engine.md).

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Snapshots**
>> Point-in-time backup; can clone or migrate disks across zones/regions. Fast incremental backups for disaster recovery.
>
>> [!card|section]
>> **Resize While Attached**
>> Grow disks without downtime or data loss. Expand storage as your data grows without service interruption.
>
>> [!card|section]
>> **Encryption**
>> Google-managed by default; optional CMEK / CSEK. Meet compliance requirements with customer-managed keys.
>
>> [!card|section]
>> **Multi-attach (Read-only)**
>> Share a disk across VMs for read-only workloads. Distribute static data to multiple compute instances.
>
>> [!card|section]
>> **Regional PD**
>> Synchronously replicated across two zones for HA. Survive zonal failures without data loss.
>
>> [!card|section]
>> **Custom IOPS (Extreme)**
>> Independently provision IOPS from capacity. Fine-tune performance for demanding database workloads.

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **VM Boot Disks**
>> Operating system storage for Compute Engine instances. Persistent OS that survives VM stops and starts.
>
>> [!card|section]
>> **Database Storage**
>> Postgres, MySQL self-hosted on GCE. Block-level storage for transactional database workloads.
>
>> [!card|section]
>> **HPC Scratch Space**
>> High-performance computing temporary storage. Use Local SSD for ephemeral, ultra-low-latency needs.
>
>> [!card|section]
>> **Kubernetes Volumes**
>> StatefulSet volumes in GKE. Persistent storage for containerized stateful applications.

## Trade-offs

- **Zonal by default** — a zone failure takes the disk offline; use regional PD for HA.
- **Single-writer** — read-write attach is to one VM at a time.
- **Pricier per-GB than [[Cloud Storage]]** — only use for data needing block semantics.

## Interesting Facts

- A Persistent Disk can be **resized while live**, then the filesystem expanded online — no maintenance window (source: Cloud Storage in GCP.md).
- Local SSDs are physically attached to the host hardware, so they deliver microsecond-class latency but are wiped on VM stop or live-migrate (source: Introduction to Google Compute Engine.md).

## Interview Questions can be asked

1. PD vs Local SSD — durability and performance trade-offs.
2. How do snapshots work, and how would you use them for disaster recovery?
3. Difference between Standard, Balanced, SSD, and Extreme PD.
4. How would you achieve HA storage for a self-hosted Postgres on GCE?

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · PERSISTENT DISK
>> # From *VM creation* to *persistent boot disk*.
>> Choose the right disk type for your workload, attach it to your VM, and configure snapshot schedules for data protection.
>
>> [!card|step]
>> ###### Step 01
>> ### *Choose* disk type.
>> Standard HDD for throughput, Balanced SSD for general use, SSD for databases, Extreme for highest IOPS. Match performance to workload.
>
>> [!card|step]
>> ###### Step 02
>> ### *Attach* to VM.
>> Boot disks are automatically attached. Additional disks mount as secondary storage. Use regional PD for HA requirements.
>
>> [!card|step]
>> ###### Step 03
>> ### *Create* snapshot schedule.
>> Automated daily or hourly snapshots for backup and disaster recovery. Incremental snapshots minimize storage costs.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] Sister storage products
>> [[Cloud Storage|Cloud Storage]], [[filestore|Filestore]], [[firebase-cloud-storage|Firebase Cloud Storage]]
>
>
>> [!card] Compute
>> [[../compute/compute-engine|Compute Engine]], [[../compute/kubernetes-engine|Kubernetes Engine]]
