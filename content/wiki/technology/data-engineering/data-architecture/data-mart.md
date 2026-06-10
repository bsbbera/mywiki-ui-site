---
title: Data Mart
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Data Mart
category: Computer Science
tags:
  - DataEngineering
  - Architecture
  - Analytics
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
cssclass: wide-page
---

> "Sometimes a change of perspective is all it takes to see the light."
> <cite>— Dan Brown</cite>

---

<span class="at-kicker">Data Architecture · Analytics Pattern</span>

# Data Mart

<p class="at-lead">
A data mart is a subject-specific database that acts as a partitioned segment of an enterprise data warehouse. Each mart aligns with a particular business unit — finance, marketing, supply chain, sales — providing domain-focused analytics.
</p>

<span class="at-stat">Domain</span> focused scope &nbsp;·&nbsp; <span class="at-stat">Better</span> query performance &nbsp;·&nbsp; <span class="at-mark">a subject-area slice of the data warehouse optimized for one team</span>

> [!tip] When to Use a Mart
> Create a data mart when a monolithic warehouse becomes slow to query, confusing to navigate, or hard to permission. Marts slice the warehouse into domain-focused subsets with fewer tables, scoped permissions, and better performance.

<span class="at-kicker">Concept</span>

```mermaid
graph LR
  A((Data Warehouse)) --> B[Data Mart: Finance]
  A --> C[Data Mart: Marketing]
  A --> D[Data Mart: Supply Chain]
```

## Why marts exist

A monolithic warehouse with hundreds of tables across all departments becomes:

> [!grid|cols3]
>
> > [!card|section] Slow to query
> > Every query competes for shared resources.
>
> > [!card|section] Confusing
> > Analysts can't find tables relevant to their domain.
>
> > [!card|section] Hard to permission
> > IAM at table level becomes overwhelming.

A mart slices the warehouse into a **domain-focused subset** with fewer tables, scoped permissions, and better query performance.

<span class="at-kicker">Trade-offs</span>

## Advantages

> [!grid|cols2]
>
> > [!card|section] Performance
> > Querying a smaller dataset with less resource contention.
>
> > [!card|section] Maintenance
> > Less complex than maintaining a monolithic warehouse.
>
> > [!card|section] Domain focus
> > Flexible, empowers business users with relevant data.
>
> > [!card|section] Security
> > Easier permissions — each domain gets its own ACL.

## Disadvantages

> [!grid|cols2]
>
> > [!card|section] Quality Risk
> > Discrepancies can arise between mart and source warehouse.
>
> > [!card|section] Complexity
> > Poor design leads to inconsistencies that compound over time.

<span class="at-kicker">Comparisons</span>

## Mart vs Warehouse vs Mesh

| | Warehouse | Mart | [[data-mesh\|Mesh]] |
| --- | --- | --- | --- |
| Scope | Org-wide | Department | Domain (decentralized) |
| Owner | Central data team | Department-aligned team | Domain team owns end-to-end |
| Schema | Often star/snowflake | Subset of warehouse | Per-domain |
| Governance | Central | Hybrid | Federated |

## Modern thinking

In **data mesh** architecture, marts evolve into **domain-owned data products** with self-serve infrastructure. The mart is the architectural ancestor of the data product.

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. Mart vs warehouse — what changes?
2. **Dependent** vs **independent** data marts (built from warehouse vs directly from sources)?
3. How do you prevent drift between mart and source warehouse?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister architectures
>> [[data-warehouse|Data Warehouse]], [[medallion-architecture|Medallion Architecture]], [[../data-warehousing|Data Warehousing]]
>
>
>> [!card] Modeling + serving
>> [[../data-modeling/dimensional-modeling|Dimensional Modeling]], [[../data-management/semantic-layer|Semantic Layer]]
>
>
>> [!card] Products
>> [[../../cloud/gcp/analytics/bigquery|BigQuery]]
>
>
>> [!card] People
>> [[../../../people/bill-inmon|Bill Inmon]], [[../../../people/ralph-kimball|Ralph Kimball]]
>
>
>> [!card] Books
>> [[../../../books/the-data-warehouse-toolkit|The Data Warehouse Toolkit]]
