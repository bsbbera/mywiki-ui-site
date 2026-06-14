---
title: Perceptron
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Perceptron
  - Rosenblatt Perceptron
  - Single-Layer Perceptron
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - NeuralNetworks
  - History
banner:
publish: true
---

> [!quote]
> *The perceptron is not only the simplest neural network — it is the ancestor of every deep network in use today.*
> — Frank Rosenblatt (paraphrased)

# Perceptron

<p class="at-lead">
The Perceptron, introduced by Frank Rosenblatt in 1957, is the simplest artificial neural network — a single neuron with adjustable weights that learns a binary classifier. It is the conceptual foundation upon which all modern deep learning is built.
</p>

## Overview

A perceptron takes a vector of inputs, computes a weighted sum, adds a bias, and applies a step function to produce a binary output. The learning rule updates weights when predictions are wrong, pushing the decision boundary toward misclassified points. If the data is linearly separable, the perceptron converges to a perfect classifier.

The perceptron's limitation — it cannot solve non-linearly separable problems like XOR — was famously highlighted by Minsky and Papert (1969), causing the first AI winter. Multi-layer perceptrons (MLPs) and backpropagation later overcame this limitation, leading to the deep learning revolution.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[neural-networks|Neural Networks]], [[linear-regression|Linear Regression]], [[logistic-regression|Logistic Regression]]
>
>> [!card] Parent topic
>> [[deep-learning|Deep Learning]]
>
>> [!card] See also
>> [[gradient-descent|Gradient Descent]], [[backpropagation|Backpropagation]], [[history-of-ai|History of AI]]