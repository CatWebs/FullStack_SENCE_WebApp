export const home = (req, res) => {
  res.render("home", {
    title: "Pagina Principal",
  });
};

export const about = (req, res) => {
  res.render("about", {
    title: "Pagina de Nosotros",
  });
};

export const contact = (req, res) => {
  res.render("contact", {
    title: "Página de Contacto",
  });
};

export const login = (req, res) => {
  res.send("Página de Login");
};
