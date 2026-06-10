---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Data Management
Created:
  - 2026-04-29
aliases:
  - Data Management
category: Computer Science
tags:
  - data-engineering
  - concept
  - Governance
  - Quality
banner: https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Management</span>

# Data Management

<p class="at-lead">
Data Management is the practice of collecting, organizing, protecting, and storing data in a way that enables efficient access, analysis, and decision-making throughout its entire lifecycle. It encompasses the policies, procedures, and technologies used to ensure data is accurate, available, secure, and compliant.
</p>

<span class="at-stat">6</span> core components &nbsp;·&nbsp; <span class="at-stat">Lifecycle</span> from creation to deletion &nbsp;·&nbsp; <span class="at-mark">The operational discipline behind trustworthy data</span>

> [!tip] Governance vs Management
> **Governance** sets the policies and rules. **Management** executes them. Think of governance as the constitution and management as the government — one defines what should be, the other makes it happen.

<span class="at-kicker">Core Components</span>

## Components

### 1. [[data-governance|Data Governance]]

Establishes the **policies, procedures, and standards** for managing data across an organization. Ownership, stewardship, lifecycle, retention, audit.

### 2. Data Quality Management

Ensures data is **accurate, complete, consistent, and fit for purpose**. Tooling: [[../../tools/quality-tools|Great Expectations, Soda, Monte Carlo, dbt tests]].

### 3. [[../../cloud/gcp/analytics/data-catalog|Data Catalog]]

Centralized **inventory of data assets** with metadata to improve discoverability. Tools: Alation, Atlan, Collibra; cloud-native [[../../cloud/gcp/analytics/data-catalog|Dataplex Catalog]] (GCP), AWS Glue Data Catalog, Microsoft Purview.

### 4. Data Security

Protects data from unauthorized access, corruption, theft. Encryption at rest + in transit, IAM, audit logging, masking, DLP.

### 5. Master + Reference Data Management (MDM)

Maintains **single source of truth** for entities like customers, products, locations across systems.

### 6. Metadata Management

Technical, business, and operational metadata about each dataset — schema, owner, lineage, freshness, classification, sensitivity.

<span class="at-kicker">Abstraction Layers</span>

## Where the [[semantic-layer|semantic]] and [[metrics-layer|metrics]] layers fit

- The **semantic layer** unifies multiple source models into a single business-friendly view.
- The **metrics layer** is the single source of truth for **how a metric is defined**.

Both are core data-management abstractions for analytics consumers.

<span class="at-kicker">Related Disciplines</span>

## Disciplines often grouped here

- [[../../databases/database-normalization|Normalization]] — schema-design discipline at the DBMS layer.
- [[../../databases/acid-properties|ACID properties]] — transactional guarantees of well-managed databases.
- [[../../software-engineering/data-unit-test|Data unit tests]] — automated quality enforcement.

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. What's the difference between **data governance** and **data management**?
2. Why is a **data catalog** essential for any analytics org > 50 people?
3. **Semantic layer** vs **metrics layer** — overlap and difference.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sub-disciplines
>> [[../../cloud/gcp/analytics/data-catalog|Data Catalog]], [[data-governance|Data Governance]], [[semantic-layer|Semantic Layer]], [[metrics-layer|Metrics Layer]]
>
>
>> [!card] Practitioner guides
>> [[../../guides/data-governance-guide|Data Governance Guide]], [[../data-ethics|Data Ethics]]
>
>
>> [!card] People
>> [[../../../people/zhamak-dehghani|Zhamak Dehghani]]
>
>
>> [!card] Products
>> [[../../cloud/gcp/analytics/data-catalog|GCP Data Catalog / Dataplex]]
