module.exports = function(sequelize, DataTypes) {
     var Descriptions = sequelize.define("Descriptions", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
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