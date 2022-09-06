const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  
  sequelize.define("songs", {

      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      album: {
        type: DataTypes.STRING,
      },

      artist: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      chartCreator: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lyrics: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      lyricsAndChords: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },

      share: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      image: {
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false }
  );
};
