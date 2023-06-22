function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function firstLoad()
{
	load();
	globalUpdate();
}

function globalUpdate() {
	setHP(hp);
	updateStage();
	updateGold();
	updateKills();
	updateMonster();
	document.getElementById("mons-left").innerHTML = 10-counter;
}

//saving
function save()
{
	gameSave = {
		gold: gold,
		hp: hp,
		zone: zone,
		stage: stage,
		monster: document.getElementById("monster").src,
		kills: kills,
		counter: counter,
		monsterLevel: monsterLevel
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
		document.getElementById(hero+"-buy").style.display = "none";
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
		counter = savedGame.counter;
		monsterLevel = savedGame.monsterLevel;
		document.getElementById("monster").src = monster;
	}
	else
	{
		gold = 0;
		hp = setHP(10);
		stage = 1;
		zone = 1;
		kills = 0;
		counter =0;
		monsterLevel=1;
		newMonster();
	}
	
	globalUpdate();
}

function setHP(x)
{
	hp=x;
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
	if (document.getElementById("monster").src.includes("goblin") || document.getElementById("monster").src.includes("Goblin"))
		document.getElementById("monster-name").innerHTML = "Goblin";
	setHP(hp);
	document.getElementById("hp-num").innerHTML = hp;
	document.getElementById("monLevel").innerHTML = monsterLevel;
}

function monsterKill()
{
	addKill();
	addGold();
	counter+=1;
	if (counter >= 10)
	{
		clearStage();
		counter = 0;
	}
	document.getElementById("mons-left").innerHTML = 10-counter;
	newMonster();
}

function newMonster()
{
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
