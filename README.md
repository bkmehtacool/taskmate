# 🧠 Taskmate

Taskmate is a sleek, minimalistic task management application built with a microservices architecture. It allows users to create, read, update, and delete todo tasks efficiently.

## 📦 Tech Stack

- **Frontend:** React.js, Vite
- **Backend:** Node.js, Express, TypeScript
- **Database:** MongoDB
- **Containerization:** Docker, Docker Compose
- **CI/CD:** GitHub Actions (Coming soon...)

## 📁 Project Structure

```
taskmate/
│
├── frontend/             # React.js SPA
│   ├── public/
│   └── src/
│       └── ...
│
├── backend/              # Express.js API
│   ├── src/
│   └── ...
│
├── docker-compose.yml    # Multi-service orchestration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for development)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Local Development (No Docker)

1. **Start MongoDB locally**

2. **Backend**

   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Frontend**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

### Using Docker Compose

```bash
# Build and run all services
docker-compose up --build
```

Frontend will be available at [http://localhost:5173](http://localhost:5173)
Backend API at [http://localhost:3000](http://localhost:3000)

## 🛠️ API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Get all tasks     |
| POST   | `/api/tasks`     | Create a new task |
| PUT    | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

## 🐳 Docker Services

| Service  | Description      |
| -------- | ---------------- |
| frontend | React-based UI   |
| backend  | Express.js API   |
| mongo    | MongoDB database |

## 📌 TODO

- [x] Dockerize frontend and backend
- [x] Set up MongoDB container
- [ ] Configure GitHub Actions CI/CD
- [ ] Add unit tests (Jest)
- [ ] Production deployment (e.g. Render, Railway, etc.)

## 📄 License

MIT © 2025 BK
