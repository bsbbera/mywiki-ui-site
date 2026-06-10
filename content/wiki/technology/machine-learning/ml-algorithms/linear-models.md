---
title: Linear Models
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Linear Models
  - Linear Regression
  - Logistic Regression
  - Ridge Regression
  - Lasso Regression
  - Elastic Net
  - Perceptron
  - Regularization
  - Loss Functions
category: Machine Learning
tags:
  - MachineLearning
  - LinearModels
  - Regression
  - Classification
  - Regularization
banner: https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."
> <cite>— Stephen Hawking</cite>

---

<span class="at-kicker">Supervised Learning · Linear Methods</span>

# Linear Models

<p class="at-lead">
Linear models assume a linear relationship between input features and the target variable. They are the foundation of statistical learning — fast, interpretable, and often surprisingly effective. When combined with regularisation, they remain competitive even against complex non-linear methods.
</p>

<span class="at-stat">interpretable</span> &nbsp;·&nbsp; <span class="at-stat">fast training</span> &nbsp;·&nbsp; <span class="at-stat">Ridge · Lasso · Elastic Net</span> &nbsp;·&nbsp; <span class="at-mark">the essential baseline before reaching for ensembles or deep learning</span>

<span class="at-kicker">Linear Regression</span>

## Linear regression

Predicts a continuous target by fitting a line that minimises the **Residual Sum of Squares (RSS)**:

$$\hat{y} = w^T x + b$$

The "best fit line" minimises:

$$RSS = \sum_{i=1}^n (y_i - \hat{y}_i)^2$$

**Assumptions:**

1. Linear relationship between independent and dependent variables.
2. Little or no multicollinearity.
3. No autocorrelation in residuals.
4. Homoscedasticity (constant variance of residuals).

> [!example] Linear regression in scikit-learn
> ```python
> from sklearn.linear_model import LinearRegression
> model = LinearRegression().fit(X_train, y_train)
> print(model.coef_, model.intercept_)
> ```

---

<span class="at-kicker">Logistic Regression</span>

## Logistic regression

Despite the name, logistic regression is a **classification** algorithm. It models the probability of a binary outcome using the **sigmoid** function:

$$\hat{y} = \sigma(w^T x + b) = \frac{1}{1 + e^{-(w^T x + b)}}$$

### Why "regression"?

In statistics, "regression" means modelling the relationship between variables. Logistic regression applies the sigmoid to a linear regression output to produce a probability in [0, 1].

### Loss function (cross-entropy)

Linear regression's MSE loss would be **non-convex** for classification. Logistic regression uses cross-entropy (derived from maximum likelihood estimation):

$$J = -\frac{1}{N} \sum_{i=1}^N \left[ y_i \ln(\hat{y}_i) + (1-y_i) \ln(1-\hat{y}_i) \right]$$

| y | ŷ | Loss |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | ∞ |
| 1 | 1 | 0 |
| 1 | 0 | ∞ |

> [!info] Why cross-entropy and not MSE?
> The cross-entropy loss is **convex** for logistic regression, guaranteeing that gradient descent converges to the global optimum. MSE applied to sigmoid outputs produces a non-convex surface with many local minima.

### Interpreting coefficients

If the coefficient for feature $x$ is $c_0$:

- A 1-unit increase in $x$ changes the **log-odds** by $c_0$.
- The **odds** change by a factor of $e^{c_0}$.
- Roughly, the odds increase by $100 \cdot c_0\%$.

> [!example] Logistic regression in scikit-learn
> ```python
> from sklearn.linear_model import LogisticRegression
> model = LogisticRegression(max_iter=1000).fit(X_train, y_train)
> proba = model.predict_proba(X_test)   # columns = [P(class 0), P(class 1)]
> ```

---

<span class="at-kicker">Regularisation</span>

## Regularisation

Linear models can overfit with many features or high-degree polynomials. Regularisation adds a penalty term to the loss function to shrink coefficients.

