---
title: Decision Trees
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Decision Trees
  - CART
  - C4.5
  - ID3
  - CHAID
  - Tree Pruning
  - Information Gain
  - Gini Impurity
  - Entropy
category: Machine Learning
tags:
  - MachineLearning
  - DecisionTrees
  - Classification
  - Regression
banner: https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "All models are wrong, but some are useful."
> <cite>— George E. P. Box</cite>

---

<span class="at-kicker">Supervised Learning · Tree Methods</span>

# Decision Trees

<p class="at-lead">
Decision trees are versatile, white-box algorithms that perform classification, regression, and multi-output tasks. They are intuitive, require little feature preparation, and handle both categorical and numerical data naturally — and serve as base learners in powerful ensemble methods like Random Forests and Gradient Boosting.
</p>

<span class="at-stat">white-box</span> model &nbsp;·&nbsp; <span class="at-stat">non-parametric</span> &nbsp;·&nbsp; <span class="at-stat">no scaling</span> required &nbsp;·&nbsp; <span class="at-mark">the foundation of every tree-based ensemble</span>

<span class="at-kicker">Why Decision Trees</span>

## Why decision trees?

> [!grid|cols3]
>
>> [!card|section]
>> ###### INTERPRETABILITY
>> ### *White-Box* Model
>> Decisions are fully interpretable — unlike neural networks or random forests. Every prediction can be traced back to a sequence of human-readable if-then rules.
>
>> [!card|section]
>> ###### FLEXIBILITY
>> ### *Non-Parametric*
>> No assumptions about data distribution. Captures complex feature interactions without explicit feature engineering.
>
>> [!card|section]
>> ###### ROBUSTNESS
>> ### *No Scaling* Required
>> Unlike SVM or KNN, trees are scale-invariant. Missing values handled naturally via surrogate splits. Works on both categorical and numerical data.

<span class="at-kicker">Core Concepts</span>

## Key terminology

| Term | Definition |
| --- | --- |
| **Root node** | The top node representing the entire population/sample |
| **Splitting** | Dividing a node into sub-nodes based on a feature threshold |
| **Decision node** | A node that splits further into sub-nodes |
| **Leaf / terminal node** | A node that does not split; contains the final prediction |
| **Pruning** | Removing sub-nodes to reduce overfitting (opposite of splitting) |
| **Branch / sub-tree** | A subsection of the entire tree |
| **Parent / child node** | A node that splits is the parent of its resulting sub-nodes |

---

<span class="at-kicker">Splitting Criteria</span>

## Splitting criteria

### Entropy

$$H(p) = -\sum_i p_i \log_2(p_i)$$

| Split | Entropy |
| --- | --- |
| Pure (all one class) | 0 |
| Maximally impure (equal classes) | 1 |

> [!info] Entropy intuition
> Lower entropy means a more homogeneous node. The tree greedily selects the split that minimises entropy (equivalently, maximises information gain) at every step.

### Gini impurity

$$G_i = 1 - \sum_{k=1}^n p_{i,k}^2$$

A node is pure when all training instances belong to the same class (Gini = 0).

| | Entropy | Gini |
| --- | --- | --- |
| Uses log? | Yes | No |
| Speed | Slower | **Faster** (sklearn default) |
| Tree shape | More balanced | Tends to isolate dominant class |

> [!tip] Gini vs. Entropy in practice
> For most problems the choice is negligible. Gini is sklearn's default because it avoids computing logarithms and is therefore faster. Only switch to entropy if you notice significantly different results on your specific dataset.

### Information gain

$$IG = H(\text{parent}) - \sum_j \frac{|S_j|}{|S|} H(S_j)$$

The tree always selects the split that **maximises information gain** (or equivalently, minimises impurity).

### Reduction in variance (for regression)

For continuous targets, the split that produces the lowest variance in child nodes is selected:

$$\text{Var} = \frac{1}{n} \sum (y_i - \bar{y})^2$$

---

<span class="at-kicker">Algorithm Variants</span>

## Tree algorithms

| Algorithm | Key feature | Split criterion |
| --- | --- | --- |
| **ID3** | Iterative dichotomiser; only categorical features | Information Gain |
| **C4.5** | Successor to ID3; handles continuous features | Gain Ratio (normalised IG) |
| **CART** | Classification And Regression Tree; sklearn default | Gini (classification) / MSE (regression) |
| **CHAID** | Chi-Square automatic interaction detection; multi-level splits | Chi-squared test |
| **MARS** | Multivariate Adaptive Regression Splines | Piecewise linear basis functions |

### CART (sklearn default)

- Splits training set into two subsets using a threshold $t_k$ on feature $k$.
- Searches for the $(k, t_k)$ pair that produces the purest subsets.
- Recursively splits subsets using the same logic.
- Stops at `max_depth` or when no split reduces impurity.

