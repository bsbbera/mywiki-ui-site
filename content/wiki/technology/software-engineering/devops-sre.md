---
title: DevOps & SRE
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - DevOps
  - SRE
  - Site Reliability Engineering
  - CI/CD
  - Continuous Integration
  - Continuous Deployment
  - microservices
category: Software Engineering
tags:
  - DevOps
  - SRE
  - CICD
  - Microservices
  - SoftwareEngineering
  - Reliability
banner: https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough."
> <cite>— Mark Zuckerberg (but SRE disagrees)</cite>

---

<span class="at-kicker">Software Engineering · Operations</span>

# DevOps & SRE

<p class="at-lead">
DevOps is the philosophy that breaks down silos between development and operations. SRE is how Google operationalized that philosophy with engineering rigor — using error budgets, SLOs, and blameless postmortems to balance the velocity of innovation with the discipline of reliability.
</p>

<span class="at-stat">culture + tooling</span> &nbsp;·&nbsp; <span class="at-stat">SLO-driven</span> reliability &nbsp;·&nbsp; <span class="at-stat">error budgets</span> &nbsp;·&nbsp; <span class="at-mark">reliability is a feature, not an afterthought</span>

<span class="at-kicker">Philosophy</span>

## DevOps vs SRE

> [!grid|cols2]
>
>> [!card|section]
>> ###### DEVOPS
>> ### *DevOps* Philosophy
>> **DevOps is a philosophy, not a methodology or technology.** It breaks down silos between development and operations teams. Developers focus on **feature velocity and innovation**; operators focus on **reliability and consistency**. DevOps says these goals are not in conflict — they are complementary when teams collaborate, share responsibility, and automate toil.
>>
>> DevOps practices: shared ownership of production, infrastructure as code, automated testing, CI/CD pipelines, observability-first culture.
>
>> [!card|section]
>> ###### SRE
>> ### *SRE* Practice
>> **SRE (Site Reliability Engineering) is a practical way of implementing DevOps** — invented at Google and now industry-wide. SRE applies software engineering principles to operations problems. The mission of SRE is to protect, provide for, and progress software and systems with consistent focus on **availability, latency, performance, and capacity**.
>>
>> SRE is the practice of balancing the **velocity of development features** with the **risk of reliability**. When reliability drops, innovation slows; when reliability is too high, you're over-investing in stability.

<span class="at-kicker">Service Level Terminology</span>

## SLIs, SLOs & SLAs

The SRE reliability hierarchy: measure service health (SLI), set targets (SLO), and make promises to customers (SLA).

> [!grid|cols3]
>
>> [!card|section]
>> ###### SLI
>> ### Service Level *Indicator*
>> A **quantifiable measure of the reliability of your service from your users' perspective**.
>> - Expressed as a ratio: `good events / total valid events × 100%`
>> - Maps to user expectations (not internal metrics)
>> - Must be measurable and observable
>> - Examples: request success rate, p99 latency, error rate, availability percentage
>
>> [!card|section]
>> ###### SLO
>> ### Service Level *Objective*
>> Sets the **target for an SLI over a period of time**. The number or goal you want to achieve for a given SLI over a given duration (e.g., rolling 28 days).
>> - Tied to SLIs aggregated over time
>> - Should be close to but below 100% (typically 99.9% — "three nines")
>> - **Goal isn't to maximize SLOs** — it's to keep them low while keeping users happy
>> - Higher SLOs = higher cost in compute resources and operations effort
>
>> [!card|section]
>> ###### SLA
>> ### Service Level *Agreement*
>> A **promise about the health of your service to your customers**. A more restrictive, contractual version of an SLO — it carries financial penalties for breaches.
>> - External-facing commitment (vs. SLO which is internal)
>> - Set lower than your SLO to give yourself a buffer
>> - Violating an SLA has business/legal consequences
>> - Example: "99.95% availability or 10% service credit"

> [!info]
> Applications should not significantly **outperform** their SLOs, because users come to expect the level of reliability you usually deliver. Consistently exceeding SLOs trains users to expect higher reliability than you've committed to.

<span class="at-kicker">Reliability Engineering</span>

## Error Budgets

**Error budgets** are the tool SRE uses to balance service reliability with the pace of innovation. An error budget is the **level of unreliability you are willing to tolerate** — the flip side of your SLO.

| SLO | Error Budget (per month) |
| --- | --- |
| 99% | 7h 18m downtime |
| 99.9% | 43m 49s downtime |
| 99.95% | 21m 54s downtime |
| 99.99% | 4m 22s downtime |

**How error budgets drive decisions:**
- If you have budget remaining → ship features, deploy changes, take risks
- If you are burning budget fast → pause deployments, focus on reliability
- If budget is exhausted → freeze new features until reliability is restored

