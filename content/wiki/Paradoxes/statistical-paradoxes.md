---
title: Statistical Paradoxes
Created: 2026-06-11
date modified: Friday, June 11th 2026, 12:00:00 pm
aliases: [simpsons-paradox, accuracy-paradox, berksons-paradox, lindleys-paradox, friendship-paradox, abelsons-paradox, freedmans-paradox, will-rogers-phenomenon]
category: Paradox
tags: [Paradox, Statistics, Mathematics, Data-Science, Machine-Learning]
banner:
publish: true
source: https://en.wikipedia.org/wiki/List_of_paradoxes
---

<span class="at-kicker">STATISTICS</span>

# Statistical Paradoxes

<p class="at-lead">Statistical reasoning is uniquely treacherous: every algebraic step can be correct, every assumption explicitly stated, and yet the conclusion still feels wrong. These paradoxes reveal how aggregation, selection, and scale can turn sound mathematics into counter-intuitive results.</p>

> [!grid]
>
>> [!card] **Abelson's paradox**
>> Researchers often quote effect sizes as proof that a finding "matters."
>>
>> **The bite:** A large effect size may have zero practical importance, while a tiny one can be economically or medically decisive. The number alone is silent on real-world relevance.
>>
>> **Resolution:** Always pair effect sizes with domain context, cost–benefit thresholds, and confidence intervals before claiming importance.
>
>> [!card] **Accuracy paradox**
>> A classifier reports <span class="at-stat">99%</span> accuracy on a test set.
>>
>> **The bite:** In a 99:1 class imbalance, a model that never predicts the minority class still scores 99% accuracy while capturing exactly <span class="at-stat">0%</span> of the cases you care about. Higher accuracy can mean lower predictive power.
>>
>> **Resolution:** Replace accuracy with precision, recall, F1, or AUC-ROC when classes are imbalanced. See the deep dive below and [[imbalanced-classification]].
>
>> [!card] **Berkson's paradox**
>> A hospital study finds that diabetes and hypertension are negatively correlated.
>>
>> **The bite:** In the general population the two conditions are statistically independent. Conditioning on hospital admission (a collider) creates a spurious negative association.
>>
>> **Resolution:** Selection bias can invert relationships. Always audit how your sample was recruited and whether you are conditioning on a common effect. See the worked example below.
>
>> [!card] **Freedman's paradox**
>> Stepwise regression or exhaustive feature screening is run on a high-dimensional dataset.
>>
>> **The bite:** Predictors that have absolutely no true relationship with the outcome can emerge as "highly significant" purely by chance when enough variables are tested.
>>
>> **Resolution:** Guard against multiple-comparison inflation with cross-validation, information criteria (AIC/BIC), or regularization techniques such as LASSO.
>
>> [!card] **Friendship paradox**
>> Most people feel they have a normal number of friends.
>>
>> **The bite:** For almost everyone, their friends have more friends than they do. Your friends are not a random sample — popular people are over-represented simply because they have more friendship slots.
>>
>> **Resolution:** A mathematical necessity, not a psychological illusion. High-degree nodes are counted more often in any friend-of-friend tally.
>
>> [!card] **Inspection paradox (Bus waiting time paradox)**
>> Buses arrive with an average inter-arrival time of 10 minutes.
>>
>> **The bite:** A passenger arriving at a random instant will, on average, wait longer than 5 minutes. The operator sees the schedule; the rider sees the gaps.
>>
>> **Resolution:** Random arrival times bias observation toward longer intervals (length-biased sampling). The rider's expected wait exceeds half the mean interval for any non-deterministic schedule.
>
>> [!card] **Lindley's paradox**
>> A massive dataset is used to test a point null hypothesis.
>>
>> **The bite:** With enough data, even an effect size of 0.001 is rejected at p < 0.001, producing a "highly significant" result that is practically meaningless.
>>
>> **Resolution:** Statistical significance is not practical significance. Report effect sizes, confidence intervals, or switch to equivalence testing. See the deep dive below and [[hypothesis-testing]].
>
>> [!card] **Low birth weight paradox**
>> Low birth weight and smoking both correlate with higher infant mortality.
>>
>> **The bite:** Among low-birth-weight babies, those born to smoking mothers have a *lower* mortality rate than low-birth-weight babies of non-smokers.
>>
>> **Resolution:** A special case of [[simpsons-paradox|Simpson's paradox]]. Smoking causes low birth weight through a mechanism that is less lethal than other causes of low birth weight, creating a reversed association within the conditioned subgroup.
>
>> [!card] **Simpson's paradox / Yule–Simpson effect**
>> A new drug outperforms the standard therapy in every age group tested.
>>
>> **The bite:** When the trial data are pooled, the standard therapy appears superior overall. The aggregate trend is the exact opposite of every subgroup trend.
>>
>> **Resolution:** A lurking confounder (e.g., disease severity, demographic imbalance) drives the reversal. See the deep dive below for a 2×2 table and its impact on [[machine-learning]] feature selection and A/B testing.
>
>> [!card] **Will Rogers phenomenon**
>> An entry is moved from one group to another because it is below the first group's average.
>>
>> **The bite:** The move can raise the average of *both* groups simultaneously.
>>
>> **Resolution:** Not a logical contradiction. If the moved entry was below group A's mean but above group B's mean, both averages increase after the transfer.

## Deep dive: Simpson's Paradox

The kidney-stone treatment dataset (a real historical example) shows how a trend reverses on aggregation:

| Stone size | Treatment A | Treatment B |
| :--- | :--- | :--- |
| Small | 81 / 87 (<span class="at-stat">93.1%</span>) | 234 / 270 (86.7%) |
| Large | 192 / 263 (73.0%) | 55 / 80 (<span class="at-stat">68.8%</span>) |
| **Overall** | **273 / 350 (78.0%)** | **289 / 350 (82.6%)** |

Treatment A wins in *both* subgroups but loses overall. The confounder is stone severity: Treatment A was used more often on the harder large-stone cases, while Treatment B was given more often to easier small-stone cases.

**Why it matters for [[machine-learning]] and A/B testing:**  
When features are selected from aggregated data, a predictor that is genuinely beneficial in every segment can appear harmful in the combined dataset. Always stratify analyses and check for confounders before trusting pooled metrics.

## Deep dive: Accuracy Paradox

Consider a fraud-detection dataset with a <span class="at-stat">99:1</span> class ratio (99% legitimate, 1% fraudulent).

| Metric | Always-"Legitimate" Model | Ideal Model |
| :--- | :--- | :--- |
| Accuracy | <span class="at-stat">99%</span> | 97% |
| Recall (fraud) | <span class="at-stat">0%</span> | 95% |
| Precision (fraud) | undefined | 94% |

The naive model "wins" on accuracy while being completely useless. This is why [[imbalanced-classification]] pipelines rely on stratified sampling, class-weighted loss, oversampling (SMOTE), and metrics like AUC-ROC, average precision, or Cohen's kappa.

## Deep dive: Lindley's Paradox

Classical [[hypothesis-testing]] compares a point null (e.g., effect = 0) against a two-sided alternative. As sample size grows, the standard error shrinks proportionally to 1/√n. A true effect of 0.001 standard deviations becomes detectable at any conventional α level once n is large enough.

**The tension:**  
- **Frequentist p-value:** Reject the null → "highly significant."  
- **Posterior probability (Bayesian):** With a reasonable prior, the data may actually favor the null because the tiny effect is better explained by sampling noise.

**Practical takeaway:** Pre-register a minimum practically important effect size (MIE), report confidence intervals, or use equivalence tests (TOST) rather than pure point-null testing.

## Deep dive: Berkson's Paradox

Suppose diabetes (D) and hypertension (H) are independent in the general population, each with prevalence 10%. A hospital only admits patients who have *at least one* condition.

| | Hypertension | No hypertension |
| :--- | :--- | :--- |
| **Diabetes** | Admitted | Admitted |
| **No diabetes** | Admitted | **Not admitted** |

Among admitted patients:

- P(H | D) ≈ 0.10 (the base rate, because D and H are independent)
- But because the "No diabetes + No hypertension" cell is completely removed, the hospital sample forces a negative correlation: knowing a patient has diabetes makes hypertension *less* likely in that restricted sample.

This is **conditioning on a collider**. It appears in case-control studies, online ad targeting (where exposure to one campaign correlates negatively with another only because both target the same user pool), and [[data-cleaning]] pipelines that filter out "uninteresting" rows.

## Interesting facts

- The **Friendship Paradox** was exploited during the 1970s flu pandemic to design efficient vaccination strategies: instead of vaccinating random individuals, researchers vaccinated a random sample of people's friends, reaching higher-degree nodes faster.
- **Will Rogers** originally quipped about migration during the Oklahoma dust bowl: "When the Okies left Oklahoma and moved to California, they raised the average intelligence level in both states."

## Interview questions

- Why can a model with 99% accuracy be completely useless in production?
- Walk me through Simpson's paradox with a 2×2 table. How does it affect A/B testing?
- What is the difference between statistical significance and practical significance, and why does Lindley's paradox matter at scale?
- Explain Berkson's paradox and give a real-world example of conditioning on a collider.

## Related pages

> [!grid]
>
>> [!card] Sister concepts
>> - [[probability-paradoxes]]
>> - [[mathematical-paradoxes]]
>
>> [!card] Vault links
>> - [[descriptive-statistics]]
>> - [[hypothesis-testing]]
>> - [[imbalanced-classification]]
>> - [[machine-learning]]
>> - [[time-series]]
>> - [[data-cleaning]]
