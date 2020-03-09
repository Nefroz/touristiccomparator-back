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

  this.belongsTo = ["Ressources","Types","Pricings"];
  this.hasMany = ["Details","Addresses","Ressources","Unavailibilities","Users"];

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
          type: DataTypes.FLOAT,
          allowNull: false
        },
        pricingh: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        gage: {
          type: DataTypes.FLOAT,
          allowNull: false,
          defaultValue : 0,
        },
        stock: {
          type: DataTypes.BIGINT,
          allowNull: false,
          defaultValue : 1,
        },
        available:{
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue : 1,
        },
        description: {
          type: DataTypes.TEXT
        },
        validintern: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue : 1,
        },
        validextern: {
          type: DataTypes.BOOLEAN,
          allowNull: false, 
          defaultValue : 1,
        }
      },
      {
        paranoid: true,
        hooks: {}
      }
    );

    Model.addHook("beforeFind", (options) => {
      if(options.req) {
        const db = options.req.db 
        options.include = options.include || []
        options.include.push({ model : db.Unavailibilities })
        options.include.push({ model : db.Types })
        options.include.push({ model : db.Details })
        options.include.push({ model : db.Addresses })
        options.include.push({ model : db.Users })
        options.include.push({
          model : db.Ressources, include : [{
            model : db.Ressources, include : [{
              model : db.Ressources
            }]
          }]
        })
      }
    })

    this.model = Model;
    return Model;
  };
};
