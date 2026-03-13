# HRMS Lite – Employee & Attendance Management System

## Project Overview

HRMS Lite is a lightweight Human Resource Management System designed to manage employee records and track daily attendance.

The project demonstrates a complete **full-stack development workflow**, including API design, database integration, frontend UI development, validation, and cloud deployment.

The goal of the project is to provide a simple internal HR tool that allows administrators to maintain employee data and record daily attendance through an intuitive interface.

---

# Live Application

Frontend (Vercel)
https://hrms-lite-kappa-two.vercel.app/employees

Backend API (Render)
https://hrms-lite-mso6.onrender.com/

GitHub Repository
https://github.com/namah798342-ctrl/hrms-lite

---

# System Architecture

The application follows a simple client-server architecture.

```
React Frontend
      ↓
FastAPI Backend
      ↓
MongoDB Atlas Database
```

Frontend handles UI interactions, backend exposes REST APIs, and MongoDB stores employee and attendance data.

---

# Core Features

## Employee Management

The system allows administrators to:

* Create a new employee record
* Store employee information such as:

  * Employee ID (unique)
  * Full Name
  * Email Address
  * Department
* View a list of all employees
* Remove employees when required
* Search employees
* Filter employees by department

---

## Attendance Tracking

Attendance functionality includes:

* Mark attendance for employees
* Select date and attendance status
* Prevent duplicate attendance entries
* View attendance history per employee

---

## Dashboard

The dashboard provides a quick overview of HR activity.

* Employee directory overview
* Access to attendance management
* Quick navigation to key actions

---

# User Interface

The frontend is designed with usability in mind and includes:

* Clean and minimal layout
* Responsive design
* Consistent typography and spacing
* Reusable UI components
* Intuitive navigation

The interface also supports common UI states:

* Loading indicators
* Empty data states
* Error handling messages

---

# Technology Stack

## Frontend

* React
* Vite
* TypeScript
* Axios
* Tailwind CSS

## Backend

* Python
* FastAPI
* Pydantic validation

## Database

* MongoDB Atlas

## Deployment

Frontend: Vercel
Backend: Render

---

# Project Structure

```
hrms-lite
│
├── backend
│   ├── app
│   │   ├── api
│   │   ├── models
│   │   ├── services
│   │   ├── schemas
│   │   └── main.py
│   │
│   └── scripts
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   ├── services
│   │   └── utils
│
├── docker-compose.yml
└── README.md
```

---

# API Endpoints

### Employees

| Method | Endpoint               | Description            |
| ------ | ---------------------- | ---------------------- |
| GET    | /api/v1/employees      | Retrieve all employees |
| POST   | /api/v1/employees      | Create employee        |
| DELETE | /api/v1/employees/{id} | Delete employee        |

---

### Attendance

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| GET    | /api/v1/attendance | Get attendance records |
| POST   | /api/v1/attendance | Mark attendance        |

---

# Running the Project Locally

## Backend Setup

Navigate to backend directory:

```
cd backend
```

Create virtual environment:

```
python -m venv venv
```

Activate environment:

Windows

```
venv\Scripts\activate
```

Install dependencies:

```
pip install -r requirements.txt
```

Run the server:

```
uvicorn app.main:app --reload
```

Backend will run on:

```
http://localhost:8000
```

API Documentation:

```
http://localhost:8000/docs
```

---

## Frontend Setup

Navigate to frontend directory:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Deployment

The application is deployed using cloud platforms.

## Backend

Backend is deployed on **Render** and connected to **MongoDB Atlas**.

The backend exposes public REST APIs used by the frontend.

## Frontend

Frontend is deployed on **Vercel** and configured to communicate with the deployed backend API.

---

# Assumptions

* The system assumes a single admin user.
* Authentication and role-based access are not included.
* Payroll and leave management features are outside the scope of this assignment.

---

# Possible Future Improvements

Although the system fulfills the assignment requirements, additional features could enhance the application:

* Authentication and user roles
* Attendance filtering by date
* Employee profile editing
* Monthly attendance reports
* Analytics dashboard
* Pagination optimization
* Automated testing

---

# Conclusion

HRMS Lite demonstrates a complete full-stack workflow including:

* REST API development
* Database design
* Frontend user interface development
* Validation and error handling
* Cloud deployment

The project focuses on delivering a **clean, stable, and functional HR tool** aligned with the requirements of the assignment.
