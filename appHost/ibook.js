// const express = require('express');
// const router = express.Router();

// const userCtrl = require('../businessLogicLayer/userCtrl');
// const installdbCtrl = require('../businessLogicLayer/installdbCtrl')
// const seeddbCtrl = require('../businessLogicLayer/seeddbCtrl')
// const equipmentCtrl = require('../businessLogicLayer/equipmentCtrl')
// const pricingCtrl = require('../businessLogicLayer/pricingCtrl')
// const reservCtrl = require('../businessLogicLayer/reservCtrl')
// const roomsCtrl = require('../businessLogicLayer/roomsCtrl')
// const unavailibilityCtrl = require('../businessLogicLayer/unavailibilityCtrl')
// const addressCtrl = require('../businessLogicLayer/addressCtrl')
// const descriptionsCtrl = require('../businessLogicLayer/descriptionsCtrl')
// const detailCtrl = require('../businessLogicLayer/detailCtrl')
// const filesCtrl = require('../businessLogicLayer/filesCtrl')
// const gagesCtrl = require('../businessLogicLayer/gagesCtrl')

// //User
// router.post('/user', userCtrl.createUser);
// router.get('/user',userCtrl.getUser);
// router.get('/usersimplified',userCtrl.getUserSimplified);
// router.get('/oneuser/:id',userCtrl.getOneUser);
// router.put('/user/:id',userCtrl.putUser);
// router.delete('/user/:id',userCtrl.deleteUser);
// //Equipment
// router.post('/equipment', equipmentCtrl.createEquipment);
// router.get('/equipment',equipmentCtrl.getEquipment);
// router.get('/equipmentsimplified',equipmentCtrl.getEquipmentSimplified);
// router.get('/oneequipment/:id',equipmentCtrl.getOneEquipment);
// router.put('/equipment/:id',equipmentCtrl.putEquipment);
// router.delete('/equipment/:id',equipmentCtrl.deleteEquipment);
// //Rooms
// router.post('/rooms',roomsCtrl.createRooms);
// router.get('/rooms',roomsCtrl.getRooms);
// router.get('/roomssimplified',roomsCtrl.getRoomsSimplified);
// router.get('/onerooms/:id',roomsCtrl.getOneRooms);
// router.put('/rooms/:id',roomsCtrl.putRooms);
// router.delete('/rooms/:id',roomsCtrl.deleteRooms);
// //Reservation
// router.post('/reserv',reservCtrl.createReserv);
// router.get('/reserv',reservCtrl.getReserv);
// router.get('/onereserv/:id',reservCtrl.getOneReserv);
// router.put('/reserv/:id',reservCtrl.putReserv);
// router.delete('/reserv/:id',reservCtrl.deleteReserv);
// //Pricing
// router.post('/pricing',pricingCtrl.createPricing);
// router.get('/pricing',pricingCtrl.getPricing);
// router.get('/pricingsimplified',pricingCtrl.getPricingSimplified);
// router.get('/onepricing/:id',pricingCtrl.getOnePricing);
// router.put('/pricing/:id',pricingCtrl.putPricing);
// router.delete('/pricing/:id',pricingCtrl.deletePricing);
// //Unavailibility
// router.post('/unavailibility',unavailibilityCtrl.createUnavailibility);
// router.get('/unavailibility',unavailibilityCtrl.getUnavailibility);
// router.get('/oneunavailibility/:id',unavailibilityCtrl.getOneUnavailibility);
// router.put('/unavailibility/:id',unavailibilityCtrl.putUnavailibility);
// router.delete('/unavailibility/:id',unavailibilityCtrl.deleteUnavailibility);
// //Address
// router.get('/address',addressCtrl.getAddress);
// router.put('/address/:id',addressCtrl.putAddress);
// //Descriptions
// router.get('/descriptions',descriptionsCtrl.getDescriptions);
// router.put('/descriptions/:id',descriptionsCtrl.putDescriptions);
// //Detail
// router.get('/detail',detailCtrl.getDetail);
// router.put('/detail/:id',detailCtrl.putDetail);
// //Files
// router.post('/files',filesCtrl.createFiles);
// router.get('/files',filesCtrl.getFiles);
// router.put('/files/:id',filesCtrl.putFiles);
// //Gages
// router.get('/gages',gagesCtrl.getGages);
// router.put('/gages/:id',gagesCtrl.putGages);

// //Install and seed the database
// router.get('/install',installdbCtrl.install);
// router.get('/seed',seeddbCtrl.seed);

// module.exports = router;