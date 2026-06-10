---
title: Supervised Learning
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Supervised Learning
  - Classification
  - Regression
  - Classifier
category: Machine Learning
tags:
  - MachineLearning
  - SupervisedLearning
  - Classification
  - Regression
banner: https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "The goal of supervised learning is to learn a function that, given a sample of data and desired outputs, best approximates the relationship between inputs and outputs visible in the data."
> <cite>— Unknown</cite>

---

<span class="at-kicker">Learning Paradigm · Machine Learning</span>

# Supervised Learning

<p class="at-lead">
Supervised learning is the task of learning a mapping from input data to a known output label, using explicitly labelled training examples. It is generally easier to tackle than unsupervised learning because the desired output is provided for every training sample, giving the algorithm a clear signal to optimise toward.
</p>

<span class="at-stat">regression</span> · <span class="at-stat">classification</span> · <span class="at-stat">labelled data</span> · <span class="at-mark">the most common ML paradigm in production</span>

<span class="at-kicker">How It Works</span>

## Overview

Supervised learning learns from **explicitly labelled examples** — pairs of input features $(X)$ and target values $(y)$. The algorithm's objective is to discover a function $f: X \rightarrow y$ that generalises to unseen data.

The paradigm splits into two fundamental problem types:

| Type | Output | Goal | Examples |
| --- | --- | --- | --- |
| **Regression** | Continuous numeric value | Predict a quantity | House price, temperature, stock price |
| **Classification** | Discrete class label | Assign to a category | Spam detection, image recognition, fraud detection |

> [!info] Why "supervised"
> The term reflects the presence of a "supervisor" providing correct answers during training. The algorithm can measure its error against these known targets and adjust its parameters accordingly — unlike unsupervised learning where no targets exist.

<span class="at-kicker">Classification Algorithms</span>

## Classification Methods

> [!grid|cols3]
>
>> [!card|section]
>> ###### LOGISTIC REGRESSION
>> ### *Logistic* Regression
>> Probabilistic classifier for binary outcomes. Each predictor's coefficient indicates its influence on the log-odds of the positive class. Assumes feature independence.
>>
>> `LogisticRegression(C=1.0, max_iter=200)`
>
>> [!card|section]
>> ###### NAIVE BAYES
>> ### *Naive* Bayes
>> Extremely fast classifier based on Bayes' theorem with strong independence assumptions. Surprisingly competitive on text and high-dimensional sparse data despite its simplicity.
>>
>> `GaussianNB` · `MultinomialNB`
>
>> [!card|section]
>> ###### SGD CLASSIFIER
>> ### *SGD* Classifier
>> Linear classifier with SGD training. Supports multiple loss functions (hinge/SVM, log_loss/logistic, perceptron). Excellent for large datasets and online learning.
>
>> [!card|section]
>> ###### K-NEAREST NEIGHBORS
>> ### *KNN* Classifier
>> Lazy learner — no training phase; all computation at inference. Simple, intuitive, and robust to noisy data, but O(n) inference time makes it slow at scale.
>>
>> > [!warning] KNN at scale
>> > Avoid on datasets with millions of rows. Consider approximate nearest-neighbour libraries (Faiss, Annoy) for production use.
>
>> [!card|section]
>> ###### DECISION TREE
>> ### *Decision* Tree
>> Splits features on thresholds to create rectangular decision regions. Handles mixed data types natively but prone to overfitting. Control with `max_depth`, `min_samples_split`.
>
>> [!card|section]
>> ###### RANDOM FOREST
>> ### *Random* Forest
>> Ensemble of decision trees trained on bootstrapped subsets with random feature selection. Reduces overfitting through averaging. Generally outperforms single trees.

> [!grid|cols2]
>
>> [!card|section]
>> ###### SUPPORT VECTOR MACHINE
>> ### *SVM* Classifier
>> Finds the maximum-margin hyperplane in high-dimensional space. Effective when features exceed samples. Binary by nature — multiclass requires one-vs-one or one-vs-rest.
>>
>> > [!info] Why SVM works in high dimensions
>> > Maximising the margin provides implicit regularisation, which is especially valuable when the number of features exceeds the number of samples.
>
>> [!card|section]
>> ###### BOOSTING METHODS
>> ### *Boosting* Ensembles
>> Sequential training where each learner corrects previous errors. AdaBoost increases weight on misclassified examples. Gradient Boosting corrects residuals. XGBoost/LightGBM/CatBoost are optimised implementations.

<span class="at-kicker">Regression Algorithms</span>

