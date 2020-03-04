const path = require("path");
const fs = require("fs-extra");
const multiparty = require("multiparty");
const util = require("util");
const async = require("async");
const {exec} = require("child_process");
const logger = require("tracer").console();
const guid = require("uuid/v1");
const db = require("../data/index");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sequelize = require("sequelize");
const moment = require("moment")

exports.seed = (req, res, next) => { 
  async.waterfall([
    c => {
      db.Users.bulkCreate([
        {firstname : "Leader",lastname : "Supreme",birthday : moment("01/01/1990", "DD*/MM/YYYY").toDate(),email : "leadersupreme69@gmail.com",tel : "0123456789",rights : "2"},
        {firstname : "Laurent",lastname : "Testywow",birthday : moment("10/10/1980", "DD*/MM/YYYY").toDate(),email : "testywow@yahoo.fr",tel : "0123456789",rights : "1"},
        {firstname : "Louis",lastname : "Testyboum",birthday : moment("01/04/1970", "DD*/MM/YYYY").toDate(),email : "testyboum@outlook.com",tel : "0123456789",rights : "0"},
        {firstname : "Pierre",lastname : "Testybam",birthday : moment("12/06/1960", "DD*/MM/YYYY").toDate(),email : "testybam@gmail.fr",tel : "0123456789",rights : "0"}])
        .then(() => {
         c(null) 
       })
        .catch(error => {
          res.status(400).json({ error })
        } );
    },
    c => {
      db.Addresses.bulkCreate([
        {streetname : "rue de la lasagne",postalcode : "1234",streetnumber : "1",locality : "Bruxelles",country : "Belgique",UserId:"1"},
        {streetname : "rue de la pizza",postalcode : "5678",streetnumber : "10",locality : "Namur",country : "Belgique",UserId:"2"},
        {streetname : "rue de la frite",postalcode : "0000",streetnumber : "100",locality : "Liège",country : "Belgique",UserId:"3"},
        {streetname : "rue de la fricadelle",postalcode : "5000",streetnumber : "1000",locality : "Charleroi",country : "Maroc",UserId:"4"}])
        .then(() => {
         c(null) 
       })
        .catch(error => {
          res.status(400).json({ error })
        } );
    },
    c => {
      db.Rooms.bulkCreate([
        {name : "Salle du big mac",color : "blue",pricingd : "1000",pricingh : "300",capacity : "300",projector : "1",validintern : "0",validextern : "1",contactId:"1"},
        {name : "Salle des pates carbonara",color : "black",pricingd : "500",pricingh : "150",capacity : "200",projector : "1",validintern : "0",validextern : "1",contactId:"1"},
        {name : "Salle du tacos",color : "red",pricingd : "300",pricingh : "100",capacity : "120",projector : "0",validintern : "0",validextern : "1",contactId:"1"},
        {name : "Salle du pain perdu",color : "white",pricingd : "200",pricingh : "80",capacity : "80",projector : "0",validintern : "0",validextern : "0",contactId:"1"},])
        .then(() => {
         c(null) 
       })
        .catch(error => {
          res.status(400).json({ error })
        } );
    },
    c => {
      db.Addresses.bulkCreate([
        {streetname : "rue de la quatre fromages",postalcode : "1234",streetnumber : "1",locality : "Bruxelles",country : "Belgique",RoomId:"1"},
        {streetname : "rue de la margherita",postalcode : "5678",streetnumber : "10",locality : "Namur",country : "Belgique",RoomId:"2"},
        {streetname : "rue de la tartiflette",postalcode : "0000",streetnumber : "100",locality : "Liège",country : "Belgique",RoomId:"3"},
        {streetname : "rue de la kebab",postalcode : "5000",streetnumber : "1000",locality : "Charleroi",country : "Maroc",RoomId:"4"}])
        .then(() => {
         c(null) 
       })
        .catch(error => {
          res.status(400).json({ error })
        } );
    },
    c => {
      db.Gages.bulkCreate([
        {name : "Salle du big mac",amount : "1000",RoomId:"1"},
        {name : "Salle des pates carbonara",amount : "500",RoomId:"2"},
        {name : "Salle du tacos",amount : "300",RoomId:"3"},
        {name : "Salle du pain perdu",amount : "200",RoomId:"4"}])
        .then(() => {
         c(null) 
       })
        .catch(error => {
          res.status(400).json({ error })
        } );
    },
    c => {
      db.Descriptions.bulkCreate([
        {name : "Salle du big mac",value : "Très cool man",RoomId:"1"},
        {name : "Salle des pates carbonara",value : "Pas trop mal mec",RoomId:"2"},
        {name : "Salle du tacos",value : "Ca va la mifa",RoomId:"3"},
        {name : "Salle du pain perdu",value : "Pas ouf",RoomId:"4"}])
        .then(() => {
         c(null) 
       })
        .catch(error => {
          res.status(400).json({ error })
        } );
    },
    c=>{
      db.Equipments.bulkCreate([
        {name : "Le big mac",pricingd : "300",pricingh : "100",stock : "10",validintern : "0",validextern : "1",RoomId:"1",UserId:"1"},
        {name : "Les pates carbonara",pricingd : "200",pricingh : "70",stock : "20",validintern : "0",validextern : "1",RoomId:"2",UserId:"2"},
        {name : "Le tacos",pricingd : "100",pricingh : "35",stock : "25",validintern : "0",validextern : "0",UserId:"2"},
        {name : "Le pain perdu",pricingd : "50",pricingh : "15",stock : "50",validintern : "0",validextern : "0",UserId:"2"}])
        .then(() => {
         c(null) 
       })
        .catch(error => {
          res.status(400).json({ error })
        } );
    },
    c => {
      db.Gages.bulkCreate([
        {name : "Le big mac",amount : "1000",EquipmentId:"1"},
        {name : "Les pates carbonara",amount : "500",EquipmentId:"2"},
        {name : "Le tacos",amount : "300",EquipmentId:"3"},
        {name : "Le pain perdu",amount : "200",EquipmentId:"4"}])
        .then(() => {
         c(null) 
       })
        .catch(error => {
          res.status(400).json({ error })
        } );
    },
    c => {
      db.Descriptions.bulkCreate([
        {name : "Le big mac",value : "Très cool man",EquipmentId:"1"},
        {name : "Les pates carbonara",value : "Pas trop mal mec",EquipmentId:"2"},
        {name : "Le tacos",value : "Ca va la mifa",EquipmentId:"3"},
        {name : "Le pain perdu",value : "Pas ouf",EquipmentId:"4"}])
        .then(() => {
         c(null) 
       })
        .catch(error => {
          res.status(400).json({ error })
        } );
    },
    c =>{
      db.Unavailibilities.bulkCreate([
        {name : "Noel 2020",start : moment("24/12/2020", "DD*/MM/YYYY").toDate(),end : moment("25/12/2020", "DD*/MM/YYYY").toDate(),EquipmentId:"1",UserId:"1"},
        {name : "Noel 2020",start : moment("24/12/2020", "DD*/MM/YYYY").toDate(),end : moment("25/12/2020", "DD*/MM/YYYY").toDate(),RoomId:"1",UserId:"1"},
        {name : "Nouvel An 2020",start : moment("01/01/2020", "DD*/MM/YYYY").toDate(),end : moment("02/01/2020", "DD*/MM/YYYY").toDate(),EquipmentId:"1",UserId:"1"},
        {name : "Nouvel An 2020",start : moment("01/01/2020", "DD*/MM/YYYY").toDate(),end : moment("02/01/2020", "DD*/MM/YYYY").toDate(),RoomId:"1",UserId:"1"}])
        .then(() => {
         c(null) 
       })
        .catch(error => {
          res.status(400).json({ error })
        } );
    },
    c =>{
      db.Pricings.bulkCreate([
        {name : "standard",equipd:"100",equiph:"100",roomd:"100",roomh:"100",gage:"100"},
        {name : "promo50",equipd:"50",equiph:"50",roomd:"50",roomh:"50",gage:"100"},
        {name : "entreprise",equipd:"120",equiph:"120",roomd:"120",roomh:"120",gage:"120"},
        {name : "gratuit",equipd:"0",equiph:"0",roomd:"0",roomh:"0",gage:"100"}])
        .then(() => {
         c(null) 
       })
        .catch(error => {
          res.status(400).json({ error })
        } );
    },
    c => {
      db.Reserv.bulkCreate([
        { start : moment("10/01/2000", "DD*/MM/YYYY").toDate(),  end : moment("20/01/2000", "DD*/MM/YYYY").toDate(), object:"Marriage de la famille Dupont", pricingtype:"1", room:"1", activity:"Marriage", comment:"Cool", UserId:"2" },
        { start : moment("20/01/2010", "DD*/MM/YYYY").toDate(),  end : moment("30/01/2010", "DD*/MM/YYYY").toDate(), object:"Petite communion de Kevin", pricingtype:"1", room:"2", activity:"Communion", comment:"Salut", UserId:"3" },
        { start : moment("20/06/2015", "DD*/MM/YYYY").toDate(),  end : moment("25/06/2015", "DD*/MM/YYYY").toDate(), object:"Toujours pour Kevin", pricingtype:"0", room:"3", activity:"Barmitsva", comment:"Bim", UserId:"3" },
        { start : moment("15/01/2020", "DD*/MM/YYYY").toDate(),  end : moment("20/01/2020", "DD*/MM/YYYY").toDate(), object:"Encore pour Kevin", pricingtype:"0", room:"4", activity:"Anniversaire", comment:"Boum", UserId:"3" }
      ]).then( () => {
        c(null)
      }) .catch(error => {
          res.status(400).json({ error })
        } );
    },
    c => {
      db.Details.bulkCreate([
        { ReservId:"1",RoomId:"1", PricingId:"1", Equiplist:"" },
        { ReservId:"1", EquipmentId:"2", units:"2",RoomId:"1",PricingId:"1", Equiplist:"" },
        { ReservId:"1", EquipmentId:"1", units:"1",RoomId:"1",PricingId:"1", Equiplist:"" },
        { ReservId:"2", EquipmentId:"3", units:"1", PricingId:"1", Equiplist:"" },
        { ReservId:"2", RoomId:"3", PricingId:"1", Equiplist:"" },
      ]).then( () => {
        c(null)
      }) .catch(error => {
          res.status(400).json({ error })
        } );
    }
   ], () => {
     res.status(200).end()
   })
}