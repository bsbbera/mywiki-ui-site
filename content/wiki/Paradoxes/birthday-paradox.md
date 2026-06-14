---
title: Birthday Paradox
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - birthday problem
  - birthday paradox
category: Paradox
tags:
  - Paradox
  - Probability
  - Combinatorics
  - Statistics
banner:
publish: true
---

> [!quote]
> *In a room of just 23 people, a shared birthday is more likely than not.*
> — Common formulation

# Birthday Paradox

<p class="at-lead">
The birthday paradox is a stark illustration of combinatorial explosion. With just 23 people, the probability that at least two share a birthday exceeds 50%. With 70 people, it is nearly certain. The surprise arises because the number of possible pairings grows quadratically, not linearly.
</p>

## Overview

The probability that all n birthdays are distinct is:

$$P(\text{no match}) = \frac{365}{365} \times \frac{364}{365} \times \cdots \times \frac{365 - n + 1}{365}$$

Because there are $\binom{n}{2}$ possible pairs, each with a 1/365 chance of collision, the cumulative probability of a match rises far faster than intuition suggests. This principle underlies hash collision analysis and cryptographic birthday attacks.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[false-positive-paradox]], [[monty-hall-problem]]
>
>> [!card] Parent topic
>> [[probability-paradoxes]]
>
>> [!card] See also
>> [[combinatorics]], [[statistics]]
