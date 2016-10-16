
/**
 * Här får du skapa dina låtar samt din playlist samt lägga till låtarna i playlisten.
 * Använd constructorn för Playlist samt Song för att skapa en playlist och låtar, sedan lägg till
 * låtarna med prototypmetoden "add" som du skapat.
 */

var myPlaylist = new Playlist();

var song1 = new Song("Runnin'", "The Pharcyde", true);
var song2 = new Song("Song 2", "Blur", false);
var song3 = new Song("Can you feel it", "Mr Fingers", false);

myPlaylist.add(song1);
myPlaylist.add(song2);
myPlaylist.add(song3);

console.log(myPlaylist.songs);