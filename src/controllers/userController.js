import fs from "fs";

export const getUsers = (req, res) => {
  const users = JSON.parse(fs.readFileSync("src/data/users.json", "utf-8"));
  res.json(users);
};

export const addUser = (req, res) => {
  const user = req.body;
  const users = JSON.parse(fs.readFileSync("src/data/users.json", "utf-8"));
  users.push(user);
  fs.writeFileSync("src/data/users.json", JSON.stringify(users));
  res.send("Archivo creado");
};
