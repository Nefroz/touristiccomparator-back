const express = require('express');
const router = express.Router();

const ibookCtrl = require('../businessLogicLayer/ibook');

router.get('/user', ibookCtrl.getUser);
router.post('/user', ibookCtrl.postUser);
router.post('/login', ibookCtrl.login);

router.post('/equipement', ibookCtrl.createEquipement);
router.get('/equipement',ibookCtrl.getEquipement);
router.put('/equipement/:id',ibookCtrl.putEquipement);
router.delete('/equipement/:id',ibookCtrl.deleteEquipement);

router.post('/rooms',ibookCtrl.createRooms);
router.get('/rooms',ibookCtrl.getRooms);
router.put('/rooms/:id',ibookCtrl.putRooms);
router.delete('/rooms/:id',ibookCtrl.deleteRooms);

router.post('/reserv',ibookCtrl.createReserv);
router.get('/reserv',ibookCtrl.getReserv);
router.put('/reserv/:id',ibookCtrl.putReserv);
router.delete('/reserv/:id',ibookCtrl.deleteReserv);

router.post('/vehicule',ibookCtrl.createVehicule);
router.get('/vehicule',ibookCtrl.getVehicule);
router.put('/vehicule/:id',ibookCtrl.putVehicule);
router.delete('/vehicule/:id',ibookCtrl.deleteVehicule);



module.exports = router;