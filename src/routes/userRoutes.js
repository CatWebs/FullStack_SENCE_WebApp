import express from "express";
import { home, login, about, contact } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", home);

userRouter.get("/login", login);

userRouter.get("/about", about);

userRouter.get("/contact", contact);

export default userRouter;
