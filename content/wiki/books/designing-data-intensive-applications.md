---
title: Designing Data-Intensive Applications
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - DDIA
  - Designing Data-Intensive Applications
category: Books
tags:
  - book
  - data_engineering
  - distributed_systems
banner: "https://learning.oreilly.com/library/cover/9781491903063/250w/"
cssclass: wide-page
publish: true
---

> "Be as simple as you can be; you will be astonished to see how uncomplicated and happy your life can become."
> <cite>— Paramahansa Yogananda</cite>

---

> [!infobox|right]
> # Designing Data-Intensive Applications
> ![cover](https://learning.oreilly.com/library/cover/9781491903063/250w/)
> ###### Book
> | | |
> | --- | --- |
> | **Author** | [[../people/martin-kleppmann\|Martin Kleppmann]] |
> | **Publisher** | O'Reilly Media |
> | **Published** | 2017 (1st ed.) |
> | **Domain** | Distributed systems, data engineering |
> | **Pages** | 614 |
> | **ISBN** | 978-1449373320 |

<span class="at-kicker">Distributed Systems · Martin Kleppmann</span>

# Designing Data-Intensive Applications

<p class="at-lead">
The definitive modern reference for architects and engineers who build systems where data is the central challenge — not compute. Kleppmann cuts through hype to deliver timeless first-principles on reliability, scalability, and maintainability.
</p>

<span class="at-stat">2017</span> published &nbsp;·&nbsp; <span class="at-stat">616</span> pages &nbsp;·&nbsp; <span class="at-mark">the definitive guide to building reliable, scalable, maintainable data systems</span>

---

<span class="at-kicker">Core Concepts</span>

## Key Concepts

> [!grid|cols3]
>
>> [!card|section] Reliability
>> A system is reliable if it continues to work correctly even when things go wrong (hardware faults, software bugs, human error). DDIA distinguishes faults from failures and argues for fault-tolerant designs over fault-prevention.
>
>> [!card|section] Scalability
>> Scalability means having strategies to cope with growth — in data volume, traffic, or complexity. Kleppmann introduces *load parameters* and *performance metrics* (throughput, latency percentiles) as the language of scalability reasoning.
>
>> [!card|section] Maintainability
>> The majority of software cost is ongoing maintenance. Good systems are operable (easy for ops teams), simple (manage complexity so new engineers can understand them), and evolvable (easy to make changes as requirements shift).
>
>> [!card|section] Replication
>> Keeping a copy of the same data on multiple machines for fault tolerance and lower latency. Covers single-leader, multi-leader, and leaderless replication; replication lag; read-your-writes; monotonic reads; consistent prefix reads.
>
>> [!card|section] Partitioning (Sharding)
>> Splitting a large dataset into partitions (shards) so each is stored on a separate node. Covers key-range vs. hash partitioning, secondary index partitioning, rebalancing strategies, and routing requests to the right node.
>
>> [!card|section] Transactions
>> A way to group several reads and writes into a logical unit — all succeed or all fail. Covers ACID semantics, isolation levels (read committed, snapshot isolation, serialisability), and the real meaning of each guarantee.
>
>> [!card|section] Consistency & Consensus
>> Distributed systems can't always agree instantly. Covers linearisability, causality, ordering guarantees, distributed transactions (2PC), fault-tolerant consensus (Raft, Paxos), and coordination services like ZooKeeper.
>
>> [!card|section] Batch Processing
>> Processing large, bounded datasets offline — the MapReduce model, dataflow engines (Spark, Flink in batch mode), join strategies, and how Unix tools prefigure the big-data stack.
>
>> [!card|section] Stream Processing
>> Processing unbounded, continuously arriving event streams. Covers messaging systems (Kafka, AMQP), stream-stream and stream-table joins, windowing, event time vs. processing time, and exactly-once semantics.

---

<span class="at-kicker">Why It Matters</span>

## Takeaways

> [!grid|cols2]
>
>> [!card|section] Data systems are not magic
>> Every database, queue, cache, or stream processor is a trade-off. DDIA gives you the vocabulary and mental models to evaluate those trade-offs rather than accepting vendor marketing at face value.
>
>> [!card|section] Distributed systems fail in subtle ways
>> Network partitions, clock skew, and partial failures produce bugs that don't show up in unit tests. Understanding failure modes is the first step toward writing software that handles them gracefully.
>
>> [!card|section] The right abstraction beats raw performance
>> Transactions, immutable logs, and stream processing are *abstractions* — they cost something but save enormous complexity. The book's thesis is that choosing the right abstraction is the engineer's highest-leverage decision.
>
>> [!card|section] DDIA is a map, not a recipe
>> It deliberately avoids prescribing a stack. Instead it teaches you to read the docs of any system and immediately understand what guarantees it provides — and where the bodies are buried.

---

> [!tip] Who should read this
> **Every data engineer, backend engineer, and architect** working with distributed systems, databases, or data pipelines. Especially valuable before choosing a database engine, designing a replication strategy, or reasoning about consistency in a microservices architecture. Best read alongside the official docs of whatever database or stream processor you're currently using.

---

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] People
>> [[../people/martin-kleppmann|Martin Kleppmann]]
>
>
>> [!card] Software Engineering
>> [[../technology/software-engineering/cap-theorem|CAP Theorem]], [[../technology/software-engineering/database-sharding|Sharding]], [[../technology/software-engineering/event-sourcing-pattern|Event Sourcing]]
>
>
>> [!card] Data Ingestion
>> [[../technology/data-engineering/data-ingestion/change-data-capture|CDC]]
>
>
>> [!card] Data Storage
>> [[../technology/data-engineering/data-storage/database|Database]]
