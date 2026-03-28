import express from "express";
import authRoutes from "./modules/auth/auth.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { globalErrorHandler } from "./shared/middlewares/error.middleware.js";
import searchRoutes from "./routes/searchRoutes.js";
import ragRoutes from "./routes/ragRoutes.js"
import feedbackRoutes from "./routes/feedbackRoutes.js"


const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api" , searchRoutes);
app.use(errorMiddleware);
app.use(globalErrorHandler);
app.use("/api",ragRoutes);
app.use("/api" , feedbackRoutes);


export default app;