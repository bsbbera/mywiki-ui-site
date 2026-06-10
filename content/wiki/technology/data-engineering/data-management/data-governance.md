---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Data Governance
Created:
  - 2026-04-29
aliases:
  - Data Governance
category: Computer Science
tags:
  - data-engineering
  - concept
  - Governance
  - Compliance
banner: https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Management</span>

# Data Governance

<p class="at-lead">
Data Governance is the set of policies and procedures that ensure data used in an organization is of high quality throughout its lifecycle — input, storage, transformation, access, and deletion. Data has become simultaneously valuable and dangerous — a competitive asset and a compliance liability.
</p>

<span class="at-stat">5</span> implementation stages &nbsp;·&nbsp; <span class="at-stat">2</span> governance models &nbsp;·&nbsp; <span class="at-mark">Policies, stewardship, lineage, and compliance as code</span>

> [!tip] See the [[../../guides/data-governance-guide|Data Governance Guide]] for the full implementation playbook (5 stages: inventory → planning → education → implementation → enforcement).

<span class="at-kicker">Why Governance Matters</span>

## Why governance matters

Data has become **simultaneously valuable and dangerous** — a competitive asset *and* a compliance liability. Without governance:

- **Compliance risk** — GDPR / HIPAA / PCI-DSS / CCPA fines.
- **Data quality** decays over time as ownership fragments.
- **Trust evaporates** — analysts stop using "official" data and rebuild private spreadsheets.
- **Security incidents** — credentials sprawl, PII leaks.

<span class="at-kicker">Core Elements</span>

## Core elements

| Element | What it covers |
| --- | --- |
| **Policies** | Rules: what data exists, how it's used, retention, deletion |
| **Stewardship** | Domain experts who own datasets |
| **Lineage** | How data flows source → consumer |
| **Catalog** | Discovery + metadata; see [[../../cloud/gcp/analytics/data-catalog|Data Catalog]] |
| **Quality controls** | Tests, SLAs, monitoring, alerts |
| **Access control** | IAM, RBAC, ABAC, row/column-level security |
| **Privacy + compliance** | PII classification, masking, redaction, audit trails |

<span class="at-kicker">Implementation</span>

## Implementation stages (per the guide)

1. **Inventory** — document data assets, owners, dependencies.
2. **Planning** — interview stakeholders; build trust; design policies.
3. **Education** — convince business owners + security admins of the value.
4. **Implementation** — query engine + catalog + policy engine.
5. **Enforcement** — automated where possible; chief policymakers ensure accountability.

<span class="at-kicker">Governance Models</span>

## Centralized vs Federated governance

| Centralized | Federated (mesh) |
| --- | --- |
| Single team owns policies | Each domain owns its policies |
| Easier consistency | Better local context |
| Harder at scale | Harder to align |
| Default for ≤ 50 employees | Default for large orgs |

[[../data-architecture/data-mesh|Data Mesh]] introduced **federated computational governance** — global standards enforced by automation.

<span class="at-kicker">Modern Enablers</span>

## Modern enablers

- **Policy-as-code** — Open Policy Agent (OPA), Apache Ranger.
- **Auto-classification** — ML-driven PII detection (DLP APIs).
- **Lineage tools** — OpenLineage, Marquez, native warehouse lineage.
- **Catalog + governance** unification — Dataplex (GCP), AWS Lake Formation, Microsoft Purview.

<span class="at-kicker">Compliance Frameworks</span>

## Compliance frameworks to know

- **GDPR** (EU privacy)
- **CCPA / CPRA** (California privacy)
- **HIPAA** (US health data)
- **PCI-DSS** (payment cards)
- **SOC 2** (operational controls)
- **ISO 27001** (information security)

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **Governance** vs **management** — clarify the distinction.
2. Walk through implementing GDPR's "right to be forgotten" in a warehouse with replicas.
3. **Centralized** vs **federated** governance — when prefer which?
4. How do you classify PII at scale?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Adjacent management
>> [[../../cloud/gcp/analytics/data-catalog|Data Catalog]], [[data-management|Data Management]], [[../data-ethics|Data Ethics]]
>
>
>> [!card] Architecture
>> [[../data-architecture/data-mesh|Data Mesh]]
>
>
>> [!card] Products
>> [[../../cloud/gcp/analytics/bigquery-iam|BigQuery IAM]], [[../../cloud/gcp/analytics/data-catalog|GCP Data Catalog / Dataplex]]
>
>
>> [!card] Guides
>> [[../../guides/data-governance-guide|Data Governance Guide]]
>
>
>> [!card] People
>> [[../../../people/zhamak-dehghani|Zhamak Dehghani]]
