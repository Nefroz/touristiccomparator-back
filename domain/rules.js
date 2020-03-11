const random = require("./random");
const Utils = require("../core/Utils");

class Rule {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.name = random.get("rules")
        this.percd =  Utils.getRandomFloat(0,150)
        this.perch = Utils.getRandomFloat(0,150)
        this.percg = Utils.getRandomFloat(0,150)
        this.reducd = Utils.getRandomFloat(0,100)
        this.reduch = Utils.getRandomFloat(0,100)
        this.reducg = Utils.getRandomFloat(0,100)
        this.fixedd = Utils.getRandomInt(0,1000);
        this.fixedh = Utils.getRandomInt(0,1000);
        this.fixedg = Utils.getRandomInt(0,1000);
        this.pricingId = Utils.getRandomInt(1,5);
        return this 
    }
}

module.exports = Rule