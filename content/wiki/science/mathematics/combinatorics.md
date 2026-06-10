---
title: Combinatorics
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Combinatorics
  - Permutations
  - Combinations
  - Counting Principles
category: Science
tags:
  - Mathematics
  - Combinatorics
  - Counting
  - Probability
  - MLFoundations
banner: https://images.unsplash.com/photo-1635070041078-ea7ef83fbc68?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "Combinatorics is the art of arranging things and counting the ways to do so."
> <cite>— Anonymous</cite>

---

<span class="at-kicker">Mathematics · Counting</span>

# Combinatorics

<p class="at-lead">
Combinatorics is the mathematics of counting, arranging, and selecting objects. It underlies
probability theory, statistical mechanics, algorithm analysis, and machine learning — from
enumerating model hyperparameter grids to computing the number of possible neural network
architectures. The two fundamental operations are permutations (order matters) and
combinations (order does not).
</p>

<span class="at-stat">permutations</span> &nbsp;·&nbsp; <span class="at-stat">combinations</span> &nbsp;·&nbsp; <span class="at-stat">counting principles</span> &nbsp;·&nbsp; <span class="at-mark">arrange and select</span>

<span class="at-kicker">Fundamental Principles</span>

## The Rules of Counting

### Rule of sum (addition principle)

If two tasks are mutually exclusive, the total ways to do either is the sum:

$$|A \cup B| = |A| + |B|, \quad \text{if } A \cap B = \emptyset$$

**Example**: You can travel by 3 trains or 2 buses. Total options = $3 + 2 = 5$.

### Rule of product (multiplication principle)

If two tasks are performed in sequence, the total ways is the product:

$$|A \times B| = |A| \cdot |B|$$

**Example**: 3 shirts and 4 pants → $3 \times 4 = 12$ outfits.

### Inclusion–exclusion principle

For overlapping sets:

$$|A \cup B| = |A| + |B| - |A \cap B|$$

Generalises to $n$ sets with alternating sums of intersections.

---

<span class="at-kicker">Permutations</span>

## When Order Matters

A **permutation** is an ordered arrangement of objects.

### $n$ objects taken $r$ at a time

$$P(n, r) = {}_nP_r = \frac{n!}{(n-r)!}$$

**Example**: Awarding gold, silver, bronze medals to 8 runners:

$$P(8, 3) = \frac{8!}{5!} = 8 \times 7 \times 6 = 336 \text{ ways}$$

### All $n$ objects

$$P(n, n) = n! = n \times (n-1) \times \cdots \times 2 \times 1$$

> [!info] Factorial growth
> $n!$ grows faster than exponential. $20! \approx 2.4 \times 10^{18}$ — more than the number
> of grains of sand on Earth. This is why brute-force search over permutations is infeasible
> for all but tiny $n$.

### Permutations with repetition

If each of $r$ positions can take any of $n$ values (with replacement):

$$n^r$$

**Example**: 4-digit PIN codes = $10^4 = 10{,}000$ possibilities.

### Permutations with indistinguishable objects

If $n$ objects contain duplicates ($n_1$ of type 1, $n_2$ of type 2, …):

$$\frac{n!}{n_1! \cdot n_2! \cdot \cdots \cdot n_k!}$$

**Example**: Arrangements of "BANANA" = $\frac{6!}{3! \cdot 2! \cdot 1!} = 60$.

---

<span class="at-kicker">Combinations</span>

## When Order Does Not Matter

A **combination** is an unordered selection of objects.

### $n$ objects chosen $r$ at a time

$$C(n, r) = {}_nC_r = \binom{n}{r} = \frac{n!}{r!(n-r)!}$$

**Example**: Choosing a 3-person committee from 10 people:

$$C(10, 3) = \frac{10!}{3! \cdot 7!} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120 \text{ ways}$$

> [!tip] Permutation vs combination
> Permutation = combination $\times$ arrangement of the chosen items.
> $$P(n, r) = C(n, r) \times r!$$

### Properties of binomial coefficients

| Property | Formula | Interpretation |
|----------|---------|----------------|
| **Symmetry** | $\binom{n}{r} = \binom{n}{n-r}$ | Choosing $r$ to include = choosing $n-r$ to exclude |
| **Boundary** | $\binom{n}{0} = \binom{n}{n} = 1$ | One way to choose all or none |
| **Pascal's identity** | $\binom{n}{r} + \binom{n}{r-1} = \binom{n+1}{r}$ | Recursive construction of Pascal's triangle |
| **Sum** | $\sum_{r=0}^{n} \binom{n}{r} = 2^n$ | Total subsets of an $n$-element set |

### Multinomial coefficients

When dividing $n$ objects into $k$ groups of sizes $n_1, n_2, \dots, n_k$:

$$\binom{n}{n_1, n_2, \dots, n_k} = \frac{n!}{n_1! \cdot n_2! \cdot \cdots \cdot n_k!}$$

**Example**: Deal a 52-card deck into 4 hands of 13 cards each:

$$\frac{52!}{13! \cdot 13! \cdot 13! \cdot 13!}$$

---

<span class="at-kicker">Binomial Theorem</span>

## Expanding Powers of Sums

