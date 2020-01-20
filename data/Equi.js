const Detail =require("./Detail")
module.exports = function(sequelize, DataTypes) {
     var Equi = sequelize.define("Equi", {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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
  stock: {
  	type: DataTypes.BIGINT,
  	allowNull: false,
  }
})
  return Equi;
};