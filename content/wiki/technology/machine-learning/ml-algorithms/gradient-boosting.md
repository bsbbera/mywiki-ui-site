---
title: Gradient Boosting
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Gradient Boosting
  - GBM
  - AdaBoost
  - XGBoost
  - LightGBM
  - CatBoost
  - Boosting
  - Gradient Boosting Machine
category: Machine Learning
tags:
  - MachineLearning
  - Ensembles
  - Boosting
  - XGBoost
  - DataScience
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Success is the sum of small efforts, repeated day in and day out."
> <cite>— Robert Collier</cite>

---

<span class="at-kicker">Ensemble Methods · Sequential Boosting</span>

# Gradient Boosting

<p class="at-lead">
Gradient boosting builds an ensemble of weak learners sequentially, with each new tree trained to correct the residual errors of the previous ensemble. It underpins XGBoost, LightGBM, and CatBoost — the dominant tools for tabular data competitions.
</p>

<span class="at-stat">XGBoost</span> &nbsp;·&nbsp; <span class="at-stat">LightGBM</span> &nbsp;·&nbsp; <span class="at-stat">CatBoost</span> &nbsp;·&nbsp; <span class="at-mark">the most powerful algorithm family for tabular data</span>

<span class="at-kicker">Core Idea</span>

## Core idea

1. Start with a simple model (e.g., predicting the mean target value).
2. Compute **pseudo-residuals** — the negative gradient of the loss function with respect to the current prediction.
3. Train a new weak learner to predict these residuals.
4. Add the new learner to the ensemble, scaled by a **learning rate** (shrinkage).
5. Repeat until convergence or a maximum number of iterations.

> [!info] Boosting is sequential
> Unlike bagging (parallel), each new tree in boosting depends on the errors of all previous trees. This makes boosting inherently sequential and prevents trivial parallelisation at the tree level — though individual tree construction can still be parallelised within a step.

---

<span class="at-kicker">AdaBoost</span>

## AdaBoost (Adaptive Boosting)

The simplest boosting algorithm. Uses **decision stumps** (one-level trees) as base learners.

**Steps:**

1. All observations start with equal weights.
2. Train a decision stump on each feature; pick the one with the lowest entropy.
3. Compute total error: $TE = \frac{E}{T}$.
4. Compute stump performance: $\text{Performance} = \frac{1}{2} \ln\!\left(\frac{1 - TE}{TE}\right)$.
5. Update weights:
   - Incorrectly classified: $w_{\text{new}} = w_{\text{old}} \cdot e^{+\text{Performance}}$
   - Correctly classified: $w_{\text{new}} = w_{\text{old}} \cdot e^{-\text{Performance}}$
6. Normalise weights to sum to 1.
7. Resample and repeat.

> [!note] AdaBoost imports
> `from sklearn.ensemble import AdaBoostClassifier, AdaBoostRegressor`

---

<span class="at-kicker">GBM</span>

## Gradient Boosting Machine (GBM)

Train trees on the **pseudo-residuals** of the current ensemble. The core loop is simple in concept: each new tree fits what the existing model gets wrong.

> [!example] GBM — the residual loop in miniature
> ```python
> tree1 = DecisionTreeRegressor(max_depth=2).fit(X, y)
> residuals = y - tree1.predict(X)
> tree2 = DecisionTreeRegressor(max_depth=2).fit(X, residuals)
> # Continue; final prediction = sum of all tree outputs
> ```
> In production use `sklearn.ensemble.GradientBoostingClassifier` or one of the specialised libraries below rather than building the loop manually.

---

<span class="at-kicker">XGBoost</span>

## XGBoost

An optimised, scalable implementation of gradient boosting.

### Key advantages over standard GBM

| Feature | Benefit |
| --- | --- |
| **Regularisation** | L1 + L2 penalties built in; reduces overfitting |
| **Parallel processing** | Tree construction is parallelised; ~10× faster than sklearn GBM |
| **Custom objectives** | Define your own loss and evaluation functions |
| **Missing values** | Built-in handling — learns optimal direction for missing values |
| **Tree pruning** | Grows to `max_depth`, then prunes backward (removes negative-gain splits) |
| **Built-in CV** | Runs cross-validation at each boosting iteration to find optimal `n_estimators` |
| **Early stopping** | Halts training when validation error stops improving |

### XGBoost tree splits

**Regression similarity score:**

$$\text{Similarity} = \frac{(\sum \text{residuals})^2}{n_{\text{residuals}} + \lambda}$$

**Classification similarity score:**

$$\text{Similarity} = \frac{(\sum \text{residuals})^2}{\sum [p_i(1-p_i)] + \lambda}$$

**Gain for a split:**

$$\text{Gain} = \text{Similarity}_{\text{left}} + \text{Similarity}_{\text{right}} - \text{Similarity}_{\text{root}}$$

The split with the highest gain is selected.

### Pruning in XGBoost

A branch is pruned when:

$$\text{Gain} - \gamma < 0$$

Where $\gamma$ is a complexity parameter. Pruning is done **post-hoc** after growing the tree to `max_depth`.

### New prediction

$$\text{New Prediction} = \text{Previous Prediction} + \eta \times \text{Output}$$

