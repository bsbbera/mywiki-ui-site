---
title: Cloud Interconnect
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Dedicated Interconnect
category: GCP
tags:
  - gcp
  - cloud
  - networking
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Interconnect
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | IaaS |
> | **Category** | Networking |
> | **Launched** | 2015 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/interconnect |

---

> "Connectivity is productivity."
> <cite>— Satya Nadella, CEO, Microsoft</cite>

---

<span class="at-kicker">Dedicated Connectivity · Google Cloud</span>

# Cloud Interconnect

<p class="at-lead">
Cloud Interconnect provides enterprise-grade, high-bandwidth, low-latency physical network connections between your on-premises network and Google's network, bypassing the public internet entirely. It is designed for organizations that need reliable, consistent throughput for hybrid cloud architectures, large-scale data transfers, or latency-sensitive workloads.
</p>

<span class="at-stat">10/100 Gbps</span> circuits &nbsp;·&nbsp; <span class="at-stat">99.99%</span> SLA &nbsp;·&nbsp; <span class="at-mark">private, high-bandwidth link direct to Google's network</span>

<span class="at-kicker">How It Works</span>

## Overview

Cloud Interconnect offers two main products:

1. **Dedicated Interconnect**: A direct physical connection between your on-premises network and Google's network at a Google colocation facility (Interconnect location).
2. **Partner Interconnect**: Connectivity to Google's network through a supported third-party network service provider (partner), useful when your facility is not near a Google colocation facility.

Both types use **VLAN attachments** (also called interconnect attachments) to connect the physical circuit to specific VPC networks, and both support dynamic routing via Cloud Router using BGP.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Dedicated Interconnect**
>> Provisions direct physical 10 Gbps or 100 Gbps Ethernet circuits between your router and a Google-owned router at a colocation facility. Multiple circuits can be bundled (up to 8 × 10 Gbps = 80 Gbps, or 2 × 100 Gbps = 200 Gbps per VPC) across over 30 global Interconnect locations.
>
>> [!card|section]
>> **Partner Interconnect**
>> Uses Google-certified service providers (AT&T, Equinix, Verizon, Zayo, and others) to deliver 50 Mbps to 10 Gbps connectivity from your location to Google's network. No colocation required—your facility connects to the partner's network, which connects to Google.
>
>> [!card|section]
>> **VLAN Attachments**
>> Logical bridges between physical or partner circuits and VPC networks. Each attachment is associated with a Cloud Router, has a VLAN ID (802.1Q tagging) for multiplexing multiple logical connections, and carries BGP session configuration for dynamic route exchange.
>
>> [!card|section]
>> **Dynamic Routing with Cloud Router**
>> Each VLAN attachment terminates on a Cloud Router, which establishes BGP sessions with your on-premises router. Cloud Router advertises GCP subnet routes to your on-premises network and learns your on-premises routes to make them available within your VPC.
>
>> [!card|section]
>> **Redundancy & High Availability**
>> For 99.9% SLA: two VLAN attachments on the same circuit. For 99.99% SLA: four VLAN attachments across two circuits at two separate colocation facilities in different metros. Partner Interconnect requires two connections to different partner edge availability domains.
>
>> [!card|section]
>> **Private Google Access & Performance**
>> On-premises hosts can access Google APIs and services using private IPs without traversing the public internet. Dedicated Interconnect provides sub-millisecond to few-millisecond latency, up to 200 Gbps per VPC, and consistent dedicated bandwidth without internet congestion.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Large-Scale Data Migration**
>> Transfer petabytes of data from on-premises to Cloud Storage or BigQuery over high-bandwidth Dedicated Interconnect without internet congestion. Ideal for initial cloud migrations and ongoing data pipeline replication.
>
>> [!card|section]
>> **Hybrid Application Architectures**
>> Run latency-sensitive application tiers in GCP while keeping databases or legacy systems on-premises, with low-latency interconnect between them. Enables split architectures with consistent performance.
>
>> [!card|section]
>> **Disaster Recovery**
>> Replicate on-premises data continuously to GCP over Dedicated Interconnect for near-zero RPO. High-bandwidth, consistent connectivity enables real-time or near-real-time replication for critical workloads.
>
>> [!card|section]
>> **Financial Services Compliance**
>> Meet regulatory requirements for private, auditable network paths between on-premises trading systems and GCP analytics platforms. Private Google Access ensures data never leaves private network paths for API access.
>
>> [!card|section]
>> **Multi-Cloud Connectivity**
>> Connect from on-premises through Partner Interconnect to reach both GCP and other cloud environments through the same service provider. Simplifies multi-cloud network architecture with single provider relationship.
>
>> [!card|section]
>> **ERP Integration**
>> Connect on-premises SAP or Oracle systems to GCP data processing pipelines with consistent, low-latency connectivity. Ensures reliable data flow between enterprise systems and cloud analytics platforms.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
|-----------|--------|
| VLAN attachment | Charged per attachment per hour (regional pricing). |
| Capacity | For Dedicated Interconnect, charged per 10 Gbps or 100 Gbps port per month. For Partner Interconnect, capacity charges depend on the partner. |
| Egress pricing | Traffic from GCP to on-premises via Interconnect is charged at a reduced egress rate (lower than internet egress), and in some regions the first 10 TB/month is free per circuit. |
| Ingress | Traffic from on-premises to GCP is free (standard GCP policy). |
| Cross-connect fees | Colocation facility cross-connect charges are separate and billed by the facility, not Google. |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD INTERCONNECT
>> # From *data center* to *Google's backbone*.
>> Establish dedicated interconnect in 3 steps.
>
>> [!card|step]
>> ###### Step 01
>> ### Order *Dedicated or Partner circuit*.
>> For Dedicated Interconnect, provision a cross-connect at a Google colocation facility. For Partner Interconnect, order service through a certified partner with the required bandwidth (50 Mbps to 10 Gbps).
>
>> [!card|step]
>> ###### Step 02
>> ### Create *VLAN attachments*.
>> Configure VLAN attachments in the GCP Console using the circuit or partner pairing key. Each attachment connects your circuit to a specific VPC network and region with an associated Cloud Router for BGP.
>
>> [!card|step]
>> ###### Step 03
>> ### Configure *Cloud Router BGP*.
>> Establish BGP sessions between your Cloud Router and on-premises router over the VLAN attachments. Verify route exchange in both directions—GCP subnets advertised to on-premises and on-premises routes learned by the VPC.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister Networking Services
>> [[vpc]], [[cloud-vpn]], [[cloud-router]], [[cloud-dns]], [[cloud-nat]], [[network-intelligence-center]]
>
>> [!card] GCP Compute & Platform
>> [[compute-engine]], [[gke]], [[cloud-storage]], [[google-cloud-platform]], [[GCP Home]]
