
const random = require("./random");
const Utils = require("../core/Utils");

class Type {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random(i) {
        this.name = random.get("typename", null, null, i)
        return this
    }
}

module.exports = Type