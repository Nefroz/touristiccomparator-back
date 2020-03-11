const random = require("./random");
const Utils = require("../core/Utils");

class Addresse {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.streetname = random.get("streetname")
        this.postalcode = Utils.getRandomInt(1000,9000)
        this.streetnumber = Utils.getRandomInt(1,100)
        this.locality = random.get("city")
        this.country = random.get("country")
        return this 
    }
}

module.exports = Addresse