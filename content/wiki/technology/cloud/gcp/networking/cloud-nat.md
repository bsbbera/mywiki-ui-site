---
title: Cloud NAT
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - NAT Gateway
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
> # Cloud NAT
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed |
> | **Category** | Networking |
> | **Launched** | 2019 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/nat |

---

> "Security is not a product, but a process."
> <cite>— Bruce Schneier</cite>

---

<span class="at-kicker">Outbound NAT · Google Cloud</span>
# Cloud NAT
<p class="at-lead">Cloud NAT is Google Cloud's fully managed, software-defined NAT service enabling VMs, GKE nodes, and Cloud Run services without public IPs to initiate outbound connections to the internet. No single point of failure, no gateway VM to manage.</p>
<span class="at-stat">fully managed</span> · <span class="at-stat">no single point</span> of failure · <span class="at-stat">VMs without</span> public IPs &nbsp;·&nbsp; <span class="at-mark">give private VMs internet access without exposing them to inbound traffic</span>

<span class="at-kicker">How It Works</span>
## Overview

In a typical secure GCP architecture, VMs in private subnets have only internal IP addresses. This prevents unsolicited inbound connections from the internet (improving security) but also blocks outbound internet access needed for tasks like downloading OS patches, reaching external APIs, or pulling container images. Cloud NAT solves this by providing managed outbound NAT without exposing the VMs themselves.

Cloud NAT operates at the **Cloud Router** level — each NAT configuration is attached to a [[cloud-router]] in a specific VPC network and region. The Cloud Router acts as the control plane, distributing NAT configuration to Google's Andromeda software networking infrastructure, which performs the actual packet translation in a distributed, stateful manner across Google's network fabric. No single NAT gateway VM handles all traffic.

Cloud NAT is **egress-only** — it only translates outbound packets from private VMs. Inbound unsolicited traffic from the internet cannot reach private VMs through Cloud NAT, maintaining the security posture of private subnets.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **NAT IP Allocation**
>> Automatic or manual allocation of external IPs. Manual allocation provides stable source IPs for allowlisting by third parties.
>
>> [!card|section]
>> **Dynamic Port Allocation**
>> Automatically adjusts ports per VM based on demand. More efficient than static allocation for variable workloads.
>
>> [!card|section]
>> **Subnet Targeting**
>> Apply NAT to all subnets or specific ones only. Fine-grained control over which resources get outbound access.
>
>> [!card|section]
>> **Endpoint-Independent Mapping**
>> Ensures same internal (IP, port) always maps to same external (IP, port). Required for protocols using connection-tracking.
>
>> [!card|section]
>> **Cloud Logging Integration**
>> Log translation events and errors. Capture port exhaustion metrics for alerting and capacity planning.
>
>> [!card|section]
>> **Serverless VPC Connector Support**
>> Route Cloud Run, Cloud Functions, and App Engine traffic through NAT for predictable source IPs.

## NAT IP Allocation

Cloud NAT requires one or more public IP addresses to use as the external source IPs for translated traffic. Allocation modes:
- **Automatic (auto) allocation**: Cloud NAT automatically reserves and manages external IP addresses. GCP adds IPs as needed based on the number of ports in use, and removes them when demand decreases. You don't need to manage IPs manually.
- **Manual allocation**: You specify a set of reserved static external IP addresses. This gives you predictable, stable source IPs — useful when destination services whitelist source IPs (e.g., third-party APIs with IP allowlists).

## Port Allocation

Each outbound connection requires a unique (source IP, source port, destination IP, destination port) tuple. Cloud NAT allocates a range of **source port tuples** per VM instance per NAT IP:
- **Static port allocation**: A fixed number of ports per VM (default: 64 ports per VM per NAT IP). Simpler but may over- or under-allocate.
- **Dynamic port allocation**: Cloud NAT automatically adjusts the number of ports per VM between a configurable minimum and maximum, based on actual connection demand. This is more efficient for workloads with variable concurrency.

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Private VM Internet Access**
>> Allow VMs in private subnets to download OS updates, reach package repositories, or call external APIs without assigning public IPs.
>
>> [!card|section]
>> **GKE Private Cluster Egress**
>> Enable GKE private nodes to pull container images from public registries and communicate with external services.
>
>> [!card|section]
>> **Stable Outbound IP**
>> Use manually allocated static IPs with Cloud NAT so third-party services can allowlist your GCP traffic by IP.
>
>> [!card|section]
>> **Serverless Egress with Fixed IP**
>> Route Cloud Run or Cloud Functions traffic through a VPC Connector and Cloud NAT for predictable source IPs.
>
>> [!card|section]
>> **Security Hardening**
>> Remove public IPs from all VMs, eliminating a potential attack surface, while maintaining internet access for legitimate outbound use cases.

<span class="at-kicker">Cost Model</span>
## Pricing

| Dimension | Detail |
|-----------|--------|
| **NAT Gateway** | Per Cloud NAT gateway per hour (regardless of traffic) |
| **Data Processing** | Per GB of data processed through the NAT gateway |
| **External IP Addresses** | Standard external IP fees if using manual allocation |

There are no charges for the number of VMs or connections using the NAT gateway — the per-hour gateway fee and per-GB data charge cover all usage.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD NAT
>> # From *private VM* to *internet-connected without public IP*.
>> Create a Cloud NAT gateway, attach it to your Cloud Router, and verify outbound connectivity.
>
>> [!card|step]
>> ###### Step 01
>> ### *Create* Cloud NAT gateway.
>> Configure in your VPC region. Choose automatic or manual IP allocation based on your source IP requirements.
>
>> [!card|step]
>> ###### Step 02
>> ### *Attach* to Cloud Router.
>> Cloud Router distributes NAT configuration to Andromeda. No VM to manage — fully distributed control plane.
>
>> [!card|step]
>> ###### Step 03
>> ### *Verify* outbound connectivity.
>> Test from private VMs: curl external APIs, download packages, pull container images. Monitor logs for translation events.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] Sister Networking Services
>> [[vpc]], [[cloud-router]], [[cloud-vpn]], [[cloud-dns]], [[cloud-load-balancing]], [[network-intelligence-center]]
>
>> [!card] GCP Compute & Platform
>> [[compute-engine]], [[gke]], [[cloud-run]], [[google-cloud-platform]], [[GCP Home]]
