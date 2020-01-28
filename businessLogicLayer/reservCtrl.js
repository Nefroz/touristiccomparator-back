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

exports.createReserv = (req,res,next) => {
  const datestarttest=Date.parse(req.body.start)
  const dateendtest=Date.parse(req.body.end)
  db.Reserv.findAll({
    where: {
      id: req.body.room
    }
  })         //trouver toutes les reservations ou la salle en requete vaut celle en room
  .then( (reserv) =>{  
    if ( reserv.length === 0) {
      db.Reserv.create(req.body)
      .then((instance) =>{
        Object.assign(req.body, {UserId : instance.id})
        db.Detail.create(req.body)
        .then((instance) =>{
          db.Files.create(req.body)
          .then(() => {
            




            res.status(201).json(req.body)
          })
          .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
      })
      .catch(error => {
        console.log(error)
        res.status(400).json({ error })
      });
    } else {
      reserv.map( item =>{
        if( (datestarttest>=item.dataValues.end) || (dateendtest<=item.dataValues.start) ){
            db.Reserv.create(req.body)
          .then((instance) => {
            // BLABLABLA
            res.status(201).json(instance)
          })
          .catch(error => res.status(400).json({ error }));   
        }
        else {
          res.status(400).json({message : "There is already an existing reservation at that time."})
        }
      })
    }
  })
  .catch( error => res.status(400).json({error}))
}

exports.getReserv = (req,res,next) => {
  db.Reserv.findAll({
    include : [
      { model : db.Users }, 
      { model : db.Details }, 
    ]
  }).then(reserv => {
      console.log("Toutes les réservations:", JSON.stringify(reserv, null, 4));
      res.status(200).json(reserv);
  }).catch(error => {
    console.log(error)
    res.status(400).json({ error })
  });
};

exports.putReserv = (req,res,next) =>{
  const indice=req.params.id;
  db.Reserv.update(
  req.body,
  { where: { id: indice } }
  )
  .then(() => res.status(200).json(req.body))
  .catch(error => res.status(204).json({ error }))
};

exports.deleteReserv = (req,res,next) => {
  const indice=req.params.id;
  db.Reserv.destroy({
  where: { id:indice }
})
  .then(() => res.status(200).json({ message: 'Reservation deleted!' }))
  .catch(error => res.status(500).json({ error }));
}