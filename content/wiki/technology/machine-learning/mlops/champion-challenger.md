---
title: Champion–Challenger
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Champion–Challenger
  - Champion Challenger
  - Model Competition
  - A/B Testing for ML
category: Machine Learning
tags:
  - MachineLearning
  - MLOps
  - Experimentation
  - A/BTesting
  - ModelEvaluation
banner:
publish: true
---

> [!quote]
> *The champion is the model currently serving users; the challenger is the candidate seeking to dethrone it. Let data decide the winner.*
> — MLOps Experimentation Practices

# Champion–Challenger

<p class="at-lead">
Champion–Challenger is a model evaluation pattern where a new model candidate (the challenger) is tested against the currently deployed model (the champion) in a controlled experiment. It enables safe, evidence-based model updates by measuring real-world performance before full rollout.
</p>

## Overview

In champion–challenger testing, traffic is split between the incumbent and candidate models while business metrics, latency, and error rates are monitored. The challenger only replaces the champion if it demonstrates statistically significant improvement. This pattern is essential for high-stakes domains like credit scoring, fraud detection, and personalised recommendations where model degradation has direct financial impact.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[ab-testing]], [[model-deployment]], [[model-monitoring]]
>
>> [!card] Parent topic
>> [[mlops]]
>
>> [!card] See also
>> [[evaluation-metrics]], [[hypothesis-testing]]
