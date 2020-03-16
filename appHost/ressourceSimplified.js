
const logger = require('tracer').console({});
const async = require("async");
const moment = require("moment");
const Generic = require("../core/genericMethods");

// module.exports = [
// 	{
//         name: `ressourceSimplified`,
//         method: "get",
//         route: `/:entity/ressource/full`, //?scope=cketuve
//         methods: [
//             Auth.checkAdmin, 
//             Generic.get,
//         ],
//     },
// ]