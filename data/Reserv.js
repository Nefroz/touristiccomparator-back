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
  booker: {
    type: DataTypes.BIGINT,
    // allowNull: false,
  },
  pricingtype: {
    type: DataTypes.BOOLEAN,
    // allowNull: false,
  },
  equipment: {
    type: DataTypes.BIGINT,
  },
  room: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  activity: {
    type: DataTypes.STRING,
  },
  fullday: {
    type: DataTypes.BOOLEAN,
    // allowNull: false,
  },
  idorganizer: {
    type: DataTypes.BIGINT,
    // allowNull: false,
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
  Reserv.belongsTo(db.Details)
  Reserv.belongsTo(db.Users)
}

return Reserv;
}
