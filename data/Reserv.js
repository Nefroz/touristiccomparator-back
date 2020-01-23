const Detail =require("./Detail")
const Tarification =require("./Tarification")
const Rooms = require("./Rooms")

module.exports = function(sequelize, DataTypes) {

     var Reserv = sequelize.define("Reserv", {
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
  equipement: {
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
  validee: {
    type: DataTypes.BOOLEAN,
    defaultValue: '0'
  }
}, {
     paranoid:true,
   });

Reserv.associate = (db) => {
  Reserv.belongsTo(db.Detail)
  Reserv.belongsTo(db.Tarification)
  Reserv.belongsTo(db.Rooms)
}

return Reserv;
}