$$(a + b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r$$

**Example**: $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$

The coefficients are exactly the rows of Pascal's triangle.

### Multinomial theorem

$$(x_1 + x_2 + \cdots + x_k)^n = \sum_{n_1+\cdots+n_k=n} \binom{n}{n_1, \dots, n_k} x_1^{n_1} \cdots x_k^{n_k}$$

> [!info] Connection to probability
> The binomial distribution $P(X=k) = \binom{n}{k}p^k(1-p)^{n-k}$ counts the number of ways to
> achieve $k$ successes in $n$ trials. The combinatorial term $\binom{n}{k}$ is the count of
> favourable sequences; $p^k(1-p)^{n-k}$ is the probability of any one such sequence.

---

<span class="at-kicker">Applications</span>

## Combinatorics in Machine Learning

| Domain | Application | Combinatorial object |
|--------|-------------|---------------------|
| **Model selection** | Grid search over hyperparameters | Cartesian product of parameter sets |
| **Ensemble methods** | Choosing base learners | Subsets of available models |
| **Feature selection** | Selecting $k$ features from $d$ | $\binom{d}{k}$ possibilities |
| **Cross-validation** | Partitioning data into $k$ folds | Stirling numbers of the second kind |
| **Graph theory** | Counting paths, trees | Catalan numbers, spanning trees |
| **Information theory** | Codebook size | $\binom{n}{k}$ for $k$-sparse vectors |
| **Bayesian networks** | Structure learning | DAG count over $n$ nodes |

### Feature selection complexity

Choosing the best subset of $k$ features from $d$ total:

$$\text{Possibilities} = \binom{d}{k} = \frac{d!}{k!(d-k)!}$$

For $d=100$ and $k=10$: $\binom{100}{10} \approx 1.7 \times 10^{13}$. Exhaustive search is
impossible — hence greedy methods (forward selection, backward elimination) and regularisation
(L1, elastic net) are essential.

### Catalan numbers

Count valid parenthesis sequences, binary trees, and non-crossing partitions:

$$C_n = \frac{1}{n+1}\binom{2n}{n}$$

**Example**: $C_3 = 5$ — the five valid 3-pair parenthesis strings: `()()()`, `()(())`,
`(())()`, `(()())`, `((()))`.

> [!info] Catalan numbers in parsing
> The number of ways to parenthesise $n$ factors for optimal matrix-chain multiplication is
> $C_{n-1}$. Dynamic programming (not brute force) solves this in $O(n^3)$.

---

<span class="at-kicker">Advanced Counting</span>

## Stirling Numbers & Bell Numbers

### Stirling numbers of the second kind

$S(n, k)$ counts the ways to partition $n$ distinct objects into $k$ non-empty, unlabeled subsets:

$$S(n, k) = \frac{1}{k!}\sum_{j=0}^{k}(-1)^{k-j}\binom{k}{j}j^n$$

**Example**: $S(4, 2) = 7$ — the 7 ways to partition $\{1,2,3,4\}$ into 2 non-empty groups.

### Bell numbers

$B_n$ counts all partitions of a set of $n$ elements:

$$B_n = \sum_{k=0}^{n} S(n, k)$$

**Example**: $B_3 = 5$ — partitions of $\{1,2,3\}$ are: $\{\{1,2,3\}\}$, $\{\{1,2\},\{3\}\}$,
$\{\{1,3\},\{2\}\}$, $\{\{2,3\},\{1\}\}$, $\{\{1\},\{2\},\{3\}\}$.

> [!tip] Stirling numbers in ML
> The number of ways to cluster $n$ points into $k$ non-empty clusters is $S(n, k)$. The total
> number of possible clusterings (all $k$) is $B_n$ — astronomically large even for modest $n$.

## Interesting facts

- The number of possible poker hands (5 cards from 52) is $\binom{52}{5} = 2{,}598{,}960$.
- Shannon's estimate of the number of possible English sentences of length 20 is roughly
  $10^{70}$ — far exceeding the number of atoms in the observable universe.
- In deep learning, the number of possible neural network architectures grows combinatorially
  with depth, width, and connectivity patterns — explaining why architecture search (NAS) is
  computationally expensive.

## Interview questions

1. What is the difference between a permutation and a combination? When would you use each?
2. How many ways can you arrange the letters in "MISSISSIPPI"?
3. Prove Pascal's identity using the factorial definition of binomial coefficients.
4. A grid search has 5 learning rates, 4 batch sizes, and 3 optimisers. How many total
   configurations? If each takes 10 minutes, how long does the full grid search take?
5. Explain why $\sum_{r=0}^{n} \binom{n}{r} = 2^n$ using a counting argument.
6. What is the connection between binomial coefficients and the binomial distribution?

## Related pages

> [!grid]
>
>> [!card] Calculus & Series
>> [[calculus|Calculus]] · [[series|Series & Sequences]]
>
>> [!card] Probability & Statistics
>> [[../statistics/probability-distributions|Probability Distributions]] · [[../statistics/random-variables|Random Variables]] · [[../statistics/binomial-distribution|Binomial Distribution]]
>
>> [!card] ML Foundations
>> [[../../technology/machine-learning/ml-fundamentals/feature-selection|Feature Selection]] · [[../../technology/machine-learning/ml-algorithms/ensemble-learning|Ensemble Learning]]
>
>> [!card] Algorithms
>> [[../../technology/machine-learning/deep-learning/optimisation-algorithms|Optimisation Algorithms]] · [[../../technology/software-engineering/algorithms|Algorithms]]
>
>> [!card] Paradoxes
>> [[../../paradoxes/probability-paradoxes|Birthday Paradox]] — collisions in combinatorial probability
