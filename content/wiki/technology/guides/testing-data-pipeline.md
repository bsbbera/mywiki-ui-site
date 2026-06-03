---
title: Testing Your Data Pipeline
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Testing Data Pipeline
  - Pipeline Testing
category: Computer Science
tags:
  - DataEngineering
  - Testing
  - Quality
  - Guide
banner:
publish: true
---

> "Seek not the good in external things;seek it in yourselves."
> <cite>— Epictetus</cite>

---

A guide to designing a testing strategy for data pipelines (source: Guides/Testing Your Data Pipeline.md).

## Why testing matters

Tests provide **three benefits**:

1. **Reduce on-call panic** — catch problems before they hit production.
2. **Documentation** — tests are executable specs of what data looks like.
3. **Build trust** — stakeholders trust data they see passing tests; mistrust forces them to build private spreadsheets, fragmenting the org.

## Two types of tests

### Code unit tests

Test the **functions and classes** that make up a pipeline.

- Verify a Python transformation function gives expected output for various inputs.
- Run on every PR via CI.
- Tools: `pytest`, `unittest` (Python); `JUnit` (Java).

### [[../software-engineering/data-unit-test|Data quality tests]]

Test the **data flowing through** the pipeline — not the code.

- Compare query results against expected values.
- Validate counts, nulls, ranges, distributions.
- Run as part of the pipeline itself.

> **Example**: a customer-orders dataset should have **no orders with zero items**. A data quality test queries for `COUNT(*) WHERE items = 0` and fails the pipeline if > 0.

## Write-Audit-Publish (WAP) pattern

(source: Guides/Testing Your Data Pipeline.md)

```
[Source] ─→ [WRITE to staging] ─→ [AUDIT — run data tests] ─┬→ if pass: [PUBLISH to prod]
                                                            └→ if fail: [alert + DLQ]
```

This prevents bad data from reaching dashboards or downstream consumers. Popularized by **lakeFS** for data versioning.

## Testing plan

### Step 1 — Identify your most important pipelines

Prioritize based on:

- Does it directly involve **money**? (Finance, billing.)
- Does it power a **core business feature**?
- Is the data used by **high-level decision makers**?

These need the most rigorous testing.

### Step 2 — Understand the architecture

For **custom code** (extract, load, transform):

- Write **unit tests** that run on every code change.
- Priority: business logic and custom connectors (data corruption upstream is hardest to undo).

For **data quality**:

- Run as part of the pipeline.
- Trigger early to catch silent failures.
- Work with business owners to define what "valid" means.

### Common data quality tests

- **Row count** — minimum / range / change %.
- **Column nulls** — none, or no more than X%.
- **Unique values** — primary keys are unique.
- **Range** — values within expected bounds.
- **Distribution** — mean/median didn't shift > X stddevs.
- **Referential integrity** — every FK has matching PK.
- **Population stability** (for ML) — feature distribution didn't drift.

### Step 3 — Plan for failure

When **unit tests** fail → blocks deployment, gets fixed. Easy.

When **data quality tests** fail in production → harder.

- **Dead-letter** the failing data — separate table or S3 bucket — so it can be inspected, fixed, and re-run.
- **Don't promote bad data downstream**.
- For streaming, **dead-letter queue** topics for poison messages.
- **Runbooks** — documented steps to diagnose + fix common failures (see [PagerDuty's runbook guide](https://www.pagerduty.com/resources/learn/what-is-a-runbook/)).

## Continuous monitoring + alerting

- Use the orchestrator's built-in alerts (Airflow email, Slack hooks).
- Page the right person — don't send "your pipeline failed" to a shared inbox.
- **Track over time** — alert on **degradation** (latency increasing) before total failure.

## Tools

| Tool | Strength |
| --- | --- |
| **Great Expectations** | Declarative, Python, mature |
| **dbt tests** | Built into SQL workflows |
| **Soda** | YAML, lightweight |
| **Deequ** | Spark-native, scale |
| **Monte Carlo** | Managed observability |
| **Bigeye, Anomalo** | ML-driven anomaly detection |

See [[../tools/quality-tools|Data Quality Tools]] for the full catalog.

## Interview Questions

1. **Code unit test** vs **data quality test** — when each.
2. Walk through **Write-Audit-Publish**.
3. How do you handle a failing data quality test in **production**?
4. **Silent failures** — what are they and how do you detect?
5. **Data drift** — how to test for it?

## Related pages

> [!grid]
>
>> [!card] Reliability patterns
>> [[../software-engineering/data-unit-test|Data Unit Test]], [[../software-engineering/idempotence|Idempotence]]
>
>
>> [!card] Sister guides
>> [[data-pipeline-best-practices|Pipeline Best Practices]], [[getting-started|Getting Started]]
>
>
>> [!card] Tools
>> [[../tools/quality-tools|Data Quality Tools]]

