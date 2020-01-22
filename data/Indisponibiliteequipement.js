const Detail =require("./Rooms.js")
module.exports = function(sequelize, DataTypes) {
     var Indisponibiliteequipement = sequelize.define("Indisponibiliteequipement", {
  name: {
    type: DataTypes.STRING,
    unique:true
  },
}, {
     paranoid:true,
   })
Indisponibiliteequipement.associate = (db) => {
  Indisponibiliteequipement.belongsTo(db.Rooms)
}
return Indisponibiliteequipement;
};