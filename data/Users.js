module.exports = function(sequelize, DataTypes) {
     var Users = sequelize.define("Users", {
      firstname: {
        type: DataTypes.STRING,
        allowNull:false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull:false
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull:false
      },
      email: {
        type: DataTypes.STRING,
      },
      tel: {
        type: DataTypes.BIGINT,
      },
   }, {
     paranoid:true,
   })

  Users.associate = (db) => {
    Users.belongsTo(db.Addresses);
    Users.hasMany(db.Unavailibilities);
    Users.hasMany(db.Reserv);
    Users.hasMany(db.Equipments);
    Users.hasMany(db.Rooms);
  }
  return Users;
  };