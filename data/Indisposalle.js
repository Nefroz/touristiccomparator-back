Rooms =require("./Rooms.js")
module.exports = function(sequelize, DataTypes) {
     var Indisposalle = sequelize.define("Indisposalle", {
  name: {
    type: DataTypes.STRING,
  },
  createdby: {
    type: DataTypes.BIGINT,
  },
  debut: {
    type: DataTypes.DATE,
  },
  fin: {
    type: DataTypes.DATE,
  },
}, {
     paranoid:true,
   })

Indisposalle.associate = (db) => {
  Indisposalle.belongsTo(db.Rooms)
  Indisposalle.hasMany(db.Indispoequi)
}

return Indisposalle;
};