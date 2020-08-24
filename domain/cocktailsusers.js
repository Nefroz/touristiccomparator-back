const random = require("./random");
const Utils = require("../core/Utils");

class CocktailsUsers {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.userId = Utils.getRandomInt(0,49)
        this.cocktailId = Utils.getRandomInt(0,49)
        this.fnc = Utils.getRandomInt(0,2)
        this.points = Utils.getRandomInt(0,5)
        return this 
    }
}

module.exports = CocktailsUsers