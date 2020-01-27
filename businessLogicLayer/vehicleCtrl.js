const path = require("path");
const fs = require("fs-extra");
const multiparty = require("multiparty");
const util = require("util");
const async = require("async");
const {exec} = require("child_process");
const logger = require("tracer").console();
const guid = require("uuid/v1");
const db = require("../data/index");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sequelize = require("sequelize");
const moment = require("moment")

exports.createVehicle = (req,res,next) => {
  db.Vehicle.create(req.body)
  .then(() => res.status(201).json(req.body))
  .catch(error => res.status(400).json({ error }));
}

exports.getVehicle = (req,res,next) => {
  db.Vehicle.findAll().then(vehicles => {
      console.log("All vehicles:", JSON.stringify(vehicles, null, 4));
      res.status(200).json(vehicles);
  }).catch(error => res.status(400).json({ error }));
};

exports.putVehicle = (req,res,next) =>{
  const indice=req.params.id;
  db.Vehicle.update(
  req.body,
  { where: { id: indice } }
  )
  .then(() => res.status(200).json(req.body))
  .catch(error => res.status(204).json({ error }))
};

exports.deleteVehicle = (req,res,next) => {
  const indice=req.params.id;
  db.Vehicle.destroy({
  where: { id:indice }
})
  .then(() => res.status(200).json({ message: 'Véhicle deleted!' }))
  .catch(error => res.status(500).json({ error }));
}