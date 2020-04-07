const random = require("./random");
const Utils = require("../core/Utils");

class Reservation {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random(i) {
        this.object = random.get("objects", null, null, i)
        this.activity = random.get("activity")
        this.customerId = Utils.getRandomInt(1,10);
        this.pricingId = Utils.getRandomInt(1,5);
        this.paymentmode = Utils.getRandomInt(0,1);
        this.valid = "0"
        return this 
    }
}

module.exports = Reservation