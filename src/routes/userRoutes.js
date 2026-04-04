import express from "express";
import { getUsers, addUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/users", getUsers);

userRouter.post("/user", addUser);

export default userRouter;

/* CON POSTMAN */
