"use strict";
const Generic = require("../core/genericModel");

module.exports = function Model(
  name = "unavailibilities",
  alias = "Unavailibilities"
) {
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
        start: {
          type: DataTypes.DATE,
          allowNull: false
        },
        end: {
          type: DataTypes.DATE,
          allowNull: false
        }
      },
      {
        paranoid: true,
        hooks: {}
      }
    );

    Model.addHook("beforeBulkCreate", options => {
      options.individualHooks = true;
    });

    Model.addHook("beforeCreate", (instance, options) => {
      console.log(instance);
    });

    this.model = Model;
    return Model;
  };
};
