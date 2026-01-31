import express, { Application } from "express"
import cors from "cors"
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";
import errorHandler from "./middlewares/globalErrorHandler";
import { notFound } from "./middlewares/notFound";

import studentRoutes from "./modules/students/student.route";


const app: Application = express();

app.use(cors({
    // origin: process.env.APP_URL ,
    origin: true,
    credentials: true
}))

app.use(express.json());

app.all("/api/auth/*splat", toNodeHandler(auth))

app.get("/", (req, res) => {
    res.send("Hello World")
})

export default app;