Detail =require("./Detail.js")
module.exports = function(sequelize, DataTypes) {
     var Rooms = sequelize.define("Rooms", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adresserue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adressenumero: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  adresselocalite: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adressecodepostal: {
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
    type: DataTypes.STRING,
  },
  idcontact:{
    type: DataTypes.BIGINT,
  },
  projecteur:{
    type: DataTypes.BOOLEAN,
  },
  validationinterne:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  validationexterne:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  caution:{
    type: DataTypes.STRING,
  }
}, {
     paranoid:true,
   })

Rooms.associate = (db) => {
  Rooms.belongsTo(db.Detail)
  Rooms.hasMany(db.Indisponibiliteequipement)
  Rooms.hasMany(db.Indisponibilitesalle)

}

return Rooms;
};