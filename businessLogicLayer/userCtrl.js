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

exports.createUser = (req,res,next) => {
  db.Users.create(req.body)
  .then((instance) =>{
    Object.assign(req.body, {UserId : instance.id})
    db.Addresses.create(req.body)
    .then(() => res.status(201).json(req.body))
    .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(400).json({ error }));
}

exports.getUser = (req,res,next) => {
  db.Users.findAll({
    include : [
      { model : db.Addresses },
    ]
  }).then(reserv => {
      console.log("All users: ", JSON.stringify(reserv, null, 4));
      res.status(200).json(reserv);
  }).catch(error => {
    console.log(error)
    res.status(400).json({ error })
  });
};

exports.putUser = (req,res,next) =>{
  const indice=req.params.id;
  db.Users.update(
  req.body,
  { where: { id: indice } }
  )
  .then(() => res.status(200).json(req.body))
  .catch(error => res.status(204).json({ error }))
};

exports.deleteUser = (req,res,next) => {
  const indice=req.params.id;
  db.Users.destroy({
  where: { id:indice }
})
  .then(() => res.status(200).json({ message: 'User deleted!' }))
  .catch(error => res.status(500).json({ error }));
}