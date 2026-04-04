import Categoria from "./Categoria.js";
import Producto from "./Productos.js";

//Relación uno a muchos
Categoria.hasMany(Producto, { foreignKey: "categoriaId" });

//Relación
Producto.belongsTo(Categoria, { foreignKey: "categoriaId" });

export { Categoria, Producto };
