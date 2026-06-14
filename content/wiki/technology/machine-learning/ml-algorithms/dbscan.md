---
title: DBSCAN
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - DBSCAN
  - Density-Based Spatial Clustering
  - Density Clustering
category: Machine Learning
tags:
  - MachineLearning
  - Clustering
  - UnsupervisedLearning
  - DensityBased
  - AnomalyDetection
banner:
publish: true
---

> [!quote]
> *DBSCAN discovers clusters of arbitrary shape by connecting dense regions, treating sparse points as noise.*
> — Ester, Kriegel, Sander & Xu, 1996

# DBSCAN

<p class="at-lead">
DBSCAN (Density-Based Spatial Clustering of Applications with Noise) is a clustering algorithm that groups together points that are closely packed in dense regions and marks points in low-density regions as outliers. Unlike k-means, it does not require specifying the number of clusters and can discover arbitrarily shaped clusters.
</p>

## Overview

DBSCAN defines clusters as maximal sets of density-connected points, using two parameters: ε (maximum distance between neighbours) and MinPts (minimum points to form a dense region). Core points, border points, and noise points are classified based on local density. Its ability to identify outliers makes it valuable for anomaly detection as well as exploratory data analysis.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[k-means]], [[pca]], [[t-sne]]
>
>> [!card] Parent topic
>> [[ml-algorithms]]
>
>> [!card] See also
>> [[unsupervised-learning]], [[outlier-detection]]
