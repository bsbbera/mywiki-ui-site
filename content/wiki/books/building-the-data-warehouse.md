---
title: Building the Data Warehouse
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Building the Data Warehouse
  - Inmon's Book
category: Books
tags:
  - book
  - data_engineering
  - data_warehousing
banner: "https://m.media-amazon.com/images/I/71IKHmaiOpL._SL1500_.jpg"
cssclass: wide-page
publish: true
---

> "It is indeed a radical act of love just to sit down and be quiet for a time by yourself."
> <cite>— Jon Kabat-Zinn</cite>

---

> [!infobox|right]
> # Building the Data Warehouse
> ![cover](https://m.media-amazon.com/images/I/71IKHmaiOpL._SL1500_.jpg)
> ###### Book
> | | |
> | --- | --- |
> | **Author** | [[../people/bill-inmon\|Bill Inmon]] |
> | **Publisher** | Wiley |
> | **Published** | 1991 (1st ed.); 4th ed. 2005 |
> | **Domain** | Data warehousing |
> | **Pages** | ~576 (4th ed.) |
> | **ISBN** | 978-0764599446 |

<span class="at-kicker">Data Warehousing · Bill Inmon</span>

# Building the Data Warehouse

<p class="at-lead">
The book that invented the term "data warehouse" and defined the enterprise-wide, top-down architecture that became the industry's first blueprint. Inmon's four-part definition — subject-oriented, integrated, time-variant, non-volatile — remains the standard academic definition of a data warehouse to this day.
</p>

<span class="at-stat">1992</span> first edition &nbsp;·&nbsp; <span class="at-stat">4th edition</span> 2005 &nbsp;·&nbsp; <span class="at-mark">the book that started the data warehousing industry</span>

---

<span class="at-kicker">Core Concepts</span>

## Key Concepts

> [!grid|cols3]
>
>> [!card|section] Subject-Oriented
>> A data warehouse is organised around major business subjects — customers, products, sales, suppliers — rather than around the applications that produce data. This subject focus makes the warehouse a consistent analytical view of the enterprise.
>
>> [!card|section] Integrated
>> Data entering the warehouse is converted to a consistent format regardless of source system origins — resolving encoding conflicts, naming conventions, measurement units, and attribute definitions. Integration is what makes cross-system analysis possible.
>
>> [!card|section] Time-Variant
>> Every record in the warehouse carries a time element. The warehouse stores historical snapshots, not just current state, enabling trend analysis, period-over-period comparison, and audit trails that operational systems don't maintain.
>
>> [!card|section] Non-Volatile
>> Data in the warehouse is loaded and read — not updated or deleted in the operational sense. This stability enables reproducible reports and consistent historical analysis, separating it fundamentally from OLTP systems.
>
>> [!card|section] Enterprise Data Warehouse (EDW)
>> Inmon's top-down approach: build a single, normalised (3NF) corporate information factory first, then derive departmental data marts from it. This ensures consistency and a single version of truth across the enterprise before distribution.
>
>> [!card|section] Corporate Information Factory (CIF)
>> The full architectural blueprint — operational systems feed into the EDW (3NF), which then populates data marts (dimensional) for departmental use, plus ODS for operational queries. The CIF connects every layer of the data estate.
>
>> [!card|section] Operational Data Store (ODS)
>> A lightly integrated, current-valued data store sitting between operational systems and the EDW. Supports operational reporting that needs near-real-time data but more integration than raw source systems provide.
>
>> [!card|section] Granularity
>> The level of detail stored in the warehouse. Inmon argues for storing detailed, atomic-grain data in the EDW and summarising in data marts — detail is cheap and enables future queries that weren't anticipated at design time.
>
>> [!card|section] Data Mart Derivation
>> Dependent data marts are populated from the EDW, never directly from source systems. This top-down derivation order guarantees that all marts share the same enterprise-wide definitions, preventing the balkanised "spreadmart" problem.

---

<span class="at-kicker">Why It Matters</span>

## Takeaways

> [!grid|cols2]
>
>> [!card|section] The founding document of data warehousing
>> Inmon coined the term and wrote the original playbook. Every subsequent methodology — Kimball's dimensional modeling, Data Vault, modern lakehouses — positions itself relative to Inmon's EDW. Reading this book is reading the origin story.
>
>> [!card|section] Top-down vs. bottom-up is a real trade-off
>> The Inmon vs. Kimball debate has shaped enterprise data architecture for 30 years. Inmon's top-down approach delivers enterprise consistency but requires significant upfront investment; understanding both sides enables informed architectural choices.
>
>> [!card|section] 3NF in the EDW is a deliberate choice
>> Inmon normalises the EDW layer specifically to reduce redundancy and maintain a single version of truth. Dimensional structures appear only in derived marts. This two-layer discipline is often misunderstood and worth internalising.
>
>> [!card|section] The principles outlast the technology
>> Written before the cloud, before columnar storage, before Spark — yet the four defining properties and the CIF architecture remain directly applicable to modern data platform design. Timeless principles beat time-bound tooling.

---

> [!tip] Best read alongside
> Read in direct conversation with **[[the-data-warehouse-toolkit|The Data Warehouse Toolkit]]** by Ralph Kimball to understand the foundational Inmon vs. Kimball architectural debate. Then read **[[building-a-scalable-data-warehouse-with-data-vault-2|Data Vault 2.0]]** to see how Dan Linstedt synthesised both approaches into a third way designed for agility and auditability.

---

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] People
>> [[../people/bill-inmon|Bill Inmon]]
>
>
>> [!card] Data Architecture
>> [[../technology/data-engineering/data-architecture/data-warehouse|Data Warehouse]], [[../technology/data-engineering/data-architecture/data-mart|Data Mart]]
>
>
>> [!card] Data Engineering
>> [[../technology/data-engineering/data-warehousing|Data Warehousing]]
