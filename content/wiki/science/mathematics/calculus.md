---
title: Calculus
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Calculus
  - Differential Calculus
  - Integral Calculus
  - Euler's Number
category: Science
tags:
  - Mathematics
  - Calculus
  - MLFoundations
  - Optimization
banner: https://images.unsplash.com/photo-1635070041078-ea7ef83fbc68?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "Calculus is the most powerful weapon of thought yet devised by the wit of man."
> <cite>— Wallace B. Smith</cite>

---

<span class="at-kicker">Mathematics · Foundations</span>

# Calculus

<p class="at-lead">
Calculus is the mathematics of change. It provides the language and tools for understanding
rates of change (derivatives) and accumulated quantities (integrals). In machine learning,
calculus powers gradient descent, backpropagation, probability densities, and optimisation —
making it the single most important mathematical foundation for the field.
</p>

<span class="at-stat">derivatives</span> &nbsp;·&nbsp; <span class="at-stat">integrals</span> &nbsp;·&nbsp; <span class="at-stat">limits</span> &nbsp;·&nbsp; <span class="at-mark">the mathematics of change</span>

<span class="at-kicker">Derivatives</span>

## The Rate of Change

The **derivative** measures how a function changes as its input changes. Geometrically, it is
the slope of the tangent line at a point.

$$f'(x) = \frac{d}{dx}f(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

### Essential derivative rules

| Rule | Formula | Example |
|------|---------|---------|
| **Constant** | $\frac{d}{dx}[c] = 0$ | $\frac{d}{dx}[5] = 0$ |
| **Power** | $\frac{d}{dx}[x^n] = nx^{n-1}$ | $\frac{d}{dx}[x^3] = 3x^2$ |
| **Exponential** | $\frac{d}{dx}[e^x] = e^x$ | $\frac{d}{dx}[e^{2x}] = 2e^{2x}$ |
| **Logarithm** | $\frac{d}{dx}[\ln x] = \frac{1}{x}$ | $\frac{d}{dx}[\ln(x^2)] = \frac{2}{x}$ |
| **Trigonometric** | $\frac{d}{dx}[\sin x] = \cos x$ | $\frac{d}{dx}[\cos x] = -\sin x$ |
| **Chain rule** | $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$ | $\frac{d}{dx}[\sin(x^2)] = 2x\cos(x^2)$ |
| **Product rule** | $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$ | $\frac{d}{dx}[x \cdot e^x] = e^x(1+x)$ |
| **Quotient rule** | $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'g - fg'}{g^2}$ | $\frac{d}{dx}\left[\frac{x}{e^x}\right] = \frac{1-x}{e^x}$ |

> [!tip] Chain rule in ML
> Backpropagation is nothing more than the chain rule applied repeatedly through a computation
> graph. If $L = f(g(h(x)))$, then $\frac{\partial L}{\partial x} = \frac{\partial L}{\partial f} \cdot \frac{\partial f}{\partial g} \cdot \frac{\partial g}{\partial h} \cdot \frac{\partial h}{\partial x}$.

### L'Hôpital's rule

When evaluating limits of indeterminate forms ($\frac{0}{0}$ or $\frac{\infty}{\infty}$):

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

Repeatedly differentiate numerator and denominator until the indeterminacy resolves.

---

<span class="at-kicker">Integrals</span>

## Accumulation & Area

The **integral** accumulates infinitely many infinitesimal quantities — geometrically, the area
under a curve.

### Definite integral (Riemann)

$$\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i) \Delta x$$

Where $\Delta x = \frac{b-a}{n}$ and $x_i = a + i\Delta x$.

### Fundamental theorem of calculus

$$\int_a^b f(x)\,dx = F(b) - F(a), \quad \text{where } F'(x) = f(x)$$

The definite integral equals the antiderivative evaluated at the bounds.

### Common integrals

| Function | Integral |
|----------|----------|
| $x^n$ | $\frac{x^{n+1}}{n+1} + C$ ($n \neq -1$) |
| $\frac{1}{x}$ | $\ln|x| + C$ |
| $e^x$ | $e^x + C$ |
| $e^{ax}$ | $\frac{1}{a}e^{ax} + C$ |
| $\cos x$ | $\sin x + C$ |
| $\frac{1}{1+x^2}$ | $\arctan x + C$ |
| $\ln x$ | $x(\ln x - 1) + C$ |

### Integration by parts

$$\int f(x)g'(x)\,dx = f(x)g(x) - \int f'(x)g(x)\,dx$$

Derived from the product rule for differentiation, reversed.

### Substitution rule

$$\int f(g(x))g'(x)\,dx = \int f(u)\,du, \quad \text{where } u = g(x)$$

> [!info] Integration by parts in probability
> Expected values $E[X] = \int x \cdot f(x)\,dx$ are computed directly via integration.
> Integration by parts is how we derive $E[X]$ for distributions like the exponential.

---

