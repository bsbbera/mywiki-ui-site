---
title: Fine-Tuning
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Fine-Tuning
  - Transfer Learning
  - Domain Adaptation
  - Model Adaptation
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - TransferLearning
  - NLP
  - ComputerVision
banner:
publish: true
---

> [!quote]
> *Fine-tuning is the art of taking general knowledge and specialising it — the difference between a generalist and an expert.*
> — Deep Learning Practitioners

# Fine-Tuning

<p class="at-lead">
Fine-tuning is the process of adapting a pre-trained model to a specific downstream task or domain by continuing training on a smaller, task-specific dataset. It is the dominant paradigm in modern NLP and computer vision, enabling practitioners to leverage massive general-purpose models without training from scratch.
</p>

## Overview

Fine-tuning can update all model parameters or use parameter-efficient techniques like adapters, LoRA, and prompt tuning that freeze most weights. It requires careful learning rate selection, regularisation, and sometimes layer-wise learning rate decay. When done well, fine-tuning achieves near-state-of-the-art results with orders of magnitude less data and compute than training from random initialisation.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[transfer-learning]], [[language-models]], [[bert]]
>
>> [!card] Parent topic
>> [[deep-learning]]
>
>> [!card] See also
>> [[feature-engineering]], [[hyperparameter-tuning]]
