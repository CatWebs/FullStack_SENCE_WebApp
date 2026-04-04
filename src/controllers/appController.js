import { Categoria, Producto } from "../models/index.js";

//Mostrar página de inicio
export const home = (req, res) => {
  res.render("home", {
    title: "Pagina Principal",
  });
};

//Mostrar productos
export const catalogo = (req, res) => {
  res.render("catalogo", {
    title: "Catálogo",
  });
};

//Mostrar formularios (todos)
export const crear = async (req, res) => {
  try {
    res.render("insertData", {
      title: "Página de creación de contenido",
    });
  } catch (error) {
    console.error("Error al cargar la página: ", error);
    res.status(500).send("Error interno");
  }
};

//Mostrar página de Login
//Todavía sin funcionalidad.
export const login = (req, res) => {
  res.send("Página de Login");
};

//Guardar categoría desde formulario
export const crearCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;
    await Categoria.create({ nombre });
    res.redirect("/");
  } catch (error) {
    console.error("Error al crear la categoría: ", error);
    res.status(500).send("Error interno");
  }
};
