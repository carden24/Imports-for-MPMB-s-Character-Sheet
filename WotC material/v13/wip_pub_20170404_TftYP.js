var iFileName = "pub_20170404_TftYP.js";
RequiredSheetVersion(12.999);
// This file adds the beasts from the Tales from the Yawning Portal adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.TftYP={
	name : "Tales from the Yawning Portal [beasts, items]",
	abbreviation : "TftYP",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/tales-yawning-portal",
	date : "2017/04/04"
};

// Creatures
CreatureList["giant crayfish"] = {
	name : "Giant Crayfish",
	source : ["TftYP", 235],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 15,
	hp : 45,
	hd : [7, 10], //[#, die]
	speed : "30 ft, swim 30 ft",
	scores : [15, 13, 13, 1, 9, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 3
	},
	senses : "Blindsight 30 ft",
	passivePerception : 9,
	languages : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Target grappled on hit (escape DC 12); 2 claw attacks as Attack action, if not grappling with claw"
		}
	],
	traits : [{
			name : "Amphibious",
			description : "The giant crayfish can breathe air and water."
		}
	]
};
CreatureList["giant ice toad"] = {
	name : "Giant Ice Toad",
	source : ["TftYP", 235],
	size : 2, //Large
	type : "Monstrosity",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 52,
	hd : [7, 10], //[#, die]
	speed : "30 ft",
	scores : [16, 13, 14, 8, 10, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	damage_immunities : "cold",
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "Ice Toad",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Target is grappled and restrained (escape DC 13); Can't use bite again until grapple ends"
		}
	],
	traits : [{
			name : "Amphibious",
			description : "The toad can breathe air and water"
		}, {
			name : "Cold Aura",
			description : "A creature that starts its turn within 10 feet of the toad takes 5 (1d10) cold damage."
		}, {
			name : "Standing Leap",
			description : "The toad's long jump is up to 20 ft and its high jump is up to 10 ft, with or without a running start."
		}
	],
	features : [{
			name : "Swallow",
			description : "The toad can make a bite attack against a Medium or smaller target it is grappling. If it hits, the target takes bite damage, is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage and 11 (2d6) cold damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.\nIf the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
		}
	],
	wildshapeString : "Darkvision 60 ft| Cold Aura: Any within 5 ft at start of their turn take 1d10 cold damage| Amphibious: breathe air and water| Standing Leap: long jump 20 ft and high jump 10 ft, regardless of start| Swallow: if bite attack hits Medium or smaller being grappling, it takes bite damageand is swallowed: blinded, restrained, total cover, takes 3d6 acid and 2d6 cold damage at the start of each of the toad's turns; Only 1 swallowed at a time."
};
CreatureList["giant lightning eel"] = {
	name : "Giant Lightning Eel",
	source : ["TftYP", 236],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 42,
	hd : [5, 10], //[#, die]
	speed : "5 ft, swim 30 ft",
	scores : [11, 17, 16, 2, 12, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	damage_resistances : "lightning",
	senses : "Blindsight 60 ft",
	passivePerception : 11,
	languages : "",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two bite attacks as an Attack action; +1d8 lightning damage on a hit"
		}, {
			name : "Lightning Jolt (Recharge 5-6)",
			ability : 3,
			damage : [3, 8, "lightning"], //[#, die, type] "" for die is allowed
			range : "Out/in 5/15 ft",
			dc : true,
			description : "Out water: 5 ft, 1 crea; In water: all in 15 ft; Con save: fail― stunned until eel's next turn end, success― half damage",
			modifiers : [-1, "", false], //[to hit, to damage, add ability to damage] "" means ignore
			tooltip : "One creature the eel touches within 5 feet of it outside water, or each creature within 15 feet of it in a body of water, must make a DC 12 Constitution saving throw. On failed save, a target takes 13 (3d8) lightning damage. If the target takes any of this damage, the target is stunned until the end of the eel's next turn. On a successful save, a target takes half as much damage and isn't stunned"
		}
	],
	traits : [{
			name : "Water Breathing",
			description : "The eel can breathe only underwater."
		}
	],
	actions : [{
			name : "Lightning Jolt (Recharge 5-6)",
			description : "See Attack. One creature the eel touches within 5 feet of it outside water, or each creature within 15 feet of it in a body of water, must make a DC 12 Constitution saving throw. On failed save, a target takes 13 (3d8) lightning damage. If the target takes any of this damage, the target is stunned until the end of the eel's next turn. On a successful save, a target takes half as much damage and isn't stunned"
		}
	]
};
CreatureList["giant subterranean lizard"] = {
	name : "Giant Subterranean Lizard",
	source : ["TftYP", 236],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 66,
	hd : [7, 12], //[#, die]
	speed : "30 ft, swim 50 ft",
	scores : [21, 9, 17, 2, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 3
	},
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 10, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "1 bite \u0026 1 tail attack as Attack action; Target grappled \u0026 restrained (escape DC 15); Can't use bite until grapple ends"
		}, {
			name : "Tail",
			ability : 1,
			damage : [2, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : "1 bite \u0026 1 tail attack as Attack action; Target DC 15 Str save or knocked prone"
		}
	],
	traits : [{
			name : "Swallow",
			description : "The lizard can make one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target takes bite damage, is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the lizard, and it takes 10 (3d6) acid damage at the start of each of the lizard's turns. The lizard can have only one target swallowed at a time.\nIf the lizard dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 10 feet of movement, exiting prone."
		}
	],
	wildshapeString : "\u25C6 Swallow: If a bite attack hits a Small or smaller target that is currently being grappled by the lizard, the target is swallowed, ending the grapple. While swallowed, it is blinded, restrained, has total cover, and takes 3d4 acid damage at the start of each of the lizard's turns; The lizard can have only 1 swallowed at a time. If the lizard dies, the swallowed creature is no longer restrained and can escape using 10 ft movement."
};

