---
title: Central Limit Theorem & Law of Large Numbers
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Central Limit Theorem
  - CLT
  - Law of Large Numbers
  - LLN
  - Sampling Distribution
category: Statistics
tags:
  - Statistics
  - Mathematics
  - Probability
  - Sampling
  - DataScience
banner: https://images.unsplash.com/photo-1518133910546-b6c2792dda6f?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "The Central Limit Theorem is the crown jewel of probability theory."

---

<span class="at-kicker">Statistics · Probability Theory</span>

# Central Limit Theorem & Law of Large Numbers

<p class="at-lead">
The Central Limit Theorem states that regardless of a population's underlying distribution, the sampling distribution of the mean approaches a normal distribution as sample size increases. The Law of Large Numbers guarantees that sample averages converge to theoretical expected values. Together they form the foundation of inferential statistics and justify why normal-based methods work across diverse domains.
</p>

<span class="at-stat">n > 30</span> &nbsp;·&nbsp; <span class="at-stat">μ, σ²/n</span> &nbsp;·&nbsp; <span class="at-stat">normal</span> convergence &nbsp;·&nbsp; <span class="at-mark">the foundation of statistical inference</span>

<span class="at-kicker">Central Limit Theorem</span>

## CLT: The Foundation of Inference

> The Central Limit Theorem states that if you have a population with mean $\mu$ and standard deviation $\sigma$ and take sufficiently large random samples from the population, then the distribution of the sample means will be approximately normally distributed — **regardless of whether the source population is normal or skewed**.

### CLT Requirements

| Condition | Requirement | Practical implication |
|-----------|-------------|----------------------|
| **Sample size** | $n > 30$ (rule of thumb) | Larger samples → better approximation |
| **Random sampling** | Samples must be independent | Avoid sampling bias |
| **Finite variance** | Population $\sigma^2 < \infty$ | Most real-world distributions satisfy this |

### Sampling distribution parameters

Given population parameters $\mu$ and $\sigma^2$:

| Property | Value |
|----------|-------|
| Mean of sampling distribution | $\mu_{\bar{x}} = \mu$ |
| Variance of sampling distribution | $\sigma^2_{\bar{x}} = \frac{\sigma^2}{n}$ |
| Standard error | $SE = \frac{\sigma}{\sqrt{n}}$ |

> [!info] Why the CLT matters
> The CLT explains why Z-tests and t-tests work: they assume the sampling distribution of the mean is normal. Even when the underlying population is skewed, bimodal, or completely non-normal, the sample mean distribution becomes normal with enough samples.

### Visual intuition

```
Population Distribution          Sampling Distribution of Mean (n=30)
     │                                │
  ███│                                │        ▲
 ████│  Skewed/Weird                  │       ▲ ▲
█████│                                │      ▲   ▲
─────┼──────────────→              ───┼─────▲─────▲─────→
     μ                                μ     Normal!
```

### Python demonstration

```python
import numpy as np
import matplotlib.pyplot as plt

# Exponential distribution (highly non-normal)
population = np.random.exponential(scale=2, size=100000)

# Sample means from samples of size 30
sample_means = [np.mean(np.random.choice(population, 30)) 
                for _ in range(10000)]

# Result: sample_means follows normal distribution!
```

---

<span class="at-kicker">Law of Large Numbers</span>

## LLN: Convergence to Expectation

> The Law of Large Numbers states that as the number of trials of a random process increases, the average of the results approaches the expected (theoretical) value.

### Mathematical statement

$$\bar{X}_n = \frac{1}{n}\sum_{i=1}^{n} X_i \xrightarrow{p} \mu \quad \text{as } n \to \infty$$

Where:
- $\bar{X}_n$ = sample mean of $n$ observations
- $\mu$ = true population mean
- $\xrightarrow{p}$ = converges in probability

### Strong vs Weak Law

| Law | Convergence | Statement |
|-----|-------------|-----------|
| **Weak LLN** | In probability | $P(|\bar{X}_n - \mu| > \epsilon) \to 0$ |
| **Strong LLN** | Almost surely | $P(\lim_{n\to\infty} \bar{X}_n = \mu) = 1$ |

### LLN vs Law of Averages (Gambler's Fallacy)

