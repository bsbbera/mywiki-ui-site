---
title: Autoencoders
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Autoencoders
  - Auto-Encoder
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - NeuralNetworks
  - UnsupervisedLearning
banner:
publish: true
---

> [!quote]
> *An autoencoder is a neural network trained to copy its input to its output.*
> — Deep Learning (Goodfellow et al.)

# Autoencoders

<p class="at-lead">
Autoencoders are neural networks that learn efficient data representations (encodings) by compressing input into a latent-space and then reconstructing the output from that representation. They are widely used for dimensionality reduction, denoising, anomaly detection, and generative modeling.
</p>

## Overview

An autoencoder consists of two parts: an **encoder** that maps input to a compressed latent representation, and a **decoder** that reconstructs the input from that representation. By constraining the latent space (e.g., via bottleneck size, sparsity, or probabilistic structure), autoencoders learn meaningful features without labeled data.

Variants include **denoising autoencoders** (robust to input corruption), **sparse autoencoders** (regularized activations), **contractive autoencoders** (penalize encoder sensitivity), and **variational autoencoders (VAEs)** (probabilistic latent spaces for generation).

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[neural-networks|Neural Networks]], [[cnn|CNNs]], [[rnn-lstm-gru|RNNs]], [[transformers|Transformers]]
>
>> [!card] Parent topic
>> [[deep-learning|Deep Learning]]
>
>> [!card] See also
>> [[pca|PCA]], [[image-generation|Image Generation]], [[loss-functions|Loss Functions]]