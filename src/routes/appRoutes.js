import express from "express";
import { home, catalogo, crear } from "../controllers/appController.js";

const router = express.Router();

router.get("/", home);

router.get("/catalogo", catalogo);

router.get("/crear", crear);

export default router;
