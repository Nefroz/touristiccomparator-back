
const random = require("./random");
const Utils = require("../core/Utils");

class Ressource {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.name = random.get("ressource")
        this.pricingd = Utils.getRandomFloat(0,1500)
        this.pricingh = Utils.getRandomFloat(0,1500)
        this.gage = Utils.getRandomFloat(0,100)
        return this 
    }

}

module.exports = Ressource