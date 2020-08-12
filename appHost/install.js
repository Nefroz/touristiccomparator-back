
const logger = require('tracer').console({});
const async = require("async");
const moment = require("moment");
const Ressource = require("../domain/ressources");
const User = require("../domain/users");
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
                        const ressources = []
                        for(var i=0; i<50; i++) {
                            const res = new Ressources().random(i)
                            ressources.push(res)
                        }
                        req.db.Ressources.bulkCreate(ressources, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {
                        const cocktails = []
                        for(var i=0; i<50; i++) {
                            const res = new Cocktails().random()
                            cocktails.push(res)
                        }
                        req.db.Cocktails.bulkCreate(cocktails, {req : req}).then( () => {
                            c(null)
                        })
                    },
                    c => {
                        const users = []
                        for(var i=0; i<50; i++) {
                            const res = new Ressource().random()
                            users.push(res)
                        }
                        req.db.Users.bulkCreate(users, {req : req}).then( () => {
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