---
title: Medallion Architecture
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Medallion Architecture
  - Multi-hop Architecture
  - Bronze Silver Gold
category: Computer Science
tags:
  - DataEngineering
  - Architecture
  - Lakehouse
  - Databricks
banner: https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1400
publish: true
cssclass: wide-page
---

> "No valid plans for the future can be made by those who have no capacity for living now."
> <cite>— Alan Watts</cite>

---

<span class="at-kicker">Data Architecture · Lakehouse Pattern</span>

# Medallion Architecture

<p class="at-lead">
The Medallion Architecture is a data design pattern, coined by Databricks, used to logically organize data in a lakehouse. The goal: incrementally improve data quality as it flows through three named layers — bronze (raw), silver (validated), and gold (enriched).
</p>

<span class="at-stat">3</span> quality layers &nbsp;·&nbsp; <span class="at-stat">Progressive</span> refinement &nbsp;·&nbsp; <span class="at-mark">Bronze → Silver → Gold — progressive data quality in the lakehouse</span>

> [!tip] When to Use Medallion
> Use medallion architecture in Databricks lakehouse implementations, modern dbt + warehouse stacks (as staging → intermediate → marts), and streaming + batch unified pipelines. The pattern provides replay-ability for backfill, schema evolution, and disaster recovery.

<span class="at-kicker">The Three Layers</span>

## Bronze — Raw

> [!grid|cols3]
>
> > [!card|section] Initial Ingestion
> > Initial point for **data ingestion + storage**.
>
> > [!card|section] No Processing
> > Data is saved **without processing or transformation**.
>
> > [!card|section] Schema-on-Read
> > Preserves source format faithfully.

Examples: application logs to a distributed file system; Kafka events streamed to Delta tables.

## Silver — Validated / Cleaned

> [!grid|cols3]
>
> > [!card|section] Light Cleaning
> > Tables are **cleaned, filtered, lightly transformed**.
>
> > [!card|section] Light Modifications
> > **Light** modifications only — no heavy aggregation or enrichment.
>
> > [!card|section] Lakehouse Benefits
> > Schema enforcement, ACID upserts, time travel via Delta/Iceberg/Hudi.

Examples: parse log structs; standardize event naming; deduplicate; cast types.

## Gold — Enriched / Business-Ready

> [!grid|cols3]
>
> > [!card|section] Business Refined
> > Refined for **specific business and analytics requirements**.
>
> > [!card|section] Aggregations
> > Aggregations to a chosen grain (daily, hourly, customer-level).
>
> > [!card|section] Downstream Ready
> > Consumed by **analytics, data science, ML, BI dashboards**.

Joins with external reference data, KPIs, dimensional models.

(source: Concepts/Data Architecture/Medallion Architecture.md)

<span class="at-kicker">Trade-offs</span>

## Advantages

> [!grid|cols2]
>
> > [!card|section] Familiar Pattern
> > Maps onto dbt's source → stage → curated pattern.
>
> > [!card|section] Logical Progression
> > Easy for new engineers to navigate and understand.
>
> > [!card|section] Replay-able
> > Gold can always be rebuilt from bronze; ideal for backfill, schema evolution, disaster recovery.

## Disadvantages

> [!grid|cols2]
>
> > [!card|section] Modeling Still Required
> > Doesn't replace dimensional modeling — schemas inside each layer must still be modeled.
>
> > [!card|section] Storage Cost
> > Effectively 3× the lake size; problematic for very large datasets.
>
> > [!card|section] Platinum Layer
> > Often needs a 4th "platinum" layer for business logic owned by analysts.
>
> > [!card|section] Lakehouse Assumption
> > Assumes Delta-style ACID storage; pure data lake or warehouse need adaptation.

(source: Concepts/Data Architecture/Medallion Architecture.md)

<span class="at-kicker">Pattern Combinations</span>

## Combining with other patterns

| Combination | How It Works |
| --- | --- |
| Medallion + **[[lambda-architecture\|Lambda]]** | Bronze receives both streams and batches; silver unifies them. |
| Medallion + **[[data-mesh\|Data Mesh]]** | Each domain owns its own bronze/silver/gold layers; gold tables become data products. |
| Medallion + **[[../data-modeling/dimensional-modeling\|Dimensional]]** | Gold layer holds the star/snowflake fact and dimension tables. |

## Implementation on GCP

| Layer | Implementation |
| --- | --- |
| **Bronze** | [[Cloud Storage\|Cloud Storage]] (raw files) or [[../../cloud/gcp/analytics/bigquery\|BigQuery]] external tables |
| **Silver** | BigQuery tables with cleaning UDFs (or Dataflow output) |
| **Gold** | BigQuery materialized views, scheduled queries, or BigLake managed tables |

<span class="at-kicker">Context</span>

## Interesting Facts

- The "medallion" name is Databricks marketing — the underlying pattern existed in warehouses for decades as **staging → integration → presentation**.
- Some teams add a **"4th layer" (platinum)** for business-owned semantic transformations, separating engineering's gold from analytics' product.

<span class="at-kicker">Interview Prep</span>

## Interview Questions

1. Bronze vs silver vs gold — what stays / leaves at each layer?
2. How is medallion different from a classic warehouse staging area?
3. When does triple storage cost become a problem?
4. How would you build medallion on GCP without Databricks?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Sister architectures
>> [[data-lake|Data Lake]], [[data-warehouse|Data Warehouse]], [[lambda-architecture|Lambda]], [[kappa-architecture|Kappa]]
>
>
>> [!card] Modeling
>> [[../data-modeling/data-modeling|Data Modeling]], [[../data-modeling/dimensional-modeling|Dimensional Modeling]]
>
>
>> [!card] Products + formats
>> [[../../cloud/databricks/databricks|Databricks]], [[../../tools/file-formats|File Formats (Delta / Iceberg)]]
>
>
>> [!card] People
>> [[../../../people/matei-zaharia|Matei Zaharia]]
