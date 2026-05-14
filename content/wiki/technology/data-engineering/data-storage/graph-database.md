---
title: Graph Database
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Graph Database
  - GDB
category: Computer Science
tags:
  - DataEngineering
  - Storage
  - NoSQL
  - Graph
banner:
publish: true
---

---

A **graph database** is a type of [[non-relational-database|NoSQL]] database that uses **nodes, edges, and properties** to store data about **entities and the relationships between them**. The main purpose: efficiently **traverse** the network of nodes/edges and **analyze relationships** (source: Concepts/Data Storage/Graph Database.md).

## Data model

```
(Alice) -[FOLLOWS]-> (Bob) -[BOUGHT]-> (Product:Phone)
   |                                      |
   v                                      v
[POSTED]                              [REVIEWED]
   |                                      |
   v                                      v
(Photo)                               (Review:5stars)
```

- **Nodes** = entities (users, products, transactions).
- **Edges** = relationships, often with direction + properties.
- **Properties** = attributes on nodes/edges.

## When graphs win

The killer use case: **multi-hop traversals**.

> "Find friends of friends of friends who bought a product Alice bought, in the last 6 months."

In SQL, this is **3 self-joins** or recursive CTEs — slow and verbose.
In a graph DB, it's a **3-hop graph traversal** — milliseconds.

## Use cases

- **Social networks** — friend graphs, recommendations.
- **Fraud detection** — anomalous transaction patterns.
- **Anti-money laundering** — entity resolution.
- **Recommendation engines** — "users who bought X also bought Y".
- **Knowledge graphs** — Wikipedia-style, semantic search.
- **Network / IT topology** — dependency graphs.
- **Machine learning** — graph neural networks.

(source: Concepts/Data Storage/Graph Database.md)

## Popular graph DBs

- **Neo4j** — most popular; Cypher query language; embedded option.
- **ArangoDB** — multi-model (graph + document).
- **OrientDB** — multi-model.
- **Amazon Neptune** — managed; supports Gremlin + SPARQL.
- **Azure Cosmos DB Graph API** — Gremlin.
- **TigerGraph** — ultra-fast for very large graphs.
- **Dgraph** — open-source, GraphQL-native.

## Query languages

- **Cypher** — Neo4j's pattern-matching language; easy to read.
- **Gremlin** — Apache TinkerPop traversal language; verbose but powerful.
- **SPARQL** — RDF / semantic web.
- **GQL** — emerging ISO standard combining the best of Cypher + others.

## Graphs in cloud

GCP doesn't offer a managed graph DB; users typically run **Neo4j on GKE** or use **AlloyDB** with the [Apache AGE Postgres graph extension](https://age.apache.org/).

## Modern variants

- **Property graphs** (Neo4j, JanusGraph) — labels + properties on nodes/edges.
- **RDF triple stores** (Apache Jena, Stardog) — semantic web; SPARQL.
- **Graph compute engines** — Apache Spark GraphX, NetworkX (Python).

## Interview Questions

1. **Why use a graph DB** instead of relational with self-joins?
2. **Cypher** vs **Gremlin** — distinguishing features.
3. Walk through fraud detection on a graph.
4. **Property graph** vs **RDF triple store**.

## Related pages

> [!multi-column]
>
>> [!card] Sister NoSQL
>> [[non-relational-database|Non-relational Database]], [[document-database|Document Database]]
>
>
>> [!card] Modeling
>> [[../data-modeling/cardinality|Cardinality]], [[../data-modeling/data-modeling|Data Modeling]]
>
>
>> [!card] Tools
>> [[../../tools/databases-overview|Databases Overview]]

