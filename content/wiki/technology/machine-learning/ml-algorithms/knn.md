---
title: K-Nearest Neighbours
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - K-Nearest Neighbours
  - KNN
  - Lazy Learning
  - Distance Metrics
category: Machine Learning
tags:
  - MachineLearning
  - Classification
  - Regression
  - DistanceBased
banner: https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Tell me who your friends are, and I will tell you who you are."
> <cite>— Unknown</cite>

---

<span class="at-kicker">Instance-Based Learning · Distance Methods</span>

# K-Nearest Neighbours

<p class="at-lead">
KNN is a lazy learning algorithm — it performs no training; all computation happens at prediction time. It classifies a point by finding the K closest points in the training set and returning the majority class or mean target value. Simple, interpretable, and an excellent sanity-check baseline.
</p>

<span class="at-stat">lazy learner</span> &nbsp;·&nbsp; <span class="at-stat">O(N·D) prediction</span> &nbsp;·&nbsp; <span class="at-stat">no model fitting</span> &nbsp;·&nbsp; <span class="at-mark">always scale features before KNN — non-negotiable</span>

<span class="at-kicker">How It Works</span>

## How it works

1. Store all training data.
2. For each prediction, compute the distance from the query point to every training point.
3. Select the K closest neighbours.
4. **Classification:** return the majority class among the K neighbours.
5. **Regression:** return the average target value among the K neighbours.

> [!info] Why "lazy"?
> KNN is called a *lazy* (or instance-based) learner because it defers all generalisation until query time. There is no model fitting, no parameter learning — the training data *is* the model. This makes training O(1) but prediction O(N·D), the opposite trade-off from eager learners like decision trees.

---

<span class="at-kicker">Choosing K</span>

## Choosing K

| K | Behaviour |
| --- | --- |
| **Small K** (e.g., 1) | Low bias, high variance; sensitive to noise and outliers |
| **Large K** | Smoother decision boundaries, lower variance, higher bias |
| **K = number of classes + 1** | Often a good starting point |

> [!tip] How to choose K
> Use cross-validation over a range of odd values (odd avoids ties in binary classification). Plot validation accuracy vs. K — look for the "elbow" where accuracy plateaus. A typical search range is K = 1 to √N.

---

<span class="at-kicker">Distance Metrics</span>

## Distance metrics

### Euclidean distance (L2)

$$d(x, y) = \sqrt{\sum_{i=1}^n (x_i - y_i)^2}$$

The straight-line distance. Most common for dense, continuous, normally-distributed features.

### Manhattan distance (L1)

$$d(x, y) = \sum_{i=1}^n |x_i - y_i|$$

Grid-based (city-block) distance. Better when features have very different scales or when the data is high-dimensional or sparse.

### Minkowski distance (generalisation)

$$d(x, y) = \left(\sum_{i=1}^n |x_i - y_i|^p\right)^{1/p}$$

- p = 1 → Manhattan
- p = 2 → Euclidean

> [!tip] Manhattan vs. Euclidean
> In high-dimensional spaces (the "curse of dimensionality"), Euclidean distances become increasingly uniform. Manhattan distance and cosine similarity often work better for sparse, high-dimensional data such as text feature vectors.

---

<span class="at-kicker">Feature Scaling</span>

## Feature scaling is essential

KNN is **highly sensitive to feature scales** — a feature with a large numeric range will dominate the distance calculation and effectively drown out other features.

> [!warning] Scale before KNN
> This is non-negotiable. Fit `StandardScaler` (or `MinMaxScaler`) on the training set only, then apply the same fitted scaler to the test set. Forgetting to scale is the most common cause of poor KNN performance.

---

<span class="at-kicker">Weighted KNN & Scikit-Learn</span>

## Weighted KNN

Instead of a simple majority vote, weight each neighbour's contribution by the **inverse of its distance** — closer neighbours exert proportionally more influence.

> [!example] KNN classification and regression in scikit-learn
> ```python
> from sklearn.neighbors import KNeighborsClassifier, KNeighborsRegressor
> from sklearn.preprocessing import StandardScaler
>
> scaler = StandardScaler()
> X_train_s = scaler.fit_transform(X_train)
> X_test_s  = scaler.transform(X_test)
>
> # Weighted classification
> clf = KNeighborsClassifier(n_neighbors=5, weights='distance', metric='euclidean')
> clf.fit(X_train_s, y_train)
>
> # Regression
> reg = KNeighborsRegressor(n_neighbors=5, weights='distance')
> reg.fit(X_train_s, y_train)
> ```
> `weights='distance'` gives closer neighbours more influence. `weights='uniform'` (default) treats all K neighbours equally.

---

<span class="at-kicker">Computational Cost</span>

## Computational cost

| Phase | Cost |
| --- | --- |
| Training | O(1) — no training |
| Prediction | O(N · D) per query — must compute distance to all N training points |

> [!info] Approximate nearest neighbours
> For large datasets, exact KNN is impractical. Tree-based indices (KD-tree, ball tree — built into sklearn via `algorithm='kd_tree'`) reduce prediction to O(log N) for low-dimensional data. For high-dimensional data, approximate methods like **Annoy** or **FAISS** provide sub-linear lookup with small accuracy trade-offs.

## Sensitivity to outliers

KNN is **sensitive to outliers** because a single outlier can land among the K nearest neighbours and shift the prediction. Increase K or use `weights='distance'` to reduce the influence of any single noisy point.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. Why is KNN called a "lazy" learner?
2. What happens when K is very small? Very large?
3. Why is feature scaling critical for KNN?
4. How does weighted KNN differ from standard KNN?
5. What are the computational trade-offs of KNN?
6. When would you use Manhattan distance over Euclidean?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Distance
>> [[../statistics/vector-norms|Vector Norms]], [[../statistics/cosine-similarity|Cosine Similarity]]
>
>> [!card] Data Prep
>> [[../ml-fundamentals/feature-engineering|Feature Engineering]], [[../ml-fundamentals/outlier-detection|Outlier Detection]]
>
>> [!card] Clustering
>> [[k-means|K-Means]]
