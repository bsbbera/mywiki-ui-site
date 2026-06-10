---
title: Data Cleaning
Created:
  - 2026-06-08
date modified: Tuesday, June 9th 2026, 6:00:00 pm
aliases:
  - Data Cleaning
  - Data Preprocessing
  - Imputation
  - Missing Values
  - Data Leakage
  - Train Test Split
category: Machine Learning
tags:
  - MachineLearning
  - DataPreprocessing
  - DataScience
banner: https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "Data is the new oil, but unlike oil, data is not scarce — what is scarce is clean, usable data."
> <cite>— Unknown</cite>

---

<span class="at-kicker">Data Preparation · Machine Learning</span>

# Data Cleaning

<p class="at-lead">
Data cleaning prepares raw data for model training by handling missing values, removing inconsistencies, preventing data leakage, and ensuring reproducible train-test splits. Clean data is the foundation of any reliable ML pipeline — garbage in, garbage out applies more forcefully in ML than anywhere else.
</p>

<span class="at-stat">imputation</span> · <span class="at-stat">train-test split</span> · <span class="at-stat">leakage prevention</span> · <span class="at-mark">the foundation of reliable ML</span>

<span class="at-kicker">Data Splitting</span>

## Train-Test Split

Shuffle the data and split into training and test sets. Always set a `random_state` for reproducibility.

> [!example] Splitting in scikit-learn
> ```python
> from sklearn.model_selection import train_test_split
> train_set, test_set = train_test_split(df, test_size=0.2, random_state=42)
> ```
> Use `stratify=y` for classification tasks to preserve class proportions in both halves.

> [!warning] The golden rule of data splitting
> All transformations — scaling, encoding, imputation — must be **fit only on the training data**, then applied to the test data. Never fit on the full dataset before splitting. Doing so allows test-set statistics to leak into the model.

<span class="at-kicker">Missing Values</span>

## Imputation Strategies

> [!grid|cols3]
>
>> [!card|section]
>> ###### SIMPLE IMPUTATION
>> ### *Simple* Imputation
>> Fill NaNs with statistical values (mean, median, mode, constant).
>>
>> ```python
>> from sklearn.impute import SimpleImputer
>> imputer = SimpleImputer(strategy='median')
>> X_imputed = imputer.fit_transform(X)
>> ```
>>
>> | Strategy | Best for |
>> | --- | --- |
>> | **Mean** | Normally distributed numerical features |
>> | **Median** | Skewed numerical features (robust to outliers) |
>> | **Most frequent** | Categorical features |
>> | **Constant** | Explicitly mark missingness |
>
>> [!card|section]
>> ###### KNN IMPUTATION
>> ### *KNN* Imputation
>> Finds similar data points using KNN and imputes from neighbours' values. Captures local structure but computationally expensive (O(n²)).
>>
>> ```python
>> from sklearn.impute import KNNImputer
>> imputer = KNNImputer(n_neighbors=5)
>> X_imputed = imputer.fit_transform(X_scaled)
>> ```
>>
>> > [!warning] Scale before KNN imputation
>> > KNN is distance-based. Unscaled features will be dominated by high-magnitude variables. Always standardise first.
>
>> [!card|section]
>> ###### MICE
>> ### *MICE* Imputation
>> Multivariate Imputation by Chained Equations. Models each feature with missing values as a function of other features, iterating until convergence.
>>
>> > [!info] When to use MICE
>> > Most appropriate when: (a) missingness is substantial, (b) features are strongly correlated, and (c) statistical inference about imputed values matters. For pure prediction, KNN or median is usually sufficient.

> [!example] Mean vs. Median imputation on skewed data
> Consider income data: `[30K, 35K, 32K, 28K, 200K, 33K, 31K, NaN, 34K, 29K]`
>
> The outlier £200K inflates the mean to £52.5K — wildly unrepresentative. The **median** of £32.5K is far better. With right-skewed financial or count data, always prefer median.

### Handling Missing Categorical Values

| Strategy | When to use |
| --- | --- |
| **Delete records** | Only when missingness is < 5% and missing at random |
| **Replace with most common value** | Quick fix; risks majority-class bias |
| **Predict with supervised model** | When you have enough non-missing data to train a predictor |
| **K-Means clustering** | Use cluster centroids; good for mixed data types |

