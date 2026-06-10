---
title: Site Reliability Engineering
Created:
  - 2026-06-09
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Site Reliability Engineering
  - SRE Book
  - Google SRE Book
category: Books
tags:
  - book
  - technology
  - devops
  - sre
  - software_engineering
banner: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1400"
cssclass: wide-page
publish: true
---

> "Hope is not a strategy."
> <cite>— from Site Reliability Engineering (Google)</cite>

---

> [!infobox|right]
> # Site Reliability Engineering
> ###### Book
> | | |
> | --- | --- |
> | **Authors** | Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy (eds.) |
> | **Publisher** | O'Reilly Media |
> | **Published** | 2016 |
> | **Domain** | Site reliability engineering, DevOps, production systems |
> | **Pages** | 552 |
> | **ISBN** | 978-1-4919-2912-4 |

<span class="at-kicker">Technology · DevOps · Google SRE</span>

# Site Reliability Engineering

<p class="at-lead">
The <em>SRE Book</em> — edited by Google engineers Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Murphy — codifies how Google builds and runs its production systems at planet scale. It introduced SLIs, SLOs, SLAs, error budgets, and blameless postmortems as engineering disciplines, and defined "reliability" as a software engineering problem rather than an operations problem.
</p>

<span class="at-stat">2016</span> published &nbsp;·&nbsp; <span class="at-stat">552</span> pages &nbsp;·&nbsp; <span class="at-mark">the canonical reference for production reliability engineering at scale</span>

## Core Concepts

> [!grid|cols3]
>
>> [!card|section]
>> ###### SLI / SLO / SLA
>> ### Service Level Objectives
>> **SLI** (Service Level Indicator) — what you measure (e.g. request latency). **SLO** (Service Level Objective) — the target (e.g. 99.9% of requests under 200ms). **SLA** (Agreement) — contractual commitment with consequences. The book argues that SLOs, not SLAs, should drive engineering decisions.
>
>> [!card|section]
>> ###### ERROR BUDGETS
>> ### Error Budgets
>> If the SLO is 99.9% availability, the error budget is 0.1% downtime (≈ 44 minutes/month). The SRE and product teams share the error budget — when it's exhausted, new feature launches stop until reliability is restored. This makes reliability a shared business decision, not just an ops concern.
>
>> [!card|section]
>> ###### BLAMELESS POSTMORTEMS
>> ### Blameless Culture
>> After every incident, the SRE team writes a postmortem focused on **systemic causes and prevention**, never on blaming individuals. People make mistakes because systems allow them to. The postmortem's purpose is to prevent recurrence, not to punish.

## Interesting facts

- The book is freely available online at [sre.google/books](https://sre.google/books/) — a deliberate choice by Google to share SRE practices with the industry
- Google followed this with two companion volumes: *The Site Reliability Workbook* (2018) and *Building Secure and Reliable Systems* (2020)
- "Hope is not a strategy" — the book's most famous aphorism — encapsulates the SRE philosophy of treating reliability as an engineering discipline

## Related pages

> [!grid]
>
>> [!card] Technology
>> [[../technology/software-engineering/devops-sre|DevOps & SRE]], [[../technology/software-engineering/kubernetes|Kubernetes]]
>
>> [!card] People
>> [[../people/gene-kim|Gene Kim]], [[../people/jez-humble|Jez Humble]]
>
>> [!card] Books
>> [[accelerate|Accelerate]], [[the-phoenix-project|The Phoenix Project]]
