---
title: VPC Service Controls
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - VPC-SC
category: GCP
tags:
  - gcp
  - cloud
  - security
  - vpc
  - data-exfiltration
  - perimeter
  - zero-trust
  - network
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # VPC Service Controls
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed Security Perimeter |
> | **Category** | Security |
> | **Launched** | 2018 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/vpc-service-controls |

---

> "Perimeter security is not dead; it has evolved."
> <cite>— Google Cloud Security Whitepaper</cite>

---

<span class="at-kicker">Data Exfiltration Prevention · Google Cloud</span>

# VPC Service Controls

<p class="at-lead">VPC Service Controls creates logical security perimeters around Google Cloud APIs that prevent data exfiltration even by privileged users with valid credentials—an invisible firewall enforced at the API layer, not the network layer.</p>

<span class="at-stat">perimeter</span>-based &nbsp;·&nbsp; <span class="at-stat">100+</span> GCP services covered &nbsp;·&nbsp; <span class="at-stat">dry run</span> mode &nbsp;·&nbsp; <span class="at-mark">create an invisible firewall around GCP APIs to prevent data exfiltration</span>

<span class="at-kicker">How It Works</span>

## Overview

VPC Service Controls creates logical security perimeters around Google Cloud APIs, preventing data from being accessed from outside the perimeter or exfiltrated to unauthorized locations. Unlike traditional network perimeter controls, VPC-SC operates at the API layer, controlling access to services like BigQuery, Cloud Storage, Cloud KMS, and dozens of other GCP APIs. The service perimeter defines which projects can access which services and under what conditions. Access policies determine which identities (users, service accounts) can interact with resources inside the perimeter. VPC-SC supports both regular perimeters (strict enforcement) and bridge perimeters (controlled connectivity between perimeters) for multi-organization scenarios. The service provides granular ingress and egress rules that allow controlled data flows across the perimeter boundary while maintaining the security guarantee. VPC-SC integrates with VPC networks through Private Google Access and supports context-aware access based on device state, IP address, and user identity.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> ##### Service Perimeter Creation
>> Define security boundaries around 100+ GCP APIs including BigQuery, Cloud Storage, Cloud KMS, and Pub/Sub. Group multiple projects into a single perimeter for consistent policy enforcement without per-project configuration overhead.
>
>> [!card|section]
>> ##### Ingress & Egress Rules
>> Allow controlled data flows across perimeter boundaries with specific identity, service, and method conditions. Bridge perimeters connect perimeters across different organizations for M&A or partnership scenarios without fully merging security domains.
>
>> [!card|section]
>> ##### Context-Aware Access Levels
>> Enforce perimeter access based on device security posture, geographic location, and IP address ranges. Define trust tiers combining device policy, network origin, and user identity for fine-grained, attribute-driven perimeter admission.

> [!grid|cols3]
>
>> [!card|section]
>> ##### Dry-Run Mode
>> Monitor policy violations without blocking requests during policy development and testing. Dry-run generates the same audit log entries as enforcement mode, giving complete visibility into what would be blocked before you commit to enforcement.
>
>> [!card|section]
>> ##### VPC & Private Google Access
>> Native integration with GCP's VPC networks through Private Google Access enables secure API access without internet exposure. Identity-based policies restrict perimeter access to specific service accounts or user groups regardless of network path.
>
>> [!card|section]
>> ##### Audit Logging & SCC Integration
>> Comprehensive logging of all perimeter access attempts and violations with real-time policy updates requiring no service disruption. Security Command Center integration forwards violation alerts for centralized monitoring and SOAR playbook triggering.

<span class="at-kicker">Real-World Applications</span>

## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ##### Data Exfiltration Prevention & Insider Threat
>> Block insider threats and compromised credentials from stealing sensitive data—even administrators with valid IAM permissions cannot exfiltrate data outside the perimeter. Ransomware defense prevents attackers from copying data to unauthorized buckets or external projects even with stolen credentials.
>
>> [!card|section]
>> ##### Regulatory Compliance & Data Residency
>> Meet GDPR, data sovereignty, and data residency requirements by ensuring regulated data stays within specific geographic regions and approved projects. Demonstrate data access controls to auditors with comprehensive, immutable violation logs.

> [!grid|cols2]
>
>> [!card|section]
>> ##### Multi-Tenant Isolation & Development Segregation
>> Separate customer data in SaaS applications with strict API-layer boundaries beyond IAM. Keep production data out of development environments by placing production projects in a separate perimeter from dev and staging workloads.
>
>> [!card|section]
>> ##### M&A, Third-Party & Hybrid Cloud
>> Maintain security boundaries during company acquisitions using bridge perimeters for controlled integration. Limit vendor and contractor access to only required services within defined boundaries, and extend perimeter controls to on-premises resources via Cloud Interconnect.

<span class="at-kicker">Cost Model</span>

## Pricing

| Dimension | Detail |
| --- | --- |
| **VPC Service Controls** | Free — no charge for creating access policies, perimeters, or access levels |
| **Dry-run mode** | Free — generates full audit logs at no cost during policy testing |
| **Audit logging** | Cloud Audit Logs generated at no additional charge; Cloud Logging ingestion rates apply |
| **Private Google Access** | Included with VPC networking; no separate charge for API traffic routing |
| **SCC integration** | Violation alerts forwarded to SCC at no additional VPC-SC charge |
| **Troubleshooting tools** | Policy Analyzer and connectivity tests included at no additional cost |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · VPC SERVICE CONTROLS
>> # From *open API access* to *service perimeter*.
>> Define your access policy and perimeter, validate in dry-run mode, then flip enforcement on with zero disruption.
>
>> [!card|step]
>> ###### Step 01
>> ### *Define* access policy & perimeter.
>> Create an organization-level access policy and add a service perimeter encompassing your sensitive projects. Select which GCP services to protect and define access levels specifying trusted device postures, IP ranges, and identities.
>
>> [!card|step]
>> ###### Step 02
>> ### *Test* in dry-run mode.
>> Enable the perimeter in dry-run mode to observe which existing traffic would be blocked without actually blocking it. Analyze violation logs in Cloud Logging and SCC to identify legitimate cross-perimeter flows that need explicit ingress/egress rules.
>
>> [!card|step]
>> ###### Step 03
>> ### *Enforce* perimeter.
>> Switch from dry-run to enforced mode once all legitimate flows have ingress/egress rules. Set up SCC and Pub/Sub notifications for real-time violation alerts, and schedule quarterly access reviews to remove stale perimeter exemptions.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister Security Services
>> [[vpc]], [[cloud-identity]], [[security-command-center]]
>
>> [!card] GCP Platform
>> [[google-cloud-platform]], [[GCP Home]], [[bigquery]]
