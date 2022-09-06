const {DataTypes} = require ('sequelize');





module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('songs', {
      name: {
        type: DataTypes.STRING,
      },
      
    },{timestamps: false});
  };