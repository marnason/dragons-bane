// Gameplay from the recovered thegame.htm; see README for compatibility changes.
// Inhald av scriptinum
// Monster Generator   : 10000
// Monsters            : 10001
// Attack              : 11000
// Level Up            : 11011
// StoryLine           : 11111
// Hit or Miss         : 10101
// Rewards             : 01010
// Heal                : 00000
// Show Stuff/Store1   : 00100
// Store2              : 01110
// Buy Stuff/Items1    : 11110
// Items2              : 01111
// Name                : 10111
// Maxlife             : 11101




// 10000
function opponent() {
var bigrandum = Math.round(Math.random() * 20)
var randum1 = Math.round(Math.random() * 2)
var randum2 = Math.round(Math.random() * 3)
var yourlevel = parseFloat(game.level.value)

var randum = randum1 + randum2 + (yourlevel * 2)
var yourlife = parseFloat(game.life.value)
var cash = parseFloat(game.money.value)
var yourattack = parseFloat(game.attackdamage.value)

if (game.name.value == 'null') {
	alert('You have to write a name in the box. :/')
	chooseName()
	return false
}
if (game.badguy.value == 'White Tiger') {
	if (game.badlife.value > 1) {
		return false
	}
}
if (game.badguy.value == 'Demon') {
	if (game.badlife.value > 1) {
		return false
	}
}
if (game.badguy.value == 'Shotokahn') {
	if (game.badlife.value > 1) {
		return false
	}
}
if (yourlevel == 1) {
	game.storyline.value = "As soon as you leave the gates of your city you are attacked by monsters.  Your guards are frightened because they have never seen creatures like these so you pull out your sword and fight with them.  They remind you of the monsters that were created by the late mad scientist Baldo that you defeated 10 years ago."
}
if (bigrandum == 18) {
	game.money.value = Math.round(cash - (cash * .09))
	game.f2.value = "A thief stole " + Math.round(cash * .09) + " ± from you."
}
if (1 > yourlife) {
	parent.close()
	return false
}
// 10001
	if (randum == 2) {
	game.badguy.value = "Wild Cat"
	game.enemyattack.value = 3
	game.enemyarmor.value = 0
	game.badlife.value = 11
	}
	 if (randum == 3) {
	game.badguy.value = "Zombie"
	game.enemyattack.value = 5
	game.enemyarmor.value = 0
	game.badlife.value = 15
	}
	if (randum == 4) {
	game.badguy.value = "Goblin Shaman"
	game.enemyattack.value = 4
	game.enemyarmor.value = 1
	game.badlife.value = 13
	}
	if (randum == 5) {
	game.badguy.value = "Wolf"
	game.enemyattack.value = 6
	game.enemyarmor.value = 1
	game.badlife.value = 20
	}
	if (randum == 6) {
	game.badguy.value = "Veteran"
	game.enemyattack.value = 7
	game.enemyarmor.value = 2
	game.badlife.value = 24
	}
	if (randum == 7) {
	game.badguy.value = "Skeleton"
	game.enemyattack.value = 6
	game.enemyarmor.value = 0
	game.badlife.value = 32
	}
	if (randum == 8) {
	game.badguy.value = "Shadow"
	game.enemyattack.value = 8
	game.enemyarmor.value = 3
	game.badlife.value = 40
	}
	if (randum == 9) {
	game.badguy.value = "Ooze"
	game.enemyattack.value = 7
	game.enemyarmor.value = 3
	game.badlife.value = 41
	}
	if (randum == 10) {
	game.badguy.value = "Pirate"
	game.enemyattack.value = 12
	game.enemyarmor.value = 2
	game.badlife.value = 48
	}
	if (randum == 11) {
	game.badguy.value = "Wraith"
	game.enemyattack.value = 9
	game.enemyarmor.value = 5
	game.badlife.value = 39
	}
if (yourlevel > 2){
	if (randum == 12) {
	game.badguy.value = "Minotaur"
	game.enemyattack.value = 13
	game.enemyarmor.value = 4
	game.badlife.value = 54
	}
	if (randum == 13) {
	game.badguy.value = "Gog"
	game.enemyattack.value = 12
	game.enemyarmor.value = 2
	game.badlife.value = 50
	}
	if (randum == 14) {
	game.badguy.value = "Giant"
	game.enemyattack.value = 16
	game.enemyarmor.value = 5
	game.badlife.value = 80
	}
	if (randum == 15) {
	game.badguy.value = "Sea Salamander"
	game.enemyattack.value = 16
	game.enemyarmor.value = 4
	game.badlife.value = 69
	}
	if (randum == 16) {
	game.badguy.value = "Pit Fiend"
	game.enemyattack.value = 18
	game.enemyarmor.value = 3
	game.badlife.value = 72
	}
}

	if (randum == 17) {
	game.badguy.value = "Giant Turtle"
	game.enemyattack.value = 20
	game.enemyarmor.value = 6
	game.badlife.value = 80
	}
	if (randum == 18) {
	game.life.value = Math.round(yourlife * .40)
	game.badguy.value = "Cobra"
	game.enemyattack.value = 16
	game.enemyarmor.value = 8
	game.badlife.value = 70
	game.f2.value = "The Cobra poisened you. You lost " + Math.round(yourlife * .15) + " hit points."

	}
	if (randum == 19) {
	game.badguy.value = "Mummy"
	game.enemyattack.value = 19
	game.enemyarmor.value = 1
	game.badlife.value = 80
	}
	if (randum == 20) {
	game.badguy.value = "Gargoyle"
	game.enemyattack.value = 18
	game.enemyarmor.value = 5
	game.badlife.value = 90
	}
	if (randum == 21) {
	game.badguy.value = "Doom Knight"
	game.enemyattack.value = 21
	game.enemyarmor.value = 8
	game.badlife.value = 110
	}
	if (randum > 22) {
	game.badguy.value = "Ogre"
	game.enemyattack.value = 24
	game.enemyarmor.value = 5
	game.badlife.value = 100
	}
	if (randum > 23) {
	game.badguy.value = "Efreet"
	game.enemyattack.value = 22
	game.enemyarmor.value = 3
	game.badlife.value = 95
	}
	if (randum == 24) {
	game.life.value = yourlife - 6
	game.f2.value = "Ouch!!! You hit a trap. Lost 6 hit points."
	}
	if (randum == 25) {
	game.badguy.value = "Hell Hound"
	game.enemyattack.value = 26
	game.enemyarmor.value = 5
	game.badlife.value = 112
	}
	if (randum == 26) {
	game.badguy.value = "Ent"
	game.enemyattack.value = 26
	game.enemyarmor.value = 4
	game.badlife.value = 126
	}
	if (randum == 27) {
	game.money.value = cash + 17
	game.f1.value = "You found 17 Gold"
	}
	if (randum == 28) {
	game.badguy.value = "Vampire"
	game.enemyattack.value = 29
	game.enemyarmor.value = 3
	game.badlife.value = 104
	}
	if (randum == 29)  {
	game.badguy.value = "Dragon Worm"
	game.enemyattack.value = 34
	game.enemyarmor.value = 9
	game.badlife.value = 141
	}
	if (randum == 30) {
	game.badguy.value = "Abomination"
	game.enemyattack.value = 33
	game.enemyarmor.value = 3
	game.badlife.value = 180
	}
	if (randum == 31) {
	game.life.value = Math.round(yourlife * .70)
	game.f2.value = "Ouch!! You hit a trap. lost " + Math.round(yourlife * .30) + " hit points."
	}
	if (randum == 32) {
	game.badguy.value = "Lizard"
	game.enemyattack.value = 31
	game.enemyarmor.value = 5
	game.badlife.value = 156
	}
	if (randum == 33) {
	game.badguy.value = "Devil"
	game.enemyattack.value = 39
	game.enemyarmor.value = 8
	game.badlife.value = 192
	}
	if (randum == 34) {
	game.badguy.value = "Earth Elemental"
	game.enemyattack.value = 31
	game.enemyarmor.value = 8
	game.badlife.value = 110
	}
	if (randum == 35) {
	game.badguy.value = "Air Elemental"
	game.enemyattack.value = 31
	game.enemyarmor.value = 8
	game.badlife.value = 108
	}
	if (randum == 36) {
	game.badguy.value = "Water Elemental"
	game.enemyattack.value = 29
	game.enemyarmor.value = 8
	game.badlife.value = 118
	}
	if (randum == 37) {
	game.badguy.value = "Naka"
	game.enemyattack.value = 38
	game.enemyarmor.value = 12
	game.badlife.value = 128
	}
	if (randum == 38) {
	game.badguy.value = "Tornado"
	game.enemyattack.value = 40
	game.enemyarmor.value = 16
	game.badlife.value = 180
	}
	if (randum == 39) {
	game.badguy.value = "Bone Dragon"
	game.enemyattack.value = 42
	game.enemyarmor.value = 11
	game.badlife.value = 165
	}
	if (randum == 40) {
	game.life.value = Math.round(yourlife * .70)
	game.f2.value = "Ouch!! You hit a trap. Lost " + Math.round(yourlife * .40) + " hit points."
	}
	if (randum == 41) {
	game.badguy.value = "Black Dragon"
	game.enemyattack.value = 50
	game.enemyarmor.value = 12
	game.badlife.value = 190
	}
	if (randum == 42) {
	game.badguy.value = "Juggernaut"
	game.enemyattack.value = 52
	game.enemyarmor.value = 8
	game.badlife.value = 200
	}
	if (randum == 43) {
	game.badguy.value = "Skeleton Warrior"
	game.enemyattack.value = 48
	game.enemyarmor.value = 6
	game.badlife.value = 180
	}
	if (randum == 44) {
	game.badguy.value = "Warlock"
	game.enemyattack.value = 51
	game.enemyarmor.value = 9
	game.badlife.value = 190
	}
	if (randum == 45) {
	game.badguy.value = "Satyr"
	game.enemyattack.value = 55
	game.enemyarmor.value = 10
	game.badlife.value = 205
	}
	if (randum == 46) {
	game.badguy.value = "Golem"
	game.enemyattack.value = 56
	game.enemyarmor.value = 20
	game.badlife.value = 145
	}
	if (randum == 47) {
	game.badguy.value = "Follower of Ra"
	game.enemyattack.value = 58
	game.enemyarmor.value = 9
	game.badlife.value = 190
	}
	if (randum == 48) {
	game.badguy.value = "Swamp Beast"
	game.enemyattack.value = 58
	game.enemyarmor.value = 5
	game.badlife.value = 250
	}
	if (randum == 49) {
	game.money.value = cash - 49
	game.badguy.value = "Burglar"
	game.enemyattack.value = 21
	game.enemyarmor.value = 2
	game.badlife.value = 60
	game.f2.value = "The Burglar stole some money from you."
	}

}
// 11000
	function attacker() {
	game.f1.value = ""
	game.f2.value = ""
	var swordbonus = parseFloat(game.swordbonus.value)
	var armorbonus = parseFloat(game.armorbonus.value)
	var shieldbonus = parseFloat(game.shieldbonus.value)
	var amuletbonus = parseFloat(game.amuletbonus.value)
	var ringbonus = parseFloat(game.ringbonus.value)
	var randum = Math.round(Math.random() * 20)
	var randum1 = Math.round(Math.random() * 40)
	var yougethit = parseFloat(game.armorclass.value)
	var hegethit = parseFloat(game.enemyarmor.value)
	var hurted = parseFloat(game.enemyattack.value)
	var enemylife = parseFloat(game.badlife.value)
	var yourattack = parseFloat(game.attackdamage.value)
	var yourlife = parseFloat(game.life.value)
	var enemyattack = parseFloat(game.enemyattack.value)
	var yourexperience = parseFloat(game.experience.value)
	var yourlevel = parseFloat(game.level.value)
	var yourmoney = parseFloat(game.money.value)
	var enemyarmor = parseFloat(game.enemyarmor.value)
	var baldoo = parseFloat(game.baldo.value)
	var story = parseFloat(game.story.value)
// 11011
if (99 > yourlevel) {
	if (yourexperience > ((yourlevel * 100) + .35 * yourexperience)) {
	game.level.value = yourlevel + 1
	game.f1.value = "LEVEL UP!!"
	game.life.value = 100
	game.attackdamage.value = yourattack + 2
		if (26 > yougethit) {
		game.armorclass.value = yougethit + 2
		}
// 11111
	if (yourlevel == 1) {
	game.storyline.value = "It has become apparent that this will be a much tougher trip than you expected.  You have only traveled a few miles outside your gate supplies are already low and your soldiers have taken a beating. You decide to go back to your castle and regroup."
	}
	if (yourlevel == 2) {
	game.storyline.value = "When you get to the castle the gates are already open. You go inside and find the city infested with monsters.  There is no resistance from your soldiers and it looks like they just let them in.  You spot one and ask what is going on and he attacks you.  An arrow whizzes by your head and you look up at the wall and see your archers firing on you. Even the citizens are attacking.  You decide to head to the treasure room and get Baldo's equipment. Something you had hoped you would never have to use again."
	}
	if (yourlevel == 3) {
	game.storyline.value = "You have fought your way to the treasure room.  The doors are already open. You step in and hear a growl behind you. You look back and see your favorite pet. A huge white tiger."
	game.badguy.value = "White Tiger"
	game.enemyattack.value = 11
	game.enemyarmor.value = 5
	game.badlife.value = 100
	}
	if (yourlevel == 4) {
	game.storyline.value = "You have been stripped of your kingdom and the last of your soldiers has been killed.  Now you are completely on your own and surrounded by strange beasts, just like when your village was attacked.  Hopefully your friend will know what is going on and be able to help."
	}
	if (yourlevel == 5) {
	game.storyline.value = "Finally you arrive at your destination.  After asking several questions in a row the king just tells you not to worry and that he can explain everything. He says he has something to show you and you follow him down several flights of stairs.  You go through a large door and are now on a balcony about ten feet from the ground in a large cave like room. The king claps twice and says that this should explain everything.  Two guards rush in and throw you over the balcony. As soon as you hit the ground monsters attack from all sides."
	}
	if (yourlevel == 6) {
	game.storyline.value = "You look up at the balcony and see the king standing there laughing.  KING--I suppose I owe you some answers before you die. All these years and you have never figured it out. Baldo was my son and you killed him.  He was a genuois and you were to stupid to realize it.  Thank you for taking care of his weopons though, to bad you were to stupid to use them. Don't worry about your family they are now my loyal servants along with the rest of your kingdom. I would like to stay here and watch you die but Im very busy, goodbye."
	}
	if (yourlevel == 7) {
	game.storyline.value = "You have fought your way across the room. It is to dark to see very well but you feel a cold breeze and follow it to a cave that goes even deeper underground. The entire room smells like rotting carcasses but as you enter the cave the smell becomes overwhelming."
	}
	if (yourlevel == 8) {
	game.storyline.value = "After traveling for miles you are exhausted and about to give up and let the monsters overtake you. You hear some loud noises echoing through the cave. It sounds as if a fierce battle is being fought.  You hear a scream that sounds very human and then it gets quiet again."
	}
	if (yourlevel == 9) {
	game.storyline.value = "You see a man lying on the ground. He looks badly injured.--WARRIOR--I am Shotokahn. I was this kingdoms fiercest and most loyal warrior. The king threw me in here when I objected to his attacking your country. It is not his fault though, the items you acquired from Baldo were cursed. If any man posses them for to long all his friends will become enemies. He banished Baldo from this Kingdom because he knew he was evil. The demon I was just fighting is the one that granted Baldo his powers. The only way to break the curse is to kill him. Here take my sword."
		game.swordbonus.value = 25
		game.items.value = "Shotokahn's Blade+25"
		game.badguy.value = "Demon"
		game.enemyattack.value = 49
		game.enemyarmor.value = 5
		game.badlife.value = 438
		}
	if (yourlevel == 12) {
	game.storyline.value = "You reach the castle and the king looks very happy to see you. --KING-- Thank you for killing that demon. Unfortunately for though I am the one that made the deal with that demon to get my son his powers. It forbade me from having him killed myself. With him out of the way I do not have to repay my debt and nothing stands in my way. Good work Shoto in tricking him into killing the demon. Now kill that fool."
		game.badguy.value = "Shotokahn"
		game.enemyattack.value = 30
		game.enemyarmor.value = 5
		game.badlife.value = 500
	}
	if (yourlevel == 14) {
	game.storyline.value = "You find Baldo's Ring in the treasure room. The king must have been in a hurry to leave such an important item. "
	game.yourring.value = "BALDO'S Ring"
	game.ringbonus.value = 6
	}
	return false
	}
}
// 10101
	if (1 > yourlife) {
	game.f1.value = "DEAD"
	game.f2.value = "DEAD"
	game.experience.value = 0
	game.money.value = 0
	game.storyline.value = "DEAD"
	alert("YOU ARE DEAD")
	parent.close()
	return false
	}
		if (enemylife > 0) {
			if (randum > (hegethit - ringbonus)) {
				if (randum == 14) {
				game.badlife.value = enemylife - ((yourattack + swordbonus) * 2)
				game.f1.value = "Critical Hit!!! you did " + Math.ceil(((yourattack + swordbonus) * 2.395791264))  + " points of damage!"
				} else {
				game.badlife.value = enemylife - (yourattack + swordbonus)
				game.f1.value = "You hit the enemy for " + (yourattack + swordbonus)  + " damage points"
				}
			}
			if (randum1 > (yougethit + armorbonus)) {
			game.life.value = yourlife - (enemyattack - shieldbonus) - (2 * yourlevel)
			game.f2.value = "You got hit for " + ((enemyattack - shieldbonus) + (2 * yourlevel)) + " hit points"
			}
		}
// 01010
if (1 > enemylife) {
	game.badlife.value = "DEAD"
	game.baldo.value = baldoo + 1
	game.experience.value = yourexperience + (enemyattack * enemyarmor)
	game.money.value = yourmoney + (enemyattack * randum)
	game.f1.value = "You have defeated your oppenent. You aquired " + (enemyattack * randum) + " gold. And " + (enemyattack * enemyarmor) + " experience"
		if (randum == 15) {
		game.life.value = yourlife + 15
		game.f2.value = "You Found Magic Beans plus 15 to hitpoints"
	}
			if (game.enemyattack.value == 49) {
			game.level.value = yourlevel + 1
			game.badguy.value = "DEAD"
			game.storyline.value = "After defeating the demon, Shotokahn emmidiatly asks for his sword back. Shotokahn seems to know the caves very well and you quickly fight your way to the surface. Now you head back to the castle to make sure the curse has been lifted."
			game.swordbonus.value = 5
		        game.items.value = "Sword+5"
			}
			if (game.enemyattack.value == 30) {
			game.badguy.value = "DEAD"
			game.swordbonus.value = 25
		        game.items.value = "Shotokahn's Blade+25"
			game.storyline.value = "You leave your sword lodged in Shotokahn's chest and take his. Then quickly run after the King."
			}
			if (yourlevel == 99) {
			game.badguy.value = "The World is Yours"
			game.storyline.value = "You made it... The game is over... You won... Special thanks to: .:P&aelig;tur H&oslash;jgaard Jacobsen:."
			}
			if (game.enemyattack.value == 11) {
			game.badguy.value = "DEAD"
			game.storyline.value = "After killing the tiger you look around the treasure room. The only thing missing is Baldo's magic items. If one person is in possession of all of them it will be impossible to defeat them. Without these items and with the whole city turned against you, you are forced to flee.  You quickly gather what equipment you can, your few remaining loyal soldiers and once again set out for your neighboring kingdom."
			}
		}
}
// 00000
	function heal() {
	var yourlife = parseFloat(game.life.value)
	var healpower = parseFloat(game.healpower.value)
	if (1 > yourlife) {
	game.f1.value = "DEAD"
	game.f2.value = "DEAD"
	game.experience.value = 0
	game.money.value = 0
	alert("YOU ARE DEAD")
	parent.close()
	return false
	}
	var cash = parseFloat(game.money.value)
	var yourlife = parseFloat(game.life.value)
	var yourexperience = parseFloat(game.experience.value)
	if (cash > 24) {
	game.money.value = cash - 25
	game.life.value = yourlife + healpower
	game.experience.value = yourexperience + 10
	}
	if (yourlife == 100) {
		game.life.value = 100
		alert('You can max. have 100 lifepoints.')
		game.money.value = cash + 0
	}
}


