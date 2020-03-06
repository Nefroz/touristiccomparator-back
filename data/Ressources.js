"use strict";
const Generic = require("../core/genericModel");

module.exports = function Model(name = "ressources", alias = "Ressources") {
  Generic.call(this);

  this.connexion = "sequelize";
  this.parent = "/:entity";
  this.name = name;
  this.token = true;
  this.alias = alias;
  this.scopes = {};

  this.belongsTo = ["Ressources"];
  this.hasMany = ["Details","Addresses","Pricings","Ressources","Rules","Types","Unavailibilities","Users"];

  this.model = undefined;
  this.toInstall = true;

  this.definition = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      this.name,
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        pricingd: {
          type: DataTypes.BIGINT,
          allowNull: false
        },
        pricingh: {
          type: DataTypes.BIGINT,
          allowNull: false
        },
        gage: {
          type: DataTypes.BIGINT,
          allowNull: false
        },
        stock: {
          type: DataTypes.BOOLEAN,
          defaultValue: "1"
        },
        description: {
          type: DataTypes.TEXT
        },
        validintern: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
        validextern: {
          type: DataTypes.BOOLEAN,
          allowNull: false
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
