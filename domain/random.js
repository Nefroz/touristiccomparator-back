
const moment = require("moment")
const logger = require('tracer').console({});

function intervalRandom(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function hourRandom(min, max) {
	const duration = max.diff(min, "minutes")
	const randmin = intervalRandom(0, duration)
	const ret = min.clone().add(randmin, "minutes")
	return ret
}

function dateRandom(min, max) {
	const durationDays = max.diff(min, "days")
	const rand = intervalRandom(0, durationDays)
	const randmin = intervalRandom(0, 59)
	const randhour = intervalRandom(0, 23)
	return min.clone().add(randmin, "minutes").add(rand, "days").add(randhour, "hours")
}

const ressources = [
    "Salle des fêtes",
    "Samsung S10+",
    "Casque Bose",
    "Tasse",
    "Pizza 4 fromages",
    "Audi A5",
    "Porsche carrera 450ch",
    "Moniteur Philips 19``",
    "Fujitsu Ordinateur",
    "PC portable LG",
]

const firstnames = [
	"Dylan", 
	"Aubry", 
	"Rafi", 
	"Ced", 
	"Dominique", 
	"Véronique", 
	"Sarah", 
	"Khmaies", 
	"Xav", 
	"Denis", 
	"Mario", 
	"Naëlle", 
	"Amandine", 
	"Jessica", 
	"Hélène",
	"ADÉLAÏDE",
	"ADÈLE",
	"AGATHE",
	"ALBANE",
	"ALEXANDRA",
	"ALEXIA",
	"ALICE",
	"ALICIA",
	"ALIÉNOR",
	"ALIX",
	"ALIZÉE",
	"AMALIA",
	"AMANDINE",
	"ANAÉ",
	"ANNE",
	"ARIANE",
	"ARMELLE",
	"ASTRID",
	"AUDE",
	"AUDREY",
	"AURÉLIE",
	"AURORE",
	"BÉATRICE",
	"BÉRÉNICE",
	"BLANCHE",
	"BRUNE",
	"CAPUCINE",
	"CAROLE",
	"CAROLINE",
	"CASSANDRA",
	"CASSANDRE",
	"CASTILLE",
	"CATHERINE",
	"CHARLIE",
	"CHARLINE",
	"CHARLOTTE",
	"CLAIRE",
	"CLÉMENCE",
	"CLOTHILDE",
	"COLETTE",
	"COLINE",
	"CONSTANCE",
	"DÉBORAH",
	"DIDIER",
	"ÉLISA",
	"ÉLISABETH",
	"ÉLODIE",
	"ÉMELINE",
	"ÉMILIE",
	"ESTELLE",
	"EUGÉNIE",
	"EVE",
	"EVELYNE",
	"FANNY",
	"FAUSTINE",
	"FLEUR",
	"FLORA",
	"FLORENCE",
	"FRANÇOISE",
	"GWÉNAËLLE",
	"HORTENSE",
	"ILONA",
	"ISABELLE",
	"ISAURE",
	"JEANNE",
	"JENNIFER",
	"JESSICA",
	"JOANNA",
	"JOHANNA",
	"JOSÉPHINE",
	"JUDITH",
	"JULIE",
	"JUSTINE",
	"KARINE",
	"LAETITIA",
	"LAURA",
	"LAURENCE",
	"LÉA",
	"LÉANE",
	"LILI",
	"LINE",
	"LISA",
	"LOUISE",
	"LUNA",
	"MADELEINE",
	"MAGALI",
	"MAHÉ",
	"MARGOT",
	"MARIANNE",
	"MARIE",
	"MARINE",
	"MARTINE",
	"MATHILDE",
	"MÉLINA",
	"NATHALIE",
	"NICOLE",
	"NOÉMIE",
	"OCÉANE",
	"PATRICIA",
	"PAULINE",
	"QUITTERIE",
	"SALOMÉ",
	"SIXTINE",
	"SOLINE",
	"SOPHIA",
	"SOPHIE",
	"SUZANNE",
	"THÉRÈSE",
	"TIPHAINE",
	"VALERIE",
	"VICTOIRE",
	"VICTORIA",
	"VIRGINIE",
	"ZÉLIE",
	"ZOÉ",
]
const lastnames = [
	"Su", "Frère", "Du Château du dequème d'acost", "Alost", "Michel", "AlbertVille", "Hajji", "Dinvrouille", "Mancette", "Denomeranguay"
]

module.exports = {
	intervalRandom : intervalRandom,
	get : (type, min=null, max=null) => {
		let id = 0
		switch(type) {
			case "firstname" : 
				id = intervalRandom(0, firstnames.length-1)
				return firstnames[id]
			case "lastname" : 
				id = intervalRandom(0, lastnames.length-1)
                return lastnames[id]
            case "ressource" : 
				id = intervalRandom(0, ressources.length-1)
				return ressources[id]
			case "hour" : 
				return hourRandom( moment(min, "HH:mm"), moment(max, "HH:mm") )
			case "date" : 
				return dateRandom( moment(min, "DD/MM/YYYY"), moment(max, "DD/MM/YYYY") )
			default : 
				return intervalRandom(min, max)
		}
	}
}