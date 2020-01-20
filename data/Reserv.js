const Detail =require("./Detail")
module.exports = function(sequelize, DataTypes) {
     var Reserv = sequelize.define("Reserv", {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  debut: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  objet: {
    type: DataTypes.STRING,
  },
  reservateur: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  tarification: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  equi: {
    type: DataTypes.BIGINT,
  },
  salle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activite: {
    type: DataTypes.STRING,
  },
  journeeentiere: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  idorganisateur: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  commentaire: {
    type: DataTypes.STRING,
  },
  createdbyuserid: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  createdon: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  modifiedbyuserid: {
    type: DataTypes.BIGINT,
  },
  modifiedon: {
    type: DataTypes.DATE,
  }
});
  return Reserv;
 }
