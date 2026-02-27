import { Router } from "express";
import { login, register } from "../auth.controller"
import { authorize } from "../../middlewares/authorize.middleware";
import { authenticate } from "../../middlewares/auth.middleware";

const router = Router();

router.post("/login", login);
router.post("/register", register);

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