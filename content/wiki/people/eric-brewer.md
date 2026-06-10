---
title: Eric Brewer
Created:
  - 2026-04-29
date modified: Thursday, June 4th 2026, 7:00:00 pm
aliases:
  - Eric Brewer
  - Eric A. Brewer
category: People
tags:
  - person
  - distributed_systems
  - computer_science
banner: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> "A good stance and posture reflect a proper state of mind."
> <cite>— Morihei Ueshiba</cite>

---

> [!infobox|right]
> # Eric Brewer
> ###### Computer Scientist
> | | |
> | --- | --- |
> | **Born** | 1967 |
> | **Nationality** | American |
> | **Domain** | Distributed systems, operating systems |
> | **Known for** | CAP theorem (Brewer's theorem, 2000); Inktomi co-founder; USA.gov |
> | **Awards** | National Academy of Engineering; ACM Mark Weiser Award; Infosys Prize |
> | **Institution** | UC Berkeley (Professor Emeritus); Google (VP Infrastructure & Fellow) |
> | **Education** | MS & PhD, EECS, MIT |

---

<span class="at-kicker">Distributed Systems · Researcher</span>

# Eric Brewer

<p class="at-lead">
American computer scientist who conjured one of the most cited ideas in distributed systems — the CAP theorem — while also co-founding a Nasdaq 100 search company and building the first unified US federal government web portal, embodying the rare combination of deep theoretical insight and large-scale systems practice.
</p>

<span class="at-stat">2000</span> CAP Theorem &nbsp;·&nbsp; <span class="at-mark">Inktomi</span> co-founder &nbsp;·&nbsp; <span class="at-mark">Google VP Infrastructure</span>

---

<span class="at-kicker">Biography</span>

## Background

American computer scientist, **Professor Emeritus at UC Berkeley** and **VP Infrastructure & Fellow at Google**. Earned his **MS and PhD in EECS from MIT**. Research interests span operating systems, distributed computing, and wireless networks in resource-constrained environments.

Co-founded **Inktomi Corporation** in **1996** (with Berkeley graduate student Paul Gauthier), commercializing a research prototype into one of the first high-performance commercial web search engines — which grew to be listed on the **Nasdaq 100** before being acquired by **Yahoo! in 2003**. Also partnered with the **Clinton administration** to build **FirstGov (now USA.gov)** — the first comprehensive US federal government web portal, launched in 2000.

Proposed the **CAP theorem** (Brewer's theorem) at the **PODC 2000 keynote** — the conjecture that a distributed system cannot simultaneously guarantee **Consistency**, **Availability**, and **Partition tolerance**. Formally proved by [[seth-gilbert-nancy-lynch|Seth Gilbert and Nancy Lynch]] in 2002. In the 2012 paper *"CAP Twelve Years Later: How the 'Rules' Have Changed"*, Brewer clarified that CAP is not a binary three-way trade-off but a spectrum — partitions are rare, and the C/A trade-off during a partition is a design choice, not a fixed property.

---

<span class="at-kicker">Key Contributions</span>

## Key contributions

> [!grid|cols3]
>
>> [!card|section]
>> ### CAP Theorem (2000)
>> Consistency, availability, and partition tolerance — the distributed systems design framework. Proposed at the PODC 2000 keynote and formally proved by Gilbert and Lynch in 2002, CAP shaped every NoSQL database design decision — MongoDB, Cassandra, DynamoDB, and HBase all explicitly position themselves on the CAP spectrum.
>
>> [!card|section]
>> ### Inktomi (1996)
>> Co-founded one of the first high-performance commercial web search engines — grew to the **Nasdaq 100** before being acquired by Yahoo! in 2003. Inktomi's search technology briefly powered Yahoo! Search, MSN Search, and several major portals before the Google era.
>
>> [!card|section]
>> ### USA.gov / FirstGov (2000)
>> First unified **US federal government web portal**, launched in 2000 in partnership with the Clinton administration — a practical demonstration that large-scale systems architecture can serve millions of citizens as effectively as commercial users.
>
>> [!card|section]
>> ### Wireless & Developing Regions Research
>> Research on **wireless networks** and technology for developing regions — applying distributed systems thinking to resource-constrained environments where connectivity is unreliable, extending CAP-like reasoning to edge computing scenarios.

---

<span class="at-kicker">Interesting Facts</span>

## Interesting facts

> [!grid|cols2]
>
>> [!card|section]
>> ### CAP Twelve Years Later
>> Brewer's 2012 *"CAP Twelve Years Later"* paper is almost as important as the original — it corrected common misapplications of CAP that had led to poor architectural decisions. It clarified that the C/A trade-off during partition is a nuanced design choice, not a binary constraint.
>
>> [!card|section]
>> ### The Theorem That Named NoSQL
>> The CAP theorem effectively gave NoSQL databases their theoretical justification — every "CP", "AP", or "eventually consistent" system label in database documentation traces back to Brewer's 2000 keynote conjecture.

---

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Software Engineering
>> [[../technology/software-engineering/cap-theorem|CAP Theorem]], [[../technology/software-engineering/horizontal-scaling|Horizontal Scaling]]
>
>
>> [!card] People
>> [[seth-gilbert-nancy-lynch|Seth Gilbert + Nancy Lynch]]
