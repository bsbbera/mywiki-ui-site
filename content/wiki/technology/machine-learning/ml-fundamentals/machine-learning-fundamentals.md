---
title: Machine Learning Fundamentals
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - ML Fundamentals
  - Machine Learning Fundamentals
category: Machine Learning
tags:
  - MachineLearning
  - DataScience
  - Fundamentals
banner: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "Coming up with features is difficult, time-consuming, and requires expert knowledge. Applied machine learning often requires careful engineering of the features and dataset."
> <cite>— Andrew Ng</cite>

---

<span class="at-kicker">Fundamentals · Machine Learning</span>

# Machine Learning Fundamentals

<p class="at-lead">
The machine learning fundamentals sub-domain covers the core principles, techniques, and workflows that underpin every ML project — from problem formulation to model monitoring. These are the essential building blocks that every practitioner must master.
</p>

<span class="at-stat">supervised</span> · <span class="at-stat">unsupervised</span> · <span class="at-stat">evaluation</span> · <span class="at-mark">the foundation of all data science work</span>

<span class="at-kicker">Learning Paradigms</span>

## Overview

Machine learning is the study of computer algorithms that improve automatically through experience. The fundamentals sub-domain provides the theoretical and practical foundations for understanding how models learn from data, how to prepare that data, and how to ensure models generalise to unseen examples.

> [!grid|cols3]
>
>> [!card|section]
>> ###### SUPERVISED LEARNING
>> ### *Supervised* Learning
>> Learning from explicitly labelled examples — mapping inputs to known outputs. Covers regression (continuous targets) and classification (discrete labels).
>>
>> [[supervised-learning|Explore →]]
>
>> [!card|section]
>> ###### UNSUPERVISED LEARNING
>> ### *Unsupervised* Learning
>> Discovering hidden structure in unlabelled data. Includes clustering, anomaly detection, density estimation, and dimensionality reduction.
>>
>> [[unsupervised-learning|Explore →]]
>
>> [!card|section]
>> ###### EVALUATION
>> ### Model *Evaluation*
>> Metrics, validation strategies, and statistical tests for assessing model performance. Critical for comparing models and detecting overfitting.
>>
>> [[evaluation-metrics|Explore →]]

<span class="at-kicker">Data Preparation</span>

## Data Pipeline Essentials

Before any model can learn, data must be prepared, cleaned, and transformed. The quality of this preparation often matters more than the choice of algorithm.

> [!grid|cols3]
>
>> [!card|section]
>> ###### FEATURE ENGINEERING
>> ### Feature *Engineering*
>> Transforming raw data into representations that algorithms can use. Scaling, encoding, binning, and creating feature crosses to capture signal.
>>
>> [[feature-engineering|Explore →]]
>
>> [!card|section]
>> ###### FEATURE SELECTION
>> ### Feature *Selection*
>> Choosing the most predictive subset of features. Filter, wrapper, and embedded methods to reduce dimensionality and improve model efficiency.
>>
>> [[feature-selection|Explore →]]
>
>> [!card|section]
>> ###### DATA CLEANING
>> ### Data *Cleaning*
>> Handling missing values, removing inconsistencies, preventing data leakage, and ensuring reproducible train-test splits.
>>
>> [[data-cleaning|Explore →]]

<span class="at-kicker">Advanced Topics</span>

## Production-Ready ML

Moving beyond basic training to handle real-world complexities: imbalanced data, outliers, model interpretability, and ongoing monitoring.

> [!grid|cols3]
>
>> [!card|section]
>> ###### IMBALANCED DATA
>> ### Imbalanced *Classification*
>> Strategies for when classes are severely skewed. Class weights, resampling, SMOTE, and appropriate evaluation metrics.
>>
>> [[imbalanced-classification|Explore →]]
>
>> [!card|section]
>> ###### OUTLIERS
>> ### Outlier *Detection*
>> Identifying anomalous data points using statistical and machine learning methods. Z-score, IQR, Isolation Forest, LOF.
>>
>> [[outlier-detection|Explore →]]
>
>> [!card|section]
>> ###### CROSS-VALIDATION
>> ### Cross *Validation*
>> Robust estimation of model generalisation using K-fold and stratified strategies. Preventing data leakage during validation.
>>
>> [[cross-validation|Explore →]]

> [!grid|cols3]
>
>> [!card|section]
>> ###### EXPLAINABILITY
>> ### ML *Explainability*
>> Understanding why models make specific predictions. LIME, SHAP, permutation importance, partial dependence plots.
>>
>> [[ml-explainability|Explore →]]
>
>> [!card|section]
>> ###### MONITORING
>> ### Model *Monitoring*
>> Tracking production models for drift, degradation, and unexpected behaviour. Champion-challenger patterns for safe deployment.
>>
>> [[model-monitoring|Explore →]]
>
>> [!card|section]
>> ###### ACTIVE LEARNING
>> ### *Active* Learning
>> Intelligently selecting data for labelling to maximise learning efficiency. Semi-supervised and weak supervision techniques.
>>
>> [[active-learning|Explore →]]

<span class="at-kicker">Critical Concerns</span>

## Data Quality & Integrity

Two of the most dangerous issues in ML practice are data leakage and poor experiment tracking. These can silently destroy model validity and reproducibility.

> [!grid|cols2]
>
>> [!card|section]
>> ###### DATA LEAKAGE
>> ### Data *Leakage*
>> Preventing information from the future or target from contaminating training. The silent killer of model generalisation.
>>
>> [[data-leakage|Explore →]]
>
>> [!card|section]
>> ###### EXPERIMENTS
>> ### Experiment *Tracking*
>> Systematic recording of hyperparameters, metrics, code versions, and artifacts for reproducibility and comparison.
>>
>> [[experiment-tracking|Explore →]]

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Statistics
>> [[../statistics/statistics|Statistics]] — probability, inference, information theory
>
>> [!card] Algorithms
>> [[../ml-algorithms/ml-algorithms|ML Algorithms]] — specific algorithm deep-dives
>
>> [!card] MLOps
>> [[../mlops/mlops|MLOps]] — deployment, lifecycle, monitoring infrastructure
