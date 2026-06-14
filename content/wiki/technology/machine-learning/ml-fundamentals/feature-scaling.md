---
title: Feature Scaling
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Feature Scaling
  - Normalisation
  - Standardisation
  - Min-Max Scaling
  - Z-Score Scaling
category: Machine Learning
tags:
  - MachineLearning
  - Preprocessing
  - FeatureEngineering
  - DataPreparation
  - NumericalStability
banner:
publish: true
---

> [!quote]
> *Feature scaling ensures that no variable dominates simply because of its magnitude — a prerequisite for many optimisation algorithms.*
> — Feature Engineering for Machine Learning

# Feature Scaling

<p class="at-lead">
Feature Scaling transforms numerical features into a common range or distribution, preventing algorithms that rely on distance or gradient descent from being biased by large-magnitude variables. It is a mandatory preprocessing step for SVMs, neural networks, k-nearest neighbours, and PCA.
</p>

## Overview

Standardisation (z-score) centres features around zero with unit variance, preserving outlier information and working well for normally distributed data. Min-max normalisation scales to a fixed range like [0, 1], which is useful for neural networks and image data. Robust scaling uses median and interquartile range to resist outliers. Choosing the right scaler depends on the algorithm, data distribution, and the presence of outliers.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[feature-engineering]], [[feature-selection]], [[pca]]
>
>> [!card] Parent topic
>> [[machine-learning-fundamentals]]
>
>> [!card] See also
>> [[data-cleaning]], [[outlier-detection]]
