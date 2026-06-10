---
title: Hypothesis Testing
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Hypothesis Testing
  - Statistical Testing
  - Z-Test
  - Chi-Squared Test
category: Statistics
tags:
  - Statistics
  - Mathematics
  - DataScience
banner: https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "To consult the statistician after an experiment is finished is often merely to ask him to conduct a post mortem examination."
> <cite>— Ronald Fisher</cite>

---

<span class="at-kicker">Statistics · Inference</span>

# Hypothesis Testing

<p class="at-lead">
Hypothesis testing is a mathematical method of proof by contradiction: to prove a phenomenon A, assume it to be false, then contradict the assumption, thereby concluding A is true. It answers: given a sample and an apparent effect, what is the probability of seeing such an effect purely by chance?
</p>

<span class="at-stat">H₀ · H₁</span> &nbsp;·&nbsp; <span class="at-stat">p-value · α</span> &nbsp;·&nbsp; <span class="at-stat">Z-test · χ² test</span> &nbsp;·&nbsp; <span class="at-mark">the CLT is why Z-tests and t-tests work</span>

<span class="at-kicker">Core Components</span>

## Core components

Three inputs are required for any hypothesis test:

1. **Test statistic** — data collected to test the claim.
2. **Null hypothesis (H₀)** — the "status quo" assumption; assumes no difference or no effect.
3. **Alternative hypothesis (H₁)** — what we believe is true if H₀ is rejected.

## Types of tests

| Type | H₁ form | Rejection region |
| --- | --- | --- |
| **Two-sided / two-tailed** | "x ≠ y" | Both tails |
| **One-sided / one-tailed** | "x > y" or "x < y" | One tail |

---

<span class="at-kicker">P-Value & Significance</span>

## P-Value

The **p-value** answers: *does the evidence make H₀ look ridiculous?*

- A **small p-value** (< significance level α) means the observed result is unlikely under H₀ → **reject H₀**.
- Calculated by summing probabilities in the tail(s) of the test distribution.

> [!info] What p-values actually mean
> A p-value of 0.03 means: *if H₀ were true, we would see data this extreme only 3% of the time by chance*. It does **not** mean there's a 97% chance H₀ is false.

## Significance level (α)

α is the threshold for statistical significance. Commonly set to **0.05** (5%). It controls the Type I error rate (false positive — rejecting a true H₀).

> [!warning] α = 0.05 is a convention, not a law
> In physics, α = 5σ (~0.0000003) is required for particle discovery. In social science, α = 0.10 is sometimes accepted. The choice depends on the cost of false positives vs. false negatives.

---

<span class="at-kicker">Error Types</span>

## Type I and Type II errors

| Decision \ Reality | H₀ is true | H₀ is false |
| --- | --- | --- |
| **Reject H₀** | Type I error (α) — False Positive | ✓ Correct (Power = 1−β) |
| **Fail to reject H₀** | ✓ Correct | Type II error (β) — False Negative |

> [!example] Medical testing analogy
> - **H₀**: Patient does not have cancer.
> - **Type I error (α)** — Tell a healthy patient they have cancer. Emotional cost, unnecessary treatment.
> - **Type II error (β)** — Tell a sick patient they are healthy. Missed treatment, potentially fatal.
>
> In cancer screening, we usually prefer higher sensitivity (lower β) even at the cost of more false positives.

## Confidence interval

A **confidence interval** is a range of values computed from sample data that is likely to contain the true population parameter. At α = 0.05, we construct a 95% CI.

---

<span class="at-kicker">CLT & LLN</span>

## Central Limit Theorem (CLT)

> The CLT states that if you have a population with mean μ and standard deviation σ and take sufficiently large random samples, the **distribution of sample means** will be approximately normally distributed — regardless of the source population's shape — provided n > 30.

Sampling distribution parameters: mean = μ, variance = σ²/n.

The CLT is why Z-tests and t-tests work: they assume the sampling distribution of the mean is normal.

## Law of Large Numbers (LLN)

As the number of trials of a random process increases, the average of the results **converges to the expected (theoretical) value**.

> [!warning] Gambler's Fallacy
> The incorrect belief that LLN applies to *small* samples. It does not — the LLN is a limiting result only. A fair coin is still 50/50 even after 10 heads in a row.

