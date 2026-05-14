---
title: Data Unit Test
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Data Unit Test
  - Data Quality Test
category: Computer Science
tags:
  - DataEngineering
  - Testing
  - Quality
banner:
dg-publish: true
---

---

A **data unit test** is an **automated test** that ensures the data flowing through your pipeline is what you expect it to be. They're useful for detecting **upstream changes**, **stale or cached data**, and **preventing bad data** from corrupting ML models or public-facing reports/dashboards (source: Concepts/Software Engineering/Data Unit Test.md).

Creating data unit tests also serves as **documentation** — what *should* the dataset look like? — providing common ground for engineers, analysts, and stakeholders.

## Common test types

- **Freshness / staleness** — was data created/updated within an SLA window? (Most common.)
- **Uniqueness** — are values in this column unique?
- **Null checks** — does this column ever have NULLs when it shouldn't?
- **Range / domain** — values fall within expected min/max or set of allowed values.
- **Row counts** — table has at least N rows, or row count grew by < X%.
- **Referential integrity** — every FK has a matching PK in the parent table.
- **Schema validation** — columns + types haven't drifted.
- **Distribution checks** — mean/median didn't shift more than X stddevs.
- **Duplicate detection** — composite-key uniqueness.

## "Silent failures" — the real risk

A pipeline that runs successfully but produces **wrong or missing data** is a **silent failure**. Data unit tests are the primary defense.

## Tools

(source: Concepts/Software Engineering/Data Unit Test.md)

- **[Great Expectations](https://greatexpectations.io/)** — Python library for declarative expectations.
- **[dbt tests](https://docs.getdbt.com/docs/build/tests)** — built-in for SQL-based pipelines (`unique`, `not_null`, `accepted_values`, custom).
- **[Soda](https://soda.io/)** — YAML-based data quality.
- **[Deequ](https://github.com/awslabs/deequ)** — Spark-based, Scala/Python.
- **[Monte Carlo](https://www.montecarlodata.com/)** — managed observability.
- Custom: pytest, SQL queries.

## When to run tests

- **CI** — schema and contract tests on every PR.
- **Pre-load** — validate input before writing to production tables.
- **Post-load** — validate output before exposing to consumers.
- **Continuous** — periodic data quality scans.

The **Write-Audit-Publish (WAP)** pattern: write to a staging area, run audits (data unit tests), publish only if tests pass. See [[../../guides/testing-data-pipeline|Testing Your Data Pipeline]].

## Test data over code

Data unit tests test the **data**; classic unit tests test the **code**. You need both:

- **Code unit tests** — Python functions, SQL transformations, business logic.
- **Data unit tests** — actual production data in motion.

## Interesting Facts

- The "Write-Audit-Publish" pattern was popularized by **lakeFS** for data versioning.
- **Pipeline debt** (Great Expectations' term) describes the tendency for pipelines to accumulate undocumented assumptions over time.

## Interview Questions

1. **Code unit test** vs **data unit test** — when each.
2. **Silent failure** — what is it and how do you detect?
3. Walk through Write-Audit-Publish.
4. **Great Expectations** vs **dbt tests** — when prefer which?

## Related pages

> [!multi-column]
>
>> [!card] Reliability patterns
>> [[idempotence|Idempotence]]
>
>
>> [!card] Guides
>> [[../../guides/testing-data-pipeline|Testing Your Data Pipeline]], [[../../guides/data-pipeline-best-practices|Pipeline Best Practices]]
>
>
>> [!card] Tools
>> [[../../tools/quality-tools|Data Quality Tools]]

