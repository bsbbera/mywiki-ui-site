---
title: Feature Engineering
Created:
  - 2026-06-08
date modified: Tuesday, June 9th 2026, 6:00:00 pm
aliases:
  - Feature Engineering
  - Feature Scaling
  - Encoding
  - Normalization
  - Standardization
  - Binning
  - Feature Cross
category: Machine Learning
tags:
  - MachineLearning
  - FeatureEngineering
  - DataScience
  - Preprocessing
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
maturity: seedling
---

---

> "Feature engineering is the process of transforming raw data into features that better represent the underlying problem to the predictive models, resulting in improved model accuracy."
> <cite>— Jason Brownlee</cite>

---

<span class="at-kicker">Data Preparation · Machine Learning</span>

# Feature Engineering

<p class="at-lead">
Feature engineering is the art of transforming raw data into features that make ML algorithms work. It is often the highest-leverage activity in a data science project — good features can make a simple model competitive, while poor features can make any model fail regardless of its sophistication.
</p>

<span class="at-stat">scaling</span> · <span class="at-stat">encoding</span> · <span class="at-stat">transformation</span> · <span class="at-mark">where data science becomes craft</span>

<span class="at-kicker">Why It Matters</span>

## Overview

Feature engineering is where domain knowledge meets algorithmic requirements. The same raw data can be represented in many ways, and the choice of representation profoundly affects model performance.

| Benefit | Description |
| --- | --- |
| **Signal extraction** | Gets the most predictive signal out of the data |
| **Performance boost** | Increases predictive quality and model accuracy |
| **Efficiency** | Reduces dimensionality, enabling more efficient compute |
| **Information concentration** | Concentrates information in fewer, more powerful features |

### The Data Science Pipeline

1. **Data cleansing** — handling missing values, outliers, inconsistencies
2. **Feature tuning** — scaling, encoding, transforming distributions
3. **Representation transformation** — log transform, binning, power transforms
4. **Feature extraction** — deriving new features from existing ones (TF-IDF from text)
5. **Feature construction** — creating new features via combinations or domain knowledge

<span class="at-kicker">Feature Scaling</span>

## Scaling Methods

Many algorithms (Linear Regression, SVM, KNN, Neural Networks, K-Means) depend on Euclidean distance or gradient descent. Features on different scales distort distance calculations and slow convergence.

> [!info] When scaling is not required
> Feature scaling is **not required** for tree-based models (Random Forest, XGBoost, Decision Trees) — they are scale-invariant by construction, splitting on thresholds rather than distances.

> [!grid|cols2]
>
>> [!card|section]
>> ###### MIN-MAX SCALER
>> ### Min-Max *Normalization*
>> Scales values to a fixed range [0, 1]:
>> $$X_{\text{norm}} = \frac{X - X_{\min}}{X_{\max} - X_{\min}}$$
>>
>> - Best when you know the feature's natural bounds
>> - Sensitive to outliers — extreme values compress all others
>>
>> ```python
>> from sklearn.preprocessing import MinMaxScaler
>> X_scaled = MinMaxScaler().fit_transform(X)
>> ```
>
>> [!card|section]
>> ###### STANDARDIZATION
>> ### *Standardization* (Z-score)
>> Centres mean at 0 and scales to unit standard deviation:
>> $$z = \frac{X - \mu}{\sigma}$$
>>
>> - Less sensitive to outliers than Min-Max
>> - **Required for neural networks** — stabilises gradient flow
>>
>> ```python
>> from sklearn.preprocessing import StandardScaler
>> X_scaled = StandardScaler().fit_transform(X)
>> ```

> [!example] Min-Max vs. Z-score on the same data
> Given house prices (£150K–£450K) and bedroom counts (2–4), these are wildly different scales.
>
> After **Min-Max scaling**, both features are in [0, 1] — a KNN model treating them equally becomes valid.
>
> After **Z-score standardisation**, both are centred at 0 with unit variance — gradient-descent algorithms converge faster.
>
> Min-Max is sensitive to the £450K outlier; Z-score is less so because it uses mean and std rather than absolute min/max.

> [!tip] Rule of thumb
> Use **MinMaxScaler** when the feature distribution is bounded and roughly uniform. Use **StandardScaler** when the distribution is approximately Gaussian or you're using a neural network.

### When to use standardisation

| Scenario | Why standardise? |
|----------|------------------|
| **Linear models** (regression, logistic) | Coefficients represent change per one-standard-deviation shift; comparable magnitudes |
| **PCA / dimensionality reduction** | Equal influence on principal components; covariance matrix is scale-sensitive |
| **Distance-based algorithms** (KNN, SVM, K-Means) | Prevents high-magnitude features from dominating distance calculations |
| **Neural networks** | Centres inputs around zero; stabilises gradient flow and accelerates convergence |
| **Data with outliers** | Mean and std are less affected by extremes than min/max bounds |
| **Comparing feature importance** | Puts all features on the same scale for fair coefficient comparison |

