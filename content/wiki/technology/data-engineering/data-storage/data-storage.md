---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Data Storage
Created:
  - 2026-04-29
aliases:
  - Data Storage
category: Computer Science
tags:
  - data-engineering
  - concept
  - Storage
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Storage</span>

# Data Storage

<p class="at-lead">
Data storage covers the technologies and systems used to store and retrieve data in various formats and structures. Modern storage divides into two categories: databases with built-in compute, and object/blob storage requiring external compute.
</p>

<span class="at-stat">2</span> major categories &nbsp;·&nbsp; <span class="at-stat">10+</span> database types &nbsp;·&nbsp; <span class="at-mark">The foundation layer that determines performance, cost, and scalability</span>

> [!tip] The Storage Decision Tree
> Need ACID + complex joins? → Relational. Document-shaped data? → Document DB. Sub-millisecond reads? → In-memory. Petabyte time-series? → Wide-column or TSDB. The storage choice is the most consequential architecture decision — it affects every downstream operation.

<span class="at-kicker">Storage Categories</span>

## 1. Databases

Provide both storage and built-in compute with structured query interfaces.

### [[relational-database|Relational Database]]

Traditional structured storage using tables, rows, columns + ACID. See [[../../databases/acid-properties|ACID Properties]].

### [[non-relational-database|Non-Relational (NoSQL)]]

Flexible formats: documents, key-value, graphs, columns. Designed for scalability and schema-less.

Types:

- [[document-database|Document]]
- [[key-value-database|Key-Value]]
- [[graph-database|Graph]]
- [[wide-column-database|Wide-column]]
- [[column-oriented-database|Column-oriented]] (often used in warehouses)
- [[in-memory-database|In-memory]]
- [[timeseries-database|Time-series]]
- Search-engine (Elasticsearch, OpenSearch)

<span class="at-kicker">Object Storage</span>

## 2. Object / Blob Storage

Raw data persistence without compute — external engines (Spark, Presto, Dataflow, BigQuery) read the data on demand.

```mermaid
graph TB
    A[Applications] -->|PUT/GET/DELETE| B[Object Storage API]
    B --> C[Bucket / Container]
    C --> D[Objects / Files]
    C --> E[Metadata]
    F[External Compute] -->|Process files| D
```

Cloud examples:

- **AWS S3**, **S3 Glacier** (archival)
- **Azure Blob Storage**, **ADLS Gen2**
- **[[Cloud Storage|GCP Cloud Storage]]**

<span class="at-kicker">Decision Framework</span>

## Choosing the right storage

| Need | Pick |
| --- | --- |
| ACID transactions, complex joins | [[relational-database\|Relational]] |
| Flexible schema, document-oriented | [[document-database\|Document]] |
| Cache, simple lookups | [[key-value-database\|Key-Value]] |
| Relationships at scale | [[graph-database\|Graph]] |
| IoT / sensor / metrics | [[timeseries-database\|Time-series]] |
| Massive write throughput, sparse rows | [[wide-column-database\|Wide-column]] |
| Analytics aggregations | [[column-oriented-database\|Columnar]] (in warehouse) |
| Cheap raw blobs | Object storage |
| Full-text search | Search engine (Elasticsearch) |

<span class="at-kicker">Cloud Platforms</span>

## Storage in cloud platforms

| GCP | AWS | Azure |
| --- | --- | --- |
| [[Cloud Storage\|Cloud Storage]] | S3 | Blob Storage |
| [[../../cloud/gcp/storage/persistent-disk\|Persistent Disk]] | EBS | Disk Storage |
| [[../../cloud/gcp/storage/filestore\|Filestore]] | EFS | Files |
| [[../../cloud/gcp/databases/cloud-sql\|Cloud SQL]] | RDS / Aurora | SQL DB |
| [[../../cloud/gcp/databases/cloud-spanner\|Spanner]] | Aurora Global / DynamoDB Global | Cosmos DB |
| [[../../cloud/gcp/databases/cloud-bigtable\|Bigtable]] | DynamoDB / Keyspaces | Cosmos DB |
| [[../../cloud/gcp/databases/cloud-datastore\|Firestore]] | DynamoDB | Cosmos DB |
| [[../../cloud/gcp/databases/memorystore\|Memorystore]] | ElastiCache | Cache for Redis |
| [[../../cloud/gcp/analytics/bigquery\|BigQuery]] | Redshift | Synapse |

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **Database** vs **object storage** — fundamental difference.
2. Walk through choosing storage for: a SaaS app, IoT telemetry, analytics warehouse, real-time leaderboard.
3. **SQL** vs **NoSQL** — when prefer which?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Storage hub
>> [[database|Database]], [[relational-database|Relational Database]], [[non-relational-database|Non-relational / NoSQL]]
>
>
>> [!card] NoSQL families
>> [[document-database|Document Database]], [[key-value-database|Key-Value Database]], [[graph-database|Graph Database]], [[wide-column-database|Wide-column Database]]
>
>
>> [!card] Specialty stores
>> [[column-oriented-database|Column-oriented Database]], [[in-memory-database|In-memory Database]], [[timeseries-database|Time-series Database]]
>
>
>> [!card] Tools + theory
>> [[../../tools/databases-overview|Databases Overview]], [[../../tools/object-storage|Object Storage]], [[../../databases/acid-properties|ACID Properties]]
