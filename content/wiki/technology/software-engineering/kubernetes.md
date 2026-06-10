---
title: Kubernetes
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - K8s
  - container orchestration
  - Kube
category: Software Engineering
tags:
  - Kubernetes
  - Containers
  - DevOps
  - Orchestration
  - SoftwareEngineering
banner: https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Kubernetes
> ###### Tool Note
> | | |
> | --- | --- |
> | **Developer** | Google / CNCF |
> | **Type** | Container orchestration |
> | **Initial release** | 2014 |
> | **Written in** | Go |
> | **License** | Apache 2.0 |
> | **Website** | kubernetes.io |

---

> "The whole is more than the sum of its parts."
> <cite>— Aristotle</cite>

---

<span class="at-kicker">Software Engineering · Orchestration</span>

# Kubernetes

<p class="at-lead">
Kubernetes (K8s) is the open-source container orchestration engine that automates deployment, scaling, and management of containerized applications — transforming a cluster of machines into a single, programmable compute fabric.
</p>

<span class="at-stat">CNCF graduated</span> &nbsp;·&nbsp; <span class="at-stat">2014</span> open-sourced &nbsp;·&nbsp; <span class="at-stat">Go</span> language &nbsp;·&nbsp; <span class="at-mark">the operating system of the cloud-native world</span>

<span class="at-kicker">Core Concept</span>

## Overview

Kubernetes is a **container orchestration engine** that automates deployment, scaling, and management of containerized applications. It facilitates both **declarative configuration** (describe the desired state in YAML) and **automation** (the control plane continuously reconciles actual state toward desired state).

Originally developed by Google (drawing from their internal Borg system), Kubernetes was open-sourced in 2014 and donated to the Cloud Native Computing Foundation (CNCF), where it has become the cornerstone of the cloud-native ecosystem.

> [!info]
> The name "Kubernetes" comes from Greek for "helmsman" or "pilot." K8s is a numeronym — the 8 represents the eight letters between K and s.

<span class="at-kicker">Architecture</span>

## Cluster Architecture

A Kubernetes cluster has two layers: the **Control Plane** (Master) that makes global decisions, and **Nodes** (Workers) that run the actual workloads.

```
┌────────────────────────────────────────────────┐
│              CONTROL PLANE (Master)            │
│  ┌──────────┐  ┌──────────┐  ┌─────────────┐  │
│  │ API      │  │Scheduler │  │ Controller  │  │
│  │ Server   │  │          │  │ Manager     │  │
│  └──────────┘  └──────────┘  └─────────────┘  │
│  ┌──────────────────────────────────────────┐  │
│  │           etcd (cluster state)           │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
         │                    │
┌────────┴────────┐  ┌────────┴────────┐
│    Node 1       │  │    Node 2       │
│  ┌───────────┐  │  │  ┌───────────┐  │
│  │  Kubelet  │  │  │  │  Kubelet  │  │
│  └───────────┘  │  │  └───────────┘  │
│  ┌──┐ ┌──┐ ┌──┐│  │  ┌──┐ ┌──┐ ┌──┐│
│  │P1│ │P2│ │P3││  │  │P4│ │P5│ │P6││
│  └──┘ └──┘ └──┘│  │  └──┘ └──┘ └──┘│
└────────────────┘  └────────────────┘
     Pods = containers
```

> [!grid|cols2]
>
>> [!card|section]
>> ###### CONTROL PLANE
>> ### Master *Node*
>> The control plane is the brain of Kubernetes. It runs the **API Server** (single entry point for all cluster operations), **Scheduler** (assigns pods to nodes based on resource availability), **Controller Manager** (runs reconciliation loops keeping actual state = desired state), and **etcd** (distributed key-value store holding all cluster state). Masters don't run application workloads.
>
>> [!card|section]
>> ###### WORKER NODES
>> ### Worker *Nodes*
>> Nodes are the workers that run application containers. Each node runs a **Kubelet** (agent that communicates with the control plane and manages pods on the node), **kube-proxy** (manages network rules for service routing), and a **container runtime** (containerd or CRI-O). A `Node Pool` is a subset of machines within a cluster sharing the same configuration — useful for GPU nodes, high-memory nodes, etc.

<span class="at-kicker">Core Objects</span>

## Pods

A **Pod** is the smallest deployable unit in Kubernetes — not a container, but a wrapper around one or more tightly coupled containers that share:
- The same network namespace (same IP address and port space)
- The same storage volumes
- The same lifecycle

> [!info]
> The hierarchy is: **Master Endpoint → Node Instances → Kubelets → Pods → Docker Containers**. Each Kubelet controls a pod; pods contain individual Docker containers.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  containers:
  - name: app
    image: myrepo/my-app:v1.2
    ports:
    - containerPort: 8080
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
```

> [!warning]
> Never run pods directly in production — use Deployments. Standalone pods are not rescheduled if they crash or their node fails.

<span class="at-kicker">Workload Resources</span>

## Deployments

A **Deployment** manages a set of identical pods (a ReplicaSet), ensuring the desired number of replicas are always running. It handles rolling updates and rollbacks declaratively.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: app
        image: myrepo/my-app:v1.2
        ports:
        - containerPort: 8080
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1
```

