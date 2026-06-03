---
title: Greg Young
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 5:10:00 pm
aliases:
  - Greg Young
category: People
tags:
  - person
  - software_engineering
  - patterns
banner:
publish: true
---

> "The most important battle is one to conquer yourself."
> <cite>— Yanni</cite>

---

> [!infobox|right]
> # Greg Young
> ###### Software Architect & Consultant
> | | |
> | --- | --- |
> | **Domain** | Software architecture, DDD, CQRS, event-driven systems |
> | **Known for** | Coined CQRS; popularized modern Event Sourcing; EventStoreDB |
> | **Notable works** | EventStoreDB; CQRS documents; DDD workshops |
> | **Institution** | Independent consultant; serial entrepreneur |

Software architect and independent consultant with a background spanning **embedded operating systems**, **algorithmic trading**, and enterprise business systems. Coined the term **CQRS** (Command Query Responsibility Segregation) — the architectural pattern that separates the **write model** (commands that mutate state) from the **read model** (queries that return data) — and became its foremost advocate in the **Domain-Driven Design (DDD)** community.

His background in **algorithmic trading** was formative: financial systems require **deterministic**, **auditable**, and **provably correct** records of every state change. This insight drove his formalization of **Event Sourcing** — the practice of storing every state change as an immutable event, making the event log the source of truth rather than mutable rows in a database. Any state can be reconstructed by replaying events.

Created **EventStoreDB** — a purpose-built event sourcing database optimized for storing and retrieving ordered event streams. Worked closely with [[martin-fowler|Martin Fowler]] and the DDD community ([[martin-fowler|Martin Fowler]] contributed early essays on Event Sourcing to martinfowler.com). His workshops at Skills Matter and DDD Europe influenced a generation of enterprise architects building microservices and audit-heavy systems.

## Key contributions

- **Coined CQRS** (Command Query Responsibility Segregation): separating read and write models for scalability and clarity
- **Modern Event Sourcing**: formalized the pattern as an architectural first-class citizen
- **EventStoreDB**: purpose-built event-sourcing database with projection and subscription support
- Foundational contributions to the **DDD community** through workshops, talks, and writing

## Interesting facts

- CQRS emerged from the observation that read and write workloads have fundamentally different performance characteristics — optimizing both in a single model creates unnecessary trade-offs
- Event Sourcing is now the backbone of systems at major financial institutions, insurance companies, and any domain requiring a full audit trail — exactly the environments that shaped Greg Young's thinking
- The CQRS pattern is a key architectural building block in every modern event-driven microservices system

## Related pages

> [!grid]
>
>> [!card] Software Engineering
>> [[../technology/software-engineering/event-sourcing-pattern|Event Sourcing]], [[../technology/software-engineering/publisher-subscriber-pattern|Pub/Sub Pattern]]
>
>
>> [!card] People
>> [[martin-fowler|Martin Fowler]]

