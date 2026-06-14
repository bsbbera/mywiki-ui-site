---
title: Model Evaluation
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Model Evaluation
  - ML Evaluation
  - Model Validation
  - Performance Metrics
category: Machine Learning
tags:
  - MachineLearning
  - MLOps
  - Evaluation
  - Metrics
banner:
publish: true
---

> [!quote]
> *You can't improve what you don't measure — and in machine learning, choosing the right metric is as critical as choosing the right model.*
> — Machine Learning Practitioner

# Model Evaluation

<p class="at-lead">
Model Evaluation is the systematic process of assessing how well a machine learning model performs on unseen data. It spans classification metrics, regression metrics, ranking metrics, and statistical tests, each tailored to different problem types and business constraints.
</p>

## Overview

For classification, common metrics include **accuracy**, **precision**, **recall**, **F1-score**, **ROC-AUC**, and **log-loss**. For regression, **MSE**, **RMSE**, **MAE**, and **R²** dominate. Beyond point estimates, robust evaluation requires proper **train-test splits**, **cross-validation**, and analysis of **confusion matrices**, **calibration curves**, and **error distributions**.

Evaluation must align with business goals: a fraud-detection system may prioritise recall over precision, while an ad-ranking system optimises for click-through rate. Modern MLOps extends evaluation to **online A/B tests**, **model monitoring**, and **drift detection** in production.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[cross-entropy|Cross-Entropy]], [[ab-testing|A/B Testing]], [[hypothesis-testing|Hypothesis Testing]]
>
>> [!card] Parent topic
>> [[mlops|MLOps]]
>
>> [!card] See also
>> [[model-deployment|Model Deployment]], [[monitoring|Monitoring]], [[bias-variance-tradeoff|Bias-Variance Tradeoff]]