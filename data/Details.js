module.exports = function(sequelize, DataTypes) {
     var Details = sequelize.define("Details", {
      equipment: {
        type: DataTypes.BIGINT,
      },
      units: {
        type: DataTypes.BIGINT,
      },
   }, {
     paranoid:true,
   })

  Details.associate = (db) => {
    Details.belongsTo(db.Reserv);
    Details.hasMany(db.Equipments);
    Details.hasOne(db.Rooms);
    Details.hasOne(db.Files);
    Details.hasOne(db.Pricings);
  }
  return Details;
  };