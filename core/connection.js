const Sequelize = require("sequelize");
const sequelizeLogger = require("./sequelizeLogger")

const database = process.env.MYSQL_DATABASE
const mysql_user = process.env.MYSQL_USER
const mysql_password = process.env.MYSQL_PASSWORD

var configuration = {
	host: "localhost",
	port: 3306,
	dialect: 'mysql',
	pool: {
		max: 50,
		min: 0,
		idle: 100,
	},
	query : {
	}
}

let sequelize = new Sequelize(database, mysql_user, mysql_password, Object.assign(configuration, {
	logging : (text) => {
		console.log(sequelizeLogger(text))
	}
}));

// if(node_env === "production") {
// 	configuration.logging = false
// }

module.exports = sequelize;
global.sequelize = sequelize;
