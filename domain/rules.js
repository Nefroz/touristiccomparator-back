const random = require("./random");
const Utils = require("../core/Utils");

class Rule {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.category = Utils.getRandomInt(1,9)
        this.value = Utils.getRandomInt(0,100)
        this.pricingId = Utils.getRandomInt(1,5)
        return this 
    }
}

module.exports = Rule