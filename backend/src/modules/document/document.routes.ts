import { Router } from "express";
import { upload } from "../../shared/middlewares/upload.middleware";
import { uploadDocument } from "./document.controller";

const router = Router();

router.post("/upload", upload.single("file"), uploadDocument);

export default router;