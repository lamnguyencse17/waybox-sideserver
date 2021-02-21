import express from "express";
import getUserController from "../controllers/users/getUserController";

const router = express.Router();

router.post("/", getUserController);

export default router;
