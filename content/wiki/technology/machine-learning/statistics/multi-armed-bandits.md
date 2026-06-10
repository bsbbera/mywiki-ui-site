---
title: Multi-Armed Bandits
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Multi-Armed Bandits
  - MAB
  - Thompson Sampling
  - Epsilon-Greedy
  - Upper Confidence Bound
  - Contextual Bandits
category: Statistics
tags:
  - Statistics
  - Bandits
  - ABTesting
  - ReinforcementLearning
  - Optimization
banner: https://images.unsplash.com/photo-1518133910546-b6c2792dda6f?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "The exploration-exploitation dilemma is the challenge of choosing between gathering more information and using what you already know."

---

<span class="at-kicker">Statistics · Online Learning</span>

# Multi-Armed Bandits

<p class="at-lead">
Multi-Armed Bandits (MAB) is a form of A/B testing that uses machine learning to dynamically allocate traffic toward better-performing variations. Unlike traditional A/B tests that fix allocations, MAB continuously learns and shifts traffic to maximize cumulative reward — the core concept is dynamic traffic allocation balancing exploration (learning) against exploitation (reward).
</p>

<span class="at-stat">explore</span> &nbsp;·&nbsp; <span class="at-stat">exploit</span> &nbsp;·&nbsp; <span class="at-stat">dynamic</span> allocation &nbsp;·&nbsp; <span class="at-mark">A/B testing that learns as it runs</span>

<span class="at-kicker">Core Concept</span>

## MAB vs A/B Testing

| Aspect | A/B Testing | Multi-Armed Bandits |
|--------|-------------|---------------------|
| **Traffic allocation** | Fixed (50/50 or preset splits) | Dynamic (shifts toward winners) |
| **Objective** | Identify best variant | Maximize conversions during test |
| **Statistical power** | High (fixed sample size) | Lower (continuous adaptation) |
| **Regret** | High (suboptimal shown to many) | Lower (suboptimal shown to fewer) |
| **Duration** | Fixed | Can run indefinitely |
| **Best for** | Confirming hypotheses | Continuous optimization |

> [!info] Dynamic traffic allocation
> MAB maximizes the total number of conversions during the course of the test. The trade-off is that statistical certainty takes a backseat because the focus is on conversions and finding approximate best performers quickly.

---

<span class="at-kicker">Exploration vs Exploitation</span>

## The Two Pillars

> [!grid|cols2]
>
>> [!card|hero dark spanfull]
>> ###### EXPLORATION
>> ### *Exploration*
>> Gathering information by trying different arms.
>> 
>> "I don't know which variant is best, so I'll try them all to learn."
>> 
>> Classic A/B testing is in **perpetual exploration** — discovering exact conversion rates without exploiting knowledge.
>
>> [!card|hero dark spanfull]
>> ###### EXPLOITATION
>> ### *Exploitation*
>> Using current knowledge to maximize reward.
>> 
>> "Variant B seems better, so I'll show it more often."
>> 
>> MAB adds exploitation to its arsenal, making it much better for maximizing cumulative reward.

### The exploration-exploitation dilemma

```
Pure Exploration          Pure Exploitation
     │                         │
  50/50                    100% to best so far
  (learns equally)         (may miss better)
     \                       /
      \        MAB          /
       \    balances       /
        \   dynamically   /
         \_______________/
```

---

<span class="at-kicker">Algorithms</span>

## Common MAB Algorithms

### Epsilon-Greedy

With probability $\epsilon$, explore randomly; with probability $1-\epsilon$, exploit the best-known arm.

```python
def epsilon_greedy(epsilon=0.1):
    if random() < epsilon:
        return random_choice(arms)  # explore
    else:
        return argmax(arm_rewards)    # exploit
```

| Epsilon | Behavior |
|---------|----------|
| 0.1 | 10% exploration, 90% exploitation |
| 0.5 | Balanced exploration/exploitation |
| Decaying | Start high, decrease over time |

### Upper Confidence Bound (UCB1)

Selects arms based on optimistic estimates, balancing observed mean with uncertainty:

$$UCB_i = \bar{x}_i + \sqrt{\frac{2 \ln n}{n_i}}$$

Where:
- $\bar{x}_i$ = observed mean reward for arm $i$
- $n$ = total pulls across all arms
- $n_i$ = pulls for arm $i$

> [!info] UCB intuition
> The second term is an exploration bonus — arms with fewer pulls have higher uncertainty bonuses, encouraging exploration of less-tested options.

### Thompson Sampling

Bayesian approach: sample from posterior distributions and select the arm with highest sampled value.

```python
def thompson_sampling(arms):
    # For Bernoulli rewards (conversions)
    samples = [beta(a.successes + 1, a.failures + 1).rvs() 
               for a in arms]
    return argmax(samples)
```

