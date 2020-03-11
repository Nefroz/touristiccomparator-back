const random = require("./random");
const Utils = require("../core/Utils");

class Reservation {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.object = random.get("objects")
        this.activity = random.get("activity")
        return this 
    }
}

module.exports = Reservation