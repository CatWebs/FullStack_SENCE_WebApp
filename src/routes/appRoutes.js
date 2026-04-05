import express from "express";
import {
  home,
  catalogo,
  crear,
  crearCategoria,
  crearProducto,
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

//Crear producto mediante
router.post("/crear-producto", crearProducto);

export default router;
