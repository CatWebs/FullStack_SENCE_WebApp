import express from "express";
import { getProducts, addProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/products", getProducts);

productRouter.post("/product", addProduct);

export default productRouter;
