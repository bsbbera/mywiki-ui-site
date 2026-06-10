---
title: REST & APIs
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - REST API
  - REST
  - API
  - SDK
  - RESTful API
  - Application Programming Interface
category: Software Engineering
tags:
  - REST
  - API
  - HTTP
  - SoftwareEngineering
  - WebServices
  - SDK
banner: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "A good API is not just easy to use but also hard to misuse."
> <cite>— Joshua Bloch</cite>

---

<span class="at-kicker">Software Engineering · Web Services</span>

# REST & APIs

<p class="at-lead">
An API (Application Programming Interface) defines how software components communicate. REST is the dominant architectural style for APIs on the web — a set of constraints that make web services simple, stateless, cacheable, and uniformly interfaced. Together, REST APIs are the connective tissue of modern software systems.
</p>

<span class="at-stat">stateless</span> &nbsp;·&nbsp; <span class="at-stat">HTTP-based</span> &nbsp;·&nbsp; <span class="at-stat">JSON/XML</span> responses &nbsp;·&nbsp; <span class="at-mark">the lingua franca of modern web services</span>

<span class="at-kicker">Core Concepts</span>

## What Is an API?

An **API (Application Programming Interface)** refers to programming instructions and standards for accessing a web tool or database. More formally: a computing interface that defines interactions between multiple software intermediaries.

> Think of an API as an **online function** — you call it with inputs, it does work, and returns outputs. You don't need to know how it works internally; you only need to know the interface.

A software service's implementation can be complex and changeable. If other software had to explicitly code all that detail to use a service, the result would be brittle and error-prone. Instead, developers structure their software to present a **clean, well-defined interface** that abstracts away needless detail — and document that interface. That's an API.

### Key API Concepts

| Concept | Definition |
| --- | --- |
| **Endpoint** | The web URL where the API can be accessed |
| **API Key** | Authentication credential to access the API |
| **Parameters** | Inputs passed to the API (`?key=value` query params or request body) |
| **Request** | What you send to the API (verb + URL + headers + optional body) |
| **Response** | What the API returns (status code + response body) |
| **Rate Limit** | Maximum requests allowed per unit time |

<span class="at-kicker">API vs SDK</span>

## API vs SDK

> [!grid|cols2]
>
>> [!card|section]
>> ###### API
>> ### *Application* Programming Interface
>> An API is a **set of rules and specifications** that defines how software components communicate. It is the contract between a provider and a consumer. An API can be a REST API, a library's public interface, or a database query interface.
>>
>> - Protocol-level interface
>> - Language-agnostic (any client can call a REST API)
>> - Defines what operations are possible and how to call them
>> - Example: Google Maps REST API — call it from any language
>
>> [!card|section]
>> ###### SDK
>> ### *Software* Development Kit
>> An **SDK (Software Development Kit)** is a set of tools provided by the manufacturer that facilitates usage of an API. It is a development kit for a specific platform, system, or programming language. A good SDK supplies any component a developer might find necessary.
>>
>> - Language/platform-specific
>> - Wraps an underlying API with idiomatic code
>> - Handles authentication, serialization, retries, error handling
>> - Example: `boto3` (AWS Python SDK) wraps AWS REST APIs
>>
>> **An API can be packaged in an SDK** — the SDK is the convenient wrapper; the API is the underlying interface.

<span class="at-kicker">REST Architecture</span>

## REST Principles

**REST (Representational State Transfer)** is an architectural style for distributed hypermedia systems, defined by Roy Fielding in 2000. Service endpoints supporting REST are called **RESTful**. REST is:

- **Protocol Independent** — HTTP is the most common protocol, but gRPC and others are possible
- **Stateless** — each request contains all information needed; server holds no session state
- **Resource-Based** — URIs identify resources; responses return representations of those resources
- **Uniform Interface** — consistent, standardized operations across all resources
- **Cacheable** — immutable representations can be cached by clients and intermediaries

