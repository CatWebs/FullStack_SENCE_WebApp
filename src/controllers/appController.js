import { Categoria, Producto } from "../models/index.js";

//Mostrar página de inicio
export const home = (req, res) => {
  res.render("home", {
    title: "Pagina Principal",
  });
};

//Mostrar productos
export const catalogo = async (req, res) => {
  try {
    const productos = await Producto.findAll({ raw: true });
    res.render("catalogo", {
      title: "Catálogo",
      productos,
    });
  } catch (error) {
    console.log("Error al renderizar productos", error);
  }
};

//Mostrar formularios (todos)
export const crear = async (req, res) => {
  try {
    const categorias = await Categoria.findAll({ raw: true });
    res.render("insertData", {
      title: "Página de creación de contenido",
      categorias,
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

//Guardar producto desde formulario
export const crearProducto = async (req, res) => {
  try {
    const { nombre, descripcion, stock, precio, categoriaId } = req.body;
    await Producto.create({ nombre, descripcion, stock, precio, categoriaId });
    res.redirect("/");
  } catch (error) {
    console.error("Error al crear el producto: ", error);
    res.status(500).send("Error interno");
  }
};
