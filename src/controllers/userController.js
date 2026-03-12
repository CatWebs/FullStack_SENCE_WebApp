import fs from "fs";

export const home = (req, res) => {
  res.send("Página de inicio");
};

export const about = (req, res) => {
  res.send("Página de Acerca de");
};

export const contact = (req, res) => {
  res.send("Página de Contacto");
};

export const login = (req, res) => {
  res.send("Página de Login");
};

export const getUsers = (req, res) => {
  const users = JSON.parse(fs.readFileSync("src/data/users.json", "utf-8"));
  res.json(users);
};

export const getProducts = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync("src/data/products.json", "utf-8"),
  );
  res.json(products);
};
