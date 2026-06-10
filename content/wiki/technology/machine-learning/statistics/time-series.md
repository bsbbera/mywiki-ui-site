---
title: Time Series Analysis
created:
  - 2026-06-08
date modified: Tuesday, June 9th 2026, 6:00:00 pm
aliases:
  - Time Series
  - ARIMA
  - Exponential Smoothing
  - Forecasting
  - Time Series Forecasting
category: Statistics
tags:
  - Statistics
  - TimeSeries
  - Forecasting
  - ARIMA
  - DataScience
banner: https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "Prediction is very difficult, especially about the future."
> <cite>— Niels Bohr</cite>

---

<span class="at-kicker">Statistics · Forecasting</span>

# Time Series Analysis

<p class="at-lead">
Time series analysis deals with data points collected or recorded at successive time intervals. Unlike cross-sectional data, time series observations are not independent — temporal autocorrelation is both a challenge to model and a source of predictive signal. ARIMA and exponential smoothing remain foundational techniques, while modern deep learning approaches (RNNs, Transformers) extend these principles to complex patterns.
</p>

<span class="at-stat">trend</span> &nbsp;·&nbsp; <span class="at-stat">seasonality</span> &nbsp;·&nbsp; <span class="at-stat">ARIMA(p,d,q)</span> &nbsp;·&nbsp; <span class="at-mark">forecasting the future from the past</span>

<span class="at-kicker">Time Series Components</span>

## Decomposing Time Series

Any time series can be decomposed into systematic components:

$$Y_t = T_t + S_t + C_t + \varepsilon_t$$

Where:
- $T_t$ = **Trend** — long-term direction (up/down/stable)
- $S_t$ = **Seasonality** — repeating patterns at fixed intervals
- $C_t$ = **Cyclical** — fluctuations without fixed frequency
- $\varepsilon_t$ = **Noise** — random, unpredictable variation

> [!grid|cols2]
>
>> [!card|section]
>> ###### TREND
>> ### *Trend*
>> Long-term movement in the data. Can be linear, exponential, or follow a more complex function. Often removed via differencing or detrending.
>
>> [!card|section]
>> ###### SEASONALITY
>> ### *Seasonality*
>> Regular, periodic fluctuations. Daily, weekly, monthly, or yearly patterns. Temperature by month, sales by quarter, traffic by hour.
>
>> [!card|section]
>> ###### CYCLICAL
>> ### *Cyclical*
>> Patterns that repeat but without fixed frequency. Business cycles, economic expansions and contractions. Often harder to predict than seasonality.
>
>> [!card|section]
>> ###### NOISE
>> ### *Noise*
>> Irregular, random component. White noise has no autocorrelation. After extracting trend, seasonality, and cycles, residuals should resemble noise.

### Statistical operations on time series

| Analysis | Purpose | Application |
|----------|---------|-------------|
| **Maximum/Minimum** | Peak detection | Resource planning |
| **Moving Average** | Smoothing, trend extraction | Noise reduction |
| **Variance** | Volatility measurement | Risk assessment |
| **Autocorrelation** | Temporal dependence | Model selection |
| **Covariance** | Cross-series relationships | Multivariate models |

---

<span class="at-kicker">ARIMA Models</span>

## ARIMA: Autoregressive Integrated Moving Average

**ARIMA** is the workhorse of time series forecasting, combining three components:

### The ARIMA(p,d,q) notation

| Component | Symbol | Description |
|-----------|--------|-------------|
| **AR** | $p$ | Autoregressive order — uses $p$ past values |
| **I** | $d$ | Differencing order — makes series stationary |
| **MA** | $q$ | Moving average order — uses $q$ past forecast errors |

### Autoregressive (AR) component

The autoregressive component models the target variable using its own lagged values:

$$Y_t = c + \phi_1 Y_{t-1} + \phi_2 Y_{t-2} + ... + \phi_p Y_{t-p} + \varepsilon_t$$

> [!example] AR(1) model
> $$Y_t = 0.5 + 0.7 Y_{t-1} + \varepsilon_t$$
> Today's value depends on yesterday's value plus noise.

### Integrated (I) component

Differencing transforms non-stationary series into stationary ones:

| Order | Operation | Result |
|-------|-----------|--------|
| $d=0$ | No differencing | Original series |
| $d=1$ | First difference: $\Delta Y_t = Y_t - Y_{t-1}$ | Removes linear trend |
| $d=2$ | Second difference: $\Delta^2 Y_t$ | Removes quadratic trend |

> [!info] Stationarity requirement
> ARIMA requires the series to be stationary (constant mean, variance, autocorrelation over time). Differencing achieves this by removing trends.

