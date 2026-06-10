---
title: Algorithms
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Algorithms
  - Greedy Algorithm
  - Algorithmic Paradigms
category: Technology
tags:
  - SoftwareEngineering
  - Algorithms
  - ComputerScience
  - Complexity
banner: https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "An algorithm must be seen to be believed."
> <cite>— Donald Knuth</cite>

---

<span class="at-kicker">Software Engineering · Computer Science</span>

# Algorithms

<p class="at-lead">
Algorithms are step-by-step procedures for solving problems. In software engineering, the
choice of algorithm determines correctness, efficiency, and scalability. While machine
learning is often associated with gradient descent and neural architectures, the underlying
infrastructure — indexing, graph traversal, scheduling, approximation — relies on classical
algorithms. Understanding algorithmic paradigms and their trade-offs is essential for
building systems that scale.
</p>

<span class="at-stat">greedy</span> &nbsp;·&nbsp; <span class="at-stat">dynamic</span> &nbsp;·&nbsp; <span class="at-stat">divide & conquer</span> &nbsp;·&nbsp; <span class="at-mark">the logic of computation</span>

<span class="at-kicker">Paradigms</span>

## Algorithmic Strategies

| Paradigm | Core Idea | Classic Examples |
|----------|-----------|------------------|
| **Greedy** | Make the locally optimal choice at each step | Dijkstra, Huffman coding, MST (Kruskal/Prim) |
| **Dynamic Programming** | Break into overlapping subproblems, memoise | Fibonacci, edit distance, knapsack, Viterbi |
| **Divide & Conquer** | Split problem, solve recursively, combine | Merge sort, quicksort, FFT, binary search |
| **Backtracking** | Explore all possibilities, prune dead ends | N-Queens, Sudoku solver, regex matching |
| **Randomised** | Use randomness for efficiency or simplicity | Quickselect, reservoir sampling, Bloom filters |
| **Approximation** | Accept near-optimal solutions for speed | Local search, simulated annealing, genetic algorithms |

---

<span class="at-kicker">Greedy Algorithms</span>

## Local Optimality, Global Results

A **greedy algorithm** builds a solution piece by piece, always choosing the next piece that
offers the most obvious and immediate benefit. It never revisits previous decisions.

### When greed works

Greedy algorithms yield optimal solutions when the problem exhibits:

1. **Greedy choice property**: A globally optimal solution can be reached by making a locally
   optimal (greedy) choice.
2. **Optimal substructure**: An optimal solution to the problem contains optimal solutions
   to subproblems.

### Classic examples

| Problem | Greedy Strategy | Optimal? |
|---------|--------------|----------|
| **Fractional knapsack** | Take items by value/weight ratio | Yes |
| **Activity selection** | Pick the activity that ends earliest | Yes |
| **Huffman coding** | Merge lowest-frequency symbols first | Yes |
| **Dijkstra's shortest path** | Expand the nearest unvisited node | Yes |
| **MST (Kruskal/Prim)** | Add cheapest edge that connects components | Yes |
| **0-1 knapsack** | Take items by value/weight ratio | **No** |

> [!example] Activity selection
> Given activities with start and end times, select the maximum number of non-overlapping
> activities. The greedy strategy — always pick the activity that ends earliest — is optimal.
> Proof sketch: the first activity in any optimal solution can be replaced by the greedy choice
> without reducing the number of activities.

### When greed fails

**0-1 Knapsack**: Items cannot be split. The greedy approach (by value/weight ratio) may leave
room that could have been filled more profitably by a different combination.

> [!warning] Greedy ≠ optimal
> Always verify whether the greedy choice property holds. When it does not, dynamic programming
> or backtracking is required.

---

<span class="at-kicker">Complexity Analysis</span>

## Measuring Efficiency

| Notation | Name | Description |
|----------|------|-------------|
| $O(1)$ | Constant | Same time regardless of input size |
| $O(\log n)$ | Logarithmic | Doubling input barely increases time |
| $O(n)$ | Linear | Time proportional to input size |
| $O(n \log n)$ | Linearithmic | Common for efficient sorts |
| $O(n^2)$ | Quadratic | Nested loops; painful at scale |
| $O(2^n)$ | Exponential | Brute force; impractical for $n > 30$ |
| $O(n!)$ | Factorial | Permutations; unusable for $n > 15$ |

