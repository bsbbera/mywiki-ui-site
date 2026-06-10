---
title: Imbalanced Classification
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Imbalanced Classification
  - Class Imbalance
  - Oversampling
  - Undersampling
  - SMOTE
category: Machine Learning
tags:
  - MachineLearning
  - Classification
  - DataScience
  - ImbalancedData
banner: https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."
> <cite>— Stephen Hawking</cite>

---

<span class="at-kicker">Classification Challenge · Machine Learning</span>

# Imbalanced Classification

<p class="at-lead">
In imbalanced classification, the class distribution has a severe skew — often in the order of 1:100 or 1:1000. The bias in the training data causes many algorithms to ignore the minority class entirely, leading to misleadingly high accuracy while completely failing the task.
</p>

<span class="at-stat">class weights</span> · <span class="at-stat">SMOTE</span> · <span class="at-stat">threshold tuning</span> · <span class="at-mark">when accuracy lies to you</span>

<span class="at-kicker">The Problem</span>

## Why Imbalance Breaks Standard Approaches

- Most algorithms optimise for overall accuracy, not per-class performance
- The decision boundary shifts toward the minority class, increasing false negatives
- Standard loss functions treat all misclassifications equally, regardless of class rarity

> [!warning] Accuracy is the wrong metric
> A model that predicts the majority class 100% of the time can score 99% accuracy on a 1:100 dataset while being entirely useless. Always report F1 Score, Precision-Recall AUC, or Balanced Accuracy alongside accuracy on imbalanced data.

<span class="at-kicker">Solution Strategies</span>

## Approaches to Handle Imbalance

> [!grid|cols3]
>
>> [!card|section]
>> ###### CLASS WEIGHTS
>> ### *Class* Weights
>> Penalise misclassifications of the minority class more heavily during training. Most scikit-learn classifiers support `class_weight='balanced'`.
>>
>> ```python
>> from sklearn.ensemble import RandomForestClassifier
>> clf = RandomForestClassifier(class_weight='balanced')
>> ```
>>
>> > [!tip] Class weights vs. resampling
>> > Prefer class weights when the dataset is large. Faster, doesn't change data distribution, and avoids leakage risk from resampling before splitting.
>
>> [!card|section]
>> ###### RESAMPLING
>> ### *Resampling* Strategies
>> | Technique | What it does |
>> | --- | --- |
>> | **Oversampling** | Duplicate or synthesise minority examples |
>> | **Undersampling** | Remove majority-class examples |
>> | **SMOTE** | Synthesise minority examples by interpolating between neighbours |
>
>> [!card|section]
>> ###### THRESHOLD TUNING
>> ### Threshold *Tuning*
>> Adjust the classification threshold to optimise the Precision-Recall tradeoff for your specific business constraint (e.g., "flag at least 90% of fraud cases").

> [!example] SMOTE with imbalanced-learn
> ```python
> from imblearn.over_sampling import SMOTE
> X_res, y_res = SMOTE(random_state=42).fit_resample(X_train, y_train)
> ```
> SMOTE creates synthetic minority-class points by interpolating between existing minority examples and their k nearest neighbours. This avoids the exact duplication that simple oversampling produces.

> [!warning] Always resample after splitting
> Resampling before the train-test split causes information leakage — synthetic points derived from test-set neighbours contaminate the training set. Always split first, then resample only the training fold.

<span class="at-kicker">Evaluation</span>

## Appropriate Metrics

- **F1 Score**, **Precision-Recall AUC**, or **Balanced Accuracy** instead of raw accuracy
- Use **Stratified K-Fold** cross validation to ensure minority-class representation in every fold

> [!info] Precision-Recall AUC vs. ROC-AUC for imbalanced data
> On severely imbalanced datasets, ROC-AUC can remain high even for a weak model because the large number of true negatives (TN) keeps FPR low. Precision-Recall AUC is a more stringent and informative measure — it focuses entirely on the minority (positive) class.

<span class="at-kicker">Advanced Techniques</span>

## Ensemble & Cost-Sensitive Methods

> [!grid|cols2]
>
>> [!card|section]
>> ###### ENSEMBLE METHODS
>> ### *Ensemble* Approaches
>> - **BalancedRandomForest** and **EasyEnsemble** — explicitly under-sample majority class at each tree
>> - **Cost-sensitive boosting** — modify XGBoost's `scale_pos_weight` to penalise minority-class errors more
>
>> [!card|section]
>> ###### XGBOOST TUNING
>> ### XGBoost for *Imbalanced* Data
>> Set `scale_pos_weight = n_negative / n_positive` in `XGBClassifier`. Equivalent to class weighting; can dramatically improve minority-class recall without any resampling.

<span class="at-kicker">Knowledge Check</span>

## Interview questions

1. Why is accuracy misleading on imbalanced datasets?
2. What is the difference between oversampling and undersampling?
3. What is SMOTE, and how does it differ from simple duplication?
4. When should you use class weights vs. resampling?
5. Why must resampling happen after the train-test split?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Evaluation
>> [[evaluation-metrics|Evaluation Metrics]] · [[cross-validation|Cross Validation]]
>
>> [!card] Data Prep
>> [[feature-engineering|Feature Engineering]] · [[outlier-detection|Outlier Detection]]
>
>> [!card] Algorithms
>> [[../ml-algorithms/random-forest|Random Forest]] · [[../ml-algorithms/xgboost|XGBoost]]
>
>> [!card] Paradoxes
>> [[../../../../paradoxes/statistical-paradoxes|Accuracy Paradox]] — why 99 % accuracy can be meaningless
