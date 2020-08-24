"use strict";
const Generic = require("../core/genericModel");

module.exports = function Model(name = "contacts", alias = "Contacts") {
  Generic.call(this);

  this.connexion = "sequelize";
  this.parent = "/:entity";
  this.name = name;
  this.token = true;
  this.alias = alias;
  this.scopes = {};

  this.belongsTo = [];
  this.hasMany = [];

  this.model = undefined;
  this.toInstall = true;

  this.definition = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      this.name,
      {
        subject: { //nom du cocktail
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue:""
        },
        userId: {
          type: DataTypes.STRING,
        },
        text: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue:""
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
