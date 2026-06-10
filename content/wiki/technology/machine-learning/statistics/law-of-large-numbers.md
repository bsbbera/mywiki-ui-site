---
title: Law of Large Numbers
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Law of Large Numbers
  - LLN
  - Weak Law of Large Numbers
  - Strong Law of Large Numbers
  - Gambler's Fallacy
category: Science
tags:
  - Mathematics
  - Statistics
  - Probability
  - Convergence
  - Sampling
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "The law of large numbers is not a theorem about mathematics — it is a theorem about the world."
> <cite>— Persi Diaconis</cite>

---

<span class="at-kicker">Statistics · Convergence</span>

# Law of Large Numbers

<p class="at-lead">
The Law of Large Numbers states that as the number of independent trials increases, the sample
average converges to the expected value. It is the theoretical justification for using sample
statistics to estimate population parameters — and the reason casinos are profitable while
individual gamblers are not.
</p>

<span class="at-stat">convergence</span> &nbsp;·&nbsp; <span class="at-stat">sample mean</span> &nbsp;·&nbsp; <span class="at-stat">expected value</span> &nbsp;·&nbsp; <span class="at-mark">averages become truth</span>

<span class="at-kicker">The Laws</span>

## Weak Law vs. Strong Law

Let $X_1, X_2, \dots, X_n$ be independent, identically distributed (i.i.d.) random variables with
mean $\mu = E[X_i]$ and finite variance. Define the sample mean:

$$\bar{X}_n = \frac{1}{n}\sum_{i=1}^{n} X_i$$

### Weak Law of Large Numbers (WLLN)

$$\bar{X}_n \xrightarrow{P} \mu$$

The sample mean **converges in probability** to $\mu$:

$$\lim_{n \to \infty} P\left(|\bar{X}_n - \mu| > \varepsilon\right) = 0, \quad \forall \varepsilon > 0$$

> [!info] In words
> For any tiny tolerance $\varepsilon$, the probability that the sample mean deviates from
> $\mu$ by more than $\varepsilon$ goes to zero as $n$ grows. Deviations become arbitrarily
> unlikely — but not impossible.

### Strong Law of Large Numbers (SLLN)

$$\bar{X}_n \xrightarrow{\text{a.s.}} \mu$$

The sample mean **converges almost surely** to $\mu$:

$$P\left(\lim_{n \to \infty} \bar{X}_n = \mu\right) = 1$$

> [!info] In words
> With probability 1, the sequence of sample means converges to $\mu$. Not just that
> deviations are unlikely — they happen only on a set of measure zero.

### Relationship

SLLN is strictly stronger than WLLN: almost sure convergence implies convergence in probability.
The additional requirement for SLLN is that $E[|X|] < \infty$ (finite first absolute moment).

---

<span class="at-kicker">Intuition</span>

## Why Averages Converge

### Variance of the sample mean

$$\text{Var}(\bar{X}_n) = \text{Var}\left(\frac{1}{n}\sum_{i=1}^{n} X_i\right) = \frac{1}{n^2} \cdot n\sigma^2 = \frac{\sigma^2}{n}$$

The variance of the sample mean shrinks as $1/n$. With $n = 10{,}000$, the variance is 10,000
times smaller than the population variance — the average becomes extraordinarily stable.

### Visual intuition

| Sample size | Std. dev. of $\bar{X}_n$ | Likely range (95%) |
|-------------|-------------------------|-------------------|
| 10 | $\sigma/\sqrt{10} \approx 0.316\sigma$ | $\mu \pm 0.62\sigma$ |
| 100 | $\sigma/\sqrt{100} = 0.1\sigma$ | $\mu \pm 0.196\sigma$ |
| 1,000 | $\sigma/\sqrt{1000} \approx 0.032\sigma$ | $\mu \pm 0.062\sigma$ |
| 10,000 | $\sigma/\sqrt{10000} = 0.01\sigma$ | $\mu \pm 0.02\sigma$ |

> [!tip] Standard error
> The standard deviation of the sample mean is called the **standard error**:
> $$SE = \frac{\sigma}{\sqrt{n}}$$
> It quantifies how far the sample mean is expected to deviate from the true mean due to
> sampling alone.

---

<span class="at-kicker">Confidence Intervals</span>

## Quantifying Uncertainty

A **confidence interval** gives a range of plausible values for an unknown population parameter
based on sample data.

### For the mean (known variance)

$$\bar{X}_n \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$$

