import Categoria from "./Categoria";
import Producto from "./Productos";

//Relación uno a muchos
Categoria.hasMany(Producto, { foreignKey: "categoriaId" });

//Relación
Producto.belongsTo(Categoria, { foreignKey: "categoriaId" });

export { Categoria, Producto };
