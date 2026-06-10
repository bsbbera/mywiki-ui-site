---
title: Ensemble Learning
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Ensemble Learning
  - Bagging
  - Boosting
  - Stacking
  - Blending
  - Voting Classifier
  - Bootstrap Aggregation
  - Out-of-Bag Evaluation
category: Machine Learning
tags:
  - MachineLearning
  - Ensembles
  - Bagging
  - Boosting
  - DataScience
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "The whole is greater than the sum of its parts."
> <cite>— Aristotle</cite>

---

<span class="at-kicker">Ensemble Methods · Machine Learning</span>

# Ensemble Learning

<p class="at-lead">
Ensemble learning combines the predictions of multiple models to produce a more accurate and stable result than any single model. The key insight: a group of weak learners making uncorrelated errors can average those errors out to produce a strong learner.
</p>

<span class="at-stat">bagging</span> &nbsp;·&nbsp; <span class="at-stat">boosting</span> &nbsp;·&nbsp; <span class="at-stat">stacking</span> &nbsp;·&nbsp; <span class="at-mark">behind most winning solutions in tabular ML competitions</span>

> [!info] What is an ensemble?
> A group of predictors trained and combined into a single meta-predictor is called an **ensemble**. The individual models are called **base learners**. Combining their predictions outperforms any single base learner as long as the individual errors are not perfectly correlated.

<span class="at-kicker">Voting Strategies</span>

## Basic ensembling strategies

### 1. Max voting (hard voting)

For classification: each model predicts a class, and the **mode** (most common class) wins. Useful when base learners have similar accuracy but different error patterns.

> [!example] Hard vs. soft voting in scikit-learn
> ```python
> from sklearn.ensemble import VotingClassifier
> model = VotingClassifier(
>     estimators=[('lr', model1), ('dt', model2), ('rf', model3)],
>     voting='hard'   # change to 'soft' to use probabilities
> )
> ```

### 2. Averaging and weighted averaging

For regression (or probability outputs): take the mean of all model predictions. **Weighted averaging** assigns different weights based on each model's individual performance — a model with higher validation accuracy receives proportionally more influence.

### 3. Soft voting

Each model outputs class probabilities; the final prediction is the class with the highest **average probability** across all models.

> [!tip] Prefer soft voting over hard voting
> Consider three models outputting probabilities of [0.45, 0.45, 0.90] for class 1. Hard voting gives class 0 (two votes vs. one). Soft voting averages to 0.60 and correctly picks class 1. Soft voting wins because it exploits the *confidence* of each prediction, not just its direction.

---

<span class="at-kicker">Bagging</span>

## Bagging (Bootstrap Aggregation)

**Bootstrap sampling** creates subsets of the original dataset **with replacement** — each model trains on a different bootstrap sample, so no two models see exactly the same data. **Aggregation** combines predictions via majority vote (classification) or mean (regression).

> [!info] Why bootstrapping reduces variance
> Models trained on different data subsets make different mistakes. Because the errors are weakly correlated, averaging across many models causes individual errors to cancel out — driving down variance without significantly increasing bias.

### Bagging vs. Pasting

| | Bagging | Pasting |
| --- | --- | --- |
| Sampling | With replacement | Without replacement |
| Same instance in multiple predictors? | Yes | No |
| Bias | Higher | Lower |
| Preference | Generally preferred | Rarely used |

### Out-of-bag (OOB) evaluation

In bagging, each bootstrap sample uses roughly 63.2% of the training data on average. The remaining ~36.8% — the **out-of-bag** set — serves as a natural validation set for that tree, requiring no explicit hold-out split.

> [!example] Enabling OOB scoring in scikit-learn
> ```python
> from sklearn.ensemble import BaggingClassifier
> from sklearn.tree import DecisionTreeClassifier
>
> bag_clf = BaggingClassifier(
>     DecisionTreeClassifier(), n_estimators=500,
>     bootstrap=True, oob_score=True, n_jobs=-1
> )
> bag_clf.fit(X_train, y_train)
> print(bag_clf.oob_score_)  # free unbiased accuracy estimate
> ```

---

<span class="at-kicker">Boosting</span>

## Boosting

Boosting builds models **sequentially**, with each new model focusing on the residual errors of the previous ones. Hard-to-classify instances receive progressively higher weight over training rounds.

> [!info] Bagging vs. Boosting execution
> Bagging trains all base learners **in parallel** on independent bootstrap samples. Boosting trains them **sequentially** — each learner is informed by the errors of all previous learners. Bagging targets variance reduction; boosting primarily targets bias reduction.

### AdaBoost (Adaptive Boosting)

