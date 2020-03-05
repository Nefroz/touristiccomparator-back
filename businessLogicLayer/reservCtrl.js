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
// const express = require("express");

// exports.createReserv = (req,res,next) => {
//   const datestarttest=Date.parse(req.body.start)
//   const dateendtest=Date.parse(req.body.end)
//   const requested = express.json(req.body)
//   console.log(req.body)
//   db.Reserv.findAll({
//     where: {
//       id: req.body.RoomId
//     }
//   })         //trouver toutes les reservations ou la salle en requete vaut celle en room
//   .then( (reserv) =>{  
//     console.log(reserv)
//     if ( reserv.length === 0) {
//       db.Reserv.create(req.body)
//       .then((instance) =>{
//         Object.assign(req.body, {UserId : instance.id})
//         Object.assign(req.body, {ReservId : instance.id})
//         db.Details.create(req.body)
//         .then(() => res.status(201).json(req.body))
//         .catch(error => res.status(400).json({  "message":"3",error }))
//       })
//       .catch(error => {
//         console.log(error)
//         res.status(400).json({ "message":"4",error })
//       });
//     } else {
//       reserv.map( item =>{
//         if( (datestarttest>=item.dataValues.end) || (dateendtest<=item.dataValues.start) ){
//             db.Reserv.create(req.body)
//             .then((instance) =>{
//               Object.assign(req.body, {UserId : instance.id})
//               Object.assign(req.body, {ReservId : instance.id})
//               db.Details.create(req.body)
//               .then(() => res.status(201).json(req.body))
//               .catch(error => res.status(400).json({ "message":"1",error }))
//             })
//             .catch(error => {
//               console.log(error)
//               res.status(400).json({ "message":"2",error })
//             });
//           }   
//         else {
//           res.status(400).json({message : "There is already an existing reservation at that time."})
//         }
//       })
//     }
//   })
//   .catch( error => res.status(400).json({error}))
// }

// exports.getReserv = (req,res,next) => {
//   db.Reserv.findAll({
//     include : [
//       { model : db.Users }, 
//       { model : db.Details }, 
//     ]
//   }).then(reserv => {
//       console.log("Toutes les réservations:", JSON.stringify(reserv, null, 4));
//       res.status(200).json(reserv);
//   }).catch(error => {
//     console.log(error)
//     res.status(400).json({ error })
//   });
// };

// exports.getOneReserv = (req,res,next) => {
//   db.Reserv.findAll({
//     include : [
//       { model : db.Users }, 
//       { model : db.Details }
//     ],
//     where: [
//       {id: req.params.id}
//     ]
//   }).then(Reservation => {
//       console.log("Reservation: ", JSON.stringify(Reservation, null, 4));
//       res.status(200).json(Reservation);
//   }).catch(error => {
//     console.log(error)
//     res.status(400).json({ error })
//   });
// };

// exports.putReserv = (req,res,next) =>{
//   const indice=req.params.id;
//   db.Reserv.update(
//   req.body,
//   { where: { id: indice } }
//   )
//   .then((instance) =>{
//     Object.assign(req.body, {ReservId : instance.id});
//     console.log(req.body)
//     db.Details.update(req.body,
//       { where: { id: indice } })
//     .then(() => res.status(201).json(req.body))
//     .catch(error => res.status(400).json({ error }));
//   })
//   .catch(error => res.status(204).json({ error }))
// };

// exports.deleteReserv = (req,res,next) => {
//   const indice=req.params.id;
//   db.Reserv.destroy({
//   where: { id:indice }
// })
//   .then(() => res.status(200).json({ message: 'Reservation deleted!' }))
//   .catch(error => res.status(500).json({ error }));
// }