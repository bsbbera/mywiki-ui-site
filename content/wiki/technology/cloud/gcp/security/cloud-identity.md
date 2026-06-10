---
title: Cloud Identity
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Cloud Identity
category: GCP
tags:
  - gcp
  - cloud
  - security
  - identity
  - sso
  - mfa
  - idaas
  - authentication
banner: https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Identity
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Service (IDaaS) |
> | **Category** | Security |
> | **Launched** | 2018 |
> | **Interface** | Admin Console, API |
> | **Website** | https://cloud.google.com/identity |

---

> "Identity is the foundation of trust in the digital age."
> <cite>— Google Cloud Security</cite>

---

<span class="at-kicker">Identity & Access · Google Cloud</span>

# Cloud Identity

<p class="at-lead">Cloud Identity is Google Cloud's Identity-as-a-Service platform that provides centralized user management, SSO, MFA, and device management—giving every organization enterprise-grade identity without on-premises infrastructure.</p>

<span class="at-stat">SSO</span> &nbsp;·&nbsp; <span class="at-stat">MFA</span> &nbsp;·&nbsp; <span class="at-stat">device management</span> &nbsp;·&nbsp; <span class="at-stat">Google Workspace</span> integration &nbsp;·&nbsp; <span class="at-mark">the identity layer that ties every GCP resource to a user</span>

<span class="at-kicker">How It Works</span>

## Overview

Cloud Identity provides a unified identity layer that works across Google Cloud Platform, Google Workspace, and thousands of third-party applications. The service supports both cloud-native and hybrid identity scenarios through Google Cloud Directory Sync (GCDS) and Secure LDAP for integration with Active Directory or other LDAP directories. Cloud Identity offers two editions: **Free edition** provides basic user management and Google account creation; **Premium edition** adds advanced security features including endpoint verification, context-aware access, and enhanced mobile management. The platform supports modern authentication protocols including SAML 2.0, OIDC, and OAuth 2.0 for application federation. Cloud Identity acts as the identity provider for GCP IAM, meaning Cloud Identity users automatically become eligible GCP principals. The service includes comprehensive mobile device management (MDM) capabilities for iOS, Android, and Windows devices, with app management and data loss prevention policies.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ##### Single Sign-On (SSO)
>> SAML 2.0 and OIDC support for thousands of pre-integrated applications. Identity federation with external providers (Azure AD, Okta, Ping) enables centralized authentication and eliminates password fatigue across your application estate.
>
>> [!card|section]
>> ##### Multi-Factor Authentication
>> Push notifications, FIDO2/WebAuthn security keys, TOTP, and SMS/phone verification. Mandate phishing-resistant hardware security keys for high-risk users via the Advanced Protection Program.
>
>> [!card|section]
>> ##### Context-Aware Access
>> Enforce access policies based on user identity, device security posture, location, and IP address. Endpoint verification via Chrome browser extension assesses device trust before granting application access.

> [!grid|cols3]
>
>> [!card|section]
>> ##### Device Management (MDM)
>> MDM for iOS, Android, and Windows devices with remote wipe, app management, and compliance enforcement. BYOD security manages corporate data on personal devices without requiring full device control.
>
>> [!card|section]
>> ##### User Lifecycle & Federation
>> Automated provisioning and deprovisioning via SCIM protocol syncs user lifecycle events from HR systems. Google Cloud Directory Sync (GCDS) bridges on-premises Active Directory with Cloud Identity in real time.
>
>> [!card|section]
>> ##### Audit & Groups Management
>> Comprehensive login and admin activity logs with anomaly detection. Hierarchical organizational units with inheritance-based policies, and app access control scoped to group membership for scalable governance.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ##### Workforce & Privileged Access
>> Centralized authentication for employees across Google and SaaS applications, with enhanced security for administrators mandating MFA and FIDO2 security keys. Secure access for distributed remote teams with device trust verification and context-aware policies.
>
>> [!card|section]
>> ##### Zero Trust & Compliance
>> Implement "never trust, always verify" with context-aware policies tied to device posture and network location. Audit trails, access controls, and SCIM automation satisfy regulatory requirements; SIEM integration forwards logs for threat detection.

> [!grid|cols2]
>
>> [!card|section]
>> ##### M&A & Third-Party Access
>> Rapidly onboard acquired company users while maintaining security boundaries. Securely grant contractors and partners limited, time-bound access via federated identities and group-scoped application permissions.
>
>> [!card|section]
>> ##### Legacy Modernization & Developer Identity
>> Replace on-premises AD FS with cloud-native identity services, eliminating hardware maintenance. Secure access to GCP resources for engineering teams using Workload Identity Federation alongside Cloud Identity user accounts.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **Free edition** | Basic user management, Google account creation, SSO — no charge |
| **Premium edition** | Per-user per-month charge; includes endpoint verification, context-aware access, advanced MDM |
| **Google Workspace integration** | Cloud Identity is included with Google Workspace Business/Enterprise subscriptions |
| **GCDS sync** | Free tool; no charge for directory synchronization operations |
| **Audit logs** | Cloud Audit Logs generated at no additional charge; Cloud Logging ingestion rates apply |
| **API access** | Admin SDK and Directory API calls included within edition limits |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD IDENTITY
>> # From *unmanaged users* to *governed identities*.
>> Set up your domain, sync from Active Directory, and enforce MFA and context-aware policies organization-wide.
>
>> [!card|step]
>> ###### Step 01
>> ### *Set up* Cloud Identity domain.
>> Create your Cloud Identity domain in the Admin Console, provision super admin accounts, and configure organizational units to mirror your company structure for inheritance-based policy application.
>
>> [!card|step]
>> ###### Step 02
>> ### *Sync* from Active Directory.
>> Deploy Google Cloud Directory Sync (GCDS) to replicate users, groups, and organizational units from on-premises Active Directory or LDAP—keeping identities consistent across on-premises and cloud environments.
>
>> [!card|step]
>> ###### Step 03
>> ### *Enforce* MFA & policies.
>> Enable organization-wide MFA, mandate FIDO2 security keys for privileged accounts, and configure context-aware access policies that validate device compliance, location, and network before granting access.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister Security Services
>> [[iam]], [[vpc-service-controls]], [[security-command-center]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]], [[cloud-functions]]
