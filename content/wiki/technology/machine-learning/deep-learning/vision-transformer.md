---
title: Vision Transformer
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Vision Transformer
  - ViT
  - Image Transformer
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - ComputerVision
  - Transformers
  - ViT
banner:
publish: true
---

> [!quote]
> *An image is worth 16x16 words.*
> — Dosovitskiy et al., 2020

# Vision Transformer (ViT)

<p class="at-lead">
The Vision Transformer applies the Transformer architecture — originally designed for text — directly to image patches, achieving state-of-the-art results in computer vision without convolutional layers. It demonstrated that pure attention can rival and even surpass CNNs when trained at sufficient scale.
</p>

## Overview

ViT splits an image into fixed-size patches, linearly embeds each patch, adds positional embeddings, and feeds the sequence into a standard Transformer encoder. Pre-trained on large datasets like ImageNet-21k or JFT-300M, ViT models transfer powerfully to downstream tasks and have inspired hybrid CNN-Transformer architectures used in production systems today.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[transformers]], [[attention-mechanism]], [[cnn]]
>
>> [!card] Parent topic
>> [[deep-learning]]
>
>> [!card] See also
>> [[bert]], [[transfer-learning]]
