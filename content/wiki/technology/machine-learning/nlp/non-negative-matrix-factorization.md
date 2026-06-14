---
title: Non-Negative Matrix Factorization
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - NMF
  - Non-Negative Matrix Factorization
  - NNMF
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - TopicModelling
  - DimensionalityReduction
  - UnsupervisedLearning
banner:
publish: true
---

> [!quote]
> *Non-negativity constraints lead to parts-based representations that are more intuitive and interpretable.*
> — Lee & Seung, 1999

# Non-Negative Matrix Factorization

<p class="at-lead">
Non-Negative Matrix Factorization (NMF) is a dimensionality reduction technique that decomposes a data matrix into two lower-rank matrices with strictly non-negative values. In NLP, it produces additive, parts-based topic models that are often more interpretable than those from classical matrix factorisation methods.
</p>

## Overview

NMF approximates a term-document matrix as the product of a term-topic matrix and a topic-document matrix, with all entries constrained to be non-negative. This additive decomposition yields topics that are combinations of words with positive weights, making them easier to interpret than the signed components produced by PCA or SVD.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[latent-dirichlet-allocation]], [[latent-semantic-analysis]], [[pca]]
>
>> [!card] Parent topic
>> [[nlp-fundamentals]]
>
>> [!card] See also
>> [[unsupervised-learning]], [[ml-algorithms]]
