---
title: K-Means
Created:
  - 2026-06-08
date modified: Tuesday, June 9th 2026, 6:00:00 pm
aliases:
  - K-Means
  - Lloyd's Algorithm
  - Hierarchical Clustering
  - Silhouette Score
  - Clustering
category: Machine Learning
tags:
  - MachineLearning
  - Clustering
  - UnsupervisedLearning
  - DataScience
banner: https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Clustering is the task of grouping a set of objects in such a way that objects in the same group are more similar to each other than to those in other groups."
> <cite>— Wikipedia</cite>

---

<span class="at-kicker">Unsupervised Learning · Clustering</span>

# K-Means

<p class="at-lead">
K-Means is the most widely used clustering algorithm. It partitions data into K clusters by iteratively assigning each point to the nearest centroid and updating each centroid to the mean of its assigned points. Fast, scalable, and interpretable.
</p>

<span class="at-stat">Lloyd's algorithm</span> &nbsp;·&nbsp; <span class="at-stat">K-Means++</span> initialisation &nbsp;·&nbsp; <span class="at-stat">silhouette score</span> &nbsp;·&nbsp; <span class="at-mark">the starting point for all flat clustering tasks</span>

<span class="at-kicker">Lloyd's Algorithm</span>

## Lloyd's algorithm

> [!grid|cols2]
>
>> [!card|section]
>> ###### STEP 1
>> ### *Initialise* Centroids
>> Randomly select K points as initial centroids. K-Means++ (default in sklearn) spreads initial centroids intelligently to reduce bad local optima.
>
>> [!card|section]
>> ###### STEP 2
>> ### *Assign* Points
>> Assign each observation to the cluster with the nearest centroid (minimum squared Euclidean distance).
>
>> [!card|section]
>> ###### STEP 3
>> ### *Update* Centroids
>> Recalculate each centroid as the mean of all points assigned to it.
>
>> [!card|section]
>> ###### STEP 4
>> ### *Repeat* Until Convergence
>> Repeat steps 2–3 until assignments no longer change. Guaranteed to converge but may find a local optimum.

> [!info] Convergence guarantee
> Lloyd's algorithm is guaranteed to converge in a finite number of steps. However, it may converge to a **local optimum** — not the global best clustering. Running with multiple random initialisations (`n_init=10`) and selecting the best result (lowest inertia) mitigates this.

---

<span class="at-kicker">Choosing K</span>

## Choosing K

### Elbow method

Plot the **within-cluster sum of squares (WCSS / inertia)** vs. K. The "elbow" — where the rate of decrease sharply changes — suggests a natural K. If the curve is smooth without a clear elbow, the data may not have well-separated clusters.

### Silhouette score

Measures how similar a point is to its own cluster (cohesion) compared to the nearest other cluster (separation). Range: **[-1, 1]**.

| Score | Interpretation |
| --- | --- |
| **+1** | Well-clustered; far from neighbouring clusters |
| **0** | On the boundary between two clusters |
| **-1** | Misclassified; closer to another cluster than its own |

> [!tip] Elbow + Silhouette together
> Use the elbow method to narrow down K to 2–3 candidates, then pick the one with the highest average silhouette score. The two methods can disagree — silhouette is generally the more reliable signal.

> [!example] K-Means with evaluation in scikit-learn
> ```python
> from sklearn.cluster import KMeans
> from sklearn.metrics import silhouette_score
>
> kmeans = KMeans(n_clusters=5, init='k-means++', n_init=10, random_state=42)
> kmeans.fit(X)
>
> print(kmeans.inertia_)                     # WCSS (lower = tighter clusters)
> print(silhouette_score(X, kmeans.labels_)) # [-1, 1] (higher = better)
> ```
>
> Silhouette visualisations: `[[../../attachments/Pasted image 20230810165528.png|Silhouette 1]]` · `[[../../attachments/Pasted image 20230810165610.png|Silhouette 2]]` · `[[../../attachments/Pasted image 20230810165703.png|Silhouette 3]]`

---

<span class="at-kicker">Limitations & Improvements</span>

## Limitations

| Limitation | Impact |
| --- | --- |
| **Requires specifying K** | Must be chosen by the user; wrong K yields meaningless clusters |
| **Assumes spherical clusters** | Fails for non-convex shapes (e.g., moons, rings, elongated blobs) |
| **Sensitive to initialisation** | Bad starting centroids → poor local optimum |
| **Sensitive to outliers** | Outliers can drag centroids far from their true centre |
| **Scales poorly naively** | O(N · K · I · D) for N points, K clusters, I iterations, D dimensions |

### Improvements

- **K-Means++** — smart initialisation that spreads out starting centroids, reducing the chance of bad local optima. Default in sklearn (`init='k-means++'`).
- **Mini-Batch K-Means** — uses random mini-batches for each update step, dramatically reducing training time on large datasets with a small accuracy trade-off.

> [!example] Mini-Batch K-Means for large data
> ```python
> from sklearn.cluster import MiniBatchKMeans
>
> mb = MiniBatchKMeans(n_clusters=5, batch_size=1024, random_state=42)
> mb.fit(X_large)
> ```

---

<span class="at-kicker">Hierarchical Clustering</span>

## Hierarchical clustering

An alternative that builds a **tree of nested clusters** (dendrogram) rather than a flat partition. The dendrogram lets you choose the level of granularity after training — no upfront K required.

### Agglomerative (bottom-up)

