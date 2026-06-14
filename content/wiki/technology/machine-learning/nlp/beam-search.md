---
title: Beam Search
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Beam Search
  - Beam Decoding
  - Greedy Decoding
  - Autoregressive Decoding
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - Decoding
  - SequenceModels
  - DeepLearning
banner:
publish: true
---

> [!quote]
> *Beam search trades exhaustive search for efficiency, keeping the most promising partial hypotheses alive at each step.*
> — Sequence Generation Literature

# Beam Search

<p class="at-lead">
Beam Search is a heuristic search algorithm widely used for decoding in sequence generation tasks like machine translation and text summarisation. Instead of committing to a single token at each step, it maintains a fixed number of top partial sequences, producing higher-quality outputs than greedy decoding at modest computational cost.
</p>

## Overview

At each generation step, beam search expands all current hypotheses, scores the combined sequences, and retains only the top-k candidates. While it improves over greedy search, it can suffer from early termination, length bias, and lack of diversity. Variants like diverse beam search, length normalisation, and sampling-based methods address these limitations in modern large language models.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[machine-translation]], [[language-models]], [[text-summarization]]
>
>> [!card] Parent topic
>> [[nlp-fundamentals]]
>
>> [!card] See also
>> [[sequence-models]], [[transformers]]
