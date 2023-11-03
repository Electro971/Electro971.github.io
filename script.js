var messages = 0;
var fishingSpeed = 1;
var currentFish = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function globalUpdate() {
	document.getElementById("cargo-numbers").innerHTML = currentFish;
}

//saving
function save()
{
	gameSave = {
		
	};
	
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function load() 
{
	savedGame = JSON.parse(localStorage.getItem("gameSave"));
	
	//Info
	if (savedGame != null)
	{
		
	}
	else
	{
	
	}
	globalUpdate();
}

function fish(biome)
{
	if(biome == "default")
	{
		document.getElementById("fish-name").innerHTML = "???"
		document.getElementById("fish-button").disabled = true;
		setTimeout(function(){
			currentFish++;
			document.getElementById("fish-name").innerHTML = "Nothing"
			document.getElementById("fish-button").disabled = false;
		}, (getRandomInt(10)*1000)/fishingSpeed);
	}
}

//Sends a message to the log by taking the text, the number of buttons, then the text of the button(s).
function message(msg, buttons, button1, button2)
{
	var div = document.createElement("message"+messages);
	div.style.width = "100%";
	div.style.height = "auto";
	div.style.background = "gray";
	div.style.color = "white";
	div.style.border = "solid black 2px";
	div.style.padding = "2px 2px 2px 2px";
	div.innerHTML = msg;

	messages++;
	document.getElementById("log-box").appendChild(div);
	
	if (buttons == 1 || buttons ==2)
	{	
		var buttonNumOne = document.createElement("BUTTON");
		buttonNumOne.innerText = button1;
		buttonNumOne.id = "message"+messages+"Button"+1;
		if (buttons == 2)
		{
			var buttonNumTwo = document.createElement("BUTTON");
			buttonNumTwo.innerText = button2;
			buttonNumTwo.id = "message"+messages+"Button"+2;
		}
		document.getElementById('log-box').appendChild(buttonNumOne);
		document.getElementById('log-box').appendChild(buttonNumTwo);
	}
}

var flag0 = false;

 function plot()
 {
	if (!flag0)
	{
		message("You wake up on the beach with no idea how you got here.",0);
		flag0 = true;
		setTimeout(function(){
			message("Nothing to do but move on you suppose.",0);
		}, 1000);
		setTimeout(function(){
			message("Seems like all you have is an old fishing rod. How odd.",0); 
		}, 2000);
	}
 }

// Checks plot/messages every second & updates
setInterval (function() {
	 plot();
	 globalUpdate();
}, 100);

//autosave
/* setInterval (function() {
	 save();
	alert("Autosave Complete!")
}, 300000); //3 minutes */