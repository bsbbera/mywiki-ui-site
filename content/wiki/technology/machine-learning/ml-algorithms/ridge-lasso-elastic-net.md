---
title: Ridge, Lasso & Elastic Net
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Ridge Regression
  - Lasso
  - Elastic Net
  - Regularised Linear Models
  - L1 Regularisation
  - L2 Regularisation
category: Machine Learning
tags:
  - MachineLearning
  - Regression
  - Regularisation
  - FeatureSelection
  - SupervisedLearning
banner:
publish: true
---

> [!quote]
> *Ridge shrinks; Lasso selects; Elastic Net does both. The art is choosing which constraint your data needs.*
> — Statistical Learning Literature

# Ridge, Lasso & Elastic Net

<p class="at-lead">
Ridge, Lasso, and Elastic Net are regularised linear regression techniques that prevent overfitting by penalising large coefficients. Ridge (L2) shrinks coefficients smoothly; Lasso (L1) drives some to exactly zero, performing feature selection; Elastic Net combines both penalties for the best of both worlds.
</p>

## Overview

Regularisation is essential when features are correlated or when the number of features exceeds the number of samples. Ridge handles multicollinearity by distributing coefficient magnitude across correlated predictors. Lasso selects a sparse subset of features, improving interpretability. Elastic Net, with its mixing parameter α, balances these behaviours and is often the default choice for high-dimensional regression in genomics, finance, and text analytics.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[linear-regression]], [[logistic-regression]], [[feature-selection]]
>
>> [!card] Parent topic
>> [[ml-algorithms]]
>
>> [!card] See also
>> [[supervised-learning]], [[cross-validation]]
