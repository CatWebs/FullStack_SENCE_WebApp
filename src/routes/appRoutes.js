import express from "express";
import {
  home,
  catalogo,
  crear,
  crearCategoria,
  crearProducto,
  quitarProducto,
  getEditProductForm,
  updateProducto,
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

//Eliminar producto
router.post("/eliminar/:id", quitarProducto);

//Editar producto
router.get("/editar-producto/:id", getEditProductForm);
router.post("/actualizar/:id", updateProducto);

export default router;
