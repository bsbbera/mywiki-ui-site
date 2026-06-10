---
title: Technical Interviews
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Technical Interviews
  - Coding Interview
  - SQL Interview
  - System Design Interview
category: Career
tags:
  - Career
  - Interview
  - Coding
  - SQL
  - SystemDesign
banner: https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "Technical interviews test not what you know, but how you think under uncertainty."
> <cite>— Engineering hiring manager</cite>

---

<span class="at-kicker">Career · Technical Preparation</span>

# Technical Interviews

<p class="at-lead">
Technical interviews for data-science and ML roles span four domains: SQL and data manipulation,
statistics and probability, coding (Python), and system design. The best candidates do not just
solve problems — they communicate their reasoning, discuss trade-offs, and adapt when the
problem changes. This section covers the most common question types and how to approach them.
</p>

<span class="at-stat">SQL</span> &nbsp;·&nbsp; <span class="at-stat">coding</span> &nbsp;·&nbsp; <span class="at-stat">probability</span> &nbsp;·&nbsp; <span class="at-mark">think out loud</span>

<span class="at-kicker">SQL</span>

## The Data Engineer's Language

Most DS/ML interviews include a SQL round. The questions test your ability to transform,
aggregate, and window data — not just retrieve it.

### Core patterns to master

| Pattern | Concept | Example |
|---------|---------|---------|
| **Window functions** | `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `LEAD()`, `LAG()` | Find top 3 products per category |
| **Running totals** | `SUM(...) OVER (ORDER BY ...)` | Cumulative revenue by month |
| **Moving averages** | `AVG(...) OVER (ORDER BY ... ROWS BETWEEN ...)` | 7-day rolling average |
| **Self-joins** | Join a table to itself | Find employees who earn more than their managers |
| **Pivot / unpivot** | `CASE` aggregation or `UNPIVOT` | Convert rows to columns |
| **Percentiles** | `NTILE()`, `PERCENT_RANK()` | Bucket users into quartiles by spend |
| **Gaps & islands** | `LEAD()/LAG()` with subtraction | Find consecutive login streaks |

> [!example] Window function syntax
> ```sql
> SELECT
>   user_id,
>   event_date,
>   amount,
>   SUM(amount) OVER (
>     PARTITION BY user_id
>     ORDER BY event_date
>     ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
>   ) AS running_total,
>   RANK() OVER (
>     PARTITION BY user_id
>     ORDER BY amount DESC
>   ) AS top_purchase_rank
> FROM transactions;
> ```

> [!tip] Order of execution
> SQL logical execution order: `FROM → WHERE → GROUP BY → HAVING → SELECT → WINDOW → ORDER BY → LIMIT`.
> Remembering this prevents errors like filtering on aliased columns in `WHERE`.

### Common SQL traps

| Trap | Solution |
|------|----------|
| `NULL` in aggregates | `COALESCE(SUM(col), 0)` |
| Dividing integers | `CAST(numerator AS FLOAT) / denominator` |
| Duplicate rows after join | Use `DISTINCT` or verify join keys |
| Date arithmetic | Use `DATE_DIFF` / `DATE_ADD` functions; avoid string manipulation |
| `WHERE` vs `HAVING` | `WHERE` filters rows; `HAVING` filters groups |

---

<span class="at-kicker">Coding</span>

## Python Problem-Solving

Coding interviews for DS roles focus on data manipulation, not algorithms. Key skills:

| Skill | Why It Matters | Library |
|-------|---------------|---------|
| **Data transformation** | Cleaning, feature engineering | Pandas, NumPy |
| **Probability simulation** | A/B test power, bootstrap | NumPy, SciPy |
| **String manipulation** | Text processing, parsing | Python built-ins, regex |
| **Recursion / iteration** | Tree traversal, dynamic programming | Pure Python |

> [!example] Python interview pattern
> ```python
> # Given a list of timestamps, find the longest gap between consecutive events
> from itertools import pairwise
> import pandas as pd
>
> def longest_gap(timestamps):
>     ts = pd.to_datetime(timestamps).sort_values()
>     gaps = ts.diff().dt.total_seconds()
>     return gaps.max()
> ```

### The communication protocol

1. **Clarify** — restate the problem, ask about edge cases, confirm input/output formats
2. **Approach** — describe your strategy before coding (O(n) vs O(n²), data structures)
3. **Code** — write clean, modular code with meaningful variable names
4. **Test** — walk through with a small example, then discuss edge cases
5. **Optimise** — "Can we do better?" — discuss time/space trade-offs

---

<span class="at-kicker">Probability & Statistics</span>

## Quantitative Reasoning

| Topic | Common Question | Key Formula |
|-------|----------------|-------------|
| **Expected value** | Fair price of a game | $E[X] = \sum x \cdot P(X=x)$ |
| **Conditional probability** | Medical test accuracy | $P(D|T) = \frac{P(T|D)P(D)}{P(T)}$ |
| **Binomial distribution** | A/B test significance | $\binom{n}{k}p^k(1-p)^{n-k}$ |
| **Central Limit Theorem** | Why sample mean is normal | $\bar{X} \approx \mathcal{N}(\mu, \sigma^2/n)$ |
| **Bayes' theorem** | Update beliefs with evidence | $P(H|E) = \frac{P(E|H)P(H)}{P(E)}$ |
| **Monty Hall** | Should you switch doors? | Yes — 2/3 win probability |

> [!example] The Monty Hall problem
> You pick 1 of 3 doors. The host opens a losing door and offers a switch. Initial pick is
> wrong with probability 2/3. Switching wins in those cases — so switching gives 2/3 chance
> of winning. Most people intuitively think it is 50/50.

---

<span class="at-kicker">System Design</span>

## ML System Design Interviews

Senior DS/ML roles often include system design: how would you build a recommendation engine,
a fraud detection system, or a search ranking model at scale?

### Framework: FRATES

| Step | Question | Example |
|------|----------|---------|
| **F**unctional requirements | What does the system do? | Recommend products to users |
| **N**on-functional requirements | Latency? Throughput? Accuracy? | < 100ms, 10K QPS, > 5% lift |
| **A**PI design | What are the endpoints? | `GET /recommend?user_id=123&n=10` |
| **D**ata model | What data do we need? | User profiles, item embeddings, interactions |
| **A**lgorithm | What model / heuristic? | Two-tower neural net + approximate nearest neighbours |
| **T**rade-offs | What do we sacrifice? | Freshness vs. pre-computation latency |
| **E**valuation | How do we measure success? | Online A/B test: CTR, revenue, diversity |
| **S**caling | How does it grow? | Add candidate generation shards, cache embeddings |

> [!tip] Start simple, then scale
> Always begin with a naive baseline (e.g., popularity ranking) and progressively add
> complexity. Interviewers want to see that you can prioritise — not that you know every
> distributed systems trick on day one.

## Interesting facts

- The "Monty Hall" problem is named after the host of the game show *Let's Make a Deal*.
  Marilyn vos Savant's correct solution in Parade magazine (1990) generated 10,000 letters,
  including many from mathematicians who initially disagreed.
- Google's original interview question "How many golf balls fit in a school bus?" tests
> Fermi estimation, not the answer. The correct approach: estimate dimensions, account for
> packing efficiency (~64%), and derive an order-of-magnitude answer.
- SQL window functions were standardised in SQL:2003 but only became mainstream with
> modern databases (BigQuery, PostgreSQL, SQL Server) in the 2010s.

## Interview questions

1. Write a query to find the second-highest salary in each department.
2. Given a stream of numbers, how would you compute a running median?
3. Explain the difference between `RANK()`, `DENSE_RANK()`, and `ROW_NUMBER()`.
4. Design a recommendation system for an e-commerce platform. What metrics matter?
5. Two fair coins are flipped. One is heads. What is the probability the other is heads?
6. How would you detect anomalies in a time series of server response times?

## Related pages

> [!grid]
>
>> [!card] SQL
>> [[../../technology/guides/sql-patterns|SQL Patterns]] · [[../../technology/databases/Databases Home|Databases]]
>
>> [!card] Python
>> [[../../technology/tools/python/python-patterns|Python Patterns]] · [[../../technology/tools/python/pandas-patterns|Pandas Patterns]]
>
>> [!card] Statistics
>> [[../../technology/machine-learning/statistics/random-variables|Random Variables]] · [[../../technology/machine-learning/statistics/probability-distributions|Probability Distributions]] · [[../../technology/machine-learning/statistics/hypothesis-testing|Hypothesis Testing]]
>
>> [!card] ML Design
>> [[../../technology/machine-learning/mlops/deployment-patterns|Deployment Patterns]] · [[../../technology/machine-learning/mlops/ml-pipeline|ML Pipelines]] · [[../../technology/machine-learning/deep-learning/recommender-systems|Recommender Systems]]
