module.exports = function(sequelize, DataTypes) {
     var Equipments = sequelize.define("Equipments", {
  name: {
    type: DataTypes.STRING,
    unique:true,
    allowNull: false
  },   
  description: {
    type: DataTypes.STRING,
  },
  pricingd: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  pricingh: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  stock: {
  	type: DataTypes.BIGINT,
  	allowNull: false,
  },
  validintern: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  validextern: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
     paranoid:true,
   })

Equipments.associate = (db) => {
  Equipments.belongsTo(db.Details);
  Equipments.belongsTo(db.Rooms);
  Equipments.hasMany(db.Unavailibilities);
  Equipments.belongsTo(db.Gages);
  Equipments.hasMany(db.Descriptions);
  Equipments.belongsTo(db.Users);
}

return Equipments;
};