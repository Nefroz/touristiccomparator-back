const Detail =require("./Detail")
module.exports = function(sequelize, DataTypes) {

     var Vehicule = sequelize.define("Vehicule", {
  marque: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modele: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  immatriculation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacite: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  typecarburant: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responsablevalidation: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  validationinterne: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  validationexterne: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  caution: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
}, {
     paranoid:true,
   });

Vehicule.associate = (db) => {
  Vehicule.belongsTo(db.Detail)
}

return Vehicule;
}