### Moving Average (MA) component

The moving average component models the error term as a linear combination of past forecast errors:

$$Y_t = \mu + \varepsilon_t + \theta_1 \varepsilon_{t-1} + \theta_2 \varepsilon_{t-2} + ... + \theta_q \varepsilon_{t-q}$$

### ACF and PACF for model identification

| Pattern | Indicates | Suggests |
|---------|-----------|----------|
| ACF tails off, PACF cuts off after lag $p$ | AR signature | AR($p$) model |
| ACF cuts off after lag $q$, PACF tails off | MA signature | MA($q$) model |
| Both tail off | ARMA signature | ARMA($p$,$q$) or ARIMA |

---

<span class="at-kicker">Stationarity Testing</span>

## Stationarity and Unit-Root Tests

A **stationary** time series has constant statistical properties over time: constant mean, constant variance, and constant autocovariance structure. Stationarity is a prerequisite for ARIMA and many classical forecasting models.

### Properties of stationary data

| Property | Description | Why it matters |
|----------|-------------|----------------|
| **Constant mean** | No long-term trend or systematic shift | Model parameters remain stable |
| **Constant variance** | Spread around mean does not change | Homoscedastic errors; reliable intervals |
| **Constant autocovariance** | Correlation at each lag is time-invariant | Parameters can be estimated from any window |
| **No seasonality** | No repeating cycles at fixed intervals | Seasonality must be modeled separately |

### Non-stationary data

Non-stationary series exhibit **changing mean** (trends, shifts), **changing variance** (volatility clustering), or **seasonality**. Attempting to fit ARIMA to non-stationary data yields spurious regressions and unreliable forecasts.

### Augmented Dickey-Fuller (ADF) test

The **ADF test** tests the null hypothesis that the series has a unit root (i.e., is non-stationary):

- **H₀**: The series has a unit root → **non-stationary**
- **H₁**: The series is stationary (or trend-stationary)

$$\Delta Y_t = \alpha + \beta t + \gamma Y_{t-1} + \sum_{i=1}^{p} \delta_i \Delta Y_{t-i} + \varepsilon_t$$

| ADF statistic | p-value | Decision |
|---------------|---------|----------|
| More negative than critical value | < 0.05 | **Reject H₀** — series is stationary |
| Less negative than critical value | ≥ 0.05 | **Fail to reject H₀** — series is non-stationary |

> [!tip] ADF in Python
> ```python
> from statsmodels.tsa.stattools import adfuller
> result = adfuller(series)
> print(f'ADF Statistic: {result[0]:.4f}')
> print(f'p-value: {result[1]:.4f}')
> ```

> [!warning] Low power near borderline
> The ADF test can have low power when the series is close to stationary. Always complement with the **KPSS test** (null hypothesis reversed: H₀ = stationary) and visual inspection.

### Achieving stationarity

| Technique | Use case | Formula |
|-----------|----------|---------|
| **Differencing** | Remove trend | $\Delta Y_t = Y_t - Y_{t-1}$ |
| **Log transform** | Stabilise variance | $\log(Y_t)$ |
| **Seasonal differencing** | Remove seasonality | $\Delta_s Y_t = Y_t - Y_{t-s}$ |
| **Detrending** | Remove deterministic trend | Regress on time, subtract fitted values |

> [!example] From non-stationary to stationary
> Monthly airline passenger counts show an upward trend and increasing variance. A **log transform** stabilises variance; **first differencing** removes trend. The resulting series passes the ADF test and is ready for ARIMA modeling.

---

<span class="at-kicker">Exponential Smoothing</span>

## Exponential Smoothing (ETS)

**Exponential Smoothing** produces forecasts using weighted averages of past observations, with **exponentially decreasing weights** for older observations.

### Simple exponential smoothing

$$\hat{Y}_{t+1} = \alpha Y_t + (1-\alpha) \hat{Y}_t$$

Where $\alpha$ (smoothing parameter) is between 0 and 1:
- $\alpha \approx 1$: Fast adaptation, responsive to recent changes
- $\alpha \approx 0$: Slow adaptation, smooths out noise

### Holt's method (trend)

Extends simple smoothing to capture trend:

$$\begin{aligned}
\text{Level: } & L_t = \alpha Y_t + (1-\alpha)(L_{t-1} + T_{t-1}) \\
\text{Trend: } & T_t = \beta(L_t - L_{t-1}) + (1-\beta)T_{t-1} \\
\text{Forecast: } & \hat{Y}_{t+h} = L_t + h \cdot T_t
\end{aligned}$$

