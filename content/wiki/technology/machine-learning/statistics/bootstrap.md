---
title: Bootstrap
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Bootstrap
  - Bootstrapping
  - Resampling
  - Nonparametric Inference
category: Machine Learning
tags:
  - MachineLearning
  - Statistics
  - Resampling
  - Inference
  - UncertaintyQuantification
banner:
publish: true
---

> [!quote]
> *The bootstrap is the computer-intensive approach to statistical inference — using the data to estimate its own uncertainty.*
> — Bradley Efron, 1979

# Bootstrap

<p class="at-lead">
The Bootstrap is a resampling technique that estimates the sampling distribution of a statistic by repeatedly drawing samples with replacement from the observed data. It provides a powerful, non-parametric way to compute confidence intervals, standard errors, and hypothesis tests without assuming a specific underlying distribution.
</p>

## Overview

By treating the empirical distribution as a proxy for the true population distribution, the bootstrap generates thousands of simulated datasets and computes the statistic of interest on each. It is particularly valuable when theoretical formulas are unavailable or assumptions are violated. Variants like the block bootstrap handle time series, while the .632+ bootstrap improves bias estimation in machine learning model evaluation.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[confidence-intervals]], [[cross-validation]], [[sampling]]
>
>> [!card] Parent topic
>> [[statistics]]
>
>> [!card] See also
>> [[hypothesis-testing]], [[machine-learning-fundamentals]]
