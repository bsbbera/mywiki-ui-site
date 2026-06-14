---
title: Google Kubernetes Engine
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - GKE
  - Google Kubernetes Engine
  - Managed Kubernetes
  - Kubernetes on GCP
category: Cloud
tags:
  - Cloud
  - GCP
  - Compute
  - Kubernetes
  - Containers
banner:
publish: true
---

> [!quote]
> *Kubernetes is the operating system of the cloud — and GKE is its managed, enterprise-grade distribution.*
> — Cloud Native Computing

# Google Kubernetes Engine (GKE)

<p class="at-lead">
Google Kubernetes Engine (GKE) is a managed Kubernetes service on Google Cloud Platform that automates the deployment, scaling, and management of containerised applications. It offers both Autopilot mode for hands-off operations and Standard mode for full control over cluster configuration.
</p>

## Overview

GKE integrates deeply with GCP's networking, IAM, and observability stack, providing features like workload identity, binary authorisation, and multi-cluster ingress. It supports node auto-provisioning, automatic upgrades, and node auto-repair. GKE Autopilot abstracts away node management entirely, charging per pod rather than per provisioned VM, making it ideal for teams that want Kubernetes benefits without operational complexity.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[kubernetes-engine]], [[kubernetes]], [[cloud-run]]
>
>> [!card] Parent topic
>> [[gcp-compute]]
>
>> [!card] See also
>> [[docker]], [[devops-sre]], [[terraform]]
