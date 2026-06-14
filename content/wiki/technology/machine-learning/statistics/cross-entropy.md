---
title: Cross-Entropy
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Cross-Entropy
  - Cross Entropy Loss
  - Log Loss
  - Binary Cross-Entropy
category: Machine Learning
tags:
  - MachineLearning
  - Statistics
  - LossFunctions
  - Classification
banner:
publish: true
---

> [!quote]
> *Cross-entropy is the standard loss function for classification, measuring the divergence between predicted probabilities and true labels.*
> — Pattern Recognition and Machine Learning (Bishop)

# Cross-Entropy

<p class="at-lead">
Cross-Entropy is a loss function that quantifies the difference between two probability distributions — typically the predicted probabilities from a model and the true distribution of labels. It is the workhorse loss for classification tasks in machine learning.
</p>

## Overview

For binary classification, binary cross-entropy penalises predictions that are confident but wrong far more heavily than uncertain predictions. For multi-class problems, categorical cross-entropy generalises this by summing over all classes. Minimising cross-entropy is equivalent to maximum likelihood estimation under a Bernoulli or categorical distribution.

Cross-entropy is closely related to **Kullback-Leibler divergence** and **entropy** from information theory. It rewards well-calibrated probabilities, making it essential for models where confidence matters.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[entropy-information-theory|Entropy]], [[maximum-likelihood|Maximum Likelihood]], [[logistic-regression|Logistic Regression]]
>
>> [!card] Parent topic
>> [[statistics|Statistics]]
>
>> [!card] See also
>> [[loss-functions|Loss Functions]], [[neural-networks|Neural Networks]], [[softmax|Softmax]]