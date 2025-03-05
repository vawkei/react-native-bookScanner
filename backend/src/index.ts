import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import ip from "ip";
import { Request, Response } from "express";
// import cookieParser from 'cookie-parser';

import authRouter from "./routes/auth-router"
import googleBookApiRouter from "./routes/googleBookRouter";

import { notFoundMiddleware } from "./middleware/notFoundMiddleware";
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware";


const app = express();

const authRoute = authRouter
const googleAPIRoute = googleBookApiRouter;

// parse the jason body and dealing wiyh my cookies:
// app.use(cookieParser());
app.use(express.json());

const corsOptions = {
  origin: [
    "http://localhost:8081",
    "http://192.168.43.52:8081",
  ],
  // Allow requests from local network👆👆
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "my-custom-header"],
};

app.use(cors(corsOptions));

//routes:
app.get("/", (_req: Request, res: Response) => {
  res.send("<h1>This is the index.ts checking in </h1>");
});

app.use("/api/v1/auth",authRoute);
app.use("/api/v1/google-book-api", googleAPIRoute);

// Error handling middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// 👇👇====================starting the server locally======================👇👇
// const port = Number(process.env.PORT) || 8080;
// const HOST = "0.0.0.0";

// const start = async () => {
//   app.listen(port, HOST, () => {
//     console.log(`server is listening on ${ip.address()}:${port}`);
//   });
// };
// start();
// 👆👆====================starting the server locally======================👆👆

// 👇👇====================starting the server with mongodb=================👇👇
const port = Number(process.env.PORT) || 8080;  // Cast to number
let url:any;
url = process.env.MONGODB_URI;

const start = async () => {
  try {
    await mongoose.connect(url);
    app.listen(port,"0.0.0.0", () => {
      console.log("connected to db...");
      console.log(`server listening on port ${ip.address()} ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
// 👆👆====================starting the server with mongodb=================👆👆
