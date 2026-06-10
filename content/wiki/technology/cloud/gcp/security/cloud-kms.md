---
title: Cloud Key Management Service
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Cloud KMS
category: GCP
tags:
  - gcp
  - cloud
  - security
  - encryption
  - kms
  - cryptography
  - keys
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud KMS
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service |
> | **Category** | Security |
> | **Launched** | 2017 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/kms |

---

> "Encryption is the mathematics of cryptography, but key management is the art of security."
> <cite>— RSA Security</cite>

---

<span class="at-kicker">Key Management · Google Cloud</span>

# Cloud Key Management Service

<p class="at-lead">Cloud KMS is Google Cloud's centralized cryptographic key management service that lets customers generate, use, rotate, and destroy encryption keys—providing the foundation for CMEK across every major GCP service.</p>

<span class="at-stat">AES-256</span> + <span class="at-stat">RSA</span> + <span class="at-stat">EC</span> &nbsp;·&nbsp; <span class="at-stat">HSM</span> + <span class="at-stat">software</span> + <span class="at-stat">external</span> key backends &nbsp;·&nbsp; <span class="at-stat">CMEK</span> integration &nbsp;·&nbsp; <span class="at-mark">customer-managed encryption keys for every GCP service</span>

<span class="at-kicker">How It Works</span>

## Overview

Cloud KMS organizes keys into **key rings**—logical groupings of keys within a specific Google Cloud location. Keys can exist as **software-backed keys** (standard), **HSM-backed keys** (FIPS 140-2 Level 3 compliant via Cloud HSM), or **external keys** (held outside GCP via Cloud EKM). The service supports multiple cryptographic purposes including symmetric encryption/decryption, asymmetric signing/verification, and asymmetric encryption/decryption. KMS integrates seamlessly with other GCP services—BigQuery, Cloud Storage, Compute Engine, GKE, and Secret Manager can all use KMS keys for Customer-Managed Encryption Keys (CMEK). All KMS operations are logged to Cloud Audit Logs, providing complete visibility into key usage patterns. The service supports automated key rotation with configurable schedules and enables manual rotation for compliance-driven scenarios.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ##### Multiple Key Types & Algorithms
>> AES-256-GCM symmetric keys for encryption; RSA-2048/3072/4096 and EC P-256/P-384 asymmetric keys for signing and asymmetric encryption. Key rings provide logical organization with immutable versioning for complete audit trails.
>
>> [!card|section]
>> ##### Automatic Key Rotation
>> Schedule-based rotation from 90 days to 2 years, with manual rotation triggers for compliance-driven scenarios. Soft-delete protection keeps keys recoverable for 24 hours after a deletion request—protecting against accidental data loss.
>
>> [!card|section]
>> ##### CMEK Integration
>> Use customer-managed keys for BigQuery, Cloud Storage, Spanner, Pub/Sub, Compute Engine, and more. CMEK gives organizations cryptographic control over data at rest across the entire GCP service portfolio.

> [!grid|cols3]
>
>> [!card|section]
>> ##### Cloud HSM & Cloud EKM
>> HSM-backed keys meet FIPS 140-2 Level 3 for high-assurance environments. Cloud EKM (External Key Manager) keeps keys entirely on-premises or in third-party HSMs while still enabling GCP service encryption.
>
>> [!card|section]
>> ##### Key Import & Access Attestation
>> Import existing keys from on-premises HSMs or other sources to maintain continuity. Access attestation verifies that all key operations occur within Google-controlled environments, providing hardware-level proof.
>
>> [!card|section]
>> ##### Resource-Based IAM & Quotas
>> Granular access control at key ring and individual key levels—separate permissions for encrypt, decrypt, and sign operations. Quota management controls API request rates and costs through configurable per-project limits.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ##### Data Encryption & Compliance
>> Encrypt Cloud Storage buckets, BigQuery datasets, and Persistent Disks with CMEK to meet regulatory mandates (HIPAA, PCI-DSS, FedRAMP). Use HSM-backed keys for high-assurance requirements and key escrow with keys held in separate locations for disaster recovery.
>
>> [!card|section]
>> ##### Digital Signatures & BYOK
>> Sign software artifacts, legal documents, and API requests using asymmetric keys. Import and use existing enterprise keys (Bring Your Own Key) within GCP, preserving key lineage and enabling hybrid cloud encryption strategies.

> [!grid|cols2]
>
>> [!card|section]
>> ##### Application-Level & Sealed Secrets
>> Encrypt sensitive fields in databases before storage, and seal Kubernetes secrets at rest with KMS before writing to etcd. Tokenization replaces sensitive data with cryptographically secure tokens backed by KMS.
>
>> [!card|section]
>> ##### Dual Control & Separation of Duties
>> Separate key creation and usage permissions across different teams. Combine with Cloud Audit Logs alerting for unusual key activity to detect unauthorized access attempts and enforce separation-of-duties policies.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Active key versions** | ~$0.06 per key version per month (software); ~$1.00 per key version per month (HSM) |
| **Cryptographic operations** | ~$0.03 per 10,000 operations (software keys); ~$0.15–$0.30 per 10,000 (HSM keys) |
| **Cloud EKM operations** | ~$0.03 per 10,000 external key operations |
| **Key import jobs** | ~$0.045 per import job |
| **Destroyed key versions** | No charge after the 24-hour soft-delete window expires |
| **Audit logging** | Cloud Audit Logs generated at no additional charge; Cloud Logging ingestion rates apply |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD KMS
>> # From *Google-managed keys* to *customer-managed encryption*.
>> Create a key ring and key, enable CMEK on your resources, then configure automatic rotation for ongoing compliance.
>
>> [!card|step]
>> ###### Step 01
>> ### *Create* key ring & key.
>> Choose a region, create a key ring, and provision your first key—selecting the algorithm (AES-256, RSA, EC), protection level (software or HSM), and rotation schedule that matches your compliance requirements.
>
>> [!card|step]
>> ###### Step 02
>> ### *Enable* CMEK on resource.
>> Reference your KMS key when creating Cloud Storage buckets, BigQuery datasets, Compute Engine disks, or other CMEK-capable resources. Grant the service account the `cloudkms.cryptoKeyEncrypterDecrypter` role.
>
>> [!card|step]
>> ###### Step 03
>> ### *Rotate* keys automatically.
>> Set a rotation schedule on the key to generate new primary key versions on a defined cadence. Old versions remain available for decryption while new data is encrypted with the latest version automatically.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister Security Services
>> [[iam]], [[secret-manager]], [[certificate-authority-service]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]], [[bigquery]]