1. Start with each point as its own cluster.
2. Iteratively merge the two closest clusters.
3. Continue until all points are in one cluster.

### Divisive (top-down)

1. Start with all points in one cluster.
2. Iteratively split the most heterogeneous cluster.

### Linkage criteria

| Criterion | Definition |
| --- | --- |
| **Single linkage** | Minimum distance between any two points in the clusters |
| **Complete linkage** | Maximum distance between any two points |
| **Average linkage** | Average distance between all pairs |
| **Ward** | Minimises total within-cluster variance (default in sklearn) |

> [!example] Agglomerative clustering
> ```python
> from sklearn.cluster import AgglomerativeClustering
>
> agg = AgglomerativeClustering(n_clusters=5, linkage='ward')
> labels = agg.fit_predict(X)
> ```
> Ward linkage produces compact, roughly equal-sized clusters and is the most robust general-purpose choice.

---

<span class="at-kicker">Density-Based Clustering</span>

## DBSCAN

**DBSCAN** (Density-Based Spatial Clustering of Applications with Noise) discovers clusters based on local density rather than centroid distance. It does **not** require specifying K upfront and can find clusters of arbitrary shape.

### Core concepts

| Point type | Definition |
|------------|------------|
| **Core point** | Has at least `minPts` neighbours within radius $\varepsilon$ |
| **Border point** | Within $\varepsilon$ of a core point, but not a core point itself |
| **Noise point** | Neither a core nor a border point |

### Algorithm

1. Pick an unvisited point. Find all points within distance $\varepsilon$.
2. If the neighbourhood contains $\geq$ `minPts`, mark as a **core point** and start a new cluster.
3. Recursively add all directly-density-reachable points to the cluster.
4. Repeat until all points are visited. Unclaimed points are **noise**.

### Hyperparameters

| Parameter | Role | Selection guidance |
|-----------|------|-------------------|
| $\varepsilon$ (eps) | Radius of neighbourhood | Use k-distance graph: plot distance to k-th neighbour; elbow often suggests good $\varepsilon$ |
| `minPts` | Minimum points to form dense region | Usually $\geq$ dimensionality + 1 (e.g., 4–5 for 2D–3D data) |

> [!example] DBSCAN in scikit-learn
> ```python
> from sklearn.cluster import DBSCAN
>
> dbscan = DBSCAN(eps=0.5, min_samples=5)
> labels = dbscan.fit_predict(X)
>
> # Labels == -1 indicate noise points
> n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
> ```

### Strengths and weaknesses

| Strength | Weakness |
|----------|----------|
| Discovers clusters of arbitrary shape | Sensitive to $\varepsilon$ and `minPts` |
| Identifies noise/outliers automatically | Struggles with clusters of varying densities |
| No need to pre-specify K | High-dimensional spaces dilute density metrics |

> [!info] When to prefer DBSCAN over K-Means
> Use DBSCAN when clusters are irregularly shaped, when you expect noise/outliers, or when you do not know K in advance. Use K-Means when clusters are roughly spherical and you need scalability to large N.

---

<span class="at-kicker">K-Means vs. Hierarchical vs. DBSCAN</span>

## Comparing Clustering Approaches

| | K-Means | Hierarchical | DBSCAN |
| --- | --- | --- | --- |
| Output | Flat partition | Tree (dendrogram) | Flat partition + noise labels |
| Scalability | O(N·K·I·D); best for large N | O(N²) or O(N³); slower | O(N log N) with spatial index |
| Cluster shape | Spherical | Depends on linkage | Arbitrary |
| Choosing K | Required upfront | Can be decided after building the tree | Not required |
| Noise handling | Forces every point into a cluster | Forces every point into a cluster | Explicitly labels outliers as noise |

> [!info] Which to choose?
> Use **K-Means** for large datasets where speed matters and clusters are roughly spherical. Use **hierarchical clustering** when you want to explore structure at multiple levels of granularity. Use **DBSCAN** when clusters have irregular shapes or when outlier detection is part of the task.

## K-Means vs. Hierarchical

| | K-Means | Hierarchical |
| --- | --- | --- |
| Output | Flat partition | Tree (dendrogram) |
| Scalability | Better for large N | O(N²) or O(N³); slower |
| Cluster shape | Spherical | Depends on linkage |
| Choosing K | Required upfront | Can be decided after building the tree |

> [!info] Which to choose?
> Use K-Means for large datasets where speed matters and you have a rough idea of K. Use hierarchical clustering when you want to explore the cluster structure at multiple levels of granularity, or when the dataset is small enough to afford the quadratic complexity.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. Describe Lloyd's algorithm step by step.
2. What is the difference between K-Means and K-Means++?
3. How does the elbow method help choose K?
4. What is the silhouette score, and what does a negative value mean?
5. When would you prefer hierarchical clustering over K-Means?
6. What cluster shapes does K-Means struggle with?
7. Explain the roles of core, border, and noise points in DBSCAN.
8. How does DBSCAN handle outliers compared to K-Means?
9. Why doesn't DBSCAN require specifying K in advance?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Unsupervised
>> [[pca|PCA]], [[../ml-fundamentals/unsupervised-learning|Unsupervised Learning]]
>
>> [!card] Distance
>> [[../statistics/vector-norms|Vector Norms]], [[knn|KNN]]
>
>> [!card] Evaluation
>> [[../ml-fundamentals/evaluation-metrics|Evaluation Metrics]]
>
>> [!card] Foundations
>> [[../../science/mathematics/linear-algebra|Linear Algebra]]
