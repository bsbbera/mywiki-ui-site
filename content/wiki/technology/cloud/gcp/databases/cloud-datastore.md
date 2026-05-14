---
title: Cloud Datastore
Created:
  - 2026-04-27
date modified: Monday, April 27th 2026, 10:05:00 pm
aliases:
  - Datastore
  - Firestore in Datastore mode
category: Cloud
tags:
  - GCP
  - Database
  - NoSQL
  - Document
  - DataEngineering
banner:
dg-publish: true
---

---

Cloud Datastore is GCP's **fully managed, serverless NoSQL document database**. Applications store, retrieve, and query **entities** (schema-flexible documents) identified by unique **keys**, grouped by **kinds** (source: Use Cloud Datastore For NoSQL Database On GCP.md).

## Important rename: Firestore in Datastore mode

Since 2018, Google has rebranded the product as **"Firestore in Datastore mode"** ([cloud.google.com/datastore/docs](https://cloud.google.com/datastore/docs)). The same API is preserved, but the storage engine is Firestore's next-generation backend. New projects should pick between two Firestore modes:

- **Firestore in Native mode** â€” real-time listeners, offline sync, client SDKs for mobile/web.
- **Firestore in Datastore mode** â€” classic Datastore semantics; backend-only access, stronger consistency model.

The raw source predates this rename (source: Use Cloud Datastore For NoSQL Database On GCP.md).

## Core concepts

| Term | Meaning |
| --- | --- |
| **Entity** | One document; a bag of properties |
| **Kind** | Entity category (like a "table") |
| **Key** | Globally unique entity identifier (can be hierarchical) |
| **Property** | Named value; any primitive, list, or embedded entity |
| **Index** | Automatic single-property + manual composite |
| **Entity group** | Entities sharing an ancestor key; boundary for strong consistency |

(source: Use Cloud Datastore For NoSQL Database On GCP.md)

## Architecture

- **Client applications** â€” SDKs in Java, Python, Go, Node.js (and REST).
- **Distributed storage** â€” data replicated across multiple zones / regions for durability and HA.
- **Indexes** â€” single-property indexes are automatic; composite indexes are declared.
- **Consistency** â€” **strong** within an entity group (ancestor queries, transactions); **eventual** across entity groups for non-ancestor queries.
- **Serverless** â€” no capacity planning; scales to zero.

(source: Use Cloud Datastore For NoSQL Database On GCP.md)

## Data model characteristics

- **Schema-flexible** â€” entities of the same kind can have different properties.
- **Hierarchical keys** â€” parent/ancestor relationships model document trees.
- **ACID transactions** â€” within an entity group; limited cross-group transactions.
- **Rich queries** â€” filters, sorts, projections, composite indexes.

## Typical workflow

1. Create a GCP project.
2. Enable the Firestore / Datastore API.
3. Choose **Datastore mode** (one-time per project).
4. Create kinds and insert entities via Console, SDK, or REST.
5. Query via **GQL** (a SQL-like query language) or SDK query builders.

(source: Use Cloud Datastore For NoSQL Database On GCP.md)

## Example Python usage

```python
from google.cloud import datastore

client = datastore.Client()

# Create an entity
key = client.key("Person", "alice@example.com")
person = datastore.Entity(key=key)
person.update({"name": "Alice", "age": 30})
client.put(person)

# Query
query = client.query(kind="Person")
query.add_filter("age", ">", 18)
for entity in query.fetch():
    print(entity)
```

## Why use Datastore / Firestore

1. **Scalability** â€” serverless; scales read/write capacity automatically.
2. **Fully managed** â€” Google handles infra, replication, upgrades.
3. **Flexible schema** â€” add properties without migrations.
4. **Tight GCP integration** â€” App Engine, Cloud Functions, Cloud Run all have native clients.

## Best practices

- Use structured **ancestor paths** for related entities you'll transact together.
- Avoid **monotonically increasing keys** â€” they cause write hot-spots.
- Use **composite indexes** only when needed (they cost storage + write amplification).
- For analytical queries, **export to BigQuery** rather than running scans.
- Handle **eventual consistency** in UI where needed.

(source: Use Cloud Datastore For NoSQL Database On GCP.md)

## Datastore vs other GCP databases

| Need | Pick |
| --- | --- |
| Mobile/web realtime + offline | **Firestore Native mode** |
| Backend document DB, serverless | **Datastore / Firestore Datastore mode** |
| Relational single-region | [[cloud-sql]] |
| Relational global | [[cloud-spanner]] |
| Wide-column, huge scale | [[cloud-bigtable]] |
| Cache | [[memorystore]] |

## Interesting Facts

- The original **Google Datastore (2008)** was the first database service in App Engine â€” one of the earliest examples of **serverless NoSQL** on a public cloud.
- **Hierarchical keys** (e.g. `/Org/acme/User/alice`) enable multi-tenant data layouts that strong-consistency transactions can still span.
- Firestore in Datastore mode preserves the **GQL** query language, so existing Datastore apps can upgrade without rewrites.

## Interview Questions can be asked

1. Difference between Firestore Native mode and Datastore mode.
2. What is an entity group and why does it matter for consistency?
3. How does Datastore differ from [[cloud-bigtable]]?
4. Why can monotonically increasing keys cause performance issues?
5. When pick Datastore over [[cloud-spanner]]?

## Related pages

> [!multi-column]
>
>> [!card] Sister GCP databases
>> [[cloud-sql|Cloud SQL]], [[cloud-spanner|Cloud Spanner]], [[cloud-bigtable|Cloud Bigtable]], [[memorystore|Memorystore]]
>
>
>> [!card] Data Storage
>> [[../../data-engineering/concepts/data-storage/document-database|Document Database]], [[../../data-engineering/concepts/data-storage/non-relational-database|Non-relational Database]]
>
>
>> [!card] DBMS Theory
>> [[../../dbms/acid-properties|ACID Properties]]
>
>
>> [!card] Foundations + certs
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[../certifications/professional-data-engineer|PDE Certification]]

