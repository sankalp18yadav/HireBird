import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js' // Import the applicant routes
import cookieParser from 'cookie-parser'
import cors from "cors"
import userRoutes from "./routes/user.route.js"; // Import the user routes
import companyRoute from './routes/company.route.js'; // Import the company routes
import jobRoute from './routes/job.route.js'; // Import the job routes
import applicationRoute from './routes/application.route.js'; // Import the application routes
import path from 'path';

dotenv.config();

connectDB();
const PORT = process.env.PORT || 8080;

const app = express();

const __dirname = path.resolve();

app.use(express.json()); //allow express to parse JSON data

app.use(express.urlencoded({ extended: true })); //allow express to parse URL-encoded data

app.use(cookieParser()); // Middleware to parse cookies from the request headers

const corsOptions = {
  origin: "https://hirebird.onrender.com", // Allow requests from this origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.) to be sent
};

app.use(cors(corsOptions)); // Use CORS middleware with the specified options

app.use("/api/v1/user", userRoutes); // Mount the user routes on the /api/user path

app.use("/api/v1/company", companyRoute); // Mount the company routes on the /api/company path

app.use("/api/v1/job", jobRoute); // Mount the job routes on the /api/job path

app.use("/api/v1/application", applicationRoute); // Mount the application routes on the /api/application path

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {    
  
      console.log(`server running at port ${PORT}`);

});