// Magic Items
MagicItemsList["amulet of protection from turning"] = {
	name : "Amulet of Protection from Turning",
	source : ["TftYP", 228],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "D",
	description : "",
	descriptionFull : "While you wear this amulet of silver and turquoise, you have advantage on saving throws against effects that turn undead.\n   If you fail a saving throw against such an effect, you can choose to succeed instead. You can do so three times, and expended uses recharge daily at dawn. Each time an effect that turns undead is used against you, the amulet glows with silvery blue light for a few seconds.",
	attunement : true,
	weight : 1
}
MagicItemsList["balance of harmony"] = {
	name : "Balance of Harmony",
	source : ["TftYP", 228],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "D",
	description : "",
	descriptionFull : "This scale bears celestial symbols on one pan and fiendish symbols on the other. You can use the scale to cast Detect Evil and Good as a ritual. Doing so requires you to place the scale on a solid surface, then sprinkle the pans with holy water or place a transparent gem worth 100 gp in each pan. The scale remains motionless if it detects nothing, tips to one side or the other for good (consecrated) or evil (desecrated), and fluctuates slightly if it detects a creature appropriate to the spell but neither good nor evil. By touching the scales after casting the ritual, you instantly learn any information the spell can normally convey, and then the effect ends.",
	weight : 1
}
MagicItemsList["bracelet of rock magic"] = {
	name : "Bracelet of Rock Magic",
	source : ["TftYP", 228],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "While you wear this gold bracelet, it grants you immunity to being petrified, and it allows you to cast Flesh to Stone (save DC 15) as an action. Once the spell has been cast three times, the bracelet can no longer cast it. Thereafter, you can cast Stone Shape as an action. After you have done this thirteen times, the bracelet loses its magic and turns from gold to lead.\n   " + toUni("Curse") + ". The bracelet's affinity with earth manifests as an unusual curse. Creatures of flesh that are strongly related to earth and stone, such as stone giants and dwarves, have advantage on the saving throw against Flesh to Stone cast from the bracelet. If such a creature's save is successful, the bracelet breaks your attunement to it and casts the spell on you. You make your saving throw with disadvantage, and on a failed save you are petrified instantly.",
	attunement : true,
	weight : 1,
	cursed : true
}
MagicItemsList["eagle whistle"] = {
	name : "Eagle Whistle",
	source : ["TftYP", 228],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "While you blow an eagle whistle continuously, you can fly twice as fast as your walking speed. You can blow the whistle continuously for a number of rounds equal to 5 + five times your Constitution modifier (minimum of 1 round) or until you talk, hold your breath, or start suffocating. A use of the whistle also ends if you land. If you are aloft when you stop blowing the whistle, you fall. The whistle has three uses. It regains expended uses daily at dawn.",
	weight : 1
}
MagicItemsList["hell hound cloak"] = {
	name : "Hell Hound Cloak",
	source : ["TftYP", 228],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "H",
	description : "",
	descriptionFull : "This dark cloak is made of cured hell hound hide. As an action, you can command the cloak to transform you into a hell hound for up to 1 hour. The transformation otherwise functions as the Polymorph spell, but you can use a bonus action to revert to your normal form.\n   " + toUni("Curse") + ". This cloak is cursed with the essence of a hell hound, and becoming attuned to it extends the curse to you. Until the curse is broken with Remove Curse or similar magic, you are unwilling to part with the cloak, keeping it within reach at all times.\n   The sixth time you use the cloak, and each time thereafter, you must make a DC 15 Charisma saving throw. On a failed save, the transformation lasts until dispelled or until you drop to 0 hit points, and you can't willingly return to normal form. If you ever remain in hell hound form for 6 hours, the transformation becomes permanent and you lose your sense of self. All your statistics are then replaced by those of a hell hound. Thereafter, only Remove Curse or similar magic allows you to regain your identity and return to normal. If you remain in this permanent form for 6 days, only a Wish spell can reverse the transformation.",
	attunement : true,
	weight : 1,
	cursed : true
}
MagicItemsList["javelin of backbiting"] = {
	name : "Javelin of Backbiting",
	source : ["TftYP", 229],
	type : "weapon (javelin)",
	rarity : "very rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you throw it, its normal and long ranges both increase by 30 feet. and it deals one extra die of damage on a hit. After you throw it and it hits or misses, it flies back to your hand immediately.\n   " + toUni("Curse") + ". This weapon is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with Remove Curse or similar magic, you are unwilling to part with the weapon, keeping it within reach at all times. In addition, you have disadvantage on attack rolls made with weapons other than this one.\n   Whenever you roll a 1 on an attack roll using this weapon, the weapon bends or flies to hit you in the back. Make a new attack roll with advantage against your own AC. If the result is a hit, you take damage as if you had attacked yourself with the spear.",
	attunement : true,
	weight : 2,
	cursed : true
}
MagicItemsList["loadstone"] = {
	name : "Loadstone",
	nameAlt : "Lodestone",
	source : ["TftYP", 228],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "D",
	description : "",
	descriptionFull : "This stone is a large gem worth 150 gp.\n   " + toUni("Curse") + ". The stone is cursed, but its magical nature is hidden; Detect Magic doesn't detect it. An Identify spell reveals the stone's true nature. If you use the Dash or Disengage action while the stone is on your person, its curse activates. Until the curse is broken with Remove Curse or similar magic, your speed is reduced by 5 feet, and your maximum load and maximum lift capacities are halved. You also become unwilling to part with the stone.",
	weight : 1,
	cursed : true
}
MagicItemsList["mirror of the past"] = {
	name : "Mirror of the Past",
	source : ["TftYP", 228],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "D",
	description : "",
	descriptionFull : "The holder of this platinum hand mirror can learn something about the history of a specific object or creature by taking an action to gaze into the mirror and think of the target. Instead of the holder's reflection, the mirror presents scenes from the target's past. Information conveyed is accurate, but it is random and cryptic, and presented in no particular order. Once it is activated, the mirror gives its information for 1 minute or less, then returns to normal. It can't be used again until the next dawn.",
	weight : 1
}
MagicItemsList["night caller"] = {
	name : "Night Caller",
	source : ["TftYP", 228],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "",
	descriptionFull : "This whistle is carved from transparent crystal, and it resembles a tiny dragon curled up like a snail. The name Night Caller is etched on the whistle in Dwarvish runes. If a character succeeds on a DC 20 Intelligence (Arcana or History) check, the character recalls lore that says the duergar made several such whistles for various groups in an age past.\n   If you blow the whistle in darkness or under the night sky, it allows you to cast the Animate Dead spell. The target can be affected through up to 10 feet of soft earth or similar material, and if it is, it takes 1 minute to claw its way to the surface to serve you. Once the whistle has animated an undead creature, it can't do so again until 7 days have passed.\n   Once every 24 hours, you can blow the whistle to reassert control over one or two creatures you animated with it.",
	weight : 1
}
MagicItemsList["potion of mind control"] = {
	name : "Potion of Mind Control",
	source : ["TftYP", 229],
	type : "potion",
	magicItemTable : "E",
	description : "",
	descriptionFull : "When you drink a potion of mind control, you can cast a dominate spell (save DC 15) on a specific creature if you do so before the end of your next turn. If you don't, the potion is wasted.\n   A potion of mind control produces the effect of a Dominate Beast (beast), Dominate Person (humanoid), or Dominate Monster (monster) spell depending on its type. If the target's initial saving throw fails, the effect lasts for 1 hour, with no concentration required on your part. The charmed creature has disadvantage on new saving throws to break the effect during this time.",
	weight : 1,
	choices : ["Beast", "Humanoid", "Monster"],
	"beast" : {
		rarity : "rare",
		description : ""
	},
	"humanoid" : {
		rarity : "rare",
		description : ""
	},
	"monster" : {
		rarity : "very rare",
		description : ""
	}
}
MagicItemsList["robe of summer"] = {
	name : "Robe of Summer",
	source : ["TftYP", 229],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "This elegant garment is made from fine cloth in hues of red, orange, and gold. While you wear the robe, you have resistance to cold damage. In addition, you are comfortable as if the temperature were that of a balmy day, so you suffer no ill effects from the weather's temperature extremes.",
	attunement : true,
	weight : 1
}
MagicItemsList["shatterspike"] = {
	name : "Shatterspike",
	source : ["TftYP", 229],
	type : "weapon (longsword)",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "",
	descriptionFull : "You have a +1 bonus to attack and damage rolls made with this magic weapon. If it hits an object, the hit is automatically a critical hit, and it can deal bludgeoning or slashing damage to the object (your choice). Further, damage from nonmagical sources can't harm the weapon.",
	attunement : true,
	weight : 3
}
MagicItemsList["spear of backbiting"] = {
	name : "Spear of Backbiting",
	source : ["TftYP", 229],
	type : "weapon (spear)",
	rarity : "very rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you throw it, its normal and long ranges both increase by 30 feet. and it deals one extra die of damage on a hit. After you throw it and it hits or misses, it flies back to your hand immediately.\n   " + toUni("Curse") + ". This weapon is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with Remove Curse or similar magic, you are unwilling to part with the weapon, keeping it within reach at all times. In addition, you have disadvantage on attack rolls made with weapons other than this one.\n   Whenever you roll a 1 on an attack roll using this weapon, the weapon bends or flies to hit you in the back. Make a new attack roll with advantage against your own AC. If the result is a hit, you take damage as if you had attacked yourself with the spear.",
	attunement : true,
	weight : 3,
	cursed : true
}
MagicItemsList["stone of ill luck"] = {
	name : "Stone of Ill Luck",
	source : ["TftYP", 229],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "C",
	description : "",
	descriptionFull : "This polished agate appears to be a stone of good luck to anyone who tries to Identify it, and it confers that item's property while on your person.\n   " + toUni("Curse") + ". This item is cursed. While it is on your person, you take a -2 penalty to ability checks and saving throws. Until the curse is discovered, the DM secretly applies this penalty, assuming you are adding the item's bonus. You are unwilling to part with the stone until the curse is broken with Remove Curse or similar magic.",
	attunement : true,
	weight : 1,
	cursed : true
}
MagicItemsList["wand of entangle"] = {
	name : "Wand of Entangle",
	source : ["TftYP", 229],
	type : "wand",
	rarity : "uncommon",
	magicItemTable : "F",
	prerequisite : "Requires attunement by a spellcaster",
	description : "",
	descriptionFull : "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the Entangle spell (save DC 13) from it.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement : true,
	weight : 1
}
MagicItemsList["waythe"] = {
	name : "Waythe",
	source : ["TftYP", 229],
	type : "weapon (greatsword)",
	rarity : "legendary",
	storyItemAL : true,
	description : "",
	descriptionFull : "Waythe is a unique greatsword most recently in the possession of a high-ranking cloud giant ambassador.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a creature of the giant type with it, the giant takes an extra 2d6 slashing damage, and it must succeed on a DC 15 Strength saving throw or fall prone.\n   The sword also functions as a wand of enemy detection. It regains all of its expended charges at dawn and isn't at risk of crumbling if its last charge is used.\n   " + toUni("Sentience") + ". Waythe is a sentient weapon of neutral good alignment, with an Intelligence of 12, a Wisdom of 2, and a Charisma of 14. It has hearing and darkvision out to a range of 120 feet.\n   The weapon can speak and understand Giant and Common, and it can communicate telepathically with its wielder.\n   " + toUni("Personality") + ". This sword believes in freedom and allowing others to live as they see fit. It is protective of its friends, and wants to be friends with a like-minded wielder. (It takes only 1 minute for a good-aligned character to gain attunement with the sword.) Waythe is courageous to the point of foolhardiness, however, and vocally urges bold action. It is likely to come into conflict with an evil or a timid wielder.",
	attunement : true,
	weight : 6
}
MagicItemsList["white dragonhide cape"] = { // worn by king Snurre
	name : "White Dragonhide Cape",
	source : ["TftYP", 193],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "I have resistance to cold damage while wearing this cape",
	descriptionFull : "This magic cape grants the wearer resistance to cold damage.",
	dmgres : ["Cold"]
}
MagicItemsList["spellcasting bolts"] = {
	name : "Spellcasting Bolts",
	source : ["TftYP", 209],
	type : "weapon (crossbow bolts)",
	rarity : "rare",
	magicItemTable : "B",
	description : "These magical crossbow bolts cast a spell on the target they are used on.",
	descriptionFull : "These magical crossbow bolts cast a spell on the target they are used on. The spell has a save DC of 15 and a duration of 1 minute.",
	choices : ["Bolt of Holding", "Bolt of Blinding", "Bolt of Vapors"],
	"bolt of holding" : {
		name : "Bolt of Holding",
		description : "",
		descriptionFull : "This magic bolt casts hold person on the target hit with it, as well as up to two other targets within 30 feet of that target. The spell has a spell save DC of 15 and a duration of 1 minute."
	},
	"bolt of blinding" : {
		name : "Bolt of Blinding",
		description : "",
		descriptionFull : "This magic bolt casts casts blindness/deafness to blind on a target hit with the bolt, as well as up to two other targets within 30 feet of that target. The spell has a spell save DC of 15 and a duration of 1 minute."
	},
	"bolt of vapors" : {
		name : "Bolt of Vapors",
		description : "",
		descriptionFull : "This magic bolt casts casts stinking cloud centered on the point it hits. The spell has a spell save DC of 15 and a duration of 1 minute."
	}
}
MagicItemsList["berserker battleaxe (tamoachan)"] = {
	name : "Berserker Battleaxe (Tamoachan)",
	source : ["TftYP", 68], // Tloques' battleaxe
	type : "weapon (battleaxe)",
	rarity : "very rare",
	magicItemTable : "H",
	description : "This axe gives +2 to hit and damage, +1 HP per level, and is cursed. I can't part with it and have disadv. using other weapons. Whenever I'm damaged by a hostile, I must make a DC 15 Wis save or go berserk, using my action each round to attack the closest creature with the axe until none remain within 60 ft.", // now just the Berserker Axe description, needs adjustment
	descriptionFull : "This battleaxe has a blade of bronze, and the haft is wound with snakeskin wrappings. You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon, your hit point maximum increases by 1 for each level you have attained.\n   Concealed beneath the wrappings around the handle is a parchment containing the spells passwall, burning hands, and gust of wind. When the attuned wielder uses an action to say the correct words of power, which are engraved in Olman on the axe blade, one of these spells can be cast.\n   The axe has 12 charges and regains 1d6+4 expended charges daily at dawn. Casting a spell from it takes a number of charges equal to the level at which the spell is cast (5th for passwall, 2nd for gust of wind, and 1st or higher for burning hands; spell save DC 15). If the parchment is removed from the axe, the axe loses the capability of casting these spells forever.\n   " + toUni("Curse") + ". This axe is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the axe, keeping it within reach at all times. You also have disadvantage on attack rolls with weapons other than this one, unless no foe is within 60 feet of you that you can see or hear.\n   Whenever a hostile creature damages you while the axe is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action each round to attack the creature nearest to you with the axe. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to attack the next nearest creature after you fell your current target. If you have multiple possible targets, you attack one at random. You are berserk until you start your turn with no creatures within 60 feet of you that you can see or hear.",
	attunement : true,
	weight : 4,
	calcChanges : {
		hp : "extrahp += Number(What('Character Level')); extrastring += '\\n + ' + What('Character Level') + ' from Berserker Axe (magic item)'; "
	}
}
MagicItemsList["plantslayer longsword"] = {
	name : "Plantslayer Longsword",
	source : ["TftYP", 70], // from Stone Statue
	type : "weapon (longsword)",
	rarity : "rare",
	magicItemTable : "F",
	description : "",
	descriptionFull : "This sword is made of laminated wood, inset with jagged teeth of obsidian. You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, it deals an extra 2d6 damage to any creature of the plant type.",
	weight : 3
}