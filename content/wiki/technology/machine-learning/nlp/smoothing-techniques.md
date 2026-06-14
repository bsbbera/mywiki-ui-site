---
title: Smoothing Techniques
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Smoothing Techniques
  - Language Model Smoothing
  - Katz Smoothing
  - Kneser-Ney Smoothing
  - Laplace Smoothing
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - LanguageModels
  - ProbabilisticModels
  - Statistics
banner:
publish: true
---

> [!quote]
> *Smoothing is the art of stealing probability mass from rich events to give to the poor, so that unseen events do not break our models.*
> — Speech and Language Processing, Jurafsky & Martin

# Smoothing Techniques

<p class="at-lead">
Smoothing techniques in NLP address the zero-probability problem for unseen n-grams by redistributing probability mass from frequent events to rare or unseen ones. They are essential for building robust language models, speech recognisers, and machine translation systems that do not collapse when encountering new word combinations.
</p>

## Overview

Simple Laplace (add-one) smoothing adds a constant count to every possible n-gram, but more sophisticated methods like Katz backoff and Kneser-Ney interpolation use lower-order distributions to estimate unseen higher-order probabilities. Modern neural language models implicitly smooth through distributed representations, but classical smoothing remains important for understanding probabilistic NLP foundations and for resource-constrained deployments.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[n-gram-model]], [[markov-models]], [[zipfs-law]]
>
>> [!card] Parent topic
>> [[nlp-fundamentals]]
>
>> [!card] See also
>> [[language-models]], [[machine-learning-fundamentals]]
