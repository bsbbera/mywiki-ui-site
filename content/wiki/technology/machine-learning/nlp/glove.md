---
title: GloVe
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - GloVe
  - Global Vectors for Word Representation
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - Embeddings
  - WordVectors
banner:
publish: true
---

> [!quote]
> *The statistics of word occurrences in a corpus is the primary source of information available to all unsupervised methods for learning word representations.*
> — Pennington, Socher & Manning, 2014

# GloVe

<p class="at-lead">
GloVe (Global Vectors for Word Representation) is an unsupervised learning algorithm for obtaining vector representations of words by leveraging global corpus statistics. It combines the benefits of matrix factorisation and local context-window methods to produce word embeddings that capture semantic and syntactic relationships.
</p>

## Overview

Unlike Word2Vec, which trains on local context windows, GloVe explicitly factorises a global word-word co-occurrence matrix. It learns embeddings such that the dot product between two word vectors approximates the logarithm of their co-occurrence probability, yielding meaningful geometric relationships — famously, *king - man + woman ≈ queen*.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[word2vec]], [[fasttext]], [[embeddings]]
>
>> [!card] Parent topic
>> [[nlp-fundamentals]]
>
>> [!card] See also
>> [[bert]], [[language-models]]
