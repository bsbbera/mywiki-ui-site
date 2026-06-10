---
title: Data Architecture
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Data Architecture
category: Computer Science
tags:
  - DataEngineering
  - Architecture
  - Patterns
banner: https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1400
publish: true
cssclass: wide-page
---

> "The most important battle is one to conquer yourself."
> <cite>— Yanni</cite>

---

<span class="at-kicker">Data Engineering · Architecture</span>

# Data Architecture

<p class="at-lead">
Data architecture describes how data is processed, stored, and utilized in an information system. It is the structural blueprint that connects sources, storage, processing engines, and consumers — the discipline of laying out where data lives, how it flows, and who can use it.
</p>

<span class="at-stat">7+</span> architecture patterns &nbsp;·&nbsp; <span class="at-stat">4</span> key questions answered &nbsp;·&nbsp; <span class="at-mark">the blueprint decisions that determine how data flows, scales, and governed</span>

> [!tip] When to Architect
> A good data architecture answers four questions: Where does data come from? Where is it stored? How is it processed? Who consumes it? Design your architecture before building pipelines — retrofitting is 10× more expensive.

<span class="at-kicker">Architecture Patterns</span>

## Popular architecture patterns

> [!grid|cols3]
>
> > [!card|section] [[data-warehouse|Data Warehouse]]
> > Centralized analytics on cleaned, modeled data. The single source of analytical truth for enterprise BI.
>
> > [!card|section] [[data-lake|Data Lake]]
> > Cheap raw storage with flexible compute. Store everything first, impose schema on read — maximum flexibility.
>
> > [!card|section] [[data-mart|Data Mart]]
> > Department-scoped subset of a warehouse. A subject-area slice optimized for one team's analytics.
>
> > [!card|section] [[data-mesh|Data Mesh]]
> > Domain-owned data products with federated governance. Treat data as a product — owned by the domain that creates it.
>
> > [!card|section] [[lambda-architecture|Lambda Architecture]]
> > Combined batch + speed layers for fault-tolerant hybrid processing. Batch for accuracy, streaming for speed.
>
> > [!card|section] [[kappa-architecture|Kappa Architecture]]
> > Streams-only, single codebase. Simplify Lambda by making streaming the single processing path.
>
> > [!card|section] [[medallion-architecture|Medallion Architecture]]
> > Bronze/silver/gold lakehouse layers. Progressive data quality in the lakehouse — from raw to business-ready.

(source: Concepts/Data Architecture/Data Architecture.md)

<span class="at-kicker">Lakehouse Evolution</span>

## Modern lakehouse evolution

A **lakehouse** combines the cheap, flexible storage of a data lake with the **transactional + SQL** power of a warehouse via formats like **Delta Lake**, **Iceberg**, **Hudi**. It is rapidly displacing the strict lake-vs-warehouse divide.

<span class="at-kicker">Cloud Reference</span>

## Reference architectures by cloud

> [!grid|cols3]
>
> > [!card|section] **AWS**
> > [Reference Architecture Examples](https://aws.amazon.com/architecture/reference-architecture-diagrams/)
>
> > [!card|section] **Azure**
> > [Architecture Examples](https://learn.microsoft.com/en-us/azure/architecture/browse/)
>
> > [!card|section] **GCP**
> > [Architecture Center](https://cloud.google.com/architecture)

## How architecture maps onto GCP services

| Pattern | GCP Service |
| --- | --- |
| **Warehouse** | [[../../cloud/gcp/analytics/bigquery\|BigQuery]] |
| **Lake** | [[Cloud Storage\|Cloud Storage]] + BigLake |
| **Streaming spine** | [[../../cloud/gcp/analytics/pubsub\|Pub/Sub]] |
| **Batch + stream processing** | [[../../cloud/gcp/analytics/dataflow\|Dataflow]] |
| **Visual ETL** | [[../../cloud/gcp/analytics/datafusion\|Data Fusion]] |
| **Lakehouse** | [[../../cloud/databricks/databricks\|Databricks]] + Delta Lake |

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. Lake vs warehouse vs lakehouse — when prefer which?
2. What is a **data mesh** and what problem does it solve?
3. **Lambda** vs **Kappa** architecture trade-offs.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Architectures
>> [[data-warehouse|Data Warehouse]], [[data-lake|Data Lake]], [[data-mart|Data Mart]], [[data-mesh|Data Mesh]], [[lambda-architecture|Lambda]], [[kappa-architecture|Kappa]], [[medallion-architecture|Medallion]]
>
>
>> [!card] Adjacent concepts
>> [[../data-warehousing|Data Warehousing]], [[../data-modeling/data-modeling|Data Modeling]], [[../data-processing/data-processing|Data Processing]]
>
>
>> [!card] People
>> [[../../../people/zhamak-dehghani|Zhamak Dehghani]], [[../../../people/bill-inmon|Bill Inmon]], [[../../../people/ralph-kimball|Ralph Kimball]]
>
>
>> [!card] Books
>> [[../../../books/fundamentals-of-data-engineering|Fundamentals of Data Engineering]]
