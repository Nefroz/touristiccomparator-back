"use strict";
const Generic = require("../core/genericModel");

module.exports = function Model(name = "rules", alias = "Rules") {
  Generic.call(this);

  this.connexion = "sequelize";
  this.parent = "/:entity";
  this.name = name;
  this.token = true;
  this.alias = alias;
  this.scopes = {};

  this.belongsTo = ["Pricings"];
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
        percd: {
          type: DataTypes.FLOAT,
          allowNull: false,
          defaultValue: "100"
        },
        perch: {
          type: DataTypes.FLOAT,
          allowNull: false,
          defaultValue: "100"
        },
        percg: {
          type: DataTypes.FLOAT,
          allowNull: false,
          defaultValue: "100"
        },
        reducd: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        reduch: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        reducg: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        fixedd: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        fixedh: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        fixedg: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
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
