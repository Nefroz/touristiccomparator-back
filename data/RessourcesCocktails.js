"use strict";
const Generic = require("../core/genericModel");

module.exports = function Model(name = "ressourcescocktails", alias = "RessourcesCocktails") {
  Generic.call(this);

  this.connexion = "sequelize";
  this.parent = "/:entity";
  this.name = name;
  this.token = true;
  this.alias = alias;
  this.scopes = {};

  this.belongsTo = ["Ressources,Cocktails"];
  this.hasMany = [""];

  this.model = undefined;
  this.toInstall = true;

  this.definition = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      this.name,
      {
        isVariation: { // Est une variation?
          type: DataTypes.BOOLEAN,
        },
        isFacultative: { // Necessaire au cocktail?
          type: DataTypes.BOOLEAN,
        },
        quantity: { //ex: 1,30,5
          type: DataTypes.INT,
        },
        typeofquantity: { // ex:feuilles,centilitres,grammes
          type: DataTypes.STRING,
        },
        toFactorize: { //Peut on factoriser si moins/plus de personnes, ex: 1 cuillere reste une cuillere meme s'il faut le faire pour 1 ou 10 personnes
          type: DataTypes.BOOLEAN,
        },
        isValidated: { //Cocktail ou ressource validée
          type: DataTypes.BOOLEAN,
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
