module.exports = function(sequelize, DataTypes) {
     var Files = sequelize.define("Files", {
  name: {
    type: DataTypes.STRING,
    unique:true,
    allowNull: false
  },   
  filepath: {
    type: DataTypes.STRING,
  },
}, {
     paranoid:true,
   })

Files.associate = (db) => {
  Files.belongsTo(db.Details)
}

return Files;
};