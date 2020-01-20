Detail =require("./Detail.js")
module.exports = function(sequelize, DataTypes) {
     var Rooms = sequelize.define("Rooms", {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adresserue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adressenuméro: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  couleur: {
    type: DataTypes.STRING,
  },
  couleurargb:{
    type: DataTypes.STRING,
  },
  type:{
    type: DataTypes.STRING,
  },
  tarifj:{
    type: DataTypes.BIGINT,
  },
  tarifh:{
    type: DataTypes.BIGINT,
  },
  capacite:{
    type: DataTypes.BIGINT,
  },
  etage:{
    type: DataTypes.BIGINT,
  },
  namesalle:{
    type: DataTypes.BIGINT,
  },
  idcontact:{
    type: DataTypes.BIGINT,
  }
})
  return Rooms;
};