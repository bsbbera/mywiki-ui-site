---
title: Docker
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Docker containers
  - container platform
category: Software Engineering
tags:
  - Docker
  - Containers
  - DevOps
  - SoftwareEngineering
  - Infrastructure
banner: https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

> [!infobox|right]
> # Docker
> ###### Tool Note
> | | |
> | --- | --- |
> | **Developer** | Docker Inc |
> | **Type** | Container platform |
> | **Initial release** | 2013 |
> | **Written in** | Go |
> | **License** | Apache 2.0 |
> | **Website** | docker.com |

---

> "Simplicity is the ultimate sophistication."
> <cite>— Leonardo da Vinci</cite>

---

<span class="at-kicker">Software Engineering · Containers</span>

# Docker

<p class="at-lead">
Docker is an open platform that packages applications and their dependencies into lightweight, portable containers — eliminating the "works on my machine" problem and enabling consistent deployments from laptop to cloud at any scale.
</p>

<span class="at-stat">container platform</span> &nbsp;·&nbsp; <span class="at-stat">2013</span> release &nbsp;·&nbsp; <span class="at-stat">Go</span> language &nbsp;·&nbsp; <span class="at-mark">the de-facto standard for application containerization</span>

<span class="at-kicker">Core Concept</span>

## Overview

Docker **simplifies and accelerates your workflow** by allowing isolation of an application from its environment. In the process of creating apps, developers require writing a lot of code with multiple languages, frameworks, and architectures with discontinuous interfaces — Docker handles all of that complexity. It can handle any binary, language, or library.

At its core, Docker solves the **environment inconsistency problem**: the same container image runs identically on a developer's laptop, a CI/CD pipeline, a staging server, and a production cluster. No more dependency conflicts, no more "it works on my machine."

| Layer | What it provides |
| --- | --- |
| **Docker Engine** | Runtime that builds and runs containers on the host OS |
| **Docker Images** | Read-only templates that define the container filesystem |
| **Docker Containers** | Running instances of images — isolated processes |
| **Docker Registry** | Storage and distribution for images (Docker Hub, ECR, GCR) |

<span class="at-kicker">Images vs Containers</span>

## Images vs Containers

> [!grid|cols2]
>
>> [!card|section]
>> ###### IMAGES
>> ### Static *Templates*
>> An image is a **read-only, layered snapshot** of a filesystem — it contains the OS base, runtime, libraries, and application code. Images are built from a `Dockerfile` and stored in registries. They are **immutable**: once built, they don't change. Think of an image as the blueprint.
>
>> [!card|section]
>> ###### CONTAINERS
>> ### Running *Instances*
>> A container is a **live, running process** spun up from an image. `docker run` creates a container from an image. `docker start` restarts a stopped container, preserving all its previous filesystem changes in a writable layer on top of the immutable image. Think of a container as the house built from the blueprint.

> [!tip]
> One image can spawn many containers simultaneously. Containers share the host OS kernel but are isolated from each other via Linux namespaces and cgroups — giving near-native performance with strong isolation.

<span class="at-kicker">Dockerfile</span>

## Dockerfile

A `Dockerfile` is a text script of instructions that Docker reads top-to-bottom to build an image. Each instruction creates a new **layer** in the image, and layers are cached — only changed layers are rebuilt, making builds fast.

```dockerfile
# Base image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy and install dependencies first (cached layer)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose port
EXPOSE 8080

# Default command
CMD ["python", "app.py"]
```

> [!grid|cols3]
>
>> [!card|section]
>> ###### FROM
>> ### Base *Image*
>> Every Dockerfile starts with `FROM`. Specifies the parent image to build on. Use slim or alpine variants to minimize image size and attack surface.
>
>> [!card|section]
>> ###### RUN
>> ### Execute *Commands*
>> `RUN` executes a shell command during build. Chain commands with `&&` to minimize layers. Each `RUN` creates a new cached layer.
>
>> [!card|section]
>> ###### COPY / ADD
>> ### Add *Files*
>> `COPY` adds files from the build context into the image. `ADD` also supports URLs and auto-extracts tar archives. Prefer `COPY` for clarity.
>
>> [!card|section]
>> ###### ENV
>> ### Environment *Variables*
>> `ENV` sets environment variables available at runtime. Use for configuration that varies between environments (dev/prod).
>
>> [!card|section]
>> ###### EXPOSE
>> ### Declare *Ports*
>> `EXPOSE` documents which port the container listens on. It does NOT publish the port — that's done with `docker run -p`.
>
>> [!card|section]
>> ###### CMD / ENTRYPOINT
>> ### Container *Command*
>> `CMD` is the default command run when a container starts. `ENTRYPOINT` sets the executable; `CMD` provides default arguments. Together they define the container's runtime behavior.

<span class="at-kicker">Docker Compose</span>

## Docker Compose

Docker Compose defines and runs **multi-container applications** using a single `docker-compose.yml` file. It is the standard tool for local development environments with multiple services (app + database + cache).

```yaml
version: "3.9"
services:
  web:
    build: .
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=postgresql://db/myapp
    depends_on:
      - db
    volumes:
      - .:/app

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_PASSWORD: secret
    volumes:
      - postgres_data:/var/lib/postgresql/data

  cache:
    image: redis:7-alpine

volumes:
  postgres_data:
```

> [!info]
> `docker compose up -d` starts all services in detached mode. `docker compose down` stops and removes containers (but preserves named volumes). `docker compose logs -f` streams all service logs.

<span class="at-kicker">Volumes & Networking</span>

## Volumes & Networks

