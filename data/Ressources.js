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

  this.belongsTo = ["Ressources","Types","Pricings","Addresses","Users"];
  this.hasMany = ["Details","Ressources","Unavailibilities", "Rules"];

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
          defaultValue : 0,
        },
        stock: {
          type: DataTypes.BIGINT,
          defaultValue : 1,
        },
        color: {
          type: DataTypes.STRING,
        },
        available:{
          type: DataTypes.BOOLEAN,
          defaultValue : 1,
        },
        capacity:{
          type: DataTypes.BIGINT,
        },
        description: {
          type: DataTypes.TEXT,
          defaultValue : '',
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
        options.include.push({ model : db.Pricings })
        options.include.push({
          model : db.Ressources, include : [{
            model : db.Ressources, include : [{
              model : db.Ressources, include : [{
                model : db.Ressources, include : [{
                  model : db.Ressources
                }]
              }]
            }]
          }]
        })
      }
    })

    this.model = Model;
    return Model;
  };
};
