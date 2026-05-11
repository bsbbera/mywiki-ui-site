---
title: Workflow Orchestrators Overview
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Orchestrators
  - Orchestration Tools
category: Computer Science
tags:
  - DataEngineering
  - Orchestration
  - Tools
banner:
dg-publish: true
publish: true
---
---

Catalog of workflow orchestration tools used to schedule, coordinate, and observe data pipelines (source: Tools/Workflow Orchestrators/*.md).

> See [[../concepts/data-processing/workflow-orchestration|Workflow Orchestration]] for the conceptual treatment.

## Open-source orchestrators

### Apache Airflow

[Airflow](https://airflow.apache.org/) — the **dominant** open-source orchestrator. Programmatically develop, schedule, and orchestrate batch workflows. DAGs in Python. Most commonly used to schedule **Python and SQL scripts**, but flexible enough for any pipeline (source: Tools/Workflow Orchestrators/Apache Airflow.md).

- **Airflow as a service**: managed offerings include Cloud Composer (GCP), MWAA (AWS), Astronomer.
- **Strengths**: huge ecosystem of operators (1000+), big community.
- **Weaknesses**: state-management quirks, scheduler bottlenecks at scale, opinionated patterns from 2014.

### Dagster

Modern Python orchestrator with **first-class assets**. Treats data as assets the system materializes; cleaner mental model than tasks. Strong typing, lineage, observability built in.

### Prefect

Improved Airflow ergonomics. Hybrid execution (workers run anywhere; control plane managed). Prefect 2.0 is a complete rewrite — more flexible than Airflow.

### Mage

Newer; targets data engineers + analysts. Combines pipelines, notebooks, and dashboards. Friendly learning curve.

### Kestra

Declarative YAML-based; multi-language (not Python-only). Plugin-based architecture.

### Flyte

Kubernetes-native; Python typed. From Lyft. Strong ML/data hybrid.

## Cloud-managed orchestrators

### GCP Cloud Composer

Managed Airflow on GCP. Premium edition adds Composer 2 architecture (separate scheduler + worker pools), and Composer 3 (autopilot mode).

### Amazon MWAA (Managed Workflows for Apache Airflow)

AWS's managed Airflow. Auto-scales workers; integrates with VPC + IAM.

### AWS Step Functions

State-machine orchestrator for AWS services. Visual workflow design, deep AWS integration. Different mental model from Airflow — state-machine vs DAG.

### Azure Data Factory

Visual + code-first ETL/orchestration on Azure. Integrates with Synapse, Databricks, on-prem via SHIR.

## Decision matrix

| Pick | When |
| --- | --- |
| **Airflow** | Industry standard; large team; needs operator ecosystem |
| **Cloud Composer** | All-in on GCP, want managed Airflow |
| **MWAA** | All-in on AWS, want managed Airflow |
| **Step Functions** | AWS-native serverless state machines |
| **Dagster** | Asset-first thinking; modern Python; software-eng culture |
| **Prefect** | Hybrid execution; cleaner Airflow alternative |
| **Mage** | Smaller team; want notebooks + pipelines together |
| **Azure Data Factory** | All-in on Azure; mostly SQL transforms |
| **Flyte** | K8s-native; strong typing; ML pipelines |
| **dbt + cron + Slack** | When the work is mostly SQL transforms in a warehouse |

## Modern patterns

- **Asset-based** (Dagster) — declare what should exist; orchestrator decides what to run.
- **Event-driven** — trigger on file landing, message arrival.
- **Hybrid execution** (Prefect) — control plane managed, workers wherever.
- **Lineage-emitting** — OpenLineage events from any orchestrator.

## Anti-patterns

- 🚫 **Airflow as a Python execution engine** — heavy compute belongs in Spark/Dataflow, not the orchestrator.
- 🚫 **One mega-DAG** — split by domain.
- 🚫 **Hardcoded credentials/paths** — use Variables, Connections, secrets manager.

## Related pages

> [!multi-column]
>
>> [!card] Data Processing
>> [[../concepts/data-processing/workflow-orchestration|Workflow Orchestration]]
>
>
>> [!card] Software Engineering
>> [[../concepts/software-engineering/idempotence|Idempotence]]
>
>
>> [!card] Data Engineering
>> [[../data-pipeline|Data Pipeline]]
>
>
>> [!card] Sister catalogs
>> [[processing-tools|Processing Tools]], [[ingestion-tools|Ingestion Tools]]
>
>
>> [!card] Guides
>> [[../guides/data-pipeline-best-practices|Pipeline Best Practices]], [[../guides/testing-data-pipeline|Testing Data Pipeline]]

