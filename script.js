function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function load()
{
	kills=0;
	gold=0;
	mana=0;
	zone = 1;
	stage=0;
	counter = 0;
	level=1;
	
	setMonLevel(1);
	setHP();
	updateZone();
	updateGold();
	updateKills();
	newMonster();
}

function save()
{
	localStorage.setItem("monster", document.getElementById("monster"));
	localStorage.setItem("kills", kills);
	localStorage.setItem("gold", gold);
	localStorage.setItem("hp", hp);
}

function newMonster()
{
	setMonLevel(1);
	setHP();
	document.getElementById("monster").src=getRandomInt(3) + ".png";
	document.getElementById("monster-label").innerHTML = "Current Monster: "+document.getElementById("monster").src;
	document.getElementById("hp-label").innerHTML = "HP Left: "+hp;
}

function setHP()
{
	hp=10;
}

function setMonLevel(x)
{
	level = x;
	document.getElementById("level-label").innerHTML = "Monster Level: " + level;
}

function attack()
{
	hp-=1;
	document.getElementById("hp-label").innerHTML = "HP Left: "+hp;
	if (hp <= 0)
		monsterKill();
}

function updateZone()
{
	stage+=1;
	if (stage >= 6)
	{
		zone+=1
		stage=1
	}
	if (zone < 4)
	{
		document.getElementById("zone-name").innerHTML = "The Fieldlands"
	}
	document.getElementById("zone-numbers").innerHTML = zone + "-" + stage;
}

function monsterKill()
{
	updateKills();
	updateGold();
	counter+=1;
	if (counter >= 4)
	{
		updateZone();
		counter = 0;
	}
	newMonster();
}

function updateKills()
{
	kills+=1;
	document.getElementById("kills-label").innerHTML = "Total Kills: " + kills;
}

function updateGold()
{
	gold += 1;
	document.getElementById("gold-label").innerHTML = "Gold: " + gold;
}