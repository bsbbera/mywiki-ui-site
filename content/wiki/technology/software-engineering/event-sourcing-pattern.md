---
title: Event Sourcing Pattern
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Event Sourcing
category: Computer Science
tags:
  - DataEngineering
  - Patterns
  - Architecture
banner:
dg-publish: true
publish: true
---

---

The **Event Sourcing pattern** captures **all changes** to an application as a **sequence of event objects**. This creates a **ledger of changes** that can be **replayed** to reconstruct application state at any point in time (source: Concepts/Software Engineering/Event Sourcing Pattern.md).

## Concept

Instead of storing "current state":

```
users:
  alice: { balance: 100 }
```

Store the **events** that produced it:

```
events:
  1: AccountCreated(user=alice)
  2: Deposit(user=alice, amount=200)
  3: Withdraw(user=alice, amount=100)
```

Current state = **fold over events**. Past state = **fold over events up to time T**.

## Advantages

- **Audit trail** — every change is recorded; **regulatory compliance** built in.
- **Time travel** — rebuild any entity's state at any past time.
- **Replay-friendly** — rebuild downstream views, projections, or fix bugs by replaying.
- **Aligns with event-driven architectures** — services communicate via events.
- **Source of truth** — no "lost" state changes.

## Disadvantages

- **Event store complexity** — versioning, schema evolution, snapshotting.
- **Eventually consistent** — projections lag the event stream.
- **Replay cost** — rebuilding state from millions of events is expensive without **snapshots**.
- **Querying current state** is harder — needs projections / read models.
- **Steep learning curve** for teams used to CRUD.

(source: Concepts/Software Engineering/Event Sourcing Pattern.md)

## CQRS — the natural companion

**Command Query Responsibility Segregation (CQRS)** pairs with event sourcing:

- **Commands** (writes) → produce events → append to event store.
- **Queries** (reads) → use projections (denormalized read models) built from events.

This separates the optimal write model (events) from the optimal read model (queries).

## Snapshotting

To avoid replaying millions of events for every query:

- Periodically save a **snapshot** of the current state.
- On rebuild, load the snapshot + replay only events since then.

## Where to store events

- **Kafka** — log-as-database, infinite retention.
- **EventStoreDB** — purpose-built event store.
- **Postgres** with event tables — simplest, works at moderate scale.
- **DynamoDB Streams** + **DynamoDB** — AWS-native pattern.
- **GCP**: [[../../../gcp/analytics/pubsub|Pub/Sub]] + [[../../../gcp/databases/cloud-spanner|Spanner]] / Bigtable.

## When to use

- **Audit-heavy domains** — finance, healthcare, legal, insurance.
- **Event-driven microservices** — natural fit.
- **Domain-driven design** — events match business language.
- **Need replay** — fix bugs, rebuild views, ML training.

## When NOT to use

- **Simple CRUD apps** — overkill.
- **Low-throughput, small-state systems**.
- **Teams unfamiliar** with event-driven thinking.

## Pitfalls

- **Schema evolution** — old events with old schema must replay forever; plan for upcasting.
- **Event size** — keep events small; use [[claim-check-pattern|claim-check]] for large payloads.
- **GDPR right-to-erase** — immutable event log conflicts with deletion; common workaround is **crypto-shredding** (encrypt PII; throw away the key).

## Sources

- [Martin Fowler — Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html)
- [Greg Young's CQRS / Event Sourcing book](https://leanpub.com/esversioning)

## Interview Questions

1. Event sourcing vs traditional state-mutation — pros/cons.
2. **CQRS** — why does it pair with event sourcing?
3. **Schema evolution** of events — strategies.
4. Implementing **GDPR right-to-erase** with event sourcing.
5. How does event sourcing differ from log-based [[../data-ingestion/change-data-capture|CDC]]?

## Related pages

> [!multi-column]
>
>> [!card] Sister patterns
>> [[publisher-subscriber-pattern|Pub/Sub Pattern]], [[claim-check-pattern|Claim Check]], [[fan-out|Fan-out]]
>
>
>> [!card] Architecture
>> [[../data-ingestion/change-data-capture|CDC]], [[../data-architecture/kappa-architecture|Kappa Architecture]]
>
>
>> [!card] People
>> [[../../../people/greg-young|Greg Young]], [[../../../people/martin-fowler|Martin Fowler]], [[../../../people/jay-kreps|Jay Kreps]], [[../../../people/martin-kleppmann|Martin Kleppmann]]
>
>
>> [!card] Books
>> [[../../../books/designing-data-intensive-applications|DDIA]]

