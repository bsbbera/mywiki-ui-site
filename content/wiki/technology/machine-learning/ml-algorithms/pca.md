---
title: PCA & Dimensionality Reduction
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - PCA
  - Principal Component Analysis
  - LDA
  - Linear Discriminant Analysis
  - T-SNE
  - Dimensionality Reduction
  - Eigenvectors
  - Eigenvalues
category: Machine Learning
tags:
  - MachineLearning
  - DimensionalityReduction
  - UnsupervisedLearning
  - DataScience
banner: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "The greatest value of a picture is when it forces us to notice what we never expected to see."
> <cite>— John Tukey</cite>

---

<span class="at-kicker">Unsupervised Learning · Dimensionality Reduction</span>

# PCA & Dimensionality Reduction

<p class="at-lead">
Principal Component Analysis transforms a large set of correlated variables into a smaller set of uncorrelated variables — called principal components — that retain most of the information in the original data. It is the workhorse of dimensionality reduction for noise reduction, visualisation, and preprocessing.
</p>

<span class="at-stat">eigen-decomposition</span> &nbsp;·&nbsp; <span class="at-stat">variance explained</span> &nbsp;·&nbsp; <span class="at-stat">PCA · LDA · t-SNE</span> &nbsp;·&nbsp; <span class="at-mark">always standardise before PCA — scale dominates components</span>

<span class="at-kicker">PCA Steps</span>

## PCA steps

### 1. Standardisation

PCA is sensitive to feature scales — features with larger ranges will dominate the components. Always standardise first:

$$z = \frac{x - \mu}{\sigma}$$

### 2. Covariance matrix

Captures how features vary together:

$$\Sigma = \begin{bmatrix}
\text{Cov}(x_1, x_1) & \text{Cov}(x_1, x_2) & \cdots & \text{Cov}(x_1, x_n) \\
\text{Cov}(x_2, x_1) & \text{Cov}(x_2, x_2) & \cdots & \text{Cov}(x_2, x_n) \\
\vdots & \vdots & \ddots & \vdots \\
\text{Cov}(x_n, x_1) & \text{Cov}(x_n, x_2) & \cdots & \text{Cov}(x_n, x_n)
\end{bmatrix}$$

### 3. Eigen-decomposition

Compute **eigenvectors** and **eigenvalues** of the covariance matrix:

- **Eigenvectors** = directions of maximum variance in the data (the principal components).
- **Eigenvalues** = magnitude of variance in each direction.

Sort eigenvectors by descending eigenvalue. The top-k eigenvectors form the projection matrix.

### 4. Feature vector

Select the top $k$ eigenvectors to form a $D \times k$ transformation matrix $W$. This is where dimensionality reduction happens — projecting from $D$ dimensions to $k$.

### 5. Recast the data

Project the standardised data onto the new $k$-dimensional space:

$$X_{\text{reduced}} = X_{\text{standardised}} \cdot W$$

---

<span class="at-kicker">Variance Explained</span>

## Variance explained

The proportion of total variance retained by the first $k$ components:

$$\text{Explained Variance} = \frac{\sum_{i=1}^k \lambda_i}{\sum_{i=1}^D \lambda_i}$$

> [!tip] How many components to keep?
> A common rule is to retain enough components to explain 95% of variance. Plot a **scree plot** (explained variance ratio vs. component number) — the elbow indicates where adding more components yields diminishing returns. You can also pass `n_components=0.95` to sklearn's PCA to automate this.

> [!example] PCA in scikit-learn
> ```python
> from sklearn.decomposition import PCA
> from sklearn.preprocessing import StandardScaler
>
> X_scaled = StandardScaler().fit_transform(X)
>
> pca = PCA(n_components=0.95)          # retain 95% of variance automatically
> X_pca = pca.fit_transform(X_scaled)
>
> print(pca.n_components_)              # number of components selected
> print(pca.explained_variance_ratio_)  # per-component variance fractions
> ```

---

<span class="at-kicker">LDA — Supervised Reduction</span>

