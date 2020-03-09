"use strict";
const Generic = require("../core/genericModel");

module.exports = function Model(name = "pricings", alias = "Pricings") {
  Generic.call(this);

  this.connexion = "sequelize";
  this.parent = "/:entity";
  this.name = name;
  this.token = true;
  this.alias = alias;
  this.scopes = {};

  this.belongsTo = [];
  this.hasMany = ["Ressources", "Rules"];
  this.model = undefined;
  this.toInstall = true;

  this.definition = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      this.name,
      {
        name: {
          type: DataTypes.STRING
        }
      },
      {
        paranoid: true,
        hooks: {},
        scopes: {
          simple: { attributes: ["id", "name"] },
          complex: { attributes: ["id", "name", "createdAt"] }
        }
      }
    );

    this.model = Model;
    return Model;
  };
};
