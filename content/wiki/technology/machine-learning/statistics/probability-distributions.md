---
title: Probability Distributions
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Probability Distributions
  - PDF
  - PMF
  - CDF
  - Random Variables
  - Expected Value
  - LOTUS
category: Statistics
tags:
  - Statistics
  - Probability
  - Mathematics
  - DataScience
banner: https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Probability is the very guide of life."
> <cite>— Marcus Tullius Cicero</cite>

---

<span class="at-kicker">Statistics · Probability Theory</span>

# Probability Distributions

<p class="at-lead">
Probability distributions describe how the values of a random variable are distributed. They are the foundation of statistical inference, machine learning model assumptions, and Bayesian reasoning — underpinning everything from loss functions to sampling strategies.
</p>

<span class="at-stat">PDF · PMF · CDF</span> &nbsp;·&nbsp; <span class="at-stat">Normal · Binomial · Poisson</span> &nbsp;·&nbsp; <span class="at-stat">CLT</span> &nbsp;·&nbsp; <span class="at-mark">the Normal distribution arises naturally because of the Central Limit Theorem</span>

<span class="at-kicker">Random Variables</span>

## Random variables

A **random variable (RV)** is a variable whose numerical value is determined by the outcome of a random phenomenon.

| Type | Description | Example |
| --- | --- | --- |
| **Discrete RV** | Finite or countably infinite outcomes | Number shown on a die: 1, 2, 3, … |
| **Continuous RV** | Uncountably infinite outcomes over a range | Any decimal between 0 and 1 |

---

<span class="at-kicker">PDF, PMF, and CDF</span>

## PDF, PMF, and CDF

| Concept | Applies to | Definition |
| --- | --- | --- |
| **PMF** (Probability Mass Function) | Discrete RV | P(X = x) for each possible x |
| **PDF** (Probability Density Function) | Continuous RV | Non-negative function; integral over entire space = 1 |
| **CDF** (Cumulative Distribution Function) | Both | F(x) = P(X ≤ x); always ends at 1; derivative of CDF = PDF |

> [!info] Understanding the CDF
> The CDF is the cumulative sum of the PDF/PMF. It answers: *what is the probability the variable is at most x?*

---

<span class="at-kicker">Expected Value & LOTUS</span>

## Expected value and LOTUS

### Expected value (mean)

$$E[X] = \begin{cases} \sum_x x \cdot f(x) & \text{discrete} \\ \int_{\mathbb{R}} x \cdot f(x)\, dx & \text{continuous} \end{cases}$$

The mean gives the **central tendency** — a weighted average of possible values, weighted by their probabilities.

### LOTUS (Law of the Unconscious Statistician)

The expected value of a function h(X) of an RV:

$$E[h(X)] = \begin{cases} \sum_x h(x) f(x) & \text{discrete} \\ \int_{\mathbb{R}} h(x) f(x)\, dx & \text{continuous} \end{cases}$$

### Conditional expectation

$$E[Y | X = x] = \begin{cases} \sum_y y \cdot f(y|x) & \text{discrete} \\ \int_{\mathbb{R}} y \cdot f(y|x)\, dy & \text{continuous} \end{cases}$$

**Double expectation theorem:** $E[E[Y|X]] = E[Y]$

---

<span class="at-kicker">Distribution Catalogue</span>

## Distribution catalogue

### Discrete distributions

| Distribution | Description | Use case |
| --- | --- | --- |
| **Bernoulli** | Two outcomes (success/failure), parameterised by p | Unfair coin toss; foundation of binary classification |
| **Binomial** | Sum of n independent Bernoulli trials | "How many successes in n trials?" |
| **Poisson** | Count of events in a fixed interval | Packets arriving at a router, customers at a store |
| **Geometric** | Number of failures before first success | "How many failures until a success?" |
| **Negative Binomial** | Number of failures until r successes | Generalised geometric distribution |

> [!note] Binomial vs. Hypergeometric
> If sampled items are *not replaced*, Binomial becomes **Hypergeometric** — the population size matters.

### Continuous distributions

| Distribution | Description | Use case |
| --- | --- | --- |
| **Normal (Gaussian)** | Bell curve; arises naturally via CLT | Most common; basis for many statistical tests |
| **Exponential** | Time until next event in Poisson process | Reliability engineering — "time until failure" |
| **Weibull** | Generalises exponential | Failure rates that change over time |
| **Gamma** | Time until next n events in Poisson process | Exponential, chi-squared, and Erlang are special cases |
| **Student's t** | Fatter tails than normal; accounts for small sample uncertainty | Basis of the t-test |
| **Chi-squared** | Sum of squares of normal values | Underlies chi-squared tests |
| **Log-Normal** | If ln(X) is normal, X is log-normal | Financial modelling, skewed natural data |
| **Beta** | Defined on [0, 1]; conjugate prior for Binomial | Modelling proportions; Bayesian inference |
| **Uniform** | All outcomes equally likely | Standard random sampling |

---

<span class="at-kicker">Normal Distribution</span>

### Normal (Gaussian) distribution

The most important distribution — arises naturally in many phenomena (CLT). Parameterised by μ and σ.

$$f(x) = \frac{e^{-\frac{(x-\mu)^2}{2\sigma^2}}}{\sigma\sqrt{2\pi}}$$

Standard normal: μ = 0, σ = 1.

> [!info] Why the normal distribution dominates
> The **Central Limit Theorem** states that averages of large samples from *any* distribution converge to normal. This is why Z-tests and many ML assumptions work.

### Student's t-distribution

Basis of the t-test; has **fatter tails** than normal (accounts for small sample uncertainty). Approaches normal as degrees of freedom → ∞.

> [!note] The "Student" story
> Named after William Sealy Gosset ("Student") who developed it at Guinness brewery to improve barley selection. Guinness considered statistical methods a trade secret, hence the pseudonym.

---

<span class="at-kicker">Scipy Cheat-Sheet</span>

## Scipy cheat-sheet

| Task | Function |
| --- | --- |
| PDF / PMF | `norm.pdf(x, loc=μ, scale=σ)` / `binom.pmf(k, n=10, p=0.5)` |
| CDF | `norm.cdf(x)` |
| Survival function (1-CDF) | `norm.sf(z_score)` — gives p-value for one-tailed Z-test |
| Random samples | `norm.rvs(size=1000, loc=0, scale=1)` |

> [!tip] Reproducibility
> Keep `random_state` fixed in experiments for reproducibility. The exact sequence of random numbers should not affect your conclusions.

## Interesting facts

- The **Normal distribution** appears so often because of the **Central Limit Theorem**: averages of large samples from *any* distribution converge to normal.
- Over 100 years ago, Gosset published the t-distribution under the pen name "Student" — Guinness did not want competitors to know they used statistics.
- The **Beta distribution** is called the "conjugate prior" because it stays in the same family when updated with Binomial data — making Bayesian updates analytically tractable.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is the difference between PDF, PMF, and CDF?
2. When do you use Poisson vs. Binomial?
3. What makes the Normal distribution special?
4. What does LOTUS let you compute, and why is it useful?
5. How does the t-distribution differ from the normal, and when do you use it?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Inference
>> [[hypothesis-testing|Hypothesis Testing]], [[sampling|Sampling]]
>
>> [!card] Statistics
>> [[descriptive-statistics|Descriptive Statistics]], [[entropy-information-theory|Entropy & Information Theory]]
>
>> [!card] Simulation
>> [[monte-carlo-simulation|Monte Carlo Simulation]]
