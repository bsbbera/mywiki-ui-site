---
title: DCF Valuation
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Discounted Cash Flow
  - DCF Analysis
  - Intrinsic Value
  - Free Cash Flow Valuation
category: Finance
tags:
  - Finance
  - Investing
  - DCF
  - IntrinsicValue
  - Valuation
  - FreeCashFlow
banner: https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "The intrinsic value of any stock, bond or business today is determined by the cash inflows and outflows — discounted at an appropriate interest rate — that can be expected to occur during the remaining life of the asset."
> <cite>— Warren Buffett / Ben Graham tradition</cite>

---

<span class="at-kicker">Category · Finance</span>

# DCF Valuation

<p class="at-lead">
Discounted Cash Flow (DCF) valuation is the gold standard for finding the <em>intrinsic value</em> of a business — what it is genuinely worth based on the cash it will generate, discounted to today's dollars. It is not a screen or a shortcut; it is Stage III of a rigorous investment process.
</p>

<span class="at-stat">3 inputs</span> required &nbsp;·&nbsp; <span class="at-stat">Free Cash Flow · Discount Rate · Terminal Value</span> &nbsp;·&nbsp; <span class="at-mark">the present value of all future cash the business will generate</span>

<span class="at-kicker">Foundation</span>

## Time Value of Money — The Core Concept

> [!info] The Central Idea
> **The time value of money** is the concept that money you have today is worth more than the identical sum in the future — because money today has earning potential. This is the foundational principle underlying all DCF analysis.

| Concept | Definition | Application |
| --- | --- | --- |
| **Future Value** | Today's money projected forward accounting for compounding | `FV = Amount × (1 + Opportunity Cost Rate)^Years` |
| **Present Value** | A future sum's equivalent value in today's terms, discounted | `PV = FV / (1 + Discount Rate)^Years` |

DCF works by **estimating all future cash flows** a business will generate and **discounting each one back** to its present value using an appropriate discount rate.

<span class="at-kicker">Intrinsic Value</span>

## Intrinsic Value

<span class="at-mark">Intrinsic value</span> is the perceived true value of an investment based on its future cash flows, expected growth, and risk — independent of the current market price.

$$\text{Intrinsic Value} = \sum_{t=1}^{n} \frac{\text{FCF}_t}{(1 + r)^t} + \frac{\text{Terminal Value}}{(1 + r)^n}$$

> The purpose of estimating intrinsic value is to take advantage of **mispriced assets**. If market value > intrinsic value → do not buy. If market value < intrinsic value → the asset is potentially worth buying.

<span class="at-kicker">Free Cash Flow</span>

## Free Cash Flow (FCF)

<span class="at-mark">Free Cash Flow</span> represents the cash generated after accounting for all cash outflows needed to support operations and maintain the capital asset base. Unlike earnings, FCF cannot be manipulated by accounting choices.

$$\text{FCF} = \text{Cash from Operating Activities} - \text{Capital Expenditures}$$

FCF differs from net income because it:
- **Excludes** non-cash expenses (depreciation, amortisation) that reduce profits but not cash
- **Includes** actual capital spending that reduces cash but not profits

### Owner's Earnings (Refined FCF)

