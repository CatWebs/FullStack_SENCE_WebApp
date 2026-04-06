import Categoria from "./Categoria.js";
import Producto from "./Productos.js";

//Relación uno a muchos
Categoria.hasMany(Producto, { foreignKey: "categoriaId", as: "productos" });

//Relación
Producto.belongsTo(Categoria, { foreignKey: "categoriaId", as: "categoria" });

export { Categoria, Producto };
