// import fs from "fs";

// export const getProducts = (req, res) => {
//   const products = JSON.parse(
//     fs.readFileSync("src/data/products.json", "utf-8"),
//   );
//   res.json(products);
// };

// export const addProduct = (req, res) => {
//   const product = req.body;
//   const products = JSON.parse(
//     fs.readFileSync("src/data/products.json", "utf-8"),
//   );
//   products.push(product);
//   fs.writeFileSync("src/data/products.json", JSON.stringify(products));
//   res.send("Producto agregado");
// };