// 00100
function buysomethin() {
var yourlife = parseFloat(game.life.value)
var yourlevel = parseFloat(game.level.value)
var randum2 = Math.round(Math.random() * 21)
var randum = Math.round(Math.random() * 20)
//================store 1 items======
	if (randum == 1) {
	game.item1.value = "1"
	game.xitem1.value = 1
	}
	if (randum == 2) {
	game.item1.value = "2"
	game.xitem1.value = 2
	}
	if (randum == 3) {
	game.item1.value = "3"
	game.xitem1.value = 3
	}
	if (randum == 4) {
	game.item1.value = "4"
	game.xitem1.value = 2
	}
	if (randum == 5) {
	game.item1.value = "5"
	game.xitem1.value = 5
	}
	if (randum == 6) {
	game.item1.value = "6"
	game.xitem1.value = 6
	}
	if (randum == 7) {
	game.item1.value = "7"
	game.xitem1.value = 7
	}
	if (randum == 8) {
	game.item1.value = "8"
	game.xitem1.value = 8
	}
	if (randum == 9) {
	game.item1.value = "9"
	game.xitem1.value = 9
	}

	if (randum == 10) {
	game.item1.value = "10"
	game.xitem1.value = 10
	}
	if (randum == 11) {
	game.item1.value = "11"
	game.xitem1.value = 11
	}
	if (randum == 12) {
	game.item1.value = "12"
	game.xitem1.value = 12
	}
	if (randum == 13) {
	game.item1.value = "13"
	game.xitem1.value = 13
	}
	if (randum == 14) {
	game.item1.value = "14"
	game.xitem1.value = 14
	}
	if (randum == 15) {
	game.item1.value = "15"
	game.xitem1.value = 15
	}
	if (randum == 16) {
	game.item1.value = "16"
	game.xitem1.value = 16
	}
	if (randum == 17) {
	game.item1.value = "17"
	game.xitem1.value = 17
	}
	if (randum == 18) {
	game.item1.value = "18"
	game.xitem1.value = 18
	}
	if (randum == 19) {
	game.item1.value = "19"
	game.xitem1.value = 19
	}
	if (randum == 20) {
	game.item1.value = "20"
	game.xitem1.value = 20
	}

// 01110
	if (randum2 == 1) {
	game.item2.value = "1"
	game.xitem2.value = 1
	}
	if (randum2 == 2) {
	game.item2.value = "2"
	game.xitem2.value = 2
	}
	if (randum2 == 3) {
	game.item2.value = "3"
	game.xitem2.value = 3
	}
	if (randum2 == 4) {
	game.item2.value = "4"
	game.xitem2.value = 4
	}
	if (randum2 == 5) {
	game.item2.value = "5"
	game.xitem2.value = 5
	}
	if (randum2 == 6) {
	game.item2.value = "6"
	game.xitem2.value = 6
	}
	if (randum2 == 7) {
	game.item2.value = "7"
	game.xitem2.value = 7
	}
	if (randum2 == 8) {
	game.item2.value = "8"
	game.xitem2.value = 8
	}
	if (randum2 == 9) {
	game.item2.value = "9"
	game.xitem2.value = 9
	}

	if (randum2 == 10) {
	game.item2.value = "10"
	game.xitem2.value = 10
	}
	if (randum2 == 11) {
	game.item2.value = "11"
	game.xitem2.value = 11
	}
	if (randum2 == 12) {
	game.item2.value = "12"
	game.xitem2.value = 12
	}
	if (randum2 == 13) {
	game.item2.value = "13"
	game.xitem2.value = 13
	}
	if (randum2 == 14) {
	game.item2.value = "14"
	game.xitem2.value = 14
	}
	if (randum2 == 15) {
	game.item2.value = "15"
	game.xitem2.value = 15
	}
	if (randum2 == 16) {
	game.item2.value = "16"
	game.xitem2.value = 16
	}
	if (randum2 == 17) {
	game.item2.value = "17"
	game.xitem2.value = 17
	}
	if (randum2 == 18) {
	game.item2.value = "18"
	game.xitem2.value = 18
	}
	if (randum2 == 19) {
	game.item2.value = "19"
	game.xitem2.value = 19
	}
	if (randum2 == 20) {
	game.item2.value = "20"
	game.xitem2.value = 20
	}
	if (randum2 == 21) {
	game.item2.value = "21"
	game.xitem2.value = 21
	}
}
// 11110
function buyitem1() {
var randy = Math.round(Math.random() * 150)
var theitem = game.xitem1.value
var yourmoney = parseFloat(game.money.value)
var yourattack = parseFloat(game.attackdamage.value)
var yourstuff = game.items.value
var yougethit = parseFloat(game.armorclass.value)
var yourlife = parseFloat(game.life.value)
		var swordbonus = parseFloat(game.swordbonus.value)
		var armorbonus = parseFloat(game.armorbonus.value)
		var shieldbonus = parseFloat(game.shieldbonus.value)
		var amuletbonus = parseFloat(game.amuletbonus.value)
		var ringbonus = parseFloat(game.ringbonus.value)
	if (theitem == 1) {
		if (yourmoney > 0) {
	game.money.value = yourmoney - 0
	game.swordbonus.value = 0
	game.item1.value = ""
	game.xitem1.value = 0
	game.items.value = ""
		}
	}
}
// 01111
function buyitem2() {
var theitem = game.xitem2.value
var yourlife = parseFloat(game.life.value)
var yourmoney = parseFloat(game.money.value)
var yourattack = parseFloat(game.attackdamage.value)
var yougethit = parseFloat(game.armorclass.value)
var healpower = parseFloat(game.healpower.value)
var yourexperience = parseFloat(game.experience.value)
		var swordbonus = parseFloat(game.swordbonus.value)
		var armorbonus = parseFloat(game.armorbonus.value)
		var shieldbonus = parseFloat(game.shieldbonus.value)
		var amuletbonus = parseFloat(game.amuletbonus.value)
		var ringbonus = parseFloat(game.ringbonus.value)
	if (theitem == 1) {
		if (yourmoney > 99) {
	game.money.value = yourmoney - 100
	game.swordbonus.value = 3
	game.item2.value = "Bought"
	game.xitem2.value = 0
	game.items.value = "Sword+3"
		}
	}
}
// 10111
function chooseName() {
	var namer = prompt('Write your name here:','')
	if (namer === null) namer = 'Adventurer'
	var maner = game.name.value
	if (namer == 'null') {
		alert('Your name is not allowed to be null in this game. Write something else. :)')
		chooseName()
		return false;
	}
	if (namer == '') {
		alert('You have to write something. Right? :/')
		chooseName()
		return false;
	}
	if (namer == 'gotoyear3000') {
		game.swordbonus.value = 25
		game.items.value = "Laser Sword"
		game.imgweapon.src = "Weapons/LaserSword.bmp"
		chooseName();
		return false;
	}
	if (namer == 'goldentreasure') {
		game.money.value = 10000
		chooseName();
		return false;
	}
	if (namer != '') {
		game.name.value = namer
	}
}

// 11101
function maxlife() {
	var yourlife = parseFloat(game.life.value)
	var cash = parseFloat(game.money.value)
	if (yourlife > 100) {
		game.life.value = 100
		alert('You can max. have 100 lifepoints.')
	}
	// Called once after Attack/Heal; do not accumulate recurring timers.
}

