
const logger = require('tracer').console({});
const async = require("async")
const moment = require("moment")
const Ressource = require("../domain/ressource")
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
                        req.db.Types.bulkCreate([
                            {
                                name  : "Véhicules", 
                            }, 
                            {
                                name  : "Mobiliers", 
                            },
                            {
                                name  : "Salles", 
                            },
                            {
                                name  : "Immobiliers", 
                            },
                            {
                                name  : "Matériel", 
                            },
                            {
                                name  : "Hifi", 
                            },
                        ], {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {

                        const ressources = []
                        for(var i=0; i<50; i++) {
                            const res = new Ressource().random()
                            res.typeId = Utils.getRandomInt(1,6)
                            ressources.push( res )
                        }

                        req.db.Ressources.bulkCreate(ressources, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {

                        const ressources = []
                        for(var i=0; i<50; i++) {
                            const res = new Ressource().random()
                            res.typeId = Utils.getRandomInt(1,6)
                            res.ressourceId = Utils.getRandomInt(1,50)
                            ressources.push( res )
                        }

                        req.db.Ressources.bulkCreate(ressources, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {

                        const ressources = []
                        for(var i=0; i<50; i++) {
                            const res = new Ressource().random()
                            res.typeId = Utils.getRandomInt(1,6)
                            res.ressourceId = Utils.getRandomInt(50,100)
                            ressources.push( res )
                        }

                        req.db.Ressources.bulkCreate(ressources, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {

                        const temp = []
                        for(var i=0; i<50; i++) {
                            temp.push({
                                ressourceId : Utils.getRandomInt(1,100),
                                start : random.get("date", "01/01/2020", "31/12/2022"),
                                end : random.get("date", "01/01/2020", "31/12/2022"),
                            })
                        }

                        req.db.Unavailibilities.bulkCreate(temp, {req : req}).then( () => {
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