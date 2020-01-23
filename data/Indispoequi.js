Rooms =require("./Rooms.js")
Indisposalle =require("./Indisposalle.js")
module.exports = function(sequelize, DataTypes) {
     var Indispoequi = sequelize.define("Indispoequi", {
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

Indispoequi.associate = (db) => {
  Indispoequi.belongsTo(db.Rooms)
  Indispoequi.belongsTo(db.Indisposalle)
}

return Indispoequi;
};