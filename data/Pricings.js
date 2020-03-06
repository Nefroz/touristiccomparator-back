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

  this.belongsTo = ["Ressources"];
  this.hasMany = [];
  this.model = undefined;
  this.toInstall = true;

  this.definition = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      this.name,
      {
        name: {
          type: DataTypes.STRING
        },
        equipd: {
          type: DataTypes.BIGINT
        },
        equiph: {
          type: DataTypes.BIGINT
        },
        roomd: {
          type: DataTypes.BIGINT
        },
        roomh: {
          type: DataTypes.BIGINT
        },
        gage: {
          type: DataTypes.BIGINT
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
