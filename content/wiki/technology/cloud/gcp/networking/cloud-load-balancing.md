---
title: Cloud Load Balancing
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - CLB
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
> # Cloud Load Balancing
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed |
> | **Category** | Networking |
> | **Launched** | 2013 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/load-balancing |

---

> "Scalability is not just about handling more load — it's about handling it gracefully."
> <cite>— Werner Vogels, CTO, Amazon</cite>

---

<span class="at-kicker">Load Balancing · Google Cloud</span>
# Cloud Load Balancing
<p class="at-lead">Cloud Load Balancing is Google Cloud's fully managed, software-defined load balancing service distributing traffic across backends without pre-warming. Built on Google's global network infrastructure powering Search and YouTube.</p>
<span class="at-stat">global</span> anycast · <span class="at-stat">HTTP/S</span> + <span class="at-stat">TCP</span> + <span class="at-stat">UDP</span> · <span class="at-stat">auto-scaling</span> backends &nbsp;·&nbsp; <span class="at-mark">a single anycast IP distributing traffic across all regions simultaneously</span>

<span class="at-kicker">How It Works</span>
## Overview

Cloud Load Balancing is not a single product but a family of load balancers, each suited to different traffic types, scopes, and architectures. They are broadly divided by **scope** (global vs regional), **traffic type** (HTTP/S, TCP, UDP), and **facing** (external vs internal).

**Global vs Regional**
- **Global load balancers** use Google's anycast IP — a single IP address that routes traffic to the nearest healthy backend anywhere in the world. They use Google's frontend locations (Points of Presence) to terminate connections close to users, providing low latency regardless of where traffic originates.
- **Regional load balancers** distribute traffic within a single GCP region and use regional external or internal IP addresses.

**External vs Internal**
- **External** load balancers accept traffic from the public internet.
- **Internal** load balancers distribute traffic among GCP resources within a VPC, not exposed to the internet. They use internal IP addresses and are ideal for multi-tier applications.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Application Load Balancer**
>> Layer 7 HTTP/S with URL map routing, SSL termination, WebSocket and gRPC support. Cloud CDN and Cloud Armor integration.
>
>> [!card|section]
>> **Proxy Network Load Balancer**
>> Layer 4 TCP/SSL with connection termination at Google's edge. Global anycast IP for external traffic.
>
>> [!card|section]
>> **Passthrough Network Load Balancer**
>> Direct packet pass-through without proxying. Backends see original client IP. For protocols requiring direct server return.
>
>> [!card|section]
>> **Anycast IP & Global Routing**
>> Single IP advertised from every GCP edge PoP worldwide. Users connect to nearest PoP, traffic routed over Google's private backbone.
>
>> [!card|section]
>> **Health Checks**
>> HTTP, HTTPS, HTTP/2, TCP, or SSL probes. Distributed from multiple GCP locations to avoid false positives.
>
>> [!card|section]
>> **Serverless NEGs**
>> Direct load balancing to Cloud Run, Cloud Functions, and App Engine. Fully managed, scalable serverless backends.

## Backend Services

A **Backend Service** defines the group of backends (instance groups, NEGs, or Cloud Storage buckets) that receive traffic, along with:
- **Health checks**: Periodic probes to determine backend health; unhealthy backends are automatically removed from rotation.
- **Balancing mode**: Distribute by connections, requests per second (RPS), or CPU utilization.
- **Session affinity**: Client IP, cookie-based, or header-based sticky sessions.
- **Connection draining**: Gracefully drain existing connections when removing a backend.
- **Cloud CDN policy**: Cache configuration attached to a backend service.

## Network Endpoint Groups (NEGs)

NEGs allow fine-grained load balancing to specific IP:port endpoints rather than entire VM instances. Types include:
- **Zonal NEGs**: GCE VMs or containers in a zone.
- **Internet NEGs**: External endpoints (for hybrid/multi-cloud).
- **Serverless NEGs**: [[cloud-run]], Cloud Functions, App Engine targets.
- **Private Service Connect NEGs**: Endpoints in other VPCs via PSC.

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Global Web Applications**
>> Serve users worldwide with low latency using global external ALB with anycast IP and multi-region backends.
>
>> [!card|section]
>> **Internal Microservices**
>> Use internal Application Load Balancer to route traffic between services within a VPC based on URL paths or headers.
>
>> [!card|section]
>> **Gaming and Real-time Apps**
>> Use Passthrough Network Load Balancer for UDP-based game servers where direct client-server connections are required.
>
>> [!card|section]
>> **Hybrid Load Balancing**
>> Use Internet NEGs to distribute load between GCP backends and on-premises endpoints.
>
>> [!card|section]
>> **Canary Deployments**
>> Split traffic between backend services by weight to gradually roll out new application versions.
>
>> [!card|section]
>> **Serverless Backends**
>> Point a load balancer at [[cloud-run]] services via Serverless NEGs for a fully managed, scalable endpoint.

<span class="at-kicker">Cost Model</span>
## Pricing

Cloud Load Balancing pricing has two main components:

| Dimension | Detail |
|-----------|--------|
| **Forwarding Rules** | Per forwarding rule per hour. First five rules at higher rate; additional rules cheaper. |
| **Data Processed** | Per GB of data processed by the load balancer |
| **Backend Services with Cloud CDN** | CDN cache fills and cache egress charged separately |

There is no charge for health check traffic generated by GCP health checkers to your backends.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD LOAD BALANCING
>> # From *single region* to *globally load-balanced service*.
>> Choose your load balancer type, configure backend services, and set health checks with autoscaling.
>
>> [!card|step]
>> ###### Step 01
>> ### *Choose* load balancer type.
>> HTTP/S for web apps, TCP/SSL for layer 4, UDP for gaming. Global for worldwide reach, regional for single-region.
>
>> [!card|step]
>> ###### Step 02
>> ### *Configure* backend services.
>> Define instance groups, NEGs, or Cloud Storage buckets. Set balancing mode and session affinity as needed.
>
>> [!card|step]
>> ###### Step 03
>> ### *Set* health checks & autoscaling.
>> Configure health check protocols and intervals. Enable autoscaling to match backend capacity to demand.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] Sister Networking Services
>> [[vpc]], [[cloud-cdn]], [[cloud-armor]], [[cloud-dns]], [[cloud-nat]], [[cloud-vpn]], [[network-intelligence-center]]
>
>> [!card] GCP Compute & Platform
>> [[compute-engine]], [[gke]], [[cloud-run]], [[google-cloud-platform]], [[GCP Home]]
