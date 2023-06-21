function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function firstLoad()
{
	kills=0;
	gold=0;
	mana=0;
	zone = 1;
	stage=1;
	counter = 0;
	level=1;
	
	if (JSON.parse(localStorage.getItem("gameSave")) !== null)
		load();
	else
	{
		newMonster();
		setHP(10);
	}
	
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
		level: level,
		kills: kills,
		
	};
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

//autosave
setInterval (function() {
	 save();
}, 300000); //3 minutes

function load() {
	savedGame = JSON.parse(localStorage.getItem("gameSave"));
	
	if (typeof savedGame.gold !== "undefined")
		gold = savedGame.gold;
	else
		gold = -1;
	if (typeof savedGame.hp !== "undefined")
		hp = savedGame.hp;
	else hp = setHP();
	if (typeof savedGame.zone !== "undefined")
		zone = savedGame.zone;
	else
		zone = 1;
	if (typeof savedGame.level !== "undefined")
		level = savedGame.level;
	else
		level = 0;
	if (typeof savedGame.kills !== "undefined")
		kills = savedGame.kills;
	else
		kills = -1;
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
	if (document.getElementById("monster").src.includes("goblin"))
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