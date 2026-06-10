---
title: Cloud Router
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - BGP Router
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
> # Cloud Router
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed |
> | **Category** | Networking |
> | **Launched** | 2015 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/network-connectivity/docs/router |

---

> "Routing is the art of finding the best path through a network."
> <cite>— Vint Cerf, co-creator of TCP/IP</cite>

---

<span class="at-kicker">Dynamic Routing · Google Cloud</span>

# Cloud Router

<p class="at-lead">
Cloud Router is Google Cloud's fully managed, software-defined BGP routing service that enables dynamic route exchange between your VPC network and external networks. Rather than manually maintaining static route tables, it automatically propagates route changes in both directions—advertising new VPC subnets to on-premises routers and learning on-premises prefixes to install as dynamic routes in your VPC.
</p>

<span class="at-stat">BGP</span> dynamic routing &nbsp;·&nbsp; <span class="at-stat">global</span> + <span class="at-stat">regional</span> modes &nbsp;·&nbsp; <span class="at-mark">the routing brain behind Cloud VPN and Interconnect</span>

<span class="at-kicker">How It Works</span>

## Overview

Cloud Router is a regional resource — you create one per region per VPC network (or per VPC in each region you need dynamic routing). It does not run on a VM; it is a fully managed Google service with no infrastructure to manage or patch. Cloud Router establishes BGP sessions over Cloud VPN tunnels (HA VPN or Classic VPN) or Cloud Interconnect VLAN attachments, managing route advertisements automatically.

Cloud Router works in conjunction with GCP's **dynamic routing mode** setting on the VPC:
- **Regional dynamic routing**: Routes learned by a Cloud Router are only available to resources in the same region as that router.
- **Global dynamic routing**: Routes learned by any Cloud Router in the VPC are available to resources in **all regions** of that VPC. This is the recommended mode for most deployments, enabling any VM anywhere in the VPC to reach on-premises prefixes without deploying routers in every region.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **BGP Sessions**
>> Establishes BGP sessions (typically eBGP with external peers) over tunnel or VLAN attachment interfaces. Each session configures Peer ASN, Peer IP, Cloud Router ASN, and advertised route priority (MED) for influencing path preference when multiple paths exist.
>
>> [!card|section]
>> **Route Advertisement**
>> Advertises all subnet routes in the Cloud Router's region (regional mode) or all subnet routes in the VPC (global mode). Supports custom routes for specific static prefixes and custom route policies to filter advertised routes using prefix-based and attribute-based policies.
>
>> [!card|section]
>> **Route Learning & Installation**
>> BGP routes received from peers are validated, accepted based on route policies, and installed as dynamic routes in the VPC route table with the tunnel or VLAN attachment as next hop. When routes are withdrawn, Cloud Router removes them automatically—no manual intervention needed.
>
>> [!card|section]
>> **Graceful Restart & HA**
>> Supports BGP Graceful Restart (RFC 4724) allowing sessions to persist through brief control-plane interruptions without tearing down forwarding. For topology-level HA, deploy Cloud Routers in multiple regions with global dynamic routing so all routers contribute to the global route table.
>
>> [!card|section]
>> **Custom Route Policies**
>> Supports import and export route policies for fine-grained BGP control. Filter which VPC routes are advertised to peers and which received routes are accepted into the VPC. Includes community matching and MED/LOCAL_PREF manipulation for multi-path scenarios.
>
>> [!card|section]
>> **Cloud NAT & BFD Integration**
>> Cloud NAT gateways are configured on top of Cloud Router for managed outbound internet access. Supports Bidirectional Forwarding Detection (BFD) for rapid failure detection on BGP sessions over HA VPN tunnels, enabling faster failover to redundant tunnels.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Hybrid Cloud Routing**
>> Dynamically exchange routes between GCP VPCs and on-premises networks via HA VPN or Cloud Interconnect without maintaining manual static routes. Eliminates operational overhead of updating route tables when network topology changes.
>
>> [!card|section]
>> **Automated Route Propagation**
>> Automatically advertise new GCP subnets to on-premises routers when they are created, eliminating operational overhead. On-premises routers learn new GCP network ranges via BGP without manual configuration updates.
>
>> [!card|section]
>> **Multi-Region Hybrid Networks**
>> Use global dynamic routing mode so on-premises routes learned in one region are available to VMs in all GCP regions. Deploy Cloud Routers in multiple regions for topology-level high availability across geographic boundaries.
>
>> [!card|section]
>> **Cloud NAT Anchor**
>> Host Cloud NAT gateways on Cloud Routers for managed outbound internet access. Multiple NAT gateways can be configured on the same Cloud Router, distributing NAT configuration to Google's Andromeda network fabric.
>
>> [!card|section]
>> **Failover Routing**
>> Configure MED or LOCAL_PREF on BGP sessions to prefer one VPN tunnel over another, with automatic failover when the primary fails. Supports active/active or active/passive topologies for resilient hybrid connectivity.
>
>> [!card|section]
>> **Custom Route Filtering**
>> Prevent leakage of certain IP ranges from being advertised to peers using custom export policies. Accept or reject routes based on BGP community attributes to enforce network segmentation and security policies.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
|-----------|--------|
| Cloud Router instances | Charged per Cloud Router per hour. Unlike most GCP resources, Cloud Routers are charged for as long as they exist, even if they have no active tunnels or attachments. |
| Data transfer | Traffic forwarded via Cloud Router (over VPN or Interconnect) is charged at the VPN or Interconnect egress rates — the Cloud Router itself does not add additional per-byte charges. |
| BGP sessions | No additional charge per BGP session beyond the Cloud Router instance fee. |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD ROUTER
>> # From *static routes* to *dynamic BGP routing*.
>> Enable dynamic routing for your hybrid network in 3 steps.
>
>> [!card|step]
>> ###### Step 01
>> ### Create *Cloud Router in the VPC*.
>> Provision a Cloud Router in the region where you need dynamic routing. Choose global or regional dynamic routing mode and assign a consistent ASN that will be used across all Cloud Routers in the same VPC for high availability.
>
>> [!card|step]
>> ###### Step 02
>> ### Attach *to VPN tunnel or Interconnect VLAN*.
>> Configure the Cloud Router on your HA VPN tunnel or Cloud Interconnect VLAN attachment. Set the peer ASN to match your on-premises router and configure BGP peer IP addresses on the tunnel/attachment interfaces.
>
>> [!card|step]
>> ###### Step 03
>> ### Verify *BGP session & route exchange*.
>> Confirm BGP sessions are established and routes are being exchanged in both directions. Verify that VPC subnets are advertised to on-premises and on-premises routes appear as dynamic routes in your VPC route table.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister Networking Services
>> [[vpc]], [[cloud-vpn]], [[cloud-interconnect]], [[cloud-nat]], [[cloud-dns]], [[network-intelligence-center]]
>
>> [!card] GCP Compute & Platform
>> [[compute-engine]], [[gke]], [[cloud-run]], [[google-cloud-platform]], [[GCP Home]]
