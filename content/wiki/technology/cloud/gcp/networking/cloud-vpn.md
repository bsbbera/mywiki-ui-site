---
title: Cloud VPN
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - IPsec VPN
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
> # Cloud VPN
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed |
> | **Category** | Networking |
> | **Launched** | 2013 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/vpn |

---

> "Privacy is not something that I'm merely entitled to, it's an absolute prerequisite."
> <cite>— Marlon Brando</cite>

---

<span class="at-kicker">Hybrid Connectivity · Google Cloud</span>

# Cloud VPN

<p class="at-lead">
Cloud VPN securely connects your on-premises network or other cloud provider networks to your Google Cloud VPC network using IPsec tunnels over the public internet. Unlike Dedicated Interconnect, it provides encrypted site-to-site connectivity without physical colocation requirements, making it the fastest way to establish hybrid connectivity to GCP.
</p>

<span class="at-stat">99.99%</span> SLA (HA VPN) &nbsp;·&nbsp; <span class="at-stat">3 Gbps</span> per tunnel &nbsp;·&nbsp; <span class="at-mark">encrypted site-to-site over the public internet</span>

<span class="at-kicker">How It Works</span>

## Overview

Cloud VPN establishes encrypted tunnels between a Cloud VPN gateway on the GCP side and a compatible VPN gateway on the peer side (on-premises hardware VPN appliance, software VPN, or another cloud provider's VPN). All traffic flowing through the tunnel is encrypted with IKEv1 or IKEv2 and AES-based ciphers.

Cloud VPN is available in two variants:
- **HA VPN (High Availability VPN)**: The recommended, newer offering providing a 99.99% uptime SLA with redundant tunnel pairs.
- **Classic VPN**: The original offering with a 99.9% SLA; does not support dynamic routing with active/active redundancy. Not recommended for new deployments.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **HA VPN (High Availability VPN)**
>> Each HA VPN gateway has two external interfaces (Interface 0 and Interface 1), each with its own external IP address. Both interfaces are active simultaneously. For the 99.99% SLA, you must configure two tunnels — one from each interface — to two separate interfaces on the peer gateway. Both tunnels carry traffic (active/active), maximizing bandwidth and eliminating failover delays.
>
>> [!card|section]
>> **Dynamic Routing Only**
>> HA VPN requires BGP-based dynamic routing via Cloud Router. Static routing is not supported. Each tunnel supports up to 3 Gbps for traffic traversing the Google network. Multiple tunnel pairs can be used to increase aggregate bandwidth using ECMP.
>
>> [!card|section]
>> **IPsec and IKE Configuration**
>> Supports IKEv1 and IKEv2 (IKEv2 recommended). Encryption options include AES-128-CBC, AES-256-CBC, AES-128-GCM, AES-256-GCM. Integrity via SHA-1, SHA-256, SHA-384, SHA-512. DH groups 2, 5, 14, 15, 16 with Perfect Forward Secrecy supported.
>
>> [!card|section]
>> **Classic VPN (Legacy)**
>> Single external IP per gateway with fewer redundancy options. Supports static and dynamic routing via policy-based or route-based routing. 99.9% SLA with no active/active configuration. Redundancy requires a second VPN gateway and manual failover.
>
>> [!card|section]
>> **Dynamic Routing with Cloud Router**
>> Cloud Router runs BGP sessions over each tunnel, advertising GCP VPC subnet routes to the peer network and learning on-premises routes. Supports global dynamic routing mode so routes learned in one region are available to VMs in all regions.
>
>> [!card|section]
>> **VPN to VPN (VPC-to-VPC)**
>> Cloud VPN can connect two GCP VPCs in different projects or organizations by establishing VPN tunnels between Cloud VPN gateways in each VPC. For VPCs in the same organization, VPC Peering or Shared VPC is generally preferred.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Small to Medium Hybrid Connectivity**
>> Connect office locations or data centers to GCP without the cost and lead time of Dedicated Interconnect. Ideal for organizations needing quick, encrypted connectivity without physical infrastructure requirements.
>
>> [!card|section]
>> **Dev/Test Environments**
>> Quickly establish temporary or development connectivity to GCP for testing hybrid architectures. Cloud VPN can be provisioned in minutes compared to the weeks required for physical interconnect circuits.
>
>> [!card|section]
>> **Backup/Failover Connectivity**
>> Use Cloud VPN as a lower-cost backup path alongside primary Cloud Interconnect circuits. Provides encrypted redundancy for critical hybrid connectivity with automatic failover via BGP.
>
>> [!card|section]
>> **Multi-Cloud Connectivity**
>> Connect GCP VPCs to AWS VPCs or Azure VNets over IPsec tunnels. Enables hybrid architectures spanning multiple cloud providers with encrypted, manageable connectivity between environments.
>
>> [!card|section]
>> **Remote Site Connectivity**
>> Extend GCP networking to remote offices or retail locations that cannot justify dedicated circuits. Provides secure access to GCP resources from distributed locations over standard internet connections.
>
>> [!card|section]
>> **Encrypted Data Replication**
>> Securely replicate data between on-premises databases and GCP services over encrypted tunnels. Ensures data confidentiality in transit for backup, disaster recovery, and data migration scenarios.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
|-----------|--------|
| VPN tunnels | Charged per tunnel per hour (HA VPN gateways and Classic VPN gateways are both charged). The charge is per tunnel, not per gateway. |
| Egress traffic | Traffic from GCP to on-premises via VPN is charged at standard internet egress rates (not the reduced Interconnect rates). Traffic from on-premises to GCP is free. |
| External IP addresses | HA VPN interface IPs are automatically provisioned; Classic VPN requires reserving external static IPs with associated charges. |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD VPN
>> # From *on-premises* to *GCP* over IPsec.
>> Establish encrypted hybrid connectivity in 3 steps.
>
>> [!card|step]
>> ###### Step 01
>> ### Create *HA VPN gateway*.
>> Provision an HA VPN gateway in your GCP VPC. The gateway automatically creates two external interfaces with public IPs, establishing the foundation for redundant, high-availability tunnels.
>
>> [!card|step]
>> ###### Step 02
>> ### Configure *BGP via Cloud Router*.
>> Create a Cloud Router and attach it to your VPN gateway. Configure BGP sessions with your on-premises peer router's ASN, advertising VPC subnets and learning on-premises routes for automatic route exchange.
>
>> [!card|step]
>> ###### Step 03
>> ### Verify *tunnel status*.
>> Establish IPsec tunnels from each HA VPN interface to your peer gateway. Verify tunnel status, BGP session establishment, and route exchange to confirm encrypted connectivity between networks.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister Networking Services
>> [[vpc]], [[cloud-router]], [[cloud-interconnect]], [[cloud-nat]], [[cloud-dns]], [[network-intelligence-center]]
>
>> [!card] GCP Compute & Platform
>> [[compute-engine]], [[gke]], [[cloud-run]], [[google-cloud-platform]], [[GCP Home]]
