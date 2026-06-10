---
title: Unsupervised Learning
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Unsupervised Learning
  - Clustering
  - Anomaly Detection
  - Density Estimation
category: Machine Learning
tags:
  - MachineLearning
  - UnsupervisedLearning
  - Clustering
  - DataScience
banner: https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'"
> <cite>— Isaac Asimov</cite>

---

<span class="at-kicker">Learning Paradigm · Machine Learning</span>

# Unsupervised Learning

<p class="at-lead">
Unsupervised learning involves learning from data without labelled examples. The algorithm must discover hidden structure, patterns, or groupings in the data on its own — without any explicit signal telling it which output is "correct."
</p>

<span class="at-stat">clustering</span> · <span class="at-stat">anomaly detection</span> · <span class="at-stat">dimensionality reduction</span> · <span class="at-mark">discovering structure in the unknown</span>

<span class="at-kicker">How It Works</span>

## Overview

Without labelled targets, unsupervised algorithms must find their own optimisation criteria — typically measuring similarity, density, reconstruction error, or information preservation. This makes evaluation harder but enables discovery of patterns humans might miss.

The three major branches of unsupervised learning:

| Type | Goal | Key algorithms |
| --- | --- | --- |
| **Clustering** | Group similar data points together | K-Means, Hierarchical, DBSCAN |
| **Anomaly detection** | Identify unusual data points | Isolation Forest, LOF, Elliptic Envelope |
| **Density estimation** | Model the probability distribution | Kernel Density Estimation, Gaussian Mixture Models |

> [!info] The evaluation challenge
> Without ground truth labels, unsupervised learning relies on internal metrics (silhouette score, inertia) or downstream task performance. Domain expertise is often required to validate whether discovered patterns are meaningful.

<span class="at-kicker">Core Techniques</span>

## Clustering

Clustering groups data points such that items in the same cluster are more similar to each other than to items in other clusters.

> [!grid|cols3]
>
>> [!card|section]
>> ###### K-MEANS
>> ### *K-Means* Clustering
>> Partitions data into k clusters by minimising within-cluster variance. Fast and scalable but requires specifying k in advance and assumes roughly spherical clusters. Sensitive to initialisation and outliers.
>>
>> [[../ml-algorithms/k-means|Deep dive →]]
>
>> [!card|section]
>> ###### HIERARCHICAL
>> ### *Hierarchical* Clustering
>> Builds a tree of nested clusters (dendrogram). Agglomerative (bottom-up) or divisive (top-down). No need to specify k in advance — cut the dendrogram at any level.
>
>> [!card|section]
>> ###### DBSCAN
>> ### *DBSCAN*
>> Density-based clustering discovers arbitrarily shaped clusters and identifies outliers as noise. Requires no predefined k. Excellent for spatial data and anomaly detection.
>>
>> [[../ml-algorithms/dbscan|Deep dive →]]

> [!info] Choosing a clustering algorithm
> Use **K-Means** when you need fast, scalable, roughly spherical clusters. Use **DBSCAN** when clusters may have irregular shapes or when outlier detection is a goal. Use **Hierarchical** when you want to explore the cluster hierarchy interactively.

### Applications of Clustering

1. **Customer segmentation** — group customers by purchasing behaviour
2. **Data analysis** — understand natural groupings in exploratory analysis
3. **Dimensionality reduction** — use cluster labels as features
4. **Anomaly detection** — points far from any centroid are anomalies
5. **Semi-supervised learning** — label a few points per cluster, propagate labels
6. **Search engines** — group similar documents for result diversification
7. **Image segmentation** — group pixels by colour/texture similarity

<span class="at-kicker">Advanced Methods</span>

## Anomaly Detection & Dimensionality Reduction

> [!grid|cols2]
>
>> [!card|section]
>> ###### ANOMALY DETECTION
>> ### Anomaly *Detection*
>> Identifies data points that deviate significantly from the majority. Can be framed as clustering (points far from centroids) or dedicated algorithms.
>>
>> > [!tip] Unsupervised anomaly detection
>> > Methods like **Isolation Forest** and **Local Outlier Factor** require no labels — only an assumption about the proportion of anomalies (`contamination` parameter).
>>
>> [[outlier-detection|Deep dive →]]
>
>> [!card|section]
>> ###### DIMENSIONALITY REDUCTION
>> ### Dimensionality *Reduction*
>> Reduces feature count while preserving information. Used for noise reduction, visualisation, and speeding up downstream algorithms.
>>
>> | Method | Characteristics |
>> | --- | --- |
>> | **PCA** | Linear, orthogonal components by variance |
>> | **t-SNE** | Non-linear, for 2D/3D visualisation only |
>> | **UMAP** | Faster than t-SNE, preserves global structure |
>>
>> > [!warning] t-SNE and UMAP for visualisation only
>> > These embeddings are non-deterministic and non-invertible. Do not use as downstream model features — use PCA or autoencoders instead.

<span class="at-kicker">Bridging Paradigms</span>

## Semi-Supervised & Weak Supervision

When labelling is expensive, unsupervised techniques can bootstrap supervised learning:

> [!grid|cols3]
>
>> [!card|section]
>> ###### LABEL PROPAGATION
>> ### Label *Propagation*
>> Graph-based semi-supervised algorithm. Labels flow from labelled nodes to unlabelled neighbours based on data structure. Mark unlabelled samples with `-1` in scikit-learn.
>
>> [!card|section]
>> ###### WEAK SUPERVISION
>> ### *Weak* Supervision
>> Use heuristics to generate noisy labels at scale. The Snorkel framework combines multiple labelling functions and denoises with a generative model.
>
>> [!card|section]
>> ###### ACTIVE LEARNING
>> ### *Active* Learning
>> Intelligently select the most informative unlabelled points for human annotation. Maximises learning from limited labelling budget.
>>
>> [[active-learning|Deep dive →]]

> [!note] The labelling spectrum
> Most real projects fall between fully supervised and fully unsupervised. Semi-supervised, weakly supervised, and active learning represent different tradeoffs between label quality, quantity, and cost.

<span class="at-kicker">Knowledge Check</span>

## Interview questions

1. What is the difference between supervised and unsupervised learning?
2. When would you use clustering for customer segmentation?
3. How does DBSCAN differ from K-Means?
4. What are the advantages and disadvantages of K-Means?
5. How can unsupervised learning support a semi-supervised pipeline?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Algorithms
>> [[../ml-algorithms/k-means|K-Means]] · [[../ml-algorithms/dbscan|DBSCAN]] · [[../ml-algorithms/pca|PCA]] · [[../ml-algorithms/t-sne|t-SNE]]
>
>> [!card] Data Prep
>> [[feature-engineering|Feature Engineering]] · [[feature-selection|Feature Selection]]
>
>> [!card] Advanced
>> [[active-learning|Active Learning]] · [[outlier-detection|Outlier Detection]]
