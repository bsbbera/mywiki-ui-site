---
title: Cloud DNS
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - DNS
category: GCP
tags:
  - gcp
  - cloud
  - networking
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud DNS
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed |
> | **Category** | Networking |
> | **Launched** | 2014 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/dns |

---

> "The domain name system is the phonebook of the internet."
> <cite>— Paul Mockapetris, inventor of DNS</cite>

---

<span class="at-kicker">DNS · Google Cloud</span>
# Cloud DNS
<p class="at-lead">Cloud DNS is Google Cloud's fully managed, authoritative DNS service built on the same infrastructure that powers Google's public DNS (8.8.8.8). The only cloud DNS service with a 100% uptime SLA.</p>
<span class="at-stat">100%</span> uptime SLA · <span class="at-stat">anycast</span> routing · <span class="at-stat">private</span> + <span class="at-stat">public</span> zones &nbsp;·&nbsp; <span class="at-mark">the same anycast DNS infrastructure that powers Google.com</span>

<span class="at-kicker">How It Works</span>
## Overview

Cloud DNS separates the concepts of **managed zones** (where you store DNS records) and **DNS policies** (how resolution behaves within your VPC). A managed zone is a container for DNS records belonging to a single DNS name suffix (e.g., `example.com`). Each managed zone is associated with a GCP project and can be either public (authoritative for public internet queries) or private (authoritative only for queries from specified VPC networks).

Cloud DNS relies on Google's globally distributed Anycast infrastructure, ensuring queries are always answered from the nearest available server. The 100% SLA means Google guarantees that correctly configured zones will always respond to DNS queries — a claim unique in the managed DNS market.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Public Managed Zones**
>> Authoritative for DNS domains on the public internet. Delegate your domain to Cloud DNS name servers from your registrar.
>
>> [!card|section]
>> **Private Managed Zones**
>> Visible only to specified VPC networks. Internal hostnames for GCP resources and microservice discovery.
>
>> [!card|section]
>> **DNSSEC Support**
>> Cryptographically signed DNS records for both public and private zones. Automatic key generation, rotation, and signing.
>
>> [!card|section]
>> **Split-Horizon DNS**
>> Same domain resolves differently inside vs. outside your VPC. Internal IPs for internal clients, public IPs for external.
>
>> [!card|section]
>> **DNS Peering**
>> Forward queries between VPC networks. Centralize DNS management in a hub VPC while spoke VPCs delegate resolution.
>
>> [!card|section]
>> **Response Policies**
>> Intercept and override DNS responses for specific names. Custom rules for internal overrides, ad-blocking, or testing.

## DNS Policies

DNS policies are associated with VPC networks and control inbound and outbound DNS forwarding behavior:
- **Inbound DNS forwarding**: Creates an inbound forwarding entry point so that on-premises DNS servers can forward queries to Cloud DNS resolvers via [[cloud-vpn]] or [[cloud-interconnect]].
- **Outbound DNS forwarding** (server policies): Forwards all or specific domain queries from VMs in the VPC to an alternative DNS resolver (e.g., an on-premises Active Directory DNS server).

## Cloud DNS for GCP-Managed Resources

GCP automatically creates internal DNS names for [[compute-engine]] VMs in the format `[INSTANCE_NAME].[ZONE].c.[PROJECT_ID].internal`. These names are resolvable within the same VPC via Cloud DNS's built-in resolver without any configuration. GKE clusters also get internal DNS managed by kube-dns or CoreDNS, which can integrate with Cloud DNS for external name resolution.

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Public Domain Hosting**
>> Host authoritative DNS for internet-facing domains with 100% uptime SLA and global low latency.
>
>> [!card|section]
>> **Internal Service Discovery**
>> Use private zones to give internal names to GCP resources. Enable service discovery without hardcoding IPs.
>
>> [!card|section]
>> **Hybrid DNS Resolution**
>> Use inbound and outbound forwarding to integrate Cloud DNS with on-premises DNS infrastructure.
>
>> [!card|section]
>> **Multi-VPC DNS**
>> Use DNS peering to allow multiple VPCs to resolve names hosted in a central DNS hub VPC.
>
>> [!card|section]
>> **DNSSEC-Protected Domains**
>> Enable DNSSEC to protect user-facing domains against cache poisoning and man-in-the-middle attacks.
>
>> [!card|section]
>> **Split-Horizon Configurations**
>> Serve different records to internal vs external clients for the same domain names.

<span class="at-kicker">Cost Model</span>
## Pricing

| Dimension | Detail |
|-----------|--------|
| **Managed Zones** | Per zone per month. First 25 zones have flat rate; beyond 25 cheaper per zone. |
| **DNS Queries** | Per million queries. First million per month free. Private zones charged at lower rate. |
| **DNSSEC** | No additional charge for enabling DNSSEC |
| **DNS Policies** | Per policy per month plus per query processed |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD DNS
>> # From *domain* to *resolved address*.
>> Create a managed zone, add DNS records for your services, and enable DNSSEC for security.
>
>> [!card|step]
>> ###### Step 01
>> ### *Create* managed zone.
>> Define public or private zones for your domain. Private zones attach to specific VPC networks for internal resolution.
>
>> [!card|step]
>> ###### Step 02
>> ### *Add* DNS records.
>> Create A, AAAA, CNAME, MX, TXT, and other record types. Changes propagate to all name servers within 120 seconds.
>
>> [!card|step]
>> ###### Step 03
>> ### *Enable* DNSSEC.
>> Turn on DNSSEC for cryptographic signing. Upload DS records to your domain registrar for chain of trust validation.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] Sister Networking Services
>> [[vpc]], [[cloud-load-balancing]], [[cloud-nat]], [[cloud-vpn]], [[cloud-interconnect]], [[cloud-router]], [[network-intelligence-center]]
>
>> [!card] GCP Compute & Platform
>> [[compute-engine]], [[gke]], [[cloud-run]], [[google-cloud-platform]], [[GCP Home]]
