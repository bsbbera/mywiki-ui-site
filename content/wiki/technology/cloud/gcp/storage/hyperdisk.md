---
title: Hyperdisk
created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Hyperdisk Storage
  - Next-gen block storage
category: GCP
tags:
  - gcp
  - cloud
  - storage
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Hyperdisk
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Next-generation block storage |
> | **Category** | Storage |
> | **Launched** | 2023 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/compute/docs/disks/hyperdisks

---

> "Storage performance should never be the bottleneck for your workloads."
> <cite>— Google Cloud Storage Engineering</cite>

---

<span class="at-kicker">Block Storage · Google Cloud</span>
# Hyperdisk
<p class="at-lead">Hyperdisk is Google Cloud's next-generation block storage for Compute Engine VMs, delivering breakthrough performance with independently scalable IOPS and throughput. Decouple disk performance from capacity for precise application tuning.</p>
<span class="at-stat">Hyperdisk Extreme</span> · <span class="at-stat">350K+</span> IOPS · <span class="at-stat">dynamic</span> IOPS/throughput tuning &nbsp;·&nbsp; <span class="at-mark">decouple disk performance from capacity — tune IOPS without resizing</span>

<span class="at-kicker">How It Works</span>
## Overview

Hyperdisk represents a fundamental architectural advancement over Persistent Disk. While traditional storage ties performance characteristics to disk size, Hyperdisk allows customers to provision specific IOPS and throughput levels independently. This decoupled architecture enables predictable performance for applications with unique access patterns.

With the ability to deliver **up to 2.4 million IOPS per VM** and throughput of 16 GB/s, Hyperdisk addresses the most demanding enterprise workloads including high-frequency trading, real-time analytics, and large-scale ML training.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Independent Scaling**
>> Provision IOPS and throughput separately from capacity. No need to over-provision storage just to get performance.
>
>> [!card|section]
>> **Four Storage Tiers**
>> Balanced, Extreme, Throughput, and ML-optimized options. Choose the right profile for your workload requirements.
>
>> [!card|section]
>> **Sub-millisecond Latency**
>> Consistent low-latency performance for random I/O. Predictable response times for latency-sensitive applications.
>
>> [!card|section]
>> **Faster Provisioning**
>> Near-instant disk creation and attachment. No lengthy preparation or initialization delays.
>
>> [!card|section]
>> **Multi-writer Support**
>> Shared read-write access from multiple VMs (NFS-like). Shared storage without external file systems.
>
>> [!card|section]
>> **Live Migration**
>> Non-disruptive VM migration with storage attached. Move workloads without downtime or data movement.

## Storage Tiers

| Tier | Best For | Max IOPS | Max Throughput |
|------|----------|----------|----------------|
| **Balanced** | General purpose workloads | 80,000 | 1,200 MB/s |
| **Extreme** | Latency-sensitive databases | 350,000 | 2,800 MB/s |
| **Throughput** | Sequential analytics, streaming | 20,000 | 2,400 MB/s |
| **ML** | AI/ML training workloads | 100,000 | 4,800 MB/s |

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **High-Performance Databases**
>> Oracle, SQL Server, PostgreSQL requiring extreme IOPS. Transactional workloads with demanding SLAs.
>
>> [!card|section]
>> **Real-time Analytics**
>> Apache Spark, Presto with sub-second query requirements. Interactive data exploration without delays.
>
>> [!card|section]
>> **ML Training Pipelines**
>> Large dataset access for TensorFlow, PyTorch training. High-throughput data loading for GPU clusters.
>
>> [!card|section]
>> **Financial Trading Systems**
>> Low-latency order processing and risk calculation. Microsecond-sensitive financial applications.
>
>> [!card|section]
>> **Video Rendering**
>> High-throughput sequential access for media processing. Large file streaming for content production.

<span class="at-kicker">Cost Model</span>
## Pricing

Hyperdisk pricing follows a consumption model:

| Dimension | Detail |
|-----------|--------|
| **Capacity** | Per-GB-month for provisioned storage |
| **Performance** | Per-IOPS-month and per-MB/s-month for provisioned throughput |
| **Network** | Standard egress charges for cross-region access |

This granular pricing enables precise cost optimization by right-sizing both capacity and performance independently.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · HYPERDISK
>> # From *fixed-performance disk* to *tunable Hyperdisk*.
>> Create a Hyperdisk volume with custom performance, attach it to Compute Engine, and tune IOPS and throughput live.
>
>> [!card|step]
>> ###### Step 01
>> ### *Create* Hyperdisk volume.
>> Choose your tier (Balanced, Extreme, Throughput, or ML). Specify capacity and independently provision IOPS and throughput.
>
>> [!card|step]
>> ###### Step 02
>> ### *Attach* to Compute Engine.
>> Mount the Hyperdisk to your VM instance. Works with existing Compute Engine workflows and tooling.
>
>> [!card|step]
>> ###### Step 03
>> ### *Tune* IOPS & throughput live.
>> Adjust performance characteristics without detaching or resizing. Scale up for peak loads, scale down for cost savings.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] GCP Storage
>> [[Cloud Storage]], [[persistent-disk]], [[filestore]], [[storage-transfer-service]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]]
