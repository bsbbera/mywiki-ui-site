---
title: Container Analysis
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Container Analysis
  - Vulnerability Scanning
  - Container Security
  - Artifact Scanning
category: Cloud
tags:
  - Cloud
  - GCP
  - Security
  - Containers
  - DevSecOps
banner:
publish: true
---

> [!quote]
> *You cannot secure what you do not scan. Container analysis reveals vulnerabilities before they reach production.*
> — DevSecOps Principles

# Container Analysis

<p class="at-lead">
Container Analysis is Google Cloud Platform's vulnerability scanning and metadata storage service for container images. It automatically scans images pushed to Artifact Registry and Container Registry, detecting known security vulnerabilities in operating system packages and providing actionable remediation guidance.
</p>

## Overview

Container Analysis integrates with Artifact Registry to provide continuous scanning of container images. It produces structured metadata including vulnerability occurrences, build provenance, and package information that can be queried via API or used in CI/CD gates to prevent deploying vulnerable containers. Combined with Binary Authorization, it enables policy enforcement that only permits images passing security checks to run in GKE.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[binary-authorization]], [[artifact-registry]], [[security-command-center]]
>
>> [!card] Parent topic
>> [[gcp-security]]
>
>> [!card] See also
>> [[kubernetes]], [[devops-sre]], [[cloud-build]]
