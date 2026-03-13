import express from "express";
import {
  home,
  login,
  about,
  contact,
  getUsers,
  getProducts,
  addUser,
  addProduct,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", home);

userRouter.get("/login", login);

userRouter.get("/about", about);

userRouter.get("/contact", contact);

userRouter.get("/users", getUsers);

userRouter.get("/products", getProducts);

userRouter.post("/user", addUser);

userRouter.post("/product", addProduct);

export default userRouter;
