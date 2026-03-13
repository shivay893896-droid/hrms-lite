# HRMS Lite – Employee Management System

HRMS Lite is a modern **Full-Stack Human Resource Management System** built using **FastAPI, MongoDB, and React (Vite)**.

It provides a clean REST API and responsive UI to manage employees and HR operations.

This project demonstrates **production-ready backend architecture, Docker support, and cloud deployment**.

---

# Live Application

Frontend (Vercel) 
https://hrms-lite-phi-two.vercel.app

Backend API (Render) 
https://hrms-lite-pitl.onrender.com

API Documentation 
https://hrms-lite-pitl.onrender.com/docs

GitHub Repository 
https://github.com/shivay893896-droid/hrms-lite

---

# Tech Stack

## Backend
- FastAPI
- Python 3.11
- Motor (Async MongoDB Driver)
- Pydantic v2
- Uvicorn
- Docker

## Frontend
- React
- Vite
- Axios
- React Query
- TailwindCSS

## Database
- MongoDB Atlas

## Deployment
- Render (Backend)
- Vercel (Frontend)
- Docker

---

# Features

## Employee Management
- Create employees
- View employees
- Pagination support
- Update employee data
- Delete employees

## API Features
- RESTful API
- Async database operations
- Pydantic validation
- Swagger documentation

## Production Features
- Structured logging
- Health check endpoint
- Request tracking middleware
- Error handling middleware
- CORS security

## DevOps
- Docker support
- Environment variable configuration
- Cloud deployment ready

---

# Project Structure

```
hrms-lite
│
├── backend
│ ├── app
│ │ ├── api
│ │ │ └── v1
│ │ │ └── routers
│ │ │
│ │ ├── config
│ │ │ ├── settings.py
│ │ │ ├── database.py
│ │ │ └── logging_config.py
│ │ │
│ │ ├── middleware
│ │ │ ├── cors.py
│ │ │ ├── request_middleware.py
│ │ │ └── error_handler.py
│ │ │
│ │ ├── models
│ │ ├── schemas
│ │ ├── services
│ │ └── main.py
│ │
│ ├── Dockerfile
│ └── requirements.txt
│
├── frontend
│ ├── src
│ │ ├── components
│ │ ├── pages
│ │ ├── api
│ │ └── App.jsx
│ │
│ └── Dockerfile
│
└── docker-compose.yml
```

---

# Backend Setup

Clone repository

```
git clone https://github.com/shivay893896-droid/hrms-lite
```

```
cd hrms-lite/backend
```

Create virtual environment

```
python -m venv venv
```

Activate environment (Windows)

```
venv\Scripts\activate
```

Install dependencies

```
pip install -r requirements.txt
```

Run server

```
uvicorn app.main:app --reload
```

Backend runs at

```
http://localhost:8000
```

---

# Frontend Setup

```
cd frontend
```

```
npm install
```

```
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# Docker Setup

Build containers

```
docker compose build
```

Start services

```
docker compose up
```

Stop containers

```
docker compose down
```

---

# API Testing

Swagger Documentation

https://hrms-lite-pitl.onrender.com/docs

Example API

```
GET /api/v1/employees
```

---

# Health Check

```
GET /health
```

Example Response

```
{
 "status": "healthy",
 "database": "healthy",
 "environment": "production"
}
```

---

# Environment Variables

Example `.env`

```
ENVIRONMENT=production
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net
MONGODB_DB_NAME=hrms_lite
ALLOWED_ORIGINS=["https://hrms-lite-phi-two.vercel.app"]
```

---

# Future Improvements

- JWT Authentication
- Role Based Access Control
- Attendance Management
- Payroll Module
- Email Notifications
- CI/CD Pipeline

---

# Author

Aman Kumar 
Python Backend Developer 

GitHub 
https://github.com/shivay893896-droid

---

 If you like this project please give it a **star on GitHub**.