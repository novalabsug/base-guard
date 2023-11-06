import express, { Router } from "express";
import { fetchCompanyGet } from "../controller/GetController.js";
import { createCompanyPost } from "../controller/PostController.js";

const router = Router();

router.get("/company/:id", fetchCompanyGet);
router.post("/company", createCompanyPost);

export default router;
