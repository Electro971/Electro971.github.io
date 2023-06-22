function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function firstLoad()
{
	counter=0;
	load();
	globalUpdate();
}

function globalUpdate() {
	setHP(10);
	updateStage();
	updateGold();
	updateKills();
	updateMonster();
}

//saving
function save()
{
	gameSave = {
		gold: gold,
		hp: hp,
		zone: zone,
		stage: stage,
		monster: document.getElementById("monster-name").textContent,
		kills: kills
	};
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

//autosave
/* setInterval (function() {
	 save();
	alert("Autosave Complete!")
}, 300000); //3 minutes */

function buy(hero, cost)
{
	if (gold >= cost)
		document.getElementById(hero+"-buy").style.display = "hidden";
}

/* function upgrade(hero)
{
	if (gold )
} */

function updateHero(hero)
{
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function load() 
{
	savedGame = JSON.parse(localStorage.getItem("gameSave"));
	
	if (savedGame != null)
	{
		gold = savedGame.gold;
		hp = savedGame.hp;
		zone = savedGame.zone;
		stage = savedGame.stage;
		kills = savedGame.kills;
		monster = savedGame.monster;
		setHP(hp);
	}
	else
	{
		gold = 0;
		hp = setHP(10);
		stage = 1;
		zone = 1;
		kills = 0;
		newMonster();
	}
	
	globalUpdate();
}

function setHP(x)
{
	hp=x;
}

function setMonLevel(x)
{
	level = x;
	document.getElementById("level-label").innerHTML = "Monster Level: " + level;
}

function attack()
{
	hp-=1;
	updateMonster()
	if (hp <= 0)
		monsterKill();
}

function updateStage()
{
	if (zone < 4)
	{
		document.getElementById("zone-name").innerHTML = "The Fieldlands"
	}
	document.getElementById("zone-numbers").innerHTML = zone + "-" + stage;
}

function clearStage() 
{
	stage+=1;
	if (stage >= 6)
	{
		zone+=1
		stage=1
	}
	updateStage();
}

function updateMonster()
{
	if (document.getElementById("monster").src.toUpperCase().includes("GOBLIN"))
		document.getElementById("monster-name").innerHTML = "Goblin";
	else 
		document.getElementById("monster-name").innerHTML = "null";
	document.getElementById("hp-num").innerHTML = hp;
}

function monsterKill()
{
	addKill();
	addGold();
	counter+=1;
	if (counter >= 4)
	{
		clearStage();
		counter = 0;
	}
	newMonster();
}

function newMonster()
{
	setMonLevel(1);
	setHP(10);
	document.getElementById("monster").src = "goblin.jpg";
	updateMonster();
}

function updateKills()
{
	document.getElementById("kills-label").innerHTML = "Total Kills: " + kills;
}

function addKill()
{
	kills+=1;
	document.getElementById("kills-label").innerHTML = "Total Kills: " + kills;
}

function updateGold()
{
	document.getElementById("gold-label").innerHTML = "Gold: " + gold;
}

function addGold()
{
	gold += 1;
	document.getElementById("gold-label").innerHTML = "Gold: " + gold;
}
