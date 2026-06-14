---
title: Loss Functions
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Loss Functions
  - Objective Functions
  - Cost Functions
  - Error Functions
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - Optimization
  - Training
banner:
publish: true
---

> [!quote]
> *The choice of loss function is as important as the choice of model architecture.*
> — Deep Learning (Goodfellow et al.)

# Loss Functions

<p class="at-lead">
Loss Functions quantify the difference between a model's predictions and the true target values. They provide the optimisation objective that drives learning during gradient descent, shaping what the model learns and how it generalises.
</p>

## Overview

Common loss functions include **Mean Squared Error (MSE)** for regression, **Cross-Entropy** for classification, and **Hinge Loss** for SVMs. Beyond these basics, specialised losses address specific challenges: focal loss for class imbalance, contrastive loss for embeddings, perceptual loss for image generation, and adversarial loss for GANs.

The loss landscape — the geometry of the loss as a function of model parameters — directly affects training difficulty. Well-chosen losses can improve convergence speed, robustness to outliers, and fairness. In deep learning, loss functions are often combined (multi-task learning) or weighted to balance competing objectives.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[cross-entropy|Cross-Entropy]], [[gradient-descent|Gradient Descent]], [[backpropagation|Backpropagation]]
>
>> [!card] Parent topic
>> [[deep-learning|Deep Learning]]
>
>> [!card] See also
>> [[optimisation-algorithms|Optimisation Algorithms]], [[regularisation-training|Regularisation]], [[neural-networks|Neural Networks]]