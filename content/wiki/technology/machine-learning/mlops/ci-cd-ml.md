---
title: CI/CD for Machine Learning
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Continuous Integration
  - Continuous Deployment
  - CI/CD ML
  - MLOps CI/CD
  - ML Pipeline Automation
category: Machine Learning
tags:
  - MachineLearning
  - MLOps
  - DevOps
  - CI/CD
  - Automation
banner: https://images.unsplash.com/photo-1667372393119-c8e0b71e91bc?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Continuous Integration is not about tools. It's about integrating early and often, with quality gates at every step."

---

<span class="at-kicker">MLOps · Automation</span>

# CI/CD for Machine Learning

<p class="at-lead">
Continuous Integration and Continuous Deployment (CI/CD) for machine learning extends traditional software CI/CD with ML-specific stages: data validation, model training, evaluation against baselines, and conditional deployment. The goal is automated, reproducible, and validated delivery of ML models from code commit to production serving.
</p>

<span class="at-stat">build</span> &nbsp;·&nbsp; <span class="at-stat">test</span> &nbsp;·&nbsp; <span class="at-stat">deploy</span> &nbsp;·&nbsp; <span class="at-mark">automated ML delivery</span>

<span class="at-kicker">ML CI/CD Pipeline</span>

## The Extended Pipeline

Traditional software CI/CD stops at code and artifact deployment. ML CI/CD extends this to handle data, models, and continuous retraining:

```
Code Change
    │
    ▼
┌─────────────┐
│   Build     │  ← Environment setup, dependency install
└─────────────┘
    │
    ▼
┌─────────────┐
│ Data Tests  │  ← Schema validation, drift detection
└─────────────┘
    │
    ▼
┌─────────────┐
│   Train     │  ← Model training, experiment tracking
└─────────────┘
    │
    ▼
┌─────────────┐
│  Evaluate   │  ← Model validation vs baseline
└─────────────┘
    │
    ▼
┌─────────────┐
│   Deploy    │  ← Model registry, serving update
└─────────────┘
    │
    ▼
┌─────────────┐
│   Monitor   │  ← Performance tracking, drift detection
└─────────────┘
    │
    ▼
 Retrigger? (feedback loop)
```

---

<span class="at-kicker">Pipeline Stages</span>

## Stage-by-Stage Breakdown

> [!grid|cols2]
>
>> [!card|hero dark spanfull]
>> ###### BUILD
>> ### 1. *Build* Stage
>> **Purpose**: Reproducible environment setup
>> 
>> - Install dependencies (requirements.txt, poetry.lock)
>> - Build Docker images with model dependencies
>> - Version code and configuration
>> - Cache datasets for training
>> 
>> **Quality Gates**: Dependency security scan, image size checks
>
>> [!card|hero dark spanfull]
>> ###### DATA VALIDATION
>> ### 2. *Data Validation* Stage
>> **Purpose**: Ensure training data quality
>> 
>> - Schema validation (columns, types)
>> - Drift detection vs training distribution
>> - Missing value checks
>> - Data freshness validation
>> 
>> **Quality Gates**: No schema changes without approval, drift within thresholds
>
>> [!card|hero dark spanfull]
>> ###### TRAIN
>> ### 3. *Train* Stage
>> **Purpose**: Reproducible model training
>> 
>> - Execute training pipeline
>> - Log hyperparameters and metrics
>> - Track experiments (MLflow, Weights & Biases)
>> - Version datasets used
>> 
>> **Quality Gates**: Training completes without error, metrics logged
>
>> [!card|hero dark spanfull]
>> ###### EVALUATE
>> ### 4. *Evaluate* Stage
>> **Purpose**: Model validation and comparison
>> 
>> - Compute test set metrics
>> - Compare to production baseline
>> - Fairness and bias checks
>> - Error analysis on slices
>> 
>> **Quality Gates**: Metrics exceed thresholds, no regression vs baseline
>
>> [!card|hero dark spanfull]
>> ###### DEPLOY
>> ### 5. *Deploy* Stage
>> **Purpose**: Safe model release
>> 
>> - Register model in model registry
>> - Create deployment artifact
>> - Execute deployment pattern (canary/blue-green)
>> - Update serving infrastructure
>> 
>> **Quality Gates**: Health checks pass, rollback ready
>
>> [!card|hero dark spanfull]
>> ###### MONITOR
>> ### 6. *Monitor* Stage
>> **Purpose**: Production validation
>> 
>> - Track prediction distributions
>> - Monitor latency and errors
>> - Detect concept/data drift
>> - Collect feedback for retraining
>> 
>> **Quality Gates**: Automated rollback on degradation, retraining triggers

---

<span class="at-kicker">Automation Levels</span>