### Missingness mechanisms

Understanding *why* data is missing determines how you should handle it:

| Mechanism | Description | Example | Strategy |
|-----------|-------------|---------|----------|
| **MCAR** (Missing Completely at Random) | Missingness is independent of all observed and unobserved data | Sensor randomly drops 2% of readings | Simple imputation (mean, median) |
| **MAR** (Missing at Random) | Missingness depends on observed data, not the missing value itself | High-income borrowers more likely to have credit scores reported | Model-based imputation using observed predictors |
| **MNAR** (Missing Not at Random) | Missingness depends on the unobserved missing value itself | Applicants with poor credit history intentionally omit scores | Domain-knowledge modelling; flag as a feature; consider sensitivity analysis |

> [!warning] MNAR is the hardest case
> When missingness is related to the value itself, no purely statistical imputation fixes the bias. You need domain knowledge, external data, or to treat missingness as an informative signal (e.g., create an `is_missing` indicator feature).

<span class="at-kicker">Data Integrity</span>

## Data Leakage Prevention

**Data leakage** is the creation of unexpected additional information in training data, allowing a model to make unrealistically good predictions. Leakage is one of the most common and dangerous mistakes in ML.

### Types of Leakage

> [!grid|cols2]
>
>> [!card|section]
>> ###### LEAKY PREDICTORS
>> ### *Leaky* Predictors
>> Training data includes information unavailable at prediction time:
>> - **ID leaks** — target encoded in ID column
>> - **Future information** — data from after prediction point
>> - **Target leakage** — target variable leaks into a feature
>>
>> > [!tip] How to detect
>> > If a model is suspiciously accurate (near 100% AUC), investigate features with disproportionate importance.
>
>> [!card|section]
>> ###### LEAKY VALIDATION
>> ### *Leaky* Validation Strategy
>> Information from test set leaks into training process:
>> - Pre-processing before splitting
>> - Fitting scalers/imputers on full dataset
>>
>> **Solution:** Always use a `Pipeline` so pre-processing is fit only on training folds.

> [!example] Correct anti-leakage pipeline
> ```python
> from sklearn.pipeline import Pipeline
> from sklearn.preprocessing import StandardScaler
> from sklearn.impute import SimpleImputer
> from sklearn.ensemble import RandomForestClassifier
>
> pipeline = Pipeline([
>     ('imputer', SimpleImputer(strategy='median')),
>     ('scaler', StandardScaler()),
>     ('clf', RandomForestClassifier())
> ])
> ```
> Wrapping in a `Pipeline` guarantees each step is fitted only on training data. Pass directly to `cross_val_score`.

## Data Validation vs Data Transformation

These two steps are often confused but serve distinct purposes:

| | **Data Transformation** | **Data Validation** |
|---|---|---|
| **Goal** | Reshape, clean, and enhance data for modelling | Assess data quality against expected criteria |
| **Actions** | Scaling, encoding, imputation, feature engineering | Check completeness, consistency, accuracy, validity |
| **When** | After validation passes; during feature engineering | Before transformation; at ingestion boundaries |
| **Tools** | sklearn transformers, pandas, custom pipelines | Great Expectations, Pydantic, custom assertions |

> [!tip] Validation gates
> 1. **Ingestion validation** — schema, type ranges, uniqueness constraints
> 2. **Training validation** — distribution drift detection, feature null rates
> 3. **Serving validation** — input schema matches training, value ranges respected
>
> Transform without validation = building on unstable ground. Validate without transformation = clean data that is still model-unready.

<span class="at-kicker">Knowledge Check</span>

## Interview questions

1. What is the difference between mean and median imputation?
2. Why must you scale data before KNN imputation?
3. What is data leakage, and why is it dangerous?
4. How do you detect a leaky predictor?
5. Why should pre-processing steps be inside a Pipeline?
6. When is it acceptable to delete records with missing values?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Data Prep
>> [[feature-engineering|Feature Engineering]] · [[feature-selection|Feature Selection]] · [[outlier-detection|Outlier Detection]]
>
>> [!card] Validation
>> [[cross-validation|Cross Validation]] · [[evaluation-metrics|Evaluation Metrics]]
>
>> [!card] Imbalanced Data
>> [[imbalanced-classification|Imbalanced Classification]]
