---
title: Fundamentals of Data Engineering
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Fundamentals of Data Engineering
category: Books
tags:
  - book
  - data_engineering
banner: "https://learning.oreilly.com/library/cover/9781098108298/250w/"
cssclass: wide-page
publish: true
---

> "If you want to see things just as they are, then you yourself must practice just as you are."
> <cite>— Dogen</cite>

---

> [!infobox|right]
> # Fundamentals of Data Engineering
> ![cover](https://learning.oreilly.com/library/cover/9781098108298/250w/)
> ###### Book
> | | |
> | --- | --- |
> | **Authors** | [[../people/joe-reis-matt-housley\|Joe Reis & Matt Housley]] |
> | **Publisher** | O'Reilly Media |
> | **Published** | 2022 (1st ed.) |
> | **Domain** | Data engineering |
> | **Pages** | 447 |
> | **ISBN** | 978-1098108304 |

<span class="at-kicker">Data Engineering · Joe Reis & Matt Housley</span>

# Fundamentals of Data Engineering

<p class="at-lead">
The first book to formally define the modern data engineering lifecycle — from source generation through ingestion, transformation, and serving — and the undercurrents that run beneath every stage. Tool-agnostic and principles-first, it provides the conceptual framework that was missing from the field.
</p>

<span class="at-stat">2022</span> published &nbsp;·&nbsp; <span class="at-stat">414</span> pages &nbsp;·&nbsp; <span class="at-mark">the first book to define the modern data engineering lifecycle</span>

---

<span class="at-kicker">Core Concepts</span>

## Key Concepts

> [!grid|cols3]
>
>> [!card|section] The Data Engineering Lifecycle
>> The central framework of the book: **Generation → Ingestion → Transformation → Serving**. Every chapter maps back to one of these stages, giving engineers a universal lens through which to evaluate any tool or technology decision.
>
>> [!card|section] Undercurrents
>> Six forces that run beneath the entire lifecycle — **Security, Data Management, DataOps, Data Architecture, Orchestration, and Software Engineering**. Ignoring undercurrents causes fragile pipelines regardless of how good the core stages are.
>
>> [!card|section] Source Systems & Generation
>> Where data originates: transactional databases, event streams, IoT devices, SaaS platforms. Understanding source system internals (schemas, change patterns, volume, velocity) is the foundation of sound ingestion design.
>
>> [!card|section] Ingestion
>> Moving data from sources into storage. Covers batch vs. streaming ingestion, push vs. pull patterns, reliability, ordering, and the trade-offs between direct database reads, CDC, and event queues.
>
>> [!card|section] Transformation
>> Converting raw data into usable form. Covers SQL-based transformation, dbt, in-flight vs. at-rest transformation, data quality checks, and business logic encoding — and when to transform versus when to leave data raw.
>
>> [!card|section] Serving
>> Delivering data to end consumers: analytics BI dashboards, ML feature stores, operational APIs, and reverse ETL back into source systems. The serving stage determines whether the upstream investment pays off.
>
>> [!card|section] Storage
>> The connective tissue between stages. Covers cloud object storage, data lakes, data warehouses, data lakehouses, streaming storage (Kafka), and how to choose between them based on query patterns and cost.
>
>> [!card|section] DataOps
>> Applying DevOps and lean manufacturing principles to data: automation, CI/CD for pipelines, observability, incident response, and treating data products with the same engineering rigor as software products.
>
>> [!card|section] The Data Maturity Model
>> A framework for assessing where an organisation sits — Starting with data, Scaling with data, Leading with data. Each maturity level calls for different tooling, team structures, and engineering priorities.

---

<span class="at-kicker">Why It Matters</span>

## Takeaways

> [!grid|cols2]
>
>> [!card|section] A shared vocabulary finally exists
>> Before this book, "data engineer" meant different things at every company. Reis & Housley give the field a common language — lifecycle, undercurrents, serving — that teams can use to have clearer conversations about scope and priorities.
>
>> [!card|section] Tools come and go; the lifecycle is stable
>> By deliberately avoiding specific tool recommendations, the book remains useful as the ecosystem evolves. Understanding *why* a tool fits a stage matters more than knowing *which* tool is popular today.
>
>> [!card|section] Security and governance are first-class concerns
>> Unlike most technical books that tack on security as an afterthought, FDE treats it as an undercurrent that shapes every architectural decision from day one.
>
>> [!card|section] Data engineers must think like product managers
>> Serving data to stakeholders is not just a technical problem — it requires understanding use cases, SLAs, and business value. The book consistently redirects engineers from "what's technically interesting" to "what does the consumer actually need."

---

> [!tip] Who should read this
> **Anyone entering or formalising their understanding of data engineering** — from junior data engineers wanting a career map to senior architects who need a lingua franca for cross-team conversations. Best read alongside *Designing Data-Intensive Applications* (for deep technical foundations) and the docs of your current orchestration and transformation tooling.

---

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] People
>> [[../people/joe-reis-matt-housley|Joe Reis + Matt Housley]]
>
>
>> [!card] Data Engineering
>> [[../technology/data-engineering/data-engineering|Data Engineering Overview]], [[../technology/data-engineering/data-pipeline|Data Pipeline]]
>
>
>> [!card] Data Architecture
>> [[../technology/data-engineering/data-architecture/data-architecture|Data Architecture]]
