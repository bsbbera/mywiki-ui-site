---
title: Binary Authorization
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Binary Auth
category: GCP
tags:
  - gcp
  - cloud
  - security
  - containers
  - supply-chain
  - signing
  - attestation
  - devsecops
banner: https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Binary Authorization
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Policy Service |
> | **Category** | Security |
> | **Launched** | 2018 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/binary-authorization |

---

> "Trust is good, but verification is better."
> <cite>— DevSecOps Principle</cite>

---

<span class="at-kicker">Supply Chain Security · Google Cloud</span>

# Binary Authorization

<p class="at-lead">Binary Authorization is Google Cloud's deploy-time security control that enforces container image provenance and integrity policies for GKE and Cloud Run deployments, requiring cryptographic attestations from authorized signers before any image reaches production.</p>

<span class="at-stat">attestation</span>-based &nbsp;·&nbsp; <span class="at-stat">GKE</span> + <span class="at-stat">Cloud Run</span> + <span class="at-stat">GCF</span> · <span class="at-stat">Binary Auth</span> policies &nbsp;·&nbsp; <span class="at-mark">only signed, verified container images reach production</span>

<span class="at-kicker">How It Works</span>

## Overview

Binary Authorization integrates directly with Google Kubernetes Engine (GKE) and Cloud Run as an admission controller that intercepts deployment requests before pods or services are created. It evaluates images against configurable policies that specify which attestations (signatures) are required for deployment approval. The service uses Google Cloud KMS for key management and supports multiple attestation formats including PKIX signatures and PGP signatures. Policies can be configured at the project, cluster, or namespace level, enabling fine-grained deployment controls across different environments. Binary Authorization works seamlessly with Google Cloud Build for automated signing during the CI/CD pipeline, Container Analysis for vulnerability scanning integration, and Security Command Center for policy violation reporting. The service provides a break-glass capability for emergency deployments when normal attestation requirements cannot be met, with comprehensive audit logging of all deployment decisions.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ##### Policy-Based Enforcement
>> Require specific attestations based on image path, cluster, or namespace. Policies can be scoped as broadly as a project or as narrowly as a single Kubernetes namespace.
>
>> [!card|section]
>> ##### Multiple Attestation Types
>> Support for PKIX, PGP, and Simple Signing formats. Combine multiple attestation types to satisfy different verifier requirements across your organization.
>
>> [!card|section]
>> ##### Attestor & KMS Integration
>> Create and manage trusted signers with KMS-backed signing keys. Cloud HSM-backed keys supported for high-assurance environments requiring FIPS 140-2 Level 3 compliance.

> [!grid|cols3]
>
>> [!card|section]
>> ##### Cloud Build Integration
>> Automatically sign images during build pipelines, embedding attestations directly in the CI/CD workflow. Combine with Container Analysis to block images with critical vulnerabilities.
>
>> [!card|section]
>> ##### Break-Glass & Dry-Run
>> Emergency override capability with mandatory justification and full audit trail. Dry-run mode lets you test policies without blocking deployments to evaluate impact safely before enforcement.
>
>> [!card|section]
>> ##### Continuous Validation & Audit
>> Monitor and report on policy violations for already-deployed workloads. Complete logging of all deployment decisions, break-glass usage, and namespace-level policy overrides sent to Security Command Center.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ##### Supply Chain & Multi-Stage Security
>> Ensure only images built by authorized CI/CD pipelines reach production. Require separate attestations for build, vulnerability scan, and security review stages—creating defense-in-depth that prevents both insider threats and malicious code injection from reaching live environments.
>
>> [!card|section]
>> ##### Regulatory Compliance & Deployment Gates
>> Demonstrate control over software deployment for audit requirements such as SOC 2 and PCI-DSS. Require QA approval attestation before any production deployment, with third-party software control via vendor signature verification.

> [!grid|cols2]
>
>> [!card|section]
>> ##### Environment Segregation
>> Apply different attestation requirements for staging versus production namespaces, enforcing image freshness limits and keeping unvetted development builds isolated from customer-facing infrastructure.
>
>> [!card|section]
>> ##### DevSecOps Pipelines & Emergency Response
>> Automate security verification without manual checkpoints by integrating signing into Cloud Build or Cloud Deploy. Documented break-glass procedures with mandatory approval and audit trail for critical hotfix deployments.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Service cost** | Free — no charge for Binary Authorization itself |
| **KMS signing keys** | Standard Cloud KMS pricing applies per key version and cryptographic operation |
| **Cloud HSM keys** | Higher per-operation cost for HSM-backed attestor keys (FIPS 140-2 Level 3) |
| **Container Analysis** | Vulnerability scanning priced per container image scanned |
| **Audit logging** | Cloud Audit Logs generated at no additional charge; Cloud Logging ingestion rates apply |
| **Break-glass events** | No additional cost; logged to Cloud Audit Logs automatically |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · BINARY AUTHORIZATION
>> # From *unverified image* to *attested deployment*.
>> Configure attestors and policies once, sign images automatically in CI/CD, then enforce at every deploy.
>
>> [!card|step]
>> ###### Step 01
>> ### *Configure* attestors & policies.
>> Create attestors backed by Cloud KMS keys and define project-, cluster-, or namespace-level policies specifying which attestations are required before any image is admitted.
>
>> [!card|step]
>> ###### Step 02
>> ### *Sign* images in CI/CD.
>> Integrate Cloud Build steps to cryptographically attest images after build, vulnerability scanning, and security review pass—embedding the attestation in Container Analysis automatically.
>
>> [!card|step]
>> ###### Step 03
>> ### *Enforce* at deploy time.
>> Binary Authorization's admission controller validates attestations on every GKE pod creation and Cloud Run deployment, blocking unattested images and logging all decisions.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister Security Services
>> [[certificate-authority-service]], [[security-command-center]], [[container-analysis]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]], [[gke]]
