---
title: t-SNE
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - t-SNE
  - t-Distributed Stochastic Neighbor Embedding
  - Nonlinear Dimensionality Reduction
category: Machine Learning
tags:
  - MachineLearning
  - DimensionalityReduction
  - Visualization
  - UnsupervisedLearning
  - ManifoldLearning
banner:
publish: true
---

> [!quote]
> *t-SNE reveals structure in high-dimensional data by preserving local neighborhoods in a low-dimensional map.*
> — Maaten & Hinton, 2008

# t-SNE

<p class="at-lead">
t-SNE is a nonlinear dimensionality reduction technique particularly well-suited for visualising high-dimensional data in two or three dimensions. It preserves local structure, making clusters and manifolds visually apparent — a staple of exploratory data analysis in machine learning and bioinformatics.
</p>

## Overview

t-SNE converts high-dimensional Euclidean distances into conditional probabilities that represent similarities, then minimises the Kullback-Leibler divergence between these probabilities in the high- and low-dimensional spaces. The t-distributed variant in the low-dimensional space alleviates the crowding problem, producing cleaner visual separations. It is now complemented by faster algorithms like UMAP for large-scale datasets.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[pca]], [[dbscan]], [[k-means]]
>
>> [!card] Parent topic
>> [[ml-algorithms]]
>
>> [!card] See also
>> [[unsupervised-learning]], [[feature-engineering]]