### Holt-Winters method (trend + seasonality)

Adds seasonal component:

$$\hat{Y}_{t+h} = L_t + h \cdot T_t + S_{t+h-m}$$

Where $m$ = seasonal period and $S$ = seasonal indices.

---

<span class="at-kicker">Model Selection</span>

## When to Use Each Approach

| Situation | Recommended Model | Rationale |
|-----------|-------------------|-----------|
| **No trend, no seasonality** | Simple exponential smoothing | Minimal complexity |
| **Trend, no seasonality** | Holt's method / ARIMA(0,1,1) | Captures direction |
| **Trend and seasonality** | Holt-Winters / SARIMA | Full decomposition |
| **Complex patterns** | Deep learning (RNN, Transformer) | Non-linear relationships |
| **Multiple series** | VAR, hierarchical models | Cross-series dependencies |

> [!grid|cols3]
>
>> [!card|section]
>> ###### CLASSICAL
>> ### ARIMA *Family*
>> - Interpretable parameters
>> - Requires stationarity
>> - Good for medium-term forecasts
>> - Automatic selection via auto_arima
>
>> [!card|section]
>> ###### SMOOTHING
>> ### Exponential *Smoothing*
>> - Handles trend/seasonality
>> - Intuitive parameters
>> - Good for short-term forecasts
>> - Fast computation
>
>> [!card|section]
>> ###### DEEP LEARNING
>> ### Neural *Networks*
>> - RNNs, LSTMs for sequences
>> - Transformers for long-range dependencies
>> - Can capture complex non-linear patterns
>> - Requires more data

---

<span class="at-kicker">Modern Approaches</span>

## Deep Learning for Time Series

### Sequence models evolution

> [!info] From RNNs to Transformers
> - **RNNs** pass previous output into next input, creating sequential modeling
> - **LSTMs** introduce memory gates to address vanishing gradients
> - **Transformers** use attention mechanisms for parallel processing and unlimited context

| Model | Strengths | Weaknesses |
|-------|-----------|------------|
| **RNN** | Sequential structure, simple | Vanishing gradients, no parallelization |
| **LSTM** | Long-term memory, gates | Still sequential, limited transfer learning |
| **Transformer** | Parallel processing, attention | Quadratic memory with sequence length |

---

<span class="at-kicker">Best Practices</span>

## Time Series Modeling Guidelines

> [!tip] Modeling workflow
> 1. **Visualize** — Plot the series, identify patterns
> 2. **Test stationarity** — ADF test, KPSS test
> 3. **Transform if needed** — Differencing, log transform
> 4. **Identify model** — ACF/PACF analysis
> 5. **Fit and validate** — Train/test split, rolling validation
> 6. **Evaluate** — MAE, RMSE, MAPE metrics
> 7. **Forecast** — Generate predictions with confidence intervals

### Evaluation metrics

| Metric | Formula | Best for |
|--------|---------|----------|
| **MAE** | $\frac{1}{n}\sum|Y_t - \hat{Y}_t|$ | Interpretable, robust to outliers |
| **RMSE** | $\sqrt{\frac{1}{n}\sum(Y_t - \hat{Y}_t)^2}$ | Penalizes large errors |
| **MAPE** | $\frac{100\%}{n}\sum|\frac{Y_t - \hat{Y}_t}{Y_t}|$ | Scale-independent |
| **SMAPE** | Symmetric MAPE | Handles zero values better |

---

<span class="at-kicker">Interview Questions</span>

## Interview Questions

1. What are the four components of a time series?
2. What does ARIMA(2,1,1) mean? Write out the equation.
3. How do ACF and PACF help identify ARIMA orders?
4. When would you use exponential smoothing over ARIMA?
5. What is stationarity and why does it matter?
6. How would you evaluate a time series forecast?
7. What are the advantages of LSTM over standard RNN for time series?

---

## Related pages

> [!grid]
>
>> [!card] Forecasting
>> [[regression|Regression]] · [[feature-engineering|Feature Engineering]] · [[../deep-learning/rnn-lstm-gru|RNNs & LSTMs]]
>
>> [!card] Deep Learning
>> [[../deep-learning/transformers|Transformers]] · [[../deep-learning/attention-mechanism|Attention]] · [[../deep-learning/sequence-models|Sequence Models]]
>
>> [!card] Statistics
>> [[hypothesis-testing|Hypothesis Testing]] · [[probability-distributions|Distributions]] · [[sampling|Sampling]]
>
>> [!card] Applications
>> [[demand-forecasting|Demand Forecasting]] · [[anomaly-detection|Anomaly Detection]] · [[finance|Financial Modeling]]
