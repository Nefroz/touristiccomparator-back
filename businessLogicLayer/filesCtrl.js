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
const moment = require("moment");

exports.getFiles = (req, res,next) => {
  db.Files.findAll().then(files => {
      console.log("All files: ", JSON.stringify(files, null, 4));
      res.status(200).json(files);
  }).catch(error => res.status(400).json({ error }));
};

exports.putFiles = (req,res,next) =>{
  const indice=req.params.id;
  db.Files.update(
  req.body,
  { where: { id: indice } }
  )
  .then(() => res.status(200).json(req.body))
  .catch(error => res.status(204).json({ error }))
};