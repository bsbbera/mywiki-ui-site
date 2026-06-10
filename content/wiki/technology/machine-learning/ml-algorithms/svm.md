---
title: Support Vector Machines
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Support Vector Machines
  - SVM
  - Support Vector Regression
  - Kernel Trick
  - One-Class SVM
category: Machine Learning
tags:
  - MachineLearning
  - SVM
  - Classification
  - Regression
banner: https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "The best way to have a good idea is to have a lot of ideas."
> <cite>— Linus Pauling</cite>

---

<span class="at-kicker">Supervised Learning · Margin-Based</span>

# Support Vector Machines

<p class="at-lead">
Support Vector Machines find the optimal hyperplane that maximises the margin between classes. They are effective in high-dimensional spaces, require only a subset of training points (the support vectors) to define the decision boundary, and extend naturally to non-linear problems via the kernel trick.
</p>

<span class="at-stat">max-margin</span> classifier &nbsp;·&nbsp; <span class="at-stat">kernel trick</span> &nbsp;·&nbsp; <span class="at-stat">SVR + anomaly detection</span> &nbsp;·&nbsp; <span class="at-mark">powerful for high-dimensional data — always scale features first</span>

<span class="at-kicker">Core Idea</span>

## Core idea

Given labelled training data, SVM finds the hyperplane that **maximises the distance (margin)** to the nearest training data points of any class. These nearest points are called **support vectors**.

> [!info] Why maximise the margin?
> Maximising the margin provides a form of implicit regularisation — a wider margin means the model is less sensitive to small perturbations in the input, which generally translates to better generalisation on unseen data.

---

<span class="at-kicker">Linear SVM</span>

## Linear SVM

For linearly separable data, the decision boundary is a straight line (2D) or hyperplane (higher dimensions):

$$w^T x + b = 0$$

The margin is maximised by minimising $\|w\|^2$ subject to the constraint that all training points are correctly classified with a margin of at least 1:

$$y_i (w^T x_i + b) \geq 1$$

### Soft-margin SVM

For non-separable data, SVM allows some misclassification via **slack variables** $\xi_i$:

$$\min \frac{1}{2} \|w\|^2 + C \sum_{i=1}^n \xi_i$$

| C value | Effect |
| --- | --- |
| **Large C** | Smaller margin, fewer misclassifications allowed → risk of overfitting |
| **Small C** | Wider margin, more misclassifications tolerated → more regularisation |

> [!tip] Tuning C
> Start with `C=1.0` and use cross-validation to search over a log-scale range (e.g., 0.01, 0.1, 1, 10, 100). A very large C often signals that feature scaling is missing.

---

<span class="at-kicker">Kernel Trick</span>

## Non-linear SVM — the kernel trick

When data is not linearly separable, SVM maps it to a higher-dimensional space where it becomes separable. The **kernel trick** computes this implicitly without ever constructing the high-dimensional space — only pairwise dot products are needed.

### Common kernels

| Kernel | Formula | Best for |
| --- | --- | --- |
| **Linear** | $K(x, y) = x^T y$ | High-dimensional text data |
| **Polynomial** | $K(x, y) = (\gamma x^T y + r)^d$ | When interactions between features matter |
| **RBF (Gaussian)** | $K(x, y) = e^{-\gamma \|x - y\|^2}$ | General-purpose; most common |
| **Sigmoid** | $K(x, y) = \tanh(\gamma x^T y + r)$ | Neural-network-like behaviour |

> [!tip] Which kernel to use?
> Start with **RBF** — it is the most general and works well across a wide range of datasets. Use **Linear** when the number of features is very large (e.g., text TF-IDF vectors with 10,000+ features) because RBF provides no advantage there and is slower. Try Polynomial only when you have strong domain knowledge that feature interactions are important.

> [!info] Polynomial features — the explicit alternative
> Instead of the kernel trick you can add polynomial features explicitly with `PolynomialFeatures(degree=2)`. This is straightforward but creates a much larger feature matrix, making training slow. The kernel trick achieves the same result in kernel space without the overhead.

---

<span class="at-kicker">Feature Scaling</span>

## Feature scaling is critical

SVMs rely on distance calculations and are **highly sensitive to feature scale**. A feature with a large range will dominate the margin computation.

> [!warning] Always scale before SVM
> Failing to standardise features is the single most common reason SVM underperforms. Use `StandardScaler` fitted only on the training set. Pass the same fitted scaler to transform the test set — never refit on test data.

> [!example] Scaling + SVC
> ```python
> from sklearn.preprocessing import StandardScaler
> from sklearn.svm import SVC
>
> scaler = StandardScaler()
> X_train_s = scaler.fit_transform(X_train)
> X_test_s  = scaler.transform(X_test)
>
> svm = SVC(kernel='rbf', C=1.0, gamma='scale', probability=True)
> svm.fit(X_train_s, y_train)
> ```
> Set `gamma='scale'` (default since sklearn 0.22) to automatically set $\gamma = \frac{1}{n_{\text{features}} \cdot \text{Var}(X)}$.

---

<span class="at-kicker">SVR & Anomaly Detection</span>

## SVM for regression (SVR)

SVM can be used for regression by finding a function that deviates from the actual targets by at most $\epsilon$ (epsilon-insensitive loss). Points inside the $\epsilon$-tube contribute zero loss; only points outside influence the model.

> [!example] Support Vector Regression
> ```python
> from sklearn.svm import SVR
> svr = SVR(kernel='rbf', C=1.0, epsilon=0.1)
> svr.fit(X_train_s, y_train)
> ```

## One-Class SVM for anomaly detection

An unsupervised method for detecting outliers. Trained only on "normal" data, it learns a tight boundary around the training distribution and flags anything outside as an anomaly.

> [!example] One-Class SVM
> ```python
> from sklearn.svm import OneClassSVM
> clf = OneClassSVM(gamma='auto').fit(X_normal)
> preds = clf.predict(X_new)  # +1 = inlier, -1 = outlier
> ```

> [!info] When to use One-Class SVM
> Best suited for high-dimensional data where other methods (Isolation Forest, LOF) develop too much variance. For lower-dimensional data or when contamination rate is known, Isolation Forest is usually faster and more robust.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is the "margin" in SVM, and why do we want to maximise it?
2. What is the effect of increasing C in a soft-margin SVM?
3. What is the kernel trick, and why is it powerful?
4. When would you use a linear kernel vs. an RBF kernel?
5. Why is feature scaling essential for SVM?
6. How does One-Class SVM detect anomalies?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Linear Models
>> [[linear-models|Linear Models]], [[naive-bayes|Naive Bayes]], [[knn|KNN]]
>
>> [!card] Data Prep
>> [[../ml-fundamentals/feature-engineering|Feature Engineering]], [[../ml-fundamentals/feature-scaling|Feature Scaling]]
>
>> [!card] Outliers
>> [[../ml-fundamentals/outlier-detection|Outlier Detection]]
