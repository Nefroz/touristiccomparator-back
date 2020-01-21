/*const Thing = require('../models/thing');*/
const path = require("path");
const fs = require("fs-extra");
const multiparty = require("multiparty");
const util = require("util");
const libre = require("libreoffice-convert");
const async = require("async");
const {exec} = require("child_process");
const logger = require("tracer").console();
const guid = require("uuid/v1");
const User = require("../data/User");
const Equipement = require("../data/Equipement");
const Reserv = require("../data/Reserv");
const Rooms = require("../data/Rooms");
const db = require("../data/index");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUser = (req,res,next) => {

	User.findAll().then(users => {
  		console.log("All users:", JSON.stringify(users, null, 4));
  		res.status(200).json(users);
	}).catch(error => res.status(400).json({ error }));
};

exports.postUser = (req,res,next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req,res,next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'InforiusIbookInforius0101',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.createEquipement = (req,res,next) => {
  db.Equipement.create({
    name: req.body.name,
    desc: req.body.desc,
    tarifj: req.body.tarifj,
    tarifh: req.body.tarifh,
    caution: req.body.caution,
    stock: req.body.stock,
  })
  .then(() => res.status(201).json({ message: 'Equipement créé !' }))
  .catch(error => res.status(400).json({ error }));
}

exports.getEquipement = (req, res,next) => {
  db.Equipement.findAll().then(equipement => {
      console.log("Tout les equipements:", JSON.stringify(equipement, null, 4));
      res.status(200).json(equipement);
  }).catch(error => res.status(400).json({ error }));
};

exports.createRooms = (req,res,next) => {
  db.Rooms.create({
    name: req.body.name,
    adresserue: req.body.adresserue,
    adressenumero: req.body.adressenumero,
    adresselocalite: req.body.adresselocalite,
    adressecodepostal: req.body.adressecodepostal,
    description: req.body.description,
    couleur: req.body.couleur,
    couleurargb: req.body.couleurargb,
    type: req.body.type,
    tarifj: req.body.tarifj,
    tarifh: req.body.tarifh,
    capacite: req.body.capacite,
    etage: req.body.etage,
    namesalle: req.body.namesalle,
    idcontact: req.body.idcontact,
  })
  .then(() => res.status(201).json({ message: 'Salle créée !' }))
  .catch(error => res.status(400).json({ error }));
}

exports.getRooms = (req,res,next) => {
  db.Rooms.findAll().then(rooms => {
      console.log("Toutes les salles:", JSON.stringify(rooms, null, 4));
      res.status(200).json(rooms);
  }).catch(error => res.status(400).json({ error }));
};

exports.createReserv = (req,res,next) => {
  db.Reserv.create({
    debut: req.body.debut,
    fin: req.body.fin,
    objet: req.body.objet,
    reservateur: req.body.reservateur,
    tarification: req.body.tarification,
    equipement: req.body.equipement,
    salle: req.body.salle,
    activite: req.body.activite,
    journeeentiere: req.body.journeeentiere,
    idorganisateur: req.body.idorganisateur,
    commentaire: req.body.commentaire,
    validee: req.body.validee,
  })
  .then(() => res.status(201).json({ message: 'Réservation créée !' }))
  .catch(error => res.status(400).json({ error }));
}

exports.getReserv = (req,res,next) => {
  db.Reserv.findAll().then(reserv => {
      console.log("Toutes les réservations:", JSON.stringify(reserv, null, 4));
      res.status(200).json(reserv);
  }).catch(error => res.status(400).json({ error }));
};