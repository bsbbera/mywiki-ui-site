---
title: Maximum Likelihood Estimation
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Maximum Likelihood
  - MLE
  - Likelihood Maximisation
  - Frequentist Estimation
category: Machine Learning
tags:
  - MachineLearning
  - Statistics
  - Inference
  - Optimisation
  - ParameterEstimation
banner:
publish: true
---

> [!quote]
> *Maximum likelihood asks: what parameter values make the observed data most probable? It is the workhorse of parametric statistics.*
> — Statistical Inference

# Maximum Likelihood Estimation

<p class="at-lead">
Maximum Likelihood Estimation (MLE) is a method for estimating the parameters of a statistical model by finding the values that maximise the probability of observing the given data. It underlies logistic regression, Gaussian mixture models, neural network training, and virtually all parametric machine learning algorithms.
</p>

## Overview

MLE constructs a likelihood function from the data and model family, then finds parameter values that maximise it — often using gradient ascent or closed-form solutions. Under regularity conditions, MLE estimators are consistent, asymptotically normal, and efficient. In practice, minimising negative log-likelihood is equivalent to MLE and conveniently connects to information theory and loss function design.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[bayesian-inference]], [[probability-distributions]], [[cross-entropy]]
>
>> [!card] Parent topic
>> [[statistics]]
>
>> [!card] See also
>> [[optimisation-algorithms]], [[machine-learning-fundamentals]]
