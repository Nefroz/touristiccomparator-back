module.exports = function(sequelize, DataTypes) {
     var Gages = sequelize.define("Gages", {
      name: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.BIGINT,
        allowNull:false
      },
   }, {
     paranoid:true,
   })

   Gages.associate = (db) => {
     Gages.hasOne(db.Equipments);
     Gages.hasOne(db.Rooms);
  }
  return Gages;
  };