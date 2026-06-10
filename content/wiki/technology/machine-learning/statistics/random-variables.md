---
title: Random Variables & Expected Value
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Random Variables
  - Expected Value
  - LOTUS
  - Law of the Unconscious Statistician
category: Science
tags:
  - Mathematics
  - Statistics
  - Probability
  - RandomVariables
  - ExpectedValue
banner: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "Probability does not exist."
> <cite>— Bruno de Finetti, subjectivist probability</cite>

---

<span class="at-kicker">Statistics · Probability Foundations</span>

# Random Variables & Expected Value

<p class="at-lead">
A random variable is the bridge between abstract probability spaces and the numerical data we
actually observe. It translates outcomes of random phenomena into numbers that we can sum,
average, and optimise. The expected value is the theoretical centre of gravity of a random
variable — the long-run average over infinitely many trials.
</p>

<span class="at-stat">discrete</span> &nbsp;·&nbsp; <span class="at-stat">continuous</span> &nbsp;·&nbsp; <span class="at-stat">expected value</span> &nbsp;·&nbsp; <span class="at-mark">uncertainty quantified</span>

<span class="at-kicker">Definition</span>

## What Is a Random Variable?

A **random variable** $X$ is a function that assigns a numerical value to each outcome of a
random experiment.

| Type | Description | Example |
|------|-------------|---------|
| **Discrete** | Takes finitely or countably many values | Number of heads in 10 coin flips: $\{0, 1, \dots, 10\}$ |
| **Continuous** | Takes uncountably many values in an interval | Height of a randomly chosen adult: $[140, 210]$ cm |

> [!info] Notation convention
> Uppercase $X$ denotes the random variable itself. Lowercase $x$ denotes a specific value it
> might take. The probability $P(X = x)$ is read as "the probability that random variable $X$
takes value $x$."

---

<span class="at-kicker">Probability Distributions</span>

## Describing a Random Variable

### Probability mass function (PMF) — discrete

$$f_X(x) = P(X = x)$$

Properties:
- $0 \leq f_X(x) \leq 1$
- $\sum_{x} f_X(x) = 1$

### Probability density function (PDF) — continuous

$$P(a \leq X \leq b) = \int_{a}^{b} f_X(x)\,dx$$

Properties:
- $f_X(x) \geq 0$ (can exceed 1)
- $\int_{-\infty}^{\infty} f_X(x)\,dx = 1$
- $P(X = x) = 0$ for any single point

### Cumulative distribution function (CDF)

$$F_X(x) = P(X \leq x)$$

For continuous variables: $f_X(x) = \frac{d}{dx}F_X(x)$.

> [!info] Probability integral transform
> If $X$ is continuous with CDF $F$, then $F(X) \sim \text{Uniform}(0, 1)$. This is the
> foundation of inverse transform sampling — generate $U \sim \text{Uniform}(0,1)$, then
> $X = F^{-1}(U)$ has the desired distribution.

---

<span class="at-kicker">Expected Value</span>

## The Theoretical Mean

The **expected value** $E[X]$ is the weighted average of all possible values, weighted by their
probabilities:

$$
E[X] =
\begin{cases}
    \displaystyle\sum_{x} x \cdot f_X(x), & \text{if discrete} \\[10pt]
    \displaystyle\int_{-\infty}^{\infty} x \cdot f_X(x)\,dx, & \text{if continuous}
\end{cases}
$$

### Linearity of expectation

For any random variables $X, Y$ and constants $a, b$:

$$E[aX + bY + c] = aE[X] + bE[Y] + c$$

> [!tip] Expectation of a sum
> The expected value of a sum is always the sum of expected values — regardless of whether
> $X$ and $Y$ are independent. This is remarkably powerful and often simplifies proofs.

### Law of the Unconscious Statistician (LOTUS)

To find the expected value of a function $h(X)$, you do not need to derive the distribution of
$h(X)$. Simply transform the values and integrate against the original PMF/PDF:

$$
E[h(X)] =
\begin{cases}
    \displaystyle\sum_{x} h(x) \cdot f_X(x), & \text{if discrete} \\[10pt]
    \displaystyle\int_{-\infty}^{\infty} h(x) \cdot f_X(x)\,dx, & \text{if continuous}
\end{cases}
$$

**Example**: If $X \sim \text{Uniform}(0, 1)$, then $E[X^2] = \int_0^1 x^2 \cdot 1\,dx = \frac{1}{3}$.

### Conditional expectation