> [!grid|cols3]
>
>> [!card|section]
>> ###### STATELESS
>> ### *Stateless* Communication
>> Every request from client to server must contain all information necessary to understand the request. The server holds no client session state between requests. This makes REST services easy to scale horizontally — any server can handle any request.
>
>> [!card|section]
>> ###### UNIFORM INTERFACE
>> ### *Uniform* Interface
>> REST APIs provide consistent, uniform interfaces across resources. Representations can have links to additional resources (HATEOAS). This reduces coupling between client and server — clients discover capabilities through the API itself.
>
>> [!card|section]
>> ###### CACHEABLE
>> ### *Cacheable* Responses
>> Responses must define themselves as cacheable or non-cacheable. Caching of immutable representations is appropriate and improves efficiency. Reduces load on the server and improves client-side performance.

### REST API Characteristics

1. **Simple and standardized** — well-understood conventions, widely documented
2. **Scales well and is stateless** — no server-side session management
3. **Highly performant** — supports caching at multiple layers
4. Can be implemented using **microservices** architecture

<span class="at-kicker">HTTP Methods</span>

## CRUD & HTTP Methods

REST maps database CRUD operations to HTTP verbs:

| CRUD | HTTP Method | Behavior | Idempotent? |
| --- | --- | --- | --- |
| **Create** | `POST` | Create a new resource | No |
| **Read** | `GET` | Retrieve a resource | Yes |
| **Update** | `PUT` | Replace a resource entirely | Yes |
| **Update (partial)** | `PATCH` | Partial update of a resource | Sometimes |
| **Delete** | `DELETE` | Remove a resource | Yes |

> [!grid|cols2]
>
>> [!card|section]
>> ###### HTTP REQUEST
>> ### Request *Structure*
>> Every HTTP request has:
>> - **Verb**: GET, POST, PUT, PATCH, DELETE
>> - **URI**: Uniform Resource Identifier — the endpoint address
>> - **Request Headers**: Metadata (Content-Type, Authorization, Accept)
>> - **Request Body** (optional): State/data being sent (JSON or XML representation)
>>
>> ```http
>> POST /api/v1/users HTTP/1.1
>> Host: api.example.com
>> Authorization: Bearer eyJhbGc...
>> Content-Type: application/json
>>
>> {"name": "Alice", "email": "alice@example.com"}
>> ```
>
>> [!card|section]
>> ###### HTTP RESPONSE
>> ### Response *Structure*
>> Every HTTP response has:
>> - **Status Code**: 3-digit HTTP status code
>> - **Response Headers**: Metadata (Content-Type, Cache-Control)
>> - **Response Body**: Resource representation (JSON, XML, HTML)
>>
>> ```http
>> HTTP/1.1 201 Created
>> Content-Type: application/json
>> Location: /api/v1/users/42
>>
>> {"id": 42, "name": "Alice",
>>  "email": "alice@example.com"}
>> ```

<span class="at-kicker">Status Codes</span>

## HTTP Status Codes

Status codes communicate the result of the request at a glance:

