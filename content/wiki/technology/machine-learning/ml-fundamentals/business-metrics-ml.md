---
title: Business Metrics for ML
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Churn Analysis
  - Customer Lifetime Value
  - CLV
  - Market Response Model
  - Business Metrics
category: Machine Learning
tags:
  - MachineLearning
  - BusinessMetrics
  - CustomerAnalytics
  - GrowthHacking
  - ProductMetrics
banner: https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Cost of getting a new customer is often more expensive than retaining existing customers."

---

<span class="at-kicker">ML Fundamentals · Customer Analytics</span>

# Business Metrics for ML

<p class="at-lead">
The biggest predictor of success for any startup or organization is the ability to retain customers. While companies can buy growth through paid marketing, sustainable businesses focus on product-market fit metrics like churn, customer lifetime value, and retention. These metrics drive ML model priorities and feature engineering decisions.
</p>

<span class="at-stat">retention</span> &nbsp;·&nbsp; <span class="at-stat">churn</span> &nbsp;·&nbsp; <span class="at-stat">CLV</span> &nbsp;·&nbsp; <span class="at-mark">the metrics that matter for sustainable growth</span>

<span class="at-kicker">Churn Analysis</span>

## Churn Prediction

**Churn analysis** is the process of identifying the propensity or risk of a customer exiting. **Retention rate** is an indicator of product-market fit (PMF) — poor PMF results in major churn.

### Types of churn

| Type | Description | Example |
|------|-------------|---------|
| **Voluntary Churn** | Customer actively switches to a competitor | User cancels subscription for alternative |
| **Involuntary Churn** | Customer leaves due to inability to pay | Failed payment, account expiration |

> [!warning] The growth trap
> Companies can always buy growth via paid marketing, but this creates a vicious cycle. The company must keep buying growth to maintain new customer flow, inevitably leading to lower product focus and a deteriorating product over time.

### Churn prediction workflow

> [!grid|cols3]
>
>> [!card|section]
>> ###### EXPLORATION
>> ### Data *Exploration*
>> Check for class imbalance. Use `groupby` with segmentation variables to understand churn patterns across customer types.
>> ```python
>> df.groupby(['Type','churn_Column']).size()
>>   .unstack().plot(kind='bar', stacked=True)
>> ```
>
>> [!card|section]
>> ###### PREPROCESSING
>> ### Feature *Preprocessing*
>> Handle categorical columns with Label Encoding. Remove redundant columns with no significance. Create standardized feature matrix for modeling.
>> ```python
>> from sklearn.preprocessing import LabelEncoder, StandardScaler
>> le = LabelEncoder()
>> X_encoded = le.fit_transform(df['category'])
>> scaler = StandardScaler()
>> X_scaled = scaler.fit_transform(X)
>> ```
>
>> [!card|section]
>> ###### VALIDATION
>> ### Stratified *Validation*
>> Use stratified k-fold to preserve class distribution. Evaluate with confusion matrix and classification report (precision, recall, F1).

### Key implementation steps

1. **Data Exploration**
   - Check for class imbalance
   - Segment analysis by customer type, tenure, plan

2. **Categorical Handling**
   ```python
   import sklearn
   LE = sklearn.preprocessing.LabelEncoder()
   encoded = LE.fit_transform(df['column_name'])
   ```

3. **Feature Matrix Creation**
   ```python
   X = df.drop(['customer_id', 'churn_flag'], axis=1)
   y = df['churn_flag']
   ```

4. **Standardization**
   ```python
   scaler = preprocessing.StandardScaler()
   X_scaled = scaler.fit_transform(X)
   ```

5. **Stratified K-Fold**
   - Ensures each fold preserves class distribution
   - Critical for imbalanced churn datasets

6. **Model Evaluation**
   ```python
   from sklearn import metrics
   confusion_matrix = metrics.confusion_matrix(y_true, y_pred)
   report = metrics.classification_report(y_true, y_pred)
   ```

7. **Feature Importance**
   ```python
   # After model training
   importances = model.feature_importances_
   ```

---

<span class="at-kicker">Customer Lifetime Value</span>

## CLV (Customer Lifetime Value)

**Customer Lifetime Value** represents the total amount of money a customer is expected to spend on your products during their entire relationship with your business.

> [!info] Why CLV matters
> CLV is a gauge of profit associated with a customer relationship, guiding how much you should invest to maintain that relationship.

### Value of CLV analysis

> [!grid|cols2]
>
>> [!card|section]
>> ###### ACQUISITION
>> ### Acquisition *Spend*
>> How much can you spend to acquire a similar customer and still have a profitable relationship?
>
>> [!card|section]
>> ###### PRODUCT STRATEGY
>> ### Product *Insights*
>> What products do high-CLV customers want? Which products have the highest profitability?
>
>> [!card|section]
>> ###### SEGMENTATION
>> ### Customer *Segments*
>> Identify the most profitable types of clients and tailor experiences to them.
>
>> [!card|section]
>> ###### RETENTION
>> ### Retention *Focus*
>> Prioritize retention efforts on high-CLV segments for maximum ROI.

### CLV formula approaches

