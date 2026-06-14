---
title: Dynamic Programming
Created:
  - 2026-06-12
date modified: Friday, June 12th 2026, 12:00:00 pm
aliases:
  - Dynamic Programming
  - DP
  - Memoization
  - Tabulation
category: Computer Science
tags:
  - Algorithms
  - ComputerScience
  - Optimization
  - SoftwareEngineering
banner:
publish: true
---

> [!quote]
> *Dynamic programming is both a mathematical optimization method and a computer programming method.*
> — Richard Bellman

# Dynamic Programming

<p class="at-lead">
Dynamic Programming (DP) is an algorithmic paradigm that solves complex problems by breaking them into overlapping sub-problems, solving each sub-problem only once, and storing its solution for reuse. It is the backbone of efficient solutions in optimisation, bioinformatics, and resource allocation.
</p>

## Overview

DP applies when a problem exhibits **optimal substructure** (the optimal solution contains optimal sub-solutions) and **overlapping sub-problems** (the same sub-problems recur many times). The two classic implementation approaches are **top-down memoization** (recursive with a cache) and **bottom-up tabulation** (iterative filling of a table).

Classic DP applications include the Fibonacci sequence, shortest-path algorithms (Floyd-Warshall, Bellman-Ford), string-edit distance (Levenshtein), knapsack problems, and sequence alignment in bioinformatics. DP transforms exponential-time recursions into polynomial-time solutions.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> [[algorithms|Algorithms]], [[greedy-algorithms|Greedy Algorithms]], [[recursion|Recursion]]
>
>> [!card] Parent topic
>> [[software-engineering|Software Engineering]]
>
>> [!card] See also
>> [[big-o-notation|Big-O Notation]], [[data-structures|Data Structures]], [[graph-algorithms|Graph Algorithms]]