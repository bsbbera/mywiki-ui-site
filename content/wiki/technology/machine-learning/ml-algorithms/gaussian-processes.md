---
title: Gaussian Processes
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Gaussian Processes
  - GP
  - Gaussian Process Regression
category: Machine Learning
tags:
  - MachineLearning
  - BayesianMethods
  - Regression
  - ProbabilisticModeling
banner:
publish: true
---

> [!quote]
> *Gaussian processes are the natural next step after linear regression — they provide a principled, practical, and probabilistic approach to learning in kernel machines.*
> — Gaussian Processes for Machine Learning (Rasmussen & Williams)

# Gaussian Processes

<p class="at-lead">
Gaussian Processes (GPs) are non-parametric probabilistic models that define a distribution over functions. They provide not only predictions but also uncertainty estimates, making them powerful for regression, Bayesian optimisation, and areas where confidence intervals matter.
</p>

## Overview

A GP is fully specified by a mean function and a covariance (kernel) function. The kernel encodes assumptions about function smoothness, periodicity, or other structure. Given observed data, the posterior distribution over functions yields predictions with well-calibrated uncertainty.

GPs shine in low-data regimes and active learning, but their cubic complexity in the number of data points limits scalability. Approximate methods like sparse GPs and variational inference extend them to larger datasets. They are widely used in hyperparameter tuning (Bayesian optimisation), robotics, and geospatial statistics.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[bayesian-inference|Bayesian Inference]], [[kernel-methods|Kernel Methods]], [[linear-regression|Linear Regression]]
>
>> [!card] Parent topic
>> [[ml-algorithms|ML Algorithms]]
>
>> [!card] See also
>> [[bayesian-optimization|Bayesian Optimization]], [[hyperparameter-tuning|Hyperparameter Tuning]], [[reinforcement-learning|Reinforcement Learning]]