---
title: Cross Validation
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Cross Validation
  - K-Fold
  - Stratified K-Fold
  - Model Selection
category: Machine Learning
tags:
  - MachineLearning
  - ModelEvaluation
  - DataScience
  - Validation
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "The best way to predict the future is to create it."
> <cite>— Peter Drucker</cite>

---

<span class="at-kicker">Validation Strategy · Machine Learning</span>

# Cross Validation

<p class="at-lead">
Cross validation is a resampling procedure used to evaluate how well a machine learning model generalises to unseen data. It ensures the model fits the data well without overfitting to any particular train-test split, by using the entire dataset for both training and validation — iteratively.
</p>

<span class="at-stat">K-fold</span> · <span class="at-stat">stratified</span> · <span class="at-stat">leakage prevention</span> · <span class="at-mark">the gold standard for model evaluation</span>

<span class="at-kicker">How It Works</span>

## Overview

Cross validation addresses a fundamental problem: a single train-test split might be overly optimistic or pessimistic by chance. By averaging across multiple splits, we get a more reliable performance estimate with a measure of variance.

> [!info] Why a single split is not enough
> A model that scores 95% on one split may perform much worse in production. Cross validation averages performance across k different splits, giving a more reliable estimate with a measure of variance.

### The General Procedure

1. **Shuffle** the dataset randomly
2. **Split** into k equal-sized groups (folds)
3. For each fold:
   - Use it as the **test** set
   - Use the remaining k-1 folds as the **training** set
   - Train a model and evaluate on the test fold
   - Record the score
   - **Discard the model** — only the score matters
4. **Average** the k scores for the final performance estimate

> [!note] Key principle
> Each model is trained and evaluated on different portions of the data. No single data point is used for both training and testing in the same iteration.

> [!example] 5-Fold Cross-Validation visualised
> Dataset with 20 samples, split into 5 folds of 4 samples each:
>
> ```
> Fold 1:  [TEST][TRAIN][TRAIN][TRAIN][TRAIN]  → score = 0.82
> Fold 2:  [TRAIN][TEST][TRAIN][TRAIN][TRAIN]  → score = 0.79
> Fold 3:  [TRAIN][TRAIN][TEST][TRAIN][TRAIN]  → score = 0.85
> Fold 4:  [TRAIN][TRAIN][TRAIN][TEST][TRAIN]  → score = 0.81
> Fold 5:  [TRAIN][TRAIN][TRAIN][TRAIN][TEST]  → score = 0.83
>
> Final estimate: mean = 0.820, std = 0.022
> ```
>
> Every data point is used for validation exactly once. The variance across folds tells you how stable your model is.

<span class="at-kicker">Core Techniques</span>

## K-Fold & Stratified Methods

> [!grid|cols2]
>
>> [!card|section]
>> ###### K-FOLD
>> ### *K-Fold* Cross Validation
>> Split into k folds; each fold serves as test once. More reliable than single split; more expensive — k models must be trained.
>>
>> ```python
>> from sklearn.model_selection import KFold, cross_val_score
>> scores = cross_val_score(pipeline, X, y, cv=KFold(n_splits=5, shuffle=True, random_state=42))
>> print(f"Mean: {scores.mean():.3f}, Std: {scores.std():.3f}")
>> ```
>>
>> Deep learning models rarely use K-fold due to computational cost.
>
>> [!card|section]
>> ###### STRATIFIED K-FOLD
>> ### *Stratified* K-Fold
>> Ensures each fold preserves class proportions. Essential for imbalanced classification.
>>
>> > [!warning] Why stratification matters
>> > Without it, a fold might contain zero minority-class examples, giving an unrealistically good score.
>>
>> ```python
>> from sklearn.model_selection import StratifiedKFold
>> scores = cross_val_score(pipeline, X, y, cv=StratifiedKFold(n_splits=5, shuffle=True, random_state=42))
>> ```

### When to Use Stratification

| Scenario | Use stratified? |
| --- | --- |
| Classification with imbalanced classes | **Yes** |
| Regression (continuous target) | No — stratification doesn't apply |
| Classification with balanced classes | Optional — still good practice |

<span class="at-kicker">Critical Concerns</span>

## Preventing Data Leakage

A common pitfall is **leaking information from the test set into the training process**:

> [!grid|cols2]
>
>> [!card|section]
>> ###### THE PROBLEM
>> ### Leaky *Validation*
>> Pre-processing before splitting — fitting a scaler or imputer on the entire dataset, then splitting — contaminates each training fold with test-set statistics.
>>
>> **The leakage signature:**
>> - Standardising the full dataset before CV
>> - Feature selection on all data before splitting
>> - Test set statistics influencing training
>
>> [!card|section]
>> ###### THE SOLUTION
>> ### Pipeline *Protection*
>> Always put pre-processing steps inside a `Pipeline` so they are fit **only on the training fold** during each cross-validation iteration.
>>
>> ```python
>> from sklearn.pipeline import Pipeline
>> from sklearn.preprocessing import StandardScaler
>> from sklearn.linear_model import LogisticRegression
>>
>> pipeline = Pipeline([
>>     ('scaler', StandardScaler()),
>>     ('clf', LogisticRegression())
>> ])
>> scores = cross_val_score(pipeline, X, y, cv=5)
>> ```

> [!warning] Concrete leakage example
> Standardising the entire dataset before cross-validation means the scaler has seen the test fold's values when computing μ and σ. On a 5-fold CV with 1,000 samples, the scaler "knows" the global mean of all 1,000 points — including the 200 held out for testing. Leaky preprocessing can inflate CV accuracy by **2–10 percentage points**.

<span class="at-kicker">Model Selection</span>

## Hyperparameter Tuning

Cross validation helps compare algorithms and hyperparameter settings. `GridSearchCV` wraps cross-validation into an automated search:

> [!example] Hyperparameter search with GridSearchCV
> ```python
> from sklearn.model_selection import GridSearchCV
> from sklearn.ensemble import RandomForestClassifier
>
> grid = GridSearchCV(
>     RandomForestClassifier(),
>     {'n_estimators': [50, 100, 200], 'max_depth': [3, 5, 10]},
>     cv=5, scoring='f1'
> )
> grid.fit(X, y)
> print(grid.best_params_, grid.best_score_)
> ```

<span class="at-kicker">Knowledge Check</span>

## Interview questions

1. Why is cross validation more reliable than a single train-test split?
2. What is the difference between K-Fold and Stratified K-Fold?
3. When would you *not* use cross validation?
4. What is a leaky validation strategy, and how do you prevent it?
5. How does `Pipeline` prevent data leakage during cross validation?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Evaluation
>> [[evaluation-metrics|Evaluation Metrics]] · [[imbalanced-classification|Imbalanced Classification]]
>
>> [!card] Data Prep
>> [[data-cleaning|Data Cleaning]] · [[feature-engineering|Feature Engineering]]
>
>> [!card] Statistics
>> [[../statistics/sampling|Sampling]]
