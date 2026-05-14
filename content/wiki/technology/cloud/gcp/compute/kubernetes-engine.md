---
title: Google Kubernetes Engine
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 9:28:50 pm
aliases:
  - GKE
  - Kubernetes Engine
category: Cloud
tags:
  - GCP
  - CloudEngineering
  - Containers
  - Kubernetes
banner:
publish: true
---

---

Google Kubernetes Engine (GKE) is a managed Kubernetes service for deploying, scaling, and operating containerized applications on GCP. It abstracts the control plane (Kubernetes masters) so you focus on workloads (source: Google Kubernetes Engine.md).

Kubernetes itself was open-sourced by Google in 2014, drawing on Google's internal container orchestration system (Borg); GKE is the most production-aligned Kubernetes platform of any public cloud (source: Google Cloud Platform (GCP).md).

## Architecture

| Component | Role |
| --- | --- |
| **Master / control-plane nodes** | Schedule pods, maintain desired state, serve the Kubernetes API |
| **Worker nodes** | Run containers, report pod status, route network traffic |
| **Cluster API** | Create/delete clusters, scale node pools |
| **Add-ons** | Monitoring, logging, ingress controllers |
| **GCP services** | Cloud Load Balancing, Persistent Disk, VPC, IAM |

(source: Google Kubernetes Engine.md)

## Operating modes

GKE offers two cluster modes ([cloud docs](https://cloud.google.com/kubernetes-engine/docs/resources/autopilot-standard-feature-comparison)):

- **Autopilot** — Google manages nodes, scaling, security; you pay per pod resource request. Lowest ops burden.
- **Standard** — you manage node pools, machine types, networking; full control, more responsibility.

The raw source predates Autopilot's GA so doesn't cover it (source: Google Kubernetes Engine.md).

## Strengths

- **Autoscaling** — both pods (Horizontal Pod Autoscaler) and nodes (Cluster Autoscaler).
- **Rolling updates and rollbacks** — first-class CI/CD support.
- **Built-in load balancing** via Google Cloud Load Balancing.
- **High availability** — multi-zonal/regional clusters with self-healing.
- **Security** — RBAC, network policies, Workload Identity, Binary Authorization.
- **Observability** — integrates with Cloud Monitoring and Cloud Logging.
- **Hybrid/multi-cloud** via Anthos.

(source: Google Kubernetes Engine.md)

## Trade-offs

- **Cost** — managed convenience > self-hosted Kubernetes on raw VMs (source: Google Kubernetes Engine.md).
- **Complexity** — Kubernetes has a steep learning curve; GKE adds another layer.
- **Lock-in risk** — although Kubernetes itself is portable, GKE-specific add-ons (Workload Identity, Anthos features) create gravity.
- **Customization limits** in Autopilot — no DaemonSets on system nodes, fewer kubelet knobs.

## Use cases

- **Microservices** — many small independently deployed services.
- **Cloud-native apps** designed around containers and declarative config.
- **CI/CD pipelines** with rolling deploys and rollbacks.
- **High-traffic apps** with built-in load balancing and pod autoscaling.
- **Stateful workloads** via StatefulSets + Persistent Disk.

(source: Google Kubernetes Engine.md)

## GKE vs other GCP compute

| | [[compute-engine]] | GKE | [[cloud-run]] | [[app-engine]] | [[cloud-functions]] |
| --- | --- | --- | --- | --- | --- |
| Granularity | VM | Container in a pod | Container | App | Function |
| Manage cluster? | Yes | Partial (none in Autopilot) | No | No | No |
| Cold start | None | Pod-startup time | ms–s | ms | ms |
| Scale to zero | No | Yes (HPA min=0) | Yes | Yes (Standard) | Yes |

## Interesting Facts

- Kubernetes (the open-source project) was inspired by Google's internal **Borg** cluster manager (source: Google Cloud Platform (GCP).md).
- In Autopilot mode you don't even see the underlying VMs — Google bills per-pod CPU/memory.
- GKE supports **headless control plane** patterns via Anthos for hybrid-cloud workloads.

## Interview Questions can be asked

1. Autopilot vs Standard — pick one and justify.
2. How does HPA differ from the Cluster Autoscaler?
3. What's the difference between a Pod, a ReplicaSet, and a Deployment?
4. How do you do zero-downtime deploys on GKE?
5. When would you pick GKE over [[cloud-run]]?

## Related pages

> [!multi-column]
>
>> [!card] Foundations
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../foundations/service-models|Service Models]]
>
>
>> [!card] Sister compute products
>> [[gcp-compute-services|GCP Compute Services]], [[cloud-run|Cloud Run]], [[compute-engine|Compute Engine]]