$$E[Y \mid X = x] =
\begin{cases}
    \displaystyle\sum_{y} y \cdot f_{Y|X}(y \mid x), & \text{if discrete} \\[10pt]
    \displaystyle\int_{-\infty}^{\infty} y \cdot f_{Y|X}(y \mid x)\,dy, & \text{if continuous}
\end{cases}
$$

The **law of total expectation** (tower property): $E[E[Y \mid X]] = E[Y]$.

---

<span class="at-kicker">Variance & Moments</span>

## Beyond the Mean

### Variance

$$\text{Var}(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2$$

Measures the spread around the mean. Standard deviation: $\sigma = \sqrt{\text{Var}(X)}$.

### Higher moments

| Moment | Formula | Interpretation |
|--------|---------|----------------|
| $E[X]$ | First moment | Centre (mean) |
| $E[X^2]$ | Second raw moment | Used in variance |
| $E[(X-\mu)^3]$ | Third central moment | Skewness (asymmetry) |
| $E[(X-\mu)^4]$ | Fourth central moment | Kurtosis (tail heaviness) |

### Moment generating function

$$M_X(t) = E[e^{tX}]$$

If it exists in a neighbourhood of 0, all moments can be extracted by differentiation:
$E[X^n] = M_X^{(n)}(0)$.

---

<span class="at-kicker">Properties</span>

## Rules for Expected Value and Variance

| Rule | Formula | Condition |
|------|---------|-----------|
| Constant | $E[c] = c$ | Always |
| Scaling | $E[aX] = aE[X]$ | Always |
| Sum | $E[X + Y] = E[X] + E[Y]$ | Always |
| Product | $E[XY] = E[X]E[Y]$ | If $X \perp Y$ |
| Variance of sum | $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$ | If $X \perp Y$ |
| Variance of linear | $\text{Var}(aX + b) = a^2\text{Var}(X)$ | Always |

> [!warning] Independence matters
> $E[XY] = E[X]E[Y]$ only when $X$ and $Y$ are independent. In general,
$E[XY] = E[X]E[Y] + \text{Cov}(X, Y)$. The same caveat applies to variance of sums.

---

<span class="at-kicker">Applications</span>

## Random Variables in Machine Learning

| Application | Random variable role |
|-------------|---------------------|
| **Loss functions** | $L$ is a random variable (depends on random sample). $E[L]$ is the true risk. |
| **Mini-batch gradient** | Gradient estimate is a random variable; its expectation equals the true gradient. |
| **Dropout** | Random mask $M$ with $E[M] = p$; ensures expected output scales correctly. |
| **Data augmentation** | Transformed image is a random variable; $E[\text{loss}]$ over augmentations smooths the loss landscape. |
| **Bayesian neural networks** | Weights are random variables with posterior distributions, not point estimates. |
| **Reinforcement learning** | Return $G_t$ is a random variable; the agent maximises $E[G_t]$. |

## Interesting facts

- The term "random variable" is a mistranslation of the German *Zufallsvariable*. A better
  name might be "random quantity" — it is neither random (it is a deterministic function on
  the sample space) nor a variable in the algebraic sense.
- The St. Petersburg paradox — a game with infinite expected value — challenged early
  probabilists to refine the concept of utility, not just expectation.
- In deep learning, the "expected gradient" over mini-batches is what SGD converges to;
  the variance of that gradient determines the learning rate schedule.

## Interview questions

1. What is the difference between a random variable and a probability distribution?
2. State and explain LOTUS. Why is it useful?
3. Prove that $\text{Var}(X) = E[X^2] - (E[X])^2$.
4. Does $E[XY] = E[X]E[Y]$ always hold? If not, what condition is required?
5. Explain the law of total expectation in words.
6. If $X \sim \text{Uniform}(0, 1)$, what is $E[e^X]$? Use LOTUS.

## Related pages

> [!grid]
>
>> [!card] Probability Foundations
>> [[probability-distributions|Probability Distributions]] · [[law-of-large-numbers|Law of Large Numbers]] · [[central-limit-theorem|Central Limit Theorem]]
>
>> [!card] Statistics
>> [[confidence-intervals|Confidence Intervals]] · [[hypothesis-testing|Hypothesis Testing]] · [[sampling|Sampling]]
>
>> [!card] Calculus & Series
>> [[../../science/mathematics/calculus|Calculus]] · [[../../science/mathematics/series|Series & Sequences]] · [[../../science/mathematics/combinatorics|Combinatorics]]
>
>> [!card] ML Foundations
>> [[../../technology/machine-learning/statistics/statistics|Statistics (ML)]] · [[../../technology/machine-learning/statistics/entropy-information-theory|Entropy & Information Theory]]
