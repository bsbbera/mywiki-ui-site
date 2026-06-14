---
title: Latent Dirichlet Allocation
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - LDA
  - Latent Dirichlet Allocation
  - Topic Modelling
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - TopicModelling
  - Bayesian
  - UnsupervisedLearning
banner:
publish: true
---

> [!quote]
> *LDA provides a generative probabilistic model of a corpus, discovering the topics that best explain the observed word frequencies.*
> — Blei, Ng & Jordan, 2003

# Latent Dirichlet Allocation

<p class="at-lead">
Latent Dirichlet Allocation (LDA) is a generative statistical model that discovers latent topics within a collection of documents. It assumes each document is a mixture of topics and each topic is a mixture of words, making it a foundational technique for topic modelling, document clustering, and content recommendation.
</p>

## Overview

LDA uses Bayesian inference to learn the latent topic distributions from observed word counts. Unlike hard clustering, LDA assigns probabilistic memberships — a document might be 70% about technology and 30% about finance. It remains widely used for content tagging, trend analysis, and reducing high-dimensional text to interpretable topic vectors.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[non-negative-matrix-factorization]], [[latent-semantic-analysis]], [[text-classification]]
>
>> [!card] Parent topic
>> [[nlp-fundamentals]]
>
>> [!card] See also
>> [[machine-learning-fundamentals]], [[unsupervised-learning]]
