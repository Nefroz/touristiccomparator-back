
const logger = require('tracer').console({});
const async = require("async");
const moment = require("moment");
const Ressource = require("../domain/ressource");
const Type = require("../domain/types");
const User = require("../domain/users");
const Customer = require("../domain/customers");
const Addresse = require("../domain/addresses");
const Pricing = require("../domain/pricings");
const Rule = require("../domain/rules");
const Unavailibility = require("../domain/unavailibilities");
const Reservation = require("../domain/reservations");
const Detail = require("../domain/details");
const Utils = require("../core/Utils");
const random = require("../domain/random");

module.exports = [
	{
        name: `install`,
        method: "get",
        route: `/:entity/install`,
        methods: [
        	(req, res, next) => {

        		async.waterfall([
				   c => {
                        const dbo = require("../core/buildDatabases")()
                        dbo.sync({force:true}).then( () => {
                            c(null)
                        })
                    },
                    c => {
                        req.db = require("../core/buildDatabases")(req.entity)
                        req.db.sync({force:true}).then( () => {
                            c(null)
                        })
                    },
                    c => {
                        const pricings = []
                        for(var i=0; i<5; i++) {
                            const res = new Pricing().random(i)
                            pricings.push(res)
                        }

                        req.db.Pricings.bulkCreate(pricings, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {
                        const rules = []
                        for(var i=0; i<15; i++) {
                            const res = new Rule().random(i)
                            rules.push(res)
                        }

                        req.db.Rules.bulkCreate(rules, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {
                        const addresses = []
                        for(var i=0; i<10; i++) {
                            const res = new Addresse().random()
                            addresses.push(res)
                        }

                        req.db.Addresses.bulkCreate(addresses, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {
                        const users = []
                        for(var i=0; i<10; i++) {
                            const res = new User().random()
                            users.push(res)
                        }

                        req.db.Users.bulkCreate(users, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {
                        const customers = []
                        for(var i=0; i<10; i++) {
                            const res = new Customer().random()
                            customers.push(res)
                        }

                        req.db.Customers.bulkCreate(customers, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {
                        const types = []
                        for (var i=0; i<7; i++) {

                            const res = new Type().random(i)
                            types.push(res)
                        }

                        req.db.Types.bulkCreate(types, {req:req}).then( () => {
                            c(null)
                        })
                    },
                    c => {
                        const ressources = []
                        for(var i=0; i<50; i++) {
                            const res = new Ressource().random()
                            ressources.push(res)
                        }

                        req.db.Ressources.bulkCreate(ressources, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {
                        const ressources = []
                        for(var i=0; i<50; i++) {
                            const res = new Ressource().random()
                            res.ressourceId = Utils.getRandomInt(1,50)
                            ressources.push(res)
                        }

                        req.db.Ressources.bulkCreate(ressources, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {

                        const ressources = []
                        for(var i=0; i<50; i++) {
                            const res = new Ressource().random()
                            res.ressourceId = Utils.getRandomInt(50,100)
                            ressources.push(res)
                        }

                        req.db.Ressources.bulkCreate(ressources, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {

                        const unavailibilities = []
                        for(var i=0; i<4; i++) {
                            let res = new Unavailibility().random()
                            switch(i) {
                                case 0 : 
                                    res.start = "01/01/2020"
                                    res.end = "10/01/2020"
                                    unavailibilities.push(res)
                                    break;
                                case 1 : 
                                    res.start = "01/02/2020"
                                    res.end = "10/02/2020"
                                    unavailibilities.push(res)
                                    break;
                                case 2 : 
                                    res.start = "01/03/2020"
                                    res.end = "10/03/2020"
                                    unavailibilities.push(res)
                                    break;
                                case 3 : 
                                    res.start = "01/04/2020"
                                    res.end = "10/04/2020"
                                    unavailibilities.push(res)
                                    break;
                                default : 
                                    break;
                            }
                        }

                        req.db.Unavailibilities.bulkCreate(unavailibilities, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {
                        const reservations = []
                        let i=0
                        while(i<10) {
                            let res = new Reservation().random()
                            switch(i) {
                                case 0 : 
                                    res.start = "01/01/2021"
                                    res.end = "10/01/2021"
                                    reservations.push(res)
                                    i++
                                    break
                                case 1 : 
                                    res.start = "01/02/2021"
                                    res.end = "10/02/2021"
                                    reservations.push(res)
                                    i++
                                    break
                                case 2 : 
                                    res.start = "01/03/2021"
                                    res.end = "10/03/2021"
                                    reservations.push(res)
                                    i++
                                    break
                                case 3 : 
                                    res.start = "01/04/2021"
                                    res.end = "10/04/2021"
                                    reservations.push(res)
                                    i++
                                    break
                                case 4 : 
                                    res.start = "01/05/2021"
                                    res.end = "10/05/2021"
                                    reservations.push(res)
                                    i++
                                    break
                                case 5 : 
                                    res.start = "01/06/2021"
                                    res.end = "10/06/2021"
                                    reservations.push(res)
                                    i++
                                    break
                                case 6 : 
                                    res.start = "01/07/2021"
                                    res.end = "10/07/2021"
                                    reservations.push(res)
                                    i++
                                    break
                                case 7 : 
                                    res.start = "01/08/2021"
                                    res.end = "10/08/2021"
                                    reservations.push(res)
                                    i++
                                    break
                                case 8 : 
                                    res.start = "01/09/2021"
                                    res.end = "10/09/2021"
                                    reservations.push(res)
                                    i++
                                    break
                                case 9 : 
                                    res.start = "01/10/2021"
                                    res.end = "10/10/2021"
                                    reservations.push(res)
                                    i++
                                    break
                                default : 
                                    i++
                                    break
                            }
                        }
                        req.db.Reservations.bulkCreate(reservations, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {
                        const details = []
                        for(var i=0; i<10; i++) {
                            let res = new Detail().random()
                            res.reservationId = i+1
                            details.push(res)
                        }

                        req.db.Details.bulkCreate(details, {req : req}).then( () => {
                            c(null)
                        })
                    }
				], () => {
					next()
				})

        	}
        ],
    },
]