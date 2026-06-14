---
title: Backtranslation
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Backtranslation
  - Back-Translation
  - Synthetic Data Generation
  - Data Augmentation for NLP
category: Machine Learning
tags:
  - MachineLearning
  - NLP
  - DataAugmentation
  - MachineTranslation
  - LowResource
banner:
publish: true
---

> [!quote]
> *Backtranslation turns a monolingual resource into a parallel one — a simple trick with profound impact on low-resource languages.*
> — Neural Machine Translation Research

# Backtranslation

<p class="at-lead">
Backtranslation is a data augmentation technique in which monolingual text in a target language is automatically translated to a source language and then used as synthetic parallel data for training machine translation models. It has become a standard method for improving translation quality, especially in low-resource settings.
</p>

## Overview

By translating target-side monolingual data back into the source language, backtranslation creates noisy but useful parallel sentence pairs. When combined with genuine parallel data, these synthetic examples significantly improve both fluency and adequacy in neural machine translation systems. The technique has also been adapted for paraphrase generation, text simplification, and semi-supervised NLP.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[machine-translation]], [[language-models]], [[text-classification]]
>
>> [!card] Parent topic
>> [[nlp-fundamentals]]
>
>> [!card] See also
>> [[sequence-models]], [[transformers]]
