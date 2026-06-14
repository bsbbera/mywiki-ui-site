---
title: Database Recovery
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Database Recovery
  - Crash Recovery
  - Write-Ahead Logging
  - WAL
category: Computer Science
tags:
  - Databases
  - SoftwareEngineering
  - Reliability
  - Recovery
banner:
publish: true
---

> [!quote]
> *A database is only as good as its ability to survive crashes without losing committed data.*
> — Database Architect

# Database Recovery

<p class="at-lead">
Database Recovery is the set of techniques that restore a database to a consistent state after a system crash, media failure, or transaction abort. It ensures durability — the guarantee that committed transactions survive any failure.
</p>

## Overview

Recovery relies on **write-ahead logging (WAL)** — changes are written to a durable log before being applied to data pages. After a crash, the system uses the log to **redo** committed transactions and **undo** uncommitted ones. Checkpoints periodically flush dirty pages to disk to limit the recovery window.

Advanced techniques include **ARIES** (Algorithm for Recovery and Isolation Exploiting Semantics), **shadow paging**, and **replication-based recovery** (standby replicas, log shipping). Cloud databases often layer recovery with automated backups, point-in-time restore, and multi-region replication for high availability.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[acid-properties|ACID Properties]], [[concurrency-control|Concurrency Control]], [[write-ahead-logging|Write-Ahead Logging]]
>
>> [!card] Parent topic
>> [[software-engineering|Software Engineering]]
>
>> [!card] See also
>> [[distributed-transactions|Distributed Transactions]], [[database-sharding|Database Sharding]], [[high-availability|High Availability]]