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

exports.getUser = (req,res,next) => {

	User.findAll().then(users => {
  		console.log("All users:", JSON.stringify(users, null, 4));
  		res.status(200).json(users);
	}).catch(error => res.status(400).json({ error }));
};

exports.postUser = (req,res,next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new Users({
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'User created!' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req,res,next) => {
  Users.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Wrong username or incorrect password!' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Wrong username or incorrect password!' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'InforiusIbookInforius0101',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};