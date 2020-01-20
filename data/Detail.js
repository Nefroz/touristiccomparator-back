const Equi = require("./Equi");
const Rooms = require("./Rooms");
const Reserv = require("./Reserv");
// Creating our Contact model
//Set it as export because we will need it required on the server
module.exports = function(sequelize, DataTypes) {
     var Detail = sequelize.define("Detail", {
       // The email cannot be null, and must be a proper email before creation
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      equipement: {
        type: DataTypes.BIGINT,
      },
      montant: {
        type: DataTypes.BIGINT,
      },
      reservId: {
        type: DataTypes.INTEGER,
        references: {
            model: Reserv,
            key: "reservId"
        }
      },
      equiId: {
        type: DataTypes.INTEGER,
        references: {
            model: Equi,
            key: "equiId"
        }
     },
      roomsId: {
        type: DataTypes.INTEGER,
        references: {
            model: Rooms,
            key: "roomsId"
        }
     }});

  Detail.associate = (Reserv,Equi,Rooms) =>{
    Detail.hasOne(Reserv, { foreignKey: 'reservId', as: 'Reserv'});
    Detail.hasMany(Equi, { foreignKey: 'equiId' , as: 'Equi'});
    Detail.hasMany(Rooms, { foreignKey: 'roomsId', as: 'Rooms' });
  }
    return Detail;
  };
  // this.belongsTo = [
  // { model : "Reserv", options : {foreignKey:"ReservId", targetKey:"id", as:"ReservIDFK", constraints: true, onDelete: 'cascade',hooks: true}},
  //   { model : "User", options : {foreignKey:"UserId", targetKey:"id", as:"UserIDFK", constraints: true, onDelete: 'cascade',hooks: true}},
  // ];
  // this.hasMany = [
  // { model : "Equi", options : {foreignKey:"EquiId", targetKey:"id", as:"EquiIDFK", constraints: true, onDelete: 'cascade',hooks: true}},
  //   { model : "Rooms", options : {foreignKey:"RoomsId", targetKey:"id", as:"RoomsIDFK", constraints: true, onDelete: 'cascade',hooks: true}},
  // ];
