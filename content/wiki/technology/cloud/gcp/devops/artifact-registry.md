---
title: Artifact Registry
created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Artifact Registry
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
> # Artifact Registry
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service |
> | **Category** | DevOps / Artifact Management |
> | **Launched** | 2021 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/artifact-registry |

---

> "Artifact management is the foundation of a secure, reproducible software supply chain."
> <cite>— Google Cloud DevOps documentation</cite>

---

<span class="at-kicker">Artifact Management · Google Cloud</span>
# Artifact Registry
<p class="at-lead">Artifact Registry is Google Cloud's universal, fully managed repository service for storing, managing, and securing software build artifacts and container images. The successor to Container Registry supporting multiple package formats in a single service.</p>
<span class="at-stat">Docker</span> + <span class="at-stat">Maven</span> + <span class="at-stat">npm</span> + <span class="at-stat">Python</span> + <span class="at-stat">Go</span> · <span class="at-stat">VPC-native</span> · <span class="at-stat">vulnerability scanning</span> &nbsp;·&nbsp; <span class="at-mark">the universal private package registry for all GCP artifact types</span>

<span class="at-kicker">How It Works</span>
## Overview

Artifact Registry organises artifacts into **repositories**, each scoped to a specific format and region. Unlike Container Registry (which used GCS buckets behind the scenes), Artifact Registry is a first-class API-driven service with per-repository IAM policies, VPC Service Controls support, and organisation-level controls. Each repository is tied to a single **format** (Docker, Maven, npm, Python, Apt, Yum, Helm, Rust, Ruby, KFP — Kubeflow Pipelines) and a **location** (regional or multi-region).

**Regional vs. multi-region** repositories trade latency for redundancy. Regional repositories (e.g., `us-central1`, `europe-west1`) offer lower-latency access within a single GCP region and meet data residency requirements. Multi-region repositories (`us`, `europe`, `asia`) replicate data across multiple regions, delivering high availability and improved download throughput for geographically distributed teams.

Artifact Registry replaced **Container Registry** (`gcr.io`) which reached end of life in 2024. Migration tooling (`gcloud artifacts docker upgrade`) helps teams move existing `gcr.io` images and references to the new `<region>-docker.pkg.dev` hostname format.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Multi-format Support**
>> Docker, Maven, npm, Python, Helm, Apt, Yum, Rust, and Kubeflow Pipeline artifacts. Single service for all artifact types.
>
>> [!card|section]
>> **Fine-grained IAM**
>> Repository-level IAM policies. Precise role assignments independently per repository for least privilege.
>
>> [!card|section]
>> **Vulnerability Scanning**
>> Automatic or on-demand scanning for OS-level CVEs using Container Analysis. Surface results in Console and API.
>
>> [!card|section]
>> **CMEK Support**
>> Encrypt repositories with Cloud KMS keys. Meet compliance requirements prohibiting Google-managed encryption.
>
>> [!card|section]
>> **VPC Service Controls**
>> Add repositories to VPC Service Controls perimeters. Prevent data exfiltration and restrict to authorized VPCs only.
>
>> [!card|section]
>> **Binary Authorization**
>> Enforce attested, signed images from trusted registries for GKE and Cloud Run deployments.

## Remote and Virtual Repositories

- **Remote repositories** proxy and cache artifacts from upstream public registries (Docker Hub, Maven Central, PyPI, npm registry)
- **Virtual repositories** aggregate multiple upstream sources behind a single endpoint

## Cleanup Policies

Automated retention policies can delete untagged images or artifacts older than a configurable age, keeping storage costs under control without manual intervention.

## Tag Immutability

Repositories can enforce tag immutability to prevent overwriting existing tags, ensuring reproducible deployments.

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Central Image Registry**
>> Store all production Docker and OCI images in regional repositories co-located with GKE clusters for fast pulls and minimal egress.
>
>> [!card|section]
>> **Private Package Mirror**
>> Publish internal libraries to npm, Python, or Maven repositories. Keep proprietary packages private with same toolchain as public.
>
>> [!card|section]
>> **Supply Chain Security**
>> Integrate Artifact Analysis vulnerability scanning and Binary Authorization into CI/CD for security-gated production deployments.
>
>> [!card|section]
>> **Dependency Proxying**
>> Cache Docker Hub or Maven Central pulls within Google's network. Reduce external bandwidth and protect from upstream outages.
>
>> [!card|section]
>> **Helm Chart Repository**
>> Publish versioned Helm charts for `helm pull` and `helm install` directly from registry. No separate chart museum needed.
>
>> [!card|section]
>> **Multi-region Distribution**
>> Use multi-region repositories (`us`, `europe`, `asia`) to serve images with low latency from whichever region runs workloads.

<span class="at-kicker">Cost Model</span>
## Pricing

| Dimension | Detail |
|-----------|--------|
| **Storage** | ~$0.10/GB/month for all formats |
| **Egress Same Region** | Free (e.g., GKE pulling images in same region) |
| **Egress Different Region** | Standard inter-region network rates |
| **Egress to Internet** | Standard Google Cloud internet egress rates |
| **Vulnerability Scanning** | First scan of each unique layer free; re-scanning may incur Container Analysis API costs |

There are no per-request charges for push/pull operations; costs are primarily driven by storage size and data movement across region boundaries.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · ARTIFACT REGISTRY
>> # From *public image* to *private registry*.
>> Create a repository for your artifact format, push your artifacts, and pull them in Cloud Build for deployment.
>
>> [!card|step]
>> ###### Step 01
>> ### *Create* repository.
>> Choose format (Docker, Maven, npm, etc.) and location (regional or multi-region). Configure IAM and encryption settings.
>
>> [!card|step]
>> ###### Step 02
>> ### *Push* artifact.
>> Use standard tooling (docker push, mvn deploy, npm publish) authenticated via gcloud. Store images, packages, and charts.
>
>> [!card|step]
>> ###### Step 03
>> ### *Pull* in Cloud Build.
>> Reference artifacts in your build pipeline. Cloud Build authenticates automatically with the build service account identity.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] GCP DevOps
>> [[cloud-build]], [[cloud-deploy]], [[cloud-shell]], [[eventarc]]
>
>> [!card] GCP Compute & Runtime
>> [[cloud-run]], [[kubernetes-engine]], [[app-engine]]
>
>> [!card] GCP Core
>> [[google-cloud-platform]], [[iam]], [[binary-authorization]]
