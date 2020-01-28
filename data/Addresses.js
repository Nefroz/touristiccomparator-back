module.exports = function(sequelize, DataTypes) {
     var Addresses = sequelize.define("Addresses", {
      streetname: {
        type: DataTypes.STRING,
      },
      postalcode: {
        type: DataTypes.BIGINT,
      },
      streetnumber: {
        type: DataTypes.BIGINT,
      },
      locality: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
   }, {
     paranoid:true,
   })

  Addresses.associate = (db) => {
    Addresses.belongsTo(db.Users);
    Addresses.belongsTo(db.Rooms);
  }
  return Addresses;
  };