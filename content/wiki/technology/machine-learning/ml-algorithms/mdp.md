---
title: Markov Decision Process
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - MDP
  - Markov Decision Process
  - State-Action-Reward Model
category: Machine Learning
tags:
  - MachineLearning
  - ReinforcementLearning
  - MDP
  - Probability
  - Optimisation
banner:
publish: true
---

> [!quote]
> *The Markov property allows us to reason about the future without remembering the past — a profound simplification for sequential decision making.*
> — Richard S. Sutton

# Markov Decision Process

<p class="at-lead">
A Markov Decision Process (MDP) is the mathematical framework for modelling sequential decision making under uncertainty. It defines states, actions, transition probabilities, and rewards — providing the formal foundation for reinforcement learning, operations research, and control theory.
</p>

## Overview

An MDP is defined by the tuple (S, A, P, R, γ): states, actions, transition probabilities, reward function, and discount factor. The goal is to find a policy π that maximises expected cumulative discounted reward. MDPs underpin dynamic programming, Q-Learning, policy gradients, and game AI, and their extensions (POMDPs, multi-agent games) model partial observability and strategic interaction.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[bellman-equations]], [[q-learning]], [[policy-gradients]]
>
>> [!card] Parent topic
>> [[reinforcement-learning]]
>
>> [!card] See also
>> [[markov-models]], [[exploration-exploitation]]
