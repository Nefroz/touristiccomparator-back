
module.exports = function(sequelize, DataTypes) {
     var Tarification = sequelize.define("Tarification", {
  name: {
    type: DataTypes.STRING,
  },
  equij: {
    type: DataTypes.BIGINT,
  },
  equih: {
    type: DataTypes.BIGINT,
  },
  sallej: {
    type: DataTypes.BIGINT,
  },
  salleh: {
    type: DataTypes.BIGINT,
  },
  caution: {
    type: DataTypes.BIGINT,
  },
}, {
     paranoid:true,
   })

Tarification.associate = (db) => {
  Tarification.hasOne(db.Reserv)
}

return Tarification;
};