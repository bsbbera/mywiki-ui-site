---
title: Data Quality Tools
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Quality Tools
  - Data Quality
category: Computer Science
tags:
  - DataEngineering
  - Quality
  - Tools
banner:
dg-publish: true
---

---

Catalog of data quality and observability tools (source: Tools/Data Quality/*.md).

> See [[../concepts/software-engineering/data-unit-test|Data Unit Test]] for the concept and [[../guides/testing-data-pipeline|Testing Your Data Pipeline]] for the practical guide.

## Open-source

### Great Expectations

[Great Expectations (GX)](https://github.com/great-expectations/great_expectations) — Python library for **data unit tests** in your pipelines. Operates on the principle that "**data engineering pipelines tend toward entropy over time**" (pipeline debt). GX provides a testing + evaluation suite to clean up pipelines and increase confidence in collaborative work (source: Tools/Data Quality/Great Expectations.md).

- Each test segment is an **Expectation** (assertion about data).
- Encourages testing **at batch time** (when new data arrives), in contrast to compile/deploy time.
- Workflow: introduce expectation early → validate with stakeholder → implement in pipeline → iterate.

**Strengths**: declarative, language-rich, mature, big community.
**Weaknesses**: Python-heavy; can feel heavyweight for small projects.

### Soda

[Soda](https://soda.io/) — YAML-based data quality. Lightweight; easy to integrate into CI.

### Deequ

AWS Labs' Spark-based Scala/Python library. Designed for **scale** — checks on billions of rows.

### dbt tests

Built-in to dbt. **`unique`**, **`not_null`**, **`accepted_values`**, **`relationships`** out of the box; custom tests via SQL. Augmented by the popular **dbt-expectations** package which ports GX expectations to SQL.

## Commercial / managed observability

### Monte Carlo

Managed **data observability** — automatically detects schema changes, freshness anomalies, volume drops. Very SaaS, premium pricing, light setup.

### Bigeye

ML-driven anomaly detection on data quality metrics. Auto-thresholds.

### Anomalo

ML-driven; integrates with warehouses; "no rules to write" pitch.

### DataKitchen

DataOps platform; tests + deployment + observability.

### DataOculus

Data quality monitoring (smaller / niche).

## Patterns

### Write-Audit-Publish (WAP)

Stage data → run quality tests → only publish if tests pass. See [[../guides/testing-data-pipeline|Testing Your Data Pipeline]].

### SLAs / SLOs on data

- **Freshness SLO**: 95% of days, data lands by 6am.
- **Completeness SLO**: row count within ±5% of expected.
- **Accuracy SLO**: < 0.1% null rate on critical columns.

### dbt + GX combo

A common modern stack: dbt for SQL transforms + tests; Great Expectations for Python-based pre-warehouse tests + post-warehouse validation.

## What to test

- **Freshness** — was the data updated within SLA?
- **Volume** — row count expected range?
- **Schema** — types, columns unchanged?
- **Nulls** — none on required fields?
- **Uniqueness** — PK uniqueness?
- **Referential integrity** — FKs match parents?
- **Range** — values in expected bounds?
- **Distribution** — mean/median didn't shift?
- **Drift** (ML) — input feature distribution stable?

## Decision matrix

| Need | Pick |
| --- | --- |
| Python-first; want declarative expectations | **Great Expectations** |
| dbt-only stack | **dbt tests + dbt-expectations** |
| YAML-first; lightweight | **Soda** |
| Spark-scale data | **Deequ** |
| Managed observability, low setup | **Monte Carlo / Bigeye / Anomalo** |
| Multi-tool DataOps | **DataKitchen** |

## Related pages

> [!multi-column]
>
>> [!card] Software Engineering
>> [[../concepts/software-engineering/data-unit-test|Data Unit Test]], [[../concepts/software-engineering/idempotence|Idempotence]]
>
>
>> [!card] Data Management
>> [[../concepts/data-management/data-governance|Data Governance]]
>
>
>> [!card] Guides
>> [[../guides/testing-data-pipeline|Testing Your Data Pipeline]], [[../guides/data-pipeline-best-practices|Pipeline Best Practices]], [[../guides/data-governance-guide|Data Governance Guide]]

