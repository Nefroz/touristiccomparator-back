const random = require("./random");
const Utils = require("../core/Utils");

class RessourcesCocktails {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.ressourceId = Utils.getRandomInt(0,49)
        this.cocktailId = Utils.getRandomInt(0,49)
        this.isVariation = Utils.getRandomInt(0,1)
        this.isFacultative = Utils.getRandomInt(0,1)
        this.quantity = Utils.getRandomInt(0,100)
        this.typeofquantity = random.get("typeofquantity")
        this.toFactorize = Utils.getRandomInt(0,1)
        this.isValidated = Utils.getRandomInt(0,1)
        return this 
    }
}

module.exports = RessourcesCocktails