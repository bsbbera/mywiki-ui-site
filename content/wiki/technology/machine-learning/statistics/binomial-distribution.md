---
title: Binomial Distribution
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Binomial Distribution
  - Bernoulli Trials
  - Binomial Probability
  - n-choose-k
category: Machine Learning
tags:
  - MachineLearning
  - Statistics
  - Probability
  - Distributions
banner:
publish: true
---

> [!quote]
> *The binomial distribution is the cornerstone of counting successes in independent trials.*
> — Probability Textbook

# Binomial Distribution

<p class="at-lead">
The Binomial Distribution models the number of successes in a fixed number of independent trials, each with the same probability of success. It is the workhorse distribution for A/B testing, quality control, opinion polling, and binary classification evaluation.
</p>

## Overview

For $n$ independent Bernoulli trials with success probability $p$, the probability of exactly $k$ successes is $\binom{n}{k} p^k (1-p)^{n-k}$. The mean is $np$ and variance is $np(1-p)$. As $n$ grows large, the binomial approximates the normal distribution (De Moivre-Laplace theorem); rare events are better modelled by the Poisson distribution.

In machine learning, binomial distributions underlie logistic regression (Bernoulli likelihood), binomial confidence intervals for accuracy metrics, and power analysis for sample-size planning. Understanding its properties is essential for interpreting click-through rates, conversion rates, and error rates.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[probability-distributions|Probability Distributions]], [[bernoulli|Bernoulli Distribution]], [[normal-distribution|Normal Distribution]]
>
>> [!card] Parent topic
>> [[statistics|Statistics]]
>
>> [!card] See also
>> [[hypothesis-testing|Hypothesis Testing]], [[confidence-intervals|Confidence Intervals]], [[ab-testing|A/B Testing]]