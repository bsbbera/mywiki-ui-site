---
title: Document Database
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Document Database
  - Document Store
category: Computer Science
tags:
  - DataEngineering
  - Storage
  - NoSQL
banner:
dg-publish: true
publish: true
---

---

A **document database** is a type of [[non-relational-database|NoSQL]] database designed to store and query data as **JSON-like documents**. Document databases make it easy to store and query data that **evolves with an application's needs**. The model fits use cases like **catalogs, user profiles, content management** where each document is unique and evolves over time (source: Concepts/Data Storage/Document Database.md).

## Data model

A "document" is a self-contained, hierarchical record:

```json
{
  "_id": "user_42",
  "name": "Alice",
  "email": "alice@example.com",
  "addresses": [
    { "type": "home", "city": "Paris" },
    { "type": "work", "city": "Lyon" }
  ],
  "preferences": { "newsletter": true, "lang": "en" }
}
```

Documents are grouped in **collections** (similar to tables, but schema-less).

## Advantages

- **Create documents without upfront schema**.
- **Add new fields** without altering existing documents.
- **Scales horizontally** very easily — natural sharding by document ID.
- Maps cleanly to **application objects** (no ORM impedance mismatch).
- Fast reads when you fetch by document ID.

## Disadvantages

- **Query performance** less efficient than relational for analytical queries.
- More **technical knowledge** to query — usage often limited to engineers.
- **Updates are slower** — data may be distributed and duplicated.
- **No native ACID across documents** in many systems (improving though).

## Use cases

- **Content management** — articles, posts, pages.
- **Catalogs** — e-commerce products with varying attributes.
- **User profiles** + preferences.
- **Sensor / IoT data** with evolving shape.
- **Mobile / web app** primary store.

(source: Concepts/Data Storage/Document Database.md)

## Popular document DBs

- **MongoDB** — most popular open-source.
- **Couchbase** — focused on global distribution.
- **Amazon DynamoDB** — managed (key-value + document).
- **RavenDB** — .NET-friendly.
- **Azure Cosmos DB** — multi-model.
- **Firestore** ([[../../../gcp/databases/cloud-datastore|GCP]]) — real-time mobile/web focus.

## Document vs Relational

| | Document | [[relational-database\|Relational]] |
| --- | --- | --- |
| Schema | Flexible | Strict |
| Joins | Limited | First-class |
| Transactions | Per-document (mostly) | Multi-table ACID |
| Scaling | Horizontal | Vertical / sharded |
| Query language | Per-DB (MongoDB Q, FQL) | SQL |
| Best for | Flexible, evolving app data | Structured, relational data |

## Modern overlap

- Postgres + MySQL added **JSON columns** that compete in document use cases.
- Document DBs added **ACID transactions** (MongoDB 4.0+).
- The line is blurring.

## Interview Questions

1. **Document** vs **relational** — when prefer each?
2. How do you handle **joins** across documents?
3. **MongoDB** vs **Postgres JSONB** — fair comparison?
4. How does Firestore differ from MongoDB?

## Related pages

> [!multi-column]
>
>> [!card] Sister NoSQL
>> [[non-relational-database|Non-relational Database]], [[key-value-database|Key-Value Database]], [[wide-column-database|Wide-column Database]]
>
>
>> [!card] Products
>> [[../../../gcp/databases/cloud-datastore|Firestore / Datastore]], [[../../tools/databases-overview|Databases Overview]]

