"use strict";
const Generic = require("../core/genericModel");

module.exports = function Model(name = "addresses", alias = "Addresses") {
  Generic.call(this);

  this.connexion = "sequelize";
  this.parent = "/:entity";
  this.name = name;
  this.token = true;
  this.alias = alias;
  this.scopes = {};

  this.belongsTo = ["Users", "Ressources"];
  this.hasMany = [];

  this.model = undefined;
  this.toInstall = true;

  this.definition = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      this.name,
      {
        streetname: {
          type: DataTypes.STRING
        },
        postalcode: {
          type: DataTypes.BIGINT
        },
        streetnumber: {
          type: DataTypes.BIGINT
        },
        locality: {
          type: DataTypes.STRING
        },
        country: {
          type: DataTypes.STRING
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
