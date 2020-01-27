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

exports.install = (req, res, next) => { 
  async.waterfall([
    c => {
      db.sequelize.sync({force:true}).then( () => {
          c(null)
        })
    },
    c => {
      db.Rooms.bulkCreate([{name : "test"}, {name : "test"}, {name : "test"}, {name : "test"}])
        .then(() => {
         c(null) 
       })
        .catch(error => {
          // res.status(400).json({ error })
          console.log(error)
        } );
    },
    c => {
      db.Reserv.bulkCreate([
        { start : moment("01/01/2020", "DD*/MM/YYYY").toDate(),  end : moment("31/01/2020", "DD*/MM/YYYY").toDate(), RoomId:4 },
        { start : moment("01/01/2020", "DD*/MM/YYYY").toDate(),  end : moment("25/02/2020", "DD*/MM/YYYY").toDate(), RoomId:1 },
        { start : moment("01/01/2020", "DD*/MM/YYYY").toDate(),  end : moment("15/05/2020", "DD*/MM/YYYY").toDate(), RoomId:2 },
        { start : moment("01/01/2020", "DD*/MM/YYYY").toDate(),  end : moment("01/08/2020", "DD*/MM/YYYY").toDate(), RoomId:3 },
      ]).then( () => {
        console.log("Ok")
        c(null)
      }) .catch(error => {
          // res.status(400).json({ error })
          console.log(error)
        } );
    }
   ], () => {
     res.status(200).end()
   })
}