| Range | Category | Common Codes |
| --- | --- | --- |
| **2xx** | Success | `200 OK`, `201 Created`, `204 No Content` |
| **3xx** | Redirection | `301 Moved Permanently`, `304 Not Modified` |
| **4xx** | Client Error | `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `429 Too Many Requests` |
| **5xx** | Server Error | `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`, `504 Gateway Timeout` |

> [!tip]
> `401 Unauthorized` means unauthenticated (no/invalid credentials). `403 Forbidden` means authenticated but not authorized (you don't have permission). The naming is historically confusing but the distinction matters for debugging.

<span class="at-kicker">Authentication</span>

## Authentication Patterns

> [!grid|cols3]
>
>> [!card|section]
>> ###### API KEY
>> ### *API Key* Auth
>> Simple string credential passed as a header or query parameter. Easy to implement but lacks granular permissions. Revoke by rotating the key. Best for: server-to-server, internal tools.
>>
>> ```http
>> GET /api/data
>> X-API-Key: sk_live_abc123
>> ```
>
>> [!card|section]
>> ###### BEARER TOKEN
>> ### *OAuth 2.0* / JWT
>> Token-based authentication. Client obtains a token via OAuth flow, passes it as `Authorization: Bearer <token>`. JWT tokens are self-contained (carry claims). Best for: user-facing APIs, third-party integrations.
>>
>> ```http
>> GET /api/profile
>> Authorization: Bearer eyJhbGc...
>> ```
>
>> [!card|section]
>> ###### BASIC AUTH
>> ### *Basic* Authentication
>> Username and password base64-encoded in the Authorization header. Simple but should only be used over HTTPS. Credentials sent with every request. Best for: simple internal APIs, legacy systems.
>>
>> ```http
>> GET /api/data
>> Authorization: Basic dXNlcjpwYXNz
>> ```

<span class="at-kicker">Design Patterns</span>

## API Design Best Practices

> [!grid|cols2]
>
>> [!card|section]
>> ###### VERSIONING
>> ### API *Versioning*
>> Version your APIs to allow backwards-incompatible changes without breaking existing clients.
>> - **URL versioning** (most common): `/api/v1/users`, `/api/v2/users`
>> - **Header versioning**: `Accept: application/vnd.myapi.v2+json`
>> - **Query param**: `/api/users?version=2`
>>
>> Never remove a version without a deprecation notice period. Major versions signal breaking changes; minor versions are backwards compatible.
>
>> [!card|section]
>> ###### RATE LIMITING
>> ### *Rate* Limiting
>> Protect APIs from abuse and ensure fair usage. Common strategies:
>> - **Fixed window**: N requests per minute
>> - **Sliding window**: More accurate, prevents burst at window boundary
>> - **Token bucket**: Allows controlled bursting
>>
>> Return `429 Too Many Requests` with a `Retry-After` header when throttled. Document rate limits clearly in API docs.
>
>> [!card|section]
>> ###### RESOURCE NAMING
>> ### *Naming* Conventions
>> REST resource URLs should be nouns, not verbs:
>> - ✅ `GET /users/{id}` — get a user
>> - ✅ `POST /orders` — create an order
>> - ❌ `GET /getUser` — verb in URL
>> - ❌ `POST /createOrder` — verb in URL
>>
>> Use plural nouns for collections (`/users`, `/orders`). Nest resources for relationships: `/users/{id}/orders`.
>
>> [!card|section]
>> ###### ERROR HANDLING
>> ### *Error* Responses
>> Return consistent, informative error responses:
>> ```json
>> {
>>   "error": {
>>     "code": "VALIDATION_ERROR",
>>     "message": "Email is required",
>>     "field": "email",
>>     "request_id": "req_abc123"
>>   }
>> }
>> ```
>> Always include: machine-readable error code, human-readable message, and a request ID for tracing.

<span class="at-kicker">Related Concepts</span>

## REST vs Other API Styles

| Style | Protocol | Format | Best For |
| --- | --- | --- | --- |
| **REST** | HTTP | JSON/XML | General-purpose web APIs, CRUD operations |
| **GraphQL** | HTTP | JSON | Flexible queries, reduce over/under-fetching |
| **gRPC** | HTTP/2 | Protocol Buffers | High-performance microservice-to-microservice |
| **WebSocket** | WS | Any | Real-time bidirectional (chat, live updates) |
| **SOAP** | HTTP/SMTP | XML | Legacy enterprise, formal contracts |

> [!info]
> REST is **protocol independent** — while HTTP is most common, the REST constraints (stateless, cacheable, uniform interface) can theoretically be applied over other protocols. GraphQL and gRPC are common alternatives for specific use cases but REST remains the dominant style for public APIs.

## Related pages

> [!grid]
>
>> [!card]
>> ##### [[microservices|Microservices (DevOps & SRE)]]
>> Microservices communicate via REST APIs — the design principles of REST directly shape how services are coupled and versioned.
>
>> [!card]
>> ##### [[docker|Docker]]
>> API services are containerized with Docker for consistent deployment across environments.
>
>> [!card]
>> ##### [[kubernetes|Kubernetes]]
>> The Kubernetes API server itself is a REST API — kubectl commands are translated to REST calls. Services on K8s expose REST endpoints.
>
>> [!card]
>> ##### [[sagemaker|AWS SageMaker]]
>> SageMaker real-time endpoints expose REST APIs for ML inference — deployed models are called via HTTP POST requests.
>
>> [!card] People & books
>> [[../../people/martin-fowler|Martin Fowler]] (Microservices architecture) · [[../../people/gene-kim|Gene Kim]] · [[../../people/jez-humble|Jez Humble]]
>> [[../../books/accelerate|Accelerate]] · [[../../books/site-reliability-engineering|Site Reliability Engineering]]
