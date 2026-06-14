---
title: Q-Learning
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Q-Learning
  - Off-Policy RL
  - Temporal Difference Learning
category: Machine Learning
tags:
  - MachineLearning
  - ReinforcementLearning
  - QLearning
  - TemporalDifference
  - DeepLearning
banner:
publish: true
---

> [!quote]
> *Q-Learning learns the value of actions without ever needing a model of the environment — trial and error distilled into a simple update rule.*
> — Watkins & Dayan, 1992

# Q-Learning

<p class="at-lead">
Q-Learning is a model-free, off-policy reinforcement learning algorithm that learns the value of taking a given action in a given state. It is the foundation of modern deep reinforcement learning and powers systems from game-playing agents to robotics control and recommendation engines.
</p>

## Overview

Q-Learning iteratively updates action-value estimates using the Bellman equation, converging to the optimal policy even when the agent is following a different exploratory policy. Deep Q-Networks (DQN) extend this idea by using neural networks to approximate Q-values in high-dimensional state spaces, enabling agents to play Atari games directly from pixel inputs.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[dqn]], [[policy-gradients]], [[actor-critic]]
>
>> [!card] Parent topic
>> [[reinforcement-learning]]
>
>> [!card] See also
>> [[exploration-exploitation]], [[bellman-equations]], [[mdp]]
