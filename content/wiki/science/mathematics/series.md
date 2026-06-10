---
title: Series & Sequences
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Series
  - Sequences
  - Taylor Series
  - Maclaurin Series
  - Geometric Series
category: Science
tags:
  - Mathematics
  - Series
  - Approximation
  - MLFoundations
banner: https://images.unsplash.com/photo-1509228468-0320624748d7?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "In the end, everything is a series."
> <cite>— Applied mathematician's motto</cite>

---

<span class="at-kicker">Mathematics · Approximation</span>

# Series & Sequences

<p class="at-lead">
Series and sequences are the backbone of approximation in mathematics. From computing
probabilities and evaluating functions to understanding the convergence of optimisation
algorithms, series provide a way to represent complex objects as sums of simpler ones.
Taylor and Maclaurin series, in particular, let us approximate any smooth function with a
polynomial — a technique exploited in neural network activation functions, physics engines,
and numerical libraries.
</p>

<span class="at-stat">summation</span> &nbsp;·&nbsp; <span class="at-stat">convergence</span> &nbsp;·&nbsp; <span class="at-stat">polynomial approximation</span> &nbsp;·&nbsp; <span class="at-mark">infinity made finite</span>

<span class="at-kicker">Finite Summations</span>

## Closed-Form Formulae

| Series | Formula | Derivation hint |
|--------|---------|-----------------|
| **Arithmetic** | $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$ | Pair first + last = second + second-last = … |
| **Squares** | $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$ | Telescoping $(k+1)^3 - k^3$ |
| **Cubes** | $\sum_{k=1}^{n} k^3 = \left[\frac{n(n+1)}{2}\right]^2$ | Sum of cubes = square of sum |
| **Geometric** | $\sum_{k=0}^{n} r^k = \frac{1-r^{n+1}}{1-r}$ | Multiply by $r$, subtract from original |
| **Infinite geometric** | $\sum_{k=0}^{\infty} r^k = \frac{1}{1-r}, \quad |r| < 1$ | Let $n \to \infty$; $r^{n+1} \to 0$ |

> [!example] Gauss's childhood trick
> The 10-year-old Gauss was asked to sum $1 + 2 + \dots + 100$. He paired $1+100$, $2+99$,
> …, $50+51$, giving $50 \times 101 = 5050$. The general formula $\frac{n(n+1)}{2}$ follows.

---

<span class="at-kicker">Taylor Series</span>

## Approximating Functions with Polynomials

The **Taylor series** of a function $f(x)$ about a point $a$ expresses $f$ as an infinite sum of
terms computed from its derivatives at $a$:

$$f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(a)}{k!}(x-a)^k$$

$$= f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \cdots$$

### Why Taylor series matter

| Application | How Taylor series helps |
|-------------|------------------------|
| **Numerical computing** | Hardware computes $\sin$, $\exp$, $\ln$ via truncated series |
| **Physics** | Small-angle approximation $\sin\theta \approx \theta$ |
| **ML loss functions** | Second-order Taylor expansion → Newton's method |
| **Control theory** | Linearisation of non-linear dynamics around equilibrium |
| **Error analysis** | Truncation error bounded by the first omitted term |

### Convergence

A Taylor series converges to $f(x)$ within its **radius of convergence** $R$:

$$|x - a| < R$$

Outside this radius, the series may diverge or converge to a different value.

> [!warning] Not all smooth functions are analytic
> The Taylor series of $f(x) = e^{-1/x^2}$ (with $f(0)=0$) is identically zero at $x=0$,
> yet the function is not zero elsewhere. It is infinitely differentiable but not **analytic**.

---

<span class="at-kicker">Maclaurin Series</span>

## Taylor at Zero

A **Maclaurin series** is simply a Taylor series expanded around $a = 0$:

$$f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(0)}{k!}x^k$$

### Common Maclaurin expansions