<span class="at-kicker">Categorical Encoding</span>

## Encoding Categorical Variables

ML algorithms generally require numerical input. Categorical variables must be encoded before fitting.

### Variable Types

| Type | Description | Example |
| --- | --- | --- |
| **Nominal / Categorical** | No intrinsic order | Gender, country, colour |
| **Ordinal** | Ordered categories | Low / Medium / High, education level |
| **Numerical** | Continuous or discrete numbers | Age, price, temperature |

> [!grid|cols3]
>
>> [!card|section]
>> ###### LABEL ENCODING
>> ### *Label* Encoding
>> Assigns an integer to each category. `OrdinalEncoder` for features; `LabelEncoder` for 1-D targets only.
>>
>> > [!warning] Do not use Label Encoding for linear models
>> > Linear models interpret integers as having magnitude relationships. Use One-Hot Encoding instead. Acceptable for tree-based models.
>
>> [!card|section]
>> ###### ONE-HOT ENCODING
>> ### *One-Hot* Encoding
>> Creates a binary column for each category. Best for **tree-based models**; can cause high dimensionality for linear models with many categories.
>>
>> > [!warning] The dummy variable trap
>> > For linear regression, drop one column to avoid perfect multicollinearity: `drop='first'` in `OneHotEncoder`.
>
>> [!card|section]
>> ###### TARGET ENCODING
>> ### *Target* / Mean Encoding
>> Replace high-cardinality categories with their mean target value. Reduces dimensionality dramatically compared to one-hot.
>>
>> > [!warning] Mean encoding leakage risk
>> > Always use only the training fold's statistics — never the full dataset. Use cross-fold mean encoding or add Laplace smoothing.

### When to Use Which Encoding

| Scenario | Preferred encoding |
| --- | --- |
| Ordinal variable + tree model | Label encoding |
| Nominal variable + tree model | One-hot or target encoding |
| High cardinality (many categories) | Target / mean encoding |
| Linear model | One-hot or target encoding (never label) |

<span class="at-kicker">Advanced Techniques</span>

## Binning, Crosses & Dimensionality Reduction

> [!grid|cols3]
>
>> [!card|section]
>> ###### BINNING
>> ### *Binning* (Bucketing)
>> Groups continuous values into discrete bins. Converts numeric to ordinal. Useful for creating life-stage categories or reducing noise in tree models.
>>
>> ```python
>> pd.cut(df['age'], bins=[0, 18, 35, 60, np.inf],
>>        labels=['child', 'young adult', 'adult', 'senior'])
>> ```
>>
>> > [!warning] Binning loses information
>> > Discards intra-bin variation. Choose boundaries based on domain knowledge or quantiles.
>
>> [!card|section]
>> ###### FEATURE CROSSES
>> ### Feature *Crosses*
>> Create new features by combining existing ones. `hour_of_day × day_of_week` captures temporal patterns neither feature captures alone.
>>
>> > [!tip] Feature crosses in deep learning
>> > Neural networks learn crosses automatically. Most valuable for linear models (Logistic Regression), which cannot discover interactions on their own.
>
>> [!card|section]
>> ###### DIMENSIONALITY REDUCTION
>> ### Dimensionality *Reduction*
>> Compresses information into fewer components:
>> - **PCA** — linear projection to uncorrelated components
>> - **t-SNE / UMAP** — non-linear embedding for visualisation
>>
>> [[../ml-algorithms/pca|PCA →]] · [[../ml-algorithms/t-sne|t-SNE →]]

<span class="at-kicker">Best Practices</span>

## Training vs. Serving

| Approach | Pros | Cons |
| --- | --- | --- |
| **Pre-process training data once** | Simple; reproducible | Transformations must be exactly replicated at serving time |
| **Transform at serving time** | Always consistent with training | Adds latency; requires same transformation code |
| **Pre-processing pipeline** | Clean separation; versioned | Requires pipeline deployment alongside model |

> [!tip] Shared transformation code
> Use the same transformation code — via scikit-learn `Pipeline`, a feature store, or a shared library — for both training and serving. Treat feature computation as a first-class software artefact.

<span class="at-kicker">Knowledge Check</span>

## Interview questions

1. When is feature scaling necessary, and when can you skip it?
2. What is the difference between normalisation and standardisation?
3. Why is one-hot encoding preferred over label encoding for linear models?
4. What are the risks of target encoding, and how do you mitigate them?
5. When would you use binning, and what information do you lose?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Selection
>> [[feature-selection|Feature Selection]] — choosing the most predictive subset
>
>> [!card] Cleaning
>> [[data-cleaning|Data Cleaning]] — handling missing values and outliers
>
>> [!card] Algorithms
>> [[../ml-algorithms/pca|PCA]] · [[../ml-algorithms/t-sne|t-SNE]] · [[../ml-algorithms/k-means|K-Means]]
