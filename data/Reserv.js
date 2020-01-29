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
  equipment: {
    type: DataTypes.BIGINT,
  },
  units: {
    type: DataTypes.BIGINT,
  },
  room: {
    type: DataTypes.STRING,
  },
  activity: {
    type: DataTypes.STRING,
  },
  fullday: {
    type: DataTypes.BOOLEAN,
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
