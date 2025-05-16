import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/database.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import userRoutes from './routes/user.route.js';
import companyRoute from './routes/company.route.js';
import jobRoute from './routes/job.route.js';
import applicationRoute from './routes/application.route.js';

dotenv.config();

const app = express();

// To use __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS setup for both dev and production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-frontend-url.onrender.com'  // Replace with your deployed frontend URL on Render or your domain
    : 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions));

// API Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/company', companyRoute);
app.use('/api/v1/job', jobRoute);
app.use('/api/v1/application', applicationRoute);

// Serve React frontend build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  // For any route not handled by API, serve index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 8000;

// Connect DB first, then start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to DB', error);
  });
