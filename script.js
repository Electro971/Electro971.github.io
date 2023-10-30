function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function globalUpdate() {
	
}

//saving
function save()
{
	gameSave = {
		
	};
	
	heroFile = {
		
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
	
	}
	else
	{
	
	}
	
	if (heroFile != null)
	{
		
	}
	else
	{
		
	}
	globalUpdate();
}

function message(msg)
{
var div = document.createElement("message1");
div.style.width = "100%";
div.style.height = "auto";
div.style.background = "gray";
div.style.color = "white";
div.innerHTML = msg;
onclick = this.remove

document.getElementById("log-box").appendChild(div);	
}

//autosave
/* setInterval (function() {
	 save();
	alert("Autosave Complete!")
}, 300000); //3 minutes */