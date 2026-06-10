---
title: A/B Testing
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - A/B Testing
  - AB Testing
  - Split Testing
category: Statistics
tags:
  - Statistics
  - ExperimentDesign
  - DataScience
banner: https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Without data, you're just another person with an opinion."
> <cite>— W. Edwards Deming</cite>

---

<span class="at-kicker">Experimental Design · Causal Inference</span>

# A/B Testing

<p class="at-lead">
A/B testing compares two (or more) versions of a feature to determine which performs better. It works best for incremental changes and relies on hypothesis testing to separate real signal from random noise — establishing causal relationships, not just correlations.
</p>

<span class="at-stat">control vs. experiment</span> &nbsp;·&nbsp; <span class="at-stat">statistical power</span> &nbsp;·&nbsp; <span class="at-stat">OEC</span> &nbsp;·&nbsp; <span class="at-mark">always expose both variants simultaneously to eliminate time-based confounds</span>

<span class="at-kicker">Why A/B Testing</span>

## Advantages

> [!grid|cols2]
>
>> [!card|section]
>> ###### DATA-DRIVEN
>> ### *Data-Driven* Decisions
>> Removes guesswork and reliance on intuition. Provides accurate, data-driven answers quickly. Enables rapid iteration on ideas without subjective debate.
>
>> [!card|section]
>> ###### CAUSAL
>> ### *Causal* Relationships
>> Establishes causal relationships, not just correlations. When properly randomised, an A/B test can attribute changes in metrics directly to the feature change.

## When A/B testing cannot be used

- **Major changes** — new products, complete rebrand, radically different UX. The baseline shifts too much to isolate a single variable.
- **Low-activity data points** — a page with very few purchases requires an impractically long experiment to reach statistical power.

---

<span class="at-kicker">Key Definitions</span>

## Key definitions

| Term | Definition |
| --- | --- |
| **Control** | The subset that sees the original (unchanged) version |
| **Experiment** | The subset that sees the new change |
| **Baseline rate** | `conversions_control / total_control_users` |
| **Effect size** | The difference in metric between Control and Experiment |
| **Practical significance** | Minimum effect size that is meaningful to the business |
| **Confidence interval** | Range of values likely to contain the true population value |
| **Significance level (α)** | Threshold evidence strength to reject H₀ |
| **Sensitivity (1-β)** | Statistical power — probability of detecting a real effect |
| **OEC** | Overall Evaluation Criterion — the primary quantitative objective |

---

<span class="at-kicker">Experiment Design</span>

## Experiment design checklist

1. **Research** — review best practices and results of similar prior tests.
2. **Hypotheses** — define H₀ (no difference) and H₁ (e.g., ≥20% improvement).
3. **Dependent variable** — specify the metric: clicks, items added, purchases.
4. **Design parameters:**
   - *Baseline rate* — what is the current metric value?
   - *Practical significance level* — what change would actually matter?
   - *Confidence level* — typically 95%.
   - *Sensitivity* — desired statistical power, typically 80%.
   - *Duration* — how long to run the experiment.
   - *Sample size* — how many users to expose.
5. Roll out both variants **simultaneously** to eliminate time-based confounds.

> [!tip] Simultaneous rollout is crucial
> Running Control in January and Experiment in February introduces seasonal confounds. Always expose both variants to the same time periods, day-of-week effects, and external events.

---

<span class="at-kicker">Ethics</span>

## Ethical concerns

A/B testing can exploit psychological biases at population scale (optimising for dopamine triggers). Overdoing conversion optimisation can degrade user experience long-term. The OEC should reflect genuine user value, not just short-term click rates.

> [!warning] The metric matters
> Optimising for clicks can lead to clickbait. Optimising for time-on-site can lead to addictive dark patterns. Choose your OEC carefully — it shapes what your product becomes.

---

<span class="at-kicker">Interview Prep</span>

## Interview questions

1. What is the null hypothesis in an A/B test?
2. How do you determine how long to run the test?
3. What is the difference between statistical and practical significance?
4. Why must both variants be exposed simultaneously?
5. What is the OEC and why does it matter?
6. When would you choose multi-armed bandits over a classic A/B test?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Statistics
>> [[hypothesis-testing|Hypothesis Testing]], [[sampling|Sampling]]
>
>> [!card] MLOps
>> [[../mlops/champion-challenger|Champion–Challenger]], [[../mlops/model-evaluation|Model Evaluation]]
