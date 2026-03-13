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

export const addUser = (req, res) => {
  const user = req.body;
  const users = JSON.parse(fs.readFileSync("src/data/users.json", "utf-8"));
  users.push(user);
  fs.writeFileSync("src/data/users.json", JSON.stringify(users));
  res.send("Archivo creado");
};

export const addProduct = (req, res) => {
  const product = req.body;
  const products = JSON.parse(
    fs.readFileSync("src/data/products.json", "utf-8"),
  );
  products.push(product);
  fs.writeFileSync("src/data/products.json", JSON.stringify(products));
  res.send("Producto agregado");
};
