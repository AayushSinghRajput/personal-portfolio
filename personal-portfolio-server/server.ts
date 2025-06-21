import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import contactRoutes from "./routes/contactRoutes";
dotenv.config();
const app = express();
const PORT: number = Number(process.env.PORT) || 5001;
connectDB();
app.use(express.json());

const allowedOrigins = ["https://personal-portfolio-frontend-inky.vercel.app/"];
const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: "GET,PUT,POST,DELETE,PATCH,HEAD",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to the root URL of the server.");
});

//routes
app.use("/api/contact", contactRoutes);

app.listen(PORT, (error?: Error) => {
  if (!error) {
    console.log(`Backend server is running at http://localhost:${PORT}`);
  } else {
    console.log("Error occured while connecting the server.", error);
  }
});
