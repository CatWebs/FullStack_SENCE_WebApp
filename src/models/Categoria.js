import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Categoria = sequelize.define("categoria", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

export default Categoria;