### Ridge regression (L2)

$$\text{Loss} = \text{MSE} + \lambda \sum_{i=1}^n w_i^2$$

- Shrinks coefficients toward zero but **rarely to exactly zero**.
- Reduces multicollinearity effects.
- Good **default choice** for regularised regression.

### Lasso regression (L1)

$$\text{Loss} = \text{MSE} + \lambda \sum_{i=1}^n |w_i|$$

- Can drive coefficients to **exactly zero** → built-in feature selection.
- Useful when you suspect only a sparse subset of features truly matter.

### Elastic Net

A weighted combination of L1 and L2:

$$\text{Loss} = \text{MSE} + r \cdot \lambda \sum |w_i| + \frac{1-r}{2} \cdot \lambda \sum w_i^2$$

> [!tip] When to use Elastic Net
> Prefer Elastic Net over pure Lasso when the number of features exceeds the number of training instances, or when several features are strongly correlated — Lasso tends to arbitrarily pick one correlated feature and discard the others, while Elastic Net keeps them all with shrunken coefficients.

### Selection criteria

| Scenario | Choice |
| --- | --- |
| Default regularised regression | Ridge |
| Feature selection needed | Lasso |
| More features than samples | Elastic Net |
| Highly correlated features | Elastic Net |

> [!example] Regularised models in scikit-learn
> ```python
> from sklearn.linear_model import Ridge, Lasso, ElasticNet
>
> ridge   = Ridge(alpha=1.0).fit(X, y)
> lasso   = Lasso(alpha=0.1).fit(X, y)
> elastic = ElasticNet(alpha=0.1, l1_ratio=0.5).fit(X, y)
> ```
> `alpha` corresponds to the $\lambda$ penalty strength. `l1_ratio` in Elastic Net controls the blend: 0 = pure Ridge, 1 = pure Lasso.

---

<span class="at-kicker">Perceptron</span>

## Perceptron

The simplest artificial neural network architecture, developed by Frank Rosenblatt in 1957. A single-layer linear classifier that updates weights only when a prediction is wrong.

> [!info] Historical significance
> The perceptron is the ancestor of modern neural networks. Its fundamental limitation — it can only learn linearly separable patterns — motivated the development of multi-layer networks with non-linear activations.

> [!note] Perceptron in scikit-learn
> `from sklearn.linear_model import Perceptron` — equivalent to `SGDClassifier(loss='perceptron', eta0=1, learning_rate='constant', penalty=None)`.

---

<span class="at-kicker">Loss Functions</span>

## Loss functions

| Loss | Formula | Use case |
| --- | --- | --- |
| **L1 / MAE** | $\sum \|y - \hat{y}\|$ | Robust to outliers |
| **L2 / MSE** | $\sum (y - \hat{y})^2$ | Standard regression; differentiable |
| **Huber** | Mix of L1 and L2 | Balances robustness and differentiability |

> [!tip] Choosing between L1 and L2 loss
> L2 (MSE) is preferred for most regression tasks because it is differentiable everywhere and produces stable gradients. Switch to L1 (MAE) or Huber loss when your target variable contains heavy-tailed outliers that would otherwise dominate the squared error.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. Why is logistic regression called "regression" when it's used for classification?
2. What is the difference between Ridge and Lasso regularisation?
3. When would you choose Elastic Net over Lasso?
4. Why doesn't MSE work as a loss function for logistic regression?
5. How do you interpret logistic regression coefficients?
6. What is the perceptron, and what is its main limitation?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Ensembles
>> [[gradient-boosting|Gradient Boosting]], [[random-forest|Random Forest]]
>
>> [!card] Statistics
>> [[../statistics/vector-norms|Vector Norms]], [[../statistics/descriptive-statistics|Descriptive Statistics]]
>
>> [!card] Deep Learning
>> [[../deep-learning/neural-networks|Neural Networks]], [[../deep-learning/perceptron|Perceptron]]
