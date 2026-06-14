---
title: Data Quality
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Data Quality
  - Data Validation
  - Data Integrity
category: Data Engineering
tags:
  - DataEngineering
  - DataQuality
  - DataGovernance
  - Validation
banner:
publish: true
---

> [!quote]
> *Data quality is the degree to which data is accurate, complete, timely, and fit for its intended purpose.*
> — Data Management Body of Knowledge (DAMA-DMBOK)

# Data Quality

<p class="at-lead">
Data Quality encompasses the processes, tools, and frameworks used to ensure that data is accurate, complete, consistent, timely, and valid throughout its lifecycle. Poor data quality costs organisations billions in failed decisions, rework, and compliance penalties.
</p>

## Overview

Data quality dimensions include **accuracy** (correctness), **completeness** (no missing values), **consistency** (uniform formats), **timeliness** (up-to-date), and **validity** (conforms to schema). Common issues include duplicates, nulls, schema drift, type mismatches, and stale data.

Modern data quality tools (Great Expectations, Soda, dbt tests, Monte Carlo) embed validation directly into pipelines, enabling automated anomaly detection, lineage tracking, and SLAs. Data quality is inseparable from data governance and observability.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[data-governance|Data Governance]], [[data-catalog|Data Catalog]], [[data-management|Data Management]]
>
>> [!card] Parent topic
>> [[data-engineering|Data Engineering]]
>
>> [!card] See also
>> [[data-pipeline|Data Pipeline]], [[data-warehousing|Data Warehousing]], [[monitoring|Monitoring]]