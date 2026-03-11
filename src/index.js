import express from "express";
import router from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
});
