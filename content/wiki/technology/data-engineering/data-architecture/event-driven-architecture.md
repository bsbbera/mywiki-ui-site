---
title: Event-Driven Architecture
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Event-Driven Architecture
  - EDA
  - Event-Driven Design
category: Data Engineering
tags:
  - DataEngineering
  - Architecture
  - Events
  - Microservices
  - Messaging
banner:
publish: true
---

> [!quote]
> *Event-driven architecture is a software architecture pattern that promotes the production, detection, and reaction to events.*
> — Martin Fowler

# Event-Driven Architecture

<p class="at-lead">
Event-Driven Architecture (EDA) is a design pattern in which services communicate by producing and consuming events rather than direct API calls. It enables loose coupling, scalability, and real-time responsiveness across distributed systems and data pipelines.
</p>

## Overview

In EDA, an **event** represents a significant state change (e.g., order placed, sensor reading, user signup). **Producers** emit events to a message bus or event broker; **consumers** subscribe to relevant event streams and react independently. This decouples producers from consumers, allowing systems to evolve independently.

Common patterns include **pub/sub** (fan-out to many consumers), **event sourcing** (persisting events as the system of record), and **CQRS** (separating read and write models). Popular event brokers include Apache Kafka, Google Pub/Sub, AWS EventBridge, and RabbitMQ.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[publisher-subscriber-pattern|Pub/Sub Pattern]], [[event-sourcing-pattern|Event Sourcing]], [[microservices|Microservices]]
>
>> [!card] Parent topic
>> [[data-architecture|Data Architecture]]
>
>> [!card] See also
>> [[kafka|Kafka]], [[pubsub|Pub/Sub]], [[data-pipeline|Data Pipeline]], [[stream-data-processing|Stream Processing]]