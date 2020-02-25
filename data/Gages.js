module.exports = function(sequelize, DataTypes) {
     var Gages = sequelize.define("Gages", {
      name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      amount: {
        type: DataTypes.BIGINT,
        allowNull:false
      },
   }, {
     paranoid:true,
   })

   Gages.associate = (db) => {
     Gages.belongsTo(db.Equipments);
     Gages.belongsTo(db.Rooms);
  }
  return Gages;
  };