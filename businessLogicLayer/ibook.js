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
const Vehicule = require("../data/Vehicule");
const db = require("../data/index");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sequelize = require("sequelize");

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
    description: req.body.description,
    tarifj: req.body.tarifj,
    tarifh: req.body.tarifh,
    caution: req.body.caution,
    stock: req.body.stock,
    validationinterne: req.body.validationinterne,
    validationexterne: req.body.validationexterne,
    responsable: req.body.responsable,
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

exports.putEquipement = (req,res,next) =>{
  const indice=req.params.id;
  db.Equipement.update(
  { name: req.body.name,
    description: req.body.description,
    tarifj: req.body.tarifj,
    tarifh: req.body.tarifh,
    caution: req.body.caution,
    stock: req.body.stock,
    validationinterne: req.validationinterne,
    validationexterne: req.validationexterne,
    responsable: req.responsable,
  },
  { where: { id: indice } }
  )
  .then(() => res.status(200).json({ message: 'Equipement modifié !' }))
  .catch(error => res.status(204).json({ error }))
};

exports.deleteEquipement = (req,res,next) => {
  const indice=req.params.id;
  db.Equipement.destroy({
  where: { id:indice }
})
  .then(() => res.status(200).json({ message: 'Equipement supprimé !' }))
  .catch(error => res.status(500).json({ error }));
}

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
    projecteur: req.body.projecteur,
    validationinterne: req.body.validationinterne,
    validationexterne: req.body.validationexterne,
    caution: req.body.caution,
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

exports.putRooms = (req,res,next) =>{
  const indice=req.params.id;
  db.Rooms.update(
  { name: req.body.name,
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
    projecteur: req.body.projecteur,
    validationinterne: req.body.validationinterne,
    validationexterne: req.body.validationexterne,
    caution: req.body.caution,
  },
  { where: { id: indice } }
  )
  .then(() => res.status(200).json({ message: 'Salle modifiée !' }))
  .catch(error => res.status(204).json({ error }))
};

exports.deleteRooms = (req,res,next) => {
  const indice=req.params.id;
  db.Rooms.destroy({
  where: { id:indice }
})
  .then(() => res.status(200).json({ message: 'Salle supprimée !' }))
  .catch(error => res.status(500).json({ error }));
}

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

exports.putReserv = (req,res,next) =>{
  const indice=req.params.id;
  db.Reserv.update(
  { debut: req.body.debut,
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
  },
  { where: { id: indice } }
  )
  .then(() => res.status(200).json({ message: 'Reservation modifiée !' }))
  .catch(error => res.status(204).json({ error }))
};

exports.deleteReserv = (req,res,next) => {
  const indice=req.params.id;
  db.Reserv.destroy({
  where: { id:indice }
})
  .then(() => res.status(200).json({ message: 'Reservation supprimée !' }))
  .catch(error => res.status(500).json({ error }));
}

exports.createVehicule = (req,res,next) => {
  db.Vehicule.create({
    marque: req.body.marque,
    modele: req.body.modele,
    immatriculation: req.body.immatriculation,
    capacite: req.body.capacite,
    typecarburant: req.body.typecarburant,
    responsablevalidation: req.body.responsablevalidation,
    validationinterne: req.body.validationinterne,
    validationexterne: req.body.validationexterne,
  })
  .then(() => res.status(201).json({ message: 'Vehicule créé !' }))
  .catch(error => res.status(400).json({ error }));
}

exports.getVehicule = (req,res,next) => {
  db.Vehicule.findAll().then(reserv => {
      console.log("Tout les véhicules:", JSON.stringify(reserv, null, 4));
      res.status(200).json(reserv);
  }).catch(error => res.status(400).json({ error }));
};

exports.putVehicule = (req,res,next) =>{
  const indice=req.params.id;
  db.Vehicule.update(
  { marque: req.body.marque,
    modele: req.body.modele,
    immatriculation: req.body.immatriculation,
    capacite: req.body.capacite,
    typecarburant: req.body.typecarburant,
    responsablevalidation: req.body.responsablevalidation,
    validationinterne: req.body.validationinterne,
    validationexterne: req.body.validationexterne,
  },
  { where: { id: indice } }
  )
  .then(() => res.status(200).json({ message: 'Véhicule modifié !' }))
  .catch(error => res.status(204).json({ error }))
};

exports.deleteVehicule = (req,res,next) => {
  const indice=req.params.id;
  db.Vehicule.destroy({
  where: { id:indice }
})
  .then(() => res.status(200).json({ message: 'Véhicule supprimé !' }))
  .catch(error => res.status(500).json({ error }));
}

exports.createTarification = (req,res,next) => {
  db.Tarification.create({
  })
  .then(() => res.status(201).json({ message: 'Tarification créée !' }))
  .catch(error => res.status(400).json({ error }));
}

exports.getTarification = (req,res,next) => {
  db.Tarification.findAll().then(reserv => {
      console.log("Toutes les tarifications:", JSON.stringify(reserv, null, 4));
      res.status(200).json(reserv);
  }).catch(error => res.status(400).json({ error }));
};

exports.putTarification = (req,res,next) =>{
  const indice=req.params.id;
  db.Tarification.update({ 
  },
  { where: { id: indice } }
  )
  .then(() => res.status(200).json({ message: 'Tarification modifiée !' }))
  .catch(error => res.status(204).json({ error }))
};

exports.deleteTarification = (req,res,next) => {
  const indice=req.params.id;
  db.Tarification.destroy({
  where: { id:indice }
})
  .then(() => res.status(200).json({ message: 'Tarification supprimée !' }))
  .catch(error => res.status(500).json({ error }));
}