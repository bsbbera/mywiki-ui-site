---
title: Confidence Intervals
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Confidence Intervals
  - CI
  - Interval Estimation
  - Statistical Uncertainty
category: Machine Learning
tags:
  - MachineLearning
  - Statistics
  - Inference
  - UncertaintyQuantification
  - HypothesisTesting
banner:
publish: true
---

> [!quote]
> *A confidence interval does not tell us where the true parameter probably lies; it tells us where our procedure would capture it, if repeated many times.*
> — Statistical Inference

# Confidence Intervals

<p class="at-lead">
Confidence Intervals provide a range of plausible values for an unknown population parameter, quantifying the uncertainty inherent in sample estimates. They are essential for interpreting A/B tests, survey results, model coefficients, and any estimate derived from finite data.
</p>

## Overview

A 95% confidence interval means that if we were to repeat the sampling process many times, 95% of the constructed intervals would contain the true parameter. Common methods include z-intervals for large samples, t-intervals for small samples with unknown variance, and bootstrap percentile intervals when distributional assumptions are uncertain. In machine learning, confidence intervals help communicate prediction reliability and guide decision-making under uncertainty.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[hypothesis-testing]], [[bootstrap]], [[sampling]]
>
>> [!card] Parent topic
>> [[statistics]]
>
>> [!card] See also
>> [[ab-testing]], [[machine-learning-fundamentals]]
