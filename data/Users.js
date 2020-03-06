"use strict";
const Generic = require("../core/genericModel");

module.exports = function Model(name = "users", alias = "Users") {
  Generic.call(this);

  this.connexion = "sequelize";
  this.parent = "/:entity";
  this.name = name;
  this.token = true;
  this.alias = alias;
  this.scopes = {};

  this.belongsTo = ["Ressources"];
  this.hasMany = ["Addresses"];

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
        },
        rights: {
          type: DataTypes.BIGINT,
          defaultValue: "0"
        }
      },
      {
        paranoid: true,
        hooks: {}
      }
    );

    this.model = Model;
    return Model;
  };
};
