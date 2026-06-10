---
title: Bias–Variance Tradeoff
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Bias-Variance Tradeoff
  - Bias Variance
  - Overfitting
  - Underfitting
category: Statistics
tags:
  - Statistics
  - MachineLearning
  - ModelEvaluation
  - DataScience
banner: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "The test of all knowledge is experiment."
> <cite>— Richard Feynman</cite>

---

<span class="at-kicker">Model Theory · Generalisation</span>

# Bias–Variance Tradeoff

<p class="at-lead">
A fundamental theoretical result in statistics and machine learning: a model's generalisation error can be decomposed into three components — bias, variance, and irreducible error. Understanding this decomposition is the key to diagnosing underfitting and overfitting.
</p>

$$\text{Total Error} = \text{Bias}^2 + \text{Variance} + \text{Irreducible Error}$$

<span class="at-stat">underfitting</span> &nbsp;·&nbsp; <span class="at-stat">overfitting</span> &nbsp;·&nbsp; <span class="at-stat">irreducible error</span> &nbsp;·&nbsp; <span class="at-mark">find the sweet spot between complexity and generalisation</span>

<span class="at-kicker">The Three Error Components</span>

## The three error components

> [!grid|cols3]
>
>> [!card|section]
>> ###### BIAS
>> ### High-*Bias* Models
>> Error due to **wrong assumptions** built into the model. A high-bias model oversimplifies the problem — it cannot model the training data well. Result: **underfitting** — poor performance on both training and test data.
>
>> [!card|section]
>> ###### VARIANCE
>> ### High-*Variance* Models
>> Error caused by the model's **sensitivity to small fluctuations** in the training data. Too many degrees of freedom — fits training data perfectly but fails to generalise. Result: **overfitting**.
>
>> [!card|section]
>> ###### IRREDUCIBLE
>> ### *Irreducible* Error
>> Error due to **noise in the data itself** — cannot be reduced by any model. Caused by unmeasured variables, labelling errors, or inherent randomness. Can be reduced by cleaning data, never eliminated.

---

<span class="at-kicker">The Tradeoff</span>

## The tradeoff

| Model complexity | Bias | Variance | Result |
| --- | --- | --- | --- |
| Too simple | High | Low | Underfitting |
| Just right | Low | Low | Good generalisation |
| Too complex | Low | High | Overfitting |

> [!info] The fundamental tension
> Increasing model complexity **reduces bias but increases variance**. Decreasing complexity **reduces variance but increases bias**. The goal is to find the sweet spot.

> [!example] Polynomial regression — seeing the tradeoff in action
> True function: $y = \sin(2\pi x) + \text{noise}$. We fit polynomials of degree 1, 4, and 15 to 10 noisy samples.
>
> | Degree | Train MSE | Description |
> | --- | --- | --- |
> | 1 | ~0.50 | **High bias** — straight line misses the sine curve entirely (underfitting) |
> | 4 | ~0.05 | **Sweet spot** — captures the pattern without memorising noise |
> | 15 | ~0.00 | **High variance** — wiggles through every training point; will fail on new data (overfitting) |
>
> The visual pattern is clear: low-degree polynomials are too rigid, high-degree polynomials are too flexible, and the middle ground captures the true relationship.

---

<span class="at-kicker">Practical Levers</span>

## Practical levers

| To reduce **bias** | To reduce **variance** |
| --- | --- |
| More complex model | Simpler model / regularisation (L1/L2) |
| More features | Feature selection / dimensionality reduction |
| Remove model constraints | More training data |
| Boosting | Bagging / dropout |

> [!tip] Choosing the right lever
> - If training and validation error are both high → reduce bias (model is too simple)
> - If training error is low but validation error is high → reduce variance (model is overfitting)

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. Define bias and variance in your own words.
2. What happens to bias and variance as you increase model complexity?
3. A model has 99% training accuracy and 60% test accuracy. What is the likely problem?
4. How do ensemble methods (bagging, boosting) address bias and variance?
5. Can you eliminate irreducible error? Why or why not?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Statistics
>> [[descriptive-statistics|Descriptive Statistics]], [[probability-distributions|Probability Distributions]]
>
>> [!card] Model Evaluation
>> [[../ml-fundamentals/evaluation-metrics|Evaluation Metrics]], [[../ml-fundamentals/cross-validation|Cross Validation]]
>
>> [!card] Regularisation & Ensembles
>> [[../ml-algorithms/ridge-lasso-elastic-net|Ridge, Lasso & Elastic Net]], [[../ml-algorithms/ensemble-learning|Ensemble Learning]], [[../ml-algorithms/random-forest|Random Forest]]