Where $\eta$ (learning rate / `eta`) is typically 0.01–0.3.

> [!example] XGBoost with early stopping
> ```python
> import xgboost as xgb
>
> model = xgb.XGBRegressor(
>     n_estimators=1000, learning_rate=0.05,
>     max_depth=6, subsample=0.8, colsample_bytree=0.8,
>     reg_alpha=0.1, reg_lambda=1.0, random_state=42
> )
> model.fit(X_train, y_train,
>           eval_set=[(X_val, y_val)],
>           early_stopping_rounds=50, verbose=False)
> ```
> Set `n_estimators` large and rely on `early_stopping_rounds` to find the optimal number of trees automatically. The model saves the best iteration internally.

---

<span class="at-kicker">LightGBM</span>

## LightGBM

A gradient boosting framework by Microsoft that uses **leaf-wise** tree growth instead of level-wise.

| | LightGBM | XGBoost / sklearn GBM |
| --- | --- | --- |
| Growth | **Leaf-wise** (vertical) | Level-wise (horizontal) |
| Speed | Faster | Slower |
| Memory | Lower | Higher |
| Small datasets | **Overfits easily** | More robust |
| Large datasets | Excellent | Good |

> [!warning] LightGBM on small datasets
> Leaf-wise growth is aggressive — it picks the leaf with the highest loss reduction regardless of tree shape. This works brilliantly for large datasets but causes severe overfitting on small ones. Always set `min_data_in_leaf` and `max_depth` when your dataset is small.

### Key parameters

| Parameter | Purpose |
| --- | --- |
| `max_depth` | Control overfitting |
| `min_data_in_leaf` | Minimum records per leaf (default 20) |
| `feature_fraction` | Fraction of features per iteration (RF-style boosting) |
| `bagging_fraction` | Fraction of data per iteration |
| `lambda_l2` | L2 regularisation |
| `min_gain_to_split` | Minimum gain required to make a split |

> [!example] LightGBM classifier
> ```python
> import lightgbm as lgb
>
> model = lgb.LGBMClassifier(
>     max_depth=6, min_data_in_leaf=20,
>     feature_fraction=0.8, bagging_fraction=0.8, lambda_l2=1.0
> )
> model.fit(X_train, y_train)
> ```

---

<span class="at-kicker">CatBoost</span>

## CatBoost

Yandex's gradient boosting library optimised for **categorical features**.

- Handles categorical data **natively** — no one-hot encoding required.
- Uses **ordered boosting** to reduce target leakage in categorical feature encoding.
- Competitive with XGBoost and LightGBM on tabular data; often best out-of-the-box on datasets with many categoricals.

> [!example] CatBoost with explicit categorical columns
> ```python
> from catboost import CatBoostClassifier
>
> model = CatBoostClassifier(
>     iterations=1000, learning_rate=0.1, depth=6,
>     cat_features=[0, 1, 2]  # column indices of categorical features
> )
> model.fit(X_train, y_train, verbose=False)
> ```

---

<span class="at-kicker">Library Comparison</span>

## Comparison

> [!grid|cols2]
>
>> [!card|section]
>> ###### SKLEARN GBM
>> ### Simple *Baseline*
>> Well-integrated, easy to use. Best for baselines and small datasets. No special installation required. Slower than dedicated libraries.
>
>> [!card|section]
>> ###### XGBOOST
>> ### Regularised *Speed*
>> L1 + L2 regularisation, parallel tree construction, early stopping. The gold standard for most tabular competition problems.
>
>> [!card|section]
>> ###### LIGHTGBM
>> ### Fastest *Training*
>> Leaf-wise growth, histogram-based splitting. Fastest on large datasets. Requires careful tuning on small data to avoid overfitting.
>
>> [!card|section]
>> ###### CATBOOST
>> ### Native *Categoricals*
>> Built-in ordered target encoding for categoricals. Often best out-of-the-box on mixed feature-type data. No preprocessing required.

| Library | Strength | Best for |
| --- | --- | --- |
| **sklearn GBM** | Simple, well-integrated | Baseline, small data |
| **XGBoost** | Regularisation, speed, ecosystem | Most tabular problems |
| **LightGBM** | Fastest training, leaf-wise | Large datasets, speed-critical |
| **CatBoost** | Native categorical handling | Heavy categorical features |

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is the fundamental difference between bagging and boosting?
2. How does AdaBoost update sample weights?
3. What are the key advantages of XGBoost over standard gradient boosting?
4. Why is LightGBM faster than XGBoost?
5. When would you choose CatBoost over XGBoost?
6. What is the role of the learning rate (shrinkage) in gradient boosting?
7. How does early stopping prevent overfitting in boosting?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Ensembles
>> [[ensemble-learning|Ensemble Learning]], [[random-forest|Random Forest]], [[decision-trees|Decision Trees]]
>
>> [!card] Fundamentals
>> [[../ml-fundamentals/supervised-learning|Supervised Learning]], [[../ml-fundamentals/evaluation-metrics|Evaluation Metrics]]
>
>> [!card] Statistics
>> [[../statistics/bias-variance-tradeoff|Bias–Variance Tradeoff]]