> [!warning] CART is a greedy algorithm
> CART does not search for the globally optimal tree — that problem is NP-complete. Instead, it makes locally optimal decisions at each node. This makes deep unpruned trees highly susceptible to overfitting.

---

<span class="at-kicker">Regression Trees</span>

## Regression trees

Decision trees can also be used for regression. The key differences:

- Leaf nodes contain **numerical values** (the average of target values in that leaf) instead of class labels.
- Splits minimise **MSE** (or MAE / Friedman MSE) rather than Gini/entropy.
- Build process: sort target values, test thresholds sequentially, choose the threshold with the lowest MSE.

> [!example] Regression tree in scikit-learn
> ```python
> from sklearn.tree import DecisionTreeRegressor
> reg = DecisionTreeRegressor(max_depth=5, criterion='squared_error')
> reg.fit(X_train, y_train)
> ```
> The `criterion` argument accepts `'squared_error'` (MSE), `'friedman_mse'`, or `'absolute_error'` (MAE). MSE is the standard choice; switch to MAE when the target has heavy-tailed outliers.

---

<span class="at-kicker">Overfitting Control</span>

## Pruning

Decision trees are prone to **overfitting** (high variance). Pruning reduces complexity.

### Cost-complexity pruning (weakest link pruning)

Post-creation, compute the Sum of Squared Residuals (SSR) for the full tree, then recursively for trees with one fewer leaf, all the way to the root.

**Tree score:**

$$\text{Score} = SSR + \alpha \cdot T$$

Where $T$ = number of leaves, and $\alpha$ is a complexity penalty found via cross-validation. The tree with the lowest score is selected as the final pruned tree.

> [!example] Finding the best α with cost-complexity pruning
> ```python
> path = clf.cost_complexity_pruning_path(X_train, y_train)
> ccp_alphas = path.ccp_alphas  # candidate alpha values
>
> # Train one tree per alpha, then pick the alpha that maximises val accuracy
> clfs = [DecisionTreeClassifier(ccp_alpha=a).fit(X_train, y_train) for a in ccp_alphas]
> ```
> Plot train vs. test accuracy across `ccp_alphas` to find the "sweet spot" where test accuracy peaks before the tree becomes too shallow.

---

<span class="at-kicker">Hyperparameter Tuning</span>

## Hyperparameters (sklearn)

| Parameter | Effect | Typical range |
| --- | --- | --- |
| `max_depth` | Maximum depth of the tree | 3–20 |
| `min_samples_split` | Minimum samples to split a node | 2–100 |
| `min_samples_leaf` | Minimum samples in a leaf | 1–50 |
| `max_features` | Features considered at each split | `sqrt(n_features)` |
| `ccp_alpha` | Complexity parameter for pruning | 0.0–0.05 |
| `criterion` | Split quality measure | `'gini'` or `'entropy'` |

> [!tip] Start with depth limits before tuning everything
> Setting `max_depth=5` and `min_samples_leaf=10` alone often closes most of the overfitting gap. Only then refine `ccp_alpha` or `max_features`.

---

> [!example] Pruning effect on a moon-shaped dataset
> On the `make_moons` dataset with 300 samples and `noise=0.25`, an unpruned tree produces ~12 levels and 50 leaves — a jagged, overfit boundary. Constraining to `max_depth=3` and `min_samples_leaf=10` yields just 3 levels and 5 leaves, resulting in a smooth decision boundary that generalises far better.
>
> ```python
> clf = DecisionTreeClassifier(max_depth=3, min_samples_leaf=10, random_state=42)
> clf.fit(X_train, y_train)
> print(clf.get_depth(), clf.get_n_leaves())  # 3, 5
> ```

> [!warning] Visualising very deep trees
> `sklearn.tree.plot_tree` becomes unreadable beyond `max_depth=4`. For exploratory work, render the tree with `max_depth=3` or export to a text representation with `export_text`.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is the difference between Gini impurity and entropy?
2. Why are decision trees called "white box" models?
3. How does cost-complexity pruning work?
4. What makes CART a greedy algorithm?
5. When would you prefer a regression tree over linear regression?
6. Why don't decision trees require feature scaling?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Ensembles
>> [[random-forest|Random Forest]], [[gradient-boosting|Gradient Boosting]], [[ensemble-learning|Ensemble Learning]]
>
>> [!card] Fundamentals
>> [[../ml-fundamentals/supervised-learning|Supervised Learning]], [[../ml-fundamentals/feature-engineering|Feature Engineering]]
>
>> [!card] Statistics
>> [[../statistics/entropy-information-theory|Entropy & Information Theory]], [[../statistics/bias-variance-tradeoff|Bias–Variance Tradeoff]]
