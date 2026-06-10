---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Graph Database
Created:
  - 2026-04-29
aliases:
  - Graph Database
  - GDB
category: Computer Science
tags:
  - data-engineering
  - concept
  - Storage
  - NoSQL
  - Graph
banner: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Storage</span>

# Graph Database

<p class="at-lead">
A graph database is a type of NoSQL database that uses nodes, edges, and properties to store data about entities and the relationships between them. The main purpose: efficiently traverse the network of nodes/edges and analyze relationships.
</p>

<span class="at-stat">Millions</span> of hops per second &nbsp;·&nbsp; <span class="at-stat">2000s</span> mainstream adoption &nbsp;·&nbsp; <span class="at-mark">Relationships are first-class citizens, not afterthoughts</span>

> [!tip] When Graphs Win
> The killer use case: **multi-hop traversals**. "Find friends of friends of friends who bought a product Alice bought, in the last 6 months." In SQL, this is 3 self-joins or recursive CTEs — slow and verbose. In a graph DB, it's a 3-hop graph traversal — milliseconds.

<span class="at-kicker">Data Model</span>

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

<span class="at-kicker">Use Cases</span>

## Use cases

- **Social networks** — friend graphs, recommendations.
- **Fraud detection** — anomalous transaction patterns.
- **Anti-money laundering** — entity resolution.
- **Recommendation engines** — "users who bought X also bought Y".
- **Knowledge graphs** — Wikipedia-style, semantic search.
- **Network / IT topology** — dependency graphs.
- **Machine learning** — graph neural networks.

<span class="at-kicker">Popular Systems</span>

## Popular graph DBs

- **Neo4j** — most popular; Cypher query language; embedded option.
- **ArangoDB** — multi-model (graph + document).
- **OrientDB** — multi-model.
- **Amazon Neptune** — managed; supports Gremlin + SPARQL.
- **Azure Cosmos DB Graph API** — Gremlin.
- **TigerGraph** — ultra-fast for very large graphs.
- **Dgraph** — open-source, GraphQL-native.

<span class="at-kicker">Query Languages</span>

## Query languages

- **Cypher** — Neo4j's pattern-matching language; easy to read.
- **Gremlin** — Apache TinkerPop traversal language; verbose but powerful.
- **SPARQL** — RDF / semantic web.
- **GQL** — emerging ISO standard combining the best of Cypher + others.

<span class="at-kicker">Cloud Platforms</span>

## Graphs in cloud

GCP doesn't offer a managed graph DB; users typically run **Neo4j on GKE** or use **AlloyDB** with the [Apache AGE Postgres graph extension](https://age.apache.org/).

## Modern variants

- **Property graphs** (Neo4j, JanusGraph) — labels + properties on nodes/edges.
- **RDF triple stores** (Apache Jena, Stardog) — semantic web; SPARQL.
- **Graph compute engines** — Apache Spark GraphX, NetworkX (Python).

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **Why use a graph DB** instead of relational with self-joins?
2. **Cypher** vs **Gremlin** — distinguishing features.
3. Walk through fraud detection on a graph.
4. **Property graph** vs **RDF triple store**.

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
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