Error budgets form a **control mechanism for diverting attention to stability as needed**. They replace subjective arguments ("is this reliable enough?") with objective data.

### Reliability Formula

```
Reliability = Good Time / Total Time
            = Fraction of time the service is available and working
```

<span class="at-kicker">SRE Maturity</span>

## High SRE Maturity

Organizations with high SRE maturity exhibit:

> [!grid|cols2]
>
>> [!card|section]
>> ###### WELL-DEFINED SLOS
>> ### User-Centric *SLOs*
>> SLOs are documented, agreed upon by both product and engineering, reviewed regularly, and tied to what users actually experience. Not just uptime — meaningful indicators of user happiness.
>
>> [!card|section]
>> ###### ERROR BUDGETS
>> ### Active *Error Budgets*
>> Error budgets are actively tracked and used in deployment decisions. Teams consult budget burn rates before releasing. Engineering and product jointly own the budget.
>
>> [!card|section]
>> ###### BLAMELESS CULTURE
>> ### Blameless *Postmortems*
>> When incidents occur, the focus is on systemic causes, not individual blame. A blameless postmortem includes:
>> - Details of the incident and its timeline
>> - Actions taken to mitigate/resolve the incident
>> - The incident's impact
>> - Its trigger and root causes
>> - Follow-up action items to prevent recurrence
>
>> [!card|section]
>> ###### LOW TOIL
>> ### Low *Toil* Tolerance
>> **Toil** is manual, repetitive operational work that scales linearly with traffic and provides no enduring value. SRE teams aim to keep toil below 50% of work time, automating it away to focus on engineering work that reduces future toil.

<span class="at-kicker">CI/CD Pipeline</span>

## Continuous Integration & Continuous Deployment

CI/CD automates the path from code commit to production deployment, reducing human error and deployment friction.

> [!grid|cols2]
>
>> [!card|hero dark spanfull]
>> ###### THE CI/CD PIPELINE
>> ### Code → Build → Test → Deploy → Monitor
>> Every commit triggers an automated pipeline. Fast feedback loops catch bugs earlier when they're cheaper to fix. The goal: deploy with confidence, multiple times per day.
>
>> [!card|section]
>> ###### CONTINUOUS INTEGRATION
>> ### *CI* — Integrate Early, Often
>> Developers merge code to a shared branch **frequently** (multiple times per day). Each merge triggers:
>> - Automated build
>> - Unit tests, integration tests
>> - Static analysis / linting
>> - Security scanning
>>
>> CI catches integration bugs early, before they compound. The rule: **never leave the main branch broken**.
>
>> [!card|section]
>> ###### CONTINUOUS DELIVERY
>> ### *CD* — Always Deployable
>> The main branch is **always in a deployable state**. Deployment to production is a business decision, not an engineering bottleneck. Automated release pipelines can push to production on demand with one click (or automatically after passing tests).
>
>> [!card|section]
>> ###### CONTINUOUS DEPLOYMENT
>> ### *CDP* — Auto to Production
>> Every passing build is **automatically deployed to production**. No human approval step. Requires high test coverage, feature flags, canary deployments, and robust rollback mechanisms. Netflix, Amazon, and Google deploy thousands of times per day using this model.
>
>> [!card|section]
>> ###### PIPELINE STAGES
>> ### *Stages* in Order
>> 1. **Source**: Code commit triggers pipeline
>> 2. **Build**: Compile, package, containerize
>> 3. **Test**: Unit → Integration → E2E → Performance
>> 4. **Staging**: Deploy to pre-production environment
>> 5. **Production**: Blue/green or canary deploy
>> 6. **Monitor**: Observe SLIs, alert on regressions

<span class="at-kicker">Performance Concepts</span>

## Latency vs Throughput

Two fundamental metrics for measuring system performance — often in tension with each other:

> [!grid|cols2]
>
>> [!card|section]
>> ###### LATENCY
>> ### Response *Time*
>> **Latency** is the time to perform some action or produce some result — how long a single request takes from submission to response.
>>
>> - Measured in milliseconds (ms) or seconds
>> - p50, p95, p99 percentiles (not averages — averages hide tail latency)
>> - Affected by: compute speed, network hops, queue depth, contention
>> - **If you have a performance problem, your system is slow for a single user**
>
>> [!card|section]
>> ###### THROUGHPUT
>> ### *Volume* Over Time
>> **Throughput** is the number of such actions or results per unit of time — how many requests the system handles per second.
>>
>> - Measured in requests/second (RPS), transactions/second (TPS), MB/s
>> - Affected by: parallelism, resource utilization, bottleneck capacity
>> - **If you have a scalability problem, your system is fast for one user but slow under load**

