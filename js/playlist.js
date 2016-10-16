
function Playlist(){
    //Playlisten ska inte ta några argument men ska ha följande variabler:
    //songs som är en array
    //isPlaying som är en bool
    //playingIndex som är 0
    this.songs = [];
    this.isPlaying = true;
    this.playingIndex = 0;

}

Playlist.prototype.add = function(song){        //add pushar song-objekten in i arrayen songs
    this.songs.push(song);
    //Denna funktion ska lägga till en ny låt till playlisten
};

Playlist.prototype.play = function(){
    //Denna funktion ska starta playlisten och låten
    myPlaylist.playingIndex = 0;                                        //startar om playlisten (index)
    myPlaylist.songs[myPlaylist.playingIndex].isPlaying = true;         //sätter isplaying låten[index] till true
    return myPlaylist.getCurrent();                                     //och kallar på getcurrent
};


Playlist.prototype.stop = function(){                                   //sätter alla låtar till isPlaying = false (spelar ingen större roll, men)
    //Denna funktion ska stoppa låten samt stoppa playlisten
    for (var i = 0; i < myPlaylist.songs.length; i++) {
        myPlaylist.songs[i].isPlaying = false;
    }
     
};

Playlist.prototype.next = function(){
    //Denna funktion ska byta låt. Om vi är på sista låten ska
    //funktionen gå tillbaka till första låten om vi anropar funktionen medan
    //vi står på sista låten
    if (myPlaylist.playingIndex == myPlaylist.songs.length - 1) {       //om playinindex är samma som arrayens längd -1 (är vi på sista låten)...
        myPlaylist.playingIndex = 0;                                    //...och playingindex sätts till 0 (börjar om)
    }
    else myPlaylist.playingIndex += 1;                                  //annars ökar playingindex med ett
    myPlaylist.getCurrent();                                            // ...och vi ropar på getcurrent

     };

Playlist.prototype.prev = function(){
    if (myPlaylist.playingIndex === 0) {                                //omvänt, om playingindex är noll (är vi på första låten)...
        myPlaylist.playingIndex = (myPlaylist.songs.length - 1);         //...och vi hoppar till den sista
    }
    else myPlaylist.playingIndex -= 1;                                  //annars räknar vi ner playingindex med ett
    myPlaylist.getCurrent();                                            //och ropar på getcurrent

     };

Playlist.prototype.getCurrent = function(){
    //Returnera nuvarande låten
    for (var i = 0; i < myPlaylist.songs.length; i++) {                 //intererar genom låtarna 
        if (myPlaylist.songs[i].isPlaying === true) {                   //och hittar den som är isPlaying...
            return myPlaylist.songs[i + myPlaylist.playingIndex];       //returnerar den + playingindex (det är så fw och rw-knapparna funkar!)
        }
        else return "error!";
    }
};









