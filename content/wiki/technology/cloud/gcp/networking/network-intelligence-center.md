---
title: Network Intelligence Center
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - NIC
category: GCP
tags:
  - gcp
  - cloud
  - networking
banner: https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Network Intelligence Center
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed |
> | **Category** | Networking |
> | **Launched** | 2020 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/network-intelligence-center |

---

> "You can't manage what you can't measure."
> <cite>— Peter Drucker</cite>

---

<span class="at-kicker">Network Observability · Google Cloud</span>

# Network Intelligence Center

<p class="at-lead">
Network Intelligence Center (NIC) is Google Cloud's integrated network monitoring, verification, and troubleshooting platform. It brings together multiple tools that provide visibility into the health, topology, performance, and security posture of your GCP network — all accessible from a unified dashboard in the GCP Console.
</p>

<span class="at-stat">5</span> tools in one console &nbsp;·&nbsp; <span class="at-stat">real-time</span> topology &nbsp;·&nbsp; <span class="at-mark">the single pane of glass for GCP network ops</span>

<span class="at-kicker">How It Works</span>

## Overview

Network Intelligence Center comprises five distinct modules, each addressing a different aspect of network observability:

1. **Connectivity Tests** — Verify and troubleshoot network reachability
2. **Network Topology** — Visualize your network architecture and traffic flows
3. **Performance Dashboard** — Monitor inter-region and internet latency and packet loss
4. **Firewall Insights** — Optimize and audit VPC firewall rules
5. **Network Analyzer** — Automated anomaly detection and configuration analysis

Each module can be used independently or together for comprehensive network observability. NIC is designed for network engineers, SREs, and cloud architects who need to understand, validate, and troubleshoot GCP network configurations without low-level packet captures or manual rule tracing.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Connectivity Tests**
>> Performs logical simulation of network paths between sources and destinations within GCP or on-premises. Analyzes firewall rules, routes, and forwarding rules to determine reachability. Returns step-by-step traces showing each network component's decision without sending actual packets.
>
>> [!card|section]
>> **Network Topology**
>> Interactive, auto-generated visual map of GCP network infrastructure aggregating VPC Flow Logs data. Shows visual graphs of VPCs, subnets, VMs, load balancers, VPN gateways with traffic flow overlays and hierarchical drill-down from organization to VM level.
>
>> [!card|section]
>> **Performance Dashboard**
>> Real-time and historical metrics on GCP network performance including inter-region latency (P50, P95, P99), packet loss rates, and internet outage detection. Distinguishes between global GCP issues and project-specific problems using Google's synthetic monitoring probes.
>
>> [!card|section]
>> **Firewall Insights**
>> Analyzes VPC firewall rules to identify shadowed rules, overly permissive configurations, unused allow rules, and active deny hits. Uses ML-based recommendations from the Recommender API to suggest rule tightening based on observed traffic patterns.
>
>> [!card|section]
>> **Network Analyzer**
>> Automated continuous configuration analysis engine detecting connectivity issues, best practice deviations, hybrid connectivity problems (BGP, VPN), and load balancer misconfigurations. Each finding includes severity levels and remediation steps.
>
>> [!card|section]
>> **Unified Observability Platform**
>> All modules accessible from a unified dashboard with cross-module insights. Eliminates manual packet tracing, firewall rule cross-referencing, and raw flow log interpretation. Designed for network engineers, SREs, and cloud architects.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Pre-Deployment Validation**
>> Use Connectivity Tests to verify firewall rules and routes allow intended traffic before deploying new services. Validate that VMs can reach databases and Pods can access external APIs before going live.
>
>> [!card|section]
>> **Incident Troubleshooting**
>> Quickly determine why traffic between two services is failing without manually reading through firewall rules and routing tables. Identify the specific hop where traffic is blocked with step-by-step traces.
>
>> [!card|section]
>> **Security Auditing**
>> Use Firewall Insights to find overly permissive rules, stale rules, and shadowed deny rules as part of a security review. Identify allow rules with no hits that may indicate misconfiguration or attack surface reduction opportunities.
>
>> [!card|section]
>> **Capacity Planning**
>> Use Network Topology traffic overlays to identify high-traffic paths that may need optimization. Visualize traffic volumes between components to understand bandwidth requirements and potential bottlenecks.
>
>> [!card|section]
>> **Performance Baselining**
>> Use Performance Dashboard to establish latency baselines between regions and alert on degradation. Distinguish between GCP infrastructure issues and configuration problems in your own network.
>
>> [!card|section]
>> **Continuous Compliance Monitoring**
>> Use Network Analyzer's automated scanning to catch configuration drift from best practices before it causes incidents. Detect BGP session problems, route advertisement issues, and hybrid connectivity misconfigurations automatically.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
|-----------|--------|
| Connectivity Tests | Charged per test run (first 200 tests per month per project are free; additional tests are charged per test). |
| Network Topology | Requires VPC Flow Logs to be enabled on subnets. Network Topology itself has no direct charge, but Flow Logs generation is charged per GB. |
| Performance Dashboard | No additional charge — included as part of GCP networking. |
| Firewall Insights | Charged based on the number of firewall rules analyzed and recommendations generated. Requires Firewall Rules Logging enabled for hit count data. |
| Network Analyzer | No additional charge for configuration analysis — included as part of GCP networking. |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · NETWORK INTELLIGENCE CENTER
>> # From *network blind spot* to *full visibility*.
>> Diagnose, monitor and optimise your GCP network in 3 steps.
>
>> [!card|step]
>> ###### Step 01
>> ### Run *Connectivity Tests*.
>> Perform logical reachability tests between your services before deployment. Verify that firewall rules, routes, and forwarding rules allow intended traffic paths without sending actual packets.
>
>> [!card|step]
>> ###### Step 02
>> ### Explore *Network Topology*.
>> Visualize your complete GCP network infrastructure with traffic flow overlays. Drill down from organization to VM level, identify unexpected traffic paths, and communicate network designs to stakeholders.
>
>> [!card|step]
>> ###### Step 03
>> ### Act on *Firewall Insights*.
>> Review ML-based recommendations for firewall rule optimization. Remove shadowed rules, tighten overly permissive configurations, and eliminate unused rules to reduce attack surface and improve security posture.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister Networking Services
>> [[vpc]], [[cloud-vpn]], [[cloud-router]], [[cloud-interconnect]], [[cloud-nat]], [[cloud-dns]]
>
>> [!card] GCP Compute & Platform
>> [[compute-engine]], [[gke]], [[cloud-run]], [[google-cloud-platform]], [[GCP Home]]
