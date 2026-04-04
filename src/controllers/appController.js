export const home = (req, res) => {
  res.render("home", {
    title: "Pagina Principal",
  });
};

export const catalogo = (req, res) => {
  res.render("catalogo", {
    title: "Catálogo",
  });
};

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

export const login = (req, res) => {
  res.send("Página de Login");
};
