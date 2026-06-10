---
title: Virtual Private Cloud (VPC)
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - VPC
category: GCP
tags:
  - gcp
  - cloud
  - networking
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Virtual Private Cloud (VPC)
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | IaaS |
> | **Category** | Networking |
> | **Launched** | 2011 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/vpc |

---

> "The network is the computer."
> <cite>— John Gage, Sun Microsystems</cite>

---

<span class="at-kicker">Virtual Networking · Google Cloud</span>
# Virtual Private Cloud (VPC)
<p class="at-lead">Google Cloud Virtual Private Cloud (VPC) is a globally distributed, software-defined network providing managed networking for cloud resources. A single GCP VPC spans all regions without requiring explicit peering or gateways between them.</p>
<span class="at-stat">global</span> VPC · <span class="at-stat">Shared VPC</span> · <span class="at-stat">VPC Peering</span> &nbsp;·&nbsp; <span class="at-mark">a single global VPC spanning all regions — unique to Google Cloud</span>

<span class="at-kicker">How It Works</span>
## Overview

A VPC network is created at the project level and acts as the foundational networking layer for [[compute-engine]] VMs, [[cloud-run]] services, [[gke|Google Kubernetes Engine]] clusters, and many other GCP resources. Every project begins with a **default VPC** that has auto-mode subnets pre-created in every region, though production workloads should use **custom-mode VPCs** for tighter control over IP address space.

**Auto Mode vs Custom Mode**

- **Auto mode** automatically creates one subnet per region using predefined `/20` IP ranges from the `10.128.0.0/9` block. It is convenient for experimentation but inflexible for large or complex architectures.
- **Custom mode** gives you full control over subnet creation, IP ranges, and regions. You decide which regions have subnets and what CIDR blocks to use. Custom mode is recommended for production.

VPCs support both **IPv4** (mandatory) and **IPv6** (optional, dual-stack) addressing. IPv6 can be enabled at the subnet level for external ranges, or as ULA (Unique Local Addresses) for internal-only communication.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Global VPC**
>> Single VPC spans all GCP regions without peering. VMs in different regions communicate over internal IPs without external exposure.
>
>> [!card|section]
>> **Custom Subnets**
>> Full control over IP ranges and regions. Add secondary ranges for GKE Pod and Service CIDRs.
>
>> [!card|section]
>> **Firewall Rules**
>> Stateful rules enforced at VM level (hypervisor). Direction, priority, target tags, and protocol/port filtering.
>
>> [!card|section]
>> **Shared VPC**
>> Centralize networking in a host project while service projects deploy workloads. Separate network admin from app dev.
>
>> [!card|section]
>> **VPC Peering**
>> Connect two VPC networks for internal IP communication. Non-transitive; requires non-overlapping IP ranges.
>
>> [!card|section]
>> **Private Google Access**
>> VMs without external IPs reach Google APIs via internal network. Extend to on-premises via VPN or Interconnect.

## Routes

Every VPC has a system-generated default route (0.0.0.0/0 → default internet gateway) and subnet routes for each subnet's CIDR. Custom static routes can be added to direct traffic to specific next-hops (VPN tunnels, VM instances, internal load balancers). Dynamic routes are learned via BGP through [[cloud-router]].

## VPC Flow Logs

Flow Logs capture metadata about network flows to and from VM instances. Logs are exported to Cloud Logging and can be streamed to BigQuery or Pub/Sub for analysis. They are useful for network monitoring, forensics, and billing analysis.

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Multi-tier Application Isolation**
>> Separate frontend, application, and database tiers into different subnets with firewall rules controlling inter-tier traffic.
>
>> [!card|section]
>> **Hybrid Cloud Connectivity**
>> Connect on-premises data centers to GCP using [[cloud-vpn]] or [[cloud-interconnect]], with [[cloud-router]] advertising routes dynamically.
>
>> [!card|section]
>> **Multi-region Global Applications**
>> Deploy a single VPC spanning multiple regions, allowing VMs to communicate across regions without external IPs.
>
>> [!card|section]
>> **Shared Network Management**
>> Use Shared VPC to centralize networking for large enterprises with multiple teams and GCP projects.
>
>> [!card|section]
>> **Containerized Workloads**
>> Provide GKE clusters with dedicated secondary IP ranges for Pod and Service CIDRs.
>
>> [!card|section]
>> **Compliance and Segmentation**
>> Use custom firewall rules and network tags to enforce traffic policies for regulated workloads.

<span class="at-kicker">Cost Model</span>
## Pricing

VPC itself has no direct charge — you pay for the resources that use it. However, several networking components carry costs:

| Dimension | Detail |
|-----------|--------|
| **Egress Traffic** | Charged for traffic leaving a GCP region to another region, internet, or on-premises |
| **External IP Addresses** | Static external IPv4 addresses carry hourly charge when not attached to running resource |
| **VPC Flow Logs** | Charged per GB of logs generated |
| **Firewall Rules Logging** | Charged per GB when enabled |
| **Shared VPC** | No additional charge |
| **VPC Peering** | No charge for peering; standard data transfer rates apply |

There is no charge for ingress traffic, and traffic between VMs in the same zone over internal IPs is free.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · VIRTUAL PRIVATE CLOUD
>> # From *flat network* to *segmented VPC*.
>> Design your subnet topology, configure firewall rules for security, and enable VPC Flow Logs for visibility.
>
>> [!card|step]
>> ###### Step 01
>> ### *Design* subnet topology.
>> Create custom-mode VPC with regional subnets. Plan primary and secondary IP ranges for GKE and other services.
>
>> [!card|step]
>> ###### Step 02
>> ### *Configure* firewall rules.
>> Define ingress and egress rules with target tags and service accounts. Use hierarchical firewall policies for org-wide consistency.
>
>> [!card|step]
>> ###### Step 03
>> ### *Enable* VPC Flow Logs.
>> Capture network flow metadata for monitoring, forensics, and billing analysis. Stream to BigQuery or Pub/Sub for analysis.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] Sister Networking Services
>> [[cloud-load-balancing]], [[cloud-nat]], [[cloud-dns]], [[cloud-vpn]], [[cloud-router]], [[cloud-interconnect]], [[cloud-armor]], [[cloud-cdn]], [[network-intelligence-center]]
>
>> [!card] GCP Compute & Platform
>> [[compute-engine]], [[gke]], [[cloud-run]], [[google-cloud-platform]], [[GCP Home]]
