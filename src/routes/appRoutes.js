import express from "express";
import {
  home,
  catalogo,
  crear,
  crearCategoria,
} from "../controllers/appController.js";

const router = express.Router();

//Inicio
router.get("/", home);

//Productos
router.get("/catalogo", catalogo);

//Formularios
router.get("/crear", crear);

//Crear categoria mediante formulario
router.post("/crear-categoria", crearCategoria);

export default router;
