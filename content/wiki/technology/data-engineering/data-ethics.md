---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Data Ethics
Created:
  - 2026-04-29
aliases:
  - Data Ethics
category: Computer Science
tags:
  - data-engineering
  - concept
  - Ethics
  - Compliance
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
maturity: seedling
---

<span class="at-kicker">Data Engineering · Governance</span>

# Data Ethics

<p class="at-lead">
Data ethics is a new branch of ethics that studies and evaluates moral problems related to data (generation, recording, curation, processing, dissemination, sharing, use), algorithms (AI, ML, autonomous agents), and corresponding practices (responsible innovation, programming, hacking, professional codes), in order to formulate and support morally good solutions.
</p>

<span class="at-stat">8+</span> compliance frameworks &nbsp;·&nbsp; <span class="at-stat">2018</span> GDPR enforcement &nbsp;·&nbsp; <span class="at-mark">Engineering decisions have ethical consequences — privacy, bias, transparency</span>

> [!tip] Ethics for Engineers
> Data engineers don't just move bytes — they shape **what gets analyzed**, **who can see it**, and **what decisions are made on it**. Ethical considerations include: privacy (collecting only what's needed), consent, bias detection, transparency, accountability, and fairness.
> 
> — Luciano Floridi & Mariarosaria Taddeo, *What is data ethics?*

<span class="at-kicker">Why Ethics Matters</span>

## Why data ethics matters for engineers

Data engineers don't just move bytes — they shape **what gets analyzed**, **who can see it**, and **what decisions are made on it**. Ethical considerations include:

- **Privacy** — collecting only what's needed, anonymizing, retention limits.
- **Consent** — users understand and agree to data collection + use.
- **Bias** — training data reflects historical biases; perpetuated by ML.
- **Transparency** — explainable models, accessible documentation.
- **Accountability** — clear ownership of data + decisions.
- **Fairness** — equitable outcomes across demographic groups.

<span class="at-kicker">Regulatory Frameworks</span>

## Key frameworks

| Framework | Origin |
| --- | --- |
| **GDPR** | EU privacy regulation (2018) |
| **CCPA / CPRA** | California consumer privacy |
| **HIPAA** | US health data |
| **PCI-DSS** | Payment card data |
| **FERPA** | US student records |
| **EU AI Act** | EU AI regulation (2024) |
| **NIST AI Risk Management** | US AI governance |
| **OECD AI Principles** | Multilateral guidelines |

<span class="at-kicker">Engineering Practices</span>

## Practical engineering ethics

### Privacy by design

- **Minimize collection** — collect only what serves a clear purpose.
- **Anonymize early** — remove PII at ingestion when possible.
- **Aggregate before exposing** — show counts, not individuals.
- **Differential privacy** — add noise to protect individual identity.

### Right to be forgotten (GDPR Art. 17)

Users can request deletion of their data. This conflicts with [[event-sourcing-pattern|event sourcing]] and immutable logs. Common solutions:

- **Crypto-shredding** — encrypt PII; throw away the key.
- **Tombstone records** — mark deleted; pipelines respect.
- **Tiered storage** — segregate user-deletable from compliance-required data.

### Bias detection

- Audit training data for **demographic skew**.
- Measure model outputs across **protected classes**.
- Tools: Aequitas, Fairlearn, IBM AI Fairness 360.

### Access controls

- **Least privilege** by default.
- **Audit** all access to PII.
- **Column-level security** — see [[../cloud/gcp/analytics/bigquery-iam|BigQuery IAM]].
- **Row-level security** — predicate filters per user.

<span class="at-kicker">Professional Codes</span>

## Codes of conduct

- **ACM Code of Ethics**
- **IEEE Code of Ethics**
- **Data Science Association** code

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **GDPR right-to-erase** in an event-sourced system — strategies.
2. **Bias** in ML training data — how do you audit?
3. **Differential privacy** — when use it?
4. **Anonymization** vs **pseudonymization** vs **encryption** — distinguish.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Governance
>> [[data-governance|Data Governance]], [[../../cloud/gcp/analytics/data-catalog|Data Catalog]], [[../../guides/data-governance-guide|Data Governance Guide]]
>
>
>> [!card] Security
>> [[../../cloud/gcp/analytics/bigquery-iam|BigQuery IAM]]
