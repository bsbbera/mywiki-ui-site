---
title: Markov Models
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Markov Models
  - Markov Chain
  - Hidden Markov Model
  - HMM
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - ProbabilisticModels
  - SequenceModels
  - Statistics
banner:
publish: true
---

> [!quote]
> *The future is independent of the past given the present.*
> — Andrey Markov

# Markov Models

<p class="at-lead">
Markov models are probabilistic models that assume the future state depends only on the present state, not on the full history. They underpin n-gram language models, speech recognition, part-of-speech tagging, and reinforcement learning, offering computationally efficient ways to model sequential data.
</p>

## Overview

A Markov chain models state transitions using a probability matrix, while a Hidden Markov Model (HMM) infers hidden states from observed emissions. In NLP, n-gram models are essentially Markov models of order n-1, and smoothing techniques like Katz backoff and Kneser-Ney interpolation address their data sparsity problems. Modern deep learning has largely replaced HMMs in NLP, but they remain foundational for understanding sequential probability.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[n-gram-model]], [[smoothing-techniques]], [[sequence-models]]
>
>> [!card] Parent topic
>> [[nlp-fundamentals]]
>
>> [!card] See also
>> [[reinforcement-learning]], [[machine-learning-fundamentals]]
