---
title: Identity-Aware Proxy
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Identity-Aware Proxy
  - IAP
  - Cloud IAP
  - Zero-Trust Access
category: Cloud
tags:
  - GCP
  - Security
  - ZeroTrust
  - Identity
  - AccessControl
banner:
publish: true
---

> [!quote]
> *Identity-Aware Proxy lets you establish a central authorization layer for applications accessed via HTTPS, so you can use an application-level access control model instead of relying on network-level firewalls.*
> — Google Cloud Documentation

# Identity-Aware Proxy

<p class="at-lead">
Google Cloud's Identity-Aware Proxy (IAP) is a zero-trust access control solution that enforces identity-based policies before users can reach applications or resources. It replaces the traditional VPN perimeter model with fine-grained, context-aware authorisation at the application layer.
</p>

## Overview

IAP verifies user identity and context (device, location, time) via Google Identity before granting access to web apps, SSH/RDP servers, or Cloud Run services. It integrates with Cloud IAM and supports BeyondCorp enterprise security architecture. Admins define who can access what without managing VPNs or firewall rules.

IAP is particularly valuable for internal tools, admin dashboards, and development environments that need to be accessible from anywhere without exposing them to the internet. Audit logs provide visibility into access patterns, and context-aware access adds additional security layers like device posture and IP reputation.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[cloud-identity|Cloud Identity]], [[iam|IAM]], [[zero-trust|Zero Trust]]
>
>> [!card] Parent topic
>> [[cloud-security|Cloud Security]]
>
>> [!card] See also
>> [[google-cloud-platform|Google Cloud Platform]], [[vpc-service-controls|VPC Service Controls]], [[beyondcorp|BeyondCorp]]