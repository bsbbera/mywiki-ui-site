---
title: Latent Semantic Analysis
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - LSA
  - Latent Semantic Analysis
  - Latent Semantic Indexing
  - LSI
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - InformationRetrieval
  - DimensionalityReduction
  - UnsupervisedLearning
banner:
publish: true
---

> [!quote]
> *LSA captures the latent structure in word usage by mapping high-dimensional term-document space into a lower-dimensional semantic space.*
> — Deerwester et al., 1990

# Latent Semantic Analysis

<p class="at-lead">
Latent Semantic Analysis (LSA) is a technique for analysing relationships between documents and the terms they contain by applying singular value decomposition to a term-document matrix. It discovers latent semantic relationships that improve information retrieval, document classification, and text similarity tasks.
</p>

## Overview

LSA constructs a term-document co-occurrence matrix and applies truncated SVD to project both terms and documents into a lower-dimensional semantic space. In this space, synonymous terms cluster together and documents are represented by their underlying topics rather than raw word frequencies, mitigating the vocabulary mismatch problem in search.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[latent-dirichlet-allocation]], [[non-negative-matrix-factorization]], [[pca]]
>
>> [!card] Parent topic
>> [[nlp-fundamentals]]
>
>> [!card] See also
>> [[embeddings]], [[information-retrieval]]
