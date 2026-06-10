---
title: Naive Bayes
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Naive Bayes
  - Bayes Theorem
  - GaussianNB
  - MultinomialNB
  - BernoulliNB
category: Machine Learning
tags:
  - MachineLearning
  - Classification
  - Probability
  - BayesTheorem
banner: https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Probability is the very guide of life."
> <cite>— Marcus Tullius Cicero</cite>

---

<span class="at-kicker">Probabilistic Classifiers · Bayes Theorem</span>

# Naive Bayes

<p class="at-lead">
Naive Bayes is a probabilistic classifier based on Bayes' theorem with a strong ("naive") independence assumption between features. Despite its simplicity, it is remarkably fast and effective — especially for text classification and when training data is limited.
</p>

<span class="at-stat">probabilistic</span> &nbsp;·&nbsp; <span class="at-stat">no iterative training</span> &nbsp;·&nbsp; <span class="at-stat">text classification</span> &nbsp;·&nbsp; <span class="at-mark">often the best baseline to beat before investing in more complex models</span>

<span class="at-kicker">Bayes Theorem</span>

## Bayes' theorem

$$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$$

| Term | Meaning |
| --- | --- |
| $P(A\|B)$ | Posterior — probability of class A given evidence B |
| $P(B\|A)$ | Likelihood — probability of evidence B given class A |
| $P(A)$ | Prior — initial probability of class A |
| $P(B)$ | Evidence — total probability of evidence B (normalisation constant) |

### Derivation

$$P(A \cap B) = P(B \cap A) = P(A|B) \cdot P(B) = P(B|A) \cdot P(A)$$

$$\therefore P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$$

---

<span class="at-kicker">The Naive Assumption</span>

## The "naive" assumption

Naive Bayes assumes all features are **conditionally independent** given the class:

$$P(y | x_1, x_2, \ldots, x_n) = \frac{P(y) \prod_{i=1}^n P(x_i | y)}{P(x_1, x_2, \ldots, x_n)}$$

Since the denominator is constant for all classes, we only need to maximise:

$$P(y) \prod_{i=1}^n P(x_i | y)$$

> [!info] Why "naive" works despite the wrong assumption
> The independence assumption is almost always violated in practice — words in a sentence are correlated, symptoms co-occur, etc. Yet Naive Bayes often works well because the **decision boundary** (which class has higher posterior) can be correct even when the absolute probability estimates are off. The ranking is more robust than the magnitude.

---

<span class="at-kicker">Variants</span>

## Variants

> [!grid|cols2]
>
>> [!card|section]
>> ###### GAUSSIANNB
>> ### *Gaussian* NB
>> For continuous features. Assumes Gaussian distribution per class. Best for general classification with real-valued sensor readings or measurements.
>
>> [!card|section]
>> ###### MULTINOMIALNB
>> ### *Multinomial* NB
>> For discrete counts (word counts, TF-IDF). The standard choice for text classification and document categorisation. Requires non-negative feature values.
>
>> [!card|section]
>> ###### BERNOULLINB
>> ### *Bernoulli* NB
>> For binary / boolean features (word present or absent). Best for document classification with bag-of-words presence/absence features.
>
>> [!card|section]
>> ###### COMPLEMENTNB
>> ### *Complement* NB
>> For imbalanced text datasets. Corrects MultinomialNB bias by training each class on the complement of its data. Usually outperforms MultinomialNB on skewed classes.

| Variant | Feature type | Best for |
| --- | --- | --- |
| **GaussianNB** | Continuous (assumes Gaussian) | General classification with real-valued features |
| **MultinomialNB** | Discrete counts | Text classification (word counts, TF-IDF) |
| **BernoulliNB** | Binary / boolean | Document classification (presence/absence of words) |
| **ComplementNB** | Discrete counts | Imbalanced text datasets (corrects MultinomialNB bias) |

> [!tip] Choosing the right variant
> If your features are raw word counts or TF-IDF scores → **MultinomialNB**. If your features are binary flags (word present/absent) → **BernoulliNB**. If your features are continuous numeric values → **GaussianNB**. For heavily imbalanced text → **ComplementNB** usually outperforms MultinomialNB.

---

<span class="at-kicker">Strengths & Weaknesses</span>

## When Naive Bayes shines

| Strength | Explanation |
| --- | --- |
| **Extremely fast** | No iterative optimisation; just counting and probability calculation |
| **Small data** | Works well even with limited training examples |
| **Text classification** | Spam filtering, sentiment analysis, topic classification |
| **Real-time** | Can train and predict in milliseconds |
| **Baseline** | Excellent baseline before trying complex models |

## When it struggles

| Weakness | Explanation |
| --- | --- |
| **Correlated features** | Violates the independence assumption; produces poor probability estimates |
| **Zero probabilities** | If a feature value never appears with a class, probability = 0; fixed by Laplace smoothing |
| **Regression** | Cannot directly predict continuous values |

> [!warning] Zero-probability problem and Laplace smoothing
> If a word never appears in training documents labelled "spam," its likelihood is zero — and the product $\prod P(x_i|y)$ collapses to zero regardless of other features. **Laplace smoothing** (add-one smoothing) adds a small pseudocount $\alpha$ to every feature count, preventing zero probabilities. In scikit-learn this is the `alpha` parameter (default 1.0).

---

> [!example] Naive Bayes classifiers in scikit-learn
> ```python
> from sklearn.naive_bayes import GaussianNB, MultinomialNB, BernoulliNB
>
> # Continuous features (e.g., sensor readings)
> GaussianNB().fit(X_train, y_train)
>
> # Text with word counts or TF-IDF (alpha = Laplace smoothing)
> MultinomialNB(alpha=1.0).fit(X_train_tfidf, y_train)
>
> # Binary presence/absence features
> BernoulliNB(alpha=1.0).fit(X_train_binary, y_train)
> ```
> All three share the same `.fit` / `.predict` / `.predict_proba` API. Note that `MultinomialNB` requires non-negative feature values.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. State Bayes' theorem and explain each term.
2. Why is Naive Bayes called "naive"?
3. When does the independence assumption hurt Naive Bayes?
4. What is Laplace smoothing, and why is it needed?
5. When would you use MultinomialNB over GaussianNB?
6. Why is Naive Bayes particularly effective for text classification?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Probability
>> [[../statistics/probability-distributions|Probability Distributions]], [[../statistics/bayesian-inference|Bayesian Inference]]
>
>> [!card] Text Classification
>> [[../nlp/naive-bayes-text|Naive Bayes for Text]], [[../nlp/tf-idf|TF-IDF]]
>
>> [!card] Linear Models
>> [[linear-models|Linear Models]], [[logistic-regression|Logistic Regression]]