> [!example] Why Thompson Sampling works
> Arms with high uncertainty (few samples) have wide posteriors that can produce high samples by chance, encouraging exploration. As data accumulates, posteriors tighten and exploitation dominates.

---

<span class="at-kicker">Algorithm Comparison</span>

## Choosing an Algorithm

| Algorithm | Strengths | Weaknesses | Best for |
|-----------|-----------|------------|----------|
| **Epsilon-Greedy** | Simple, intuitive | Linear regret, random exploration wastes samples | Simple implementations |
| **UCB** | Theoretical guarantees, logarithmic regret | Can be overly optimistic early | When you want theoretical bounds |
| **Thompson Sampling** | Excellent empirical performance, handles uncertainty naturally | Requires Bayesian setup | Most practical applications |
| **LinUCB** | Handles context/features | More complex | Contextual bandits |

---

<span class="at-kicker">Contextual Bandits</span>

## Extending to Contextual MAB

**Contextual Bandits** extend MAB by incorporating user/context features:

$$\text{Reward} = f(\text{Context}, \text{Arm})$$

> [!example] Personalization use case
> - **Context**: User demographics, browsing history, time of day
> - **Arms**: Different recommendations, layouts, or content
> - **Reward**: Click, conversion, engagement

### LinUCB algorithm

Uses linear models to estimate rewards for each arm given context:

$$\hat{r}_{a}(x) = x^T \hat{\theta}_a + \alpha \sqrt{x^T A_a^{-1} x}$$

Where $A_a$ is the design matrix for arm $a$.

---

<span class="at-kicker">Applications</span>

## Real-World MAB Use Cases

> [!grid|cols2]
>
>> [!card|section]
>> ###### RECOMMENDATION
>> ### Content *Recommendation*
>> News feeds, product recommendations, content ranking. Arms = items, reward = clicks/conversions.
>
>> [!card|section]
>> ###### ADS
>> ### Ad *Placement*
>> Selecting which ad creative to show. Arms = creatives, reward = CTR/conversions.
>
>> [!card|section]
>> ###### PRICING
>> ### Dynamic *Pricing*
>> Testing price points. Arms = prices, reward = revenue per user.
>
>> [!card|section]
>> ###### SEARCH
>> ### Search *Ranking*
>> Ranking algorithm variants. Arms = ranking functions, reward = user engagement.

---

<span class="at-kicker">Best Practices</span>

## When to Use MAB

> [!tip] Use MAB when:
> - You want to maximize conversions *during* the test period
> - The opportunity cost of showing suboptimal variants is high
> - You need continuous optimization, not a one-time decision
> - Traffic is limited and you can't afford long fixed tests

> [!warning] Use A/B testing when:
> - You need rigorous statistical proof of a winner
> - The decision is high-stakes and requires certainty
> - You have sufficient traffic for a powered test
> - The variants are very different (may need full exploration)

---

<span class="at-kicker">Regret Analysis</span>

## Measuring Performance

**Regret** measures the cumulative loss from not always choosing the optimal arm:

$$R_T = \sum_{t=1}^{T} (r^* - r_t)$$

Where $r^*$ is the optimal arm's reward and $r_t$ is the reward received at time $t$.

| Algorithm | Regret Bound |
|-----------|--------------|
| Random | $O(T)$ — linear, grows with time |
| Epsilon-Greedy | $O(T)$ — linear |
| UCB | $O(\sqrt{T \ln T})$ — sublinear |
| Thompson Sampling | $O(\sqrt{T \ln T})$ — sublinear, often best empirical |

---

<span class="at-kicker">Interview Questions</span>

## Interview Questions

1. What is the fundamental difference between A/B testing and Multi-Armed Bandits?
2. Explain the exploration-exploitation tradeoff in your own words.
3. When would you prefer Thompson Sampling over UCB?
4. What is regret and why does it matter for bandit algorithms?
5. How do contextual bandits differ from standard MAB?
6. When should you use A/B testing instead of MAB?
7. How would you implement epsilon-greedy for a recommendation system?

---

## Related pages

> [!grid]
>
>> [!card] Experimentation
>> [[ab-testing|A/B Testing]] · [[hypothesis-testing|Hypothesis Testing]] · [[bayesian-optimization|Bayesian Optimization]]
>
>> [!card] Reinforcement Learning
>> [[../deep-learning/reinforcement-learning|Reinforcement Learning]] · [[../deep-learning/q-learning|Q-Learning]]
>
>> [!card] Personalization
>> [[../ml-fundamentals/business-metrics-ml|Business Metrics]] · [[recommendation-systems|Recommendations]]
>
>> [!card] Statistics
>> [[probability-distributions|Distributions]] · [[bayesian-inference|Bayesian Inference]]
