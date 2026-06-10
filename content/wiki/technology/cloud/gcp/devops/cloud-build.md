---
title: Cloud Build
created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Google Cloud Build
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
> # Cloud Build
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service |
> | **Category** | DevOps / CI/CD |
> | **Launched** | 2018 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/build |

---

> "Continuous integration and delivery should be so automatic that developers don't even think about it."
> <cite>— DevOps philosophy</cite>

---

<span class="at-kicker">CI/CD · Google Cloud</span>
# Cloud Build
<p class="at-lead">Cloud Build is Google Cloud's fully managed, serverless CI/CD platform executing builds on Google Cloud infrastructure. Each build step runs in a Docker container, scaling automatically with no infrastructure to provision.</p>
<span class="at-stat">serverless</span> builds · <span class="at-stat">120</span> free build-mins/day · <span class="at-stat">Cloud Build triggers</span> &nbsp;·&nbsp; <span class="at-mark">run any build step in any container — fully managed CI without servers</span>

<span class="at-kicker">How It Works</span>
## Overview

Cloud Build operates around the concept of **build steps** — individual units of work each executed inside a Docker container. The build configuration (`cloudbuild.yaml` or `cloudbuild.json`) declares an ordered (or parallel) sequence of steps, environment variables, secrets, substitution variables, and artifact destinations. Every step runs in Google's secure build environment backed by high-performance compute, with configurable machine types ranging from standard to high-CPU/high-memory workers.

Builds can be triggered automatically via **Cloud Build Triggers** that watch source repositories for events such as pushes to a branch, creation of a tag, or pull request updates. Supported repository providers include Cloud Source Repositories, GitHub, GitLab, and Bitbucket. Trigger filters can match specific branch patterns (using regex), file path globs, or tag patterns, giving teams fine-grained control over when pipelines run.

Cloud Build integrates natively with **Artifact Registry** to push Docker images, Maven JARs, npm packages, and other artifacts directly from build steps without additional authentication configuration. The service account used by Cloud Build can be granted IAM roles to interact with any GCP service — deploying to Cloud Run, updating GKE workloads, or running Terraform plans.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **YAML/JSON Configuration**
>> Declarative pipeline definition with substitution variables, Secret Manager integration, and per-step timeout controls.
>
>> [!card|section]
>> **Container-based Steps**
>> Any public or private Docker image can be a build step. Google provides pre-built builders for gcloud, docker, kubectl, mvn, npm.
>
>> [!card|section]
>> **Parallel Execution**
>> Steps can declare `waitFor` dependencies, enabling DAG-style execution where independent steps run concurrently.
>
>> [!card|section]
>> **Build Triggers**
>> Event-driven from GitHub, GitLab, Bitbucket, and Cloud Source Repositories. Push, PR, and tag events with regex filtering.
>
>> [!card|section]
>> **Private Pools**
>> Dedicated, isolated worker pools within your VPC for builds needing access to private network resources.
>
>> [!card|section]
>> **Build Provenance & SLSA**
>> Generates signed build provenance metadata to support software supply chain security requirements.

## Buildpacks Support

Cloud Build integrates with Google Cloud Buildpacks (based on the CNCF Buildpacks spec) to automatically detect language runtimes and build container images without a Dockerfile.

## Binary Authorization Integration

Enforce policy requiring that only builds with valid provenance attestations can be deployed to GKE or Cloud Run.

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **Application CI/CD Pipelines**
>> Automate build-test-push-deploy lifecycle: checkout, run tests, build Docker image, push to Artifact Registry, deploy to Cloud Run or GKE.
>
>> [!card|section]
>> **Infrastructure as Code**
>> Terraform and Pulumi workflows to plan and apply infrastructure changes on merge. PR builds run `terraform plan` and post results.
>
>> [!card|section]
>> **Multi-environment Promotion**
>> Build once, deploy anywhere. Combined with Cloud Deploy, promote artifacts through dev → staging → production targets.
>
>> [!card|section]
>> **Container Security Scanning**
>> Integrate with Artifact Analysis to scan images for CVEs immediately after push. Fail builds if critical vulnerabilities found.
>
>> [!card|section]
>> **Monorepo Builds**
>> Path-based trigger filters fire separate pipelines only when specific subdirectories change. Keep large repo builds efficient.
>
>> [!card|section]
>> **Scheduled Nightly Builds**
>> Combined with Cloud Scheduler, trigger on cron schedule for dependency updates, integration test suites, or migration dry-runs.

<span class="at-kicker">Cost Model</span>
## Pricing

| Dimension | Detail |
|-----------|--------|
| **Free Tier** | 120 free build-minutes per day on default (e1-standard) pool |
| **Standard Machine** (e2-standard-2) | ~$0.003/build-minute |
| **High-CPU Machine** (e2-highcpu-8) | ~$0.016/build-minute |
| **High-Memory Machine** (e2-highmem-8) | ~$0.025/build-minute |
| **Private Pools** | Billed at compute instance uptime + network egress |

Storage costs apply to build logs in Cloud Logging and artifacts stored in Artifact Registry (billed separately). Trigger creation and invocation are free.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD BUILD
>> # From *git push* to *deployed artifact*.
>> Write your cloudbuild.yaml pipeline, create a build trigger connected to your repo, and monitor build history.
>
>> [!card|step]
>> ###### Step 01
>> ### *Write* cloudbuild.yaml.
>> Define build steps, parallelization with waitFor, substitution variables, and artifact destinations. Test locally with Cloud Build local builder.
>
>> [!card|step]
>> ###### Step 02
>> ### *Create* build trigger.
>> Connect to GitHub, GitLab, Bitbucket, or Cloud Source Repositories. Filter by branch, tag, or changed files.
>
>> [!card|step]
>> ###### Step 03
>> ### *Monitor* build history.
>> View real-time logs in Cloud Console. Set up notifications for build failures. Track build duration and success rates in Cloud Monitoring.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] GCP DevOps
>> [[artifact-registry]], [[cloud-deploy]], [[cloud-shell]], [[eventarc]]
>
>> [!card] GCP Compute & Runtime
>> [[cloud-run]], [[kubernetes-engine]], [[app-engine]]
>
>> [!card] GCP Core
>> [[google-cloud-platform]], [[iam]], [[secret-manager]]
