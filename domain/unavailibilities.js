const random = require("./random");
const Utils = require("../core/Utils");

class Unavailibility {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.name = random.get("unavailibilities")
        this.ressourceId = Utils.getRandomInt(1,50)
        return this 
    }
}

module.exports = Unavailibility