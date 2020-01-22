const Detail =require("./Rooms.js")
module.exports = function(sequelize, DataTypes) {
     var Indisponibilitesalle = sequelize.define("Indisponibilitesalle", {
  name: {
    type: DataTypes.STRING,
    unique:true
  },
}, {
     paranoid:true,
   })
Indisponibilitesalle.associate = (db) => {
  Indisponibilitesalle.belongsTo(db.Rooms)
}
return Indisponibilitesalle;
};