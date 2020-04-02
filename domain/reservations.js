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
        this.valid = "0"
        return this 
    }
}

module.exports = Reservation