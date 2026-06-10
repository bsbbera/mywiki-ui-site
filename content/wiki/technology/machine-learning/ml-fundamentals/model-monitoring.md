---
title: Model Monitoring
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Model Monitoring
  - Concept Drift
  - Data Drift
  - Model Degradation
  - Champion Challenger
category: Machine Learning
tags:
  - MachineLearning
  - MLOps
  - Monitoring
  - ModelGovernance
banner: https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "In God we trust; all others must bring data."
> <cite>— W. Edwards Deming</cite>

---

<span class="at-kicker">MLOps · Machine Learning</span>

# Model Monitoring

<p class="at-lead">
Model monitoring is the ongoing process of tracking model performance in production to detect degradation, drift, and unexpected behaviour before they impact business outcomes. A model that performed well at launch will degrade over time — monitoring is how you know when to retrain, and champion–challenger testing is how you safely deploy improvements.
</p>

<span class="at-stat">data drift</span> · <span class="at-stat">concept drift</span> · <span class="at-stat">champion-challenger</span> · <span class="at-mark">production ML at scale</span>

<span class="at-kicker">Types of Degradation</span>

## Understanding Model Decay

| Type | Speed | Cause |
| --- | --- | --- |
| **Data drift** | Gradual | Feature distribution changes over time |
| **Concept drift** | Gradual | Relationship between features and target changes |
| **System failures** | Sudden | Bad sensor, software update, network loss |

> [!info] Drift vs. failure
> Drift is insidious — it degrades performance slowly, often going unnoticed until business metrics suffer. System failures are acute and trigger immediate alerts. Your monitoring strategy must handle both: statistical drift tests for the former, hard alerting thresholds for the latter.

<span class="at-kicker">Data Drift</span>

## When Input Distributions Shift

> In data drift, we must correct for **X** — the predictors.

When the underlying feature distribution shifts, the model's inputs no longer match what it was trained on. Also called **feature drift**, **population drift**, or **covariate shift**.

### Causes

| Data changes | World changes |
| --- | --- |
| Trend and seasonality | Fashion / consumer behaviour changes |
| Feature distribution shifts | Scope and process changes |
| Relative feature importance changes | Competitor actions |
| | Business expansion to new geographies |

### Example

A computer vision model trained on low-resolution (1.2 MP) mobile images degrades when newer phones with 12 MP cameras become prevalent — the input distribution has shifted, even though the labelling task is unchanged.

> [!example] Detecting data drift
> Monitor feature distributions using statistical tests: **Kolmogorov-Smirnov** (continuous), **Chi-squared** (categorical), or **Population Stability Index (PSI)**. PSI > 0.2 conventionally signals significant shift.

<span class="at-kicker">Concept Drift</span>

## When Relationships Change

> In concept drift, we must correct for **y** — the target.

When the statistical relationship between features and the target changes over time. The model's learned patterns no longer reflect reality.

### Examples

- **Competitors launch new products** — consumer behaviour changes; sales forecasting models must adapt
- **Macroeconomic conditions evolve** — credit risk is redefined as defaults rise; scoring models need updating
- **Mechanical wear** — manufacturing quality prediction models drift as equipment ages differently

### Causes

| World changes |
| --- |
| Fashion and trend shifts |
| Scope and process changes |
| Competitor actions |
| Business expansion to new geographies |

> [!warning] Concept drift is harder to detect
> Data drift is detectable from input features alone — no labels needed. Concept drift requires ground-truth labels, which may be delayed (e.g., loan defaults are not known for months). Use proxy signals (churn, complaints, re-predictions) to detect early.

<span class="at-kicker">Production Issues</span>

## Training-Serving Skew & Failures

> [!grid|cols2]
>
>> [!card|section]
>> ###### TRAINING-SERVING SKEW
>> ### Training-Serving *Skew*
>> Training data and production data differ from deployment. Often caused by:
>> - Different preprocessing pipelines in training vs. serving
>> - Sampling bias in training dataset
>> - Data collection changes between training and production
>>
>> > [!tip] Prevention: shared transformation code
>> > Use the same transformation code — via `Pipeline`, feature store, or shared library — for both training and serving.
>
>> [!card|section]
>> ###### SUDDEN FAILURES
>> ### *Sudden* Failures
>> | Data collection | Systems |
>> | --- | --- |
>> | Bad sensor / camera | Bad software update |
>> | Bad log data | Loss of network connectivity |
>> | Moved sensors | System downtime |
>>
>> > [!warning] Sudden failures require rollback
>> > Drift warrants gradual retraining. Sudden failures (sensor offline) require immediate alerting and rapid rollback. Keep previous model versions deployed and switchable.

<span class="at-kicker">Safe Deployment</span>

## Champion–Challenger Pattern

A production testing pattern where a **champion** (current best model) is continuously challenged by **challenger** models.

- Similar to [[../statistics/ab-testing|A/B testing]] but focused on model comparison
- Enables experimentation with new architectures, retraining schedules, or feature sets
- Decision logic routes a fraction of live traffic to the challenger while monitoring key metrics

> [!note] Champion replacement criteria
> The challenger only replaces the champion if it demonstrates **statistically significant** improvement on live traffic — not just offline metrics. Use a holdout period to account for novelty effects and seasonality.

<span class="at-kicker">Best Practices</span>

## Monitoring Checklist

- [ ] Track **prediction drift** — distribution of model outputs over time
- [ ] Track **feature drift** — distribution of input features over time
- [ ] Track **performance drift** — accuracy/loss on a held-out labelled set
- [ ] Set up **alerts** for sudden metric drops (hard thresholds)
- [ ] Schedule **periodic retraining** (time-based or triggered by drift)
- [ ] Maintain a **champion–challenger** pipeline for safe model updates

<span class="at-kicker">Knowledge Check</span>

## Interview questions

1. What is the difference between data drift and concept drift?
2. Give an example of concept drift in a real-world system.
3. What is training-serving skew, and how do you prevent it?
4. How does champion–challenger differ from A/B testing?
5. What metrics would you monitor for a model in production?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] MLOps
>> [[../mlops/mlops|MLOps]] · [[../mlops/ml-pipeline|ML Pipelines]] · [[../mlops/model-evaluation|Model Evaluation]]
>
>> [!card] Statistics
>> [[../statistics/ab-testing|A/B Testing]] · [[../statistics/sampling|Sampling]]
>
>> [!card] Fundamentals
>> [[evaluation-metrics|Evaluation Metrics]] · [[cross-validation|Cross Validation]]
