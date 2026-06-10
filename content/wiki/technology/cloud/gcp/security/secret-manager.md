---
title: Secret Manager
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Secret Manager
category: GCP
tags:
  - gcp
  - cloud
  - security
  - secrets
  - secret-management
  - credentials
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Secret Manager
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service |
> | **Category** | Security |
> | **Launched** | 2020 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/secret-manager |

---

> "A secret is not something you keep, it's something you manage."
> <cite>— Cloud Security Principles</cite>

---

<span class="at-kicker">Secrets Management · Google Cloud</span>

# Secret Manager

<p class="at-lead">Secret Manager is Google Cloud's centralized, fully managed vault for API keys, passwords, and certificates—eliminating hardcoded credentials with versioned, audited, and automatically rotated secret storage.</p>

<span class="at-stat">versioned</span> secrets &nbsp;·&nbsp; <span class="at-stat">automatic rotation</span> &nbsp;·&nbsp; <span class="at-stat">audit logging</span> every access &nbsp;·&nbsp; <span class="at-mark">never hardcode credentials — store and rotate them centrally</span>

<span class="at-kicker">How It Works</span>

## Overview

Secret Manager provides a secure API-driven interface for storing and retrieving secrets. Each secret is a logical resource that can hold multiple versions, enabling secret rotation without changing application references. Secrets are stored as immutable versions, meaning once a version is created, its payload cannot be modified—ensuring version integrity and providing an automatic audit trail. The service integrates deeply with other GCP services: Cloud Functions, Cloud Run, GKE, and Compute Engine can all access secrets through native IAM bindings without explicit API calls. Secret Manager supports automatic rotation through Cloud Functions triggers and integrates with Cloud KMS for customer-managed encryption keys (CMEK).

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ##### Versioned Secrets
>> Store multiple immutable versions of the same secret for seamless rotation workflows. Applications reference the `latest` version or a pinned version number, enabling zero-downtime rotation and instant rollback if a new credential proves problematic.
>
>> [!card|section]
>> ##### Automatic Replication & CMEK
>> Regional secrets stay within specified regions for data residency compliance; global secrets replicate across regions for high availability. Use Cloud KMS customer-managed keys (CMEK) for full customer-controlled encryption at rest.
>
>> [!card|section]
>> ##### Secret Rotation via Cloud Functions
>> Trigger Cloud Functions on secret events for automatic rotation schedules. Pub/Sub notifications alert downstream systems when secrets are accessed, modified, or rotated—enabling event-driven credential lifecycle management.

> [!grid|cols3]
>
>> [!card|section]
>> ##### Native Runtime Integration
>> Mount secrets as environment variables or volume files in Cloud Run and GKE workloads without explicit API calls. Cloud Functions and App Engine access secrets via IAM bindings, keeping credentials entirely out of container images and configuration files.
>
>> [!card|section]
>> ##### Fine-Grained IAM & VPC Service Controls
>> Grant access to specific secrets or versions using IAM policies with `roles/secretmanager.secretAccessor`. Combine with VPC Service Controls to restrict secret access to specific VPC networks and prevent data exfiltration.
>
>> [!card|section]
>> ##### Audit Logging & Secret Expiration
>> Complete logging of every access and modification via Cloud Audit Logs—capturing who accessed which secret version and when. Set TTLs on secret versions for automatic cleanup of time-limited credentials like temporary tokens.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ##### Application Credential Management & CI/CD
>> Store database passwords, API keys, and OAuth tokens securely outside application code. Inject secrets into build and deployment pipelines via native integrations without exposing values in logs, environment variables, or configuration files checked into source control.
>
>> [!card|section]
>> ##### Container & Microservice Security
>> Mount secrets into containers at runtime without baking them into images. Secure service-to-service authentication using shared secrets stored centrally—ensuring every microservice references the same authoritative credential store with full access audit trails.

> [!grid|cols2]
>
>> [!card|section]
>> ##### Infrastructure as Code & Certificates
>> Reference secrets in Terraform and Deployment Manager without hardcoding values, keeping IaC repositories free of sensitive data. Store TLS certificates and private keys for load balancers and applications with versioned rotation workflows.
>
>> [!card|section]
>> ##### Third-Party API & Emergency Access
>> Securely store external API credentials with automatic rotation triggers on expiry. Store break-glass credentials with restricted access, mandatory justification, and full audit trails for emergency incident response procedures.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Active secret versions** | ~$0.06 per active version per month |
| **Access operations** | ~$0.03 per 10,000 access operations (first 10,000 free per month) |
| **Rotation notifications** | Standard Pub/Sub messaging rates for rotation event notifications |
| **CMEK (Cloud KMS)** | Standard Cloud KMS key version and cryptographic operation pricing |
| **Audit logging** | Cloud Audit Logs generated at no additional charge; Cloud Logging ingestion rates apply |
| **Replication** | No additional charge for automatic or managed replication across regions |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · SECRET MANAGER
>> # From *hardcoded secret* to *managed credential*.
>> Store the secret once, grant only the services that need it, then access it at runtime without any credential in code.
>
>> [!card|step]
>> ###### Step 01
>> ### *Store* secret version.
>> Create a secret resource and add the first version with your credential payload. Choose regional or global replication, optionally enable CMEK with a Cloud KMS key, and set a TTL if the credential has a natural expiry.
>
>> [!card|step]
>> ###### Step 02
>> ### *Grant* accessor IAM role.
>> Assign `roles/secretmanager.secretAccessor` to only the service accounts, Cloud Run services, or GKE workloads that legitimately need the credential—leaving every other principal without access by default.
>
>> [!card|step]
>> ###### Step 03
>> ### *Access* secret at runtime.
>> Applications call the Secret Manager API or use native runtime mounting to retrieve the current secret version. Configure Cloud Functions rotation triggers to automatically create new versions and disable old ones on a schedule.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister Security Services
>> [[iam]], [[cloud-kms]], [[security-command-center]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]], [[cloud-functions]]
