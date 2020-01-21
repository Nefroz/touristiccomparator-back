const express = require('express');
const router = express.Router();

const roomsCtrl = require('../businessLogicLayer/rooms');

router.get('/user', roomsCtrl.getUser);
router.post('/user', roomsCtrl.postUser);
router.post('/login', roomsCtrl.login);
router.post('/equipement', roomsCtrl.createEquipement);
router.get('/equipement',roomsCtrl.getEquipement);

module.exports = router;