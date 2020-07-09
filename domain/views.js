const random = require("./random");
const Utils = require("../core/Utils");
const moment = require('moment');

class Views {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.date = random.get("date")
        return this 
    }
}































module.exports = Users