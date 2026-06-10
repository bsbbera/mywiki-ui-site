---
title: Mathematical Foundations for ML
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Mathematical Foundations
  - Calculus for ML
  - Calculus
  - Derivatives
  - Integrals
  - Taylor Series
  - Euler's Number
category: Statistics
tags:
  - Statistics
  - Mathematics
  - MachineLearning
  - Calculus
banner: https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding."
> <cite>— William Paul Thurston</cite>

---

<span class="at-kicker">Mathematics · ML Foundations</span>

# Mathematical Foundations for ML

<p class="at-lead">
Machine learning relies on calculus for gradient-based optimisation, linear algebra for vector operations, and combinatorics for probability. This page consolidates the key formulae used throughout the ML pipeline — from backpropagation to Bayesian inference.
</p>

<span class="at-stat">calculus · derivatives · integrals</span> &nbsp;·&nbsp; <span class="at-stat">Taylor series</span> &nbsp;·&nbsp; <span class="at-stat">combinatorics</span> &nbsp;·&nbsp; <span class="at-mark">the chain rule is the foundation of backpropagation</span>

<span class="at-kicker">Euler's Number</span>

## Euler's Number — *e*

Euler's constant (e ≈ 2.71828…) is irrational and transcendental. It appears in probability distributions, compound interest, and neural network activation functions.

$$e = \sum_{n=0}^{\infty} \frac{1}{n!} = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \cdots$$

*e* can also be defined as: the area under the curve y = 1/x from x = 1 to x = e equals exactly 1 square unit.

**Bounds:** $2 < e < 3$ (proven by Fourier via comparison with a geometric series).

### Exponential growth and decay

$$y = A_0 \, e^{kt} \quad \text{(growth, } k > 0 \text{)}$$
$$y = A_0 \, e^{-kt} \quad \text{(decay, } k > 0 \text{)}$$

Where A₀ is the initial value, k is the rate constant, and t is time.

> [!tip] Exponential smoothing
> **Exponential smoothing (ETS)** forecasts using a weighted mean of past values, with more recent values weighted more heavily — a discrete application of exponential decay.

---

<span class="at-kicker">Derivatives</span>

## Calculus — Derivatives

The derivative measures the instantaneous rate of change of a function:

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

### Key derivative rules

| Function | Derivative |
| --- | --- |
| $k^x$ | $xk$ |
| $e^x$ | $e^x$ |
| $e^{ax}$ | $a e^{ax}$ |
| $\sin(x)$ | $\cos(x)$ |
| $\cos(x)$ | $-\sin(x)$ |
| $\ln(x)$ | $1/x$ |
| $\arctan(x)$ | $\frac{1}{1+x^2}$ |
| $a^x$ | $a^x \ln(a)$ |

### Combination rules

$$[af(x) + b]' = af'(x)$$
$$[f(x) + g(x)]' = f'(x) + g'(x)$$

**Product rule:** $[f(x)g(x)]' = f(x)g'(x) + f'(x)g(x)$

**Quotient rule:** $\left[\dfrac{f(x)}{g(x)}\right]' = \dfrac{f(x)g'(x) - f'(x)g(x)}{g^2(x)}$

**Chain rule:** $[f(g(x))]' = f'(g(x)) \cdot g'(x)$

> [!info] Chain rule in ML
> The chain rule is the foundation of **backpropagation** in neural networks — it lets us compute gradients through layers of composed functions.

### L'Hôpital's Rule

For indeterminate forms 0/0 or ∞/∞:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

### Root-finding methods

| Method | Description |
| --- | --- |
| **Trial and error** | Brute-force search |
| **Bisection method** | Start between two points, narrow using deductive reasoning |
| **Newton's method** | Iterative: $x_{i+1} = x_i - \dfrac{g(x)}{g'(x)}$ |

---

<span class="at-kicker">Integrals</span>

## Calculus — Integrals

The integral computes the area under a curve:

### Key integral formulae

| Integrand | Result |
| --- | --- |
| $x^k\, dx$ | $\dfrac{x^{k+1}}{k+1} + C,\; k \neq -1$ |
| $\dfrac{dx}{x}$ | $\ln|x| + C$ |
| $e^x\, dx$ | $e^x + C$ |
| $e^{ax}\, dx$ | $\dfrac{e^{ax}}{a} + C$ |
| $\cos(x)\, dx$ | $\sin(x) + C$ |
| $\dfrac{dx}{1+x^2}$ | $\arctan(x) + C$ |
| $\ln(x)\, dx$ | $x(\ln x - 1) + C$ |