> [!info]
> The engineering goal: **maximize throughput with acceptable latency**. These are not the same thing — a system can have low latency at low load but terrible latency at high throughput due to queuing effects (Little's Law).

### Performance vs Scalability

| Problem Type | Symptom | Solution |
| --- | --- | --- |
| **Performance** | Slow for a single user even at low load | Optimize algorithms, reduce computation, improve caching |
| **Scalability** | Fast at low load, slow under high load | Add horizontal scale, reduce bottlenecks, improve concurrency |

A service is **scalable** if it results in increased performance in a manner **proportional to resources added**. Scalability can mean serving more requests (horizontal) or handling larger datasets (vertical).

<span class="at-kicker">Architecture Pattern</span>

## Microservices

**Microservices** divides a large program into multiple smaller, independent services. In a monolith application, all features are stored in a single codebase. In microservices, there are multiple codebases, and each service **manages its own data**.

> A good microservice design is **loosely coupled** — services can be deployed, scaled, and updated independently without breaking other services.

> [!grid|cols2]
>
>> [!card|section]
>> ###### PROS
>> ### Microservices *Advantages*
>> - Easier to develop and maintain individual services
>> - Reduced risk when deploying new versions
>> - Services scale independently to optimize infrastructure use
>> - Faster to innovate and add new features
>> - Can use different languages and frameworks per service
>> - Choose the runtime appropriate to each service
>
>> [!card|section]
>> ###### CONS
>> ### Microservices *Challenges*
>> - Increased complexity when communicating between services
>> - Increased latency across service boundaries (network calls)
>> - Security concerns for inter-service traffic
>> - Multiple deployments to manage
>> - Must maintain backward compatibility as the microservice evolves
>> - Distributed tracing and debugging is harder

### Stateful vs Stateless Services

> [!grid|cols2]
>
>> [!card|section]
>> ###### STATEFUL
>> ### *Stateful* Services
>> Store and manage data over time. Transactions may be affected by previous transactions context.
>> - **Harder to scale** (state must be consistent across instances)
>> - **Harder to upgrade** (data migrations required)
>> - **Require backup** and recovery procedures
>> - Examples: databases, session stores, shopping carts
>
>> [!card|section]
>> ###### STATELESS
>> ### *Stateless* Services
>> Get their data from the environment or other stateful services. No stored knowledge of previous transactions.
>> - **Easy to scale** by adding instances
>> - **Easy to migrate** to new versions
>> - **Easy to administer** — any instance can handle any request
>> - Examples: REST APIs, authentication services, computation workers

### The 12-Factor App

Best practices for building production-grade, cloud-native microservices:

| Factor | Practice |
| --- | --- |
| **Codebase** | One repo per app, use version control |
| **Dependencies** | Declare dependencies explicitly; use package manager |
| **Config** | Store config in environment variables, never in source code |
| **Backing Services** | Databases, caches, queues accessed via URLs |
| **Build, Release, Run** | Strict separation of build (package), release (config), run (execute) |
| **Processes** | Apps run as stateless processes; state in backing services |
| **Port Binding** | App exposes a port; not injected into a server like Apache |
| **Concurrency** | Scale by adding process instances |
| **Disposability** | Fast startup, graceful shutdown; maximize robustness |
| **Dev/Prod Parity** | Keep dev, staging, production as similar as possible (Docker helps) |
| **Logs** | Write to stdout; aggregate all logs to a single source |
| **Admin Processes** | Run admin tasks as one-off processes, not one-off manual steps |

## Related pages

> [!grid]
>
>> [!card]
>> ##### [[docker|Docker]]
>> The container platform that enables dev/prod parity (12-factor factor 10) and is the foundation of CI/CD pipeline artifacts.
>
>> [!card]
>> ##### [[kubernetes|Kubernetes]]
>> Orchestrates microservices in production — handles scaling, self-healing, and rolling deployments with SLO-aligned health checks.
>
>> [!card]
>> ##### [[terraform|Terraform]]
>> Infrastructure as Code — provision cloud resources in the same CI/CD pipeline as application deployments for true GitOps.
>
>> [!card]
>> ##### [[rest-api|REST & APIs]]
>> Microservices communicate via REST APIs — API design principles (versioning, backwards compatibility) directly impact microservice coupling.
>
>> [!card] People & books
>> [[../../people/gene-kim|Gene Kim]] · [[../../people/jez-humble|Jez Humble]] · [[../../people/solomon-hykes|Solomon Hykes]] · [[../../people/mitchell-hashimoto|Mitchell Hashimoto]]
>> [[../../books/the-phoenix-project|The Phoenix Project]] · [[../../books/accelerate|Accelerate]] · [[../../books/site-reliability-engineering|Site Reliability Engineering]]
