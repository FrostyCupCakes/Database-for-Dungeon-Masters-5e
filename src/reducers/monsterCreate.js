const monsterCreateReducerDefaultState = {
	name: '',
	size: '',
	type:'',
	subtype: '',
	alignment: '',
	armor_class: 0,
	hit_points: 0,
	hit_dice: 0,
	speed: '',
	strength: 10,
	dexterity: 10,
	constitution: 10,
	intelligence: 10,
	wisdom: 10,
	charisma: 10,
	strength_save: 0,
	dexterity_save: 0,
	constitution_save: 0,
	intelligence_save: 0,
	wisdom_save: 0,
	charisma_save: 0,
	skills: {
		athletics: 0,
		acrobatics: 0,
		sleight_of_hand: 0,
		stealth: 0,
		arcana: 0,
		history: 0,
		investigation: 0,
		nature: 0,
		religion: 0,
		animal_handling: 0,
		insight: 0,
		medicine: 0,
		perception: 0,
		survival: 0,
		deception: 0,
		intimidation: 0,
		performance: 0,
		persuasion: 0
	},
	damage_vulnerabilities: {},
	damage_resistances: {},
	damage_immunities: {},
	condition_immunities: {},
	senses: {},
	languages: {},
	challenge_rating: 0,
	special_abilities: [],
	actions: [],
	legendary_actions: []
}

export default (state = monsterCreateReducerDefaultState, action) => {
	switch (action.type) {
		case "EDIT_MONSTER":
			return {...state, ...action.monster};
		default: 
			return state;
	}
} 
