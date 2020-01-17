/*const Thing = require('../models/thing');*/
const path = require("path");
const fs = require("fs-extra");
const multiparty = require("multiparty");
const util = require("util");
const libre = require("libreoffice-convert");
const async = require("async");
const {exec} = require("child_process");
const logger = require("tracer").console();
const guid = require("uuid/v1");
const User = require("../core/User.js");
var bcrypt = require('bcrypt');

exports.testretour = (req, res,next) => {
	User.findAll().then(users => {
  		console.log("All users:", JSON.stringify(users, null, 4));
  		res.status(200).json(users);
	}).catch(error => res.status(400).json({ error }));
};

exports.signin = (req,res,next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};




