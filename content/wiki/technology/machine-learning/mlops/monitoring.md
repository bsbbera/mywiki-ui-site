---
title: ML Monitoring
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - ML Monitoring
  - Model Monitoring
  - Drift Detection
  - Production ML Observability
category: Machine Learning
tags:
  - MachineLearning
  - MLOps
  - Monitoring
  - Observability
  - DriftDetection
banner:
publish: true
---

> [!quote]
> *A model in production is a living thing — it changes as the world changes. Monitoring is how you know it is still healthy.*
> — MLOps Practitioners

# ML Monitoring

<p class="at-lead">
ML Monitoring is the practice of tracking model performance, data quality, and system health in production to detect degradation before it impacts users. Unlike traditional software monitoring, ML systems require watching for data drift, concept drift, and prediction distribution shifts that signal model ageing.
</p>

## Overview

Key monitoring dimensions include input drift (feature distributions changing), output drift (prediction distributions shifting), concept drift (the true relationship between inputs and outputs changing), and upstream data pipeline failures. Tools like Evidently, WhyLabs, and custom dashboards integrated with Prometheus and Grafana provide automated alerts, enabling teams to retrain, rollback, or investigate before business metrics are affected.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[model-monitoring]], [[concept-drift]], [[model-deployment]]
>
>> [!card] Parent topic
>> [[mlops]]
>
>> [!card] See also
>> [[data-quality]], [[champion-challenger]], [[cloud-monitoring]]