## Linear Discriminant Analysis (LDA)

LDA is a **supervised** dimensionality reduction technique. Unlike PCA, which maximises total **variance**, LDA maximises **class separability** — the ratio of between-class variance to within-class variance.

| | PCA | LDA |
| --- | --- | --- |
| **Type** | Unsupervised | Supervised |
| **Goal** | Maximise variance | Maximise class separation |
| **Uses labels** | No | Yes |
| **Max components** | $\leq$ number of features | $\leq$ number of classes - 1 |

> [!info] PCA vs. LDA — when to use each
> Use PCA for unsupervised exploration when you want to find the directions of greatest variance in the data. Use LDA when you know class labels and want to find projections that best separate the classes. LDA can be dramatically better for supervised learning tasks, but it is strictly limited to `n_classes - 1` dimensions.

> [!example] LDA in scikit-learn
> ```python
> from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
>
> lda = LinearDiscriminantAnalysis(n_components=2)
> X_lda = lda.fit_transform(X_scaled, y)  # requires labels y
> ```

---

<span class="at-kicker">t-SNE — Non-Linear Visualisation</span>

## t-SNE — non-linear visualisation

**t-Distributed Stochastic Neighbour Embedding** is a non-linear, unsupervised algorithm for visualising high-dimensional data in 2D or 3D.

### Key properties

- **Non-linear** — captures complex manifolds and cluster structures that PCA misses.
- **Local structure** — preserves neighbourhoods: nearby points in high-dimensional space stay nearby in the projection.
- **Probabilistic** — converts distances into conditional probabilities of neighbourhood membership.

### Perplexity

Controls the balance between local and global structure. Think of it as a rough estimate of the number of close neighbours each point has. Typical values: **5–50**.

> [!info] Why "t-SNE" uses Student's t
> t-SNE uses the **Student's t-distribution** (heavy tails) in the low-dimensional space instead of a Gaussian. This prevents the "crowding problem" where all points collapse together in a small area — the heavy tails allow moderately distant points to be placed further apart.

### Caveats

| Caveat | Explanation |
| --- | --- |
| **Non-deterministic** | Different runs produce different layouts (always set `random_state`) |
| **No global structure** | Distances *between* clusters in the plot are not meaningful |
| **Slow** | O(N²) complexity; struggles with > 10,000 points |
| **Parameter-sensitive** | Perplexity and learning rate strongly affect the visual result |

> [!warning] t-SNE is for visualisation only
> Do not use t-SNE projections as input features for a downstream model. The transformation is non-parametric, non-invertible, and the distances between clusters carry no meaningful information. PCA or UMAP are better choices for preprocessing before training.

> [!example] t-SNE pipeline — PCA first, then t-SNE
> ```python
> from sklearn.decomposition import PCA
> from sklearn.manifold import TSNE
>
> # Reduce to 50 dims first (speeds up t-SNE dramatically)
> X_pca50 = PCA(n_components=50).fit_transform(X_scaled)
> X_tsne  = TSNE(n_components=2, perplexity=30, random_state=42).fit_transform(X_pca50)
> ```
> Running t-SNE directly on raw high-dimensional data is slow and often produces poor visualisations. The PCA pre-reduction step removes noise and speeds up the computation.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is the difference between PCA and LDA?
2. Why must data be standardised before PCA?
3. What do eigenvalues and eigenvectors represent in PCA?
4. How do you decide how many principal components to keep?
5. What is the "crowding problem," and how does t-SNE solve it?
6. Why are distances between clusters in a t-SNE plot not meaningful?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Unsupervised
>> [[k-means|K-Means]], [[../ml-fundamentals/unsupervised-learning|Unsupervised Learning]]
>
>> [!card] Feature Work
>> [[../ml-fundamentals/feature-engineering|Feature Engineering]], [[../ml-fundamentals/feature-selection|Feature Selection]]
>
>> [!card] Statistics
>> [[../statistics/vector-norms|Vector Norms]], [[../statistics/covariance|Covariance & Correlation]]
