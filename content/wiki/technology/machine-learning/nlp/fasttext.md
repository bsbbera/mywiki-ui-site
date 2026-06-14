---
title: FastText
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - FastText
  - fastText
  - Subword Embeddings
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - Embeddings
  - WordVectors
  - Classification
banner:
publish: true
---

> [!quote]
> *Rare words can now be represented well, thanks to character n-gram features.*
> — Bojanowski et al., 2017

# FastText

<p class="at-lead">
FastText is a library for efficient learning of word representations and sentence classification developed by Facebook AI Research. It extends Word2Vec by representing each word as a bag of character n-grams, enabling it to generate embeddings for out-of-vocabulary words and morphologically rich languages.
</p>

## Overview

FastText breaks words into subword units, so the embedding for "unknown" is composed from n-gram vectors like "unk", "kno", "now", etc. This makes it robust to misspellings, rare words, and languages with rich morphology. Its supervised classifier is also orders of magnitude faster than traditional deep learning approaches for text classification tasks.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[word2vec]], [[glove]], [[embeddings]]
>
>> [!card] Parent topic
>> [[nlp-fundamentals]]
>
>> [!card] See also
>> [[text-classification]], [[language-models]]