### Properties

$$\int_a^a f(x)\,dx = 0$$
$$\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$$
$$\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$$

**Integration by parts:** $\int f(x)g(x)\,dx = f(x)\int g(x)\,dx - \int\!\left(f'(x)\int g(x)\,dx\right)dx$

**Substitution:** $\int f(g(x))g'(x)\,dx = \int f(u)\,du$

### Riemann Sum (numerical integration)

$$\int_a^b f(x)\,dx \approx \frac{b-a}{n} \sum_{i=1}^n f\!\left(a + \frac{i(b-a)}{n}\right)$$

---

<span class="at-kicker">Logarithms & Identities</span>

## Logarithm rules

$$\log_b(xy) = \log_b x + \log_b y$$
$$\log_b\!\left(\frac{x}{y}\right) = \log_b x - \log_b y$$
$$\log_b(x^r) = r \log_b x$$
$$\log_b(x) = \frac{\log_a x}{\log_a b}$$

## Expectation and variance identities

$$E[aX + b] = aE[X] + b$$
$$E[aX + bY] = aE[X] + bE[Y]$$
$$E[XY] = E[X]E[Y] + \text{Cov}(X,Y)$$
$$\text{Var}(X) = E[X^2] - E[X]^2$$
$$\text{Var}(aX \pm bY) = a^2\text{Var}(X) + b^2\text{Var}(Y) \pm 2ab\,\text{Cov}(X,Y)$$
$$\text{Cov}(X,Y) = E[(X-E[X])(Y-E[Y])] = E[XY] - E[X]E[Y]$$

---

<span class="at-kicker">Series & Taylor</span>

## Series formulae

$$\sum_{k=1}^n k = \frac{n(n+1)}{2}$$
$$\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}$$
$$\sum_{k=0}^{\infty} p^k = \frac{1}{1-p}, \quad -1 < p < 1$$

### Taylor series

Expansion of f(x) around point a:

$$f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(a)(x-a)^k}{k!}$$

**Maclaurin series** (Taylor around a = 0):

$$e^x = \sum_{k=0}^{\infty} \frac{x^k}{k!}, \quad \sin(x) = \sum_{k=0}^{\infty} \frac{(-1)^k x^{2k+1}}{(2k+1)!}, \quad \cos(x) = \sum_{k=0}^{\infty} \frac{(-1)^k x^{2k}}{(2k)!}$$

> [!info] Taylor series in ML
> Taylor expansions are used to approximate functions locally — for example, in optimisation algorithms that use second-order information (Hessian approximations).

---

<span class="at-kicker">Combinatorics</span>

## Permutations and combinations

**Permutation** — ordered selection (order matters):

$$nPr = \frac{n!}{(n-r)!}$$

**Combination** — unordered selection (order does not matter):

$$nCr = \frac{n!}{(n-r)!\, r!}$$

## Deterministic vs. stochastic processes

| Type | Description |
| --- | --- |
| **Deterministic** | Outcomes fully determined from initial conditions |
| **Stochastic** | Certain outcomes happen randomly; modelled with probability |

**Exponential random variate:**

$$X = -\frac{1}{\lambda} \ln(U), \quad U \sim \text{Uniform}(0,1)$$

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is Newton's method, and when does it converge?
2. Explain the chain rule and give an ML example (backpropagation).
3. What is the Maclaurin series for e^x, and why does it matter in ML?
4. What is the difference between permutation and combination?
5. Why does e appear so often in probability and statistics?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Statistics
>> [[probability-distributions|Probability Distributions]], [[descriptive-statistics|Descriptive Statistics]], [[entropy-information-theory|Entropy & Information Theory]]
>
>> [!card] Deep Learning
>> [[../deep-learning/gradient-descent|Gradient Descent]], [[../deep-learning/optimisation-algorithms|Optimisation Algorithms]]
>
>> [!card] Regularisation
>> [[vector-norms|Vector Norms]], [[../ml-algorithms/ridge-lasso-elastic-net|Ridge, Lasso & Elastic Net]]
