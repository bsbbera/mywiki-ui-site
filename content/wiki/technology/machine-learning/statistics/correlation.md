---
title: Correlation
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Correlation
  - Pearson Correlation
  - Spearman Correlation
  - Linear Association
category: Machine Learning
tags:
  - MachineLearning
  - Statistics
  - DescriptiveStatistics
  - FeatureSelection
  - DataAnalysis
banner:
publish: true
---

> [!quote]
> *Correlation measures the degree to which two variables move together — but beware, it says nothing about why.*
> — Statistical Literacy

# Correlation

<p class="at-lead">
Correlation quantifies the strength and direction of the linear relationship between two variables. It is one of the most widely used statistics in exploratory data analysis, feature selection, and risk modelling — though it must always be interpreted with care, as correlation alone never establishes causation.
</p>

## Overview

Pearson's correlation coefficient measures linear relationships on a scale from -1 to +1, while Spearman's rank correlation captures monotonic associations without assuming linearity. In machine learning, correlation matrices guide feature selection, multicollinearity detection, and understanding variable interactions. High correlation with the target suggests predictive power; high correlation among predictors may indicate redundancy.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[covariance]], [[descriptive-statistics]], [[linear-regression]]
>
>> [!card] Parent topic
>> [[statistics]]
>
>> [!card] See also
>> [[causality]], [[feature-selection]]
