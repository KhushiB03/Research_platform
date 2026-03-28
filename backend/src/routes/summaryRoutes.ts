import express from "express";
import {summaryDocument} from "../controllers/summaryController";
const router = express.Router();
router.post('/summary', summaryDocument);
export default router;
