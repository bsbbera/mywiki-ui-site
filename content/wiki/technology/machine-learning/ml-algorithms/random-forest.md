---
title: Random Forest
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Random Forest
  - Bagging
  - Extra Trees
  - Extremely Randomized Trees
  - OOB
category: Machine Learning
tags:
  - MachineLearning
  - Ensembles
  - RandomForest
  - DecisionTrees
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "The forest is not just a collection of trees; it is a community."
> <cite>— Suzanne Simard</cite>

---

<span class="at-kicker">Ensemble Methods · Bagging</span>

# Random Forest

<p class="at-lead">
Random Forest is a bagging ensemble that builds many decision trees on bootstrap samples of the data, using a random subset of features at each split. By averaging the predictions of many decorrelated trees, it dramatically reduces the variance that plagues individual deep trees.
</p>

<span class="at-stat">bootstrap</span> sampling &nbsp;·&nbsp; <span class="at-stat">random feature</span> subsets &nbsp;·&nbsp; <span class="at-stat">OOB</span> evaluation &nbsp;·&nbsp; <span class="at-mark">one of the most reliable out-of-the-box algorithms in machine learning</span>

<span class="at-kicker">How It Works</span>

## How it works

> [!grid|cols2]
>
>> [!card|section]
>> ###### STEP 1
>> ### *Bootstrap* Sampling
>> Draw N samples with replacement from the training data. Each tree sees a different random subset — approximately 63.2% of the original data.
>
>> [!card|section]
>> ###### STEP 2
>> ### *Random* Feature Subsets
>> At each split, consider only a random subset of features (not all). This decorrelates trees and prevents any single strong feature from dominating every tree.
>
>> [!card|section]
>> ###### STEP 3
>> ### *Grow* Full Trees
>> Build a full (usually unpruned) decision tree on each bootstrap sample. Individual trees have high variance — that's intentional.
>
>> [!card|section]
>> ###### STEP 4
>> ### *Aggregate* Predictions
>> Classify by majority vote; regress by averaging predictions. Errors across trees are weakly correlated and cancel out.

> [!info] Why "random"?
> Random Forest is called "random" for two distinct reasons: (1) each tree is trained on a **random bootstrap sample** of the data, and (2) at each node, only a **random subset of features** is considered for splitting. Both sources of randomness decorrelate the trees so that their individual errors average out.

---

<span class="at-kicker">Key Hyperparameters</span>

## Key hyperparameters

### `n_estimators` — number of trees

- More trees = more stable predictions but slower training.
- Typical range: 10–500. Diminishing returns after ~100–200 trees.
- More uncorrelated trees → individual errors average out more effectively.

> [!tip] Start with 100–200 trees
> After ~200 trees performance plateaus for most datasets while training time keeps growing. Use `oob_score=True` to monitor improvement without a separate validation set.

### `max_features` — features per split

| Value | Behaviour |
| --- | --- |
| `"sqrt"` | $\sqrt{n_{\text{features}}}$ — classification default |
| `"log2"` | $\log_2(n_{\text{features}})$ |
| `0.2` | 20% of features |
| `None` | All features (behaves like bagged trees, not RF) |

> [!info] The decorrelation–accuracy trade-off
> Lower `max_features` increases tree diversity (lower correlation between trees) but may make individual trees weaker. Higher values make each tree stronger but more correlated. `"sqrt"` is the sweet spot for most classification tasks; `n_features / 3` is typical for regression.

### `max_depth`

Limits how many splits deep each tree can go. Lower values reduce overfitting and yield more stable, lower-variance trees. Pair with a large `n_estimators` and let the ensemble compensate for the shallower trees.

### `min_samples_leaf`

Minimum number of samples required to be at a leaf node. Higher values produce shallower, more regularised trees. This is one of the most effective single hyperparameters for controlling overfitting in Random Forests.

### `bootstrap`

- `True` (default) — bagging with replacement.
- `False` — pasting (without replacement).

---

<span class="at-kicker">OOB Evaluation</span>

## Out-of-bag (OOB) score

Each tree is trained on roughly 63.2% of the data; the remaining ~36.8% (**out-of-bag** instances) are never seen by that tree. Averaging the OOB predictions across all trees gives a free, unbiased generalisation estimate — equivalent to leave-one-out cross-validation but at a fraction of the cost.

> [!example] Training a Random Forest in scikit-learn
> Set `oob_score=True` to get a free out-of-bag estimate without a separate validation set. Use `n_jobs=-1` to parallelise across all CPU cores.
> ```python
> from sklearn.ensemble import RandomForestClassifier
>
> rf = RandomForestClassifier(n_estimators=200, max_features='sqrt',
>                             oob_score=True, n_jobs=-1, random_state=42)
> rf.fit(X_train, y_train)
> print(rf.oob_score_)  # free unbiased generalisation estimate
> ```

---

<span class="at-kicker">Variant</span>

## Extremely Randomized Trees (Extra Trees)

A variant of Random Forest where split thresholds are chosen **randomly** rather than being optimised. Trees become even more decorrelated than in standard RF, which can:

- Reduce variance further (at the cost of slightly higher bias).
- Train significantly faster (no threshold search at split time).
- Generalise better on some noisy datasets.

> [!note]
> `from sklearn.ensemble import ExtraTreesClassifier` — drop-in replacement for `RandomForestClassifier`.

---

<span class="at-kicker">Feature Importance</span>

## Feature importance

Random Forest provides built-in feature importance based on how much each feature decreases impurity (Gini importance) averaged across all trees:

```python
importances = pd.Series(rf.feature_importances_, index=feature_names)
importances.sort_values(ascending=False).head(10)
```

> [!warning] Gini importance can be misleading
> Impurity-based importance tends to favour high-cardinality features. For more reliable estimates, use **permutation importance** (`sklearn.inspection.permutation_importance`) or **SHAP values**. See [[../ml-fundamentals/ml-explainability|ML Explainability]].

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. Why does Random Forest use random feature subsets at each split?
2. What is the difference between bagging and pasting?
3. How does increasing `n_estimators` affect bias and variance?
4. What is the OOB score, and when is it useful?
5. How do Extra Trees differ from standard Random Forest?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Ensembles
>> [[ensemble-learning|Ensemble Learning]], [[gradient-boosting|Gradient Boosting]], [[decision-trees|Decision Trees]]
>
>> [!card] Evaluation
>> [[../ml-fundamentals/evaluation-metrics|Evaluation Metrics]], [[../ml-fundamentals/ml-explainability|ML Explainability]]
>
>> [!card] Fundamentals
>> [[../ml-fundamentals/feature-selection|Feature Selection]], [[../ml-fundamentals/supervised-learning|Supervised Learning]]
