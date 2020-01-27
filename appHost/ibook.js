const express = require('express');
const router = express.Router();

const userCtrl = require('../businessLogicLayer/userCtrl');
const installdbCtrl = require('../businessLogicLayer/installdbCtrl')
const equipmentCtrl = require('../businessLogicLayer/equipmentCtrl')
const pricingCtrl = require('../businessLogicLayer/pricingCtrl')
const reservCtrl = require('../businessLogicLayer/reservCtrl')
const roomsCtrl = require('../businessLogicLayer/roomsCtrl')
const unavailibilityequipCtrl = require('../businessLogicLayer/unavailibilityequipCtrl')
const unavailibilityroomCtrl = require('../businessLogicLayer/unavailibilityroomCtrl')
const vehicleCtrl = require('../businessLogicLayer/vehicleCtrl')
//User
router.get('/user', userCtrl.getUser);
router.post('/user', userCtrl.postUser);
router.post('/login', userCtrl.login);
//Equipment
router.post('/equipment', equipmentCtrl.createEquipment);
router.get('/equipment',equipmentCtrl.getEquipment);
router.put('/equipment/:id',equipmentCtrl.putEquipment);
router.delete('/equipment/:id',equipmentCtrl.deleteEquipment);
//Rooms
router.post('/rooms',roomsCtrl.createRooms);
router.get('/rooms',roomsCtrl.getRooms);
router.put('/rooms/:id',roomsCtrl.putRooms);
router.delete('/rooms/:id',roomsCtrl.deleteRooms);
//Reservation
router.post('/reserv',reservCtrl.createReserv);
router.get('/reserv',reservCtrl.getReserv);
router.put('/reserv/:id',reservCtrl.putReserv);
router.delete('/reserv/:id',reservCtrl.deleteReserv);
//Vehicle
router.post('/vehicle',vehicleCtrl.createVehicle);
router.get('/vehicle',vehicleCtrl.getVehicle);
router.put('/vehicle/:id',vehicleCtrl.putVehicle);
router.delete('/vehicle/:id',vehicleCtrl.deleteVehicle);
//Pricing
router.post('/pricing',pricingCtrl.createPricing);
router.get('/pricing',pricingCtrl.getPricing);
router.put('/pricing/:id',pricingCtrl.putPricing);
router.delete('/pricing/:id',pricingCtrl.deletePricing);
//Room unavailibity
router.post('/roomunavailibility',unavailibilityroomCtrl.createRoomunavailibility);
router.get('/roomunavailibility',unavailibilityroomCtrl.getRoomunavailibility);
router.put('/roomunavailibility/:id',unavailibilityroomCtrl.putRoomunavailibility);
router.delete('/roomunavailibility/:id',unavailibilityroomCtrl.deleteRoomunavailibility);
//Equipment unavailibity
router.post('/equipunavailibility',unavailibilityequipCtrl.createEquipunavailibility);
router.get('/equipunavailibility',unavailibilityequipCtrl.getEquipunavailibility);
router.put('/equipunavailibility/:id',unavailibilityequipCtrl.putEquipunavailibility);
router.delete('/equipunavailibility/:id',unavailibilityequipCtrl.deleteEquipunavailibility);
//Install and seed the database
router.get('/install',installdbCtrl.install);

module.exports = router;