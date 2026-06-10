---
title: Vector Norms
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Vector Norms
  - L1 Norm
  - L2 Norm
  - Manhattan Distance
  - Euclidean Distance
  - L-infinity Norm
category: Statistics
tags:
  - Statistics
  - Mathematics
  - MachineLearning
  - LinearAlgebra
banner: https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "In mathematics, the art of asking questions is more valuable than solving problems."
> <cite>— Georg Cantor</cite>

---

<span class="at-kicker">Statistics · Linear Algebra</span>

# Vector Norms

<p class="at-lead">
A norm measures the total "length" of all vectors in a space. Different norms define different notions of distance and are used throughout machine learning — in regularisation, distance-based algorithms, and loss functions.
</p>

<span class="at-stat">L0 · L1 · L2 · L∞</span> &nbsp;·&nbsp; <span class="at-stat">Lasso · Ridge</span> &nbsp;·&nbsp; <span class="at-stat">geometric shapes</span> &nbsp;·&nbsp; <span class="at-mark">L1's pointy diamond corners touch the axes — that's why Lasso produces sparse solutions</span>

<span class="at-kicker">L0 Norm</span>

## L0 Norm

*Technically not a true norm*, but widely used.

$$\|x\|_0 = \text{count of non-zero elements in } x$$

**Examples:**

| Vector | L0 Norm |
| --- | --- |
| (0, 3) | 1 |
| (0, 0) | 0 |
| (2, 5) | 2 |

> [!info] Use case: sparsity
> L0 measures how many features a model actually uses. It also counts mismatches between two vectors (e.g., username/password check: L0 = 0 means both correct, L0 = 1 means one wrong, L0 = 2 means both wrong).

---

<span class="at-kicker">L1 Norm</span>

## L1 Norm — Manhattan Distance

$$\|x\|_1 = |x_1| + |x_2| + \cdots + |x_n|$$

Also called **Taxicab norm** or **Manhattan distance** — the distance you would travel along a city grid.

> [!tip] ML use: Lasso regularisation
> L1 regularisation (**Lasso**) adds $\lambda \|w\|_1$ to the loss. It encourages **sparsity** (drives weights to exactly zero → feature selection).

---

<span class="at-kicker">L2 Norm</span>

## L2 Norm — Euclidean Distance

$$\|x\|_2 = \sqrt{x_1^2 + x_2^2 + \cdots + x_n^2}$$

The **straight-line** (shortest) distance between two points.

> [!tip] ML use: Ridge regularisation
> L2 regularisation (**Ridge**) adds $\lambda \|w\|_2^2$ to the loss. It shrinks weights toward zero but rarely to exactly zero → keeps all features but reduces their magnitude.

---

<span class="at-kicker">Lp & L∞ Norms</span>

## Lp Norm (general)

$$\|x\|_p = \left( |x_1|^p + |x_2|^p + \cdots + |x_n|^p \right)^{1/p}$$

L1 (p=1) and L2 (p=2) are the most common special cases.

## L∞ Norm — Chebyshev Distance

$$\|x\|_\infty = \max_i |x_i|$$

The maximum absolute value across all elements.

**Example:** For vector [10, -11, 20] → L∞ = 20.

---

<span class="at-kicker">Comparison</span>

## Comparison

> [!grid|cols2]
>
>> [!card|section]
>> ###### L1 NORM
>> ### L1 — *Diamond* Shape
>> Geometry: diamond (unit ball). Encourages sparse solutions — corners of the diamond touch axes, so optima tend to land where weights = 0. Used in Lasso regularisation and Manhattan distance.
>
>> [!card|section]
>> ###### L2 NORM
>> ### L2 — *Circle* Shape
>> Geometry: circle (unit ball). Shrinks all weights uniformly — smooth minima, rarely exact zeros. Used in Ridge regularisation and Euclidean distance (KNN, SVM).
>
>> [!card|section]
>> ###### L0 NORM
>> ### L0 — *Sparsity* Count
>> Counts non-zero elements. Not a true norm (no homogeneity). Directly measures sparsity — how many features are actively used by a model.
>
>> [!card|section]
>> ###### L∞ NORM
>> ### L∞ — *Square* Shape
>> Geometry: square (unit ball). Returns the maximum absolute element. Used in Chebyshev distance — useful when the largest single-dimension difference dominates.

| Norm | Formula | Geometry | ML Use |
| --- | --- | --- | --- |
| L0 | count(x ≠ 0) | — | Sparsity measure |
| L1 | Σ\|xᵢ\| | Diamond | Lasso regularisation |
| L2 | √(Σxᵢ²) | Circle | Ridge regularisation, KNN |
| L∞ | max\|xᵢ\| | Square | Chebyshev distance |

> [!info] Geometric intuition
> The "unit ball" of each norm (all vectors with norm = 1) has a different shape: L1 forms a diamond, L2 forms a circle, L∞ forms a square. L1's pointy corners touch the axes — that's why L1 produces sparse solutions.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is the difference between L1 and L2 norms?
2. Why does L1 regularisation produce sparse weights while L2 does not?
3. When would you prefer Manhattan distance over Euclidean distance?
4. What does the L∞ norm represent geometrically?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Regularisation
>> [[../ml-algorithms/ridge-lasso-elastic-net|Ridge, Lasso & Elastic Net]]
>
>> [!card] Similarity
>> [[cosine-similarity|Cosine Similarity]], [[../ml-algorithms/knn|KNN]]
>
>> [!card] Statistics
>> [[descriptive-statistics|Descriptive Statistics]], [[mathematical-foundations-for-ml|Mathematical Foundations]]
