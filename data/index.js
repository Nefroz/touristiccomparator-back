'use strict';
const fs = require('fs');
const async = require('async');
const path = require('path');
const Sequelize = require('sequelize');
const sequelizeLogger = require("../core/sequelizeLogger")
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};

var configuration = {
  host: "localhost",
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 50,
    min: 0,
    idle: 100,
  },
  query : {
  }
}

const mysql_user = process.env.MYSQL_USER
const mysql_password = process.env.MYSQL_PASSWORD
const database = process.env.MYSQL_DATABASE
const envtype = process.env.NODE_ENV

let sequelize = new Sequelize(database, mysql_user, mysql_password, Object.assign(configuration, {
  logging : (text) => {
    console.log(sequelizeLogger(text))
  }
}));

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

/*async.waterfall([
  c => {
    db.Rooms.create({
      name : "brol",
    }).then( (room) => {
      c(null, room )
    })
  }, 
  (room, c) => {
    db.Detail.create({
      roomId : instance.id,
      
    })
  }
])*/

module.exports = db;
