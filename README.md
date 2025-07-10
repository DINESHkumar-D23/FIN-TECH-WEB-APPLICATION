# FIN-TECH-WEB-APPLICATION

A full-stack financial technology web application that provides users with banking, transaction management, profile management, and insurance features. Built with a React frontend and a Node.js/Express/MongoDB backend.

## Features

- User authentication and profile management
- Transaction history and management
- Insurance and investment modules
- Secure RESTful API
- Responsive and modern UI

## Tech Stack

- **Frontend:** React, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Other:** CORS, REST API

## Project Structure

```
FIN-TECH-WEB-APPLICATION/
├── trust/
│   ├── BACKEND/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── db.js
│   │   ├── server.js
│   │   └── package.json
│   ├── FRONTEND/
│   │   ├── public/
│   │   └── src/
│   │       ├── api/
│   │       ├── assets/
│   │       ├── components/
│   │       ├── css/
│   │       └── pages/
│   ├── package.json
│   └── README.md
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd trust/BACKEND
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure your MongoDB connection in `db.js` if needed.
4. Start the backend server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:5000` by default.

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd trust/FRONTEND
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```
   The app will run on `http://localhost:3000` by default.

## API Endpoints


https://github.com/user-attachments/assets/7aff4d34-a851-4de9-9acb-2b3d9eabea37


- `POST /api/register` - Register a new user

https://github.com/user-attachments/assets/54b24dba-2583-4f34-83bc-57ce94810c7e


- `POST /api/login` - User login
- `GET /api/profile` - Get user profile
- `POST /api/transactions` - Create a transaction
- `GET /api/transactions` - List transactions

(See `trust/BACKEND/routes/` for more details.)

## Contributing



Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
