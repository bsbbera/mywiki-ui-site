---
title: Cloud Deploy
created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Cloud Deploy
category: GCP
tags:
  - gcp
  - cloud
  - devops
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Deploy
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service |
> | **Category** | DevOps / Continuous Delivery |
> | **Launched** | 2021 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/deploy |

---

> "Continuous delivery is not a luxury; it is a discipline that separates teams that ship value from teams that ship risk."
> <cite>— Jez Humble, co-author of *Continuous Delivery*</cite>

---

<span class="at-kicker">Continuous Delivery · Google Cloud</span>
# Cloud Deploy
<p class="at-lead">Cloud Deploy is Google Cloud's fully managed continuous delivery service automating progressive promotion of software releases across deployment targets. Enforces best practices: immutable artifacts, approval gates, and rollback capabilities.</p>
<span class="at-stat">GKE</span> + <span class="at-stat">Cloud Run</span> + <span class="at-stat">GCE</span> targets · <span class="at-stat">approval gates</span> · <span class="at-stat">canary</span> + <span class="at-stat">blue/green</span> &nbsp;·&nbsp; <span class="at-mark">manage progressive delivery across all GCP targets from one pipeline</span>

<span class="at-kicker">How It Works</span>
## Overview

Cloud Deploy models a software delivery process as a **delivery pipeline** — a declared sequence of **targets** (environments) through which a release is promoted. A **release** is created once from a set of manifests (Kubernetes, Helm, Skaffold) and a container image reference; that exact artifact is then promoted — not rebuilt — through each target in sequence. This immutability guarantees that what is tested in staging is exactly what reaches production.

**Targets** represent individual deployment environments: a specific GKE cluster, a Cloud Run service in a given region, or an Anthos cluster (on-prem or multi-cloud). Each target has its own Skaffold profile and can specify environment-specific values such as replica counts, resource limits, or feature flags.

A **rollout** is created each time a release is deployed to a target. Rollouts track deployment state, log all activity, and support multiple deployment strategies. When a rollout completes successfully (or fails), Cloud Deploy can optionally auto-promote to the next target or wait for a manual approval gate.

Cloud Deploy uses **Skaffold** as its rendering and deployment engine under the hood, meaning teams can use familiar `skaffold.yaml` configurations, raw `kubectl` manifests, Helm charts, or Kustomize overlays as their deployment manifests.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Delivery Pipelines**
>> YAML-declared ordered sequence of targets. A single pipeline definition governs the entire path from dev to production.
>
>> [!card|section]
>> **Promotion & Approval Gates**
>> Manual approval from designated approvers before production. Human-in-the-loop gate enforced via IAM roles.
>
>> [!card|section]
>> **Canary Deployment**
>> Progressively route configurable percentage of traffic to new version before completing rollout.
>
>> [!card|section]
>> **Blue/Green Deployment**
>> Deploy new version alongside existing. Switch traffic atomically after validation. Fast rollback retained.
>
>> [!card|section]
>> **Rollback Support**
>> Single-command rollback to any previous successful release. Re-deploys exact manifests and image digests.
>
>> [!card|section]
>> **Multi-target Deployments**
>> Deploy to multiple targets in parallel (e.g., all regional GKE clusters). Global rollouts with single promotion action.

## Release Lifecycle Tracking

Full audit trail of every rollout, approval, promotion, and rollback event stored in Cloud Logging and surfaced in the Console timeline view.

## Anthos and Hybrid Targets

Supports GKE Autopilot, Standard, on-prem Anthos clusters, and AWS/Azure Anthos clusters as targets in a single delivery pipeline.

## Pub/Sub Notifications

Rollout state changes publish events to Pub/Sub, enabling integration with ticketing systems, chat notifications, or custom automation workflows.

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Staged Production Promotion**
>> Delivery pipeline with `dev → staging → production` targets ensures every change is validated before reaching end users.
>
>> [!card|section]
>> **Canary Releases**
>> Route 5% of traffic to new version, monitor error rates and latency via Cloud Monitoring, proceed or rollback.
>
>> [!card|section]
>> **Multi-region Global Deployment**
>> Deploy simultaneously to `us-central1`, `europe-west1`, and `asia-east1` clusters with single promotion action.
>
>> [!card|section]
>> **GitOps Workflows**
>> Merge to main triggers build, pushes to Artifact Registry, creates Cloud Deploy release, and auto-promotes through non-production targets.
>
>> [!card|section]
>> **Microservices Fleet Management**
>> One delivery pipeline per service, all sharing common target structure. Consistent promotion policies across entire fleet.

<span class="at-kicker">Cost Model</span>
## Pricing

| Dimension | Detail |
|-----------|--------|
| **Per-target Deployment** | ~$0.02 per target per deployment (rollout) |
| **Active Pipelines** | No charge for having pipelines defined |
| **Free Tier** | First several deployments per month under free tier |
| **Infrastructure Costs** | GKE or Cloud Run compute billed separately |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD DEPLOY
>> # From *built artifact* to *production deployment*.
>> Define your delivery pipeline, promote releases through stages, and approve production rollout with confidence.
>
>> [!card|step]
>> ###### Step 01
>> ### *Define* delivery pipeline.
>> Create YAML-declared sequence of targets (dev, staging, production). Specify Skaffold profiles for each target.
>
>> [!card|step]
>> ###### Step 02
>> ### *Promote* through stages.
>> Create release from Artifact Registry image and manifests. Promote through targets with canary or blue/green strategies.
>
>> [!card|step]
>> ###### Step 03
>> ### *Approve* production rollout.
>> Designated approvers review and approve via Console or gcloud. Rollback to any previous release if issues arise.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] GCP DevOps
>> [[cloud-build]], [[artifact-registry]], [[cloud-shell]], [[eventarc]]
>
>> [!card] GCP Compute & Runtime
>> [[cloud-run]], [[kubernetes-engine]], [[anthos]]
>
>> [!card] GCP Core
>> [[google-cloud-platform]], [[iam]], [[pubsub]]
