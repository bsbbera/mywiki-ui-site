---
title: Data Catalog (concept)
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Data Catalog
  - Data Dictionary
category: Computer Science
tags:
  - DataEngineering
  - Metadata
  - Discovery
  - Governance
banner:
publish: true
---

> "We don't stop playing because we grow old; we grow old because we stop playing."
> <cite>— George Bernard Shaw</cite>

---

A **data catalog** is a collection of all an organization's data assets, using **metadata + data management** to help users **find data for their use case**. It covers the **discoverability** function of an enterprise data platform and often builds **lineage** of how data flows from source to consumer (source: Concepts/Data Management/Data Catalog.md).

> For the **GCP product** specifically, see [[../../cloud/gcp/analytics/data-catalog|Data Catalog (GCP)]] — now part of **Dataplex Catalog**.

## What a catalog stores

- **Schema** — tables, columns, types, descriptions.
- **Ownership** — who built it, who maintains it.
- **Lineage** — upstream sources and downstream consumers.
- **Tags** — sensitivity (PII, PCI), domain (finance, marketing), quality (curated, raw).
- **Stewardship** — subject-matter experts.
- **Freshness / staleness** — last update, refresh cadence.
- **Usage stats** — popular tables, frequent queries, top consumers.
- **Access policies** — who can see what.

## Problems a data catalog solves

(source: Concepts/Data Management/Data Catalog.md)

1. **Data discoverability** — "what dataset has customer churn?"
2. **Data redundancy** — surfacing duplicates so teams stop building parallel marts.
3. **Data reproducibility** — lineage tells you exactly how a metric was derived.
4. **Data stewardship** — who owns this; whom to ask?
5. **Data staleness** — is this data fresh or 6 months old?
6. **Refresh frequency** — how often is this updated?

## Popular tools

| Category | Tools |
| --- | --- |
| **Open-source** | DataHub, Amundsen, OpenMetadata, Apache Atlas |
| **Commercial** | Alation, Collibra, Atlan, data.world |
| **Cloud-native** | [[../../cloud/gcp/analytics/data-catalog|GCP Dataplex Catalog]], AWS Glue Data Catalog, Microsoft Purview |

## What good catalog UX looks like

- **Search** like Google — single bar, faceted filters.
- **Inline previews** — sample rows, schema, lineage graph.
- **Slack/email integration** — request access, ask owner.
- **Auto-classification** — ML-driven PII detection.
- **API + GraphQL** — programmatic access for CI/CD.

## Catalog vs Lineage vs Glossary

- **Catalog** — index of *what data exists*.
- **Lineage** — graph of *how data flows*.
- **Glossary** — definitions of business terms (a customer is …).
- The best modern platforms unify all three.

## Interview Questions

1. Why is a data catalog harder than just `INFORMATION_SCHEMA`?
2. **Push** vs **pull** lineage — how do you build each?
3. How would you classify PII columns automatically?
4. Cataloging on GCP — Data Catalog vs Dataplex Catalog vs Analytics Hub?

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

