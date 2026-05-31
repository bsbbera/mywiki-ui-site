---
title: Amazon Web Services
Created:
  - 2026-04-29
date modified: Friday, May 29th 2026, 11:57:44 pm
aliases:
  - AWS
  - Amazon Web Services
category: Cloud
tags:
  - AWS
  - Cloud
  - DataEngineering
banner:
publish: true
---

> [!infobox|wikipedia]
> # Amazon Web Services
> ###### Cloud Platform
> | | |
> | --- | --- |
> | **Provider** | Amazon |
> | **Type** | Public cloud platform |
> | **Category** | Cloud |
> | **Launched** | 2006 (S3 & EC2) |
> | **Headquarters** | Seattle, USA |
> | **Website** | aws.amazon.com |

---

> "Quality is not an act, it is a habit."
> <cite>— Colin R. Davis</cite>

---

[Amazon Web Services (AWS)](https://aws.amazon.com/) is a suite of **cloud-based tools** spanning applications, networking, infrastructure, data processing, and storage. AWS pioneered modern public cloud (S3 and EC2 launched 2006) and remains the **market-share leader** (source: Tools/Cloud Providers/Amazon Web Services.md).

A defining attribute is the breadth of **serverless and managed** products.

## Why AWS for data engineering

- **Largest market share** → most jobs, most documentation, most third-party integrations.
- **Most services** — over 200 in production.
- **Strong data ecosystem** — S3 + Glue + Redshift + Lambda + Kinesis + EMR + Athena.
- **Mature managed Kafka** (MSK) for streaming.
- **Step Functions** — visual state-machine orchestration unique in the cloud landscape.

## Key AWS services for data engineers

(source: Tools/Cloud Providers/Amazon Web Services.md)

### Databases

- **Amazon Redshift** — managed cloud warehouse (columnar, MPP).
- **Amazon RDS** — managed Postgres / MySQL / MariaDB / Oracle / SQL Server.
- **Amazon Aurora** — RDS with 3× throughput; Postgres + MySQL compatible. Aurora Serverless for variable load.
- **Amazon DynamoDB** — managed KV + document NoSQL; serverless, single-digit ms latency.
- **Amazon DocumentDB** — managed MongoDB-compatible.
- **Amazon Neptune** — managed graph DB (Gremlin + SPARQL).
- **Amazon Timestream** — managed time-series.

### Storage

- **Amazon S3** — object storage; foundation of every AWS data lake. See [[../../tools/object-storage|Object Storage]].
- **Amazon S3 Glacier** — archival storage classes.
- **Amazon EBS** — block storage for EC2.
- **Amazon EFS** — managed NFS.

### Compute

- **AWS Lambda** — FaaS / serverless functions.
- **Amazon EC2** — IaaS VMs.
- **Amazon ECS** — managed containers (Docker).
- **AWS Fargate** — serverless containers.
- **Amazon EMR** — managed Hadoop / Spark / Presto / HBase.
- **AWS Batch** — managed batch processing.

### Analytics + Processing

- **Amazon Kinesis** — streaming (Data Streams, Firehose, Analytics, Video).
- **Amazon MSK** — managed Kafka.
- **AWS Glue** — managed serverless ETL on Spark; Glue Data Catalog.
- **Amazon Athena** — serverless SQL on S3 (Presto/Trino under the hood).
- **Amazon QuickSight** — BI tool.

### Ingestion + Migration

- **Amazon DMS** — Database Migration Service; supports CDC.
- **AWS Snowball / Snowmobile** — physical-shipping data transfer.
- **DataSync** — file transfer.

### Orchestration

- **AWS Step Functions** — state-machine workflows.
- **Amazon MWAA** — Managed Workflows for Apache Airflow.

### Identity + Security

- **AWS IAM** — identity + access management.
- **AWS KMS** — key management.
- **AWS Secrets Manager** — credential storage.
- **AWS Lake Formation** — data lake security + governance.

---


## Comparison with GCP and Azure

See [[../../guides/cloud-services-map|Cloud Services Map]] for the full side-by-side table.

| Need | AWS | [[../gcp/foundations/google-cloud-platform\|GCP]] | [[../azure/azure\|Azure]] |
| --- | --- | --- | --- |
| Object storage | S3 | Cloud Storage | Blob Storage |
| Warehouse | Redshift | BigQuery | Synapse |
| Streaming | Kinesis / MSK | Pub/Sub | Event Hubs |
| Containers | ECS / Fargate | Cloud Run / GKE | Container Instances |
| Functions | Lambda | Cloud Functions | Functions |

## Strengths

- **Breadth** — most services + features.
- **Maturity** — pioneered the space.
- **Marketshare** — most jobs + community.
- **Networking** — best-in-class VPC, Direct Connect.
- **Marketplace** — broad third-party offerings.

## Weaknesses

- **Complexity** — 200+ services with overlapping functions.
- **Cost surprise potential** — egress, idle resources.
- **Console UX** less polished than GCP's.
- **BigQuery-style serverless analytics** is harder (Athena is the closest, less tightly integrated).

## Common AWS data architectures

### Lakehouse

```
[ Sources ] → [ Glue / DMS ] → [ S3 ] → [ Athena / Redshift Spectrum / EMR ]
                                  │
                            [ Lake Formation governance ]
```

### Real-time

```
[ Apps ] → [ Kinesis Data Streams ] → [ Lambda / Kinesis Analytics ] → [ DynamoDB / S3 / Redshift ]
```

### Batch ETL

```
[ S3 / RDS ] → [ Glue Spark ] → [ Redshift ] → [ QuickSight ]
                       │
                  [ Step Functions / MWAA ]
```

## Certifications

- **AWS Certified Solutions Architect — Associate** (general cloud).
- **AWS Certified Solutions Architect — Professional**.
- **AWS Certified Data Engineer — Associate** (relatively new, replaces Big Data specialty).
- **AWS Certified Database — Specialty**.

## Interview Questions

1. **S3** vs **EFS** vs **EBS** — when each.
2. **Redshift** vs **Athena** — when prefer which.
3. **Kinesis** vs **MSK** — pros/cons.
4. Walk through a real-time fraud-detection architecture on AWS.
5. **Glue** vs **EMR** — comparable workloads.

## Related pages


> [!multi-column]
>
>> [!card] Sister cloud platforms
>> ---
>> [[../gcp/foundations/google-cloud-platform|Google Cloud Platform]], [[../azure/azure|Microsoft Azure]], [[../databricks/databricks|Databricks]]
>
>
>> [!card] Cross-cloud guides
>> ---
>> [[../../guides/cloud-services-map|Cloud Services Map]], [[../../guides/cost-optimization-cloud|Cost Optimization]], [[../../guides/messaging-service-guide|Messaging Service Guide]]
>
>
>> [!card] Tool catalogs
>> ---
>> [[../../tools/databases-overview|Databases Overview]], [[../../tools/orchestrators-overview|Orchestrators]], [[../../tools/object-storage|Object Storage]]
