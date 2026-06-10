---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Document Database
Created:
  - 2026-04-29
aliases:
  - Document Database
  - Document Store
category: Computer Science
tags:
  - data-engineering
  - concept
  - Storage
  - NoSQL
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Storage</span>

# Document Database

<p class="at-lead">
A document database is a type of NoSQL database designed to store and query data as JSON-like documents. Document databases make it easy to store and query data that evolves with an application's needs — perfect for catalogs, user profiles, and content management.
</p>

<span class="at-stat">JSON</span> native format &nbsp;·&nbsp; <span class="at-stat">2000s</span> NoSQL movement &nbsp;·&nbsp; <span class="at-mark">Schema flexibility for evolving application data</span>

> [!tip] When Documents Win
> Use document databases when your data has a natural hierarchical structure, evolves frequently, or requires flexible schema. They're poor fit for complex multi-document transactions or analytical queries across many documents.

<span class="at-kicker">Data Model</span>

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

<span class="at-kicker">Trade-offs</span>

## Advantages vs Disadvantages

> [!grid|cols2]
>
> > [!card|section] Advantages
> > - **Create documents without upfront schema**.
> > - **Add new fields** without altering existing documents.
> > - **Scales horizontally** very easily — natural sharding by document ID.
> > - Maps cleanly to **application objects** (no ORM impedance mismatch).
> > - Fast reads when you fetch by document ID.
>
> > [!card|section] Disadvantages
> > - **Query performance** less efficient than relational for analytical queries.
> > - More **technical knowledge** to query — usage often limited to engineers.
> > - **Updates are slower** — data may be distributed and duplicated.
> > - **No native ACID across documents** in many systems (improving though).

<span class="at-kicker">When to Use</span>

## Use cases

- **Content management** — articles, posts, pages.
- **Catalogs** — e-commerce products with varying attributes.
- **User profiles** + preferences.
- **Sensor / IoT data** with evolving shape.
- **Mobile / web app** primary store.

<span class="at-kicker">Popular Systems</span>

## Popular document DBs

- **MongoDB** — most popular open-source.
- **Couchbase** — focused on global distribution.
- **Amazon DynamoDB** — managed (key-value + document).
- **RavenDB** — .NET-friendly.
- **Azure Cosmos DB** — multi-model.
- **Firestore** ([[../../cloud/gcp/databases/cloud-datastore|GCP]]) — real-time mobile/web focus.

<span class="at-kicker">Comparison</span>

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

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **Document** vs **relational** — when prefer each?
2. How do you handle **joins** across documents?
3. **MongoDB** vs **Postgres JSONB** — fair comparison?
4. How does Firestore differ from MongoDB?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister NoSQL
>> [[non-relational-database|Non-relational Database]], [[key-value-database|Key-Value Database]], [[wide-column-database|Wide-column Database]]
>
>
>> [!card] Products
>> [[../../cloud/gcp/databases/cloud-datastore|Firestore / Datastore]], [[../../tools/databases-overview|Databases Overview]]
