export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
    doduotoro: {
        num: 84,
        name: "Doduo-Toro",
        types: ["Fighting, Electric"],
        baseStats: {hp: 35, atk: 90, def: 35, spa: 35, spd: 35, spe: 80},
		abilities: {0: "Run Away", 1: "Motor Drive", H: "Moxie"},
		heightm: 1.4,
		weightkg: 39.2,
		color: "Brown",
		evos: ["Dodrio-Toro"],
		eggGroups: ["Flying"],
    },
    dodriotoro: {
		num: 85,
		name: "Dodrio-Toro",
		types: ["Normal", "Flying"],
		baseStats: {hp: 60, atk: 115, def: 60, spa: 60, spd: 60, spe: 115},
		abilities: {0: "Run Away", 1: "Motor Drive", H: "Moxie"},
		heightm: 1.8,
		weightkg: 85.2,
		color: "Brown",
		prevo: "Doduo",
		evoLevel: 31,
		eggGroups: ["Flying"],
	},
    dratinitoro: {
		num: 147,
		name: "Dratini-Toro",
		types: ["Ice", "Dragon"],
		baseStats: {hp: 41, atk: 50, def: 50, spa: 50, spd: 50, spe: 50},
		abilities: {0: "Serene Grace", 1: "Cute Charm", H: "Marvel Scale"},
		heightm: 1.8,
		weightkg: 3.3,
		color: "Blue",
		evos: ["Dragonair-Toro"],
		eggGroups: ["Water 1", "Dragon"],
	},
    dragonairtoro: {
		num: 148,
		name: "Dragonair-Toro",
		types: ["Ice", "Dragon"],
		baseStats: {hp: 41, atk: 100, def: 100, spa: 134, spd: 95, spe: 80},
		abilities: {0: "Serene Grace", 1: "Cute Charm", H: "Marvel Scale"},
		heightm: 4,
		weightkg: 16.5,
		color: "Blue",
		prevo: "Dratini-Toro",
		evoLevel: 30,
		eggGroups: ["Water 1", "Dragon"],
	},
    ledybatoro: {
		num: 165,
		name: "Ledyba-Toro",
		types: ["Bug", "Dark"],
		baseStats: {hp: 50, atk: 40, def: 30, spa: 40, spd: 30, spe: 65},
		abilities: {0: "Download", 1: "Forewarn", H: "Defiant"},
		heightm: 1,
		weightkg: 10.8,
		color: "Red",
		evos: ["Ledian-Toro"],
		eggGroups: ["Bug"],
	},
    lediantoro: {
		num: 166,
		name: "Ledian",
		types: ["Bug", "dark"],
		baseStats: {hp: 70, atk: 90, def: 70, spa: 90, spd: 70, spe: 110},
		abilities: {0: "Download", 1: "Forewarn", H: "Defiant"},
		heightm: 1.4,
		weightkg: 35.6,
		color: "Red",
		prevo: "Ledyba-Toro",
		evoLevel: 18,
		eggGroups: ["Bug"],
	},
    relicanthtoro: {
		num: 369,
		name: "Relicanth-Toro",
		types: ["Water", "Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 45, def: 110, spa: 100, spd: 110, spe: 20},
		abilities: {0: "Storm Drain", 1: "Water Absorb", H: "Flash Fire"},
		heightm: 1,
		weightkg: 23.4,
		color: "Gray",
		eggGroups: ["Water 1", "Water 2"],
	},
    whismurtoro: {
		num: 293,
		name: "Whismur-Toro",
		types: ["Fairy"],
		baseStats: {hp: 74, atk: 51, def: 23, spa: 51, spd: 23, spe: 18},
		abilities: {0: "Soundproof", H: "Run Away"},
		heightm: 0.6,
		weightkg: 16.3,
		color: "Pink",
		evos: ["Loudred-Toro"],
		eggGroups: ["Monster", "Field"],
	},
	loudredtoro: {
		num: 294,
		name: "Loudred",
		types: ["Fairy", "Ground"],
		baseStats: {hp: 94, atk: 71, def: 43, spa: 71, spd: 53, spe: 28},
		abilities: {0: "Soundproof", H: "Pixilate"},
		heightm: 1,
		weightkg: 40.5,
		color: "Blue",
		prevo: "Whismur-Toro",
		evoLevel: 20,
		evos: ["Exploud-Toro"],
		eggGroups: ["Monster", "Field"],
	},
	exploudtoro: {
		num: 295,
		name: "Exploud",
		types: ["Fairy", "Ground"],
		baseStats: {hp: 114, atk: 91, def: 73, spa: 91, spd: 83, spe: 38},
		abilities: {0: "Soundproof", H: "Pixilate"},
		heightm: 1.5,
		weightkg: 84,
		color: "Blue",
		prevo: "Loudred-Toro",
		evoLevel: 40,
		eggGroups: ["Monster", "Field"],
	},
    skiddotoro: {
		num: 672,
		name: "Skiddo",
		types: ["Rock"],
		baseStats: {hp: 57, atk: 66, def: 62, spa: 48, spd: 52, spe: 65},
		abilities: {0: "Rock Head", H: "Sand Rush"},
        heightm: 0.9,
		weightkg: 40.1,
		color: "Brown",
		evos: ["Gogoat-Toro"],
		eggGroups: ["Field"],
	},
	gogoattoro: {
		num: 673,
		name: "Gogoat",
		types: ["Rock", "Fighting"],
		baseStats: {hp: 81, atk: 123, def: 97, spa: 62, spd: 68, spe: 100},
		abilities: {0: "Rock Head", H: "Sand Rush"},
		heightm: 1.7,
		weightkg: 100.2,
		color: "Brown",
		prevo: "Skiddo-Toro",
		evoLevel: 32,
		eggGroups: ["Field"],
	},
    gossifleurtoro: {
		num: 829,
		name: "Gossifleur-Toro",
		types: ["Grass", "Fire"],
		baseStats: {hp: 40, atk: 30, def: 10, spa: 60, spd: 60, spe: 50},
		abilities: {0: "Cotton Down", 1: "Flash Fire", H: "Chlorophyll"},
		heightm: 0.4,
		weightkg: 2.2,
		color: "Green",
		evos: ["Eldegoss-Toro"],
		eggGroups: ["Grass"],
	},
	eldegosstoro: {
		num: 830,
		name: "Eldegoss-Toro",
		types: ["Grass", "Fire"],
		baseStats: {hp: 60, atk: 40, def: 60, spa: 120, spd: 100, spe: 80},
		abilities: {0: "Cotton Down", 1: "Flash Fire", H: "Chlorophyll"},
		heightm: 0.5,
		weightkg: 2.5,
		color: "Green",
		prevo: "Gossifleur-Toro",
		evoLevel: 20,
		eggGroups: ["Grass"],
	},
    yanmatoro: {
		num: 193,
		name: "Yanma-Toro",
		types: ["Bug", "Dragon"],
		baseStats: {hp: 65, atk: 75, def: 45, spa: 65, spd: 45, spe: 95},
		abilities: {0: "Speed Boost", 1: "Compound Eyes", H: "Skill Link"},
		heightm: 1.2,
		weightkg: 38,
		color: "Red",
		evos: ["Yanmega-Toro"],
		eggGroups: ["Bug"],
	},
    yanmegatoro: {
		num: 469,
		name: "Yanmega-Toro",
		types: ["Bug", "Dragon"],
		baseStats: {hp: 86, atk: 116, def: 56, spa: 76, spd: 86, spe: 95},
		abilities: {0: "Speed Boost", 1: "Tinted Lens", H: "Skill Link"},
		heightm: 1.9,
		weightkg: 51.5,
		color: "Green",
		prevo: "Yanma-Toro",
		evoType: "levelMove",
		evoMove: "Ancient Power",
		eggGroups: ["Bug"],
	},
    gothitatoro: {
		num: 574,
		name: "Gothita-Toro",
		types: ["Psychic", "Ghost"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 50, atk: 85, def: 30, spa: 25, spd: 35, spe: 65},
		abilities: {0: "Shadow Tag", 1: "Insomnia", H: "Aftermath"},
		heightm: 0.4,
		weightkg: 5.8,
		color: "Purple",
		evos: ["Gothorita-Toro"],
		eggGroups: ["Human-Like"],
	},
	gothoritatoro: {
		num: 575,
		name: "Gothorita-Toro",
		types: ["Psychic", "Ghost"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 65, atk: 100, def: 50, spa: 45, spd: 55, spe: 75},
		abilities: {0: "Shadow Tag", 1: "Insomnia", H: "Aftermath"},
		heightm: 0.7,
		weightkg: 18,
		color: "Purple",
		prevo: "Gothita-Toro",
		evoLevel: 32,
		evos: ["Gothitelle-Toro"],
		eggGroups: ["Human-Like"],
	},
	gothitelletoro: {
		num: 576,
		name: "Gothitelle-Toro",
		types: ["Psychic", "Ghost"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 75, atk: 125, def: 75, spa: 45, spd: 65, spe: 105},
		abilities: {0: "Shadow Tag", 1: "Insomnia", H: "Aftermath"},
		heightm: 1.5,
		weightkg: 44,
		color: "Purple",
		prevo: "Gothorita-Toro",
		evoLevel: 41,
		eggGroups: ["Human-Like"],
	},
    morelulltoro: {
		num: 755,
		name: "Morelull-Toro",
		types: ["Ice", "Poison"],
		baseStats: {hp: 40, atk: 35, def: 55, spa: 65, spd: 75, spe: 15},
		abilities: {0: "Slush Rush", 1: "Effect Spore", H: "Simple"},
		heightm: 0.2,
		weightkg: 1.5,
		color: "Purple",
		evos: ["Shiinotic-Toro"],
		eggGroups: ["Grass"],
	},
	shiinotictoro: {
		num: 756,
		name: "Shiinotic-Toro",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 100, atk: 25, def: 80, spa: 110, spd: 60, spe: 30},
		abilities: {0: "Slush Rush", 1: "Effect Spore", H: "Simple"},
		heightm: 1,
		weightkg: 11.5,
		color: "Purple",
		prevo: "Morelull-Toro",
		evoLevel: 24,
		eggGroups: ["Grass"],
	},
}
