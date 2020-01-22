
module.exports = function(sequelize, DataTypes) {
     var Tarification = sequelize.define("Tarification", {
  name: {
    type: DataTypes.STRING,
    unique:true
  },
}, {
     paranoid:true,
   })

Tarification.associate = (db) => {
  Tarification.hasOne(db.Reserv)
}

return Tarification;
};