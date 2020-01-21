const Detail =require("./Detail")
module.exports = function(sequelize, DataTypes) {
     var Equipement = sequelize.define("Equipement", {
  desc: {
    type: DataTypes.STRING,
  },
  tarifj: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  tarifh: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  stock: {
  	type: DataTypes.BIGINT,
  	allowNull: false,
  }
}, {
     paranoid:true,
   })

Equipement.associate = (db) => {
  Equipement.belongsTo(db.Detail)
}

return Equipement;
};