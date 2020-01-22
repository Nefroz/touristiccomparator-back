module.exports = function(sequelize, DataTypes) {
     var Configuration = sequelize.define("Configuration", {
  name: {
    type: DataTypes.STRING,
    unique:true
  },
}, {
     paranoid:true,
   })

return Configuration;
};