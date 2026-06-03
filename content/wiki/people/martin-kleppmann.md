---
title: Martin Kleppmann
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 5:10:00 pm
aliases:
  - Martin Kleppmann
category: People
tags:
  - person
  - distributed_systems
  - computer_science
banner:
publish: true
---

> "Anyone who dreams of an uncommon life eventually discovers there is no choice but to seek an uncommon approach to living it."
> <cite>— Gary Keller</cite>

---

> [!infobox|right]
> # Martin Kleppmann
> ###### Computer Scientist & Author
> | | |
> | --- | --- |
> | **Nationality** | German |
> | **Domain** | Distributed systems, local-first software, security protocols, CRDTs |
> | **Known for** | *Designing Data-Intensive Applications* (DDIA); CRDT research; local-first software movement |
> | **Notable works** | [[../books/designing-data-intensive-applications\|DDIA]] (O'Reilly, 2017) |
> | **Institution** | University of Cambridge (Associate Professor, since 2024) |
> | **Education** | PhD, Computer Science, University of Cambridge |

German computer scientist and **Associate Professor** at the **University of Cambridge** (Department of Computer Science and Technology, since 2024). Before academia, worked as a software engineer and entrepreneur at internet companies: co-founded and sold **two startups**, including **Rapportive** (email contact enrichment, acquired by LinkedIn), and worked on large-scale data infrastructure at **LinkedIn** — experiences that became the practical foundation for *Designing Data-Intensive Applications*.

Published **Designing Data-Intensive Applications** (O'Reilly, 2017) — widely considered the single most comprehensive modern reference for building reliable, scalable, and maintainable data systems. Covers the full spectrum of data infrastructure: replication, partitioning, transactions, consistency models, distributed consensus (Paxos, Raft, ZooKeeper), batch processing (MapReduce, Spark), and stream processing (Kafka, Flink). Commonly abbreviated **DDIA**; has become required reading for senior engineers and data engineers worldwide.

Active researcher on **CRDTs** (Conflict-free Replicated Data Types) — mathematical data structures that allow distributed replicas to be edited concurrently and merged automatically without central coordination or conflict resolution logic. Heads research on **local-first software**: applications that work fully offline, sync over the network when available, and give users true data ownership — in contrast to cloud-first apps where the server holds the authoritative state.

## Key contributions

- **DDIA** (2017): definitive reference on data systems — replication, consensus, transactions, stream/batch processing
- **CRDT research**: formal proofs and algorithms enabling offline-first collaborative software
- **Local-first software** movement: manifesto and tooling for user-controlled, offline-capable apps
- **Rapportive** (startup, acquired by LinkedIn): email intelligence product

## Interesting facts

- DDIA is often recommended as *the* book to read before any senior data/backend engineering interview
- CRDTs are the underlying mechanism enabling **conflict-free real-time collaboration** in tools like Figma, Notion, and multiplayer code editors — without requiring a central server to arbitrate conflicts
- Kleppmann's approach of building startups and working in industry *before* returning to academia gives DDIA an unusually practical grounding compared to purely theoretical distributed systems texts

## Related pages

> [!grid]
>
>> [!card] Books
>> [[../books/designing-data-intensive-applications|Designing Data-Intensive Applications]]
>
>
>> [!card] Software Engineering
>> [[../technology/software-engineering/cap-theorem|CAP Theorem]], [[../technology/software-engineering/event-sourcing-pattern|Event Sourcing]]
>
>
>> [!card] Data Ingestion
>> [[../technology/data-engineering/data-ingestion/change-data-capture|CDC]]

