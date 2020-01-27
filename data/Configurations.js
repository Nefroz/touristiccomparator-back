module.exports = function(sequelize, DataTypes) {
     var Configurations = sequelize.define("Configurations", {
  name: {
    type: DataTypes.STRING,
    unique:true
  },
}, {
     paranoid:true,
   })

return Configurations;
};