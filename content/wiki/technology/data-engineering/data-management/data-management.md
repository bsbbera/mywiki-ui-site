---
title: Data Management
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Data Management
category: Computer Science
tags:
  - DataEngineering
  - Governance
  - Quality
banner:
dg-publish: true
publish: true
---
---

**Data Management** is the practice of collecting, organizing, protecting, and storing data in a way that enables efficient access, analysis, and decision-making throughout its entire lifecycle. It encompasses the policies, procedures, and technologies used to ensure data is **accurate, available, secure, and compliant** while meeting business requirements (source: Concepts/Data Management/Data Management.md).

## Components

### 1. [[data-governance|Data Governance]]

Establishes the **policies, procedures, and standards** for managing data across an organization. Ownership, stewardship, lifecycle, retention, audit.

### 2. Data Quality Management

Ensures data is **accurate, complete, consistent, and fit for purpose**. Tooling: [[../../tools/quality-tools|Great Expectations, Soda, Monte Carlo, dbt tests]].

### 3. [[data-catalog|Data Catalog]]

Centralized **inventory of data assets** with metadata to improve discoverability. Tools: Alation, Atlan, Collibra; cloud-native [[../../../gcp/analytics/data-catalog|Dataplex Catalog]] (GCP), AWS Glue Data Catalog, Microsoft Purview.

### 4. Data Security

Protects data from unauthorized access, corruption, theft. Encryption at rest + in transit, IAM, audit logging, masking, DLP.

### 5. Master + Reference Data Management (MDM, not in raw)

Maintains **single source of truth** for entities like customers, products, locations across systems.

### 6. Metadata Management

Technical, business, and operational metadata about each dataset — schema, owner, lineage, freshness, classification, sensitivity.

## Where the [[semantic-layer|semantic]] and [[metrics-layer|metrics]] layers fit

- The **semantic layer** unifies multiple source models into a single business-friendly view.
- The **metrics layer** is the single source of truth for **how a metric is defined**.

Both are core data-management abstractions for analytics consumers.

## Disciplines often grouped here

- [[../../../dbms/database-normalization|Normalization]] — schema-design discipline at the DBMS layer.
- [[../../../dbms/acid-properties|ACID properties]] — transactional guarantees of well-managed databases.
- [[../software-engineering/data-unit-test|Data unit tests]] — automated quality enforcement.

## Interview Questions

1. What's the difference between **data governance** and **data management**?
2. Why is a **data catalog** essential for any analytics org > 50 people?
3. **Semantic layer** vs **metrics layer** — overlap and difference.

## Related pages

> [!multi-column]
>
>> [!card] Sub-disciplines
>> [[data-catalog|Data Catalog]], [[data-governance|Data Governance]], [[semantic-layer|Semantic Layer]], [[metrics-layer|Metrics Layer]]
>
>
>> [!card] Practitioner guides
>> [[../../guides/data-governance-guide|Data Governance Guide]], [[../../data-ethics|Data Ethics]]
>
>
>> [!card] People
>> [[../../../people/zhamak-dehghani|Zhamak Dehghani]]
>
>
>> [!card] Products
>> [[../../../gcp/analytics/data-catalog|GCP Data Catalog / Dataplex]]

