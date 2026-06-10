---
title: Entropy & Information Theory
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Entropy
  - Cross-Entropy
  - KL Divergence
  - Information Theory
  - Shannon Entropy
category: Statistics
tags:
  - Statistics
  - InformationTheory
  - MachineLearning
  - DeepLearning
  - DataScience
banner: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Information is the resolution of uncertainty."
> <cite>— Claude Shannon</cite>

---

<span class="at-kicker">Statistics · Information Theory</span>

# Entropy & Information Theory

<p class="at-lead">
Information theory gives us rigorous tools for measuring uncertainty and the cost of describing data. These concepts originated in thermodynamics and communications — and are now central to decision trees, neural network loss functions, and generative models.
</p>

<span class="at-stat">Shannon entropy</span> &nbsp;·&nbsp; <span class="at-stat">cross-entropy loss</span> &nbsp;·&nbsp; <span class="at-stat">KL divergence</span> &nbsp;·&nbsp; <span class="at-mark">the log punishes confident wrong predictions disproportionately</span>

<span class="at-kicker">Entropy</span>

## Entropy

**Shannon entropy** measures the average level of *information*, *surprise*, or *uncertainty* in a random variable's possible outcomes.

$$H(p) = -\sum_i p_i \log_2 p_i$$

| Split | Entropy |
| --- | --- |
| Pure (all one class) | 0 |
| Maximally impure (equal classes) | 1 |

Higher entropy = harder to draw conclusions from the data.

> [!example] Concrete entropy calculation
> A basket contains 8 fruits: 6 apples and 2 oranges.
> - P(apple) = 6/8 = 0.75
> - P(orange) = 2/8 = 0.25
>
> $$H = -(0.75 \times \log_2 0.75 + 0.25 \times \log_2 0.25)$$
> $$H = -(0.75 \times (-0.415) + 0.25 \times (-2.0))$$
> $$H = 0.311 + 0.5 = \mathbf{0.811 \text{ bits}}$$
>
> If the basket had 4 apples and 4 oranges (maximally uncertain):
> $$H = -(0.5 \times (-1) + 0.5 \times (-1)) = \mathbf{1.0 \text{ bit}}$$
>
> Pure basket (8 apples, 0 oranges): $H = 0$ bits — no uncertainty at all.

In data science, entropy quantifies **impurity** in a node of a decision tree. The tree always tries to **minimise entropy** (maximise Information Gain) at each split.

---

<span class="at-kicker">Information Gain & Gini</span>

## Information Gain

$$IG = H(\text{parent}) - \sum_j \frac{|S_j|}{|S|} H(S_j)$$

Decision trees maximise information gain at each split — selecting the feature and threshold that produces the purest child nodes.

## Gini Impurity (related concept)

$$G_i = 1 - \sum_k p_{i,k}^2$$

Used in CART (Classification and Regression Trees) instead of entropy.

| | Entropy | Gini |
| --- | --- | --- |
| Uses log? | Yes | No |
| Speed | Slower | **Faster** (preferred in sklearn) |
| Tree shape | More balanced | Tends to isolate dominant class |

> [!info] Entropy vs. Gini
> For most practical purposes there is little difference; Gini is the default in scikit-learn because it's computationally cheaper.

---

<span class="at-kicker">Cross-Entropy</span>

## Cross-Entropy

**Cross-entropy** is the primary loss function for classification in neural networks and logistic regression.

$$J(w) = -\frac{1}{N} \sum_{i=1}^N \left[ y_i \log(\hat{y}_i) + (1-y_i) \log(1-\hat{y}_i) \right]$$

> [!info] Cross-entropy decomposition
> Cross-entropy = Entropy + KL Divergence

> [!example] Cross-entropy by hand
> A model predicts P(cat) = 0.7, P(dog) = 0.2, P(bird) = 0.1 for an image that is **actually a cat** (true label = [1, 0, 0]).
>
> $$L = -[1 \cdot \ln(0.7) + 0 \cdot \ln(0.2) + 0 \cdot \ln(0.1)] = -\ln(0.7) \approx 0.357$$
>
> If the model were more confident (P(cat) = 0.9):
> $$L = -\ln(0.9) \approx 0.105 \quad \text{(lower loss = better)}$$
>
> If the model were wrong (P(cat) = 0.1):
> $$L = -\ln(0.1) \approx 2.303 \quad \text{(much higher penalty)}$$

> [!tip] Why cross-entropy works so well
> The logarithm punishes confident wrong predictions disproportionately. Being confidently wrong carries a much heavier penalty than being uncertain — this drives the model toward calibrated predictions.

### Categorical vs. Sparse Categorical

| Loss function | When to use |
| --- | --- |
| `CategoricalCrossentropy` | Target labels are **one-hot encoded** |
| `SparseCategoricalCrossentropy` | Target labels are **integers** |

Both use the same underlying formula — the difference is only in label format.

---

<span class="at-kicker">KL Divergence</span>

## KL Divergence (Kullback–Leibler)

Measures how much one probability distribution P differs from a reference distribution Q.

$$D_{KL}(P \| Q) = \sum_i P(i) \log \frac{P(i)}{Q(i)}$$

- KL divergence is **not symmetric**: $D_{KL}(P\|Q) \neq D_{KL}(Q\|P)$.
- Used in variational autoencoders (VAEs), LDA, and anywhere you compare a learned distribution to a target.

> [!example] KL divergence by hand
> True distribution P = [0.5, 0.5] (fair coin). Model Q = [0.7, 0.3] (biased).
>
> $$D_{KL}(P \| Q) = 0.5 \times \ln\frac{0.5}{0.7} + 0.5 \times \ln\frac{0.5}{0.3}$$
> $$= 0.5 \times (-0.336) + 0.5 \times 0.511$$
> $$= -0.168 + 0.256 = \mathbf{0.088 \text{ nats}}$$
>
> If Q is further from P = [0.9, 0.1]:
> $$D_{KL}(P \| Q) = 0.5 \times \ln\frac{0.5}{0.9} + 0.5 \times \ln\frac{0.5}{0.1}$$
> $$= 0.5 \times (-0.588) + 0.5 \times 1.609 = \mathbf{0.511 \text{ nats}}$$
>
> KL(P || P) = 0 — a distribution has zero divergence from itself.

> [!warning] Asymmetry matters
> `KL(P||Q) != KL(Q||P)`. In VAEs, we minimise `KL(q(z|x) || p(z))` — the approximate posterior vs. the prior. The direction is significant.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is entropy in the context of decision trees?
2. What is the difference between Information Gain and Gini Impurity?
3. Why is cross-entropy used as a loss function for classification?
4. When do you use Categorical vs. Sparse Categorical cross-entropy?
5. What does KL divergence measure, and why is it asymmetric?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Statistics
>> [[probability-distributions|Probability Distributions]], [[descriptive-statistics|Descriptive Statistics]]
>
>> [!card] Algorithms that use entropy
>> [[../ml-algorithms/decision-trees|Decision Trees]], [[../nlp/latent-dirichlet-allocation|LDA (Topic Modelling)]]
>
>> [!card] Deep Learning
>> [[../deep-learning/loss-functions|Loss Functions]], [[../deep-learning/autoencoders|Autoencoders]]
