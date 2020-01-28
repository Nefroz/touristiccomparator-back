module.exports = function(sequelize, DataTypes) {
     var Rooms = sequelize.define("Rooms", {
  color: {
    type: DataTypes.STRING,
  },
  colorargb:{
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
  roomname:{
    type: DataTypes.STRING,
  },
  projector:{
    type: DataTypes.BOOLEAN,
  },
  validintern:{
    type: DataTypes.BOOLEAN,
    // allowNull: false
  },
  validextern:{
    type: DataTypes.BOOLEAN,
    // allowNull: false
  },
}, {
     paranoid:true,
   })

Rooms.associate = (db) => {
  Rooms.belongsTo(db.Details)
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