---
title: Cloud Workstations
created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Cloud Workstations
category: GCP
tags:
  - gcp
  - cloud
  - devops
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Workstations
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service / PaaS |
> | **Category** | DevOps / Developer Tools |
> | **Launched** | 2023 |
> | **Interface** | Console, gcloud CLI, Browser, SSH |
> | **Website** | https://cloud.google.com/workstations |

---

> "Developer productivity is a force multiplier. Giving engineers consistent, powerful, secure environments eliminates entire categories of 'it works on my machine' problems."
> <cite>— Platform engineering principles</cite>

---

<span class="at-kicker">Cloud Dev Environment · Google Cloud</span>
# Cloud Workstations
<p class="at-lead">Cloud Workstations is Google Cloud's fully managed cloud-based developer workstation service providing secure, customizable, and consistent development environments running entirely in the cloud. Designed to replace the traditional developer laptop.</p>
<span class="at-stat">VS Code</span> in browser · <span class="at-stat">custom container</span> images · <span class="at-stat">IAP</span>-secured access &nbsp;·&nbsp; <span class="at-mark">fully managed cloud dev environments — consistent, secure, no local config</span>

<span class="at-kicker">How It Works</span>
## Overview

A Cloud Workstation environment is defined by a **workstation configuration** — a reusable template that specifies the machine type, boot disk, container image, VPC network configuration, and idle-timeout policy. Administrators create one or more configurations and grant teams access to provision their own **workstation instances** from those templates. This model gives platform teams centralized control over the development environment specification while giving individual developers on-demand, self-service access.

The core of a workstation is a **container image** running on top of the Compute Engine VM. Google provides base images pre-loaded with VS Code (Code OSS), JetBrains Gateway support, IntelliJ IDEA, PyCharm, GoLand, and other IDEs. Organizations can layer custom toolchains, compilers, SDKs, linters, and internal CLI tools on top of a base image, ensuring every developer on the team works in an identical environment regardless of their local OS.

The **persistent disk** attached to each workstation survives VM restarts and idle stop/start cycles, preserving the developer's home directory, checked-out repositories, IDE settings, and shell history — unlike ephemeral environments.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Managed Compute Engine VMs**
>> Dedicated instances with configurable machine types from n1-standard-4 to n1-highmem-32. Power for large codebases and compilation.
>
>> [!card|section]
>> **Container-based Environment**
>> Developer environment runs as Docker container on the VM. Custom images built on Google's base images and stored in Artifact Registry.
>
>> [!card|section]
>> **Persistent Disk**
>> SSD home disk persists across idle stop/start cycles. Retain code, history, and IDE state. Configure size 50-200 GB.
>
>> [!card|section]
>> **Idle Auto-stop**
>> Automatically stop after configurable idle period (30 min - 2 hours). Eliminate wasted compute; restart in under 60 seconds.
>
>> [!card|section]
>> **VPC-connected**
>> Run inside customer's VPC with access to internal resources. No public IP required; access via Identity-Aware Proxy (IAP) tunneling.
>
>> [!card|section]
>> **Browser IDE**
>> VS Code (Code OSS) or JetBrains IDEs accessible directly in browser via HTTPS. No VPN or local installation required.

## Native IDE Integration

Developers can also connect using VS Code Remote-SSH, JetBrains Gateway, or standard SSH over IAP tunnel, preserving their familiar local IDE experience while the compute runs in the cloud.

## IAM Access Control

Workstation clusters, configurations, and instances are controlled via standard GCP IAM roles. Admins grant `roles/workstations.operationViewer`, `roles/workstations.user`, or custom roles per team.

## Forced Tunnel

Organizations can configure workstations to route all traffic through the VPC and disable direct internet access, preventing data exfiltration while still allowing access to internal resources.

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Standardized Onboarding**
>> New engineers get fully configured workstation in minutes rather than days. Platform team maintains pre-installed and validated tools.
>
>> [!card|section]
>> **Secure Regulated Environments**
>> Financial services, healthcare, government: source code never leaves Google's infrastructure. VPC Service Controls enforce data perimeters. CMEK satisfies compliance.
>
>> [!card|section]
>> **Remote and Distributed Teams**
>> Developers connect to workstations in nearest GCP region. Eliminate VPN performance degradation from distributed access to on-prem servers.
>
>> [!card|section]
>> **Ephemeral Feature Branch Environments**
>> Create fresh workstation from clean snapshot for each major feature branch. Work in isolation; delete when branch merges. No cross-contamination.
>
>> [!card|section]
>> **GPU-accelerated ML Development**
>> Data scientists provision workstations with NVIDIA GPUs (A100, T4) and custom images containing CUDA, PyTorch, Jupyter. Browser notebook environment with direct GPU access.
>
>> [!card|section]
>> **Contractor Access**
>> Time-limited workstation access via IAM conditions. All work contained in VPC; delete workstation and revoke access when engagement ends. No code leakage risk.

<span class="at-kicker">Cost Model</span>
## Pricing

| Dimension | Detail |
|-----------|--------|
| **Compute** | Billed at underlying Compute Engine VM rate while workstation is running. Stopped workstations incur no compute cost. |
| **Persistent Disk** | Billed at standard Persistent Disk SSD pricing (~$0.17/GB/month) regardless of running or stopped state. |
| **Workstation Service Fee** | Per-hour fee per active workstation (~$0.30-$0.50/hour) covering managed control plane, IAP tunneling, and IDE serving. |
| **Idle Auto-stop** | Saves significant cost by ensuring workstations only incur compute charges during actual use. |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD WORKSTATIONS
>> # From *local laptop* to *cloud workstation*.
>> Create a workstation cluster, configure workstation specifications, and connect via browser or VS Code for remote development.
>
>> [!card|step]
>> ###### Step 01
>> ### *Create* workstation cluster.
>> Set up the underlying infrastructure group tied to your VPC and region. Configures the control plane for IAP tunneling and VM lifecycle.
>
>> [!card|step]
>> ###### Step 02
>> ### *Configure* workstation config.
>> Define machine type, container image, persistent disk size, and idle timeout. Build on Google's base images or create custom ones.
>
>> [!card|step]
>> ###### Step 03
>> ### *Connect* via browser or VS Code.
>> Access the browser IDE directly or use VS Code Remote-SSH / JetBrains Gateway. All compute in cloud, familiar local IDE experience.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] GCP DevOps
>> [[cloud-build]], [[artifact-registry]], [[cloud-shell]], [[cloud-deploy]]
>
>> [!card] GCP Compute & Runtime
>> [[compute-engine]], [[cloud-run]], [[kubernetes-engine]]
>
>> [!card] GCP Core
>> [[google-cloud-platform]], [[iam]], [[vpc]], [[identity-aware-proxy]]
