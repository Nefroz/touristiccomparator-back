module.exports = function(sequelize, DataTypes) {
     var Details = sequelize.define("Details", {
      units: {
        type: DataTypes.BIGINT,
      },
   }, {
     paranoid:true,
   })

  Details.associate = (db) => {
    Details.belongsTo(db.Reserv);
    Details.belongsTo(db.Equipments);
    Details.belongsTo(db.Rooms);
    Details.hasOne(db.Files);
    Details.belongsTo(db.Pricings);
  }
  return Details;
  };