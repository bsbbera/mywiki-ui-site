---
title: Data Engineering FAQ
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - FAQ
  - Frequently Asked Questions
category: Computer Science
tags:
  - DataEngineering
  - Career
  - FAQ
banner:
publish: true
---

---

Common questions about Data Engineering as a discipline + career, consolidated from the source FAQ tree (source: FAQ/*.md).

## What is Data Engineering?

Modern Data Engineering is a **subset of software engineering** focused on **moving, storing, and structuring data** for use in applications or reporting (source: FAQ/What is Data Engineering.md).

See [[data-engineering|Data Engineering Overview]] for the full treatment.

## What does a Data Engineer do?

(source: FAQ/What does a Data Engineer do.md)

Responsibilities vary by company and seniority, but most data engineers:

- **Gather data requirements** — how long stored, how used, who needs access.
- **Maintain metadata** — what tech, documentation, security, source, ownership.
- **Ensure security + governance** — IAM, encryption, audit access.
- **Store data** in the right system — relational, NoSQL, blob.
- **Process data** for specific needs — ETL/ELT pipelines.

## What's the difference between a Data Engineer and X?

(source: FAQ/What is the difference between a Data Engineer and X.md)

| Role | Focus |
| --- | --- |
| **Data Engineer** | Software engineering + DB design → scalable pipelines, integrations, models |
| **BI Engineer / Developer** | GUI tools (SSIS, etc.) for ETL, models, reports — pathway to DE |
| **Backend Engineer** | Server-side scripts + APIs for applications |
| **Database Administrator (DBA)** | DB availability, backups, security; not analytics-focused |
| **Data Analyst** | SQL + reports + dashboards; consumer of DE work |
| **Data Scientist** | Research, in-depth analysis, ML models |

## What skills do I need to become a Data Engineer?

(source: FAQ/What skills do I need to become a Data Engineer.md)

> Note: **Data engineering is typically not entry-level**. Few "Junior DE" roles exist. Most DEs come from adjacent roles.

### Junior DE

**Required:**
- SQL (beginner)
- Data Modeling (beginner)
- Relational DB (beginner)
- Soft skills (beginner)

**Nice to have:**
- Scripting (Python/Java/Scala) (beginner)

### Data Engineer

**Required:**
- SQL (intermediate)
- Data Modeling (intermediate)
- Scripting (intermediate)
- Indexing & Query Optimization (intermediate)
- Batch Data Processing (intermediate)
- Soft skills (intermediate)
- Relational DB (intermediate)
- OLTP (beginner)
- Data Pipeline (beginner)
- Data Warehouse (beginner)

**Nice to have:**
- Cloud platform (intermediate)
- Stream Processing (beginner)
- OLAP (beginner)
- Reporting tools (Tableau/Superset/Metabase) (beginner)

### Senior DE

**Required:**
- Soft skills (intermediate/advanced)
- SQL (advanced)
- Data Modeling (advanced)
- Scripting (advanced)
- Indexing & Query Optimization (advanced)
- Cloud platform (advanced)
- Infrastructure-as-code (beginner)
- Batch Processing (advanced)
- Relational + Non-relational DBs (advanced)
- OLTP + OLAP (intermediate)
- Data Pipeline (advanced)

**Nice to have:**
- Infrastructure-as-code (advanced)
- Reporting tools (beginner/intermediate)

## How can I transition into Data Engineering?

(source: FAQ/How can I transition into Data Engineering.md)

Common transition paths (most common first):

1. **Data Analyst → DE**
2. **BI Analyst / Developer → DE**
3. **Backend Engineer → DE**
4. **Data Scientist → DE**

Plenty of other paths exist too.

**General advice**:

- Learn the core DE skills (see above).
- **Get real-world experience** — at your current job (volunteer for data tasks), or build a personal project.
- Show recent posts on r/dataengineering ([transitioning-related search](https://www.reddit.com/r/dataengineering/search/?q=transition&restrict_sr=1)).
- Showcase projects publicly: [r/dataengineering Personal Project Showcase](https://www.reddit.com/r/dataengineering/?f=flair_name%3A%22Personal%20Project%20Showcase%22).

## Am I a Data Engineer?

(source: FAQ/Am I a Data Engineer.md)

A short self-assessment quiz. Score 1 point for each "Yes":

1. Work with **large volumes of data**?
2. Design + build **data pipelines / ETL processes**?
3. Responsible for **data ingestion + integration**?
4. Use **distributed systems / big data tech** (Hadoop, Spark, distributed DBs)?
5. **Data modeling / schema design**?
6. Collaborate with **data scientists / analysts** to provide clean data?
7. Manage + maintain **data infrastructure + databases**?
8. Involved in **data governance + compliance**?
9. **Real-time / streaming data** processing?
10. **Data quality monitoring + troubleshooting**?

**Scoring:**

- **8–10**: Your responsibilities align with data engineering practices.
- **5–7**: Some DE aspects; room to grow.
- **0–4**: Not significant DE responsibilities currently.

## What are the best resources for learning Data Engineering?

(source: FAQ/What are the best resources for learning about Data Engineering.md)

### Books

- **Designing Data-Intensive Applications** by Martin Kleppmann (the bible).
- **Fundamentals of Data Engineering** by Joe Reis & Matt Housley.
- **The Data Warehouse Toolkit** by Ralph Kimball.
- **Building a Scalable Data Warehouse with Data Vault 2.0** by Dan Linstedt.

### Online courses

- DataExpert.io (Zach Wilson)
- Data Engineering Zoomcamp (DataTalks.Club)
- Coursera GCP / AWS / Azure data engineering specializations

### YouTube

- **Seattle Data Guy** (Ben Rogojan)
- **Data with Zach** (Zach Wilson)
- **Andreas Kretz**
- **Joe Reis**

### Communities

- **r/dataengineering**
- **dbt Slack**
- **Locally Optimistic**
- **Data Engineering Weekly** newsletter

## Where can I find datasets to practice with?

(source: FAQ/Where can I find datasets to practice with.md)

- **[Google Dataset Search](https://datasetsearch.research.google.com/)** — start here.
- **[data.gov](https://catalog.data.gov/dataset)** — US government datasets.
- **r/datasets community** — ask if you can't find one.
- **[Faker](https://github.com/joke2k/faker)** — generate synthetic data when needed.

## Is getting X certification going to help me get hired?

(source: FAQ/Is getting X certification going to help me get hired.md)

**In the US**, employers generally don't value certifications as proof of ability. General advice: **don't expect certs to add direct hiring value**.

Use certs to:

- **Upskill** structured-ly.
- **Validate** to yourself that you understand a topic.
- Required if working at **consulting firms** that need certified staff.

**Most valuable certs** (if pursuing):

- [AWS Solutions Architect (Associate / Professional)](https://aws.amazon.com/certification/)
- [GCP Professional Cloud Engineer](https://cloud.google.com/certification/) — see also [[../gcp/certifications/professional-data-engineer|Professional Data Engineer]]
- [Azure Data Engineer Associate](https://learn.microsoft.com/en-us/certifications/azure-data-engineer/)

## Related pages

> [!multi-column]
>
>> [!card] Discipline
>> [[data-engineering|Data Engineering Overview]], [[data-pipeline|Data Pipeline]]
>
>
>> [!card] Guides
>> [[guides/getting-started|Getting Started Guide]], [[guides/sql-guide|SQL Guide]]
>
>
>> [!card] Certifications
>> [[../gcp/certifications/professional-data-engineer|GCP Professional Data Engineer]]
>
>
>> [!card] People
>> [[../people/joe-reis-matt-housley|Joe Reis + Matt Housley]], [[../people/martin-kleppmann|Martin Kleppmann]]
>
>
>> [!card] Books
>> [[../books/fundamentals-of-data-engineering|Fundamentals of Data Engineering]], [[../books/designing-data-intensive-applications|DDIA]], [[../books/the-data-warehouse-toolkit|The Data Warehouse Toolkit]]

