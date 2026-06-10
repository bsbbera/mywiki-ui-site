---
title: Compute Engine
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - GCE
  - Google Compute Engine
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Compute
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Compute Engine
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Infrastructure as a Service (IaaS) |
> | **Category** | Compute |
> | **Launched** | 2012 (GA Dec 2013) |
> | **Interface** | gcloud CLI, console, REST API |
> | **Website** | cloud.google.com/compute |

---

> "A bird does not sing because it has an answer. It sings because it has a song."
> <cite>— Chinese Proverb</cite>

---

<span class="at-kicker">Virtual Machines · Google Cloud</span>
# Compute Engine
<p class="at-lead">Google Compute Engine is GCP's IaaS offering: virtual machines hosted on the same global fiber-connected infrastructure that runs Google Search, Gmail, and YouTube. Full control over the OS, disks, networking, and security configuration.</p>
<span class="at-stat">200+</span> machine types &nbsp;·&nbsp; <span class="at-stat">custom vCPU/RAM</span> &nbsp;·&nbsp; <span class="at-mark">full control IaaS — the foundation of every GCP workload</span>

<span class="at-kicker">How It Works</span>

## Overview

It is the most flexible, lowest-level compute primitive on the platform — you fully control the OS, disks, networking, and security configuration.

## Why use it

- **Cost** — pay-per-second; preemptible/spot VMs cut up to 80%.
- **Reliability** — 99% uptime SLA.
- **Flexibility** — predefined and **custom machine types**, custom OS images.
- **Migration path** — straightforward lift-and-shift from on-prem servers.

## Access

GCE is reachable through three interfaces:

1. **Cloud Console** — web GUI.
2. **REST API** — for automation.
3. **gcloud CLI** — local or via Cloud Shell.

Authentication uses **OAuth 2.0** so credentials never have to be shared.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **200+ Machine Types**
>> Predefined families (e2, n2, c3, etc.) or fully custom vCPU/RAM combinations tailored to your workload.
>
>> [!card|section]
>> **Local SSD**
>> Encrypted, physically attached SSD for ultra-low latency scratch storage and high-performance temp files.
>
>> [!card|section]
>> **Persistent Disk**
>> Durable network block storage with automatic encryption. Supports point-in-time snapshots for backup and migration.
>
>> [!card|section]
>> **GPU Accelerators**
>> Attach NVIDIA GPUs for ML training, rendering, virtual workstations, and scientific computing workloads.
>
>> [!card|section]
>> **Live Migration**
>> VMs keep running during host maintenance without reboot — a feature most clouds still don't match.
>
>> [!card|section]
>> **Global Load Balancing**
>> Distribute traffic across VMs in multiple regions with automatic health checks and failover.

## Common workflows

1. Create a project and enable the Compute Engine API.
2. Navigate **Compute Engine → VM Instances → CREATE INSTANCE**.
3. Pick name, region/zone, machine type, OS image, disk.
4. SSH from the console **or** locally with `ssh USER@VM_EXTERNAL_IP`.
5. Stop / resize / snapshot / image / create health checks as needed.

## Use cases

- Web-app hosting
- Large-scale data processing & scientific simulations
- Low-latency game servers
- Container hosts (Docker, single-node Kubernetes)
- Disaster-recovery replicas
- Software development & test environments

## Strengths and trade-offs

| Pros | Cons |
| --- | --- |
| Full control over the VM | Requires expertise — you install/patch everything |
| Spin-up in minutes | Autoscaling is slower than App Engine |
| Preemptible VMs cut cost ~80% | No built-in monitoring agent — must install one |
| Wide library of predefined images | More operational burden than serverless |

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
|-----------|--------|
| **Compute** | Pay-as-you-go per-second billing |
| **Sustained Use** | Automatic discount after 25% monthly use |
| **Committed Use** | Up to 57% discount for 1- or 3-year commits |
| **Preemptible/Spot** | Up to 80% off for fault-tolerant batch workloads |
| **Custom Types** | Pay only for the vCPU/RAM you provision |

## Interesting Facts

- GCE was Google's pioneer for **per-second VM billing** — all major clouds eventually followed.
- **Live migration** keeps your VM running across host maintenance without reboot — a feature most clouds still don't match.

## Interview Questions can be asked

1. Compare GCE with App Engine across cost, control, scaling, and security.
2. When should you choose preemptible/spot VMs vs. CUD-discounted regular VMs?
3. What is the difference between an image and a snapshot in GCE?
4. Walk through how you'd scale a stateless web app on GCE with global load balancing.
5. How does live migration work and why does it matter?

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · COMPUTE ENGINE
>> # From *requirements* to *running VM*.
>> Full control IaaS — the foundation of every GCP workload.
>
>> [!card|step]
>> ###### Step 01
>> ### Choose *machine type & image*.
>> Select from 200+ predefined types or create custom vCPU/RAM combinations. Pick from Google-provided OS images or bring your own.
>
>> [!card|step]
>> ###### Step 02
>> ### Configure *networking & IAM*.
>> Set up VPC networks, firewall rules, and IAM access controls. Choose public IP or private VPC connectivity.
>
>> [!card|step]
>> ###### Step 03
>> ### Connect *via SSH*.
>> Browser-based SSH through Console or connect from local terminal. Start deploying your workloads immediately.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Foundations
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../foundations/regions-and-zones|Regions and Zones]], [[../foundations/gcp-pricing-and-discounts|GCP Pricing + Discounts]]
>
>
>> [!card] Sister compute products
>> [[gcp-compute-services|GCP Compute Services]], [[app-engine|App Engine]], [[compute-engine-vs-app-engine|Compute Engine vs App Engine]]
>
>
>> [!card] Storage
>> [[../storage/persistent-disk|Persistent Disk]]
