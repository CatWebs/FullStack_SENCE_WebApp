import express from "express";
import userRouter from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto http://localhost:${PORT}`);
});
