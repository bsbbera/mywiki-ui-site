---
title: Apache Airflow
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Apache Airflow
  - Airflow
  - Workflow Orchestration
category: Data Engineering
tags:
  - DataEngineering
  - Orchestration
  - Apache
  - Pipelines
  - Python
banner:
publish: true
---

> [!quote]
> *Airflow is a platform to programmatically author, schedule, and monitor workflows.*
> — Apache Airflow Documentation

# Apache Airflow

<p class="at-lead">
Apache Airflow is an open-source workflow orchestration platform written in Python. It allows data engineers to define complex data pipelines as directed acyclic graphs (DAGs) of tasks, with built-in scheduling, dependency management, retries, and observability.
</p>

## Overview

Airflow represents workflows as Python code, enabling version control, testing, and collaboration. DAGs are composed of operators (Python, Bash, SQL, etc.) that execute tasks. The scheduler triggers tasks based on dependencies and time, while the metadata database tracks state and history.

Airflow is widely adopted in data engineering for ETL pipelines, ML training workflows, and cloud resource management. Alternatives include Prefect, Dagster, and managed services like Cloud Composer (GCP) and MWAA (AWS).

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[prefect|Prefect]], [[dagster|Dagster]], [[workflow-orchestration|Workflow Orchestration]]
>
>> [!card] Parent topic
>> [[data-engineering|Data Engineering]]
>
>> [!card] See also
>> [[data-pipeline|Data Pipeline]], [[etl|ETL]], [[kubernetes|Kubernetes]]