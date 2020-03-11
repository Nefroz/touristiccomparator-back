
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

const rules = [
	"rule01",
	"rule02",
	"rule03",
	"rule04",
	"rule05",
	"rule06",
	"rule07",
	"rule08",
	"rule09",
	"rule10",
	"rule11",
	"rule12",
	"rule13",
	"rule14",
	"rule15",
]

const pricings = [
	"standard",
	"asbl",
	"entreprise",
	"promo",
	"coronavirus",
]

const streetname = [
	"rue de la pizza",
	"rue de la raclette",
	"rue du barbecue",
	"rue de la frite",
	"rue du kebab",
	"rue de la choucroute",
	"rue de la tartiflette",
	"rue du mac'n'cheese",
	"rue de la lasagne",
	"rue du wok",
]

const city = [
	"Namur",
	"Liège",
	"Charleroi",
	"Mons",
	"Arlon",
	"Luxembourg",
	"Bruxelles",
	"Paris",
	"Berlin",
	"Vienne",
]

const country = [
	"Belgique",
	"Pays-Bas",
	"France",
	"Italie",
	"Allemagne",
	"Japon",
	"USA",
	"Australie",
	"Canada",
	"Venezuela",
]

const birthdays = [
	"01-01-2001",
	"02-02-2002",
	"03-03-2003",
	"04-04-2004",
	"05-05-2005",
	"06-06-2006",
	"07-07-2007",
	"08-08-2008",
	"09-09-2009",
	"10-10-2010",
]

const emails = [
	"testylol@gmail.com",
	"testywow@gmail.com",
	"testyboum@gmail.com",
	"testyratata@gmail.com",
	"teamsalameche@gmail.com",
	"cafaitbeaucoupdemails@gmail.com",
	"jaiplusdidees@gmail.com",
	"ilfautencoretroisemails@gmail.com",
	"questcequejepeuxmettre@gmail.com",
	"enfinfini@gmail.com",
]

const objects = [
	"Reunion hebdomadaire des joueurs de pokemon Go",
	"Meeting des antivax pro coronavirus",
	"Rassemblement des jeunes pour la libération de Rafi d'Inforius",
	"Tournoi de roulette russe",
	"Meeting pour que Ced nous ramene enfin des pates le midi",
	"Meeting interne avec Ceddom pour savoir ou ce que c'est qu'on va bien manger ce vendredi",
	"Sommet du G12 pour envoyer des gifs sur slack",
	"Récréation intergalactique",
	"Tryhard sur League Of Legends pour enfin devenir bon",
	"Test de warcraft 3",
]

const activity = [
	"Reunion",
	"Meeting sportif",
	"Meeting politique",
	"Meeting sandwich",
	"Afterwork Pizzeria",
	"Afterwork Bowling",
	"Afterwork Lasergame",
	"Afterwork Drift, Tuning & Jupiler",
	"Afterwork Saucisse Bacon & Patates chaudes",
	"Afterwork voyage en Polynésie"
]

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

const types = [
	"Salle",
	"Voiture",
	"Outillage",
	"Machine",
	"Consommable",
	"Hifi",
	"Mobiliers"
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
	get : (type, min=null, max=null, index = null) => {
		let id = 0
		switch(type) {
			case "firstnames" : 
				id = intervalRandom(0, firstnames.length-1)
				return firstnames[id]
			case "lastnames" : 
				id = intervalRandom(0, lastnames.length-1)
                return lastnames[id]
            case "ressource" : 
				id = intervalRandom(0, ressources.length-1)
				return ressources[id]
			case "typename" : 
				return types[index]
			case "rules" :
				id = intervalRandom(0, rules.length-1)
				return rules[id]
			case "pricings" :
				id = intervalRandom(0, pricings.length-1)
				return pricings[id]
			case "streetname" :
				id = intervalRandom(0, streetname.length-1)
				return streetname[id]
			case "city" :
				id = intervalRandom(0, city.length-1)
				return city[id]
			case "country" :
				id = intervalRandom(0, country.length-1)
				return country[id]
			case "emails" :
				id = intervalRandom(0, emails.length-1)
				return emails[id]
			case "birthdays" :
				id = intervalRandom(0, birthdays.length-1)
				return birthdays[id]
			case "objects" :
				id = intervalRandom(0, objects.length-1)
				return objects[id]
			case "activity" :
				id = intervalRandom(0, activity.length-1)
				return activity[id]	
			case "hour" : 
				return hourRandom( moment(min, "HH:mm"), moment(max, "HH:mm") )
			case "date" : 
				return dateRandom( moment(min, "DD/MM/YYYY"), moment(max, "DD/MM/YYYY") )
			default : 
				return intervalRandom(min, max)
		}
	}
}