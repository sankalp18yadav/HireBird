# HireBird – Job Portal Website

HireBird is a full-stack **MERN** (MongoDB, Express.js, React.js, Node.js) based job portal that allows companies to post jobs and candidates to apply seamlessly. This project is designed to simplify the hiring process while showcasing modern web development best practices.

---

## 🌐 Live Demo

> Coming Soon...

---

## 🚀 Features

- 🧑‍💼 Admin can add companies and post jobs  
- 📝 Candidates can browse and apply for jobs  
- 🔐 Secure login & registration with JWT authentication  
- 📂 File uploads (e.g., resume, profile images)  
- 🌍 Filter jobs by location, work mode, job type  
- 📊 Clean UI with responsive design (Tailwind CSS)  
- ⚙️ REST API backend using Express.js and MongoDB  

---

## 🛠️ Tech Stack

### Frontend:
- React.js  
- Redux Toolkit (for state management)  
- Axios  
- Tailwind CSS  
- Shadcn/ui

### Backend:
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- Multer (for file uploads)  
- JWT (Authentication)
- Cloudinary (for PDF and file upload)

---

## 📁 Project Structure

```
HireBird/
├── client/            # React frontend
│   ├── src/
│   └── public/
├── server/            # Node.js + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── utils/
├── .gitignore
├── README.md
└── package.json
```

---

## 🧪 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sankalp18yadav/HireBird.git
cd HireBird
```

### 2. Setup Server

```bash
cd server
npm install
npm run dev
```

### 3. Setup Client

```bash
cd ../client
npm install
npm start
```

### 4. Environment Variables

Create `.env` in main folder directories.

**Example `.env` for server:**

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📄 License

MIT License

---

## ✨ Author

**Sankalp Yadav**  
[GitHub](https://github.com/sankalp18yadav)
