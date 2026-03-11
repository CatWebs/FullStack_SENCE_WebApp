import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Página de inicio");
});

userRouter.get("/contact", (req, res) => {
  res.send("Página de contacto");
});

userRouter.get("/about", (req, res) => {
  res.send("Página de Acerca de");
});

export default userRouter;
