---
cssclass: wide-page
date modified: Thursday, June 4th 2026, 7:00:00 pm
title: Metrics Layer
Created:
  - 2026-04-29
aliases:
  - Metrics Layer
  - Headless BI
  - Metrics Store
category: Computer Science
tags:
  - data-engineering
  - concept
  - BI
  - Metrics
banner: https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400
publish: true
---

<span class="at-kicker">Data Engineering · Management</span>

# Metrics Layer

<p class="at-lead">
A metrics layer is the single source of truth for how metrics are defined and their business logic across an organization. Define a metric once, use it everywhere — Looker, Tableau, Power BI, Slack bots, Jupyter notebooks, anywhere.
</p>

<span class="at-stat">Define Once</span> use everywhere &nbsp;·&nbsp; <span class="at-stat">~2021</span> headless BI movement &nbsp;·&nbsp; <span class="at-mark">The API for business metrics — versioned, governed, tested</span>

> [!tip] The Metrics Drift Problem
> Without a metrics layer: "Active customer" means 30-day login in marketing's dashboard, but last-90-day-purchase in finance's. Same KPI rendered three different ways. Every time leadership asks "why are these numbers different?", an engineer has to investigate.

<span class="at-kicker">Core Architecture</span>

## Core idea

```
   ┌─────────────────────────────┐
   │     Metrics Layer (one)      │
   │     revenue, churn, MAU      │  ← versioned, governed, tested
   └──────────┬──────────────────┘
              │
   ┌──────────┼──────────┐
   ▼          ▼          ▼
[Looker] [Tableau] [Slack bot] [Notebook]
```

<span class="at-kicker">Trade-offs</span>

## Advantages vs Disadvantages

> [!grid|cols2]
>
> > [!card|section] Advantages
> > - **Define once, use everywhere** — consistency across all consumers.
> > - **Versioned + tested** — metric definitions live in Git like code.
> > - **Headless** — agnostic to BI tool; even reachable by API for non-BI consumers.
> > - Lowers "metric drift" risk.
>
> > [!card|section] Disadvantages
> > - **Requires discipline** — owners + review process for changes.
> > - **Performance challenges** — runtime aggregation can be slow without caching.
> > - **Tool maturity** is uneven; ecosystem still consolidating.

<span class="at-kicker">Tools Landscape</span>

## Popular tools

- **Cube** — headless, framework-agnostic.
- **MetricFlow** (now part of dbt Semantic Layer) — defines metrics next to dbt models.
- **Metriql** — open-source layer over dbt metrics (older).
- **dbt Semantic Layer** — dbt Labs' commercial offering using MetricFlow.

<span class="at-kicker">Key Distinction</span>

## Metrics Layer vs [[semantic-layer|Semantic Layer]]

| | Metrics | Semantic |
| --- | --- | --- |
| Scope | Metrics only | Full business model (entities, joins, measures) |
| Lightweight | Yes | No |
| Used by | Multiple BI tools, custom apps | Usually one BI tool |
| Coupling | Low | High |

The metrics layer is essentially a **focused subset of the semantic layer** — built for orgs that want consistent metrics without committing to a full LookML-style semantic model.

<span class="at-kicker">Interesting Facts</span>

## Interesting Facts

- The "headless BI" movement (~2021) named the metrics layer as the missing piece between the warehouse and visualization tools.
- **MetricFlow** was started by Transform, acquired by dbt Labs in 2023 to become **dbt Semantic Layer**.

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. **Metrics layer** vs **semantic layer** — when prefer which?
2. How do you prevent "metric drift" across dashboards?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[semantic-layer|Semantic Layer]], [[../../cloud/gcp/analytics/data-catalog|Data Catalog]], [[data-management|Data Management]]
>
>
>> [!card] Tools
>> [[../../tools/analytics-tools|Analytics + BI Tools]], [[../../tools/processing-tools|Processing Tools (dbt)]]