Where $z_{\alpha/2}$ is the critical value from the standard normal distribution. For 95%
confidence, $z \approx 1.96$.

### Interpretation

> [!warning] A 95% CI does not mean "there is a 95% probability that $\mu$ is in this interval."
> $\mu$ is fixed; the interval is random. The correct interpretation: "If we repeated the
> sampling process infinitely many times, 95% of the constructed intervals would contain $\mu$."

### Width and sample size

To halve the width of a confidence interval, you must **quadruple** the sample size:

$$\text{width} \propto \frac{1}{\sqrt{n}}$$

This diminishing return is why large-sample experiments are expensive — each additional halving
of uncertainty requires 4x more data.

---

<span class="at-kicker">Fallacies</span>

## What the LLN Does *Not* Say

### The Gambler's Fallacy

> "Red came up 5 times in a row — black is due!"

**Wrong.** The LLN describes the *proportion* of outcomes over many trials, not a balancing
mechanism in short sequences. Each fair coin flip is independent; past outcomes do not
influence future ones. The "law of averages" is a myth.

### The hot hand fallacy

> "He's made 5 shots in a row — he's on fire!"

**Usually wrong.** In most controlled experiments (free throws, coin flips), sequences of
successes are no more likely to continue than to revert. The apparent "hot hand" often reflects
selection bias in memory — we remember streaks and forget randomness.

### Regression to the mean

Unlike the gambler's fallacy, **regression to the mean** is real. Extreme observations are
likely followed by less extreme ones simply because they were unlikely to begin with. This is
a statistical artefact, not a causal force.

> [!example] Regression in sports
> A player with an exceptionally high batting average in April will likely have a lower average
> in May — not because they got worse, but because April was an unusually lucky month. The
> true skill lies somewhere between the extremes.

---

<span class="at-kicker">Applications</span>

## Where the LLN Shapes ML

| Domain | Role of LLN |
|--------|-------------|
| **Monte Carlo estimation** | Sample averages approximate integrals: $\frac{1}{n}\sum f(x_i) \approx E[f(X)]$ |
| **Empirical risk minimisation** | Training loss converges to true risk as $n \to \infty$ |
| **A/B testing** | Conversion rates stabilize with more users; small samples are noisy |
| **Bootstrap** | Resampling distributions converge to the true sampling distribution |
| **Cross-validation** | Average validation score becomes reliable with many folds |
| **Stochastic gradient descent** | Mini-batch gradients converge in expectation to the true gradient |

## Interesting facts

- Jacob Bernoulli proved the first version of the LLN in 1713 (published posthumously in
  *Ars Conjectandi*), after 20 years of work. He called it the "Golden Theorem."
- Emile Borel proved the strong law in 1909, establishing that coin flips really do converge
  to 50-50 — not just in probability, but with probability 1.
- The LLN requires only that $E[|X|] < \infty$. For distributions like the Cauchy distribution,
  where the mean does not exist, the sample mean does not converge — it keeps jumping around.

## Interview questions

1. State the Weak and Strong Laws of Large Numbers. What is the difference between them?
2. Why does the standard error decrease as $1/\sqrt{n}$ rather than $1/n$?
3. Explain the correct interpretation of a 95% confidence interval. Why is it wrong to say
   "there is a 95% probability that $\mu$ is in this interval"?
4. What is the Gambler's Fallacy, and why does the LLN not imply it?
5. How does the LLN justify using sample averages to approximate expectations in Monte Carlo
   methods?
6. If you want to halve the width of a confidence interval, how many more samples do you need?

## Related pages

> [!grid]
>
>> [!card] Probability Foundations
>> [[random-variables|Random Variables & Expected Value]] · [[probability-distributions|Probability Distributions]] · [[central-limit-theorem|Central Limit Theorem]]
>
>> [!card] Statistical Inference
>> [[confidence-intervals|Confidence Intervals]] · [[hypothesis-testing|Hypothesis Testing]] · [[sampling|Sampling]]
>
>> [!card] ML Foundations
>> [[monte-carlo-simulation|Monte Carlo Simulation]] · [[statistics|Statistics (ML)]]
>
>> [!card] Cognitive Biases
>> [[survivorship-bias|Survivorship Bias]] · [[bias-variance-tradeoff|Bias-Variance Tradeoff]]
>
>> [!card] Paradoxes
>> [[../../../../paradoxes/probability-paradoxes|Gambler's Fallacy]] — the mistaken belief that independent trials "balance out"
