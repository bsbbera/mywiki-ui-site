---
title: Data Pipeline Best Practices
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Pipeline Best Practices
  - ETL Best Practices
  - ELT Best Practices
category: Computer Science
tags:
  - DataEngineering
  - Pipelines
  - BestPractices
  - Guide
banner:
dg-publish: true
---

---

Best practices for building **robust, scalable, performant** data pipelines, compiled from the data engineering community (source: Guides/Data Pipeline Best Practices.md).

## General

- **Verify your assumptions** about the data — sample, profile, sanity-check.
- **Document** pipelines — purpose, owner, schedule, SLA, dependencies.
- **Add proper logging** — debug-level for trace, info for milestones, error for failures.
- **Version control** (Git) — pipelines, configs, schemas.
- **Make pipelines [[../concepts/software-engineering/idempotence|idempotent]]** — re-runs produce the same result.
- **Understand the trade-off**: fast data vs accurate data. Quality takes time.
- **Separate environments** — dev / staging / prod, **color-coded** for clarity.
- **Templates** — write generic, parameterized code; avoid one-off scripts.
- **Avoid manually-created sources** (Sheets, Excel) for production. If you must, lock down what can change.

## Design

- **Docker** for dependency management — reproducible builds.
- **Prepare for failures** — exponential backoff, retry strategies, jitter.
- **CI** to deploy pipelines to staging and prod.
- **Alert on failures** + **pipeline run-time anomalies** (longer than usual = problem).
- **Surface parameters** via configs / env vars — not hardcoded.

## Optimization

- **File sizes** — not too large (>1 GB resource-heavy), not too small (overhead). **~250 MB sweet spot** for parallel processing.
- **Use the [[../concepts/software-engineering/claim-check-pattern|claim-check pattern]]** to pass large data between tasks.
- **Compress** before storing/transmitting — gzip, snappy, lz4 common.
- **Partition / cluster** data based on common query patterns.

## Security

- **Secrets manager** for credentials — never in code or env vars.
- **Rotate credentials** automatically.
- **Don't log sensitive info** — credentials, PII.
- **Encrypt** in transit + at rest.
- **IAM** — least-privilege per pipeline.
- **Audit logs** for data access + changes.

## Testing

- **[[../concepts/software-engineering/data-unit-test|Data unit tests]]** — for the data itself (freshness, nulls, ranges).
- **Code unit tests** — for transformation logic.
- **Local environment** — set up Docker / dev DB for pre-prod testing.
- **Re-define failure** — if pipeline retries x times but data lands on time, count it as success.

## Error handling and monitoring

- **Exponential backoff** for transient failures.
- **Dead-letter queues (DLQ)** for streaming — store failed messages for inspection without losing them.
- **Notifications** for pipeline failures (PagerDuty, Slack, email).
- **Comprehensive logging** for debug + audit.
- **Track metrics** — ingestion rate, latency, CPU/memory, error rate.

## Architectural decisions

- **ELT > ETL** for most modern stacks (cheap warehouse compute makes this cheaper).
- **Streaming when needed**, batch otherwise — streaming is more expensive + complex.
- **Schema-on-read in lake**, **schema-on-write in warehouse**.
- **Lineage** — emit OpenLineage events; integrate with [[../concepts/data-management/data-catalog|catalog]].

## Cost management

- **Monitor query cost** — BigQuery's query validator, Snowflake's QUERY_HISTORY.
- **Partition + cluster** — avoid full-table scans.
- **Materialize aggregates** — avoid recomputing daily KPIs.
- **Tier storage** — hot/warm/cold/archive based on age.
- **Right-size compute** — see [[cost-optimization-cloud|Cost Optimization]].

## Anti-patterns

- 🚫 Hardcoded paths / credentials.
- 🚫 No logging until production breaks.
- 🚫 Coupling business logic to ingestion logic.
- 🚫 Single environment.
- 🚫 Pipeline that requires a specific person to run.
- 🚫 Tests skipped because "it's a quick fix".

## Interview Questions

1. Walk through making a pipeline **idempotent**.
2. **Optimal file size** — why and how to enforce.
3. **Dead-letter queue** strategy.
4. **CI/CD** for data pipelines — what does it look like?
5. **Secrets management** — patterns.

## Related pages

> [!multi-column]
>
>> [!card] Pipeline foundations
>> [[../data-pipeline|Data Pipeline]], [[../data-engineering|Data Engineering Overview]]
>
>
>> [!card] Reliability patterns
>> [[../concepts/software-engineering/idempotence|Idempotence]], [[../concepts/software-engineering/claim-check-pattern|Claim Check Pattern]], [[../concepts/software-engineering/data-unit-test|Data Unit Test]]
>
>
>> [!card] Sister guides
>> [[testing-data-pipeline|Testing Your Data Pipeline]], [[cost-optimization-cloud|Cost Optimization]], [[data-governance-guide|Data Governance Guide]]
>
>
>> [!card] Books
>> [[../../books/fundamentals-of-data-engineering|Fundamentals of Data Engineering]]

