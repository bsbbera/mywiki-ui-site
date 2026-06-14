---
title: Doc2Vec
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Doc2Vec
  - Paragraph Vectors
  - Distributed Memory
  - PV-DM
  - PV-DBOW
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - Embeddings
  - DocumentRepresentation
  - Word2Vec
banner:
publish: true
---

> [!quote]
> *Paragraph vectors capture the semantic meaning of variable-length pieces of text.*
> — Quoc Le & Tomas Mikolov

# Doc2Vec

<p class="at-lead">
Doc2Vec, also known as Paragraph Vectors, is an unsupervised algorithm developed by Quoc Le and Tomas Mikolov at Google that learns fixed-length feature representations for variable-length pieces of text, such as sentences, paragraphs, and documents.
</p>

## Overview

Doc2Vec extends the Word2Vec architecture by adding a unique paragraph ID vector that acts as a memory of the topic or context. In the **PV-DM** (Distributed Memory) model, the paragraph vector and word vectors are combined to predict the next word. In **PV-DBOW** (Distributed Bag of Words), the paragraph vector is trained to predict words sampled from the paragraph.

The learned paragraph vectors can be used directly as features for classification, clustering, similarity search, and information retrieval. While superseded by contextual embeddings from BERT and transformers for many tasks, Doc2Vec remains lightweight, fast to train, and effective for smaller datasets or resource-constrained environments.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[word2vec|Word2Vec]], [[embeddings|Embeddings]], [[tf-idf|TF-IDF]]
>
>> [!card] Parent topic
>> [[nlp|NLP]]
>
>> [!card] See also
>> [[fasttext|FastText]], [[glove|GloVe]], [[transformers|Transformers]], [[information-retrieval|Information Retrieval]]