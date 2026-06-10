---
title: Greg Young
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Greg Young
category: People
tags:
  - person
  - profile
  - software_engineering
  - patterns
banner: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!tip]
> "The most important battle is one to conquer yourself."
> <cite>— Yanni</cite>

---

<span class="at-kicker">Profile · Software Architecture · Practitioner</span>

# Greg Young

<p class="at-lead">
Independent software architect who coined CQRS and formalized modern Event Sourcing — patterns born from the rigorous demands of algorithmic trading systems — and then built EventStoreDB as a purpose-built database to put those patterns directly into production, influencing a generation of enterprise architects building microservices and audit-heavy systems.
</p>

<span class="at-mark">CQRS</span> + <span class="at-mark">Event Sourcing</span> &nbsp;·&nbsp; <span class="at-mark">EventStore</span> creator &nbsp;·&nbsp; <span class="at-mark">DDD</span> influencer

---

<span class="at-kicker">Biography</span>

## Background

Software architect and independent consultant with a background spanning **embedded operating systems**, **algorithmic trading**, and enterprise business systems. Coined the term **CQRS** (Command Query Responsibility Segregation) — the architectural pattern that separates the **write model** (commands that mutate state) from the **read model** (queries that return data) — and became its foremost advocate in the **Domain-Driven Design (DDD)** community.

His background in **algorithmic trading** was formative: financial systems require **deterministic**, **auditable**, and **provably correct** records of every state change. This insight drove his formalization of **Event Sourcing** — the practice of storing every state change as an immutable event, making the event log the source of truth rather than mutable rows in a database. Any state can be reconstructed by replaying events.

Created **EventStoreDB** — a purpose-built event sourcing database optimized for storing and retrieving ordered event streams. Worked closely with [[martin-fowler|Martin Fowler]] and the DDD community ([[martin-fowler|Martin Fowler]] contributed early essays on Event Sourcing to martinfowler.com). His workshops at Skills Matter and DDD Europe influenced a generation of enterprise architects building microservices and audit-heavy systems.

---

<span class="at-kicker">Key Contributions</span>

## Key contributions

> [!grid|cols3]
>
>> [!card|section]
>> ### CQRS (Command Query Responsibility Segregation)
>> Coined the pattern of **separating read and write models** for scalability and clarity. Read and write workloads have fundamentally different performance characteristics — optimizing both in a single model creates unnecessary trade-offs. CQRS is now a key architectural building block in every modern event-driven microservices system.
>
>> [!card|section]
>> ### Modern Event Sourcing
>> Formalized **Event Sourcing** as an architectural first-class citizen — storing every state change as an immutable event, making the event log the source of truth. Now the backbone of systems at major financial institutions, insurance companies, and any domain requiring a full audit trail.
>
>> [!card|section]
>> ### EventStoreDB
>> Purpose-built **event-sourcing database** with projection and subscription support — providing the production-ready storage layer that Event Sourcing architectures need without compromising on performance or correctness.
>
>> [!card|section]
>> ### DDD Community Leadership
>> Foundational contributions through **workshops, talks, and writing** — including collaboration with Martin Fowler and appearances at Skills Matter, DDD Europe, and QCon — that shaped how an entire generation of architects thinks about domain modeling and event-driven design.

---

<span class="at-kicker">Interesting Facts</span>

## Interesting facts

> [!grid|cols2]
>
>> [!card|section]
>> ### Algorithmic Trading as the Forge
>> CQRS emerged from observing that **read and write workloads have fundamentally different performance characteristics** in trading systems — optimizing both in a single model creates unnecessary trade-offs. The correctness demands of finance proved to be the ideal laboratory for these patterns.
>
>> [!card|section]
>> ### Event Sourcing's Auditable Future
>> Event Sourcing is now the backbone of systems at major financial institutions, insurance companies, and any domain requiring a **full audit trail** — exactly the environments that shaped Greg Young's thinking. The pattern effectively gives every system a perfect, replayable history.

---

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Software Engineering
>> [[../technology/software-engineering/event-sourcing-pattern|Event Sourcing]], [[../technology/software-engineering/publisher-subscriber-pattern|Pub/Sub Pattern]]
>
>
>> [!card] People
>> [[martin-fowler|Martin Fowler]]
