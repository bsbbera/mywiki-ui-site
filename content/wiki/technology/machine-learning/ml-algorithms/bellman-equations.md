---
title: Bellman Equations
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Bellman Equations
  - Bellman Optimality
  - Dynamic Programming Equations
  - Value Equations
category: Machine Learning
tags:
  - MachineLearning
  - ReinforcementLearning
  - DynamicProgramming
  - Optimisation
  - Theory
banner:
publish: true
---

> [!quote]
> *The Bellman equation is the cornerstone of dynamic programming and reinforcement learning — a recursive decomposition of long-term value into immediate reward and future value.*
> — Richard Bellman

# Bellman Equations

<p class="at-lead">
The Bellman equations provide a recursive decomposition of value functions in reinforcement learning. They state that the value of a state equals the immediate reward plus the discounted expected value of the next state — enabling iterative algorithms to converge on optimal policies.
</p>

## Overview

The Bellman expectation equation defines the value of a policy, while the Bellman optimality equation defines the value of the optimal policy. These recursive relationships are the basis for value iteration, policy iteration, Q-Learning, and actor-critic methods. Understanding the Bellman equations is essential for deriving, analysing, and debugging any reinforcement learning algorithm.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[mdp]], [[q-learning]], [[policy-gradients]]
>
>> [!card] Parent topic
>> [[reinforcement-learning]]
>
>> [!card] See also
>> [[dynamic-programming]], [[optimisation-algorithms]]
