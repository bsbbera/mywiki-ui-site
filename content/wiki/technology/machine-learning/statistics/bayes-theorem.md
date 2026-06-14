---
title: Bayes' Theorem
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Bayes' Theorem
  - Bayes' Rule
  - Bayes' Law
  - Bayesian Updating
category: Machine Learning
tags:
  - MachineLearning
  - Statistics
  - Probability
  - Bayesian
banner:
publish: true
---

> [!quote]
> *Bayes' theorem is to the theory of probability what the Pythagorean theorem is to geometry.*
> — Sir Harold Jeffreys

# Bayes' Theorem

<p class="at-lead">
Bayes' Theorem is a fundamental result in probability theory that describes how to update beliefs in light of new evidence. It reverses conditional probabilities, allowing us to infer causes from observed effects and form the bedrock of Bayesian statistics and machine learning.
</p>

## Overview

The theorem states: $P(H|E) = \frac{P(E|H) \cdot P(H)}{P(E)}$. In words: the posterior probability of a hypothesis given evidence equals the likelihood of the evidence under the hypothesis, times the prior probability of the hypothesis, divided by the total probability of the evidence.

Bayesian reasoning underlies spam filters, medical diagnosis, A/B testing, and modern NLP. It provides a coherent framework for incorporating prior knowledge, quantifying uncertainty, and learning from data sequentially. Frequentist and Bayesian statistics differ philosophically on whether probabilities represent beliefs or long-run frequencies.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[bayesian-inference|Bayesian Inference]], [[conditional-probability|Conditional Probability]], [[naive-bayes|Naive Bayes]]
>
>> [!card] Parent topic
>> [[statistics|Statistics]]
>
>> [!card] See also
>> [[probability-distributions|Probability Distributions]], [[hypothesis-testing|Hypothesis Testing]], [[machine-learning|Machine Learning]]