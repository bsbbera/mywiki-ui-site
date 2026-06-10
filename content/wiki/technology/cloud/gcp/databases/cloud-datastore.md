---
title: Cloud Datastore
Created:
  - 2026-04-27
date modified: Thursday, June 4th 2026, 7:00:00 pm
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
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Cloud Datastore
> ###### Cloud Service
> | | |
> | --- | --- |
> | **Provider** | Google Cloud |
> | **Type** | Serverless NoSQL document database |
> | **Category** | Database |
> | **Launched** | 2013 (now Firestore in Datastore mode) |
> | **Interface** | REST API, gRPC, client libraries |
> | **Website** | cloud.google.com/datastore |

---

> "Sometimes a change of perspective is all it takes to see the light."
> <cite>— Dan Brown</cite>

---

<span class="at-kicker">Legacy NoSQL · Google Cloud</span>
# Cloud Datastore
<p class="at-lead">Cloud Datastore is GCP's fully managed, serverless NoSQL document database. Applications store, retrieve, and query entities (schema-flexible documents) identified by unique keys, grouped by kinds.</p>
<span class="at-stat">document</span> model &nbsp;·&nbsp; <span class="at-stat">automatic scaling</span> &nbsp;·&nbsp; <span class="at-mark">now superseded by Firestore — use Firestore for new projects</span>

<span class="at-kicker">How It Works</span>

## Overview

## Important rename: Firestore in Datastore mode

Since 2018, Google has rebranded the product as **"Firestore in Datastore mode"**. The same API is preserved, but the storage engine is Firestore's next-generation backend. New projects should pick between two Firestore modes:

- **Firestore in Native mode** — real-time listeners, offline sync, client SDKs for mobile/web.
- **Firestore in Datastore mode** — classic Datastore semantics; backend-only access, stronger consistency model.

The raw source predates this rename.

## Core concepts

| Term | Meaning |
| --- | --- |
| **Entity** | One document; a bag of properties |
| **Kind** | Entity category (like a "table") |
| **Key** | Globally unique entity identifier (can be hierarchical) |
| **Property** | Named value; any primitive, list, or embedded entity |
| **Index** | Automatic single-property + manual composite |
| **Entity group** | Entities sharing an ancestor key; boundary for strong consistency |

## Architecture

- **Client applications** — SDKs in Java, Python, Go, Node.js (and REST).
- **Distributed storage** — data replicated across multiple zones / regions for durability and HA.
- **Indexes** — single-property indexes are automatic; composite indexes are declared.
- **Consistency** — **strong** within an entity group (ancestor queries, transactions); **eventual** across entity groups for non-ancestor queries.
- **Serverless** — no capacity planning; scales to zero.

## Data model characteristics

- **Schema-flexible** — entities of the same kind can have different properties.
- **Hierarchical keys** — parent/ancestor relationships model document trees.
- **ACID transactions** — within an entity group; limited cross-group transactions.
- **Rich queries** — filters, sorts, projections, composite indexes.

<span class="at-kicker">Core Capabilities</span>

## Key Features

> [!grid|cols3]
>
>> [!card|section]
>> **Serverless Scaling**
>> No capacity planning required. Scales read/write capacity automatically from zero to millions of requests.
>
>> [!card|section]
>> **Fully Managed**
>> Google handles infrastructure, replication, upgrades, and index management. Zero operational overhead.
>
>> [!card|section]
>> **Flexible Schema**
>> Add properties without migrations. Entities of the same kind can have completely different structures.
>
>> [!card|section]
>> **Hierarchical Keys**
>> Ancestor paths enable multi-tenant layouts with strong-consistency transactions spanning related entities.
>
>> [!card|section]
>> **Tight GCP Integration**
>> Native clients for App Engine, Cloud Functions, Cloud Run. Works seamlessly with the entire GCP ecosystem.
>
>> [!card|section]
>> **GQL Query Language**
>> SQL-like query syntax familiar to developers. Automatic single-property indexes plus manual composite support.

## Typical workflow

1. Create a GCP project.
2. Enable the Firestore / Datastore API.
3. Choose **Datastore mode** (one-time per project).
4. Create kinds and insert entities via Console, SDK, or REST.
5. Query via **GQL** (a SQL-like query language) or SDK query builders.

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

## Best practices

- Use structured **ancestor paths** for related entities you'll transact together.
- Avoid **monotonically increasing keys** — they cause write hot-spots.
- Use **composite indexes** only when needed (they cost storage + write amplification).
- For analytical queries, **export to BigQuery** rather than running scans.
- Handle **eventual consistency** in UI where needed.

<span class="at-kicker">Real-World Applications</span>

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

- The original **Google Datastore (2008)** was the first database service in App Engine — one of the earliest examples of **serverless NoSQL** on a public cloud.
- **Hierarchical keys** (e.g. `/Org/acme/User/alice`) enable multi-tenant data layouts that strong-consistency transactions can still span.
- Firestore in Datastore mode preserves the **GQL** query language, so existing Datastore apps can upgrade without rewrites.

## Interview Questions can be asked

1. Difference between Firestore Native mode and Datastore mode.
2. What is an entity group and why does it matter for consistency?
3. How does Datastore differ from Bigtable?
4. Why can monotonically increasing keys cause performance issues?
5. When pick Datastore over Cloud Spanner?

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 3 STEPS · CLOUD DATASTORE
>> # From *app data* to *document store*.
>> Now superseded by Firestore — use Firestore for new projects.
>
>> [!card|step]
>> ###### Step 01
>> ### Define *entity kinds*.
>> Think of kinds as collections. Define the structure of your documents with flexible schema — no migrations needed.
>
>> [!card|step]
>> ###### Step 02
>> ### Write *entities via API*.
>> Use client libraries for Python, Java, Go, Node.js. Hierarchical keys enable ancestor relationships.
>
>> [!card|step]
>> ###### Step 03
>> ### Query *with GQL*.
>> SQL-like query language for familiar syntax. Automatic indexes for single properties, manual for composite.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister GCP databases
>> [[cloud-sql|Cloud SQL]], [[cloud-spanner|Cloud Spanner]], [[cloud-bigtable|Cloud Bigtable]], [[memorystore|Memorystore]]
>
>
>> [!card] Data Storage
>> [[../../../data-engineering/data-storage/document-database|Document Database]], [[../../../data-engineering/data-storage/non-relational-database|Non-relational Database]]
>
>
>> [!card] DBMS Theory
>> [[../../../databases/acid-properties|ACID Properties]]
>
>
>> [!card] Foundations + certs
>> [[../foundations/google-cloud-platform|Google Cloud Platform]], [[Professional Data Engineer|PDE Certification]]
