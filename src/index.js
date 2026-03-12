import express from "express";
import userRouter from "./routes/userRoutes.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Rutas
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto http://localhost:${PORT}`);
});
