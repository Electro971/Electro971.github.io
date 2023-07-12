function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function globalUpdate() {
	setHP(hp);
	updateStage();
	updateGold();
	updateKills();
	updateMonster();
	document.getElementById("mons-left").innerHTML = 10-counter;
	document.getElementById("hero-exp").innerHTML = exp;
	updateHero();
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
	
	heroFile = {
		name: name,
		level: level,
		heroClass: heroClass,
		exp: exp
	}
	
	
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
	localStorage.setItem("heroFile", JSON.stringify(heroFile));
}

function load() 
{
	savedGame = JSON.parse(localStorage.getItem("gameSave"));
	heroFile = JSON.parse(localStorage.getItem("heroFile"));
	
	//Info
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
		counter = 0;
		monsterLevel=1;
		newMonster();
		firstLoad();
	}
	
	if (heroFile != null)
	{
		name = heroFile.name;
		level = heroFile.level;
		exp = heroFile.exp;
		heroClass = heroFile.heroClass;
	}
	else
	{
		level = 1;
		exp = 0;
	}
	globalUpdate();
}

//autosave
/* setInterval (function() {
	 save();
	alert("Autosave Complete!")
}, 300000); //3 minutes */

function firstLoad()
{
	message("Welcome to Adventure Clicker!");
	window.alert("Welcome to Adventure Clicker!");
	name = window.prompt("What's your name, hero?","");
	heroClass = window.prompt("What class are you? (This doesn't do anything yet.)","");
	
	goblinFile = {
		goblinName: "Goblin",
		expVal: 3,
		imgSrc: "goblin.jpg",
		monsterNumber: 1
	}
	
	localStorage.setItem("goblinFile", JSON.stringify(goblinFile));
}

function updateHero()
{
	document.getElementById("hero-name").innerHTML = name;
	document.getElementById("hero-level").innerHTML = level;
	document.getElementById("hero-class").innerHTML = heroClass;
}

function message(msg)
{
	document.getElementById("table"+0).innerHTML = msg;
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
	document.getElementById("mons-left").innerHTML = Math.abs(10-counter);
	newMonster();
	addExp();
}

function addExp()
{
	if(document.getElementById("monster-name") == "Goblin")
		exp+=3;
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