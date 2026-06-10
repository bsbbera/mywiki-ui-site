---
title: Identity and Access Management (IAM)
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - IAM
category: GCP
tags:
  - gcp
  - cloud
  - security
  - iam
  - access-control
  - identity
banner: https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Identity and Access Management
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service |
> | **Category** | Security |
> | **Launched** | 2017 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/iam |

---

> "Identity is the new perimeter."
> <cite>— Eric Schmidt, Former CEO of Google</cite>

---

<span class="at-kicker">Identity & Access Management · Google Cloud</span>

# Identity and Access Management (IAM)

<p class="at-lead">Google Cloud IAM is a unified resource management system that provides granular access control to GCP resources, defining and enforcing who can do what on which resource across the entire Google Cloud infrastructure.</p>

<span class="at-stat">2000+</span> permissions &nbsp;·&nbsp; <span class="at-stat">resource hierarchy</span>-based &nbsp;·&nbsp; <span class="at-stat">Workload Identity Federation</span> &nbsp;·&nbsp; <span class="at-mark">who can do what on which resource — the security foundation of GCP</span>

<span class="at-kicker">How It Works</span>

## Overview

IAM provides a hierarchical resource structure where policies can be applied at the organization, folder, project, or individual resource level. The system revolves around four core concepts: principals (who), roles (what permissions), resources (where), and policies (the binding mechanism). IAM supports various principal types including Google accounts, service accounts, Google groups, Google Workspace domains, and external identities via Workload Identity Federation. The permission model is built on a vast collection of fine-grained permissions (like `compute.instances.start` or `storage.buckets.create`) that are grouped into roles.

IAM offers three role categories: **Primitive roles** (Owner, Editor, Viewer) provide broad access but are discouraged for production; **Predefined roles** offer service-specific permissions curated by Google (e.g., `roles/compute.instanceAdmin`); and **Custom roles** allow organizations to define precise permission sets for their unique requirements. IAM policies are represented as JSON or YAML documents that bind roles to principals on specific resources.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ##### Resource-Level Permissions
>> Grant access to specific resources rather than project-wide access, minimizing blast radius. Policies are inherited down the resource hierarchy—organization → folder → project → resource—with more specific bindings taking precedence.
>
>> [!card|section]
>> ##### IAM Conditions & Deny Policies
>> Attribute-based access control using conditions like time-of-day, resource tags, or request origin. Deny policies explicitly block permissions that override any allow policies—creating guardrails that cannot be circumvented by lower-level bindings.
>
>> [!card|section]
>> ##### Workload Identity Federation
>> Exchange external identity tokens (AWS, Azure, GitHub Actions, OIDC) for Google access tokens without creating or managing service account keys—eliminating the #1 source of GCP credential leakage.

> [!grid|cols3]
>
>> [!card|section]
>> ##### Policy Analyzer & Recommender
>> Query who has access to what resources and audit permission changes with Policy Analyzer. IAM Recommender uses machine learning to surface excess permissions and suggest least-privilege role replacements based on actual usage data.
>
>> [!card|section]
>> ##### Service Account Management
>> Programmatic identity for applications and services with automatic key rotation. Grant just-in-time temporary elevated privileges for break-glass scenarios with full audit trail, eliminating the need for standing privileged access.
>
>> [!card|section]
>> ##### Tags for Access Control & Audit Logging
>> Apply IAM policies based on resource metadata tags for scalable, attribute-driven access management. Comprehensive logs of all IAM policy changes and access attempts stream to Cloud Audit Logs for SIEM integration.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ##### Multi-Tenant Environments & CI/CD
>> Isolate resources and access between different teams or customers within shared infrastructure using project-level or resource-level bindings. Use service accounts with minimal permissions for build and deployment automation, replacing long-lived keys with Workload Identity Federation.
>
>> [!card|section]
>> ##### Compliance & Separation of Duties
>> Implement separation of duties and enforce least privilege for regulatory compliance (SOC 2, PCI-DSS). Ensure no single principal can both create and approve critical changes by combining deny policies with custom role definitions.

> [!grid|cols2]
>
>> [!card|section]
>> ##### Third-Party Integrations & Cross-Project Resources
>> Securely grant external applications limited access via Workload Identity Federation without issuing service account keys. Share resources across projects while maintaining strict access boundaries using cross-project IAM bindings and VPC Service Controls.
>
>> [!card|section]
>> ##### Break-Glass & Emergency Access
>> Implement documented emergency access procedures with time-bound IAM Conditions that automatically expire elevated privileges. All break-glass events produce immutable audit log entries for post-incident review and compliance evidence.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **IAM service** | Free — no charge for IAM policy management, role bindings, or permission evaluation |
| **Policy Analyzer** | Free for basic queries; advanced organization-level analysis included in Security Command Center Premium |
| **IAM Recommender** | Free tier available; higher-volume recommendations may require Security Command Center |
| **Workload Identity Federation** | Free — no charge for token exchange or federation configuration |
| **Audit logging** | Admin Activity logs free (400-day retention); Data Access logs charged at Cloud Logging ingestion rates |
| **Custom roles** | Free — no charge for defining or assigning custom roles |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD IAM
>> # From *open access* to *least-privilege IAM*.
>> Audit what exists, tighten bindings to least privilege, then replace service account keys with keyless Workload Identity.
>
>> [!card|step]
>> ###### Step 01
>> ### *Audit* current IAM bindings.
>> Use Policy Analyzer and IAM Recommender to enumerate who has access to what. Export IAM policies to a BigQuery dataset for organization-wide analysis and identify primitive roles, dormant service accounts, and over-permissioned principals.
>
>> [!card|step]
>> ###### Step 02
>> ### *Apply* principle of least privilege.
>> Replace Owner/Editor primitive roles with scoped predefined or custom roles. Use deny policies to create non-overridable guardrails, apply IAM Conditions for time-bound and attribute-based access, and remove all stale bindings.
>
>> [!card|step]
>> ###### Step 03
>> ### *Use* service accounts for workloads.
>> Eliminate service account key files by configuring Workload Identity Federation for CI/CD pipelines and external workloads. Attach service accounts directly to GKE pods and Cloud Run services for automatic credential management.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister Security Services
>> [[secret-manager]], [[cloud-kms]], [[security-command-center]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]], [[vpc]]
