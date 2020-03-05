"use strict";
const Generic = require('../core/genericModel');

module.exports = function Model(name = "reservations", alias = "Reservations") {

	Generic.call(this)

	this.connexion = "sequelize"
	this.parent = "/:entity"
	this.name = name
  this.token = true 
  this.alias = alias
  this.scopes = {};

	this.belongsTo = ["Ressources"];
	this.hasMany = ["Details"];
  
  this.model = undefined 
  this.toInstall = true 

	this.definition = (sequelize, DataTypes) => {

		const Model = sequelize.define(this.name, {
      start: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      object: {
        type: DataTypes.STRING,
      },
      activity: {
        type: DataTypes.STRING,
      },
      comment: {
        type: DataTypes.STRING,
      },
      valid: {
        type: DataTypes.BOOLEAN,
        defaultValue: '0'
      }
		},
		{
			paranoid: true,
			hooks: {}
		});

		this.model = Model 
		return Model 
	}

}