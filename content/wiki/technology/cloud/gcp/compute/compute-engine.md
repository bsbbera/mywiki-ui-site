---
title: Compute Engine
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 9:28:50 pm
aliases:
  - GCE
  - Google Compute Engine
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Compute
banner:
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

Google Compute Engine (GCE) is GCP's **IaaS** offering: virtual machines hosted on the same global fiber-connected infrastructure that runs Google Search, Gmail, and YouTube (source: Introduction to Google Compute Engine.md). It is the most flexible, lowest-level compute primitive on the platform â€” you fully control the OS, disks, networking, and security configuration.

## Why use it

- **Cost** â€” pay-per-second; preemptible/spot VMs cut up to 80% (source: Google Cloud Platform - Compute Services.md).
- **Reliability** â€” 99% uptime SLA (source: Introduction to Google Compute Engine.md).
- **Flexibility** â€” predefined and **custom machine types**, custom OS images.
- **Migration path** â€” straightforward lift-and-shift from on-prem servers.

## Access

GCE is reachable through three interfaces (source: Introduction to Google Compute Engine.md):

1. **Cloud Console** â€” web GUI.
2. **REST API** â€” for automation.
3. **gcloud CLI** â€” local or via Cloud Shell.

Authentication uses **OAuth 2.0** so credentials never have to be shared.

## Key features

- **Machine types** â€” predefined (e2, n2, c3, etc.) or fully custom CPU/RAM combinations.
- **Local SSD** â€” encrypted, physically attached SSD for ultra-low latency (source: Introduction to Google Compute Engine.md).
- **Persistent Disk** â€” durable network block storage; supports snapshots â€” see [[persistent-disk]].
- **GPU accelerators** â€” for ML training, rendering, virtual workstations.
- **Images** â€” Google-published or custom OS images.
- **Global Load Balancing** â€” distributes traffic across VMs in multiple regions.
- **Live migration** â€” VMs keep running during host maintenance.
- **OS patch management, reservations, sole-tenant nodes**.

## Pricing

- **Pay-as-you-go** per-second.
- **Sustained Use Discounts (SUD)** â€” automatic after 25% monthly use.
- **Committed Use Discounts (CUD)** â€” up to 57% for 1- or 3-year commits.
- **Preemptible/Spot VMs** â€” short-lived, up to 80% off (source: Google Cloud Platform - Compute Services.md).

See [[gcp-pricing-and-discounts]].

## Common workflows


1. Create a project and enable the Compute Engine API.
2. Navigate **Compute Engine â†’ VM Instances â†’ CREATE INSTANCE**.
3. Pick name, region/zone, machine type, OS image, disk.
4. SSH from the console **or** locally with `ssh USER@VM_EXTERNAL_IP`.
5. Stop / resize / snapshot / image / create health checks as needed (source: How To Use Compute Engine To Launch And Manage Virtual Machines.md).

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
| Full control over the VM | Requires expertise â€” you install/patch everything |
| Spin-up in minutes | Autoscaling is slower than [[app-engine]] |
| Preemptible VMs cut cost ~80% | No built-in monitoring agent â€” must install one |
| Wide library of predefined images | More operational burden than serverless |

(source: Difference Between Google Cloud Compute Engine and App Engine.md)

## Interesting Facts

- GCE was Google's pioneer for **per-second VM billing** â€” all major clouds eventually followed (source: Google Cloud Platform (GCP).md).
- **Live migration** keeps your VM running across host maintenance without reboot â€” a feature most clouds still don't match.

## Interview Questions can be asked

1. Compare GCE with [[app-engine]] across cost, control, scaling, and security.
2. When should you choose preemptible/spot VMs vs. CUD-discounted regular VMs?
3. What is the difference between an image and a snapshot in GCE?
4. Walk through how you'd scale a stateless web app on GCE with global load balancing.
5. How does live migration work and why does it matter?

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

