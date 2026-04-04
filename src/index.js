import express from "express";
import userRouter from "./routes/userRoutes.js";
import appRouter from "./routes/appRoutes.js";
import productRouter from "./routes/productRoutes.js";
import "dotenv/config";
import exphbs from "express-handlebars";
import path from "path";
import sequelize from "./config/db.js";

const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static public
app.use(express.static(path.join(__dirname, "src/public")));

//Sincronizar base de datos
const connectDB = async () => {
  try {
    await sequelize.sync();
    console.log("Conexión exitosa a base de datos");
  } catch (error) {
    console.error("Error para acceder a la base de datos: ", error);
  }
};
connectDB();

//Configuracion de Handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/src/views"));

app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "/src/views/layout"),
    extname: ".hbs",
  }),
);

// Rutas
app.use("/", appRouter);
app.use("/", userRouter);
app.use("/", productRouter);

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto http://localhost:${PORT}`);
});
