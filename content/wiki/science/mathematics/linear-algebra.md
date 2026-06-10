---
title: Linear Algebra
created:
  - 2026-06-09
date modified: Tuesday, June 9th 2026, 6:00:00 pm
aliases:
  - Linear Algebra
  - Vector
  - Eigenvalue
  - Eigenvector
  - Matrix Decomposition
category: Mathematics
tags:
  - Mathematics
  - LinearAlgebra
  - MachineLearning
  - PCA
banner: https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Linear algebra is the mathematics of vectors and matrices, and it is the language in which the laws of machine learning are written."
> <cite>— Unknown</cite>

---

<span class="at-kicker">Mathematics · Foundations</span>

# Linear Algebra

<p class="at-lead">
Linear algebra provides the mathematical framework for representing data and transformations in machine learning. Vectors encode individual data points, matrices encode transformations, and eigen-decomposition reveals the fundamental axes along which data varies — the very principle behind PCA, spectral clustering, and many other ML algorithms.
</p>

<span class="at-stat">vectors</span> &nbsp;&middot;&nbsp; <span class="at-stat">matrices</span> &nbsp;&middot;&nbsp; <span class="at-stat">eigen-decomposition</span> &nbsp;&middot;&nbsp; <span class="at-mark">the geometry of data</span>

<span class="at-kicker">Vectors</span>

## Vectors

A **vector** is an ordered list of numbers that can represent a point in space, a data instance, or a direction with magnitude.

$$\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}$$

### Vector operations

| Operation | Notation | Formula | Interpretation |
|-----------|----------|---------|----------------|
| **Addition** | $\mathbf{u} + \mathbf{v}$ | Element-wise sum | Combine directions |
| **Scalar multiplication** | $c\mathbf{v}$ | Multiply each element | Scale magnitude |
| **Dot product** | $\mathbf{u} \cdot \mathbf{v}$ | $\sum_{i=1}^{n} u_i v_i$ | Measures alignment |
| **Norm (length)** | $\|\mathbf{v}\|$ | $\sqrt{\sum v_i^2}$ | Distance from origin |

### Dot product and cosine similarity

The dot product relates directly to the angle between vectors:

$$\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \|\mathbf{v}\| \cos\theta$$

When both vectors are unit length, the dot product *is* the cosine of the angle between them — this is the foundation of [[../../technology/machine-learning/statistics/cosine-similarity|cosine similarity]] used throughout NLP and information retrieval.

> [!tip] Geometric intuition
> - Dot product = 0 → vectors are orthogonal (perpendicular)
> - Dot product > 0 → vectors point in similar directions
> - Dot product < 0 → vectors point in opposite directions

---

<span class="at-kicker">Eigenvalues & Eigenvectors</span>

## Eigen-decomposition

For a square matrix $\mathbf{A}$, an **eigenvector** $\mathbf{v}$ is a non-zero vector that, when multiplied by $\mathbf{A}$, yields only a scalar multiple of itself:

$$\mathbf{A}\mathbf{v} = \lambda\mathbf{v}$$

Where:
- $\mathbf{A}$ = square matrix
- $\mathbf{v}$ = eigenvector (direction)
- $\lambda$ = eigenvalue (scalar stretching factor)

### Geometric interpretation

> [!info] What eigen-decomposition reveals
> An eigenvector is a direction that remains unchanged (up to scaling) when the linear transformation $\mathbf{A}$ is applied. The eigenvalue $\lambda$ tells you **how much** the vector is stretched or compressed:
> - $\lambda > 1$ → stretched along that direction
> - $0 < \lambda < 1$ → compressed
> - $\lambda < 0$ → flipped and scaled

### Finding eigenvalues

Rearranging $\mathbf{A}\mathbf{v} = \lambda\mathbf{v}$:

$$(\mathbf{A} - \lambda\mathbf{I})\mathbf{v} = \mathbf{0}$$

For non-trivial solutions, the determinant must be zero:

$$\det(\mathbf{A} - \lambda\mathbf{I}) = 0$$

This **characteristic equation** yields the eigenvalues. Each eigenvalue is then substituted back to find its corresponding eigenvector.

### Key properties

| Property | Description |
|----------|-------------|
| **Real symmetric matrices** | Always have real eigenvalues and orthogonal eigenvectors |
| **Positive definite** | All eigenvalues > 0; appears in covariance matrices |
| **Trace** | Sum of eigenvalues equals sum of diagonal entries |
| **Determinant** | Product of eigenvalues equals the determinant |

---

<span class="at-kicker">Why This Matters in ML</span>

## Applications in Machine Learning

### Principal Component Analysis (PCA)

[[../../technology/machine-learning/ml-algorithms/pca|PCA]] computes the eigenvectors of the covariance matrix — these are the **principal components**, the directions of maximum variance in the data. The corresponding eigenvalues quantify how much variance each component captures.

> [!example] PCA intuition
> If you have 2D data stretched into an ellipse, the eigenvectors of the covariance matrix point along the major and minor axes of that ellipse. Projecting onto the major axis (largest eigenvalue) preserves the most information in a single dimension.

### Spectral clustering

Eigenvectors of the graph Laplacian reveal community structure in networks.

### PageRank

The dominant eigenvector of the web-link transition matrix gives page importance scores.

### Linear dynamical systems

Eigenvalues determine stability: if all eigenvalues of a system matrix have magnitude < 1, the system converges to equilibrium.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is the geometric meaning of an eigenvector?
2. Why must the matrix be square to have eigenvalues?
3. How do eigenvalues relate to the variance captured by PCA?
4. What does it mean if a covariance matrix has a very small eigenvalue?
5. Why are real symmetric matrices guaranteed to have real eigenvalues?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] ML Algorithms
>> [[../../technology/machine-learning/ml-algorithms/pca|PCA]] · [[../../technology/machine-learning/ml-algorithms/svm|SVM]] · [[../../technology/machine-learning/ml-algorithms/knn|KNN]]
>
>> [!card] Statistics
>> [[../../technology/machine-learning/statistics/cosine-similarity|Cosine Similarity]] · [[../../technology/machine-learning/statistics/vector-norms|Vector Norms]] · [[../../technology/machine-learning/statistics/descriptive-statistics|Descriptive Statistics]]
>
>> [!card] Mathematics
>> [[calculus|Calculus]] · [[series|Taylor & Maclaurin Series]] · [[combinatorics|Combinatorics]]
