import { Router } from "express";
import { login, register } from "../auth.controller"
import { authorize } from "../../middlewares/authorize.middleware";
import { authenticate} from "../../middlewares/auth.middleware";
import {  validate}from"./auth.validation";
import { loginSchema, registerSchema } from "../../shared/middlewares/validate.midleware";

const router = Router();

router.post("/login", validate(loginSchema),
login);
router.post("/register", validate(registerSchema),
register);

router.get(
  "/admin/dashboard",
  authenticate,
  authorize(["admin"]),
  (req, res) => {
    res.json({ message: "welcome admin" });
  }
);

router.get("/me", authenticate, async (req, res) => {
  res.json({
    user: (req as any).user
  });
});

export default router;