import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { globalErrorHandler } from "./shared/middlewares/error.middleware";


const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(errorMiddleware);
app.use(globalErrorHandler);

export default app;