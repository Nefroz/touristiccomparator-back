const random = require("./random");
const Utils = require("../core/Utils");

class Detail {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.ressourceId = Utils.getRandomInt(1,7)
        this.customerId = Utils.getRandomInt(1,10)
        return this 
    }
}

module.exports = Detail