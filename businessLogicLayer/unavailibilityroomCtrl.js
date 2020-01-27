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

exports.createRoomunavailibility = (req,res,next) => {
  db.Roomunavailibility.create(req.body)
  .then(() => res.status(201).json(req.body))
  .catch(error => res.status(400).json({ error }));
}

exports.getRoomunavailibility = (req,res,next) => {
  db.Roomunavailibility.findAll().then(roomunavailibility => {
      console.log("Toutes les indisponibilités des salles:", JSON.stringify(roomunavailibility, null, 4));
      res.status(200).json(roomunavailibility);
  }).catch(error => res.status(400).json({ error }));
};

exports.putRoomunavailibility = (req,res,next) =>{
  const indice=req.params.id;
  db.Roomunavailibility.update(
  req.body,
  { where: { id: indice } }
  )
  .then(() => res.status(200).json(req.body))
  .catch(error => res.status(204).json({ error }))
};

exports.deleteRoomunavailibility = (req,res,next) => {
  const indice=req.params.id;
  db.Roomunavailibility.destroy({
  where: { id:indice }
})
  .then(() => res.status(200).json({ message: 'Room unavailibility related to index: '+req.params.id+'  deleted !' }))
  .catch(error => res.status(500).json({ error }));
}