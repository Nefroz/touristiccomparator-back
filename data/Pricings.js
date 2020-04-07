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
  this.hasMany = ["Rules","Reservations"];
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

    Model.addHook("beforeFind", (options) => {
      const req = options.req 
      if(req && req.db) {
        options.include = options.include || []
        options.include.push({ model : req.db.Rules, include : [
          { model : req.db.Types },
          { model : req.db.Ressources },
        ] })
      }
    })

    return Model;
  };
};
