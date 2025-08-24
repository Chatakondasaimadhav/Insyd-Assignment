# Insyd-Assignment
# Insyd Notification System – Backend

This is the backend service for the Insyd Notification System POC. It handles user data, follow relationships, and notification delivery.

## 🚀 Tech Stack
- Node.js
- Express
- MongoDB (Mongoose)

## 📦 Features
- Create notifications when a user posts or comments
- Notify all followers of the user
- Retrieve notifications for a specific user

## 📂 Endpoints
- `GET /notifications/:userId` – Fetch notifications for a user

## 🛠 Setup
1. Clone the repo
2. Run `npm install`
3. Create `.env` with `MONGO_URI`
4. Run `node index.js`

## 🌐 Deployment
Recommended: Render or Railway
