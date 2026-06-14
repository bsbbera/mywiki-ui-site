---
title: Masked Language Model
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Masked Language Model
  - MLM
  - Cloze Task
  - Denoising Autoencoder
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - DeepLearning
  - Transformers
  - BERT
banner:
publish: true
---

> [!quote]
> *The masked language model objective — predict the missing word — is the simple idea that powers BERT and a generation of NLP breakthroughs.*
> — Jacob Devlin et al. (BERT authors)

# Masked Language Model

<p class="at-lead">
A Masked Language Model (MLM) is a pre-training objective for transformers where random tokens in a sentence are hidden (masked) and the model learns to predict them from context. It is the foundation of bidirectional encoders like BERT, RoBERTa, and DeBERTa.
</p>

## Overview

Unlike autoregressive language models (GPT) that predict the next token left-to-right, MLMs use **bidirectional context** — words from both left and right of the mask — to make predictions. During pre-training, a fraction of input tokens (typically 15%) are replaced with a [MASK] token, a random token, or kept unchanged, and the model is trained to recover the original.

This denoising objective produces rich contextualised embeddings that excel at downstream tasks like classification, question answering, and named entity recognition via fine-tuning. However, MLMs face a pretrain-finetune discrepancy (the [MASK] token never appears during fine-tuning), which later architectures like XLNet and DeBERTa address.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[bert|BERT]], [[deberta|DeBERTa]], [[transformers|Transformers]], [[language-models|Language Models]]
>
>> [!card] Parent topic
>> [[deep-learning|Deep Learning]]
>
>> [!card] See also
>> [[nlp|NLP]], [[word2vec|Word2Vec]], [[transfer-learning|Transfer Learning]]