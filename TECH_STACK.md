# Tech Stack

This project is a full-stack web application organized as a monorepo with separate frontend and backend directories.

## Project Structure
- **Root**: Contains orchestration scripts.
- **Backend**: Node.js/Express server.
- **Frontend**: React application.

## Frontend
Located in `frontend/`

- **Core Framework**: [React](https://reactjs.org/) (v19)
- **Routing**: [React Router](https://reactrouter.com/) (v7)
- **Build Tool**: [Create React App](https://create-react-app.dev/) (`react-scripts`)
- **Testing**: 
  - [Jest](https://jestjs.io/) (via `react-scripts`)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **State Management**: React Hooks/Context (inferred)
- **CSS/Styling**: CSS Modules / Plain CSS

## Backend
Located in `backend/`

- **Runtime**: [Node.js](https://nodejs.org/)
- **Web Framework**: [Express.js](https://expressjs.com/) (v5)
- **Database**: [MongoDB](https://www.mongodb.com/) (via [Mongoose](https://mongoosejs.com/) ODM)
- **Authentication**: 
  - [JSON Web Token (JWT)](https://jwt.io/) for stateless authentication
  - [bcryptjs](https://www.npmjs.com/package/bcryptjs) for password hashing
- **Utilities**:
  - [dotenv](https://www.npmjs.com/package/dotenv) for environment variable management
  - [cors](https://www.npmjs.com/package/cors) for Cross-Origin Resource Sharing

## Dev Tools & Orchestration
- **Package Manager**: npm
- **Concurrent Execution**: [concurrently](https://www.npmjs.com/package/concurrently) (runs frontend and backend simultaneously)
- **Hot Reloading**: `nodemon` (backend)

## Scripts

### Root
- `npm run dev`: Runs both frontend and backend in development mode.
- `npm run install:all`: Installs dependencies for both frontend and backend.

### Frontend (`cd frontend`)
- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Runs tests.

### Backend (`cd backend`)
- `npm start`: Starts the server with Node.
- `npm run dev`: Starts the server with Nodemon (auto-restart).
