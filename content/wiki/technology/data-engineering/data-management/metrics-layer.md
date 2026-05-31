---
title: Metrics Layer
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Metrics Layer
  - Headless BI
  - Metrics Store
category: Computer Science
tags:
  - DataEngineering
  - BI
  - Metrics
banner:
publish: true
---

> "The best way to understanding is a few good examples."
> <cite>— Isaac Newton</cite>

---

A **metrics layer** is the **single source of truth for how metrics are defined** and their business logic across an organization (source: Concepts/Data Management/Metrics Layer.md).

Define a metric **once**, use it **everywhere** — Looker, Tableau, Power BI, Slack bots, Jupyter notebooks, anywhere.

## The problem it solves

Without a metrics layer:

- "Active customer" means **30-day login** in marketing's dashboard, but **last-90-day-purchase** in finance's.
- Same KPI rendered three different ways across three reports.
- Every time leadership asks "why are these numbers different?", an engineer has to investigate.

The metrics layer **enforces** one definition per metric and serves it through an API.

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

## Advantages

- **Define once, use everywhere** — consistency across all consumers.
- **Versioned + tested** — metric definitions live in Git like code.
- **Headless** — agnostic to BI tool; even reachable by API for non-BI consumers.
- Lowers "metric drift" risk.

## Disadvantages

- **Requires discipline** — owners + review process for changes.
- **Performance challenges** — runtime aggregation can be slow without caching.
- **Tool maturity** is uneven; ecosystem still consolidating.

## Popular tools

- **Cube** — headless, framework-agnostic.
- **MetricFlow** (now part of dbt Semantic Layer) — defines metrics next to dbt models.
- **Metriql** — open-source layer over dbt metrics (older).
- **dbt Semantic Layer** — dbt Labs' commercial offering using MetricFlow.

## Metrics Layer vs [[semantic-layer|Semantic Layer]]

| | Metrics | Semantic |
| --- | --- | --- |
| Scope | Metrics only | Full business model (entities, joins, measures) |
| Lightweight | Yes | No |
| Used by | Multiple BI tools, custom apps | Usually one BI tool |
| Coupling | Low | High |

The metrics layer is essentially a **focused subset of the semantic layer** — built for orgs that want consistent metrics without committing to a full LookML-style semantic model.

## Interesting Facts

- The "headless BI" movement (~2021) named the metrics layer as the missing piece between the warehouse and visualization tools.
- **MetricFlow** was started by Transform, acquired by dbt Labs in 2023 to become **dbt Semantic Layer**.

## Interview Questions

1. **Metrics layer** vs **semantic layer** — when prefer which?
2. How do you prevent "metric drift" across dashboards?

## Related pages

> [!multi-column]
>
>> [!card] Sister concepts
>> [[semantic-layer|Semantic Layer]], [[../../cloud/gcp/analytics/data-catalog|Data Catalog]], [[data-management|Data Management]]
>
>
>> [!card] Tools
>> [[../../tools/analytics-tools|Analytics + BI Tools]], [[../../tools/processing-tools|Processing Tools (dbt)]]

