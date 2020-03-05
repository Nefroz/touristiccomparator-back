"use strict";
const Generic = require('../core/genericModel');

module.exports = function Model(name = "rules", alias = "Rules") {

	Generic.call(this)

	this.connexion = "sequelize"
	this.parent = "/:entity"
	this.name = name
  this.token = true 
  this.alias = alias
  this.scopes = {};

	this.belongsTo = ["Ressources"];
	this.hasMany = [];
  
  this.model = undefined 
  this.toInstall = true 

	this.definition = (sequelize, DataTypes) => {

		const Model = sequelize.define(this.name, {
            type : {
                // promo, reduc, tva, forfait
                type : DataTypes.STRING, 
                allowNull : false, 
            },
            amount : {
                type : DataTypes.INTEGER(12),
                allowNull : false, 
            },
		},
		{
			paranoid: true,
			hooks: {}
		});

		this.model = Model 
		return Model 
	}

}