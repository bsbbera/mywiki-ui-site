---
title: Zipf's Law
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Zipf's Law
  - Zipfian Distribution
  - Linguistic Power Laws
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - Statistics
  - Linguistics
  - InformationTheory
banner:
publish: true
---

> [!quote]
> *The frequency of any word is inversely proportional to its rank in the frequency table.*
> — George Kingsley Zipf, 1935

# Zipf's Law

<p class="at-lead">
Zipf's Law states that the frequency of a word in a natural language corpus is inversely proportional to its rank. This empirical regularity has profound implications for language modelling, vocabulary design, and compression — a small number of words account for the vast majority of text.
</p>

## Overview

If the most frequent word occurs N times, the second most frequent occurs approximately N/2 times, the third N/3 times, and so on. This power-law distribution explains why smoothing, subword tokenisation, and embedding pruning are necessary in NLP systems, and why rare words dominate model parameters despite appearing infrequently.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[smoothing-techniques]], [[n-gram-model]], [[markov-models]]
>
>> [!card] Parent topic
>> [[nlp-fundamentals]]
>
>> [!card] See also
>> [[language-models]], [[entropy-information-theory]]
