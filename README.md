# Taskmate Microservices

This repository contains the **Taskmate** application — a simple microservices-based todo app with authentication.

---

## Services

| Service Name       | Purpose                                    | Tech Stack                   | Port    |
|--------------------|--------------------------------------------|------------------------------|---------|
| `user-service`     | User authentication and authorization      | Node.js, Express, MongoDB, JWT, TypeScript | 3000    |
| `taskmate-service` | Todo task CRUD management                    | Node.js, Express, MongoDB, TypeScript     | 3002    |
| `web`              | Frontend UI using Next.js and Material UI   | Next.js, Material UI, TypeScript            | 3001    |

---

## Getting Started

### Prerequisites

- Node.js v18+
- Docker & Docker Compose
- MongoDB (can run inside Docker)
- Git

---

### Running Locally

Clone the repo:

```bash
git clone https://github.com/bkmehtacool/taskmate.git
cd taskmate
