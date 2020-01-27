module.exports = function(sequelize, DataTypes) {
     var Pricings = sequelize.define("Pricings", {
  name: {
    type: DataTypes.STRING,
  },
  equipd: {
    type: DataTypes.BIGINT,
  },
  equiph: {
    type: DataTypes.BIGINT,
  },
  roomd: {
    type: DataTypes.BIGINT,
  },
  roomh: {
    type: DataTypes.BIGINT,
  },
  gage: {
    type: DataTypes.BIGINT,
  },
}, {
     paranoid:true,
   })

Pricings.associate = (db) => {
  Pricings.belongsTo(db.Details)
}

return Pricings;
};