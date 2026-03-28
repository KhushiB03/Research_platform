import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/authorize.middleware";
import {
  createPaper,
  getMyPapers,
  getAllPapers,
  updatePaper,
  updatePaperStatus
} from "../controllers/paper.controller";

const router = Router();

router.post("/", authenticate, createPaper);

router.get("/my", authenticate, getMyPapers);

router.get("/", authenticate, authorize(["admin"]), getAllPapers);

router.put("/:id", authenticate, updatePaper);

router.patch("/:id/status", authenticate, authorize(["admin"]), updatePaperStatus);

export default router;