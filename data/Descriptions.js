module.exports = function(sequelize, DataTypes) {
     var Descriptions = sequelize.define("Descriptions", {
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
}, {
     paranoid:true,
   })

Descriptions.associate = (db) => {
  Descriptions.belongsTo(db.Equipments)
  Descriptions.belongsTo(db.Rooms);
}

return Descriptions;
};