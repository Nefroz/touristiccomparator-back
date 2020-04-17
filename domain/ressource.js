const random = require("./random");
const Utils = require("../core/Utils");

class Ressource {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.perc = Utils.getRandomInt(0,100)
        if(this.perc>50) {this.pricingId = Utils.getRandomInt(1,5)}
        this.name = random.get("ressource")
        this.type = random.get("type")
        this.color = random.get("color")
        this.pricingd = Utils.getRandomFloat(0,1500)
        this.pricingh = Utils.getRandomFloat(0,500)
        this.gage = Utils.getRandomFloat(0,1000)
        this.capacity = Utils.getRandomInt(50,500)
        this.stock = Utils.getRandomInt(1,20)
        this.userId = Utils.getRandomInt(1,5)
        this.typeId = Utils.getRandomInt(1,7);
        this.addressId = Utils.getRandomInt(1,10);
        this.description = "Lorem Ipsum Dolor Sit Amet"
        return this 
    }
}

module.exports = Ressource