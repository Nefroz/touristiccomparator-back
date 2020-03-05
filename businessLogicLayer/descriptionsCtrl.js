// const path = require("path");
// const fs = require("fs-extra");
// const multiparty = require("multiparty");
// const util = require("util");
// const async = require("async");
// const {exec} = require("child_process");
// const logger = require("tracer").console();
// const guid = require("uuid/v1");
// const db = require("../data/index");
// var bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const sequelize = require("sequelize");
// const moment = require("moment");

// exports.getDescriptions = (req, res,next) => {
//   db.Descriptions.findAll().then(description => {
//       console.log("All descriptions: ", JSON.stringify(description, null, 4));
//       res.status(200).json(description);
//   }).catch(error => res.status(400).json({ error }));
// };

// exports.putDescriptions = (req,res,next) =>{
//   const indice=req.params.id;
//   db.Descriptions.update(
//   req.body,
//   { where: { id: indice } }
//   )
//   .then(() => res.status(200).json(req.body))
//   .catch(error => res.status(204).json({ error }))
// };