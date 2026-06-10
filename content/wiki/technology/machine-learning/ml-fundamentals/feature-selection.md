---
title: Feature Selection
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Feature Selection
  - Filter Methods
  - Wrapper Methods
  - Embedded Methods
  - Predictive Power Score
category: Machine Learning
tags:
  - MachineLearning
  - FeatureEngineering
  - DataScience
banner: https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "In data science as in life, less is often more — the right features matter far more than all the features."
> <cite>— Unknown</cite>

---

<span class="at-kicker">Data Preparation · Machine Learning</span>

# Feature Selection

<p class="at-lead">
Feature selection is the process of choosing a subset of relevant features for use in model construction. It reduces storage, I/O, and training costs, and helps avoid the curse of dimensionality — where too many features degrade model performance by making the high-dimensional space increasingly sparse.
</p>

<span class="at-stat">filter</span> · <span class="at-stat">wrapper</span> · <span class="at-stat">embedded</span> · <span class="at-mark">the art of knowing what to leave out</span>

<span class="at-kicker">How It Fits</span>

## Overview

The typical data science pipeline places feature selection after initial preprocessing but before model training:

1. Feature engineering
2. Missing value treatment
3. Normalisation / scaling
4. Imbalanced dataset handling
5. **Feature selection**
6. Model training

### Two Paradigms

| Paradigm | Uses target variable? | Goal |
| --- | --- | --- |
| **Unsupervised** | No | Remove redundant / correlated features |
| **Supervised** | Yes | Select features that contribute most to prediction |

<span class="at-kicker">Supervised Methods</span>

## Filter Methods

Score each feature independently using a statistical test, then keep the top-k or top-percentile features. Fast and model-agnostic, but blind to feature interactions.

> [!grid|cols3]
>
>> [!card|section]
>> ###### CORRELATION-BASED
>> ### *Correlation* Methods
>> | Method | Best for |
>> | --- | --- |
>> | Pearson | Linear relationships |
>> | Spearman | Monotonic relationships |
>> | Kendall | Monotonic + small samples |
>> | Mutual Information | Any non-linear relationship |
>> | F-test | Classification with continuous features |
>> | Chi-squared | Classification with categorical features |
>
>> [!card|section]
>> ###### SELECTKBEST
>> ### *SelectKBest*
>> ```python
>> from sklearn.feature_selection import SelectKBest, f_classif
>> selector = SelectKBest(score_func=f_classif, k=10)
>> X_selected = selector.fit_transform(X, y)
>> ```
>> Use `f_classif` for classification with continuous features (ANOVA F-test).
>
>> [!card|section]
>> ###### VARIANCE THRESHOLD
>> ### *VarianceThreshold*
>> Remove near-constant features first — a constant column adds noise but no signal.
>>
>> ```python
>> from sklearn.feature_selection import VarianceThreshold
>> selector = VarianceThreshold(threshold=0)  # Drop zero-variance features
>> ```

## Wrapper Methods

Train a model with different feature subsets and evaluate performance. More expensive than filter methods but captures feature interactions.

> [!grid|cols3]
>
>> [!card|section]
>> ###### FORWARD ELIMINATION
>> ### *Forward* Selection
>> Start with no features; iteratively add the most beneficial. Builds up from an empty set.
>
>> [!card|section]
>> ###### BACKWARD ELIMINATION
>> ### *Backward* Elimination
>> Start with all features; iteratively remove the least beneficial. Prunes from a full set.
>
>> [!card|section]
>> ###### RFE
>> ### *Recursive* Feature Elimination
>> Train model, drop weakest feature, repeat until `n_features_to_select` remain. Use `RFECV` to select optimal count via cross-validation.
>>
>> ```python
>> from sklearn.feature_selection import RFE
>> from sklearn.ensemble import RandomForestClassifier
>> selector = RFE(estimator=RandomForestClassifier(), n_features_to_select=5)
>> selector.fit(X, y)
>> ```

> [!warning] Wrapper methods are computationally expensive
> RFE with a complex model (e.g., Random Forest) trains a fresh model at every elimination step. For 100 features, that is ~100 model fits. Restrict to moderate feature counts, or first reduce with a filter method.

## Embedded Methods

Feature selection is built into the model training process itself — the most efficient category.

> [!grid|cols2]
>
>> [!card|section]
>> ###### L1 REGULARISATION
>> ### Lasso *Regularisation*
>> Drives some coefficients to exactly zero, effectively removing those features. Built-in feature selection during training.
>>
>> [[../ml-algorithms/ridge-lasso-elastic-net|Ridge, Lasso & Elastic Net →]]
>
>> [!card|section]
>> ###### TREE IMPORTANCE
>> ### Tree-Based *Importance*
>> Random Forest and XGBoost provide built-in importance scores from split gain or impurity reduction. Use `SelectFromModel` to extract features above threshold.
>>
>> ```python
>> from sklearn.feature_selection import SelectFromModel
>> from sklearn.ensemble import RandomForestClassifier
>> selector = SelectFromModel(RandomForestClassifier(), threshold='mean')
>> X_selected = selector.fit_transform(X, y)
>> ```

> [!info] Lasso vs. tree importance
> Lasso (L1) importance is based on linear relationships and is sensitive to feature scale. Tree-based importance is non-linear and scale-invariant, but biased toward high-cardinality continuous features. Use both as complementary views.

<span class="at-kicker">Modern Alternatives</span>

## Predictive Power Score (PPS)

A modern alternative to correlation that works for **both numerical and categorical** columns, and captures non-linear relationships.

| | Correlation | PPS |
| --- | --- | --- |
| Captures non-linear? | No | Yes |
| Works with categorical? | No | Yes |
| Symmetric? | Yes | No (directional) |
| Speed | Fast | Slower |
| Interpretability | High (familiar scale) | Harder to interpret |

> [!example] Computing PPS
> ```python
> import ppscore as pps
> # Single pair
> pps.score(df, "feature_column", "target_column")
> # Full matrix
> pps.matrix(df)
> ```
> PPS ranges from 0 (no predictive power) to 1 (perfect prediction).

> [!tip] PPS as a discovery tool
> Use PPS for exploratory feature discovery and initial selection, but keep Pearson correlation as a sanity check. PPS can flag surprising non-linear relationships that correlation misses.

<span class="at-kicker">Knowledge Check</span>

## Interview questions

1. What is the difference between filter, wrapper, and embedded methods?
2. When would you use wrapper methods over filter methods?
3. How does L1 regularisation perform feature selection?
4. What are the limitations of correlation for feature selection?
5. When is PPS preferred over Pearson correlation?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Engineering
>> [[feature-engineering|Feature Engineering]] · [[data-cleaning|Data Cleaning]]
>
>> [!card] Regularisation
>> [[../ml-algorithms/ridge-lasso-elastic-net|Ridge, Lasso & Elastic Net]]
>
>> [!card] Statistics
>> [[../statistics/descriptive-statistics|Descriptive Statistics]] · [[../statistics/correlation|Correlation & Covariance]]
