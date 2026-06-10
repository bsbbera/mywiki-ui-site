---
title: Descriptive Statistics
Created:
  - 2026-06-08
date modified: Tuesday, June 9th 2026, 6:00:00 pm
aliases:
  - Descriptive Statistics
  - Correlation
  - Covariance
  - Collinearity
  - Multicollinearity
  - VIF
category: Statistics
tags:
  - Statistics
  - Mathematics
  - DataScience
  - FeatureEngineering
banner: https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "The goal is to turn data into information, and information into insight."
> <cite>— Carly Fiorina</cite>

---

<span class="at-kicker">Statistics · Data Summarisation</span>

# Descriptive Statistics

<p class="at-lead">
Descriptive statistics summarise and describe the properties of a dataset — its centre, spread, and relationships between variables. These measures are the first step in any exploratory data analysis (EDA) and the foundation of every downstream model decision.
</p>

<span class="at-stat">variance · std dev · correlation</span> &nbsp;·&nbsp; <span class="at-stat">VIF</span> &nbsp;·&nbsp; <span class="at-stat">multicollinearity</span> &nbsp;·&nbsp; <span class="at-mark">know your data before you model it</span>

<span class="at-kicker">Central Tendency & Spread</span>

## Central tendency and spread

### Variance

The variance of X is the expected value of the squared difference from the mean:

$$\text{Var}(X) = E[(X - \mu)^2]$$

**Sample variance** adjusts for the sample (divides by n-1, not n).

### Standard deviation

The square root of variance — expressed in the same units as the data:

$$\sigma = \sqrt{\text{Var}(X)}$$

### Standard error

The **volatility of the sample mean** — how much the mean itself varies across repeated samples.

$$SE = \frac{s}{\sqrt{n}}$$

where s is the sample standard deviation and n is the sample size.

### Coefficient of variation (CV)

A dimensionless measure of relative variability:

$$CV = \frac{\sigma}{\mu}$$

> [!tip] When to use CV
> Use the coefficient of variation when comparing spread across datasets with different scales — it normalises by the mean.

---

<span class="at-kicker">Analysis by Variable Count</span>

## Analysis by number of variables

| Type | Variables | Techniques |
| --- | --- | --- |
| **Univariate** | 1 | Histogram, box plot, mean, std dev |
| **Bivariate** | 2 | Scatter plot, correlation, cross-tabulation |
| **Multivariate** | 2+ | Pair plot, correlation matrix, PCA |

---

<span class="at-kicker">Correlation & Covariance</span>

## Correlation and covariance

### Pearson's correlation coefficient (r)

$$r = \frac{\sum(x - \bar{x})(y - \bar{y})}{\sqrt{\sum(x - \bar{x})^2 \cdot \sum(y - \bar{y})^2}}$$

Range: **-1 to +1**. Measures how well two variables co-vary in a linear sense.

| r value | Interpretation |
| --- | --- |
| +1 | Perfect positive correlation |
| 0 | No linear correlation |
| -1 | Perfect negative correlation |

### Covariance

$$\text{Cov}_{xy} = \frac{\sum(x - \bar{x})(y - \bar{y})}{n - 1}$$

Indicates direction and strength but is not range-bounded. **Correlation is preferred** because it is normalised.

> [!info] Correlation vs. causation
> Correlation measures linear association, not causation. Two variables can be correlated without one causing the other — both might be driven by a third factor.

---

<span class="at-kicker">Multicollinearity</span>

## Collinearity and multicollinearity

**Collinearity / multicollinearity** occurs when two or more predictor variables in a regression model are highly correlated with each other.

When predictors are collinear, we can reduce the feature set without losing explanatory power — the model treats collinear variables as redundant.

### Pearson's r thresholds

| \|r\| range | Interpretation |
| --- | --- |
| ≥ 0.75 | Highly correlated — consider dropping one |
| 0.25 – 0.75 | Moderate to strong correlation |
| < 0.25 | Poorly correlated |

R² (square of r) — e.g., R = 0.8 → R² = 0.64 → 64% of variance in one variable is explained by the other.

> [!tip] Detecting collinearity
> For small feature sets, examine the correlation matrix visually. For large feature sets, use Ridge or Lasso regression instead of manual dropping — see [[../ml-algorithms/ridge-lasso-elastic-net|Ridge, Lasso & Elastic Net]].

### Variance Inflation Factor (VIF)

**VIF** quantifies how much the variance of a regression coefficient is inflated due to collinearity with other predictors.

$$VIF = \frac{1}{1 - R^2}$$

where R² is from regressing that predictor against all other predictors.

| VIF | Interpretation |
| --- | --- |
| 1 | No correlation with other predictors |
| 5 – 10 | High multicollinearity |
| > 10 | Severe multicollinearity |

> [!warning] High VIF alert
> VIF > 10 indicates severe multicollinearity that can destabilise regression coefficients. Consider removing correlated features or using regularisation.

---

<span class="at-kicker">Estimation Beyond Observations</span>

## Interpolation vs Extrapolation

Both techniques estimate values that are not explicitly present in a dataset, but they differ in where the estimate falls relative to observed data:

### Interpolation

Estimates values **within** the range of known data points. It assumes the underlying relationship is continuous and smooth between observations.

- **Example**: Estimating temperature at 14:30 from readings at 14:00 and 15:00.
- **Methods**: Linear interpolation, polynomial interpolation (Lagrange, Newton), spline interpolation (cubic splines).
- **Reliability**: Generally accurate when the function is smooth and the estimate is close to observed points.

### Extrapolation

Predicts values **beyond** the range of known data points. It assumes the observed trend continues outside the measured domain.

- **Example**: Forecasting city population 10 years into the future from historical census data.
- **Risk**: The further you project beyond observed data, the greater the uncertainty. The underlying relationship may change, flatten, or reverse — invalidating the assumption of continuity.

| | Interpolation | Extrapolation |
|---|---|---|
| **Range** | Inside observed domain | Outside observed domain |
| **Assumption** | Continuity between points | Trend continuation |
| **Risk** | Low (if smooth) | High (increases with distance) |
| **Use in ML** | Filling missing values, resampling | Forecasting, time series prediction |

> [!warning] Extrapolation danger in ML
> Models trained on historical data often fail when deployed on data outside the training distribution. This is extrapolation in disguise — the model has learned a trend that may not hold beyond the training range. Always monitor for distribution shift in production.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is the difference between variance and standard deviation?
2. What does standard error measure, and how is it different from standard deviation?
3. When is covariance preferred over correlation?
4. What is multicollinearity and why is it a problem in regression?
5. How do you detect and handle multicollinearity?
6. What does VIF = 1 mean? VIF = 10?
7. What is the difference between interpolation and extrapolation?
8. Why is extrapolation riskier than interpolation?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Statistics
>> [[probability-distributions|Probability Distributions]], [[hypothesis-testing|Hypothesis Testing]], [[cosine-similarity|Cosine Similarity]]
>
>> [!card] ML Feature Work
>> [[../ml-fundamentals/feature-engineering|Feature Engineering]], [[../ml-fundamentals/feature-selection|Feature Selection]]
>
>> [!card] Algorithms
>> [[../ml-algorithms/ridge-lasso-elastic-net|Ridge, Lasso & Elastic Net]], [[../ml-algorithms/linear-regression|Linear Regression]]
>
>> [!card] Paradoxes
>> [[../../../../paradoxes/statistical-paradoxes|Simpson's Paradox]] — when a trend reverses upon aggregation
