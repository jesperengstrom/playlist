/**
 * Inget att se här, bara ful kod som sköter UI:t. Move along.
 */
var play = function(){
	console.log(myPlaylist.isPlaying ? "Det spelas!" : "");
	console.log(myPlaylist.getCurrent());
	document.getElementById('info').innerHTML = "<h2>Nu spelas:<br />" + myPlaylist.getCurrent().title + " av " + myPlaylist.getCurrent().artist + "</h2>";

};

var stop = function(){
	document.getElementById('info').innerHTML = "<h2>Nu spelas:</h2>";
	console.log(myPlaylist.isPlaying ? "" : "Det spelas inte!");
};

var next = function(){
	document.getElementById('info').innerHTML = "<h2>Nu spelas:<br />" + myPlaylist.getCurrent().title + " av " + myPlaylist.getCurrent().artist + "</h2>";
	console.log(myPlaylist.getCurrent());
};

document.getElementById("play").addEventListener("click", play);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("next").addEventListener("click", next);


