---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Data Catalog (concept)
Created:
  - 2026-04-29
aliases:
  - Data Catalog
  - Data Dictionary
category: Computer Science
tags:
  - data-engineering
  - concept
  - Metadata
  - Discovery
  - Governance
banner: https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Management</span>

# Data Catalog

<p class="at-lead">
A data catalog is a collection of all an organization's data assets, using metadata + data management to help users find data for their use case. It covers the discoverability function of an enterprise data platform and often builds lineage of how data flows from source to consumer.
</p>

<span class="at-stat">50%+</span> time saved finding data &nbsp;·&nbsp; <span class="at-stat">6</span> core metadata types &nbsp;·&nbsp; <span class="at-mark">The search engine for your data warehouse</span>

> [!tip] For the GCP product specifically, see [[../../cloud/gcp/analytics/data-catalog|Data Catalog (GCP)]] — now part of **Dataplex Catalog**.

<span class="at-kicker">Core Metadata</span>

## What a catalog stores

- **Schema** — tables, columns, types, descriptions.
- **Ownership** — who built it, who maintains it.
- **Lineage** — upstream sources and downstream consumers.
- **Tags** — sensitivity (PII, PCI), domain (finance, marketing), quality (curated, raw).
- **Stewardship** — subject-matter experts.
- **Freshness / staleness** — last update, refresh cadence.
- **Usage stats** — popular tables, frequent queries, top consumers.
- **Access policies** — who can see what.

<span class="at-kicker">Problems Solved</span>

## Problems a data catalog solves

1. **Data discoverability** — "what dataset has customer churn?"
2. **Data redundancy** — surfacing duplicates so teams stop building parallel marts.
3. **Data reproducibility** — lineage tells you exactly how a metric was derived.
4. **Data stewardship** — who owns this; whom to ask?
5. **Data staleness** — is this data fresh or 6 months old?
6. **Refresh frequency** — how often is this updated?

<span class="at-kicker">Tools Landscape</span>

## Popular tools

| Category | Tools |
| --- | --- |
| **Open-source** | DataHub, Amundsen, OpenMetadata, Apache Atlas |
| **Commercial** | Alation, Collibra, Atlan, data.world |
| **Cloud-native** | [[../../cloud/gcp/analytics/data-catalog|GCP Dataplex Catalog]], AWS Glue Data Catalog, Microsoft Purview |

<span class="at-kicker">UX Patterns</span>

## What good catalog UX looks like

- **Search** like Google — single bar, faceted filters.
- **Inline previews** — sample rows, schema, lineage graph.
- **Slack/email integration** — request access, ask owner.
- **Auto-classification** — ML-driven PII detection.
- **API + GraphQL** — programmatic access for CI/CD.

<span class="at-kicker">Key Distinctions</span>

## Catalog vs Lineage vs Glossary

- **Catalog** — index of *what data exists*.
- **Lineage** — graph of *how data flows*.
- **Glossary** — definitions of business terms (a customer is …).
- The best modern platforms unify all three.

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. Why is a data catalog harder than just `INFORMATION_SCHEMA`?
2. **Push** vs **pull** lineage — how do you build each?
3. How would you classify PII columns automatically?
4. Cataloging on GCP — Data Catalog vs Dataplex Catalog vs Analytics Hub?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Adjacent management concepts
>> [[data-governance|Data Governance]], [[data-management|Data Management]], [[semantic-layer|Semantic Layer]], [[metrics-layer|Metrics Layer]]
>
>
>> [!card] Products
>> [[../../cloud/gcp/analytics/data-catalog|GCP Data Catalog]]
>
>
>> [!card] Guides
>> [[../../guides/data-governance-guide|Data Governance Guide]]
>
>
>> [!card] Security + access
>> [[../../cloud/gcp/analytics/bigquery-iam|BigQuery IAM]], [[../../cloud/gcp/analytics/bigquery-authorized-views|Authorized Views]]
