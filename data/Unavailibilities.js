module.exports = function(sequelize, DataTypes) {
     var Unavailibilities = sequelize.define("Unavailibilities", {
  name: {
    type: DataTypes.STRING,
  },
  start: {
    type: DataTypes.DATE,
    allowNull:false
  },
  end: {
    type: DataTypes.DATE,
    allowNull:false
  },
}, {
     paranoid:true,
   })
Unavailibilities.associate = (db) => {
  Unavailibilities.hasMany(Unavailibilities, { as: 'Children', foreignKey: 'parentId', useJunctionTable: false });
  Unavailibilities.belongsTo(db.Equipments);
  Unavailibilities.belongsTo(db.Rooms);
  Unavailibilities.belongsTo(db.Users);
}
return Unavailibilities;
};