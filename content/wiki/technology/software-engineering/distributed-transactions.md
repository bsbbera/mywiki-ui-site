---
title: Distributed Transactions
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Distributed Transactions
  - Two-Phase Commit
  - 2PC
  - Saga Pattern
category: Computer Science
tags:
  - Databases
  - DistributedSystems
  - Transactions
  - SoftwareEngineering
banner:
publish: true
---

> [!quote]
> *Distributed transactions are the hardest problem in distributed systems — there is no free lunch between consistency and availability.*
> — Distributed Systems Engineer

# Distributed Transactions

<p class="at-lead">
Distributed Transactions are operations that must execute atomically across multiple networked databases, services, or resources. They extend the ACID properties to distributed environments, requiring coordination protocols to ensure all participants agree on commit or abort.
</p>

## Overview

The classic protocol is **Two-Phase Commit (2PC)**: a coordinator asks all participants to prepare, then issues a global commit or abort. 2PC guarantees atomicity but is blocking — if the coordinator fails, participants may hold locks indefinitely. **Three-Phase Commit (3PC)** reduces blocking at the cost of complexity and network assumptions.

Modern alternatives favour **Saga pattern** (compensating transactions), **event-driven choreography**, and **TCC** (Try-Confirm-Cancel). These trade strict ACID for availability and partition tolerance per the CAP theorem. Distributed transaction design is central to microservices architecture, payment systems, and supply-chain platforms.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[cap-theorem|CAP Theorem]], [[concurrency-control|Concurrency Control]], [[microservices|Microservices]]
>
>> [!card] Parent topic
>> [[software-engineering|Software Engineering]]
>
>> [!card] See also
>> [[database-recovery|Database Recovery]], [[event-sourcing-pattern|Event Sourcing]], [[acid-properties|ACID Properties]]