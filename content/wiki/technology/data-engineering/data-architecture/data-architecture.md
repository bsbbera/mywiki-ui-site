---
title: Data Architecture
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Data Architecture
category: Computer Science
tags:
  - DataEngineering
  - Architecture
  - Patterns
banner:
dg-publish: true
publish: true
---
---

**Data architecture** describes how data is processed, stored, and utilized in an information system. It is the structural blueprint that connects sources, storage, processing engines, and consumers — the discipline of laying out *where data lives, how it flows, and who can use it* (source: Concepts/Data Architecture/Data Architecture.md).

A good data architecture answers four questions:

1. **Where does data come from?** — operational systems, APIs, files, streams.
2. **Where is it stored?** — warehouse, lake, mart, lakehouse, KV/document/graph stores.
3. **How is it processed?** — batch, streaming, hybrid.
4. **Who consumes it?** — analysts, ML pipelines, applications, dashboards.

## Popular architecture patterns

| Pattern | Best for |
| --- | --- |
| [[data-warehouse\|Data Warehouse]] | Centralized analytics on cleaned, modeled data |
| [[data-lake\|Data Lake]] | Cheap raw storage, flexible compute |
| [[data-mart\|Data Mart]] | Department-scoped subset of a warehouse |
| [[data-mesh\|Data Mesh]] | Domain-owned data products, federated governance |
| [[lambda-architecture\|Lambda Architecture]] | Combined batch + speed layers, fault-tolerant |
| [[kappa-architecture\|Kappa Architecture]] | Streams-only, single codebase |
| [[medallion-architecture\|Medallion Architecture]] | Bronze/silver/gold lakehouse layers |

(source: Concepts/Data Architecture/Data Architecture.md)

## Modern lakehouse evolution (not in raw)

A **lakehouse** combines the cheap, flexible storage of a data lake with the **transactional + SQL** power of a warehouse via formats like **Delta Lake**, **Iceberg**, **Hudi**. It is rapidly displacing the strict lake-vs-warehouse divide.

## Reference architectures by cloud

- **AWS**: [Reference Architecture Examples](https://aws.amazon.com/architecture/reference-architecture-diagrams/)
- **Azure**: [Architecture Examples](https://learn.microsoft.com/en-us/azure/architecture/browse/)
- **GCP**: [Architecture Center](https://cloud.google.com/architecture)

## How architecture maps onto GCP services

- **Warehouse**: [[../../../gcp/analytics/bigquery|BigQuery]]
- **Lake**: [[../../../gcp/storage/cloud-storage|Cloud Storage]] + BigLake
- **Streaming spine**: [[../../../gcp/analytics/pubsub|Pub/Sub]]
- **Batch + stream processing**: [[../../../gcp/analytics/dataflow|Dataflow]]
- **Visual ETL**: [[../../../gcp/analytics/datafusion|Data Fusion]]
- **Lakehouse**: [[../../../databricks/databricks|Databricks]] + Delta Lake

## Interview Questions

1. Lake vs warehouse vs lakehouse — when prefer which?
2. What is a **data mesh** and what problem does it solve?
3. **Lambda** vs **Kappa** architecture trade-offs.

## Related pages

> [!multi-column]
>
>> [!card] Architectures
>> [[data-warehouse|Data Warehouse]], [[data-lake|Data Lake]], [[data-mart|Data Mart]], [[data-mesh|Data Mesh]], [[lambda-architecture|Lambda]], [[kappa-architecture|Kappa]], [[medallion-architecture|Medallion]]
>
>
>> [!card] Adjacent concepts
>> [[../../data-warehousing|Data Warehousing]], [[../data-modeling/data-modeling|Data Modeling]], [[../data-processing/data-processing|Data Processing]]
>
>
>> [!card] People
>> [[../../../people/zhamak-dehghani|Zhamak Dehghani]], [[../../../people/bill-inmon|Bill Inmon]], [[../../../people/ralph-kimball|Ralph Kimball]]
>
>
>> [!card] Books
>> [[../../../books/fundamentals-of-data-engineering|Fundamentals of Data Engineering]]

