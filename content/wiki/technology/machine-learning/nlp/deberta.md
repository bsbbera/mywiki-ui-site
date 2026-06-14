---
title: DeBERTa
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - DeBERTa
  - Decoding-enhanced BERT
  - Disentangled Attention
  - Microsoft NLP
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - Transformers
  - BERT
banner:
publish: true
---

> [!quote]
> *DeBERTa improves BERT and RoBERTa using disentangled attention and an enhanced mask decoder.*
> — Microsoft Research

# DeBERTa

<p class="at-lead">
DeBERTa (Decoding-enhanced BERT with Disentangled Attention) is a transformer-based language model developed by Microsoft Research. It advances BERT by disentangling content and position embeddings in the self-attention mechanism and using an enhanced mask decoder for pre-training.
</p>

## Overview

Traditional BERT represents each word with a single vector combining content and position. DeBERTa separates these into two vectors, allowing the attention mechanism to compute content-to-content, content-to-position, and position-to-content attention scores independently. This captures relative positional dependencies more expressively.

DeBERTa also replaces the softmax output layer with a virtual adversarial training objective and an enhanced mask decoder. It achieved state-of-the-art results on the SuperGLUE benchmark, surpassing human baselines on several tasks. DeBERTa v2 and v3 introduce additional efficiency improvements.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[bert|BERT]], [[roberta|RoBERTa]], [[transformers|Transformers]]
>
>> [!card] Parent topic
>> [[nlp|NLP]]
>
>> [!card] See also
>> [[masked-language-model|Masked Language Model]], [[distilbert|DistilBERT]], [[language-models|Language Models]]