---
title: Investing
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Investing Hub
  - Investment Strategy
  - Value Investing
category: Finance
tags:
  - Finance
  - Investing
  - Strategy
  - ValueInvesting
  - PortfolioManagement
banner: https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "The stock market is designed to transfer money from the active to the patient."
> <cite>— Warren Buffett</cite>

---

<span class="at-kicker">Category · Finance</span>

# Investing

<p class="at-lead">
Investing is the disciplined process of allocating capital to assets whose future value exceeds their current price. It requires understanding what a business is worth, selecting companies with durable advantages, and protecting against mistakes with a margin of safety. This hub covers the frameworks, strategies, and tools that separate systematic investors from speculators.
</p>

<span class="at-stat">4 stages</span> of stock analysis &nbsp;·&nbsp; <span class="at-stat">Screen → Understand → Verify → Value</span> &nbsp;·&nbsp; <span class="at-mark">the complete framework from idea to decision</span>

<span class="at-kicker">Investing Sections</span>

## What's in This Section

> [!grid|cols2]
>
>> [!card|section]
>> ###### VALUATION RATIOS
>> ### *Valuation* Ratios
>> P/E, PEG, P/B, P/S, EV/EBITDA, Dividend Yield, EPS — the market-price-based ratios for comparing stocks to their value.
>> → [[valuation-ratios|Valuation Ratios]]
>
>> [!card|section]
>> ###### DCF VALUATION
>> ### *DCF* Valuation
>> Discounted Cash Flow analysis — calculating intrinsic value from free cash flows, terminal value, and discount rates. Includes margin of safety framework.
>> → [[dcf-valuation|DCF Valuation]]
>
>> [!card|section]
>> ###### STOCK ANALYSIS
>> ### *Stock* Analysis
>> Piotroski Score, stock selection methodology, screening criteria, selection checklist, and value trap identification.
>> → [[stock-analysis|Stock Analysis]]
>
>> [!card|section]
>> ###### THIS PAGE
>> ### *Strategies* & Portfolio
>> Investing philosophies (fundamental vs. technical), portfolio allocation frameworks, risk parity, Sharpe ratio, and market crash indicators.

<span class="at-kicker">Investing Philosophies</span>

## Fundamental Analysis Framework

For fundamental analysis, three things are required:
1. **Understanding financial statements** — the language of business
2. **Understanding the business** in the context of its industry
3. **Future understanding of moats** — sustainable competitive advantages

### Portfolio Allocation Framework

A practical framework for equity-focused investors:

| Portfolio Layer | Allocation | Approach |
| --- | --- | --- |
| **Core Portfolio** | ~70% | Fundamental Analysis |
| **Satellite Portfolio** | 0–30% | Technical Analysis |

**Core Portfolio characteristics:**
- 10–15 high quality companies
- Consistent compounders
- Stringent selection criteria (see [[stock-analysis|Stock Selection Methodology]])
- Long time horizon

**Satellite Portfolio characteristics:**
- Trigger-based entries
- Price-volume action
- Earnings momentum
- Active tracking framework

> [!tip] Core vs. Satellite
> The 70/30 split can be adjusted. For a more conservative approach, consider the classic **60-40 equity-debt portfolio split**. For a pure equity approach, the core/satellite structure within equities manages risk through quality and time horizon differentiation.

<span class="at-kicker">Risk Management</span>

## Risk Parity

<span class="at-mark">Risk Parity</span> is a portfolio allocation strategy that uses **risk** (not capital) to determine allocations across asset classes. Instead of allocating 60% to equities and 40% to bonds by dollar value, risk parity allocates so that each asset class contributes **equally to portfolio risk**.

> [!info] Risk Parity Principles
> - Often used by hedge funds and sophisticated institutional investors
> - Requires quantitative methodology — more complex than simple allocation strategies
> - Goal: earn the **optimal level of return at a targeted risk level**
> - Allows leverage and alternative diversification, including short selling
> - Portfolio managers can use any mix of assets; the constraint is the risk contribution, not the capital weight

### Sharpe Ratio — Risk-Adjusted Return

The Sharpe Ratio measures the return an investment earns **in excess of the risk-free rate**, adjusted for its volatility. It is the standard metric for comparing risk-adjusted performance.

$$\text{Sharpe Ratio} = \frac{\text{Portfolio Return} - \text{Risk-Free Rate}}{\text{Portfolio Volatility}}$$

```python
import numpy as np
close_prices = [...]  # use closing prices
returns = np.log(close_prices / close_prices.shift(1))  # log returns
volatility = returns.std() * np.sqrt(252)  # annualised
sharpe_ratio = (returns.mean() - 0.05) / volatility  # assuming 5% risk-free rate
```

