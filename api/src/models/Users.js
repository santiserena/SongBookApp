const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define( "users", {

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },

      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      personalPhoto: {
        type: DataTypes.TEXT,
      },
      
    },
    { timestamps: false }
  );
};