---

<span class="at-kicker">Z-Test</span>

## Z-Test

Used when measuring whether a sample comes from a specified population. Requires **n > 30** and known population σ.

$$Z = \frac{\bar{x} - \mu}{SE}, \quad SE = \frac{\sigma}{\sqrt{n}}$$

For comparing two populations:

$$Z = \frac{\mu_1 - \mu_2}{\sqrt{\dfrac{\sigma_1^2}{n_1} + \dfrac{\sigma_2^2}{n_2}}}$$

> [!info] Interpreting Z-scores
> The Z-score represents the number of standard deviations the observed difference is from the mean. Higher |Z| → lower p-value → stronger evidence against H₀.

> [!tip] Computing p-values from Z
> Use `scipy.stats.norm.sf(z_score)` for one-tailed p-values, or `2 * norm.sf(abs(z_score))` for two-tailed.

### Z-Test for conversion rates

Chi-squared is generally preferred, but Z-test can also be used:

1. Assign numeric values to conversion outcomes to obtain μ.
2. Compute variance per group: `var = μ × (1 - μ)`.
3. Plug into the two-population Z formula above.

Note: this approach yields a lower p-value than the χ² test.

---

<span class="at-kicker">Chi-Squared Test</span>

## Chi-Squared Test (χ²)

Used for **nominal / categorical** variables (e.g., A/B conversion rates, independence between two categorical variables).

**Steps:**

1. Compute the average conversion ratio.
2. Build the expected-value matrix T based on that ratio.
3. Compute: $\chi^2 = \sum \dfrac{(O - E)^2}{E}$ where E = expected, O = observed.
4. Apply `chi2.sf(chi2_stat, df)` to get the p-value.

> [!example] Chi-squared worked example — independence test
> A survey asks 200 people about their preference for tea vs. coffee, broken down by gender:
>
> | | Tea | Coffee | Total |
> | --- | --- | --- | --- |
> | **Male** | 30 | 70 | 100 |
> | **Female** | 50 | 50 | 100 |
> | **Total** | 80 | 120 | 200 |
>
> **H₀**: Drink preference is independent of gender.
> **H₁**: Drink preference depends on gender.
>
> Expected values (row total × column total / grand total):
> - Male/Tea: (100 × 80) / 200 = 40
> - Male/Coffee: (100 × 120) / 200 = 60
> - Female/Tea: (100 × 80) / 200 = 40
> - Female/Coffee: (100 × 120) / 200 = 60
>
> χ² = (30−40)²/40 + (70−60)²/60 + (50−40)²/40 + (50−60)²/60 = 8.333
>
> With df = (2−1) × (2−1) = 1, the p-value ≈ 0.0039.
>
> At α = 0.05, we **reject H₀** — drink preference is associated with gender.

## Interesting facts

- The **t-test** is preferred when σ is unknown or n < 30; it uses the t-distribution (fatter tails than normal).
- William Sealy Gosset (pen name "Student") developed the t-distribution while working at Guinness to improve barley selection — hence *Student's t-test*.
- Gosset published under a pseudonym because Guinness considered statistical methods a trade secret.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What are the three inputs to any hypothesis test?
2. When do you use a one-tailed vs. two-tailed test?
3. What does a p-value of 0.03 actually mean?
4. Why is the CLT important for hypothesis testing?
5. Z-test vs. t-test — when do you use each?
6. What is the difference between Type I (α) and Type II (β) error?
7. Can a result be statistically significant but not practically significant?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Inference
>> [[ab-testing|A/B Testing]], [[sampling|Sampling]], [[probability-distributions|Probability Distributions]]
>
>> [!card] Descriptive
>> [[descriptive-statistics|Descriptive Statistics]]
>
>> [!card] ML Application
>> [[../ml-fundamentals/evaluation-metrics|Evaluation Metrics]], [[../mlops/champion-challenger|Champion–Challenger]]
>
>> [!card] Paradoxes
>> [[../../../../paradoxes/probability-paradoxes|False Positive Paradox]] · [[../../../../paradoxes/statistical-paradoxes|Lindley's Paradox]]