> [!grid|cols2]
>
>> [!card|section]
>> ###### VOLUMES
>> ### Persistent *Storage*
>> Containers are ephemeral — their writable layer is lost when the container is removed. **Volumes** provide persistent storage managed by Docker, surviving container lifecycle. **Bind mounts** map a host directory directly into the container (ideal for dev — changes reflect immediately). **tmpfs mounts** store data in memory only.
>>
>> ```shell
>> # Named volume
>> docker run -v mydata:/app/data myimage
>> # Bind mount
>> docker run -v $(pwd):/app myimage
>> ```
>
>> [!card|section]
>> ###### NETWORKS
>> ### Container *Communication*
>> Docker creates isolated virtual networks. Containers on the same network communicate by **service name** (DNS resolution). Default bridge network isolates containers from the host. Custom networks provide better isolation and service discovery. The `host` network removes isolation and uses the host's network stack directly.
>>
>> ```shell
>> # Create custom network
>> docker network create mynet
>> # Run container on network
>> docker run --network mynet myimage
>> ```

<span class="at-kicker">Registries</span>

## Container Registries

A registry stores and distributes Docker images. Images are versioned by **tags** (e.g., `python:3.11-slim`, `myapp:v1.2.3`).

| Registry | Provider | Use case |
| --- | --- | --- |
| **Docker Hub** | Docker Inc | Public images, community base images |
| **Amazon ECR** | AWS | Private images for ECS/EKS workloads |
| **Google GCR / Artifact Registry** | GCP | Private images for GKE/Cloud Run |
| **GitHub Container Registry** | GitHub | Images tied to GitHub repos/Actions |
| **Azure ACR** | Azure | Private images for AKS workloads |

```shell
# Login, tag, push
docker login
docker tag myapp:latest myuser/myapp:v1.0
docker push myuser/myapp:v1.0

# Pull and run
docker pull myuser/myapp:v1.0
docker run myuser/myapp:v1.0
```

<span class="at-kicker">Essential Commands</span>

## Common Commands

```shell
# ── Images ──────────────────────────────────────────────
docker build -t myapp:latest .        # Build image from Dockerfile
docker images                          # List local images
docker pull ubuntu:22.04              # Pull image from registry
docker push myrepo/myapp:v1           # Push image to registry
docker rmi myapp:latest               # Remove image
docker image prune                     # Remove dangling images

# ── Containers ──────────────────────────────────────────
docker run -d -p 8080:80 --name web nginx   # Run detached, map ports
docker run -it ubuntu bash                   # Run interactive shell
docker ps                                    # List running containers
docker ps -a                                 # List all containers
docker stop web                              # Stop container gracefully
docker start web                             # Start stopped container
docker restart web                           # Restart container
docker rm web                                # Remove stopped container
docker logs -f web                           # Stream container logs
docker exec -it web bash                     # Shell into running container

# ── System ──────────────────────────────────────────────
docker inspect web                           # Full container metadata
docker stats                                 # Live resource usage
docker system prune -a                       # Remove all unused resources
docker volume ls                             # List volumes
docker network ls                            # List networks
```

> [!warning]
> `docker system prune -a` removes ALL unused images, containers, networks, and build cache. Use with care in shared environments.

<span class="at-kicker">Best Practices</span>

## Best Practices

> [!grid|cols3]
>
>> [!card|section]
>> ###### IMAGE SIZE
>> ### Minimize *Image Size*
>> Use slim/alpine base images. Chain `RUN` commands with `&&`. Use multi-stage builds to separate build-time and runtime dependencies. Smaller images deploy faster and have smaller attack surfaces.
>
>> [!card|section]
>> ###### LAYER CACHE
>> ### Optimize *Layer Cache*
>> Order Dockerfile instructions from least to most frequently changed. Copy `requirements.txt` before application code so dependency layers are cached across code changes.
>
>> [!card|section]
>> ###### SECURITY
>> ### Run as *Non-Root*
>> Never run containers as root in production. Add a `USER` instruction in your Dockerfile. Scan images with `docker scout` or Trivy for vulnerability detection before deployment.
>
>> [!card|section]
>> ###### SECRETS
>> ### Manage *Secrets*
>> Never bake secrets into images. Use environment variables at runtime, Docker secrets (Swarm), or mount secrets from a vault. Use `.dockerignore` to exclude sensitive files from the build context.
>
>> [!card|section]
>> ###### MULTI-STAGE
>> ### Multi-Stage *Builds*
>> Use separate build and runtime stages. Compile/install in a full image, then copy artifacts into a minimal runtime image. Drastically reduces final image size.
>
>> [!card|section]
>> ###### HEALTH CHECKS
>> ### Container *Health*
>> Add `HEALTHCHECK` instructions so orchestrators (Kubernetes, ECS) know when to restart unhealthy containers. Define meaningful checks against your application's readiness endpoint.

## Related pages

> [!grid]
>
>> [!card]
>> ##### [[kubernetes|Kubernetes]]
>> Container orchestration platform that runs, scales, and manages Docker containers in production clusters.
>
>> [!card]
>> ##### [[devops-sre|DevOps & SRE]]
>> Cultural and operational practices that Docker enables — CI/CD pipelines, infrastructure as code, blameless postmortems.
>
>> [!card]
>> ##### [[terraform|Terraform]]
>> Infrastructure as Code tool used alongside Docker to provision the cloud infrastructure that hosts containers.
>
>> [!card]
>> ##### [[rest-api|REST & APIs]]
>> Containerized microservices expose REST APIs — Docker enables running multiple API services in isolation locally.
>
>> [!card] People & books
>> [[../../people/solomon-hykes|Solomon Hykes]] (Docker creator) · [[../../people/gene-kim|Gene Kim]] · [[../../people/jez-humble|Jez Humble]]
>> [[../../books/the-phoenix-project|The Phoenix Project]] · [[../../books/accelerate|Accelerate]] · [[../../books/site-reliability-engineering|Site Reliability Engineering]]
