// src/middlewares/validate.ts
import { Request, Response, NextFunction } from "express";
import { ZodObject, ZodError } from "zod";
import { AppError } from "../../shared/errors/AppError";

export const validate =
  (schema: ZodObject<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return next(new AppError(error.issues[0].message, 400));
      }
      next(error);
    }
  };