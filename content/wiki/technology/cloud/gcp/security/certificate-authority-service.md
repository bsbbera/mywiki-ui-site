---
title: Certificate Authority Service
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - CAS
category: GCP
tags:
  - gcp
  - cloud
  - security
  - pki
  - certificates
  - ca
  - tls
  - x509
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Certificate Authority Service
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service |
> | **Category** | Security |
> | **Launched** | 2021 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/certificate-authority-service |

---

> "Trust, but verify—and automate the verification."
> <cite>— PKI Best Practices</cite>

---

<span class="at-kicker">PKI · Google Cloud</span>

# Certificate Authority Service

<p class="at-lead">Certificate Authority Service is Google Cloud's fully managed private CA infrastructure that lets organizations issue, manage, and revoke X.509 certificates at scale—without operating on-premises HSMs or CA software.</p>

<span class="at-stat">managed CA</span> &nbsp;·&nbsp; <span class="at-stat">DevOps CA</span> tier &nbsp;·&nbsp; <span class="at-stat">high-volume</span> certificate issuance &nbsp;·&nbsp; <span class="at-mark">run your own PKI hierarchy without managing HSMs</span>

<span class="at-kicker">How It Works</span>

## Overview

CAS provides two service tiers: **DevOps CA** for rapid certificate issuance in CI/CD pipelines and microservice mesh scenarios; and **Enterprise CA** for compliance-sensitive use cases requiring long-lived certificates, certificate policies, and advanced lifecycle controls. CAs can be organized hierarchically with root CAs (kept offline for security) and subordinate CAs (active issuers) to follow PKI best practices. CAS supports multiple certificate profiles including TLS/SSL client and server certificates, code signing certificates, and custom profiles for specialized use cases. The service integrates deeply with other GCP services: certificates can be automatically deployed to GKE workloads via Certificate Manager, used for mTLS in Cloud Service Mesh, and applied to Cloud Load Balancing. All CAs can use Cloud KMS for key storage, with options for software-backed keys, HSM-backed keys (Cloud HSM), or external keys (Cloud EKM). CAS maintains comprehensive audit logs of all certificate operations through Cloud Audit Logs and supports automated certificate rotation workflows.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ##### DevOps & Enterprise Tiers
>> Choose between rapid issuance (DevOps) or compliance-focused (Enterprise) certificate management. DevOps CA optimizes for high-volume, short-lived certificates; Enterprise CA enforces strict lifecycle policies.
>
>> [!card|section]
>> ##### Hierarchical CA Structures
>> Maintain offline root CAs and online subordinate issuing CAs following PKI best practices. CA pool management groups related CAs for high availability and load balancing across issuance workloads.
>
>> [!card|section]
>> ##### Multiple Certificate Profiles
>> Support for TLS client/server, code signing, and custom X.509 profiles. Certificate templates standardize content and extensions organization-wide, enforcing consistent policy across all issuers.

> [!grid|cols3]
>
>> [!card|section]
>> ##### CMEK & HSM Key Backing
>> Use Cloud KMS customer-managed keys for CA signing keys, with software, HSM (FIPS 140-2 Level 3), or external key (EKM) backends. Key ceremonies and access are fully audited.
>
>> [!card|section]
>> ##### Revocation & Transparency
>> CRL and OCSP support for real-time certificate status checking. Optional certificate transparency logging detects unauthorized issuance, with Pub/Sub notifications triggering automated workflows on lifecycle events.
>
>> [!card|section]
>> ##### GCP Service Integration
>> Automatic certificate provisioning to GKE workloads via Workload Identity, deployment to Cloud Load Balancing via Certificate Manager, and mTLS in Cloud Service Mesh—fully API-driven with fine-grained IAM controls.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ##### Service Mesh & Internal TLS
>> Automatic certificate issuance for mutual TLS in GKE and Cloud Service Mesh, securing service-to-service communication without depending on public CAs. Ideal for internal TLS, API mutual authentication, and VPN client certificates requiring short lifetimes and automated rotation.
>
>> [!card|section]
>> ##### DevOps Pipelines & Device Authentication
>> Automated certificate issuance for ephemeral test environments and CI/CD pipelines. Issue certificates for IoT devices, mobile devices, and workstations, covering BYOD scenarios and air-gapped workloads without internet access to public CAs.

> [!grid|cols2]
>
>> [!card|section]
>> ##### Code Signing & Supply Chain Integrity
>> Digitally sign software artifacts and container images for supply chain verification. Integrate with Binary Authorization attestation workflows to create an end-to-end chain of trust from build to production deployment.
>
>> [!card|section]
>> ##### Compliance & Regulated Workloads
>> Meet regulatory requirements (HIPAA, PCI-DSS) with fully auditable PKI operations, documented key ceremonies, and CRL/OCSP availability. Support for S/MIME email certificates and digital document signing for internal compliance workflows.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **CA creation** | Charged per CA per month; Enterprise CA higher than DevOps CA tier |
| **Certificate issuance** | Per certificate issued; DevOps CA optimized for high-volume, lower per-cert cost |
| **CA key storage** | Cloud KMS key version pricing applies; HSM-backed keys carry premium |
| **OCSP & CRL** | No separate charge for revocation infrastructure; included in CA tier pricing |
| **Audit logging** | Cloud Audit Logs generated at no additional charge; Cloud Logging ingestion rates apply |
| **Pub/Sub notifications** | Standard Pub/Sub messaging rates for lifecycle event notifications |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CERTIFICATE AUTHORITY SERVICE
>> # From *custom PKI need* to *managed CA*.
>> Create a CA pool, start issuing certificates via API, and manage revocation automatically—no HSM hardware required.
>
>> [!card|step]
>> ###### Step 01
>> ### *Create* the CA pool.
>> Define your CA hierarchy—root CA (kept offline) and subordinate issuing CAs grouped in a CA pool. Choose DevOps or Enterprise tier, select KMS key backing, and configure certificate policies.
>
>> [!card|step]
>> ###### Step 02
>> ### *Issue* certificates.
>> Submit certificate requests via API, gcloud CLI, or Certificate Manager integration. Workload Identity automatically provisions certificates to GKE pods; templates enforce consistent extensions and validity periods.
>
>> [!card|step]
>> ###### Step 03
>> ### *Manage* revocation.
>> Revoke certificates via API with CRL and OCSP propagation handled automatically. Pub/Sub notifications trigger downstream workflows; audit logs capture every lifecycle event for compliance evidence.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister Security Services
>> [[cloud-kms]], [[secret-manager]], [[binary-authorization]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]], [[gke]]