1. All observations start with equal weights.
2. Train a **decision stump** (one-level tree) on each feature; select the stump with the lowest entropy.
3. Compute total error: $TE = \frac{E}{T}$ (errors / total).
4. Compute stump performance: $\frac{1}{2} \ln\!\left(\frac{1 - TE}{TE}\right)$.
5. **Update weights:** incorrectly classified instances get higher weights ($w \cdot e^{+\text{perf}}$); correctly classified get lower weights ($w \cdot e^{-\text{perf}}$).
6. **Normalise** weights so they sum to 1.
7. Resample with the new weight distribution and repeat.

> [!note] AdaBoost imports
> `from sklearn.ensemble import AdaBoostClassifier, AdaBoostRegressor`

### Gradient Boosting (GBM)

Build trees sequentially, each trained on the **pseudo-residuals** (negative gradient of the loss) of the current ensemble. Each new tree nudges the overall prediction in the direction that most reduces loss.

> [!example] Gradient Boosting — the intuition in code
> ```python
> tree1 = DecisionTreeRegressor(max_depth=2).fit(X, y)
> residuals = y - tree1.predict(X)           # first residuals
> tree2 = DecisionTreeRegressor(max_depth=2).fit(X, residuals)
> # Each subsequent tree corrects the remaining error
> ```
> In practice, use `sklearn.ensemble.GradientBoostingClassifier` or the specialised libraries (XGBoost, LightGBM, CatBoost) for performance. See [[gradient-boosting|Gradient Boosting]] for the full deep-dive.

---

<span class="at-kicker">Stacking & Blending</span>

## Stacking (Stacked Generalization)

Uses predictions from multiple base models as **features** for a final "meta-learner" or "blender."

**Process:**

1. Split data into train and test.
2. Train base models on K-1 folds; predict on the held-out fold.
3. Iterate until every fold has been predicted (out-of-fold predictions).
4. Fit base models on the full training set; predict on the test set.
5. Use the out-of-fold predictions as features for the second-level model.
6. Train the meta-learner on these meta-features.
7. Make final predictions on the test set using the trained meta-learner.

> [!warning] Stacking does not always improve results
> Stacking is powerful when base learners have complementary strengths, but it can overfit if the meta-learner is too complex or if out-of-fold predictions are computed incorrectly. Always validate the stacked model on a held-out test set.

### Blending (variant of stacking)

Blending uses a **hold-out validation set** instead of out-of-fold predictions for training the next layer. It is simpler to implement but less data-efficient and less robust than full K-fold stacking.

---

<span class="at-kicker">Method Comparison</span>

## Comparison table

> [!grid|cols2]
>
>> [!card|section]
>> ###### BAGGING
>> ### *Parallel* Training
>> Trains all base learners in parallel on independent bootstrap samples. Reduces **variance**. Primary example: Random Forest. Works best when base models have high variance.
>
>> [!card|section]
>> ###### BOOSTING
>> ### *Sequential* Training
>> Trains base learners sequentially, each correcting the previous. Reduces **bias**. Examples: AdaBoost, XGBoost, LightGBM. Risk: overfitting if too many rounds.
>
>> [!card|section]
>> ###### STACKING
>> ### *Two-Stage* Training
>> Uses a meta-learner trained on out-of-fold base model predictions. Best for combining models with complementary strengths. More complex but potentially most powerful.
>
>> [!card|section]
>> ###### VOTING
>> ### *Democratic* Aggregation
>> Simple majority or probability average across independently trained models. Low overhead, no training of a meta-learner. Best when models have uncorrelated errors.

| Technique | Training | Error focus | Key method | Example |
| --- | --- | --- | --- | --- |
| **Bagging** | Parallel | Reduce variance | Bootstrap + average | Random Forest |
| **Boosting** | Sequential | Reduce bias | Weighted residuals | AdaBoost, GBM, XGBoost |
| **Stacking** | Two-stage | Model combination | Meta-learner on predictions | Stacked ensemble |
| **Voting** | Parallel | Uncorrelated errors | Majority / probability average | VotingClassifier |

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is the fundamental idea behind ensemble learning?
2. What is the difference between bagging and boosting?
3. How does AdaBoost update instance weights?
4. What is out-of-bag evaluation, and why is it useful?
5. What is the difference between hard voting and soft voting?
6. How does stacking differ from blending?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Tree Ensembles
>> [[random-forest|Random Forest]], [[gradient-boosting|Gradient Boosting]], [[decision-trees|Decision Trees]]
>
>> [!card] Fundamentals
>> [[../ml-fundamentals/supervised-learning|Supervised Learning]], [[../ml-fundamentals/evaluation-metrics|Evaluation Metrics]]
>
>> [!card] Statistics
>> [[../statistics/bias-variance-tradeoff|Bias–Variance Tradeoff]]
