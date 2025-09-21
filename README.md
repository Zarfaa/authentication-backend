#  Authentication Frontend (Node.js + Express)

This project serves as the backend for the Authentication App, built using Node.js and Express.
It provides REST APIs for authentication flows, including signup, login, email verification, and password reset, with secure JWT-based authentication.

##  Getting Started  

### 1️ Clone the Repository  
```bash
git clone https://github.com/Zarfaa/authentication-backend.git
cd authentication-backend
```

### Install Dependencies  
```bash
npm install
```

### 3 Run the Development Server
```bash
npm run dev
```
The app will be available at 👉 http://localhost:3000


## Available Scripts
npm run dev → Start dev server with HMR
npm run build → Build production bundle

### ⚙️ Environment Variables
Create a .env file in the root of your project and add:
PORT=3000
MONGO_URI=databse_url
JWT_SECRET=your_jwt_secret
EMAIL_FROM=verified_sendGrid_user
CLIENT_URL=frontend_url
SENDGRID_API_KEY=sendGrid_api_key


### 👨‍💻 Tech Stack

Node.js + Express → Backend framework
JWT → Authentication & authorization
MongoDB / PostgreSQL → Database
Nodemailer → Email verification & password reset
bcrypt.js → Password hashing


