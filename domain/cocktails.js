const random = require("./random");
const Utils = require("../core/Utils");

class Cocktails {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.name = random.get("cocktails")
        return this 
    }
}

module.exports = Cocktails