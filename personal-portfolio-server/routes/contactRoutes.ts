import express from "express";
const router = express.Router();
import { submitContact } from "../controllers/contactController";

router.post("/submit", submitContact);
export default router;