| Function | Series | Radius of convergence |
|----------|--------|----------------------|
| $e^x$ | $\sum_{k=0}^{\infty} \frac{x^k}{k!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$ | $\infty$ |
| $\sin x$ | $\sum_{k=0}^{\infty} \frac{(-1)^k x^{2k+1}}{(2k+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$ | $\infty$ |
| $\cos x$ | $\sum_{k=0}^{\infty} \frac{(-1)^k x^{2k}}{(2k)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$ | $\infty$ |
| $\ln(1+x)$ | $\sum_{k=1}^{\infty} \frac{(-1)^{k+1} x^k}{k} = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$ | $-1 < x \leq 1$ |
| $\frac{1}{1-x}$ | $\sum_{k=0}^{\infty} x^k = 1 + x + x^2 + x^3 + \cdots$ | $|x| < 1$ |
| $\arctan x$ | $\sum_{k=0}^{\infty} \frac{(-1)^k x^{2k+1}}{2k+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots$ | $|x| \leq 1$ |

> [!info] Euler's identity from series
> Substituting $x = i\theta$ into the $e^x$ series:
> $$e^{i\theta} = \cos\theta + i\sin\theta$$
> At $\theta = \pi$: $e^{i\pi} + 1 = 0$ — the "most beautiful equation in mathematics."

---

<span class="at-kicker">ML Applications</span>

## Where Series Appear in Machine Learning

### Activation function approximations

| Function | Approximation | Use case |
|----------|--------------|----------|
| $\sigma(x) \approx \frac{1}{2} + \frac{x}{4}$ | Linear around 0 | Low-precision hardware |
| $\tanh(x) \approx x - \frac{x^3}{3}$ | Cubic | Polynomial kernel analogues |
| $\text{softmax}(z)_i$ | Log-sum-exp trick via series | Numerical stability |

### Second-order optimisation

The loss function $L(\theta)$ near a minimum can be approximated:

$$L(\theta + \Delta\theta) \approx L(\theta) + \nabla L(\theta)^T \Delta\theta + \frac{1}{2}\Delta\theta^T H(\theta) \Delta\theta$$

Where $H$ is the Hessian matrix of second derivatives. This is the Taylor expansion that
motivates Newton's method and natural gradient descent.

### Entropy and information theory

The entropy series expansion connects to KL divergence and cross-entropy losses:

$$-\ln(1-x) = x + \frac{x^2}{2} + \frac{x^3}{3} + \cdots, \quad |x| < 1$$

### Kernel methods

The **polynomial kernel** $K(x, y) = (x^T y + c)^d$ is a finite series expansion of the inner
product in a high-dimensional feature space.

---

<span class="at-kicker">Convergence Tests</span>

## Does the Series Converge?

| Test | Condition | Conclusion |
|------|-----------|------------|
| **$n$-th term** | $\lim a_n \neq 0$ | Diverges |
| **Ratio** | $\lim |a_{n+1}/a_n| = L < 1$ | Converges absolutely |
| **Root** | $\lim \sqrt[n]{|a_n|} = L < 1$ | Converges absolutely |
| **Comparison** | $0 \leq a_n \leq b_n$ and $\sum b_n$ converges | $\sum a_n$ converges |
| **Integral** | $f(n) = a_n$, $f$ positive decreasing | $\sum a_n$ and $\int f(x)\,dx$ share fate |
| **Alternating** | $a_n$ decreasing, $\lim a_n = 0$ | Converges (conditionally) |

> [!tip] Practical rule for ML
> In ML we rarely need rigorous convergence proofs — we need truncation bounds. The Lagrange
> remainder $R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$ tells us how many terms to keep
> for a desired accuracy.

## Interesting facts

- The Taylor series was formally introduced by Brook Taylor in 1715, though special cases
  were known to Indian mathematicians (Madhava series for $\pi$) in the 14th century.
- Modern CPUs compute transcendental functions ($\sin$, $\cos$, $\exp$) using hardware-implemented
  polynomial approximations — essentially truncated Taylor or Chebyshev series.
- The softmax function's numerical stability trick $\text{softmax}(z)_i = \frac{e^{z_i - \max(z)}}{\sum_j e^{z_j - \max(z)}}$
  prevents overflow by exploiting the multiplicative property of exponentials.

## Interview questions

1. Derive the Taylor series for $e^x$ around $x = 0$. What is its radius of convergence?
2. Explain the difference between Taylor and Maclaurin series.
3. How would you use a Taylor series to approximate $\sqrt{1.02}$ without a calculator?
4. Why do some smooth functions fail to equal their Taylor series? Give an example.
5. In Newton's method, the update rule $x_{n+1} = x_n - f(x_n)/f'(x_n)$ comes from a first-order
   Taylor approximation. Explain.
6. What is the sum of the infinite geometric series $\sum_{k=0}^{\infty} \frac{1}{2^k}$?

## Related pages

> [!grid]
>
>> [!card] Calculus
>> [[calculus|Calculus]] · [[combinatorics|Combinatorics]]
>
>> [!card] Probability & Statistics
>> [[../statistics/probability-distributions|Probability Distributions]] · [[../statistics/random-variables|Random Variables]]
>
>> [!card] ML Foundations
>> [[../../technology/machine-learning/deep-learning/optimisation-algorithms|Optimisation Algorithms]] · [[../../technology/machine-learning/deep-learning/neural-networks|Neural Networks]]
>
>> [!card] Numerical Methods
>> [[../../technology/machine-learning/statistics/monte-carlo-simulation|Monte Carlo Simulation]] · [[calculus|Calculus (Newton's Method)]]
>
>> [!card] Paradoxes
>> [[../../paradoxes/mathematical-paradoxes|Zeno's Paradoxes]] — motion via infinite geometric series
