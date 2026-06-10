---
title: Cloud Armor
Created:
  - 2026-06-04
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - WAF
category: GCP
tags:
  - gcp
  - cloud
  - networking
banner: https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Armor
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Managed |
> | **Category** | Networking |
> | **Launched** | 2017 |
> | **Interface** | Console, gcloud CLI, API |
> | **Website** | https://cloud.google.com/armor |

---

> "The only truly secure system is one that is powered off, cast in a block of concrete, and sealed in a lead-lined room with armed guards."
> <cite>— Gene Spafford</cite>

---

<span class="at-kicker">DDoS & WAF · Google Cloud</span>
# Cloud Armor
<p class="at-lead">Cloud Armor is Google Cloud's managed DDoS protection and Web Application Firewall (WAF) service. It protects internet-facing applications behind Cloud Load Balancing from network-level volumetric attacks and malicious web traffic.</p>
<span class="at-stat">global</span> DDoS mitigation · <span class="at-stat">OWASP Top 10</span> WAF rules · <span class="at-stat">adaptive protection</span> AI &nbsp;·&nbsp; <span class="at-mark">Google-scale DDoS protection and WAF in front of every global load balancer</span>

<span class="at-kicker">How It Works</span>
## Overview

Cloud Armor operates as a set of **security policies** attached to backend services on an external [[cloud-load-balancing|Application Load Balancer]] or external Proxy Network Load Balancer. Policies are evaluated at Google's edge, before traffic reaches your backends, allowing malicious requests to be blocked as close to the attacker as possible — at Google's global Points of Presence.

Cloud Armor is available in two tiers:
- **Standard**: Pay-as-you-go pricing; basic DDoS protection and WAF rules for all GCP customers automatically.
- **Cloud Armor Enterprise** (formerly Managed Protection Plus): Subscription-based; includes advanced features like Adaptive Protection, enhanced DDoS response support, and DDoS bill protection.

<span class="at-kicker">Core Capabilities</span>
## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Always-on DDoS Protection**
>> Volumetric L3/L4 attack mitigation at Google's edge at no extra cost. SYN floods, UDP floods, and reflection attacks absorbed before reaching backends.
>
>> [!card|section]
>> **L7 Application DDoS Protection**
>> Layer 7 attack mitigation on top of base protection. HTTP floods and application-layer attacks blocked at the edge.
>
>> [!card|section]
>> **Security Policies & Rules**
>> Match requests by IP ranges, geography, headers, URI, request body, or custom CEL expressions. Actions: Allow, Deny, or Throttle.
>
>> [!card|section]
>> **Preconfigured WAF Rules**
>> OWASP ModSecurity Core Rule Set covering OWASP Top 10. SQL injection, XSS, LFI/RFI, RCE, and protocol attack protection.
>
>> [!card|section]
>> **Custom Rules (CEL)**
>> Common Expression Language for precise filtering. Match User-Agent strings, inspect JSON body fields, combine conditions.
>
>> [!card|section]
>> **Adaptive Protection**
>> ML-based real-time traffic analysis. Auto-detects Layer 7 DDoS patterns and suggests or auto-deploys mitigation rules.

## Rate Limiting

Cloud Armor supports per-client **rate limiting** rules that throttle requests exceeding a configured threshold (requests per minute per IP or per region). Rate limiting actions:
- **Throttle**: Enforce a rate limit, dropping excess requests with a configurable HTTP status code.
- **Ban**: Temporarily block a client that exceeds a threshold for a configurable duration.

Rate limiting is applied per **conformance key** — the identifying attribute (e.g., source IP, X-Forwarded-For header, or a cookie value).

## Bot Management

Cloud Armor integrates with **reCAPTCHA Enterprise** to distinguish human users from bots:
- **Manual challenge**: Redirect suspicious requests to a reCAPTCHA challenge.
- **Redirect to reCAPTCHA**: Inject a JavaScript-based reCAPTCHA token verification.
- **Decoy tokens**: Serve fake token responses to challenge scrapers.
- **Bot score rules**: Use reCAPTCHA risk scores in security policy conditions to apply differentiated actions based on bot likelihood.

## Geo-Restriction

Block or allow traffic based on the **geographic origin** of source IPs using ISO 3166-1 alpha-2 country codes. Useful for compliance requirements (e.g., GDPR data residency), reducing attack surface from regions where you have no legitimate users, or meeting export control restrictions.

<span class="at-kicker">Real-World Applications</span>
## Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> **OWASP Top 10 Protection**
>> Deploy preconfigured WAF rules to block SQLi, XSS, and other common attacks without writing custom rules.
>
>> [!card|section]
>> **DDoS Mitigation**
>> Absorb and deflect large volumetric and application-layer DDoS attacks at Google's edge infrastructure.
>
>> [!card|section]
>> **API Protection**
>> Apply rate limiting to public APIs to prevent abuse, scraping, or credential stuffing attacks.
>
>> [!card|section]
>> **Geo-restriction for Compliance**
>> Block access from countries outside your service territory for regulatory or business reasons.
>
>> [!card|section]
>> **Bot Mitigation**
>> Use reCAPTCHA integration to identify and block automated bot traffic targeting login or checkout flows.
>
>> [!card|section]
>> **Allow-listing**
>> Restrict access to internal tools or admin panels to specific office IP ranges.

<span class="at-kicker">Cost Model</span>
## Pricing

| Dimension | Detail |
|-----------|--------|
| **Security Policy** | Charged per policy per month (Standard) |
| **Rules** | Charged per rule per policy per month |
| **Requests** | Charged per million HTTP/HTTPS requests evaluated |
| **Enterprise** | Annual subscription covering unlimited policies and Adaptive Protection |

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD ARMOR
>> # From *exposed endpoint* to *protected service*.
>> Create a security policy, add WAF rules for your threats, and enable adaptive protection for ML-powered defense.
>
>> [!card|step]
>> ###### Step 01
>> ### *Create* security policy.
>> Define security policies attached to your load balancer backend services. Set default actions and preview mode for testing.
>
>> [!card|step]
>> ###### Step 02
>> ### *Add* WAF rules.
>> Enable OWASP CRS rules at appropriate sensitivity levels. Add custom CEL rules for application-specific threats.
>
>> [!card|step]
>> ###### Step 03
>> ### *Enable* adaptive protection.
>> Turn on ML-based traffic analysis. Review suggested rules and optionally enable auto-deployment for rapid response.

<span class="at-kicker">Continue Reading</span>
## Related pages

> [!grid]
>
>> [!card] Sister Networking Services
>> [[vpc]], [[cloud-load-balancing]], [[cloud-cdn]], [[cloud-dns]], [[network-intelligence-center]]
>
>> [!card] GCP Compute & Platform
>> [[compute-engine]], [[gke]], [[cloud-run]], [[google-cloud-platform]], [[GCP Home]]
