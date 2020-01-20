const express = require('express');
const router = express.Router();

const roomsCtrl = require('../businessLogicLayer/rooms');

router.get('/', roomsCtrl.testretour);
router.post('/createUser', roomsCtrl.signin);
router.post('/login', roomsCtrl.login);

module.exports = router;