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

  this.belongsTo = ["Pricings", "Ressources", "Types"];
  this.hasMany = [];

  this.model = undefined;
  this.toInstall = true;

  this.definition = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      this.name,
      {
        category : {
          type : DataTypes.STRING, // percd,perch,percg,reducd,reduch,reducg,fixedd,fixedh,fixedg 
        },
        value : {
          type: DataTypes.FLOAT,
          defaultValue: 0
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
