---
title: Cloud Services Map
Created:
  - 2026-04-29
date modified: Wednesday, April 29th 2026, 12:35:00 pm
aliases:
  - Cloud Services Map
  - Cloud Comparison
category: Computer Science
tags:
  - DataEngineering
  - Cloud
  - AWS
  - Azure
  - GCP
  - Guide
banner:
dg-publish: true
---

---

A side-by-side comparison of cloud services across the **big three** providers, organized by category. Useful for migration planning, multi-cloud designs, or choosing which platform to learn (source: Guides/Cloud Services Map.md, inspired by ByteByteGo's Cloud Comparison).

## Compute

| AWS | Azure | GCP |
| --- | --- | --- |
| EC2 | Virtual Machines | [[../../gcp/compute/compute-engine\|Compute Engine]] |
| ECS | Container Instances | [[../../gcp/compute/cloud-run\|Cloud Run]] |
| EKS | AKS | [[../../gcp/compute/kubernetes-engine\|GKE]] |
| Lambda | Functions | [[../../gcp/compute/cloud-functions\|Cloud Functions]] |
| Fargate | Container Apps | Cloud Run |
| Batch | Batch | Batch on GKE |

## Storage

| AWS | Azure | GCP |
| --- | --- | --- |
| S3 | Blob Storage | [[../../gcp/storage/cloud-storage\|Cloud Storage]] |
| EBS | Disk Storage | [[../../gcp/storage/persistent-disk\|Persistent Disk]] |
| EFS | Files | [[../../gcp/storage/filestore\|Filestore]] |
| S3 Glacier | Archive Blob | Cloud Storage Archive class |

## Databases

| AWS | Azure | GCP |
| --- | --- | --- |
| RDS | SQL Database | [[../../gcp/databases/cloud-sql\|Cloud SQL]] |
| Aurora | Cosmos DB | [[../../gcp/databases/cloud-spanner\|Cloud Spanner]] |
| DynamoDB | Cosmos DB | [[../../gcp/databases/cloud-bigtable\|Bigtable]] / [[../../gcp/databases/cloud-datastore\|Firestore]] |
| ElastiCache | Cache for Redis | [[../../gcp/databases/memorystore\|Memorystore]] |
| Redshift | Synapse Analytics | [[../../gcp/analytics/bigquery\|BigQuery]] |
| Neptune | Cosmos DB Gremlin | (3rd-party) |
| Timestream | Data Explorer | (Bigtable) |

## Data Processing

| AWS | Azure | GCP |
| --- | --- | --- |
| Kinesis Data Streams | Stream Analytics | [[../../gcp/analytics/dataflow\|Dataflow]] |
| Glue | Data Factory | [[../../gcp/analytics/datafusion\|Data Fusion]] |
| EMR | HDInsight | Dataproc |
| Step Functions | Logic Apps | Cloud Workflows |
| MWAA (Airflow) | Data Factory + Airflow | Cloud Composer |
| Athena | Synapse Serverless SQL | BigQuery |

## Events + Messaging

| AWS | Azure | GCP |
| --- | --- | --- |
| SNS | Service Bus topics | (Pub/Sub) |
| SQS | Queue Storage | [[../../gcp/analytics/pubsub\|Pub/Sub]] |
| EventBridge | Event Grid | Eventarc |
| Kinesis Data Firehose | Event Hubs | Pub/Sub Lite |
| MSK (Kafka) | Event Hubs Kafka API | Confluent on GCP |

## Management + Governance

| AWS | Azure | GCP |
| --- | --- | --- |
| CloudWatch | Azure Monitor | Cloud Operations Suite |
| CloudFormation | Resource Manager (ARM) | Deployment Manager / Config Connector |
| CloudTrail | Activity Log | Cloud Audit Logs |
| Glue Data Catalog | Purview | [[../../gcp/analytics/data-catalog\|Data Catalog / Dataplex]] |
| Lake Formation | Purview | Dataplex |

## Networking + Security

| AWS | Azure | GCP |
| --- | --- | --- |
| VPC | Virtual Network | VPC |
| IAM | Microsoft Entra ID | IAM |
| KMS | Key Vault | Cloud KMS |
| Secrets Manager | Key Vault | Secret Manager |
| WAF | Web Application Firewall | Cloud Armor |
| CloudFront | Front Door / CDN | Cloud CDN |
| Route 53 | DNS | Cloud DNS |

## Machine Learning

| AWS | Azure | GCP |
| --- | --- | --- |
| SageMaker | Machine Learning | Vertex AI |
| Bedrock | OpenAI Service | Vertex AI Model Garden |
| Rekognition | Cognitive Services Vision | Vision AI |
| Textract | Form Recognizer | Document AI |
| Comprehend | Cognitive Services Language | Natural Language AI |

## Data Migration / CDC

| AWS | Azure | GCP |
| --- | --- | --- |
| DMS | Database Migration Service | Datastream / DMS |
| Snowball / Snowmobile | Data Box | Transfer Appliance |
| DataSync | AzCopy | Storage Transfer Service |

## Choosing a cloud — at a glance

- **AWS** — biggest market share + service breadth; default for many enterprises.
- **GCP** — best analytics + ML stack (BigQuery, Vertex AI); strong networking; Kubernetes-native.
- **Azure** — best for Microsoft-heavy orgs (SQL Server, AD, Office 365 integration).

## Multi-cloud reality

Most large enterprises now run **multi-cloud** for redundancy, vendor leverage, or M&A. Trends:

- **Data lake on object storage** of choice.
- **Cross-cloud query engines** — Trino, Starburst, Databricks, Snowflake.
- **Kubernetes** as portable compute substrate.
- **OpenTelemetry** for portable observability.

## Interview Questions

1. **Pick a cloud** for a new analytics project — justify.
2. Walk through migrating a data lake from AWS S3 to GCP GCS.
3. **Multi-cloud** advantages and pitfalls.
4. Compare **Redshift** vs **Synapse** vs **BigQuery**.

## Related pages

> [!multi-column]
>
>> [!card] Sister guides
>> [[messaging-service-guide|Messaging Service Guide]], [[cost-optimization-cloud|Cost Optimization]], [[data-pipeline-best-practices|Pipeline Best Practices]]
>
>
>> [!card] Cloud platforms
>> [[../../gcp/foundations/google-cloud-platform|GCP]], [[../../aws/aws|AWS]], [[../../azure/azure|Azure]], [[../../databricks/databricks|Databricks]]

