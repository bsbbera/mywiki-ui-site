---
title: Semantic Layer
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Semantic Layer
category: Computer Science
tags:
  - DataEngineering
  - BI
  - Modeling
banner:
dg-publish: true
publish: true
---

---

The **semantic layer** is the [[../data-modeling/data-modeling|data model]] that takes **multiple enterprise data sources** and **combines them into one unified model** for the business. It is traditionally built in the [[../data-architecture/data-warehouse|data warehouse]] and used by reporting tools. Companies have used semantic layers since the early 1990s (source: Concepts/Data Management/Semantic Layer.md).

## What it does

Underlying data lives in dozens of tables across systems. A semantic layer presents a **business-friendly model** with:

- Familiar entity names (`Customer`, `Order`, `Product`) — not table names like `dim_cust_v2`.
- Pre-defined **joins** so analysts don't reinvent them.
- Pre-defined **measures** (total revenue, gross margin) and **dimensions** (date, region).
- Consistent **definitions** across all reports.

```
[ raw warehouse tables ]
            │
            ▼
   ┌─────────────────────┐
   │   Semantic Layer    │  ← business model: Customer / Order / Product
   └────────┬────────────┘    measures + dimensions + joins
            │
            ▼
[ Looker, Tableau, Power BI, ad-hoc SQL ]
```

## Advantages

- **Reduces complexity** — analysts query the model, not raw tables.
- **Self-service reporting** — business users build their own reports without engineer help.
- **Performance** — pre-aggregations cache common joins.
- **Consistency** — every dashboard agrees on metric definitions.

## Disadvantages

- **Maintenance** — every schema change, every new metric requires curation.
- **Risk of staleness** — if the layer lags real schema, bad data flows downstream.
- **Single point of failure** — if the layer breaks, all reports break.

## Modern semantic-layer tools

- **Looker** (LookML) — Google-acquired BI tool with the most mature semantic layer.
- **Cube** — open-source headless semantic layer.
- **dbt Semantic Layer** (powered by MetricFlow) — semantic layer driven from dbt models.
- **AtScale**, **Kyvos** — enterprise semantic OLAP.

## Semantic Layer vs [[metrics-layer|Metrics Layer]]

| | Semantic | Metrics |
| --- | --- | --- |
| Focus | Whole business model | Just metrics |
| Scope | Tables, joins, measures, dimensions | Metric definitions only |
| Example | LookML model | dbt's `metrics:` block |
| Overlap | Metrics layer is a subset of semantic layer | |

The metrics layer emerged as a lighter, **headless** alternative for orgs that wanted just consistent metrics without committing to a full BI semantic model.

## Interesting Facts

- The semantic layer concept dates to **Business Objects** in 1990, which used the term "Universe" for the same idea.
- Looker's killer feature was **LookML** — version-controlled, code-based semantic layer; pioneering at the time.

## Interview Questions

1. What problem does a semantic layer solve over raw warehouse tables?
2. Semantic layer vs metrics layer — pros / cons.
3. **LookML** vs **dbt Semantic Layer** — what's different?
4. How would you handle metric definition drift between dashboards?

## Related pages

> [!multi-column]
>
>> [!card] Sister concepts
>> [[metrics-layer|Metrics Layer]], [[data-catalog|Data Catalog]], [[data-management|Data Management]]
>
>
>> [!card] Modeling
>> [[../data-modeling/dimensional-modeling|Dimensional Modeling]]
>
>
>> [!card] Tools
>> [[../../tools/analytics-tools|Analytics + BI Tools]]

