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

// exports.getGages = (req, res,next) => {
//   db.Gages.findAll().then(gage => {
//       console.log("All gages: ", JSON.stringify(gage, null, 4));
//       res.status(200).json(gage);
//   }).catch(error => res.status(400).json({ error }));
// };

// exports.putGages = (req,res,next) =>{
//   const indice=req.params.id;
//   db.Gages.update(
//   req.body,
//   { where: { id: indice } }
//   )
//   .then(() => res.status(200).json(req.body))
//   .catch(error => res.status(204).json({ error }))
// };