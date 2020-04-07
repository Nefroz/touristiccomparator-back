"use strict";
const Generic = require("../core/genericModel");

module.exports = function Model(name = "details", alias = "Details") {
  Generic.call(this);

  this.connexion = "sequelize";
  this.parent = "/:entity";
  this.name = name;
  this.token = true;
  this.alias = alias;
  this.scopes = {};

  this.belongsTo = ["Reservations", "Ressources"];
  this.hasMany = [];

  this.model = undefined;
  this.toInstall = true;

  this.definition = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      this.name,
      {
        reduccategory: {
          type: DataTypes.BIGINT
        },
        reducvalue: {
          type: DataTypes.BIGINT
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
