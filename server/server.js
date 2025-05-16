import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js' // Import the applicant routes
import cookieParser from 'cookie-parser'
import cors from "cors"
import userRoutes from "./routes/user.route.js"; // Import the user routes
import companyRoute from './routes/company.route.js'; // Import the company routes
import jobRoute from './routes/job.route.js'; // Import the job routes
import applicationRoute from './routes/application.route.js'; // Import the application routes

dotenv.config();

const app = express();

app.use(express.json()); //allow express to parse JSON data

app.use(express.urlencoded({ extended: true })); //allow express to parse URL-encoded data

app.use(cookieParser()); // Middleware to parse cookies from the request headers

const corsOptions = {
  origin: "http://localhost:5173", // Allow requests from this origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.) to be sent
};

app.use(cors(corsOptions)); // Use CORS middleware with the specified options

const PORT = process.env.PORT || 8080; // Set the port to either the environment variable or 5000

app.use("/api/v1/user", userRoutes); // Mount the user routes on the /api/user path

app.use("/api/v1/company", companyRoute); // Mount the company routes on the /api/company path

app.use("/api/v1/job", jobRoute); // Mount the job routes on the /api/job path

app.use("/api/v1/application", applicationRoute); // Mount the application routes on the /api/application path

app.listen(PORT, () => {    
  
      connectDB();
      console.log(`Server is running on port 8080 http://localhost:${PORT}`); // Log the server start message

});