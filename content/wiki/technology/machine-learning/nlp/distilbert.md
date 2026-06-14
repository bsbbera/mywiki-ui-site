---
title: DistilBERT
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - DistilBERT
  - Distilled BERT
  - Model Compression
  - Hugging Face
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - Transformers
  - BERT
  - Distillation
banner:
publish: true
---

> [!quote]
> *DistilBERT is a small, fast, cheap and light Transformer model trained by distilling BERT base.*
> — Hugging Face

# DistilBERT

<p class="at-lead">
DistilBERT is a compressed version of BERT developed by Hugging Face. It retains 97% of BERT's language understanding while being 60% smaller, 60% faster, and requiring fewer compute resources — making it ideal for production deployment on edge devices and latency-sensitive applications.
</p>

## Overview

DistilBERT uses **knowledge distillation** during pre-training: a smaller student network learns to mimic the outputs of the larger BERT teacher. The distillation objective combines the soft target probabilities from BERT, the hard true labels, and a cosine embedding loss to align hidden states.

The model removes the token-type embeddings and the pooler, uses half the layers, and applies a triple loss for robust training. Despite its size reduction, DistilBERT performs competitively on downstream GLUE tasks. It popularised the idea that model compression can preserve quality while dramatically improving efficiency.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[bert|BERT]], [[model-compression|Model Compression]], [[knowledge-distillation|Knowledge Distillation]]
>
>> [!card] Parent topic
>> [[nlp|NLP]]
>
>> [!card] See also
>> [[transformers|Transformers]], [[electra|ELECTRA]], [[quantization|Quantization]]