$$\text{Owner's Earnings} = \text{Operating Cash Flow} - \text{Maintenance CapEx}$$

Where **Maintenance CapEx** is the capital expenditure necessary for the company to continue operating in its current form — as opposed to growth CapEx for expansion. Most companies don't report this separately, so analysts estimate it.

<span class="at-kicker">DCF Method 1 — Simple</span>

## DCF Method 1 — Basic Discounting

**Two questions to answer:**
1. How much cash will the business make in the future?
2. What is that future cash worth to you right now?

### Step 1: Calculate Free Cash Flow

Start with Owner's Earnings or FCF from the most recent year as the base.

### Step 2: Project 10 Years of Discounted Cash Flow (at 15%)

| Year | Free Cash Flow | Discounted CF (15%) |
| --- | --- | --- |
| 1 | 100 | 85 |
| 2 | 110 | 94 |
| 3 | 121 | 103 |
| 4 | 133 | 113 |
| 5 | 146 | 124 |
| 6 | 161 | 137 |
| 7 | 177 | 151 |
| 8 | 195 | 166 |
| 9 | 214 | 182 |
| 10 | 236 | 200 |
| **10× Terminal Value** | **2,360** | **2,000** |

The intrinsic value of the business is the **sum of discounted cash flows = 2,000 units**.

<span class="at-kicker">DCF Method 2 — FCF Model</span>

## DCF Method 2 — FCF Model (Recommended)

This is the more rigorous method using explicit growth rate assumptions.

### Step 1: Identify Average Free Cash Flow

Take a 3–5 year average FCF to smooth out cyclical variations.

### Step 2: Apply Growth Rates

| Growth Assumption | Company Type |
| --- | --- |
| **18% for years 1–5, 10% for years 6–10** | Smaller, faster-growing companies |
| **15% for years 1–5, 10% for years 6–10** | Larger, established companies |

*Be conservative with growth numbers — optimistic assumptions inflate intrinsic value dangerously.*

**Example starting with ₹100 Crs FCF:**

| Period | Year | Growth Rate | Future FCF (₹ Crs) | Present Value (9% discount) |
| --- | --- | --- | --- | --- |
| First 5 | 2021 | 18% | 118 | 108.25 |
| First 5 | 2022 | 18% | 139.24 | 117.19 |
| First 5 | 2023 | 18% | 164.30 | 126.87 |
| First 5 | 2024 | 18% | 193.87 | 137.34 |
| First 5 | 2025 | 18% | 228.77 | 148.68 |
| Last 5 | 2026 | 10% | 251.65 | 150.05 |
| Last 5 | 2027 | 10% | 276.81 | 151.42 |
| Last 5 | 2028 | 10% | 304.50 | 152.81 |
| Last 5 | 2029 | 10% | 334.95 | 154.22 |
| Last 5 | 2030 | 10% | 368.44 | 155.63 |

**Sum of PV of 10-year cash flows = ₹1,402.46 Crs**

### Step 3: Calculate Terminal Value

<span class="at-mark">Terminal Value</span> is the sum of all future FCF beyond the 10th year — how much the company generates post-year 10 to infinity.

$$\text{Terminal Value} = \frac{\text{FCF}_{10} \times (1 + g)}{r - g}$$

Where:
- **FCF₁₀** = FCF at year 10 (₹368.44 Crs in example)
- **g** = Terminal Growth Rate (keep low, < 5%; use 3.5%)
- **r** = Discount Rate (9%)

**Terminal Value = 368.44 × (1 + 0.035) / (0.09 − 0.035) = ₹6,931.30 Crs**

PV of Terminal Value = ₹6,931.30 / (1.09)^10 = **₹2,927.85 Crs**

### Step 4: Total Intrinsic Value

$$\text{Total PV} = \text{PV of 10-Year FCF} + \text{PV of Terminal Value}$$

**= ₹1,402.46 + ₹2,927.85 = ₹4,330.37 Crs** (total free cash flow belonging to investors)

### Step 5: Calculate Intrinsic Share Price

$$\text{Intrinsic Share Price} = \frac{\text{Total PV of FCF} - \text{Net Debt}}{\text{Total Shares Outstanding}}$$

Where: **Net Debt = Total Debt − Cash & Cash Balance**

> Apply a **±10% band** around the calculated price. If actual market price is:
> - **Below the lower band** → stock is **undervalued**
> - **Above the upper band** → stock is **overvalued**
> - **Within the band** → fairly valued

<span class="at-kicker">Margin of Safety</span>

## Margin of Safety

> [!tip] The Principle
> "The function of margin of safety is, in essence, that of rendering unnecessary an accurate estimate of the future."

<span class="at-mark">Margin of Safety</span> is the discount below intrinsic value that a rational investor requires before purchasing an asset. It protects against valuation errors, analytical mistakes, and unforeseen adversity.

$$\text{Buy Price} = \text{Intrinsic Value} \times (1 - \text{Margin of Safety \%})$$

| Investor Experience | Margin of Safety |
| --- | --- |
| **Seasoned investor** | 30% discount to intrinsic value |
| **New investor** | 50% discount to intrinsic value |

> [!info] Why Margin of Safety?
> - Valuation is an **imprecise art** — future cash flows are estimates, not facts
> - The future is **inherently unpredictable**
> - Investors are human and **make mistakes**
> - The margin of safety absorbs errors and provides downside protection
>
> "The secret to investing is to figure out the value of something — and then pay a lot less." — Joel Greenblatt

### Intrinsic Value and Market Price

> When the **market price is above intrinsic value** → no need to purchase
> When the **market price is below intrinsic value** → the asset is worth buying (within margin of safety)

Note: Calculating intrinsic value of stocks is harder than bonds because stocks have both tangible and intangible value factors, leading to wider variance in estimates. **Higher variance → higher required margin of safety.**

<span class="at-kicker">DCF in the Investment Process</span>

## DCF in the Full Investment Process

DCF is **Stage III** — performed only after:
- **Stage I:** Reading the Annual Report and understanding the business
- **Stage II:** Passing the stock selection checklist

DCF analysis should not be done speculatively on every stock — only on companies that have already passed qualitative and ratio-based filters.

> [!warning] DCF Limitations
> DCF is highly sensitive to assumptions:
> - A small change in the discount rate significantly changes intrinsic value
> - Terminal value typically represents 60–80% of total intrinsic value — making the terminal growth rate the most impactful assumption
> - Over-optimistic FCF growth projections lead to overvalued conclusions
>
> **Always build a conservative case, not an optimistic one.**

## Related pages

> [!grid]
>> [!card]
>> #### [[investing|Investing Hub]]
>> Investment strategies, portfolio frameworks, Sharpe ratio, market indicators.
>
>> [!card]
>> #### [[valuation-ratios|Valuation Ratios]]
>> Relative valuation — P/E, PEG, P/B, EV/EBITDA as complements to DCF.
>
>> [!card]
>> #### [[stock-analysis|Stock Analysis]]
>> Piotroski score and stock selection — the pre-DCF qualification process.
>
>> [!card]
>> #### [[../financial-statements/cash-flow-statement|Cash Flow Statement]]
>> Free cash flow calculation — the key DCF input.
>
>> [!card] People & books
>> [[../../people/warren-buffett|Warren Buffett]] · [[../../people/benjamin-graham|Benjamin Graham]]
>> [[../../books/the-intelligent-investor|The Intelligent Investor]] · [[../../books/security-analysis|Security Analysis]]
