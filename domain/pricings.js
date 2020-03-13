const random = require("./random");
const Utils = require("../core/Utils");

class Pricing {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random(i) {
        this.name = random.get("pricings", null, null, i)
        return this 
    }
}

module.exports = Pricing