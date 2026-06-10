---
title: Outlier Detection
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Outlier Detection
  - Anomaly Detection
  - Z-Score
  - IQR
  - Isolation Forest
  - DBSCAN
category: Machine Learning
tags:
  - MachineLearning
  - AnomalyDetection
  - DataScience
  - Preprocessing
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "An outlier is not just a data point that is distant from other observations — it is a signal that something interesting is happening."
> <cite>— Unknown</cite>

---

<span class="at-kicker">Data Preparation · Machine Learning</span>

# Outlier Detection

<p class="at-lead">
An outlier is a data point that is distant from all other observations. Outliers can occur due to natural variability in the data or experimental measurement errors. Some algorithms are highly sensitive to outliers; others are naturally robust — choosing the right detection strategy depends on the algorithm you plan to use downstream.
</p>

<span class="at-stat">Z-score</span> · <span class="at-stat">IQR</span> · <span class="at-stat">isolation forest</span> · <span class="at-mark">finding the signal in the noise</span>

<span class="at-kicker">Algorithm Sensitivity</span>

## Robust vs. Sensitive Algorithms

| Sensitive to outliers | Robust to outliers |
| --- | --- |
| Linear / Logistic Regression | Tree-based models (Random Forest, XGBoost) |
| SVM | Naive Bayes |
| KNN | DBSCAN (clustering) |
| K-Means | — |
| Hierarchical Clustering | — |
| PCA | — |

> [!info] Why tree models are robust
> Tree-based algorithms create non-linear boundaries by splitting on thresholds. An extreme value simply falls into an existing leaf — it doesn't distort the entire decision boundary the way it would in a distance- or gradient-based algorithm.

<span class="at-kicker">Parametric Methods</span>

## Statistical Approaches

> [!grid|cols2]
>
>> [!card|section]
>> ###### Z-SCORE
>> ### *Z-Score* Method
>> Measures how many standard deviations a point is from the mean:
>> $$z = \frac{x - \mu}{\sigma}$$
>>
>> - Typically, points with $|z| > 3$ are flagged as outliers
>> - In normal distribution: 68% within 1σ, 95% within 2σ, 99.7% within 3σ
>> - **Sensitive to the outlier itself** — extreme values inflate both μ and σ
>
>> [!card|section]
>> ###### IQR
>> ### *Interquartile* Range
>> $$\text{IQR} = Q_3 - Q_1$$
>> $$\text{Bounds} = Q_1 \pm 1.5 \times \text{IQR}$$
>>
>> Values outside bounds are flagged. **More robust than Z-score** — median and quartiles are less affected by extreme values.

> [!example] Z-Score vs. IQR on the same data
> Daily website visits (in thousands): `[120, 135, 128, 140, 132, 125, 500, 138, 130, 142]`
>
> **Z-Score:** μ = 179, σ = 113.5. For outlier 500: z = (500 − 179) / 113.5 ≈ **2.83**. Below the |z| > 3 threshold — the extreme value inflates μ and σ so much that it masks itself!
>
> **IQR:** Q1 = 128.5, Q3 = 140, IQR = 11.5. Upper bound = 140 + 1.5 × 11.5 = **157.25**. Value 500 is clearly flagged (500 > 157.25).

> [!warning] Z-score self-masking
> The Z-score method can fail to flag outliers because extreme values inflate the mean and standard deviation. IQR is generally preferred. If you must use Z-score, consider the **modified Z-score** based on median absolute deviation (MAD).

```python
import numpy as np
Q1, Q3 = np.percentile(dataset, [25, 75])
IQR = Q3 - Q1
lower, upper = Q1 - 1.5 * IQR, Q3 + 1.5 * IQR
```

<span class="at-kicker">Non-Parametric Methods</span>

## Machine Learning Approaches

> [!grid|cols3]
>
>> [!card|section]
>> ###### ISOLATION FOREST
>> ### *Isolation* Forest
>> Based on two principles of anomalies: (1) **Few** — anomalies are minority, (2) **Different** — attribute values are very different from normal instances.
>>
>> Builds ensemble of isolation trees. Anomalies have **shorter average path lengths** — easier to isolate.
>>
>> ```python
>> from sklearn.ensemble import IsolationForest
>> iso = IsolationForest(contamination=0.05, random_state=42)
>> labels = iso.fit_predict(X)  # -1 = outlier, +1 = inlier
>> ```
>
>> [!card|section]
>> ###### DBSCAN
>> ### *DBSCAN* for Outliers
>> Groups points in dense regions; marks sparse points as **noise** (label = -1).
>>
>> ```python
>> from sklearn.cluster import DBSCAN
>> labels = DBSCAN(eps=0.5, min_samples=5).fit_predict(X)
>> outliers = X[labels == -1]
>> ```
>>
>> > [!tip] DBSCAN vs. Isolation Forest
>> > Use **DBSCAN** when you want clustering and anomaly detection simultaneously. Use **Isolation Forest** for dedicated, scalable anomaly detection — it handles high-dimensional data better.
>
>> [!card|section]
>> ###### LOF
>> ### Local Outlier *Factor*
>> Compares local density of a point to its neighbours'. Points with substantially lower density than neighbours are flagged — capturing locally unusual but not globally extreme points.
>>
>> ```python
>> from sklearn.neighbors import LocalOutlierFactor
>> lof = LocalOutlierFactor(n_neighbors=20, contamination=0.05)
>> labels = lof.fit_predict(X)
>> ```

> [!grid|cols2]
>
>> [!card|section]
>> ###### ELLIPTIC ENVELOPE
>> ### *Elliptic* Envelope
>> Fits a multivariate Gaussian to the data and flags points outside the fitted ellipse. Best for unimodal, roughly Gaussian data — poor choice for multi-modal or skewed distributions.
>>
>> ```python
>> from sklearn.covariance import EllipticEnvelope
>> env = EllipticEnvelope(contamination=0.05).fit(X)
>> labels = env.predict(X)  # -1 = outlier
>> ```

<span class="at-kicker">Action Framework</span>

## When to Remove vs. Keep

| Action | When |
| --- | --- |
| **Remove** | Measurement error, data entry mistake |
| **Transform** (log, clip) | Natural but extreme values that distort the model |
| **Keep** | The outlier is a genuine, meaningful signal (fraud, anomaly detection) |
| **Use robust model** | Outliers are expected and informative |

> [!note] Outliers as the target
> In fraud detection, network intrusion detection, and medical anomaly detection, the outlier *is* what you're trying to find. Never remove outliers before considering whether they might be the most important data points in your dataset.

<span class="at-kicker">Knowledge Check</span>

## Interview questions

1. Which algorithms are most sensitive to outliers? Which are robust?
2. What is the difference between Z-score and IQR for outlier detection?
3. How does Isolation Forest detect anomalies?
4. When would you use DBSCAN over Isolation Forest?
5. Should you always remove outliers? Why or why not?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Data Prep
>> [[data-cleaning|Data Cleaning]] · [[feature-engineering|Feature Engineering]]
>
>> [!card] Algorithms
>> [[../ml-algorithms/dbscan|DBSCAN]] · [[../ml-algorithms/random-forest|Random Forest]]
>
>> [!card] Unsupervised
>> [[unsupervised-learning|Unsupervised Learning]]