## Regression Methods

> [!grid|cols3]
>
>> [!card|section]
>> ###### LINEAR REGRESSION
>> ### *Linear* Regression
>> Foundational regressor fitting a linear relationship via ordinary least squares. Four key assumptions: linearity, no multicollinearity, no autocorrelation, homoscedasticity.
>>
>> Inspect `.coef_` for learned weights.
>
>> [!card|section]
>> ###### REGULARISED REGRESSION
>> ### Ridge & *Lasso*
>> Ridge (L2) shrinks coefficients toward zero, reducing variance. Lasso (L1) drives coefficients to exactly zero, performing feature selection. See [[../ml-algorithms/ridge-lasso-elastic-net|Ridge, Lasso & Elastic Net]].
>
>> [!card|section]
>> ###### TREE REGRESSION
>> ### Tree-Based *Regression*
>> Decision Tree, Random Forest, and Gradient Boosting Regressors partition feature space into regions and predict the mean target value per region. Robust to outliers and non-linear relationships.
>
>> [!card|section]
>> ###### SVR
>> ### Support Vector *Regression*
>> SVM adapted for regression using epsilon-insensitive loss. Predictions penalised only when outside an epsilon tube around true values — robust to small errors.

<span class="at-kicker">Best Practices</span>

## End-to-End Pipeline

The canonical supervised learning workflow ensures reproducibility and prevents data leakage:

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### 4 STEPS · SUPERVISED LEARNING PIPELINE
>> # From *raw data* to *validated model*.
>> Follow this pattern to ensure correct evaluation and prevent leakage.
>
>> [!card|step]
>> ###### Step 01
>> ### *Split* the data.
>> Use `train_test_split` with `stratify=y` for classification. Set `random_state` for reproducibility. Never touch test data until final evaluation.
>
>> [!card|step]
>> ###### Step 02
>> ### *Build* a Pipeline.
>> Wrap preprocessing (scaling, encoding) and model in a `Pipeline`. This ensures preprocessing fits only on training data during cross-validation.
>
>> [!card|step]
>> ###### Step 03
>> ### *Train* and tune.
>> Fit the pipeline on training data. Use `GridSearchCV` or `RandomizedSearchCV` for hyperparameter optimisation with cross-validation.
>
>> [!card|step]
>> ###### Step 04
>> ### *Evaluate* on held-out test.
>> Report metrics on the untouched test set. Use `classification_report` or appropriate regression metrics. Cross-validate the full pipeline: `cross_val_score(pipeline, X, y, cv=5)`.

> [!example] Building a supervised pipeline in scikit-learn
> ```python
> from sklearn.pipeline import Pipeline
> from sklearn.preprocessing import StandardScaler
> from sklearn.ensemble import RandomForestClassifier
> from sklearn.model_selection import train_test_split, cross_val_score
> from sklearn.metrics import classification_report
>
> X_train, X_test, y_train, y_test = train_test_split(
>     X, y, test_size=0.2, stratify=y, random_state=42
> )
> pipeline = Pipeline([
>     ('scaler', StandardScaler()),
>     ('clf', RandomForestClassifier(n_estimators=100))
> ])
> pipeline.fit(X_train, y_train)
> print(classification_report(y_test, pipeline.predict(X_test)))
> ```

> [!tip] Always use a Pipeline
> A `Pipeline` ensures preprocessing is fit **only on training data** and applied consistently to test data — preventing data leakage.

<span class="at-kicker">Knowledge Check</span>

## Interview questions

1. What is the difference between classification and regression?
2. When would you choose Naive Bayes over Logistic Regression?
3. Why is Random Forest generally more robust than a single Decision Tree?
4. What are the four assumptions of Linear Regression?
5. SVM is effective in high-dimensional spaces — why?
6. What is the bias-variance tradeoff in the context of ensemble methods?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Algorithms
>> [[../ml-algorithms/decision-trees|Decision Trees]] · [[../ml-algorithms/random-forest|Random Forest]] · [[../ml-algorithms/logistic-regression|Logistic Regression]] · [[../ml-algorithms/naive-bayes|Naive Bayes]] · [[../ml-algorithms/svm|SVM]] · [[../ml-algorithms/xgboost|XGBoost]]
>
>> [!card] Evaluation
>> [[evaluation-metrics|Evaluation Metrics]] · [[cross-validation|Cross Validation]]
>
>> [!card] Data Prep
>> [[feature-engineering|Feature Engineering]] · [[feature-selection|Feature Selection]]
