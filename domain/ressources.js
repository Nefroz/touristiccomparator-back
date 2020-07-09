const random = require("./random");
const Utils = require("../core/Utils");

class Ressources {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.name = random.get("ressources")
        return this 
    }
}

module.exports = Ressources