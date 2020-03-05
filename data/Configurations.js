"use strict";
const Generic = require('../core/genericModel');

module.exports = function Model(name = "configuration", alias = "Configuration") {

	Generic.call(this)

	this.connexion = "sequelize"
	this.parent = "/:entity"
	this.name = name
  this.token = true 
  this.alias = alias
  this.scopes = {};

	this.belongsTo = [];
	this.hasMany = [];
  
  this.model = undefined 
  this.toInstall = true 

	this.definition = (sequelize, DataTypes) => {

		const Model = sequelize.define(this.name, {
			name: {
        type: DataTypes.STRING,
        unique:true
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