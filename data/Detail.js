module.exports = function(sequelize, DataTypes) {
     var Detail = sequelize.define("Detail", {
      equipement: {
        type: DataTypes.BIGINT,
      },
      montant: {
        type: DataTypes.BIGINT,
      },
   }, {
     paranoid:true,
   })

  Detail.associate = (db) => {
    Detail.hasOne(db.Reserv);
    Detail.hasMany(db.Equipement);
    Detail.hasOne(db.Rooms);
    Detail.hasMany(db.Vehicule);
  }
  return Detail;
  };