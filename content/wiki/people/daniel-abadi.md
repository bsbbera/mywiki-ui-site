---
title: Daniel Abadi
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Daniel Abadi
  - Dan Abadi
category: People
tags:
  - person
  - profile
  - distributed_systems
  - database
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!tip]
> "No valid plans for the future can be made by those who have no capacity for living now."
> <cite>— Alan Watts</cite>

---

<span class="at-kicker">Profile · Database Systems · Researcher</span>

# Daniel Abadi

<p class="at-lead">
MIT-trained database researcher who pioneered column-oriented storage with C-Store and Vertica, then sharpened our understanding of distributed trade-offs by proposing PACELC — a crucial refinement of CAP that reveals the latency-versus-consistency choice every distributed system makes even in the absence of a network partition.
</p>

<span class="at-stat">2008</span> C-Store paper &nbsp;·&nbsp; <span class="at-mark">ABADI</span> storage model &nbsp;·&nbsp; <span class="at-mark">column-store</span> pioneer

---

<span class="at-kicker">Biography</span>

## Background

American computer scientist and **Darnell-Kanal Professor of Computer Science** at the **University of Maryland, College Park**. Received his PhD from **MIT** (2008), advised by **Samuel Madden**, where his dissertation on column-store query execution led directly to the founding of **Vertica**. Was an assistant professor at **Yale University** (2007) and associate professor (2012) before moving to Maryland.

Proposed **PACELC** (2010) — a crucial refinement of [[eric-brewer|CAP theorem]]. CAP describes trade-offs only *during* a network partition; PACELC observes that even **when there is no partition (the common case)**, distributed systems still face a fundamental trade-off between **Latency** and **Consistency**. This is the trade-off that defines systems like DynamoDB, Cassandra, and Spanner in their normal operation.

Known for multiple systems that advanced both academia and industry:
- **C-Store** (with Mike Stonebraker et al.) → commercialized as **Vertica** (acquired by Hewlett-Packard)
- **HadoopDB**: hybrid SQL-on-Hadoop analytical system → commercialized by **Hadapt** (acquired by Teradata, 2014)
- **Calvin**: deterministic distributed transaction processing system → commercialized by **Fauna**

---

<span class="at-kicker">Key Contributions</span>

## Key contributions

> [!grid|cols3]
>
>> [!card|section]
>> ### PACELC Theorem (2010)
>> Latency vs consistency trade-off exists **even without partitions** — the common operating case. PACELC extends CAP to cover normal operation: even when the network is healthy, every distributed system must choose between lower latency (relaxed consistency) or stronger consistency (higher latency).
>
>> [!card|section]
>> ### C-Store / Vertica
>> Pioneered **columnar storage** for analytical databases at MIT. C-Store (with Mike Stonebraker et al.) became Vertica — a commercial product still widely used in enterprise analytics, proving that fundamental database research translates directly to production systems.
>
>> [!card|section]
>> ### HadoopDB
>> SQL access layer over Hadoop, bridging the relational and MapReduce worlds. Commercialized by **Hadapt**, acquired by Teradata in 2014 — an early step toward what would become modern SQL-on-big-data query engines.
>
>> [!card|section]
>> ### Calvin
>> Deterministic, scalable **distributed transaction processing** system. Eliminated the non-determinism that makes distributed transactions expensive, commercialized by **Fauna** as a globally-distributed database with strict serializability.

---

<span class="at-kicker">Interesting Facts</span>

## Interesting facts

> [!grid|cols2]
>
>> [!card|section]
>> ### Back-to-Back Award Winner
>> The VLDB Best Paper Award (2007) and SIGMOD Jim Gray Doctoral Dissertation Award (2008) in consecutive years is extremely rare — Abadi is one of very few researchers to achieve this double recognition in database systems research.
>
>> [!card|section]
>> ### PACELC in Every Curriculum
>> PACELC is taught alongside CAP in every serious distributed systems course because it better captures the **real design decisions** engineers face — not a binary P vs CA choice, but a spectrum of L vs C trade-offs in everyday operation.

---

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Software Engineering
>> [[../technology/software-engineering/cap-theorem|CAP Theorem]]
>
>
>> [!card] Data Storage
>> [[../technology/data-engineering/data-storage/column-oriented-database|Column-oriented Database]]
