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

exports.createEquipunavailibility = (req,res,next) => {
  db.Equipunavailibility.create(req.body)
  .then(() => res.status(201).json(req.body))
  .catch(error => res.status(400).json({ error }));
}

exports.getEquipunavailibility = (req,res,next) => {
  db.Equipunavailibility.findAll().then(equipunavailibility => {
      console.log("All equipments unavailibilities:", JSON.stringify(equipunavailibility, null, 4));
      res.status(200).json(equipunavailibility);
  }).catch(error => res.status(400).json({ error }));
};

exports.putEquipunavailibility = (req,res,next) =>{
  const indice=req.params.id;
  db.Equipunavailibility.update(
  req.body,
  { where: { id: indice } }
  )
  .then(() => res.status(200).json(req.body))
  .catch(error => res.status(204).json({ error }))
};

exports.deleteEquipunavailibility = (req,res,next) => {
  const indice=req.params.id;
  db.Equipunavailibility.destroy({
  where: { id:indice }
})
  .then(() => res.status(200).json({ message: 'Equipment unavailibility related to index: '+req.params.id+' deleted !' }))
  .catch(error => res.status(500).json({ error }));
}