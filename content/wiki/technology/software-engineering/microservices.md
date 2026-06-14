---
title: Microservices
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Microservices
  - Microservices Architecture
  - Service-Oriented Architecture
  - Distributed Services
category: Software Engineering
tags:
  - SoftwareEngineering
  - DistributedSystems
  - Architecture
  - DevOps
  - Scalability
banner:
publish: true
---

> [!quote]
> *Microservices trade the simplicity of a monolith for the flexibility of independent deployability.*
> — Martin Fowler

# Microservices

<p class="at-lead">
Microservices is an architectural style that structures an application as a collection of loosely coupled, independently deployable services. Each service owns a bounded context, communicates via APIs, and can be developed, deployed, and scaled by separate teams — enabling organisational agility and technical diversity.
</p>

## Overview

Microservices emerged from the need to scale both software systems and engineering teams. They enable polyglot persistence, independent scaling of hot paths, and fault isolation — but introduce complexity in distributed transaction management, service discovery, observability, and deployment orchestration. Successful adoption requires investment in CI/CD, monitoring, API design, and team autonomy.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[kubernetes]], [[docker]], [[rest-api]]
>
>> [!card] Parent topic
>> [[devops-sre]]
>
>> [!card] See also
>> [[cloud-run]], [[event-sourcing-pattern]], [[horizontal-scaling]]
