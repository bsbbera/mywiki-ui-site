---
title: Data Governance
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Data Governance
category: Computer Science
tags:
  - DataEngineering
  - Governance
  - Compliance
banner:
dg-publish: true
---

---

**Data Governance** is the set of **policies and procedures** that ensure data used in an organization is of **high quality throughout its lifecycle** — input, storage, transformation, access, and deletion (source: Concepts/Data Management/Data Governance.md).

> See the [[../../guides/data-governance-guide|Data Governance Guide]] for the full implementation playbook (5 stages: inventory → planning → education → implementation → enforcement).

## Why governance matters

Data has become **simultaneously valuable and dangerous** — a competitive asset *and* a compliance liability. Without governance:

- **Compliance risk** — GDPR / HIPAA / PCI-DSS / CCPA fines.
- **Data quality** decays over time as ownership fragments.
- **Trust evaporates** — analysts stop using "official" data and rebuild private spreadsheets.
- **Security incidents** — credentials sprawl, PII leaks.

## Core elements

| Element | What it covers |
| --- | --- |
| **Policies** | Rules: what data exists, how it's used, retention, deletion |
| **Stewardship** | Domain experts who own datasets |
| **Lineage** | How data flows source → consumer |
| **Catalog** | Discovery + metadata; see [[data-catalog]] |
| **Quality controls** | Tests, SLAs, monitoring, alerts |
| **Access control** | IAM, RBAC, ABAC, row/column-level security |
| **Privacy + compliance** | PII classification, masking, redaction, audit trails |

## Implementation stages (per the guide)

1. **Inventory** — document data assets, owners, dependencies.
2. **Planning** — interview stakeholders; build trust; design policies.
3. **Education** — convince business owners + security admins of the value.
4. **Implementation** — query engine + catalog + policy engine.
5. **Enforcement** — automated where possible; chief policymakers ensure accountability.

## Centralized vs Federated governance

| Centralized | Federated (mesh) |
| --- | --- |
| Single team owns policies | Each domain owns its policies |
| Easier consistency | Better local context |
| Harder at scale | Harder to align |
| Default for ≤ 50 employees | Default for large orgs |

[[../data-architecture/data-mesh|Data Mesh]] introduced **federated computational governance** — global standards enforced by automation.

## Modern enablers

- **Policy-as-code** — Open Policy Agent (OPA), Apache Ranger.
- **Auto-classification** — ML-driven PII detection (DLP APIs).
- **Lineage tools** — OpenLineage, Marquez, native warehouse lineage.
- **Catalog + governance** unification — Dataplex (GCP), AWS Lake Formation, Microsoft Purview.

## Compliance frameworks to know

- **GDPR** (EU privacy)
- **CCPA / CPRA** (California privacy)
- **HIPAA** (US health data)
- **PCI-DSS** (payment cards)
- **SOC 2** (operational controls)
- **ISO 27001** (information security)

## Interview Questions

1. **Governance** vs **management** — clarify the distinction.
2. Walk through implementing GDPR's "right to be forgotten" in a warehouse with replicas.
3. **Centralized** vs **federated** governance — when prefer which?
4. How do you classify PII at scale?

## Related pages

> [!multi-column]
>
>> [!card] Adjacent management
>> [[data-catalog|Data Catalog]], [[data-management|Data Management]], [[../../data-ethics|Data Ethics]]
>
>
>> [!card] Architecture
>> [[../data-architecture/data-mesh|Data Mesh]]
>
>
>> [!card] Products
>> [[../../../gcp/analytics/bigquery-iam|BigQuery IAM]], [[../../../gcp/analytics/data-catalog|GCP Data Catalog / Dataplex]]
>
>
>> [!card] Guides
>> [[../../guides/data-governance-guide|Data Governance Guide]]
>
>
>> [!card] People
>> [[../../../people/zhamak-dehghani|Zhamak Dehghani]]

