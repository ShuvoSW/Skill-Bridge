import express, { Application } from "express"
import cors from "cors"
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";
import errorHandler from "./middlewares/globalErrorHandler";
import { notFound } from "./middlewares/notFound";

import tutorRoutes from "./modules/tutors/tutor.route";
import adminRoutes from "./modules/admin/admin.route";
import studentRoutes from "./modules/students/student.route";


const app: Application = express();

app.use(cors({
    // origin: process.env.APP_URL ,
    origin: true,
    credentials: true
}))

app.use(express.json());




app.get("/api/auth/test", (req, res) => res.send("auth route works"));

app.use("/api/auth", (req, res, next) => {
    return toNodeHandler(auth)(req, res).catch((err) => {
        next(err);
    });
});

app.use("/api/tutors", tutorRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SkillBridge API is running",
    version: "1.0.0",
    endpoints: {
      auth: "/api/auth/*",
        tutors: "/api/tutors",
          admin: "/api/admin",
      students: "/api/students",
    },
  });
});

app.use(notFound);


app.use(errorHandler);

export default app;