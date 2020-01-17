const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const logger = require('tracer').console();

const app = express();

require('./core/connection');
const model = require('./core/User.js');
model.sync({alter:true})

const roomsRoutes = require('./appHost/rooms');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use('core/ressources/images', express.static(path.join(__dirname, 'images')));
app.use('/api/rooms', roomsRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;