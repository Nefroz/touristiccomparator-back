
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
	"Pilon",
	"Mortier",
	"Shaker",
	"Verre à pied",
	"Grand verre",
	"Rhum Blanc",
	"Rhum Brun",
	"Whisky",
	"Cuillere",
	"Creme fraiche",
	"Curacao",
	"Pisang",
	"Safari",
	"Passoa",
	"Eau Plate",
	"Eau Pétillante",
	"Sucre",
	"Feuilles de menthe",
	"Jus d'orange",
	"Jus de pomme",
	"Jus d'ananas",
	"Sirop de Grenadine",
	"Sirop de menthe",
	"Get27",
	"Get31",
	"Coca cola",
	"Sprite",
	"Ice Tea",
	"Martini Royal",
	"Vermouth",
	"Martini Rouge",
	"Martini Blanco",
	"Vodka",
	"Amaretto",
	"Glacons",
	"Jus de cranberry",
	"Blanc d'oeuf",
	"Jaune d'oeuf",
	"Jus de fraise",
	"Biere Pils"
]

const firstnames = [
	"DYLAN", 
	"AUBRY", 
	"RAFI", 
	"CED", 
	"DOMINIQUE", 
	"VERONIQUE", 
	"SARAH", 
	"KHMAIES", 
	"XAV", 
	"DENIS", 
	"MARIO", 
	"NAELLE", 
	"AMANDINE", 
	"JESSICA", 
	"HELENE",
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

const cocktails = [
	"Mojito",
	"Sex On The Beach",
	"Cuba Libre",
	"Long Island",
	"Jaggerbomber",
	"Spritz",
	"Gin Tonic",
	"Tequila Sunrise",
	"Pina Colada",
	"Whisky Sour",
	"Margarita",
	"Caipirinha",
	"Cosmopolitan",
	"Daiquiri",
	"Bloody Mary",
	"Vodka Cranberry",
	"Mimosa",
	"Mai Tai",
	"Sangria",
	"Manhattan",
	"Bellini",
	"Tom Collins",
	"Mojito Fraise",
	"White Russian",
	"Old Fashioned",
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
			case "cocktails" : 
				id = intervalRandom(0, cocktails.length-1)
				return cocktails[id]
            case "ressources" : 
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