> [!warning] The Gambler's Fallacy
> The Law of Large Numbers is **not** the "Law of Averages." The fallacy is the belief that outcomes of a random event will "even out" within a small sample.

| Concept | Correct interpretation |
|---------|------------------------|
| **LLN** | Long-run convergence in the limit as $n \to \infty$ |
| **Gambler's Fallacy** | Incorrect belief that past outcomes affect independent future trials |

> [!example] Coin toss example
> After 10 heads in a row, the probability of heads on the next toss is still 50%. The LLN says that over millions of tosses, the ratio will approach 50% — it does not promise "balancing out" in the short term.

---

<span class="at-kicker">Comparing LLN and CLT</span>

## Two Pillars of Probability

> [!grid|cols2]
>
>> [!card|hero dark spanfull]
>> ###### LAW OF LARGE NUMBERS
>> ### Convergence *of the Mean*
>> Where the sample mean goes as $n \to \infty$
>> 
>> **Statement**: $\bar{X}_n \to \mu$
>> 
>> **Focus**: Point convergence to expected value
>> 
>> **Use case**: Justifies using sample mean as estimator
>
>> [!card|hero dark spanfull]
>> ###### CENTRAL LIMIT THEOREM
>> ### Distribution *of the Mean*
>> What shape the sample mean takes as $n \to \infty$
>> 
>> **Statement**: $\bar{X}_n \sim N(\mu, \sigma^2/n)$
>> 
>> **Focus**: Shape of sampling distribution
>> 
>> **Use case**: Enables confidence intervals, hypothesis testing

### When to use each

| Question | Theorem to use |
|----------|----------------|
| "Will my sample mean equal the true mean?" | LLN (eventually, yes) |
| "How close is my sample mean likely to be?" | CLT (gives distribution) |
| "Can I construct a confidence interval?" | CLT (provides normality) |
| "Is my estimator consistent?" | LLN (proves convergence) |

---

<span class="at-kicker">Applications</span>

## Why These Theorems Matter

### 1. Confidence Intervals

The CLT justifies the normal-based confidence interval formula:

$$\bar{x} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$$

### 2. Hypothesis Testing

Z-tests and t-tests rely on the sampling distribution being normal:

$$Z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$$

### 3. A/B Testing

Sample conversion rates follow normal distributions, enabling standard statistical tests even when individual conversions are Bernoulli (0/1).

### 4. Quality Control

Manufacturing measurements often have unknown distributions, but sample averages follow normal distributions for control chart analysis.

### 5. Monte Carlo Methods

Simulation-based estimation relies on LLN for convergence and CLT for error bounds.

---

<span class="at-kicker">Practical Guidelines</span>

## Sample Size Rules

| Scenario | Minimum $n$ | Notes |
|----------|-------------|-------|
| **Symmetric population** | 15-20 | CLT kicks in faster |
| **Moderately skewed** | 30 | Standard rule of thumb |
| **Highly skewed** | 50-100 | Insurance, financial data |
| **Binary data (p near 0.5)** | 30 | $np > 10$, $n(1-p) > 10$ |
| **Binary data (p near 0 or 1)** | 100+ | Rare events need more samples |

---

<span class="at-kicker">Interview Questions</span>

## Interview Questions

1. State the Central Limit Theorem in your own words.
2. What are the three conditions required for the CLT to hold?
3. How does the standard error change as sample size increases?
4. What is the difference between the Law of Large Numbers and the Law of Averages?
5. Why does the CLT matter for hypothesis testing?
6. When would you need a larger sample size for the CLT to apply?
7. What is the Gambler's Fallacy and how does it relate to the LLN?

---

## Related pages

> [!grid]
>
>> [!card] Statistical Inference
>> [[hypothesis-testing|Hypothesis Testing]] · [[confidence-intervals|Confidence Intervals]] · [[ab-testing|A/B Testing]]
>
>> [!card] Probability
>> [[probability-distributions|Distributions]] · [[sampling|Sampling Methods]] · [[expected-value|Expected Value]]
>
>> [!card] Estimation
>> [[maximum-likelihood|Maximum Likelihood]] · [[bayesian-inference|Bayesian Inference]] · [[bootstrap|Bootstrap]]
>
>> [!card] Applications
>> [[ab-testing|A/B Testing]] · [[quality-control|Quality Control]] · [[monte-carlo|Monte Carlo]]