| Approach | Formula | Use case |
|----------|---------|----------|
| **Historic CLV** | $\sum_{t=0}^{n} (Revenue_t - Cost_t)$ | Simple retrospective analysis |
| **Predictive CLV** | $\frac{Margin \times Purchase\_Freq}{Churn\_Rate}$ | Forward-looking valuation |
| **Cohort-based** | Average revenue per cohort × expected lifetime | Segment-level analysis |

> [!example] Predictive CLV calculation
> ```
> Monthly margin: $50
> Purchase frequency: 2/month  
> Churn rate: 5%/month
> CLV = (50 × 2) / 0.05 = $2,000
> ```

---

<span class="at-kicker">Market Response Models</span>

## Uplift Modeling

**Market response models** help corporations understand how consumers individually and collectively respond to marketing activities and how competitors interact.

> [!info] Model requirements
> - Cross-functional perspective
> - Include short-term and long-term effects
> - Consider capital market impacts

### Uplift metrics

| Metric | Definition | Formula |
|--------|------------|---------|
| **Conversion Uplift** | Lift in conversion rate | Test CR - Control CR |
| **Order Uplift** | Additional orders | Conversion Uplift × Test Conversions |
| **Revenue Uplift** | Additional revenue | Order Uplift × Average Order Value |

### Uplift modeling: The four customer types

> [!grid|cols2]
>
>> [!card|section]
>> ###### TR
>> ### Treatment *Responders*
>> Customers who purchase **only if** they receive an offer. These are your target segment — the offer drives conversion.
>> **Strategy**: Target aggressively
>
>> [!card|section]
>> ###### TN
>> ### Treatment *Non-Responders*
>> Customers who **won't purchase** in any case. The offer has no effect.
>> **Strategy**: Don't waste marketing spend
>
>> [!card|section]
>> ###### CR
>> ### Control *Responders*
>> Customers who purchase **without any offer**. They would convert organically.
>> **Strategy**: Don't discount — you'd reduce margins unnecessarily
>
>> [!card|section]
>> ###### CN
>> ### Control *Non-Responders*
>> Customers who **will not purchase** if they don't receive an offer. The offer is essential.
>> **Strategy**: Target with compelling offers

### Uplift score formula

$$Uplift\_Score = P_{TR} + P_{CN} - P_{TN} - P_{CR}$$

Where:
- Higher $P_{TR}$ (Treatment Responders) → better uplift
- Higher $P_{CN}$ (Control Non-Responders) → better uplift
- Lower $P_{TN}$ and $P_{CR}$ → better efficiency

### Uplift modeling workflow

1. **Customer classification** — Assign each customer to one of four types
2. **Multi-class classification** — Train model to predict customer type
3. **Probability scoring** — Obtain $P_{TR}$, $P_{TN}$, $P_{CR}$, $P_{CN}$ for each customer
4. **Uplift calculation** — Apply formula to compute uplift score
5. **Cohort selection** — Target customers with highest uplift values

> [!tip] Targeting strategy
> Prioritize **Treatment Responders** (TR) and **Control Non-Responders** (CN). Avoid targeting Control Responders (CR) — they convert without the cost of an offer.

---

<span class="at-kicker">Product Metrics</span>

## Key Product Metrics

| Metric | Definition | ML Application |
|--------|------------|----------------|
| **NPS** | Net Promoter Score — customer satisfaction | Predict promoters vs. detractors |
| **DAU/MAU** | Daily/Monthly Active Users — engagement | Predict engagement drop-off |
| **Retention Rate** | % customers retained over period | Churn prediction models |
| **CAC** | Customer Acquisition Cost | Optimize CLV/CAC ratio |
| **PMF** | Product-Market Fit | Correlate with retention metrics |

---

<span class="at-kicker">Business KPIs vs Software KPIs</span>

## KPI Categories

| Business KPIs | Software KPIs |
|---------------|---------------|
| Return on Investment (ROI) | Page Views |
| Earnings before interest and taxes (EBIT) | User Registration |
| Employee Turnover | Clickthroughs |
| Customer Churn | Session Duration |

> [!warning] KPIs are not goals
> KPIs are decided based on the goal. Example:
> - **Goal**: Increase turnover for online store
> - **KPI**: Percentage of conversions on website

---

<span class="at-kicker">Interview Questions</span>

## Interview Questions

1. Why is retention rate a better indicator than acquisition for PMF?
2. How would you build a churn prediction model for a subscription business?
3. What is the difference between voluntary and involuntary churn?
4. How do you calculate CLV and why does it matter for acquisition spend?
5. What are the four customer types in uplift modeling?
6. Why shouldn't you target Control Responders with offers?
7. How would you balance short-term conversion lift vs. long-term CLV?

---

## Related pages

> [!grid]
>
>> [!card] Customer Analytics
>> [[ab-testing|A/B Testing]] · [[multi-armed-bandits|Multi-Armed Bandits]] · [[../../cloud/gcp/analytics/bigquery|BigQuery Analytics]]
>
>> [!card] ML Fundamentals
>> [[evaluation-metrics|Evaluation Metrics]] · [[classification|Classification]] · [[regression|Regression]]
>
>> [!card] Growth & Product
>> [[recommendation-systems|Recommendation Systems]] · [[personalization|Personalization]]
>
>> [!card] Business Intelligence
>> [[../../cloud/gcp/looker|Looker]] · [[../../data-engineering/etl|ETL Pipelines]]
