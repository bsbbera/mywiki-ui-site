---
title: Clustering
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Clustering
  - Unsupervised Clustering
  - Cluster Analysis
category: Machine Learning
tags:
  - MachineLearning
  - UnsupervisedLearning
  - Clustering
  - DataMining
banner:
publish: true
---

> [!quote]
> *Clustering is the task of grouping a set of objects in such a way that objects in the same group are more similar to each other than to those in other groups.*
> — Data Mining (Han, Kamber & Pei)

# Clustering

<p class="at-lead">
Clustering is an unsupervised learning technique that discovers natural groupings in data without predefined labels. It is fundamental to customer segmentation, anomaly detection, document organisation, and exploratory data analysis.
</p>

## Overview

Clustering algorithms partition data based on similarity metrics such as Euclidean distance, cosine similarity, or density reachability. The most widely known algorithm is **k-means**, which iteratively assigns points to the nearest centroid and updates centroids accordingly. Other important approaches include **hierarchical clustering**, **DBSCAN** (density-based), and **Gaussian mixture models** (probabilistic).

Choosing the right number of clusters, distance metric, and algorithm depends on data shape, scale, and the downstream use case. Internal validation metrics like silhouette score and Davies-Bouldin index help evaluate cluster quality without ground-truth labels.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[k-means|K-Means]], [[dbscan|DBSCAN]], [[pca|PCA]], [[gaussian-processes|Gaussian Processes]]
>
>> [!card] Parent topic
>> [[ml-algorithms|ML Algorithms]]
>
>> [!card] See also
>> [[unsupervised-learning|Unsupervised Learning]], [[anomaly-detection|Anomaly Detection]], [[data-engineering|Data Engineering]]