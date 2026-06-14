---
title: ML Pipeline
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - ML Pipeline
  - Machine Learning Pipeline
  - Model Pipeline
  - Training Pipeline
category: Machine Learning
tags:
  - MachineLearning
  - MLOps
  - Pipelines
  - Production
banner:
publish: true
---

> [!quote]
> *An ML pipeline is the assembly line of machine learning — it turns raw data into deployed models, automatically and repeatably.*
> — MLOps Practitioner

# ML Pipeline

<p class="at-lead">
An ML Pipeline is an end-to-end automated workflow that orchestrates the steps of the machine learning lifecycle: data ingestion, preprocessing, feature engineering, model training, evaluation, validation, and deployment. It is the core infrastructure that scales ML from experimentation to production.
</p>

## Overview

ML pipelines enforce reproducibility, version control, and modularity. Each stage is typically containerised and parameterised, enabling rollback, A/B testing, and retraining on schedule or trigger. Orchestration tools like **Kubeflow Pipelines**, **Airflow**, **MLflow**, and **Vertex AI** provide DAG-based authoring, experiment tracking, and artifact lineage.

Key pipeline patterns include **feature pipelines** (compute and serve features), **training pipelines** (train and validate models), and **inference pipelines** (deploy and serve predictions). CI/CD for ML extends traditional DevOps with data validation, model validation, and canary deployments.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[kubeflow|Kubeflow]], [[airflow|Airflow]], [[mlflow|MLflow]], [[ci-cd-ml|CI/CD for ML]]
>
>> [!card] Parent topic
>> [[mlops|MLOps]]
>
>> [!card] See also
>> [[model-deployment|Model Deployment]], [[model-evaluation|Model Evaluation]], [[feature-engineering|Feature Engineering]]