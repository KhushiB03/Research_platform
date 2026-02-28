// ...existing code...
import * as authService from "./auth/auth.service";
import asyncHandler from "../utils/asyncHandler"
import { Request, Response } from "express";

const register = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }
    const data = await authService.register(email, password);
    res.status(201).json(data);
});

const login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
    const data = await authService.login(email, password);
    res.json(data);
});

export { register, login };
// ...existing code...