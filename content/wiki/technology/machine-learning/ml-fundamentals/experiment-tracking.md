---
title: Experiment Tracking
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Experiment Tracking
  - ML Experiment Tracking
  - MLflow
  - Weights & Biases
category: Machine Learning
tags:
  - MachineLearning
  - MLOps
  - ExperimentTracking
  - Reproducibility
banner: https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "If you can't measure it, you can't improve it."
> <cite>— Peter Drucker</cite>

---

<span class="at-kicker">MLOps · Machine Learning</span>

# Experiment Tracking

<p class="at-lead">
Experiment tracking is the systematic recording of every variable that affects a machine learning experiment — code, data, hyperparameters, metrics, and artifacts — so that results can be reproduced, compared, and audited. Without it, teams lose the ability to answer basic questions like "Which model configuration performed best?" or "Why did yesterday's run outperform today's?"
</p>

<span class="at-stat">reproducibility</span> · <span class="at-stat">comparison</span> · <span class="at-stat">audit trail</span> · <span class="at-mark">turning chaos into science</span>

<span class="at-kicker">Why It Matters</span>

## Overview

> [!info] Why experiment tracking matters
> Modern ML is highly iterative. A single project may spawn hundreds of experiments with subtle variations in learning rate, batch size, or feature engineering. Experiment tracking turns this chaos into a searchable, reproducible ledger.

<span class="at-kicker">What to Track</span>

## The Complete Picture

| Category | Examples |
| --- | --- |
| **Code** | Git commit hash, branch, diff, training script |
| **Data** | Dataset version, size, schema, preprocessing pipeline |
| **Hyperparameters** | Learning rate, batch size, model architecture, random seed |
| **Metrics** | Accuracy, loss, AUC, F1, latency, throughput |
| **Artifacts** | Model weights, plots, confusion matrices, embeddings |
| **Environment** | Python version, package versions, CUDA, hardware spec |
| **Notes** | Hypothesis, observations, decisions, next steps |

> [!tip] The reproducibility trinity
> To reproduce any experiment exactly, you need: (1) the **exact code** at a given commit, (2) the **exact data** version, and (3) the **exact environment** specification. Track all three.

<span class="at-kicker">Popular Tools</span>

## Tool Comparison

> [!grid|cols3]
>
>> [!card|section]
>> ###### MLFLOW
>> ### *MLflow*
>> Open source. Best for end-to-end MLOps with model registry. Unified platform: tracking + projects + models + registry.
>>
>> `mlflow.log_param()` · `mlflow.log_metric()` · `mlflow.log_artifact()`
>
>> [!card|section]
>> ###### WEIGHTS & BIASES
>> ### *Weights & Biases* (W&B)
>> Partially open source. Best for deep learning visualisation. Beautiful live dashboards, hyperparameter sweep visualisation.
>
>> [!card|section]
>> ###### TENSORBOARD
>> ### *TensorBoard*
>> Open source. Best for TensorFlow / PyTorch debugging. Rich embedding projector, histograms, graph visualisation.

> [!grid|cols3]
>
>> [!card|section]
>> ###### SACRED
>> ### *Sacred*
>> Open source. Best for academic reproducibility. Immutable experiments with observers.
>
>> [!card|section]
>> ###### NEPTUNE
>> ### *Neptune*
>> Commercial. Best for team collaboration. Advanced table comparisons, model staging.
>
>> [!card|section]
>> ###### DVC
>> ### *DVC*
>> Open source. Best for data-version centric workflows. Git-like versioning for datasets and pipelines.

<span class="at-kicker">Core Workflows</span>

## What Experiment Tracking Enables

### Compare Runs

Experiment tracking tools provide parallel comparison tables where every hyperparameter and metric is lined up across runs. This makes it trivial to spot which learning rate gave the best validation AUC or whether adding dropout hurt more than it helped.

### Hyperparameter Sweeps

Most tools integrate with optimisation libraries (Optuna, Hyperopt, Ray Tune) to automatically explore a search space and surface the best configuration. Results are logged as a nested set of runs with a parent sweep run.

### Model Registry

Once a run is promoted, it can be versioned and staged (Staging → Production → Archived) in a central model registry. This decouples training from serving and provides an audit trail for every model in production.

<span class="at-kicker">Anti-Patterns</span>

## Common Mistakes to Avoid

> [!warning] Common tracking mistakes
> - **Spreadsheets** — Manual Excel logs become stale the moment someone forgets to update them
> - **Untracked ad-hoc notebooks** — Jupyter notebooks with uncommitted cells produce irreproducible results
> - **Metric-only logging** — Saving only final accuracy without hyperparameters makes comparison impossible
> - **No environment snapshot** — "It worked on my laptop" is not a valid deployment strategy

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] MLOps Lifecycle
>> [[model-monitoring|Model Monitoring]] · [[../mlops/model-deployment|Model Deployment]] · [[model-monitoring|Data Drift]]
>
>> [!card] Training
>> [[../mlops/hyperparameter-tuning|Hyperparameter Tuning]] · [[cross-validation|Cross-Validation]] · [[feature-engineering|Feature Engineering]]
>
>> [!card] Fundamentals
>> [[machine-learning-fundamentals|ML Fundamentals]] · [[data-leakage|Data Leakage]]
