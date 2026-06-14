---
title: ETL
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - ETL
  - Extract Transform Load
  - Data Integration
  - Batch ETL
category: Data Engineering
tags:
  - DataEngineering
  - ETL
  - DataPipeline
  - Integration
  - Warehousing
banner:
publish: true
---

> [!quote]
> *ETL is the plumbing of the data world — invisible when it works, catastrophic when it doesn't.*
> — Data Engineering Wisdom

# ETL

<p class="at-lead">
ETL (Extract, Transform, Load) is the process of moving data from source systems into a target data warehouse or lake. It involves extracting raw data, applying cleansing and transformation logic, and loading the results into structured tables ready for analytics and reporting.
</p>

## Overview

Traditional ETL processes data in batches, typically overnight, using tools like Informatica, Talend, or custom Spark jobs. Modern cloud-native ETL leverages managed services like Dataflow, Dataproc, and dbt to handle streaming and batch pipelines with version control, testing, and observability. The rise of ELT (Extract, Load, Transform) shifts transformation to the warehouse, exploiting the power of BigQuery, Snowflake, and Redshift for scalable SQL-based processing.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[data-pipeline]], [[data-warehousing]], [[dataflow]]
>
>> [!card] Parent topic
>> [[data-engineering]]
>
>> [!card] See also
>> [[change-data-capture]], [[workflow-orchestration]], [[composer]]
