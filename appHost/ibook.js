const express = require('express');
const router = express.Router();

const ibookCtrl = require('../businessLogicLayer/ibook');

router.get('/user', ibookCtrl.getUser);
router.post('/user', ibookCtrl.postUser);
router.post('/login', ibookCtrl.login);
router.post('/equipement', ibookCtrl.createEquipement);
router.get('/equipement',ibookCtrl.getEquipement);
router.post('/rooms',ibookCtrl.createRooms);
router.get('/rooms',ibookCtrl.getRooms);
router.post('/reserv',ibookCtrl.createReserv);
router.get('/reserv',ibookCtrl.getReserv);

module.exports = router;