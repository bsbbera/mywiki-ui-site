---
title: Data Leakage
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Data Leakage
  - Data Leak
  - Target Leakage
  - Leaky Predictor
category: Machine Learning
tags:
  - MachineLearning
  - MLOps
  - DataQuality
  - FeatureEngineering
banner: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "The data that you have is not the data that you want, and the data that you need is not the data that you have."
> <cite>— Unknown</cite>

---

<span class="at-kicker">Data Integrity · Machine Learning</span>

# Data Leakage

<p class="at-lead">
Data leakage is the introduction of information into the training pipeline that would not be available at prediction time in production. It creates an unrealistic bridge between training data and the target variable, causing models to score deceptively well in validation while failing catastrophically when deployed.
</p>

<span class="at-stat">target leakage</span> · <span class="at-stat">leaky validation</span> · <span class="at-stat">future information</span> · <span class="at-mark">the silent killer of ML models</span>

<span class="at-kicker">The Leakage Signature</span>

## Overview

> [!info] The leakage signature
> If a model achieves near-perfect accuracy during cross-validation but plummets in production, data leakage is the prime suspect. The model has not learned generalisable patterns — it has learned to cheat using future or hidden information.

Data leakage is one of the most common and dangerous mistakes in ML practice. A model with leakage will perform brilliantly in development and fail catastrophically in production — often discovered only after costly deployment.

<span class="at-kicker">Types of Leakage</span>

## Leaky Predictors

A leaky predictor is a feature that contains information derived from the target or from data that will not exist when the model makes real predictions.

> [!example] Common leaky predictor scenarios
> - **Future information in past timestamps** — Including next-day stock prices as a feature when predicting today's movement
> - **ID leakage** — Row IDs that happen to correlate with the target because of database insertion order (e.g., patients with higher IDs were treated with a newer, more effective drug)
> - **Target-derived features** — Creating a feature by normalising against the global mean of the target, or encoding the target into a categorical mapping
> - **Data from the test set** — Computing feature statistics (mean, standard deviation) on the entire dataset before splitting into train and test

> [!tip] How to detect leaky predictors
> If a model is suspiciously accurate — near 100% AUC on a hard problem — investigate every feature for potential leakage. Perform feature importance analysis and scrutinise any feature with disproportionate importance.

## Leaky Validation Strategies

Leakage can also creep in through the way validation is structured, especially when preprocessing is applied before the train-test split.

> [!warning] The standardisation trap
> If you fit a `StandardScaler` on the full dataset and then split, the scaler has learned the mean and standard deviation of the test set. Those statistics leak into the training features. Always fit transformers **only on training data** and apply the fitted transformer to validation and test.

| Safe practice | Risky practice |
| --- | --- |
| Fit scaler on train; transform train/val/test | Fit scaler on all data; then split |
| Use cross-validation inside a pipeline | Pre-process, then cross-validate |
| Stratify splits by target distribution | Random split on time-series data |
| Hold out a temporal test set for time data | Shuffle time-series before splitting |

<span class="at-kicker">Detection & Prevention</span>

## Detecting Leakage

> [!tip] Red flags to watch for
> - A model is "too good to be true" on validation but poor in A/B testing
> - A single feature has extremely high importance — investigate whether it is a proxy for the target
> - Features with names suspiciously close to the target (e.g., `revenue_next_month` when predicting `churn`)
> - Correlation matrix shows a feature with near-perfect correlation to the target

## Prevention Checklist

1. **Split first, then preprocess** — Always partition train/validation/test before any transformation
2. **Use pipelines** — Scikit-learn `Pipeline` guarantees every preprocessing step is fit only on training folds during cross-validation
3. **Audit temporal data** — For time-series, use a **time-based split** (train on older data, validate on newer data)
4. **Review feature provenance** — Trace every feature back to its source and ask: "Will this exact value exist when the model scores a new row?"
5. **Hold-out A/B test** — No amount of validation hygiene replaces a real production shadow test

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Data Quality
>> [[data-cleaning|Data Cleaning]] · [[feature-engineering|Feature Engineering]] · [[outlier-detection|Outlier Detection]]
>
>> [!card] Validation
>> [[cross-validation|Cross-Validation]] · [[model-monitoring|Model Monitoring]]
>
>> [!card] MLOps
>> [[experiment-tracking|Experiment Tracking]] · [[../mlops/model-deployment|Model Deployment]]
