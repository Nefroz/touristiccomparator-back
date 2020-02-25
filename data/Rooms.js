module.exports = function(sequelize, DataTypes) {
  var Rooms = sequelize.define("Rooms", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
  },
  pricingd:{
    type: DataTypes.BIGINT,
  },
  pricingh:{
    type: DataTypes.BIGINT,
  },
  capacity:{
    type: DataTypes.BIGINT,
  },
  projector:{
    type: DataTypes.BOOLEAN,
  },
  validintern:{
    type: DataTypes.BOOLEAN,
  },
  validextern:{
    type: DataTypes.BOOLEAN,
  },
}, {
     paranoid:true,
   })

Rooms.associate = (db) => {
  Rooms.hasMany(db.Details)
  Rooms.hasMany(db.Unavailibilities)
  Rooms.hasMany(db.Descriptions)
  Rooms.hasMany(db.Gages);
  Rooms.hasMany(db.Equipments);
  Rooms.hasMany(db.Addresses);
  Rooms.belongsTo(db.Users);
  Rooms.belongsTo(db.Users, { as: 'contact', foreignKey: 'contactId'});
}

return Rooms;
};