## CI/CD Maturity for ML

| Level | Description | Automation |
|-------|-------------|------------|
| **1. Manual** | Jupyter notebooks, manual training, handoff to engineering | None |
| **2. DevOps Only** | Code CI/CD, but training manual | Code builds, tests automated |
| **3. Automated Training** | Automated retraining on schedule or trigger | Data → model artifact automated |
| **4. Automated Deployment** | Models deploy automatically after validation | Full training → production |
| **5. Full CI/CD/CT** | Continuous integration, deployment, AND training | Self-healing, auto-retraining systems |

### Continuous Training (CT)

> [!info] CI/CD/CT distinction
> - **CI**: Integrate code changes automatically
> - **CD**: Deploy validated models automatically
> - **CT**: Retrain models automatically when triggered

Retraining triggers:
- **Schedule**: Weekly, monthly retraining
- **Performance**: Accuracy drops below threshold
- **Drift**: Data or concept drift detected
- **Data**: New labeled data available

---

<span class="at-kicker">Tools & Infrastructure</span>

## CI/CD Tooling for ML

| Category | Tools | Purpose |
|----------|-------|---------|
| **Orchestration** | Jenkins, GitHub Actions, GitLab CI, CircleCI | Pipeline execution |
| **ML Pipelines** | Kubeflow Pipelines, Airflow, Prefect, Dagster | ML-specific workflows |
| **Experiment Tracking** | MLflow, Weights & Biases, Neptune | Metrics, artifacts, lineage |
| **Model Registry** | MLflow Model Registry, Vertex AI Model Registry | Model versioning, staging |
| **Feature Store** | Feast, Tecton, SageMaker Feature Store | Feature consistency |
| **Monitoring** | Evidently, WhyLabs, Fiddler | Production model health |

### Example: GitHub Actions for ML

```yaml
# .github/workflows/ml-pipeline.yml
name: ML Pipeline

on:
  push:
    branches: [main]
  schedule:
    - cron: '0 0 * * 0'  # Weekly retraining

jobs:
  data-validation:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Validate Data
        run: |
          python -m pytest tests/data_validation/
          python scripts/check_drift.py

  train:
    needs: data-validation
    runs-on: ubuntu-latest
    steps:
      - name: Train Model
        run: python train.py
      - name: Log Metrics
        run: mlflow log ...

  evaluate:
    needs: train
    runs-on: ubuntu-latest
    steps:
      - name: Evaluate
        run: python evaluate.py --baseline production
      - name: Check Thresholds
        run: python check_metrics.py

  deploy:
    needs: evaluate
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Staging
        run: python deploy.py --env staging
      - name: Integration Tests
        run: pytest tests/integration/
      - name: Deploy to Production
        run: python deploy.py --env production --canary
```

---

<span class="at-kicker">Best Practices</span>

## CI/CD Best Practices for ML

> [!tip] Reproducibility
> - Pin all dependencies (requirements.txt with hashes)
> - Version datasets (DVC, lakeFS)
> - Set random seeds for training
> - Document environment (Docker images)

> [!tip] Testing
> - Unit tests for feature engineering code
> - Integration tests for pipeline components
> - Model quality tests (accuracy thresholds)
> - Infrastructure tests (serving health checks)

> [!tip] Validation
> - Always compare to production baseline
> - Test on holdout set that mirrors production
> - Validate fairness metrics across slices
> - Check for data leakage in features

> [!tip] Deployment Safety
> - Never deploy without rollback plan
> - Use canary/shadow for model changes
> - Monitor for 24-48 hours before full promotion
- Alert on any metric degradation

---

<span class="at-kicker">Interview Questions</span>

## Interview Questions

1. How does CI/CD for ML differ from traditional software CI/CD?
2. What are the six stages of an ML CI/CD pipeline?
3. What is Continuous Training and when would you trigger it?
4. How do you ensure reproducibility in ML pipelines?
5. What quality gates would you set for model deployment?
6. How do you handle data versioning in CI/CD?
7. What would cause an automatic rollback in production?

---

## Related pages

> [!grid]
>
>> [!card] MLOps Core
>> [[mlops|MLOps Hub]] · [[deployment-patterns|Deployment Patterns]] · [[model-lifecycle|Model Lifecycle]]
>
>> [!card] Infrastructure
>> [[kubeflow|Kubeflow]] · [[kubernetes|Kubernetes]] · [[docker|Docker]]
>
>> [!card] Quality
>> [[../ml-fundamentals/concept-drift|Drift Detection]] · [[monitoring|ML Monitoring]]
>
>> [!card] Platforms
>> [[../../cloud/gcp/vertex-ai|Vertex AI]] · [[../../cloud/aws/sagemaker|SageMaker]]
