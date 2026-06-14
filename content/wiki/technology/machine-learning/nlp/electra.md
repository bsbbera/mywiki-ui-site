---
title: ELECTRA
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - ELECTRA
  - Efficiently Learning an Encoder
  - Replaced Token Detection
  - Clark et al.
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - Transformers
  - Pre-training
  - BERT
banner:
publish: true
---

> [!quote]
> *ELECTRA trains token detectors rather than masked language models, achieving comparable performance with far less compute.*
> — Kevin Clark et al., Stanford & Google

# ELECTRA

<p class="at-lead">
ELECTRA (Efficiently Learning an Encoder that Classifies Token Replacements Accurately) is a pre-training method for language encoders developed by Stanford and Google. Instead of masking tokens like BERT, ELECTRA trains a discriminator to detect which tokens in a sentence have been replaced by a small generator network.
</p>

## Overview

The replaced token detection (RTD) task is more sample-efficient than masked language modelling because the model learns from every token in the input, not just the 15% that are masked. A small generator (typically a masked language model) produces plausible replacements; the discriminator learns to distinguish real from fake tokens.

ELECTRA achieves BERT-base accuracy with roughly one-quarter the compute, and outperforms RoBERTa and XLNet on several benchmarks when trained at scale. It demonstrates that the pre-training objective matters as much as model size, influencing subsequent efficient pre-training research.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[bert|BERT]], [[masked-language-model|Masked Language Model]], [[transformers|Transformers]]
>
>> [!card] Parent topic
>> [[nlp|NLP]]
>
>> [!card] See also
>> [[distilbert|DistilBERT]], [[roberta|RoBERTa]], [[pre-training|Pre-training]]