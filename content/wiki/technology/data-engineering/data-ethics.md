---
title: Data Ethics
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Data Ethics
category: Computer Science
tags:
  - DataEngineering
  - Ethics
  - Compliance
banner:
dg-publish: true
---

---

> **Data ethics** is a new branch of ethics that studies and evaluates moral problems related to **data** (generation, recording, curation, processing, dissemination, sharing, use), **algorithms** (AI, ML, autonomous agents), and **corresponding practices** (responsible innovation, programming, hacking, professional codes), in order to formulate and support morally good solutions.
>
> — Luciano Floridi & Mariarosaria Taddeo, *[What is data ethics?](https://royalsocietypublishing.org/doi/10.1098/rsta.2016.0360)*

(source: Concepts/Data Security, Ethics, and Compliance/Data Ethics.md)

## Why data ethics matters for engineers

Data engineers don't just move bytes — they shape **what gets analyzed**, **who can see it**, and **what decisions are made on it**. Ethical considerations include:

- **Privacy** — collecting only what's needed, anonymizing, retention limits.
- **Consent** — users understand and agree to data collection + use.
- **Bias** — training data reflects historical biases; perpetuated by ML.
- **Transparency** — explainable models, accessible documentation.
- **Accountability** — clear ownership of data + decisions.
- **Fairness** — equitable outcomes across demographic groups.

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
- **Column-level security** — see [[../gcp/analytics/bigquery-iam|BigQuery IAM]].
- **Row-level security** — predicate filters per user.

## Codes of conduct

- **ACM Code of Ethics**
- **IEEE Code of Ethics**
- **Data Science Association** code

## Interview Questions

1. **GDPR right-to-erase** in an event-sourced system — strategies.
2. **Bias** in ML training data — how do you audit?
3. **Differential privacy** — when use it?
4. **Anonymization** vs **pseudonymization** vs **encryption** — distinguish.

## Related pages

> [!multi-column]
>
>> [!card] Governance
>> [[data-governance|Data Governance]], [[data-catalog|Data Catalog]], [[guides/data-governance-guide|Data Governance Guide]]
>
>
>> [!card] Security
>> [[../gcp/analytics/bigquery-iam|BigQuery IAM]]

