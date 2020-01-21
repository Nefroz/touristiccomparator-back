const Detail =require("./Detail")
module.exports = function(sequelize, DataTypes) {
     var Equipement = sequelize.define("Equipement", {
  name: {
    type: DataTypes.STRING,
    unique:true
  },   
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
  caution: {
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