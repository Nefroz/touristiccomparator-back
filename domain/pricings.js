const random = require("./random");
const Utils = require("../core/Utils");

class Pricing {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.name = random.get("pricings")
        return this 
    }
}

module.exports = Pricing