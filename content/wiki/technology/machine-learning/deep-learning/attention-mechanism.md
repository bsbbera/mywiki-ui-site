---
title: Attention Mechanism
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Attention Mechanism
  - Self-Attention
  - Multi-Head Attention
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - NLP
  - Transformers
  - Attention
banner:
publish: true
---

> [!quote]
> *Attention is all you need.*
> — Vaswani et al., 2017

# Attention Mechanism

<p class="at-lead">
The attention mechanism allows neural networks to dynamically focus on the most relevant parts of an input when producing each part of an output. It is the architectural breakthrough that made Transformers possible and now dominates natural language processing, computer vision, and beyond.
</p>

## Overview

Instead of compressing an entire sequence into a fixed-length vector, attention computes a weighted sum over all input positions for each output position. **Self-attention** extends this idea so that every token in a sequence can attend to every other token, enabling parallel processing and capturing long-range dependencies regardless of distance.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[transformers]], [[vision-transformer]], [[bert]]
>
>> [!card] Parent topic
>> [[deep-learning]]
>
>> [!card] See also
>> [[sequence-models]], [[language-models]]
