const random = require("./random");
const Utils = require("../core/Utils");
const moment = require('moment');

class Ressource {

    constructor(data) {
        Object.assign(this, data)
        return this 
    }

    random() {
        this.firstname = random.get("firstnames")
        this.lastname = random.get("lastnames")
        this.birthday = moment(random.get("birthdays")).format('DD-MM-YYYY')
        this.email = random.get("emails")
        this.tel = Utils.getRandomInt(470000000,499999999)
        this.tel = "0"+this.tel;
        this.addressId = Utils.getRandomInt(1,10)
        return this 
    }
}

module.exports = Ressource