<span class="at-kicker">Euler's Number</span>

## The Constant $e$

**Euler's number** $e \approx 2.71828$ is the base of the natural logarithm and the unique number
where the exponential function equals its own derivative:

$$\frac{d}{dx}[e^x] = e^x$$

### Definitions

| Form | Expression |
|------|------------|
| **Limit** | $e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n$ |
| **Series** | $e = \sum_{n=0}^{\infty} \frac{1}{n!} = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \cdots$ |
| **Integral** | $\int_1^e \frac{1}{x}\,dx = 1$ |

### Why $e$ dominates ML

| Property | Role in ML |
|----------|-----------|
| $\frac{d}{dx}e^x = e^x$ | Simplifies gradients in neural networks |
| $e^{i\theta} = \cos\theta + i\sin\theta$ | Underlies Fourier transforms and signal processing |
| Exponential family | Generalises normal, Poisson, Bernoulli distributions |
| Softmax | $p_i = \frac{e^{z_i}}{\sum_j e^{z_j}}$ — numerically stable probability distribution |

> [!info] $e$ is irrational
> The proof by Fourier (1815) shows that assuming $e = P/Q$ leads to the contradiction
> $\text{Integer} = \text{Integer} + \text{Non-integer}$. Hence $e$ cannot be rational.

---

<span class="at-kicker">Exponential Growth & Decay</span>

## Modelling Change Over Time

### Growth

$$y(t) = A_0 e^{kt}, \quad k > 0$$

Where $A_0$ is the initial value, $k$ is the growth rate, and $t$ is time.

**Examples**: Population growth, compound interest, viral spread, gradient explosion in RNNs.

### Decay

$$y(t) = A_0 e^{-kt}, \quad k > 0$$

**Examples**: Radioactive decay, learning rate schedules, forgetting curves, weight decay
(L2 regularisation).

> [!example] Half-life
> The half-life $t_{1/2}$ is the time for a quantity to halve:
> $$t_{1/2} = \frac{\ln 2}{k} \approx \frac{0.693}{k}$$

---

<span class="at-kicker">Numerical Methods</span>

## Solving Equations Without Closed Forms

### Newton's method

Iteratively approximate roots of $g(x) = 0$:

$$x_{n+1} = x_n - \frac{g(x_n)}{g'(x_n)}$$

Quadratic convergence near a root — each step roughly doubles correct digits.

> [!warning] Newton's method pitfalls
> Requires the derivative, may diverge if the initial guess is poor, and fails at inflection points
> where $g'(x) = 0$. Always validate convergence.

### Bisection method

Guaranteed but slow: repeatedly halve an interval $[a, b]$ where $g(a)$ and $g(b)$ have
opposite signs. Linear convergence — safe but slower than Newton.

---

<span class="at-kicker">Deterministic vs. Stochastic</span>

## Two Worldviews

| | Deterministic | Stochastic |
|---|---------------|------------|
| **Definition** | Outcome fully determined by initial conditions | Randomness inherent in the process |
| **Example** | Newton's laws of motion | Brownian motion, radioactive decay |
| **ML model** | Gradient descent (fixed seed) | SGD, dropout, data augmentation |
| **Equation** | $x_{t+1} = f(x_t)$ | $x_{t+1} = f(x_t) + \epsilon$, $\epsilon \sim \mathcal{N}(0, \sigma^2)$ |

> [!info] Exponential random variates
> To sample from an exponential distribution with rate $\lambda$:
> $$X = -\frac{1}{\lambda}\ln(U), \quad U \sim \text{Uniform}(0, 1)$$
> This is the inverse transform method — fundamental to Monte Carlo simulation.

## Interview questions

1. What is the geometric interpretation of a derivative? Of a definite integral?
2. Explain the chain rule and why it is essential for backpropagation.
3. When would you prefer Newton's method over bisection? When would bisection be safer?
4. Why is $e$ the natural base for logarithms and exponentials in mathematics and ML?
5. Derive the half-life formula from the exponential decay equation.
6. How does L'Hôpital's rule resolve indeterminate limits? Give an example.

## Related pages

> [!grid]
>
>> [!card] Series & Sequences
>> [[series|Series & Sequences]] · [[combinatorics|Combinatorics]]
>
>> [!card] Probability & Statistics
>> [[probability-distributions|Probability Distributions]] · [[random-variables|Random Variables]] · [[../statistics/expected-value|Expected Value]]
>
>> [!card] ML Foundations
>> [[../../technology/machine-learning/statistics/vector-norms|Vector Norms]] · [[../../technology/machine-learning/ml-fundamentals/feature-engineering|Feature Engineering]] · [[../../technology/machine-learning/deep-learning/optimisation-algorithms|Optimisation Algorithms]]
>
>> [!card] Numerical Computing
>> [[monte-carlo-simulation|Monte Carlo Simulation]] · [[../../technology/machine-learning/deep-learning/gradient-descent|Gradient Descent]]