> [!tip] Amortised analysis
> Some data structures (e.g. dynamic arrays, union-find with path compression) have expensive
> occasional operations but cheap average-case behaviour. Amortised analysis proves the
> average cost over a sequence of operations — not just the worst case.

---

<span class="at-kicker">Approximation Algorithms</span>

## When Exact Is Too Expensive

For NP-hard problems, polynomial-time exact solutions are unlikely. Approximation algorithms
guarantee solutions within a known factor of optimal.

| Problem | Approximation | Guarantee |
|---------|--------------|-----------|
| **Vertex cover** | Greedy edge matching | Factor 2 |
| **Set cover** | Greedy (largest uncovered set) | $O(\ln n)$ |
| **TSP (metric)** | Christofides algorithm | Factor 1.5 |
| **Max cut** | Randomised greedy | Factor 0.5 (randomised) |

---

<span class="at-kicker">Network Effects</span>

## Metcalfe's Law

While not an algorithm in the classical sense, **Metcalfe's Law** describes a fundamental
network property with algorithmic and system-design implications:

> The value of a network is proportional to the square of the number of connected users:
> $$V \propto n^2$$

### Implications for system design

| Effect | Consequence |
|--------|-------------|
| **Winner-take-all** | The largest network attracts all new users; small networks die |
| **Switching costs** | Users resist leaving because they lose connections |
| **Data network effects** | ML systems (e.g., Tesla Autopilot) improve with more users, creating compounding advantage |
| **Critical mass** | Below a threshold size, the network is not valuable enough to retain users |

### Types of network effects

| Type | Example | Mechanism |
|------|---------|-----------|
| **Direct** | WhatsApp, telephone | More users → more connections |
| **Indirect** | iOS, PlayStation | More users → more developers → better apps |
| **Data** | Tesla, Google Search | More users → more data → better model → more users |
| **Protocol** | Ethernet, Bitcoin | Standard adoption → interoperability |

> [!info] Reed's Law extends Metcalfe
> Reed's Law argues that the value of a network scales as $2^n$ (exponential) because users
can form groups, not just pairwise connections. This applies to platforms like Slack,
Discord, and Reddit.

## Interesting facts

- The greedy algorithm for making change with standard US coins (25¢, 10¢, 5¢, 1¢) is optimal
  because the coin system is "canonical." But with denominations {1, 3, 4}, greedy fails for
  amount 6 (greedy: 4+1+1 = 3 coins; optimal: 3+3 = 2 coins).
- Dijkstra's algorithm, invented in 1956, was originally designed to find the shortest route
  between Rotterdam and Groningen — two cities in the Netherlands.
- In 2000, Christos Papadimitriou proved that no polynomial-time algorithm can approximate
  the general TSP within any constant factor unless P = NP.

## Interview questions

1. What are the two properties that guarantee a greedy algorithm is optimal?
2. Give an example where a greedy algorithm fails and explain why.
3. What is the time complexity of Dijkstra's algorithm with a binary heap? With a Fibonacci heap?
4. Explain the difference between $O(n)$, $O(n \log n)$, and $O(n^2)$ with real examples.
5. State Metcalfe's Law. How does it explain winner-take-all dynamics in tech platforms?
6. When would you prefer an approximation algorithm over an exact algorithm? What guarantees
   do you look for?

## Related pages

> [!grid]
>
>> [!card] Data Structures
>> [[../databases/indexing|Indexing]] · [[../data-engineering/data-storage/data-structures|Data Structures]]
>
>> [!card] System Design
>> [[latency-throughput|Latency vs Throughput]] · [[horizontal-scaling|Horizontal Scaling]] · [[microservices|Microservices]]
>
>> [!card] ML
>> [[../machine-learning/deep-learning/optimisation-algorithms|Optimisation Algorithms]] · [[../machine-learning/ml-algorithms/ensemble-learning|Ensemble Learning]]
>
>> [!card] Complexity
>> [[../data-engineering/data-processing/big-o-notation|Big-O Notation]] · [[../machine-learning/statistics/computational-complexity|Computational Complexity]]
