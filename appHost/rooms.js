const express = require('express');
const router = express.Router();

const roomsCtrl = require('../businessLogicLayer/rooms');

router.get('/', roomsCtrl.testretour);
router.post('/createUser', roomsCtrl.signin);

module.exports = router;