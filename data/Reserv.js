module.exports = function(sequelize, DataTypes) {

     var Reserv = sequelize.define("Reserv", {
  start: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  object: {
    type: DataTypes.STRING,
  },
  pricingtype: {
    type: DataTypes.BOOLEAN,
  },
  activity: {
    type: DataTypes.STRING,
  },
  comment: {
    type: DataTypes.STRING,
  },
  valid: {
    type: DataTypes.BOOLEAN,
    defaultValue: '0'
  }
}, {
     paranoid:true,
   });

Reserv.associate = (db) => {
  Reserv.hasMany(db.Details)
  Reserv.belongsTo(db.Users)
}

return Reserv;
}
