/* global $ */

// BELOW Update the songs array with four of your favorites songs.

var songs = [
  "Clock Strikes",
  "No Title",
  "Cry Out",
  "Kisetsu wa Tsugitsugi Shindeiku",
  "Ignite"
];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song

var songArtist = [
  "ONE OK ROCK",
  "Reol",
  "ONE OK ROCK",
  "amazarashi",
  "Aoi Eir"
];


var songImage = [
  "https://i.ytimg.com/vi/KQMqiQNExek/maxresdefault.jpg",
  "https://i1.sndcdn.com/artworks-000294625935-epic2f-t500x500.jpg",
  "https://images.genius.com/d2d71b191fc19637d06835315dec9ebe.500x445x1.jpg",
  "https://i.scdn.co/image/ab67616d0000b2736e4097c323bcf34944870757",
  "https://i1.sndcdn.com/artworks-000094274643-85cqo7-t500x500.jpg"
];
var songLength = ["3:58", "4:06", "3:52", "5:55", "4:07"];
var songLink = [
  "https://www.youtube.com/embed/6YZlFdTIdzM",
  "https://www.youtube.com/embed/LfephiFN76E",
  "https://www.youtube.com/embed/JWSRqWpWPzE",
  "https://www.youtube.com/embed/Upvuj6GhAa4",
  "https://www.youtube.com/embed/mTCESSzPZSw"
];


var ClockStrikes = {
  songName: "Clock Strikes",
  artist: "ONE OK ROCK",
  songImage: "https://i.ytimg.com/vi/KQMqiQNExek/maxresdefault.jpg",
  songLength: "3:58",
  songLink: "https://www.youtube.com/embed/6YZlFdTIdzM"
};

var NoTitle = {
  songName: "No Title",
  artist: "Reol",
  songImage: "https://i1.sndcdn.com/artworks-000294625935-epic2f-t500x500.jpg",
  songLength: "4:06",
  songLink: "https://www.youtube.com/embed/LfephiFN76E"
};

var CryOut = {
  songName:"Cry Out",
  artist: "ONE OK ROCK",
  songImage: "https://images.genius.com/d2d71b191fc19637d06835315dec9ebe.500x445x1.jpg",
  songLength: "3:52",
  songLink: "https://www.youtube.com/embed/JWSRqWpWPzE"
};

var KisetsuwaTsugitsugiShindeiku = {
  songName:"Kisetsu wa Tsugitsugi Shindeiku",
  artist: "amazarashi",
  songImage: "https://i.scdn.co/image/ab67616d0000b2736e4097c323bcf34944870757",
  songLength: "5:55",
  songLink: "https://www.youtube.com/embed/Upvuj6GhAa4"
};

var Ignite = {
  songName:"Ignite",
  artist: "Aoi Eir",
  songImage: "https://i1.sndcdn.com/artworks-000094274643-85cqo7-t500x500.jpg",
  songLength: "4:07",
  songLink: "https://www.youtube.com/embed/mTCESSzPZSw"
};



// Make sure they match the same order as your array above

//retrieves data from local storages
function retriveAllInfo (){
var retrievedSongs = localStorage.getItem("songsStorage");
songs = JSON.parse(retrievedSongs);
var retrievedArtists = localStorage.getItem("artistStorage");
songArtist = JSON.parse(retrievedArtists);
var retrievedImages = localStorage.getItem("imageStorage");
songImage = JSON.parse(retrievedImages);
var retrievedLengths = localStorage.getItem("lengthStorage");
songLength = JSON.parse(retrievedLengths);
var retrievedLinks = localStorage.getItem("linkStorage");
songLink = JSON.parse(retrievedLinks);
}


function displaySongInfo() {
  // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
  for (let songTitles of songs) {
    $("#songs").append(songTitles + "<br>");
  }

  for (let artistNames of songArtist) {
    $("#artists").append(artistNames + "<br>");
  }

  for (let images of songImage) {
    $("#images").append("<img src='" + images + "'>");
  }

  for (let length of songLength) {
    $("#lengths").append(length + "<br>");
  }

  for (let link of songLink) {
    $("#links").append(
      "<iframe width='133' height='100' src ='" +
        link +
        "'>" +
        "</iframe>" +
        "<br>"
    );
  }
}


function emptySongInfo() {
  $("#song").empty();
  // Use jQuery to empty all of the remaining divs
  $("#artist").empty();
  $("#image").empty();
  $("#length").empty();
  $("#link").empty();
}

function addSongInfo() {
  // BELOW write the code to add new items to each of the arrays.
  let songTitleInput = $("#song").val();
  songs.push(songTitleInput);
  let songArtistInput = $("#artist").val();
  songArtist.push(songArtistInput);
  let imageInput = $("#image").val();
  songImage.push(imageInput);
  let songLengthInput = $("#length").val();
  songLength.push(songLengthInput);
  let songLinkInput = $("#link").val();
  let youtubeEmbedLink = songLinkInput.slice(32);
  songLink.push("https://www.youtube.com/embed/" + youtubeEmbedLink);
  storeAllInfo();
}

function storeAllInfo(){
   //store data locally
  localStorage.setItem("songsStorage", JSON.stringify(songs));
  localStorage.setItem("artistStorage", JSON.stringify(songArtist));
  localStorage.setItem("imageStorage", JSON.stringify(songImage));
  localStorage.setItem("lengthStorage", JSON.stringify(songLength));
  localStorage.setItem("linkStorage", JSON.stringify(songLink));
}

//adds song
$("#add").click(function() {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

//clears song storage
$("#clear").click(function(){
  localStorage.clear("songsStorage");
  localStorage.clear("artistStorage");
  localStorage.clear("imageStorage");
  localStorage.clear("lengthStorage");
  localStorage.clear("linkStorage");
});


displaySongInfo();

//picks a random number out of the number of available songs in songs
function pickRandomSong() {
  let arrayCount = songs.length;
  console.log(arrayCount);
  let randomNum = Math.floor(Math.random() * arrayCount);
  console.log(randomNum);
}
