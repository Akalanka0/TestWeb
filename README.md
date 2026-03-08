# DreamStay Hotel - Full Stack Web Application

A hotel management and booking system built with the MERN stack (MongoDB, Express, React, Node.js).

## Project Structure

- **frontend/**: React application with custom premium UI components and state management.
- **backend/**: Express.js API with Mongoose models, JWT authentication, and Bcrypt password hashing.

## Quick Start

### 1. Prerequisites
- Node.js installed
- MongoDB running locally or a MongoDB Atlas URI

### 2. Environment Variables
Before running the application, create `.env` files in both the `frontend` and `backend` directories. You can use the provided `.env.example` files as templates:

- **Backend (`backend/.env`)**:
  - `PORT`: Server port (default: 5000)
  - `MONGODB_URI`: Your MongoDB connection string
  - `JWT_SECRET`: Secret key for JWT signing

- **Frontend (`frontend/.env`)**:
  - `REACT_APP_API_URL`: Backend API URL (default: http://localhost:5000)

### 3. Installation
From the root directory, run:
```bash
npm run install:all
```

### 4. Running the App
Start both frontend and backend concurrently:
```bash
npm run dev
```

## Available Scripts

- `npm run dev`: Runs both services in development mode.
- `npm run start:frontend`: Starts only the React dev server.
- `npm run start:backend`: Starts only the Express server.
- `npm run install:all`: Installs dependencies for both sub-projects.

## Features
- ✨ Premium, responsive UI design
- 🔐 Secure JWT authentication (Login/Register)
- 🏨 Interactive room booking simulation
- 💬 Real-time guest reviews saved to database
- 🎫 Special offers and promo code management
