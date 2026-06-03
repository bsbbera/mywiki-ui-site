---
title: Daniel Abadi
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 5:10:00 pm
aliases:
  - Daniel Abadi
  - Dan Abadi
category: People
tags:
  - person
  - distributed_systems
  - database
banner:
publish: true
---

> "No valid plans for the future can be made by those who have no capacity for living now."
> <cite>— Alan Watts</cite>

---

> [!infobox|right]
> # Daniel Abadi
> ###### Database & Distributed Systems Researcher
> | | |
> | --- | --- |
> | **Nationality** | American |
> | **Domain** | Database systems, distributed systems |
> | **Known for** | PACELC theorem; C-Store/Vertica; HadoopDB; Calvin |
> | **Awards** | Sloan Fellowship; VLDB Best Paper (2007); SIGMOD Jim Gray Award (2008); VLDB Early Career Award (2013) |
> | **Institution** | University of Maryland (Darnell-Kanal Professor) |
> | **Education** | PhD, EECS, MIT (2008) — advised by Samuel Madden |

American computer scientist and **Darnell-Kanal Professor of Computer Science** at the **University of Maryland, College Park**. Received his PhD from **MIT** (2008), advised by **Samuel Madden**, where his dissertation on column-store query execution led directly to the founding of **Vertica**. Was an assistant professor at **Yale University** (2007) and associate professor (2012) before moving to Maryland.

Proposed **PACELC** (2010) — a crucial refinement of [[eric-brewer|CAP theorem]]. CAP describes trade-offs only *during* a network partition; PACELC observes that even **when there is no partition (the common case)**, distributed systems still face a fundamental trade-off between **Latency** and **Consistency**. This is the trade-off that defines systems like DynamoDB, Cassandra, and Spanner in their normal operation.

Known for multiple systems that advanced both academia and industry:
- **C-Store** (with Mike Stonebraker et al.) → commercialized as **Vertica** (acquired by Hewlett-Packard)
- **HadoopDB**: hybrid SQL-on-Hadoop analytical system → commercialized by **Hadapt** (acquired by Teradata, 2014)
- **Calvin**: deterministic distributed transaction processing system → commercialized by **Fauna**

## Key contributions

- **PACELC theorem** (2010): latency vs consistency trade-off exists even without partitions
- **C-Store / Vertica**: pioneered columnar storage for analytical databases
- **HadoopDB**: SQL access layer over Hadoop, bridging relational and MapReduce worlds
- **Calvin**: deterministic, scalable distributed transaction processing

## Interesting facts

- The VLDB Best Paper Award (2007) and SIGMOD Jim Gray Doctoral Dissertation Award (2008) in consecutive years is extremely rare — Abadi is one of very few researchers to achieve this
- Vertica, which came from his MIT thesis, is now a commercial product still used widely in enterprise analytics — proving that fundamental database research translates directly to production systems
- PACELC is taught alongside CAP in every serious distributed systems course because it better captures the real design decisions engineers face

## Related pages

> [!grid]
>
>> [!card] Software Engineering
>> [[../technology/software-engineering/cap-theorem|CAP Theorem]]
>
>
>> [!card] Data Storage
>> [[../technology/data-engineering/data-storage/column-oriented-database|Column-oriented Database]]

