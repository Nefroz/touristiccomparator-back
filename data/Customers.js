"use strict";
const Generic = require("../core/genericModel");

module.exports = function Model(name = "customers", alias = "Customers") {
  Generic.call(this);

  this.connexion = "sequelize";
  this.parent = "/:entity";
  this.name = name;
  this.token = true;
  this.alias = alias;
  this.scopes = {};

  this.belongsTo = ["Addresses"];
  this.hasMany = ["Details"];

  this.model = undefined;
  this.toInstall = true;

  this.definition = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      this.name,
      {
        firstname: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastname: {
          type: DataTypes.STRING,
          allowNull: false
        },
        birthday: {
          type: DataTypes.DATE,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING
        },
        tel: {
          type: DataTypes.BIGINT
        }
      },
      {
        paranoid: true,
        hooks: {}, 
        scopes : {
          simple : {
            attributes : ["id", "firstname", "lastname"]
          }
        }
      }
    );

    this.model = Model;
    return Model;
  };
};
