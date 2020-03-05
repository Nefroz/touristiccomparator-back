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
// const moment = require("moment")

// exports.createPricing = (req,res,next) => {
//   db.Pricings.create(req.body)
//   .then(() => res.status(201).json(req.body))
//   .catch(error => res.status(400).json({ error }));
// }

// exports.getPricing = (req,res,next) => {
//   db.Pricings.findAll().then(pricing => {
//       console.log("All pricings: ", JSON.stringify(pricing, null, 4));
//       res.status(200).json(pricing);
//   }).catch(error => res.status(400).json({ error }));
// };

// exports.getPricingSimplified = (req,res,next) => {
//   db.Pricings.findAll({
//     attributes : ["id", "name"]
//   }).then(pricings => {
//       console.log("All pricings: ", JSON.stringify(pricings, null, 4));
//       res.status(200).json(pricings);
//   }).catch(error => {
//     console.log(error)
//     res.status(400).json({ error })
//   });
// };

// exports.getOnePricing = (req,res,next) => {
//   db.Pricings.findAll({
//     where: [
//       {id: req.params.id}
//     ]
//   }).then(pricing => {
//       console.log("Pricing: ", JSON.stringify(pricing, null, 4));
//       res.status(200).json(pricing);
//   }).catch(error => {
//     console.log(error)
//     res.status(400).json({ error })
//   });
// };

// exports.putPricing = (req,res,next) =>{
//   const indice=req.params.id;
//   db.Pricings.update(
//   req.body,
//   { where: { id: indice } }
//   )
//   .then(() => res.status(200).json(req.body))
//   .catch(error => res.status(204).json({ error }))
// };

// exports.deletePricing = (req,res,next) => {
//   const indice=req.params.id;
//   db.Pricings.destroy({
//   where: { id:indice }
// })
//   .then(() => res.status(200).json({ message: 'Pricing deleted!' }))
//   .catch(error => res.status(500).json({ error }));
// }