**Higher Sharpe Ratio = better risk-adjusted return.** A ratio above 1.0 is generally considered good; above 2.0 is excellent.

<span class="at-kicker">Market Indicators</span>

## Market Indicators

### Shiller PE Ratio (CAPE)

The Shiller PE — also called **CAPE (Cyclically Adjusted Price-to-Earnings Ratio)** — is the stock price divided by the **average inflation-adjusted earnings per share over the past 10 years** (moving average).

$$\text{Shiller PE} = \frac{\text{Price of Stock}}{\text{10-Year Inflation-Adjusted EPS (Moving Average)}}$$

> [!info] CAPE Use Cases
> - Assess likely future returns from equities over **10–20 year timescales**
> - Higher CAPE values imply **lower than average long-term annual returns**
> - Used to gauge whether the overall market (not just one stock) is undervalued or overvalued

**CAPE Criticisms:**
- Businesses today are structurally different from 10 years ago
- Accounting standards have changed
- PE ratios are higher today partly because of secular decline in interest rates
- Supply of stocks has decreased while demand has increased dramatically
- CAPE does not adjust for changes in dividend yield
- Reversion to mean is slow and imprecise — waiting for it can mean missing entire bull markets

### Signs of Market Crash / Bubble

> [!warning] Market Crash Indicators
> **Market-level signals:**
> 1. Significant and rapid growth that appears unsustainable or unprecedented
> 2. Market manipulation
> 3. Geopolitical conflict — trade wars, military conflict, political shocks
>
> **Bubble indicators:**
> 1. Excessive optimism — everyone expects prices to keep rising
> 2. Lack of paranoia — risk is dismissed
> 3. Unreasonable confidence — overconfidence in forecasts
> 4. Absence of rational common sense
> 5. Government-controlled bubbles — e.g., through quantitative easing

### Shares Outstanding and Stock Splits

**Shares Outstanding** refers to all company stock currently held by shareholders, institutional investors, and insiders (restricted shares). Shown on the Balance Sheet under *Capital Stock*.

Changes in shares outstanding:
- **Increase:** equity financing, employee stock options (ESOPs)
- **Decrease:** company buybacks

**Stock Split:** A company divides existing shares into multiple new shares to boost liquidity. The most common ratios are 2-for-1 or 3-for-1. **Total market cap remains unchanged** — only the number of shares and price per share change. A 2-for-1 split doubles shares and halves the price.

> [!tip] Buybacks vs. Dividends
> When a company buys back its own shares, it reduces shares outstanding — boosting EPS and potentially ROE without any improvement in operations. For long-term investors, **sustained buybacks from free cash flow** (not debt) signal management's confidence in the company and return capital efficiently.

<span class="at-kicker">The Investment Process</span>

## The Complete Investment Process

```
Stage 1: SCREEN → Filter using financial ratios and metrics
Stage 2: UNDERSTAND → Read annual report, understand business
Stage 3: VERIFY → Apply stock selection checklist
Stage 4: VALUE → DCF analysis, intrinsic value, margin of safety
         └─ Check: Is it a value trap?
```

| Stage | Tool | Detail |
| --- | --- | --- |
| **Screen** | Financial Ratios | ROCE >15%, D/E <0.5, Revenue CAGR >7% |
| **Understand** | Annual Report | 5+ years, management commentary, MD&A |
| **Verify** | Selection Checklist | GPM, ROE, debt, receivables, cash flow |
| **Value** | DCF / Intrinsic Value | FCF, terminal value, margin of safety |

→ Full detail: [[stock-analysis|Stock Analysis]] and [[dcf-valuation|DCF Valuation]]

## Related pages

> [!grid]
>> [!card]
>> #### [[valuation-ratios|Valuation Ratios]]
>> P/E, PEG, P/B, P/S, EV/EBITDA, Dividend Yield, EPS.
>
>> [!card]
>> #### [[dcf-valuation|DCF Valuation]]
>> Intrinsic value, free cash flow, terminal value, margin of safety.
>
>> [!card]
>> #### [[stock-analysis|Stock Analysis]]
>> Piotroski score, selection methodology, screening, value traps.
>
>> [!card]
>> #### [[../financial-ratios/financial-ratios|Financial Ratios]]
>> Complete ratio reference for screening and evaluation.
>
>> [!card] People & books
>> [[../../people/warren-buffett|Warren Buffett]] · [[../../people/benjamin-graham|Benjamin Graham]] · [[../../people/peter-lynch|Peter Lynch]]
>> [[../../books/the-intelligent-investor|The Intelligent Investor]] · [[../../books/security-analysis|Security Analysis]]