> [!grid|cols3]
>
>> [!card|section]
>> ###### DEPLOYMENT
>> ### Stateless *Workloads*
>> Manages replicated pods for stateless applications. Supports rolling updates, rollbacks, and scaling. The go-to workload type for web apps and API services.
>
>> [!card|section]
>> ###### STATEFULSET
>> ### Stateful *Workloads*
>> Like Deployments but for stateful applications (databases, Kafka). Provides stable pod names, stable network identities, and ordered deployment/scaling. Each pod gets its own persistent volume.
>
>> [!card|section]
>> ###### DAEMONSET
>> ### Node-Level *Agents*
>> Ensures a copy of a pod runs on every node. Used for cluster-wide services like log collectors (Fluentd), monitoring agents (Prometheus node-exporter), and network plugins.

<span class="at-kicker">Networking</span>

## Services

A **Service** exposes a set of pods as a stable network endpoint. Pods are ephemeral (they get new IPs on restart), so Services provide a consistent virtual IP and DNS name that load-balances across healthy pods.

| Service Type | Scope | Use case |
| --- | --- | --- |
| **ClusterIP** | Cluster-internal only | Pod-to-pod communication inside the cluster |
| **NodePort** | Exposes on each node's IP | Dev/testing direct access, no cloud LB needed |
| **LoadBalancer** | External cloud LB | Production external traffic (AWS ELB, GCP GLB) |
| **ExternalName** | DNS alias | Routing to external services by DNS name |

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-svc
spec:
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 8080
  type: LoadBalancer
```

<span class="at-kicker">Configuration</span>

## ConfigMaps & Secrets

**ConfigMaps** store non-sensitive configuration data as key-value pairs. **Secrets** store sensitive data (passwords, tokens, keys) — base64-encoded and optionally encrypted at rest.

> [!grid|cols2]
>
>> [!card|section]
>> ###### CONFIGMAP
>> ### Application *Configuration*
>> Decouple configuration from container images. Mount as environment variables or as files in the pod filesystem. Change config without rebuilding images — just update the ConfigMap and restart pods.
>>
>> ```yaml
>> apiVersion: v1
>> kind: ConfigMap
>> metadata:
>>   name: app-config
>> data:
>>   DATABASE_HOST: "postgres-svc"
>>   LOG_LEVEL: "INFO"
>> ```
>
>> [!card|section]
>> ###### SECRETS
>> ### Sensitive *Data*
>> Store passwords, API keys, TLS certificates. Kubernetes restricts access via RBAC. For production, integrate with external secret managers (AWS Secrets Manager, HashiCorp Vault) using the External Secrets Operator.
>>
>> ```yaml
>> apiVersion: v1
>> kind: Secret
>> metadata:
>>   name: db-secret
>> type: Opaque
>> data:
>>   password: c2VjcmV0  # base64
>> ```

<span class="at-kicker">Traffic Routing</span>

## Namespaces & Ingress

**Namespaces** partition cluster resources between teams or environments (dev/staging/prod). Resource quotas and RBAC policies apply per namespace.

**Ingress** routes external HTTP/HTTPS traffic to internal services — acting as a smart layer-7 load balancer and API gateway with path-based and host-based routing, TLS termination, and rate limiting.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: api.example.com
    http:
      paths:
      - path: /v1
        pathType: Prefix
        backend:
          service:
            name: api-v1-svc
            port:
              number: 80
      - path: /v2
        pathType: Prefix
        backend:
          service:
            name: api-v2-svc
            port:
              number: 80
```

<span class="at-kicker">Autoscaling</span>

## Horizontal Pod Autoscaler (HPA)

The **Horizontal Pod Autoscaler (HPA)** automatically scales the number of pod replicas in a Deployment based on observed CPU/memory utilization or custom metrics. Automatic rescaling also takes place at the cluster level with the **Cluster Autoscaler**, which adds/removes nodes from the node pool based on pending pod demand.

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

<span class="at-kicker">Container Registry</span>

## Container Registry Integration

Kubernetes pulls images from container registries at pod startup. A **Container Registry** is a private registry for Docker images, accessible through secure HTTPS endpoints that let you push, pull, and manage images from any system — whether it's a Compute Engine instance or your own hardware.

| Registry | Integration |
| --- | --- |
| **Google Artifact Registry** | Native GKE integration via Workload Identity |
| **Amazon ECR** | IAM role-based access for EKS pods |
| **Docker Hub** | Pull secret required for private repos |
| **GitHub Container Registry** | ImagePullSecret from GitHub PAT |

> [!tip]
> **Container Builder** (Google Cloud Build / AWS CodeBuild) executes container image builds on cloud infrastructure, imports source code from repositories, and produces Docker container artifacts — feeding directly into your registry and triggering Kubernetes rolling updates.

## Related pages

> [!grid]
>
>> [!card]
>> ##### [[docker|Docker]]
>> The container platform that creates the images Kubernetes orchestrates — the foundational building block of K8s workloads.
>
>> [!card]
>> ##### [[devops-sre|DevOps & SRE]]
>> SRE practices, error budgets, and SLOs that govern how Kubernetes clusters and services are operated at scale.
>
>> [!card]
>> ##### [[terraform|Terraform]]
>> Provisions the Kubernetes cluster infrastructure itself (EKS, GKE, AKS) and manages node pools declaratively.
>
>> [!card]
>> ##### [[rest-api|REST & APIs]]
>> Services deployed on Kubernetes expose REST APIs — the Kubernetes API server itself is a REST API consumed by kubectl.
>
>> [!card] People & books
>> [[../../people/solomon-hykes|Solomon Hykes]] (Docker/container pioneer) · [[../../people/gene-kim|Gene Kim]] · [[../../people/jez-humble|Jez Humble]]
>> [[../../books/the-phoenix-project|The Phoenix Project]] · [[../../books/accelerate|Accelerate]] · [[../../books/site-reliability-engineering|Site Reliability Engineering]]
