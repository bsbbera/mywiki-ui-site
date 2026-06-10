---
title: Activity Schema
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Activity Schema
category: Computer Science
tags:
  - DataEngineering
  - Modeling
  - Analytics
banner: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1400
publish: true
cssclass: wide-page
---

> "Give a girl the right shoes, and she can conquer the world."
> <cite>— Bette Midler</cite>

---

<span class="at-kicker">Data Modeling · Modern Pattern</span>

# Activity Schema

<p class="at-lead">
Activity Schema — created by Ahmed Elsamadisi — is a data-modeling standard designed to make modeling and analysis simpler, faster, and more reliable by representing all data as a single time-series table with one universal query pattern.
</p>

<span class="at-stat">Single</span> table design &nbsp;·&nbsp; <span class="at-stat">Temporal</span> joins &nbsp;·&nbsp; <span class="at-mark">a single activity stream table replaces dozens of dimensional models</span>

> [!tip] When to Use Activity Schema
> Choose activity schema for customer journey, funnel, and retention analyses where event order matters. Perfect for product analytics in smaller orgs that want fast insights without heavy dimensional modeling investment.

<span class="at-kicker">Core Concept</span>

## Core idea

Business concepts are represented as **`entity` doing an `activity`** ("a customer completed an order") — instead of facts or nouns ("orders", "products").

> [!grid|cols3]
>
> > [!card|section] Built from Sources
> > **Activities** are built directly from source tables.
>
> > [!card|section] Own Data Only
> > They store **only their own data** and act as the **single source of truth** for that concept.
>
> > [!card|section] Temporal Queries
> > All queries run against an **activity stream table**, joining activities through **time relationships**, not foreign keys.

## Example query pattern

> All customers who **completed an order** AND **submitted a support ticket** **before** their **next completed order**

In a star schema this would require multiple joins on dimensions, surrogate keys, and date ranges. In activity schema it's a temporal join on the single activity stream.

<span class="at-kicker">Trade-offs</span>

## Advantages

> [!grid|cols2]
>
> > [!card|section] Simple
> > **One table** to build, query, and maintain.
>
> > [!card|section] Performant
> > **No joins** (with the right warehouse).
>
> > [!card|section] Universal
> > **Same query pattern** fits any analysis.
>
> > [!card|section] Event-Driven
> > **Forces event-driven thinking** — what *happened*, not what *exists*.

## Disadvantages

> [!grid|cols2]
>
> > [!card|section] Requires JSON Support
> > Requires JSON / variant column support — Snowflake VARIANT, BigQuery STRUCT, Redshift SUPER.
>
> > [!card|section] PII Challenges
> > Not ideal for **PII / financial** data — having all data in one table can complicate access control.
>
> > [!card|section] BI Tool Struggles
> > **Some BI tools** struggle with very large activity tables.
>
> > [!card|section] Niche Community
> > **Niche** — much smaller community than dimensional or vault.

<span class="at-kicker">Decision Framework</span>

## When to use

- Customer journey, funnel, retention analyses.
- Product analytics where event order matters.
- Smaller orgs that want analytics fast without heavy modeling investment.

## When NOT to use

- Heavy OLTP requirements.
- Strict row/column-level security on subsets of data.
- Complex multi-grain numerical aggregations.

<span class="at-kicker">Implementation</span>

## Implementation tools

> [!grid|cols2]
>
> > [!card|section] Narrator
> > Elsamadisi's company; the canonical activity schema platform.
>
> > [!card|section] Cloud + dbt
> > Implementations on **Snowflake / BigQuery / dbt** increasingly common.

## Sources

- [activityschema.com](https://www.activityschema.com/)
- [Activity Schema GitHub](https://github.com/ActivitySchema/ActivitySchema)

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. How does activity schema differ from a star schema?
2. What database features does activity schema **require**?
3. When would you choose activity schema over dimensional modeling?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister modeling techniques
>> [[data-modeling|Data Modeling]], [[dimensional-modeling|Dimensional Modeling]], [[one-big-table|One Big Table]]
>
>
>> [!card] Event-driven concepts
>> [[../../software-engineering/event-sourcing-pattern|Event Sourcing]], [[../data-processing/stream-data-processing|Stream Processing]]
