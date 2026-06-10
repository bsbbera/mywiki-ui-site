---
title: Monte Carlo Simulation
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Monte Carlo Simulation
  - Monte Carlo Methods
  - Gibbs Sampling
  - MCMC
category: Statistics
tags:
  - Statistics
  - Simulation
  - MachineLearning
  - DataScience
banner: https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Anyone who considers arithmetical methods of producing random digits is, of course, in a state of sin."
> <cite>— John von Neumann</cite>

---

<span class="at-kicker">Statistics · Simulation Methods</span>

# Monte Carlo Simulation

<p class="at-lead">
Monte Carlo simulation runs a simulator repeatedly with randomised inputs and aggregates the results to approximate quantities that are otherwise difficult or impossible to compute analytically. It is a class of approach — not a single algorithm — rooted in the Law of Large Numbers.
</p>

<span class="at-stat">random sampling</span> &nbsp;·&nbsp; <span class="at-stat">LLN convergence</span> &nbsp;·&nbsp; <span class="at-stat">MCMC · Gibbs</span> &nbsp;·&nbsp; <span class="at-mark">the more samples, the more accurate the approximation</span>

> [!info] Why Monte Carlo matters
> Despite unprecedented access to information, future predictions remain hard because of constant uncertainty, ambiguity, and variability. Monte Carlo quantifies that uncertainty.

**Core principle — Law of Large Numbers:** the more times a function is randomly sampled, the more accurate the approximation.

<span class="at-kicker">Sampling Strategies</span>

## Sampling strategies

> [!grid|cols3]
>
>> [!card|section]
>> ###### DIRECT SAMPLING
>> ### *Direct* Sampling
>> Sample from a distribution naively with no prior information. Useful for approximating the unknown area of a shape, estimating π, or computing integrals.
>
>> [!card|section]
>> ###### IMPORTANCE SAMPLING
>> ### *Importance* Sampling
>> The distribution is expensive to sample — instead, sample from a simpler approximation function and reweight. More efficient than direct sampling for rare events.
>
>> [!card|section]
>> ###### REJECTION SAMPLING
>> ### *Rejection* Sampling
>> The distribution is unknown — propose candidate points and accept them if they meet some criterion. Flexible but can be inefficient in high dimensions.

| Strategy | When to use |
| --- | --- |
| **Direct sampling** | Sample from a distribution naively with no prior information. Useful for approximating the unknown area of a shape. |
| **Importance sampling** | The distribution is expensive to sample; instead, sample from a simpler approximation function. |
| **Rejection sampling** | The distribution is unknown; propose candidate points and accept them if they meet some criterion. |

> [!tip] Estimating π with Monte Carlo
> Sample random points in a unit square. The fraction falling inside the unit circle (distance ≤ 1 from origin) approximates π/4. With enough samples, this converges to the true value.

---

<span class="at-kicker">Main Applications</span>

## Two main applications

### 1. Optimisation

Finding the optimum requires balancing exploration and exploitation. When Monte Carlo sampling is combined with a control mechanism (e.g., simulated annealing, MCTS), it is a powerful tool for finding optima in complex search spaces.

### 2. Approximating probabilities and functions

Monte Carlo is the go-to method when a probability or integral is too difficult to evaluate analytically. Classic example: estimating π by sampling random points in a unit square and checking if they fall inside the unit circle.

---

<span class="at-kicker">Gibbs Sampling & MCMC</span>

## Gibbs Sampling

**Gibbs sampling** is a specific Markov Chain Monte Carlo (MCMC) algorithm. It successively samples conditional distributions of variables, and the distribution of states converges to the true joint distribution in the long run.

> [!info] Prerequisites
> Requires a strong understanding of **Markov Chain Monte Carlo** and **Bayes' theorem**.

### Use in Latent Dirichlet Allocation (LDA)

In [[../nlp/latent-dirichlet-allocation|LDA]], Gibbs sampling optimises the θ (document–topic) and φ (topic–word) matrices:

1. Change the matrices word-by-word by updating the topic assignment of one word at a time.
2. Accept each change if it increases the likelihood of the observed data.
3. Iterate until convergence.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is the core idea behind Monte Carlo simulation?
2. What is the difference between direct sampling, importance sampling, and rejection sampling?
3. Why is Gibbs sampling categorised as an MCMC method?
4. How would you use Monte Carlo to estimate π?
5. When is Monte Carlo preferred over analytical methods?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Statistics
>> [[probability-distributions|Probability Distributions]], [[sampling|Sampling]]
>
>> [!card] NLP
>> [[../nlp/latent-dirichlet-allocation|LDA (Topic Modelling)]]
>
>> [!card] Foundations
>> [[mathematical-foundations-for-ml|Mathematical Foundations]]
