---
title: Bayesian Optimization
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Bayesian Optimization
  - BO
  - Gaussian Process Optimization
  - Surrogate Optimisation
category: Machine Learning
tags:
  - MachineLearning
  - HyperparameterTuning
  - BayesianMethods
  - Optimisation
  - GaussianProcesses
banner:
publish: true
---

> [!quote]
> *Bayesian optimization finds the peak of an unknown landscape by building a belief about it and intelligently deciding where to search next.*
> — Bayesian Optimisation Surveys

# Bayesian Optimization

<p class="at-lead">
Bayesian Optimization is a sequential design strategy for global optimization of expensive black-box functions. It is the method of choice for hyperparameter tuning in machine learning, experimental design in science, and any setting where function evaluations are costly or time-consuming.
</p>

## Overview

Bayesian optimization maintains a probabilistic surrogate model — typically a Gaussian process — of the objective function and uses an acquisition function (Expected Improvement, Upper Confidence Bound, or Entropy Search) to trade off exploration of uncertain regions against exploitation of promising ones. Libraries like Hyperopt, Optuna, and Ax have made it accessible for tuning deep neural networks with dozens of hyperparameters.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[hyperparameter-tuning]], [[exploration-exploitation]], [[multi-armed-bandits]]
>
>> [!card] Parent topic
>> [[ml-algorithms]]
>
>> [!card] See also
>> [[gaussian-processes]], [[machine-learning-fundamentals]]
