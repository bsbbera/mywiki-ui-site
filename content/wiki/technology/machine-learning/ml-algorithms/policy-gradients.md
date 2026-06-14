---
title: Policy Gradients
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Policy Gradients
  - Policy-Based RL
  - REINFORCE
  - Policy Optimisation
category: Machine Learning
tags:
  - MachineLearning
  - ReinforcementLearning
  - PolicyGradients
  - DeepLearning
  - Optimisation
banner:
publish: true
---

> [!quote]
> *Policy gradient methods directly optimise the parameters of a policy to maximise expected cumulative reward.*
> — Sutton, McAllester, Singh & Mansour, 2000

# Policy Gradients

<p class="at-lead">
Policy gradient methods are a family of reinforcement learning algorithms that directly parameterise and optimise the agent's policy. Unlike value-based methods, they can learn stochastic policies and handle continuous action spaces, making them essential for robotics, game AI, and complex control tasks.
</p>

## Overview

The REINFORCE algorithm uses Monte Carlo returns to estimate the policy gradient, while actor-critic methods reduce variance by learning a value function alongside the policy. Modern variants like PPO and SAC stabilise training with clipped objectives and entropy regularisation, enabling policy gradient methods to scale to humanoid locomotion, autonomous driving, and large-scale language model fine-tuning.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[actor-critic]], [[q-learning]], [[reinforcement-learning]]
>
>> [!card] Parent topic
>> [[reinforcement-learning]]
>
>> [!card] See also
>> [[exploration-exploitation]], [[optimisation-algorithms]]
