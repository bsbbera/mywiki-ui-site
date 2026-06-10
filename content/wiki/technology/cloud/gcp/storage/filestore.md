---
title: Filestore
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Cloud Filestore
  - GCP NFS
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
> # Filestore
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed NFS file storage |
> | **Category** | Storage |
> | **Launched** | 2018 (GA Nov 2018) |
> | **Interface** | NFSv3, gcloud CLI, console, REST API |
> | **Website** | cloud.google.com/filestore

---

> "The strongest and sweetest songs yet remain to be sung."
> <cite>— Walt Whitman</cite>

---

<span class="at-kicker">Managed NFS · Google Cloud</span>
# Filestore
<p class="at-lead">Google Cloud Filestore is GCP's fully managed NFS shares for Compute Engine VMs, Kubernetes pods, and on-prem clients. Use Filestore when multiple compute instances need shared filesystem semantics — something object storage and block storage cannot offer.</p>
<span class="at-stat">NFS v3</span> + <span class="at-stat">v4.1</span> · <span class="at-stat">Basic</span> + <span class="at-stat">Zonal</span> + <span class="at-stat">Enterprise</span> tiers · <span class="at-stat">100 TB</span> capacity &nbsp;·&nbsp; <span class="at-mark">fully managed NFS — lift-and-shift file workloads without re-architecting</span>

<span class="at-kicker">How It Works</span>
## Overview

Filestore provides **shared filesystem semantics** (POSIX, mountable path) for workloads requiring traditional NFS access. Unlike [[Cloud Storage]] which is object-based, or [[persistent-disk]] which is block-based with single-writer semantics, Filestore allows many readers and writers to access the same filesystem simultaneously via standard NFS protocols.

## Tiers

| Tier | Capacity | Throughput | IOPS | Price /GB/mo |
| --- | --- | --- | --- | --- |
| **Basic HDD** | 1–63.9 TiB | 180 MB/s | 1,000 | $0.24 |
| **Basic SSD** | 2.5–63.9 TiB | 1.2 GB/s | 60,000 | $0.36 |
| **High Scale / Zonal SSD** | 10–100 TiB | **26 GB/s** | **960,000** | $0.36 |
| **Enterprise** | 1–10 TiB | 1.2 GB/s | 57,000 | $0.72 |

Enterprise tier offers a **99.99% regional availability SLA** (source: Google Persistent Disk & Google Filestore Services.md).

(source: Cloud Storage in GCP.md, source: Google Persistent Disk & Google Filestore Services.md)

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **NFSv3 & v4.1 Support**
>> Mountable from any VM in the VPC using standard NFS clients. No special drivers or SDKs required — just standard mount commands.
>
>> [!card|section]
>> **Automatic Snapshots**
>> Built-in backup and rollback capabilities. Create point-in-time snapshots for data protection and disaster recovery.
>
>> [!card|section]
>> **High Availability**
>> Enterprise tier offers regional redundancy with automatic failover. 99.99% SLA ensures business continuity.
>
>> [!card|section]
>> **In-VPC Private Access**
>> No public exposure — all traffic stays within your private network. Secure access without internet exposure.
>
>> [!card|section]
>> **Multiple Writer Support**
>> POSIX-compliant shared filesystem semantics. Many VMs can read and write simultaneously with proper file locking.
>
>> [!card|section]
>> **Kubernetes Integration**
>> Persistent volumes shared across GKE pods (ReadWriteMany). Ideal for shared storage between containerized applications.

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Media Rendering Pipelines**
>> Shared storage for video encoding, transcoding, and rendering workflows. Multiple render nodes access the same media files.
>
>> [!card|section]
>> **Content Management Systems**
>> Shared document repositories for CMS deployments. Multiple web servers access the same content files via NFS.
>
>> [!card|section]
>> **Analytics Workloads**
>> Shared scratch space for data processing pipelines. Temporary data shared between Spark or Hadoop worker nodes.
>
>> [!card|section]
>> **Lift-and-Shift Applications**
>> Legacy apps expecting POSIX shared mounts work without code changes. Rehost on-prem NFS workloads to cloud.
>
>> [!card|section]
>> **GKE Shared Storage**
>> Persistent volumes with ReadWriteMany access mode. Multiple pods can simultaneously mount and use the same filesystem.

## Storage type comparison

| | [[Cloud Storage]] | [[persistent-disk]] | Filestore |
| --- | --- | --- | --- |
| Model | Object | Block | File (NFS) |
| Sharing | Many readers/writers | Single writer (mostly) | Many readers/writers |
| Random write | No | Yes | Yes |
| Latency | ms (Std) / hrs (Archive) | sub-ms | sub-ms |
| Best for | Unstructured data, backups | DB, OS disks | Shared filesystems |

## Interesting Facts

- Filestore Premium delivers **1.2 GB/s per share** — comparable to a high-end on-prem NAS, but managed (source: Cloud Storage in GCP.md).
- It speaks plain **NFSv3**, so existing on-prem clients can mount it with zero code changes.

## Interview Questions can be asked

1. When pick Filestore over [[Cloud Storage]] or [[persistent-disk]]?
2. Standard vs Premium tier — what drives the choice?
3. How would you mount Filestore in a [[kubernetes-engine]] StatefulSet?

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · FILESTORE
>> # From *on-prem NFS* to *managed Filestore*.
>> Create a Filestore instance, mount it via standard NFS protocol, and configure automated backups for data protection.
>
>> [!card|step]
>> ###### Step 01
>> ### *Create* Filestore instance.
>> Choose your tier (Basic HDD for cost, Basic SSD for performance, Enterprise for HA). Select capacity and VPC network.
>
>> [!card|step]
>> ###### Step 02
>> ### *Mount* via NFS.
>> Use standard mount command from any VM in the VPC. Filestore provides the IP address and export path for mounting.
>
>> [!card|step]
>> ###### Step 03
>> ### *Configure* backups.
>> Enable automatic snapshots on a schedule. Set retention policies and create on-demand snapshots before major changes.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] Sister storage products
>> [[Cloud Storage|Cloud Storage]], [[persistent-disk|Persistent Disk]]
>
>
>> [!card] Compute
>> [[../compute/compute-engine|Compute Engine]], [[../compute/kubernetes-engine|Kubernetes Engine]]
