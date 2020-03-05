"use strict";
const Generic = require('../core/genericModel');

module.exports = function Model(name = "gages", alias = "Gages") {

	Generic.call(this)

	this.connexion = "sequelize"
	this.parent = "/:entity"
	this.name = name
  this.token = true 
  this.alias = alias

	this.belongsTo = ["Ressources"];
	this.hasMany = [];
  
  this.model = undefined 
  this.toInstall = true 

	this.definition = (sequelize, DataTypes) => {

		const Model = sequelize.define(this.name, {
      name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      amount: {
        type: DataTypes.BIGINT,
        allowNull:false
      },
		},
		{
			paranoid: true,
			hooks: {},
			scopes : {},
		});

		this.model = Model 
		return Model 
	}

}