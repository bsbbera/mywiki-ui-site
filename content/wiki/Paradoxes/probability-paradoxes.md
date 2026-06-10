---
title: Probability Paradoxes
Created:
  - 2026-06-11
date modified: Thursday, June 11th 2026, 12:00:00 am
aliases:
  - monty-hall-problem
  - birthday-paradox
  - false-positive-paradox
  - sleeping-beauty-problem
  - two-envelope-paradox
  - bertrands-box-paradox
  - boy-or-girl-paradox
  - proebstings-paradox
  - grices-paradox
  - intransitive-dice
category: Paradox
tags:
  - Paradox
  - Probability
  - Mathematics
  - Data-Science
banner:
publish: true
source: https://en.wikipedia.org/wiki/List_of_paradoxes
---

<span class="at-kicker">PROBABILITY</span>

# Probability Paradoxes

<p class="at-lead">Conditional probability and sampling methods routinely produce results that violate raw intuition. These paradoxes expose the gap between how we expect chance to behave and how it actually behaves when information is partial, populations are large, or comparisons are chained together.</p>

## Paradoxes

> [!grid]
>
>> [!card] **Bertrand's Box Paradox**
>> **Setup:** Three boxes each contain two coins: one has two gold coins, one has two silver coins, and one has one of each. You pick a box at random and draw a gold coin.
>> **Bite:** The remaining coin in that box is more likely to be gold than silver.
>> **Resolution:** There are two gold coins you could have drawn, and in only one of those cases is the other coin silver. The conditional probability of the other coin being gold is **2/3**.
>
>> [!card] **Bertrand's Paradox**
>> **Setup:** What is the probability that a random chord of a circle is longer than the side of an inscribed equilateral triangle?
>> **Bite:** Depending on how you define "random chord" (by endpoint, radius, or midpoint), you get 1/3, 1/2, or 1/4.
>> **Resolution:** There is no single canonical measure for "random" geometric objects; the paradox reveals that symmetry arguments must be chosen explicitly.
>
>> [!card] **Birthday Paradox**
>> **Setup:** How many people must be in a room before it is more likely than not that two share a birthday?
>> **Bite:** With just **23 people**, the probability exceeds 50%. With 70 people, it is nearly certain.
>> **Resolution:** There are $\binom{n}{2}$ possible pairs, and each pair has a 1/365 chance of collision. The number of comparisons grows quadratically, not linearly.
>
>> [!card] **Borel's Paradox**
>> **Setup:** A random point is uniformly distributed on a unit sphere. What is the conditional distribution of longitude given that the point lies on a great circle?
>> **Bite:** The answer depends on whether you condition on the great circle being a meridian or an equator.
>> **Resolution:** Conditional probability densities are not invariant under coordinate transformations; zero-probability events require careful limiting procedures.
>
>> [!card] **Boy or Girl Paradox**
>> **Setup:** A two-child family has at least one boy. What is the probability that it has a girl?
>> **Bite:** The answer is **2/3**—not 1/2 as many expect.
>> **Resolution:** Of the four equally likely gender combinations (BB, BG, GB, GG), ruling out GG leaves three cases, two of which include a girl. The paradox sharpens when you specify *which* child is the boy.
>
>> [!card] **False Positive Paradox**
>> **Setup:** A disease test is 99% accurate, but the disease affects only 1 in 10,000 people. You test positive.
>> **Bite:** Even with a positive result, the odds you actually have the disease remain tiny.
>> **Resolution:** [[Bayes' theorem]] shows that rare diseases with good tests still yield mostly false positives because the base rate dominates the calculation.
>
>> [!card] **Grice's Paradox**
>> **Setup:** Statements involving conditionals and probabilities can be interpreted in multiple ways depending on conversational implicature.
>> **Bite:** The exact meaning of probabilistic statements is more complicated than casual examination suggests.
>> **Resolution:** Natural language conditionals carry pragmatic constraints that go beyond their logical form; probability must be assigned with respect to explicitly stated reference classes.
>
>> [!card] **Intransitive Dice**
>> **Setup:** Three dice A, B, and C are such that A beats B more often than not, and B beats C more often than not.
>> **Bite:** A still loses to C more often than not—victory is not transitive.
>> **Resolution:** The dice exploit non-uniform face distributions to create rock-paper-scissors-style cyclic dominance, a phenomenon that also appears in voting systems and ecological competition.
>
>> [!card] **Monty Hall Problem**
>> **Setup:** You pick one of three doors hiding a prize. The host, who knows what's behind each door, opens a remaining door that is empty and offers to let you switch.
>> **Bite:** Switching doubles your chances of winning from 1/3 to **2/3**.
>> **Resolution:** The host's action conveys information. Your initial pick was wrong 2/3 of the time, and in those cases the host is forced to reveal the only remaining empty door.
>
>> [!card] **Necktie Paradox**
>> **Setup:** Two men wager that whoever is wearing the more expensive necktie must give it to the other, each reasoning that the expected value of the swap is positive.
>> **Bite:** Both believe they stand to gain, which is impossible.
>> **Resolution:** The expected-value calculation assumes a uniform distribution over all positive values, which does not exist; the paradox is isomorphic to the [[two-envelope paradox]].
>
>> [!card] **Proebsting's Paradox**
>> **Setup:** The [[Kelly criterion]] is often optimal for maximizing long-run profit in betting and investment.
>> **Bite:** Proebsting's paradox shows that the Kelly criterion can lead to ruin in certain scenarios.
>> **Resolution:** Kelly maximizes expected logarithmic utility, but when payoffs are path-dependent or utility functions differ, alternative strategies may be safer.
>
>> [!card] **Sleeping Beauty Problem**
>> **Setup:** Sleeping Beauty is put to sleep on Sunday. A fair coin is flipped. If Heads, she wakes on Monday; if Tails, she wakes on Monday and Tuesday with no memory of the first awakening. Each time she wakes, she is asked: what is your credence that the coin landed Heads?
>> **Bite:** Some argue for **1/2** (the coin was fair); others argue for **1/3** (she is in one of three indistinguishable wakings, two of which follow Tails).
>> **Resolution:** The dispute hinges on whether to use self-locating belief (centered-worlds semantics) or standard conditionalization.
>
>> [!card] **Three Prisoners Problem**
>> **Setup:** Three prisoners (A, B, C) are told one will be pardoned. Prisoner A asks the warden to name one of the others who will be executed. The warden names B.
>> **Bite:** A's chance of being pardoned remains **1/3**, while C's jumps to **2/3**.
>> **Resolution:** This is structurally identical to the [[Monty Hall problem]]: the warden's response is conditioned on A's status, and the new information transfers probability mass to the remaining prisoner.
>
>> [!card] **Two-Envelope Paradox**
>> **Setup:** You are given two indistinguishable envelopes; one contains twice as much money as the other. You pick one, then are offered the chance to switch.
>> **Bite:** It seems the other envelope has an expected value 25% higher than yours regardless of which you picked, suggesting you should always switch—an absurd conclusion.
>> **Resolution:** The paradox arises from improperly conditioning on the amount in your envelope without a well-defined prior distribution over the possible sums.

## Deep Dive: Monty Hall Problem

The [[Monty Hall problem]] is the canonical demonstration of how extra information reshapes conditional probability. Consider three doors: behind one is a car; behind the other two are goats. You pick Door 1. The host, who knows the contents, opens Door 3 to reveal a goat and offers you the choice to switch to Door 2.

| Scenario | Your Initial Pick | Host Reveals | Switch? | Result |
|---|---|---|---|---|
| 1 | Door 1 (Car) | Door 2 or 3 | Yes | Goat |
| 2 | Door 2 (Goat) | Door 3 | Yes | Car |
| 3 | Door 3 (Goat) | Door 2 | Yes | Car |

Your first pick is wrong **2/3** of the time. In both of those scenarios, the host has no choice but to reveal the single remaining goat, effectively concentrating all the losing probability onto the one unopened door you did not originally pick. Switching collapses the 2/3 failure rate of your initial guess into a 2/3 success rate for the switch.

## Deep Dive: Birthday Paradox

The [[birthday paradox]] is a stark illustration of combinatorial explosion. The probability that all $n$ birthdays in a group are distinct is:

$$P(\text{no match}) = \frac{365}{365} \times \frac{364}{365} \times \cdots \times \frac{365 - n + 1}{365}$$

| Group Size | $P(\text{no match})$ | $P(\text{at least one match})$ |
|---|---|---|
| 10 | 88.3% | ~11.7% |
| 20 | 58.9% | ~41.1% |
| 23 | 49.3% | **~50.7%** |
| 30 | 29.4% | ~70.6% |
| 40 | 10.9% | ~89.1% |
| 50 | 3.0% | ~97.0% |
| 70 | 0.1% | ~99.9% |

At 23 people there are $\binom{23}{2} = 253$ possible pairs. Each pair is an independent opportunity for collision. Our intuition linearizes the group size, but probability compounds quadratically across pairs.

## Deep Dive: False Positive Paradox

The [[false positive paradox]] demonstrates why [[Bayes' theorem]] is essential when interpreting medical tests. Suppose a disease affects 1 in 10,000 people. The test is 99% accurate, with a 1% false positive rate and 0% false negative rate.

| Outcome | Population (per 10,000) | Test Positive |
|---|---|---|
| Actually sick | 1 | 1 |
| Healthy | 9,999 | ~100 |
| **Total positive tests** | | **~101** |

$$P(\text{sick} \mid \text{positive}) = \frac{P(\text{positive} \mid \text{sick}) \cdot P(\text{sick})}{P(\text{positive})} = \frac{1.0 \times 0.0001}{0.0101} \approx 0.99\%$$

Even with a near-perfect test, a positive result in a low-prevalence population gives less than a **1%** chance of actual illness. The base rate dominates: rare diseases produce swamps of false positives that drown out true cases.

## Deep Dive: Two-Envelope & Necktie Paradox

The [[two-envelope paradox]] and the [[Necktie paradox]] are structurally identical. Let $X$ be the amount in your envelope. The other envelope contains either $2X$ or $X/2$ with equal probability. The expected value of switching seems to be:

$$E[\text{other}] = \frac{1}{2}(2X) + \frac{1}{2}\left(\frac{X}{2}\right) = \frac{5X}{4}$$

Since $\frac{5X}{4} > X$, you should always switch. But the same logic applies after you switch, creating an infinite regress. Both parties in the necktie wager compute a positive expected gain, which cannot both be true.

The flaw lies in conditioning on $X$ without a proper prior. The formula implicitly assumes a uniform distribution over all positive reals, which does not exist. Once a proper prior is specified (e.g., a distribution over the smaller amount $S$), the paradox vanishes: there is no general advantage to switching. The expected-value argument conflates the amount in your envelope with the underlying random variable generating the pair.

## Deep Dive: Sleeping Beauty Problem

The [[Sleeping Beauty problem]] splits philosophers and probabilists into two camps.

**The Halfer position (1/2):** Sleeping Beauty learns nothing new upon waking that she did not know on Sunday. The coin was fair then, and no new evidence about the coin itself has been revealed. Her credence in Heads should remain **1/2**.

**The Thirder position (1/3):** From her perspective upon waking, there are three possible awakening-moments: Heads-Monday, Tails-Monday, and Tails-Tuesday. These are subjectively indistinguishable, and only one of the three corresponds to Heads. By the principle of indifference, each is equally likely, giving $P(\text{Heads}) = 1/3$.

The debate remains unresolved in the philosophical literature, turning on whether self-locating information—which awakening am I in?—counts as evidence and whether standard conditionalization applies when the number of observers depends on the outcome.

## Related pages

> [!grid]
>
>> [!card] Sister Concepts
>> - [[statistical-paradoxes]]
>> - [[mathematical-paradoxes]]
>
>> [!card] Vault Links
>> - [[combinatorics]]
>> - [[statistics]]
>> - [[machine-learning]]
>> - [[hypothesis-testing]]
