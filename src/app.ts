import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { globalErrorHandler } from "./shared/middlewares/error.middleware";
import searchRoutes from "./routes/searchRoutes";
import ragRoutes from "./routes/ragRoutes"
import feedbackRoutes from "./routes/feedbackRoutes"


const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api" , searchRoutes);
app.use(errorMiddleware);
app.use(globalErrorHandler);
app.use("/api",ragRoutes);
app.use("/api" , feedbackRoutes);


export default app;