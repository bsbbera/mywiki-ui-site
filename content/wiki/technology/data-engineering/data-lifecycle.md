---
title: Data Lifecycle
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Data Lifecycle
  - Data Life Cycle
  - Data Lifecycle Management
category: Data Engineering
tags:
  - DataEngineering
  - DataManagement
  - Governance
  - Lifecycle
banner:
publish: true
---

> [!quote]
> *Data has a lifecycle just like any other asset — it is created, stored, used, shared, archived, and eventually destroyed.*
> — Data Management Body of Knowledge (DAMA-DMBOK)

# Data Lifecycle

<p class="at-lead">
The Data Lifecycle describes the stages data passes through from creation and acquisition through processing, storage, usage, sharing, archiving, and eventual disposal. Understanding this lifecycle is essential for governance, compliance, cost optimisation, and security.
</p>

## Overview

Typical lifecycle stages include: **Create/Acquire** (ingestion from sources), **Store** (databases, lakes, warehouses), **Process** (ETL, transformation, aggregation), **Analyse** (BI, ML, reporting), **Share** (cross-team, external), **Archive** (cold storage for compliance), and **Destroy** (secure deletion per retention policies).

Each stage carries distinct governance, security, and cost implications. For example, raw data may have relaxed access controls but high storage costs, while production analytics data requires strict quality, lineage, and privacy safeguards.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[data-governance|Data Governance]], [[data-management|Data Management]], [[data-pipeline|Data Pipeline]]
>
>> [!card] Parent topic
>> [[data-engineering|Data Engineering]]
>
>> [!card] See also
>> [[data-lake|Data Lake]], [[data-warehouse|Data Warehouse]], [[data-quality|Data Quality]]