module.exports = function(sequelize, DataTypes) {
     var Rooms = sequelize.define("Rooms", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adressstreet: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  adressnumber: {
    type: DataTypes.BIGINT,
    // allowNull: false,
  },
  adresscity: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  adresspostalcode: {
    type: DataTypes.BIGINT,
    // allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  colorargb:{
    type: DataTypes.STRING,
  },
  type:{
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
  Rooms.belongsTo(db.Gages);
  Rooms.hasMany(db.Equipments);
  Rooms.belongsTo(db.Addresses);
  Rooms.belongsTo(db.Users);

}

return Rooms;
};